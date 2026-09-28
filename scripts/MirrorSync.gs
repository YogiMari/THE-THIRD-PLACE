/**
 * THE THIRD PLACE — GitHub → Drive One-way Mirror
 *
 * 仕様: OP-008 Documentation System §27 Drive Mirror Operation
 *   - 自動同期は GitHub → Drive のみ（Drive → GitHub は行わない）
 *   - 同期対象: md / png / py
 *   - Mirror フォルダは GitHub の複製（参照用）。Contributions には触れない
 *
 * 必要な設定（Script Properties）:
 *   GITHUB_TOKEN = 読み取り専用の fine-grained PAT（Contents: Read-only）
 *
 * 初回手順:
 *   1) installTrigger() を実行（権限を承認）
 *   2) syncNow() を実行して初回同期
 */

const CONFIG = {
  OWNER: 'YogiMari',
  REPO: 'THE-THIRD-PLACE',
  BRANCH: 'main',
  PARENT_FOLDER_ID: '1qNdwj6g8ikCbNtS827hWNAhmqQ00xDDG', // THE THIRD PLACE（共有しない）
  MIRROR_FOLDER_NAME: 'Mirror', // 親フォルダ直下のフォルダ名（IDではなく名前で探す）
  EXTENSIONS: ['md', 'png', 'py'],
  STATE_FILE_NAME: '_mirror_state.json', // 親フォルダに保存（Mirrorの外）
  MAX_RUNTIME_MS: 5 * 60 * 1000, // GASの6分制限に対する安全マージン
  TRIGGER_MINUTES: 15,
};

const MIME_BY_EXT = {
  md: 'text/markdown',
  py: 'text/x-python',
  png: 'image/png',
};
const TEXT_EXTENSIONS = ['md', 'py'];

/** メイン：GitHub の最新状態を Mirror へ反映する */
function syncNow() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) {
    console.log('別の同期が実行中のため終了します。');
    return;
  }
  try {
    runSync_();
  } finally {
    lock.releaseLock();
  }
}

function runSync_() {
  const started = Date.now();
  const state = loadState_();
  const remote = listRepoFiles_(); // { path: blobSha }
  const mirrorRoot = getMirrorRoot_();
  const folderCache = { '': mirrorRoot };

  let updated = 0;
  let skipped = 0;
  let errors = 0;
  let timedOut = false;

  const paths = Object.keys(remote).sort();
  for (const path of paths) {
    if (Date.now() - started > CONFIG.MAX_RUNTIME_MS) {
      timedOut = true;
      break;
    }
    const prev = state.files[path];
    if (prev && prev.sha === remote[path] && isLiveFile_(prev.id)) {
      skipped++;
      continue;
    }
    try {
      const id = upsertFile_(path, prev, folderCache);
      state.files[path] = { sha: remote[path], id: id };
      updated++;
    } catch (e) {
      errors++;
      console.error('同期失敗: ' + path + ' — ' + e.message);
    }
  }

  // GitHub から消えたファイルはゴミ箱へ（完了時のみ）
  let removed = 0;
  if (!timedOut) {
    for (const path of Object.keys(state.files)) {
      if (!(path in remote)) {
        trashById_(state.files[path].id);
        delete state.files[path];
        removed++;
      }
    }
  }

  saveState_(state);
  console.log(
    '完了: 更新 ' + updated + ' / 変更なし ' + skipped + ' / 削除 ' + removed +
    ' / エラー ' + errors + (timedOut ? ' / 時間切れ（次回続行）' : '')
  );
}

/** 15分ごとの自動実行を登録する（既存の同期トリガーは置き換え） */
function installTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'syncNow') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('syncNow')
    .timeBased()
    .everyMinutes(CONFIG.TRIGGER_MINUTES)
    .create();
  console.log('トリガーを登録しました（' + CONFIG.TRIGGER_MINUTES + '分ごと）。');
}

/** 状態ファイルを削除し、次回 syncNow で全ファイルを再同期する */
function resetState() {
  const files = DriveApp.getFolderById(CONFIG.PARENT_FOLDER_ID)
    .getFilesByName(CONFIG.STATE_FILE_NAME);
  while (files.hasNext()) files.next().setTrashed(true);
  console.log('状態をリセットしました。次回の syncNow で全件を再同期します。');
}

// ---------- GitHub ----------

function getToken_() {
  const token = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  if (!token) throw new Error('Script Properties に GITHUB_TOKEN が設定されていません。');
  return token;
}

function ghFetch_(url, accept) {
  const res = UrlFetchApp.fetch(url, {
    method: 'get',
    muteHttpExceptions: true,
    headers: {
      Authorization: 'Bearer ' + getToken_(),
      Accept: accept,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  const code = res.getResponseCode();
  if (code !== 200) {
    throw new Error('GitHub API ' + code + ': ' + res.getContentText().slice(0, 200));
  }
  return res;
}

/** リポジトリ全体のファイル一覧（対象拡張子のみ）を { path: blobSha } で返す */
function listRepoFiles_() {
  const url = 'https://api.github.com/repos/' + CONFIG.OWNER + '/' + CONFIG.REPO +
    '/git/trees/' + encodeURIComponent(CONFIG.BRANCH) + '?recursive=1';
  const data = JSON.parse(ghFetch_(url, 'application/vnd.github+json').getContentText());
  if (data.truncated) {
    throw new Error('ファイル一覧が大きすぎて切り詰められました。分割取得の実装が必要です。');
  }
  const out = {};
  data.tree.forEach(function (item) {
    if (item.type === 'blob' && CONFIG.EXTENSIONS.indexOf(ext_(item.path)) >= 0) {
      out[item.path] = item.sha;
    }
  });
  return out;
}

function fetchRaw_(path) {
  const encoded = path.split('/').map(encodeURIComponent).join('/');
  const url = 'https://api.github.com/repos/' + CONFIG.OWNER + '/' + CONFIG.REPO +
    '/contents/' + encoded + '?ref=' + encodeURIComponent(CONFIG.BRANCH);
  return ghFetch_(url, 'application/vnd.github.raw');
}

// ---------- Drive ----------

/** 親フォルダ直下の Mirror フォルダを名前で取得する */
function getMirrorRoot_() {
  const parent = DriveApp.getFolderById(CONFIG.PARENT_FOLDER_ID);
  const it = parent.getFoldersByName(CONFIG.MIRROR_FOLDER_NAME);
  if (it.hasNext()) return it.next();
  const names = [];
  const all = parent.getFolders();
  while (all.hasNext()) names.push(all.next().getName());
  throw new Error(
    '親フォルダ内に「' + CONFIG.MIRROR_FOLDER_NAME + '」が見つかりません。存在するフォルダ: ' +
    (names.length ? names.join(', ') : '（なし）')
  );
}

/** ファイルを作成または更新し、DriveのファイルIDを返す */
function upsertFile_(path, prev, folderCache) {
  const parts = path.split('/');
  const name = parts.pop();
  const extension = ext_(name);
  const folder = ensureFolder_(parts, folderCache);
  const res = fetchRaw_(path);

  let file = prev ? getLiveFile_(prev.id) : null;
  if (!file) file = findByName_(folder, name); // 状態を失った場合の重複防止

  if (TEXT_EXTENSIONS.indexOf(extension) >= 0) {
    const text = res.getContentText('UTF-8');
    if (file) {
      file.setContent(text); // ファイルIDを維持したまま更新
    } else {
      file = folder.createFile(name, text, MIME_BY_EXT[extension]);
    }
  } else {
    const blob = res.getBlob().setName(name).setContentType(MIME_BY_EXT[extension]);
    if (file) file.setTrashed(true); // バイナリはIDが変わる
    file = folder.createFile(blob);
  }
  return file.getId();
}

function ensureFolder_(parts, cache) {
  let key = '';
  let current = cache[''];
  parts.forEach(function (part) {
    key = key ? key + '/' + part : part;
    if (!cache[key]) {
      const it = current.getFoldersByName(part);
      cache[key] = it.hasNext() ? it.next() : current.createFolder(part);
    }
    current = cache[key];
  });
  return current;
}

function findByName_(folder, name) {
  const it = folder.getFilesByName(name);
  return it.hasNext() ? it.next() : null;
}

function getLiveFile_(id) {
  try {
    const f = DriveApp.getFileById(id);
    return f.isTrashed() ? null : f;
  } catch (e) {
    return null;
  }
}

function isLiveFile_(id) {
  return getLiveFile_(id) !== null;
}

function trashById_(id) {
  const f = getLiveFile_(id);
  if (f) f.setTrashed(true);
}

// ---------- State ----------

function loadState_() {
  const it = DriveApp.getFolderById(CONFIG.PARENT_FOLDER_ID)
    .getFilesByName(CONFIG.STATE_FILE_NAME);
  if (!it.hasNext()) return { files: {} };
  try {
    const s = JSON.parse(it.next().getBlob().getDataAsString('UTF-8'));
    return s && s.files ? s : { files: {} };
  } catch (e) {
    return { files: {} };
  }
}

function saveState_(state) {
  const parent = DriveApp.getFolderById(CONFIG.PARENT_FOLDER_ID);
  const json = JSON.stringify(state);
  const it = parent.getFilesByName(CONFIG.STATE_FILE_NAME);
  if (it.hasNext()) {
    it.next().setContent(json);
  } else {
    parent.createFile(CONFIG.STATE_FILE_NAME, json, 'application/json');
  }
}

// ---------- Utility ----------

function ext_(path) {
  const i = path.lastIndexOf('.');
  return i < 0 ? '' : path.slice(i + 1).toLowerCase();
}

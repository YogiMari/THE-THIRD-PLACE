# KN Pages（KN四誌のデザイン切替版）制作材料

Heritage Chronicle（KN-001）／Cultural Pantheon（KN-002）／Beyond Journey（KN-003）／Atelier Discovery（KN-004）の公開ページ（Artifact）を、**原版＋5デザイン**の6種に切り替えられる形で作るための材料。タイトル（先頭の見出し）をクリックすると、原版→1→…→5→原版の順に切り替わる。画面下の「DESIGN」バー、キー`0`〜`5`、URLの`#s1`〜`#s5`でも切り替えられる。選択は`localStorage`（`kn-skin-<page>`）に記憶される。

## 何を置いているか／置いていないか

OP-008 §28により、KN四誌の本文（発行物）はGitHubに置かない。ここに置くのは、**本文を含まない制作材料だけ**である。

| 置いている | 内容 |
|---|---|
| `build.py` | 原版の骨格＋各デザインのCSS＋追加図版＋切替UIを1枚のHTMLに合成する |
| `pages/<page>.py` | ページごとの設定（追加する写真・帯・ギャラリー・図形の差し込み位置、デザイン名、フォント） |
| `skins/<page>_s1..s5.css` | 各デザインの見た目（20本） |
| `gfx.py` | デザインごとの図形（SVG）の部品 |
| `photos.json` | 追加した写真の出典（題・作者・ライセンス・ページ・寸法）。巻末のクレジット表示の元データ |
| `getphotos.py`／`commons.py` | 追加写真をWikimedia Commonsから探して取得する（CC BY／CC BY-SA／CC0／パブリックドメインのみ） |
| `restore_old.py` | 公開済みArtifactから、本文などの「原版の骨格」を復元する |
| `tools/` | 画面確認用（`shot.js`・`slice.py`・`render.sh`・`overflow.js`・`credits_check.js`・`titletest.js`） |

| 置いていない（`.gitignore`済み） | 理由 |
|---|---|
| `old/`（原版のマークアップ・スクリプト・埋め込み写真） | KN四誌の本文を含むため（OP-008 §28） |
| `photos/`（追加した写真のjpg、約3MB） | 第三者の写真。出典は`photos.json`に残り、公開済みArtifactが保管場所 |
| `out/`（生成したHTML、1〜2MB／ページ） | 生成物 |

## 作り直す手順

1. 公開済みArtifactの完全なHTMLを手元に保存する（`Artifact`の`read`をURL指定・`path`なしで呼ぶと、完全なHTMLの保存先が示される）。
2. 原版の骨格を復元する（リポジトリ直下で）：
   ```
   python3 scripts/kn_pages/restore_old.py chronicle <保存したHTML>
   ```
   `old/`と`photos/`ができる。復元は、追加要素（`x-new`クラスの要素、デザイン用CSS、切替スクリプト）を取り除くことで行う。
3. 材料を直す（デザイン＝`skins/`、差し込み＝`pages/`、切替＝`build.py`の`SKIN_JS`）。
4. 組み立てる：
   ```
   python3 scripts/kn_pages/build.py chronicle      # → scripts/kn_pages/out/chronicle.html
   ```
5. 画面確認：`tools/render.sh <page> <skin> [幅]`（Playwright＋Chromium）で全デザインのスクリーンショットを撮り、390px幅で横あふれがないこと（`tools/overflow.js`）、クレジットが出ること（`tools/credits_check.js`）、タイトルクリックで巡回すること（`tools/titletest.js`）を確かめる。
6. 公開：**既存の公開URLを指定して**上書きする（URLなしだと別ページができる）。公開後はDB-001「KN Publication Log」へ記録する。

復元の正しさは、2026-10-08に4誌とも「公開済みHTML → `restore_old.py` → `build.py`」で**元のHTMLとバイト単位で一致**することで確認している。

## 公開済みページ

公開先のURLは、MARI様が共有設定にした場合のみ記録する（OP-008 §28.4）。DB-001「KN Publication Log」を参照。

## 写真のクレジット

追加した写真（Wikimedia Commons）の題・作者・ライセンス・元ページは`photos.json`にある。各ページの新デザイン側の巻末に、同じ内容を出している。写真は推測で選ばず、出典を確かめられるものだけを使う。

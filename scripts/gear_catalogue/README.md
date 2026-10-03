# Gear Catalogue（ギア図鑑ページ）更新手順

所有ギア（Status = Owned）を一冊の図鑑にした単一HTMLページを、台帳から再生成する仕組み。
ページ自体はデータを持たない。**台帳（MD-004・MD-003）が正本**で、ページはその写し。

| ファイル | 役割 |
|---|---|
| `parse_ledger.py` | MD-004・MD-003 を読み、Owned のみ `owned.json` にする。台帳の価格注記が「公式価格・現行価格」なら暫定価格（‡）として印を付ける |
| `template.html` | ページ本体（デザイン・操作）。データ差し込み位置は `/*DATA*/` `/*PHOTOS*/` `/*META*/` |
| `photos.json` | ID ごとの画像ファイル名・切り抜き位置・出典・種別（Official store image / Reference image 等） |
| `build.py` | 上記を合成して `index.html` を作り、写真の過不足を検査する |

画像（`img/{ID}.jpg`、約23MB）は第三者の製品写真を含むため**リポジトリには置かない**。公開済みページ（Artifact）側が保管場所になる。

## 更新の流れ

1. **台帳を最新にする**（`origin/main`）。台帳を直した場合は、通常どおり先に台帳の更新（CLAUDE.md の手順）を済ませる。
2. **画像を手元に戻す**：公開済みArtifactの `img/` を取得する（`Artifact` の `read` に `paths`、または `list scope:files` で一覧→取得）。保存先を `site/img/` にする。
3. **ビルド**（リポジトリ直下で）：
   ```
   python3 scripts/gear_catalogue/build.py --out site
   ```
   `site/index.html`（公開用）と `site/preview.html`（ローカル確認用。文字コード・viewport 付き）ができる。「Registry as of」は実行日、Sources の版数は台帳ヘッダーから自動で入る。
4. **ビルド後の検査結果を見る**（終了コード1なら要対応）：
   - `NEW objects without a photo entry`：新しく Owned になったギア。画像を `site/img/{ID}.jpg` に置き、`photos.json` に1件追加する（形式は既存行と同じ。出典・種別を必ず書く。無い物は推測で埋めない）。
   - `photo entries for objects no longer Owned`：売却・Retired などになったギア。`photos.json` と画像を消す。
5. **見た目を確認する**：`preview.html` をローカルで開き、スマホ幅（390px）とPC幅で表紙・各ゾーン・スプレッド・Find を目視する（`playwright` + 同梱のChromiumで可）。表示に関わる変更をしたときは必ずスクリーンショットを撮る。
6. **公開**：`site/index.html` と `site/img/` を Artifact として公開する（`preview.html` と `owned.json` は公開しない）。既存ページの更新は、**既存の公開URLを指定して**上書きする（URL無しで公開すると別ページができる）。

## 画像を足す・差し替えるとき

- 取得できるのは公式ストア画像、または所有者が提供した画像のみ。出典 URL を `photos.json` の `credit` / `url` に残す。
- 提供画像で出典が不明なものは `credit` に「Supplied by the owner (original source not stated)」と書く。
- 白背景の画像は `bg` に `"white"` を指定すると切り抜き表示になる（既存行を参照）。
- 1枚は概ね 1200px 以内・300KB 前後に収める（`PIL` で `quality=72, optimize=True, progressive=True`）。

## 注意

- 価格は台帳に書かれたとおりに表示する。購入価格が公式価格より優先。複数ピースの品は台帳で合計として記録されている。
- 暫定価格（‡）を確定するには、台帳（MD-003 / MD-004）の価格欄と注記を購入価格に直す。ページ側の編集は不要。
- 台帳に無い情報（価格・出典・色など）をページ側で補わない。

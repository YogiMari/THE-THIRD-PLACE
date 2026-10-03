---
name: update-gear-catalogue
description: 台帳（MD-004・MD-003）の変更を、公開済みのギア図鑑ページ（Artifact）へ反映する。「図鑑を更新」「ギア図鑑を最新に」「図鑑ページを差し替えて」と言われたときに使う。
---

手順の正本は `scripts/gear_catalogue/README.md`。必ずそれを読んでから進める。

要点：
- 台帳が正本。`origin/main` の最新を取ってから `python3 scripts/gear_catalogue/build.py --out site` を実行する。
- 画像はリポジトリに無い。公開済みArtifactの `img/` を取得して `site/img/` に置く。
- ビルドの検査結果（新規Owned・Retired・画像欠け）を見て、`photos.json` と画像を整える。無い情報は推測で補わず、所有者に聞く。
- 公開は既存ページのURLを指定して上書きする（URL無しだと別ページができる）。公開前にスマホ幅のスクリーンショットで確認する。
- ページ更新で台帳は変更しない。台帳を直す場合は CLAUDE.md の手順（最新SHA取得・commit形式・再取得確認）に従う。

---
name: register-gear
description: MD-004のギア記録（Equipment ID）を新規登録・変更する。「ギアを登録」「IDを追加」「ProductをXに変更」「Priceを直して」「Colorを訂正」などと言われたときに使う。購入によるEssential→Ownedは reflect-purchase を使う。
---

規則の正本は OP-010 Part A（登録規則）と OP-008 §18.2・§12。ここには手順だけを書く。CLAUDE.md の作業原則（推測しない・最新SHA取得・再取得確認・commit後に報告）に従う。

対象外：Kitchen（MD-003）。Coffee は購入前は BR-002 / BR-003 のみで追跡し、**購入した時点（到着を待たない）で** `MD-004_COF_Coffee.md` へ Owned で登録する。番号は購入順ではなく BR-002 §Coffee Registry Order の順（OP-010 Part A §Coffee Domain Scope）。BR-003 の Acquisition Status（Already Owned）と同じ作業で更新する。

1. **最新を取る**：`origin/main` を取得し、`MD/MD-004/MD-004_{PFX}_*.md` の該当IDを読む。変更前の内容を控える。
2. **記録を直す**（登録内容は MARI様の指示・確認済みの情報のみ。無い情報は推測せず聞く）：
   - 形式：`## ID` 見出し、`**Brand**` `**Product**` `**Status**` は単独行で次行に値（検査がこの形式に依存する）。
   - 数量2以上は Price を合計額で書き、「（N個合計。1個¥X。MARI様確認）」と注記する。
   - Candidate は Brand・Product = Unconfirmed。Retired は IDを残す（IDは再利用しない）。
   - 親子は双方向（子の Parent と、親の Child Components の両方）。
3. **Version と履歴**：入口ファイル `MD-004_Equipment_Registry_Object_Reference.md` の Version を上げ、Version History に節を足す（日付・決定者・変更したID・変更前後）。部品ファイルは Version を持たない。
4. **連動文書**：変更したIDを `grep` し、MD-001・CZ-001・CZ-002・BR-002/003・OP-010 などに名称や Status を書き写した箇所があれば、同じ作業で更新するか MARI様へ報告する。
5. **検証**（`scripts/` にあるものを実行し、全てPASSを確認）：
   - `third_place_sync_validator.py`（引数は `.github/workflows/third-place-sync.yml` を参照）と `field_atlas_check.py`
   - `md004_integrity_check.py --md004 MD/MD-004 --base-ref origin/main`
   - `doc_catalogue_check.py`
6. **commit・PR**：commit形式 `Update MD-004: 変更内容`。ブランチを切ってPRにし、GitHub Actions のPASSを確認してから報告する。統合は MARI様の承認を待つ。
7. Owned の増減があるときは、`update-gear-catalogue` で図鑑ページの更新を案内する。

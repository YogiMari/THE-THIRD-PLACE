---
name: reflect-purchase
description: ギアの購入（Essential→Owned）を台帳へ反映し、CZ-001・CZ-002・MD-001 を同期する。「買った」「届いた」「購入したのでOwnedに」と言われたときに使う。Coffee・Kitchen は対象外。
---

記録の書き方は `register-gear`、規則の正本は OP-010 Part A。購入反映は連動先が多いので、ここでは同期の漏れを防ぐ手順だけを書く。

対象外：Coffee（BR-002 / BR-003 で購入を管理し、購入後に MD-004 COF-series へ新規登録 → `register-gear`）、Kitchen（MD-003）。

1. **購入内容を確認する**：どのID・数量・実際の購入価格か。価格は**購入価格を優先**し、不明なら聞く（公式価格で埋めない）。数量2以上は合計額で書く。
2. **MD-004**：Status を Owned に、Price を購入価格に更新する。Version と Version History も更新する（`register-gear` の 3）。
3. **CZ-001**：Confirmed — Purchase Pending から該当行を削除する。Version と履歴を更新する。
4. **CZ-002**：Current Watch List は未 Owned のみが対象。該当エントリを削除する（Watch List の変更はその節のみで行う）。Version と履歴を更新する。
5. **MD-001**：該当IDに「未所有・Status = Essential」の注記があれば外す（連動 Version も更新）。
6. **検証**：`third_place_sync_validator.py`（MD-004 ⇔ CZ-001 / CZ-002 / MD-001 の同期。引数は `.github/workflows/third-place-sync.yml` を参照）と `field_atlas_check.py`。`scripts/` に `md004_integrity_check.py`・`doc_catalogue_check.py` があれば、それも実行する。全て PASS を確認する。
7. **commit・PR**：commit形式 `Update MD-004: ...`（連動文書は `Sync CZ-001, CZ-002, MD-001 with MD-004 ...` の形）。PR を作り、Actions の PASS を確認してから報告する。統合は MARI様の承認を待つ。
8. 完了後、`update-gear-catalogue` で図鑑ページ（Owned の増加）の更新を案内する。

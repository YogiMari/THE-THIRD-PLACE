# CLAUDE.md — THE THIRD PLACE

<!-- Synced from: THE THIRD PLACE Conversation Constitution Ver.1.2 -->
<!-- Document numbering: renumbered 2026-09-19 (see OP-001 Constitution Ver.5.0 §27 / OP-008 Documentation System Ver.2.0) -->

このファイルは、Claude Codeがこのリポジトリを直接操作する際に自動的に読み込む運用指示書です。
DS/OP/DB/MD/BR/CZ/KN文書の内容そのものはここには含みません。各ファイルを直接参照してください。

## リポジトリの位置づけ

THE THIRD PLACE は、哲学駆動型アウトドア・ライフスタイル設計プロジェクトの正式資産管理リポジトリです。
本リポジトリ上のDS/OP/DB/MD/BR/CZ/KN文書およびDatabaseが、プロジェクトのSingle Source of Truth（SSOT）です。

## 文書体系

文書は可変性の度合いで、設計・運用・記録の3分類に区分される。正式な文書一覧はOP-008 Documentation System §8を参照すること。

- `DS/*.md` — 設計（絶対不変）: DS-001 THE THIRD PLACE Original
- `OP/*.md` — 運用（定義：不変だが改訂の可能性あり）: OP-001 Constitution, OP-002 Design Bible, OP-008 Documentation System 等（OP-001〜OP-009）
- 記録（可変）— 以下5系列
  - `DB/*.md` — Dashboard: DB-001 Project Ledger
  - `MD/*.md` — Master Data: MD-001 Storage Blueprint, MD-002 Field Atlas, MD-003 Galley Fare, MD-004 Equipment Registry
  - `BR/*.md` — Barista: BR-001 Brew Care, BR-002 Barista Codex, BR-003 Acquisition Handbook
  - `CZ/*.md` — Cross-Zone Ops: CZ-001 Deliberation Codex, CZ-002 Vigil Protocol
  - `KN/*.md` — Knowledge: KN-001 Heritage Chronicle, KN-002 Cultural Pantheon, KN-003 Beyond Journey, KN-004 Atelier Discovery
- 命名規則: `{SERIES}-{NUM}_Word_Word_Word.md`（アンダースコア区切り）
- 旧ID（TP/PX/TM）は2026-09-19に上記の新IDへ再編済み。各文書末尾のDocument Renumbering Noteに旧IDを記載している。

## Master Database

`MD/MD-004_Equipment_Registry_Object_Reference.md` を唯一のMaster Databaseとして扱う。

## 作業原則（絶対厳守）

1. 推測で情報を補完しない。不明な点は作業を止めて確認する。
2. 既存ファイルを更新する前に、必ず最新の内容と blob SHA を取得する。
3. 全文上書きを行う場合、既存の正式情報（Version, Status, Document ID, Schema等）を維持した状態で統合する。更新対象以外の内容を不用意に変更しない。
4. 更新後は必ず対象ファイルを再取得し、意図した内容になっていることを確認する。
5. 実際に commit の成功を確認するまで「更新済み」「反映済み」と報告しない。
6. Databaseのカラムは英語で統一する。ColorとMaterialは分離するプロジェクト。情報の重複を避ける。
7. ブランド・製品名は公式表記を用いる。コラボ表記は「販売元 × コラボブランド」の形式。
8. 評価基準は Design Bible / Foundation Compass に基づく。Popularity・SNS映え・レビュー数・希少性は評価基準にしない。
9. Kitchen Domain（KIT-series）は MD-004 の対象外。`MD/MD-003_Galley_Fare.md` で完結管理する。
10. Fire/Kitchen の境界判断は「用途基準」であり、燃料種別では判断しない。

## Git運用

- 対象ブランチ: `main`（直接更新可能な場合は main へ直接反映する）
- Commit message形式: `Update [文書ID]: [変更内容の要約]`
  - 例: `Update MD-004: Change LGT-028a status to Upgrade`
  - 例: `Sync BR-002 and BR-003`
- 大規模なDB全文書き換えを行う前は、書き込み前のファイル内容・SHAを控え、ロールバックに備える。
- 書き込み前に対象ファイルの最新SHAを取得し、書き込み後はcommit SHAとファイル内容を再確認する。

## このファイルに含まれないもの

- DS/OP/DB/MD/BR/CZ/KN各文書の実際の内容（各ファイルを直接読むこと）
- 過去の会話の経緯や議論の背景
- 個別の変更依頼内容（都度、作業指示として別途渡される）

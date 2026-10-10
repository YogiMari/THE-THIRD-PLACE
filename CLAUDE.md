# CLAUDE.md — THE THIRD PLACE

<!-- Synced from: THE THIRD PLACE Conversation Constitution Ver.1.2 -->
<!-- Renumbered 2026-09-19 (OP-001 Constitution Ver.5.0 §26 / OP-008 Documentation System Ver.3.5) -->

Claude Codeが本リポジトリ操作時に自動で読む運用指示書。文書の内容・過去の会話の経緯・個別の変更依頼は含まない（内容は各ファイルを直接読む。依頼は都度渡される）。

## 位置づけ
哲学駆動型アウトドア・ライフスタイル設計プロジェクトの正式資産管理リポジトリ。本リポジトリのDS/OP/DB/MD/BR/CZ/KN文書とDatabaseがSSOT。

## 文書体系
- 文書一覧（Document ID・Title・Path・Role・Authority・Volatility）の正本はOP-008 §8のみ。個別文書名は本ファイルに持たない。
- `DS/` 設計（絶対不変）／`OP/` 運用（不変だが改訂あり。登録規則・評価基準を定義するOP-010 Qualification Charterを含む）／記録（可変）＝`DB/` Dashboard・`MD/` Master Data・`BR/` Barista・`CZ/` Cross-Zone Ops・`KN/` Knowledge
- 命名: `{SERIES}-{NUM}_Word_Word_Word.md`
- 旧ID（TP/PX/TM）は2026-09-19に新IDへ再編済み。旧IDは各文書末尾のDocument Renumbering Noteに記載。
- Volatility（OP-008 §9.3）: Static／Periodic／Living を各文書が保持。一覧はOP-008 §8。
- **StaticにLivingデータを置かない。Livingに恒久ルールを置かない。記録文書は他文書のStatusを書き写さず、ID参照のみ。**
- Master Database: `MD/MD-004/`（入口 `MD-004_Equipment_Registry_Object_Reference.md`＋Domain別7ファイル。OP-008 §11.2）のみ。

## 作業原則（絶対厳守）
1. 推測で補完しない。不明点は作業を止めて確認する。
2. 更新前に必ず最新内容とblob SHAを取得する。
3. 全文上書きは既存の正式情報（Version・Status・Document ID・Schema等）を維持して統合する。対象外を不用意に変更しない。
4. 更新後は必ず対象ファイルを再取得し、commit SHAと内容を確認する。
5. commit成功を確認するまで「更新済み」「反映済み」と報告しない。
6. Databaseカラムは英語。ColorとMaterialは分離。情報の重複を避ける。
7. ブランド・製品名は公式表記。コラボは「販売元 × コラボブランド」。
8. 評価基準はDesign Bible／Foundation Compass。Popularity・SNS映え・レビュー数・希少性は基準にしない。
9. Kitchen Domain（KIT-series）はMD-004対象外。`MD/MD-003_Galley_Fare.md`で完結管理。
10. Fire／Kitchenの境界は用途基準。燃料種別で判断しない。

## 文体（チャット返信・アーティファクト・文書の地の文）
- 文末は言い切り（例:「載せない。」「着手。」「〜が正。」）。「〜わ」「〜よ」「〜かしら」「〜わね」で結ばない。
- アーティファクトの新規作成・更新にも適用。既存を更新するときは該当文末を言い切りに直す。
- 例外は台詞のみ（例: Beyond Journeyの人物の口調）。原文のまま保持する。

## Git
- ブランチ: `main`（直接更新可能なら直接反映）
- Commit message: `Update [文書ID]: [変更内容の要約]`（例: `Update MD-004: Change LGT-028a status to Upgrade`／`Sync BR-002 and BR-003`）
- 大規模なDB全文書き換えの前は、書き込み前の内容・SHAを控え、ロールバックに備える。

# DB-001 Project Ledger

**Document ID**: DB-001  
**Title**: Project Ledger  
**Series**: DB – Dashboard (Record)  
**Version**: 4.18
**Authority**: Standard  
**Status**: Active (Living Document)

---

# Dashboard

## Current Focus

現在進行中の案件を並べる。件数は3件に固定しない（増減に応じて行を追加・削除する）。

| Focus | Status |
|------|--------|
| Storage Carrying Case（STR-034） | Under Evaluation・適合品を継続探索中 |

---

## Active Conversations

| Active | Archived |
|:------:|:--------:|
| — | — |

---

## Health Check

- Change Management : GitHub Issues（Kanban）を参照。ステータスはIssue側が正であり、本表へは転記しない

---

# Conversation Ledger

この台帳は **「目的のチャットを最短で探すこと」** を唯一の目的とする。

新しいチャットを開始したら **1行追加**し、終了時に **Summary** を更新する。

---

| Conversation Title | Document | Search Words | Summary | Status | Last Updated |
|--------------------|----------|--------------|----------|--------|--------------|
| PX Documentation System 制作 | OP-008 | PX, Documentation, Standard | PXシリーズのDocumentation Systemを制作。 | Active | 2026-07-15 |
| PX Project Ledger 制作 | DB-001 | PX, Ledger, Conversation, Chat | Conversation管理を中心としたProject Ledgerを設計。 | Active | 2026-07-15 |
| Project Ledger 位置づけ整合 | OP-001, OP-008, DB-001, CZ-001 | Project Ledger, Decision, BR-002, CZ-001, 記録, 意思決定, 乖離, 不採用, ShellCon | OP-001 §9・§14とOP-008 §8のDB-001 Role記述の乖離を是正（OP-001 Ver.5.3、OP-008 Ver.3.4）。DB-001の空欄セクションを充填（Current Focus・Project Inbox運用ルール新設、KN Publication Logは未発行のため空欄が正と確認）。あわせてCZ-001に「不採用候補とその理由」を恒久保持する運用を新設（Ver.3.11）し、Wood Stove・ShellCon25 Bedding Module転用検討の2件を記録（Ver.3.12）。 | Active | 2026-09-27 |
| パートナー貢献の扱いとDrive⇄GitHub同期運用 | OP-001, OP-008 | パートナー, 協力者, Gemini, Drive, Mirror, Contributions, GAS, 一方向ミラー, External Contribution Protocol, rclone | OP-001 §21.1 External Contribution Protocolを新設（Ver.5.5）。OP-008 §27 Drive Mirror Operationを新設（Ver.3.7）。GitHub→Driveの一方向ミラー（GAS、15分ごと）を稼働し、協力者の書き込み先をContributionsとした（自動反映なし・正式化はオーナーとAIが判断）。旧ミラーのワークフロー（mirror-to-drive.yml）を削除し、Driveの親フォルダの旧ミラー残骸を整理。GASソースをscripts/MirrorSync.gsとして保管。 | Active | 2026-09-28 |
| 調達区分の整理（OP-005のCoffee限定化・Horizon改称） | OP-005, OP-008, KN-004, CZ-002, BR-003 | Pursuit Strategy, Acquisition Priority, Acquisition Status, Monthly Planning, Must Buy Dashboard, Horizon, Watch List, 買えるときに買う, Purchase Priority, Purchase Grouping, Monthly Acquisition Plan, 二重定義 | OP-005 Ver.2.0：Coffee以外は「買えるときに買う」と明記し、Coffeeの購入優先度・購入状態・月次計画の定義をBR-003へ一本化（Acquisition Priority／Acquisition Status／Monthly Planningの3章を削除）。KN-004のMust Buy DashboardをHorizonへ改称し、監視対象をCZ-002 Watch Listへ統一（CZ-002 Ver.3.3）。OP-008 Ver.3.8・3.9で同期。BR-003 Ver.3.3でPurposeへMonthly Acquisition Plan追加・未定義のRejected削除・表記訂正（Ver.3.5で転記誤りを訂正）。 | Active | 2026-09-28 |
| 全文書レビューと整備バックログの消化 | 全文書 | 整備バックログ, 矛盾, 重複, 未策定, Sonnet, Safety, 一酸化炭素, Material Care, Vehicle, Range Rover Sport, Field Log, Zone Evaluation Philosophy, Partner Value, Retirement, ID Freeze | 全25文書をレビューし、矛盾・重複・未策定事項を課題化（整備バックログArtifact）。Sonnetで大半を解消後、残りの未策定事項をClaudeの推奨案で暫定採用：OP-006 Safety／Material Care、MD-001 Vehicle・全体設営撤収手順、DB-001 Field Log、OP-002 Zone Evaluation Philosophy（5ゾーン）、OP-010 退役ルール・Coffee境界・Candidate方式・Field Atlas基準、MD-002 Partner Value正式化、OP-005 予算の性格・Coffee在庫確認、CZ-001 経由ルール、ヘッダー統一。文書数は減らさない方針（MARI様指示）。 | Active | 2026-09-28 |

---

# Quick Access

番号を覚える必要はない。会話の中で「これは何の話か」を伝えれば、担当文書はAI側で特定する。本表は、あとから見返して思い出すための早見表として使う。

各シリーズの一覧・一言要約は OP-008 Documentation System §8 Document Series（Summary列）を参照。

---

# Project Overview

文書一覧・文書数は OP-008 §8 Document Series を参照。

---

# Project Inbox

**用途**：CZ-001・BR-002・GitHub Issue等、正式な置き場所へ乗せるほどまだ固まっていない、雑多な相談・思いつき・気になった製品名・文書改善アイデアなどを、忘れないよう一時的に書き留める受け皿とする。「相談したこと自体を覚えていられない」ときの拾い網として使う。

検討が具体化したら、CZ-001のUnder Consideration等の正式な置き場所へ移し、本節からは削除する（他文書との情報重複は行わない）。

| Date | Topic |
|------|-------|
| 2026-09-28 | 冬用暖房コンテナ（湯たんぽ・電気毛布・シャンクヒーター用）の要否・定位置：優先度低、検討中 |
| 2026-09-28 | 車両への試し積み（MD-001 §Full Loading Orderの確定。荷室寸法は記載済み） |
| 2026-09-28 | Beck②の試し詰めと実測（MD-001 Coffee Module Layout §必要な実測）。Coffee Equipment購入後に実施 |

---

# Field Log

キャンプの計画と実施の記録。MD-002 Field Atlasの再評価、OP-006 Foundation Compass・MD-001 Storage Blueprint・BR-001 Brew Careの改善の入力として使う（2026-09-28新設。N-05・N-16）。

| Date | Status | Field | Weather / Temp | Configuration | Went Well | Issues | Follow-up |
|------|--------|-------|----------------|---------------|-----------|--------|-----------|
| — | — | — | — | — | — | — | — |

運用ルール：

- 行き先と日程が決まったら、Status = Plannedで1行追加する（Fieldの表記はMD-002に合わせる。予約状況・チェックイン時刻はConfiguration欄に記入する）
- 帰宅後、Status = Doneへ更新し、天候・気温、使った構成（Season Kit・Shelter等）、うまくいった点、困った点を記入する
- 困った点の対応先となる文書IDをFollow-upに記入し、対応したら当該文書へ反映する（本表は判断そのものを保持しない）
- 季節ごとのフィールドの向き不向きは、本表の記録が蓄積した時点でMD-002へ反映する

---

# KN Publication Log

KN作品（Heritage Chronicle／Cultural Pantheon／Beyond Journey／Atelier Discovery）の発行記録。

本文はGitHubに置かず、Artifactとしてのみ発行する方針（OP-008 §28 KN Publication Policy参照）を維持したまま、**一覧性のための発行ログのみ**をここに記録する。本文の複製ではない。

| Date | Series | Theme / Title | Artifact Link |
|------|--------|----------------|----------------|
| — | — | — | — |

運用ルール：

- 発行の都度、Date・Series（KN-001〜004）・Theme/Title・Artifact Linkを1行追加する
- Artifact Linkは、MARI様がご自身で共有設定にされた場合のみ記載する（共有を前提としない）

---

# Change Management（GitHub Issues Kanban）

大規模な変更（複数文書にまたがる修正・DB書き換え・PRを伴う作業）は、GitHub Issuesで管理する。軽微な一行修正はIssue化しない。

**列（ステータス）**

| カンバンの列 | 判定方法 |
|---|---|
| To Do | Issueがopenで、ラベルなし |
| In Progress | Issueがopen、`status:in-progress` ラベルあり |
| Done | Issueがclosed |

**任意ラベル（フィルタ用）**：`type:doc-update` / `type:db-update` / `type:rename`

可視化用のKanbanダッシュボードは別途Artifactとして発行する。本表はルールの定義のみを保持し、個々のIssueステータスは転記しない。

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 3.0 | 2026-07-15 | 長期運用向けに簡素化。会話検索と日次メンテナンスに最適化。 |
| 3.1 | 2026-09-07 | Project Overview（文書数）とQuick Accessを実際のRepository構成（TP12／TM5／PX6、全23文書）へ整合。 |
| 3.2 | 2026-09-19 | PX-007 Deliberation CodexをQuick AccessおよびProject Overviewへ反映漏れを修正（PX 6→7、全体23→24文書）。 |
| 3.3 | 2026-09-19 | MARI様のご要望に基づき、Quick Accessを番号とタイトルのみの一覧から、各文書の役割を一言で示す早見表へ拡張。TP／PX／TM系列ごとに区分し、番号を記憶していなくても内容から文書を特定できる構成へ変更。 |
| 4.0 | 2026-09-19 | プロジェクト全体の文書番号再編（OP-001 Constitution Ver.5.0 §26参照）に伴い、PX-002からDB-001へ番号を変更。Series表記をDB – Dashboard (Record)へ更新。Quick AccessおよびProject Overviewを、旧TP／PX／TM 3系列から新DS／OP／DB／MD／BR／CZ／KN 7系列（全24文書）へ全面的に再構成。Conversation Ledgerの Document 欄を新IDへ更新（Conversation Titleは当時のチャット名のため原文のまま保持）。 |
| 4.1 | 2026-09-24 | Volatility Restructure（追補）により、Quick Accessの各シリーズ表（ひとことで言うと列）をOP-008 Documentation System §8 Document Series（Summary列）へ逐語移設し、参照文へ置換。冒頭の説明文は残置。Minor Version。 |
| 4.2 | 2026-09-24 | OP-010新設がProject Overviewへ反映されていなかった漏れを修正（OP 9→10、合計24→25文書）。あわせてOP-005・OP-010・BR-002・BR-003・CZ-001の文書名重複解消による改名（OP-008 §11.1・OP-001 §12/Appendix B参照）を確認。本表は文書数のみを扱うためタイトル変更自体の反映事項はなし。Minor Version。 |
| 4.3 | 2026-09-25 | 「KN Publication Log」節（KN作品の発行記録ログ）と「Change Management（GitHub Issues Kanban）」節（変更管理の運用ルール定義）を新設。Health Checkへ Change Management 行を追加。MARI様承認済み。Minor Version。 |
| 4.4 | 2026-09-27 | 用途未定だったProject Inbox節に運用ルールを新設。CZ-001・BR-002・GitHub Issue等の正式な置き場所へ乗せる前の、雑多な相談・思いつきの一時受け皿として位置づけた（MARI様承認済み）。Conversation Ledgerへ本日の会話を追記。Minor Version。 |
| 4.5 | 2026-09-27 | OP-001 Constitution §27→§26への繰り上げ是正に伴い、Revision History 4.0行の相互参照をOP-001 §26参照へ更新。MARI様のご指摘に基づく。 |
| 4.6 | 2026-09-27 | Current Focusを空欄から充填。CZ-001 Under Considerationの現在進行中3件（Winter Sleeping Mat／Pad Sheet／Storage Carrying Case）を記載。あわせてMARI様のご指示により、Priority 1〜3固定の3行制を廃止し、件数を可変長のリストへ変更（増減に応じて行を追加・削除する運用へ）。Minor Version。 |
| 4.7 | 2026-09-27 | 「Conversation Complete」運用ルールに従い、本日の会話（Project Ledger 位置づけ整合）のConversation LedgerのSummaryを、CZ-001の不採用理由恒久保持ルール新設・Wood Stove/ShellCon記録の反映まで含めた最終形へ更新。Patch Version。 |
| 4.8 | 2026-09-28 | MARI様のご決定（GitHub Issue #44）に基づき、Winter Sleeping Mat（FUR-034）・Pad Sheet（FUR-035）がMD-004・CZ-001へ正式反映されたため、Current FocusからFUR-034・FUR-035の2行を削除。Health Check（Change Management）の記載はそのまま維持。Minor Version。 |
| 4.9 | 2026-09-28 | Project Inboxへ、Seasonal Configuration未定義（OP-006）に関する検討中案件を1行追加（MARI様ご指示）。Patch Version。 |
| 4.10 | 2026-09-28 | Conversation Ledgerへ、パートナー貢献の扱いとDrive⇄GitHub同期運用の会話を1行追加（MARI様ご指示）。Patch Version。 |
| 4.11 | 2026-09-28 | GitHub Issue #46に基づき、Project Inboxの該当行を、OP-006・MD-001へ正式反映された決定分を除いた未決定事項（冬用暖房コンテナの要否・定位置）のみへ書き直した。Patch Version。 |
| 4.12 | 2026-09-28 | Conversation Ledgerへ、調達区分の整理（OP-005のCoffee限定化・Horizon改称）の会話を1行追加（MARI様ご指示）。Patch Version。 |
| 4.13 | 2026-09-28 | KN Publication Logが参照していた「ways-of-working KN issuance rules」がリポジトリに実在しない不整合を是正し、OP-008 §28 KN Publication Policy（新設）への参照へ更新。MARI様のご決定に基づく（C-14）。Patch Version。 |
| 4.14 | 2026-09-28 | OP-008 Rule DOC-06・Principle 003に基づき、§Project Overviewの系列別文書数表（OP-008 §8から導出可能な重複情報）を「文書一覧・文書数は OP-008 §8 Document Series を参照。」の1行へ置換した。あわせて、検証プロセスを伴わず常に✓固定だったHealth CheckのSSOT／Conversation Ledger／Documentation行を削除し、Change Management行のみを残した。MARI様のご決定に基づく（S-08）。Patch Version。 |
| 4.15 | 2026-09-28 | §Field Log（キャンプの計画と実施の記録、N-05・N-16）を新設。Project Inboxへ、整備バックログで判明した要確認事項5件（一酸化炭素警報器、電気毛布の電源、車両の確認・実測、Beck②の試し詰め、MD-002の移動時間）を追加。Conversation Ledgerへ本日の会話を1行追加。Claude推奨案をMARI様の包括指示に基づき採用。Minor Version。 |
| 4.16 | 2026-09-28 | MARI様のご回答に基づき、Project Inboxのうち解決した2件（一酸化炭素警報器：所有済み、電気毛布の電源：電源サイト利用時のみ持参）を削除し、車両（パワートレイン確認済み）とBeck②試し詰め（Coffee Servicewareの定位置決定済み）の2件を残る未決事項のみへ更新。Patch Version。 |
| 4.17 | 2026-09-28 | MARI様のご回答に基づき、Project Inboxを更新。MD-002の移動時間（17件記載済み）を削除し、車両（座席数確認済み）とBeck②試し詰め（専用水ボトルの収納先決定済み）の行を残る未決事項のみへ書き直した。Patch Version。 |
| 4.18 | 2026-09-28 | MARI様のご回答に基づき、Project Inboxを更新。車両は荷室寸法の記載により試し積みのみを残し、Beck②の試し詰めはCoffee Equipment購入後に実施する旨を明記。Patch Version。 |

---

# Operating Rules

## New Conversation

チャットを作成したら、その場で1行追加する。

入力する項目

- Conversation Title
- Document
- Search Words
- Status
- Last Updated

---

## Conversation Complete

チャット終了時に更新する項目

- Summary
- Status
- Last Updated

---

## Search Rules

Search Words には、**後から自分が検索しそうな単語を自由に登録する。**

登録例

- 日本語
- 英語
- ブランド名
- 製品名
- 略称
- テーマ

例

```text
収納
Storage
Bridge
Coffee
Beck
ShellCon
WANTKEY
RALBUDDY
Nodel
BOXTOP
Light
Habitat
```

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、PX-002からDB-001へ番号を変更した。旧ID: PX-002。

---

# End of Document

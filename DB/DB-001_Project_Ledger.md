# DB-001 Project Ledger

**Document ID**: DB-001  
**Title**: Project Ledger  
**Series**: DB – Dashboard (Record)  
**Version**: 4.3  
**Authority**: Standard  
**Status**: Active (Living Document)

---

# Dashboard

## Current Focus

| Priority | Focus | Status |
|:--:|------|:--:|
| 1 | — | — |
| 2 | — | — |
| 3 | — | — |

---

## Active Conversations

| Active | Archived |
|:------:|:--------:|
| — | — |

---

## Health Check

- SSOT : ✓
- Conversation Ledger : ✓
- Documentation : ✓
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

---

# Quick Access

番号を覚える必要はない。会話の中で「これは何の話か」を伝えれば、担当文書はAI側で特定する。本表は、あとから見返して思い出すための早見表として使う。

各シリーズの一覧・一言要約は OP-008 Documentation System §8 Document Series（Summary列）を参照。

---

# Project Overview

| Series | Documents | Status |
|:------:|:---------:|:------:|
| DS | 1 | ✓ |
| OP | 10 | ✓ |
| DB | 1 | ✓ |
| MD | 4 | ✓ |
| BR | 3 | ✓ |
| CZ | 2 | ✓ |
| KN | 4 | ✓ |

合計 25 文書。

---

# Project Inbox

| Date | Topic |
|------|-------|
| — | — |

---

# KN Publication Log

KN作品（Heritage Chronicle／Cultural Pantheon／Beyond Journey／Atelier Discovery）の発行記録。

本文はGitHubに置かず、Artifactとしてのみ発行する方針（ways-of-working KN issuance rules参照）を維持したまま、**一覧性のための発行ログのみ**をここに記録する。本文の複製ではない。

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
| 4.0 | 2026-09-19 | プロジェクト全体の文書番号再編（OP-001 Constitution Ver.5.0 §27参照）に伴い、PX-002からDB-001へ番号を変更。Series表記をDB – Dashboard (Record)へ更新。Quick AccessおよびProject Overviewを、旧TP／PX／TM 3系列から新DS／OP／DB／MD／BR／CZ／KN 7系列（全24文書）へ全面的に再構成。Conversation Ledgerの Document 欄を新IDへ更新（Conversation Titleは当時のチャット名のため原文のまま保持）。 |
| 4.1 | 2026-09-24 | Volatility Restructure（追補）により、Quick Accessの各シリーズ表（ひとことで言うと列）をOP-008 Documentation System §8 Document Series（Summary列）へ逐語移設し、参照文へ置換。冒頭の説明文は残置。Minor Version。 |
| 4.2 | 2026-09-24 | OP-010新設がProject Overviewへ反映されていなかった漏れを修正（OP 9→10、合計24→25文書）。あわせてOP-005・OP-010・BR-002・BR-003・CZ-001の文書名重複解消による改名（OP-008 §11.1・OP-001 §12/Appendix B参照）を確認。本表は文書数のみを扱うためタイトル変更自体の反映事項はなし。Minor Version。 |
| 4.3 | 2026-09-25 | 「KN Publication Log」節（KN作品の発行記録ログ）と「Change Management（GitHub Issues Kanban）」節（変更管理の運用ルール定義）を新設。Health Checkへ Change Management 行を追加。MARI様承認済み。Minor Version。 |

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

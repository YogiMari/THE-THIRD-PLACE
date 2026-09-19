# PX-002 Project Ledger

**Document ID**: PX-002  
**Title**: Project Ledger  
**Series**: PX – Project  
**Version**: 3.3  
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

---

# Conversation Ledger

この台帳は **「目的のチャットを最短で探すこと」** を唯一の目的とする。

新しいチャットを開始したら **1行追加**し、終了時に **Summary** を更新する。

---

| Conversation Title | Document | Search Words | Summary | Status | Last Updated |
|--------------------|----------|--------------|----------|--------|--------------|
| PX Documentation System 制作 | PX-001 | PX, Documentation, Standard | PXシリーズのDocumentation Systemを制作。 | Active | 2026-07-15 |
| PX Project Ledger 制作 | PX-002 | PX, Ledger, Conversation, Chat | Conversation管理を中心としたProject Ledgerを設計。 | Active | 2026-07-15 |

---

# Quick Access

番号を覚える必要はない。会話の中で「これは何の話か」を伝えれば、担当文書はAI側で特定する。本表は、あとから見返して思い出すための早見表として使う。

## TP Series — 設計・思想（何を、どう作るか）

| ID | Document | ひとことで言うと |
|----|----------|----------|
| TP-000 | THE THIRD PLACE Original | 不変の人生哲学の原典。プロジェクトの出発点となった考え方そのもの |
| TP-001 | Constitution | プロジェクト全体の最高位規則書。文書体系・SSOT・GitHub運用ルールを定義 |
| TP-002 | Design Bible | 空間づくりの設計思想 |
| TP-003 | Field Atlas Landscape Framework | キャンプ場・ロケーションの選定と評価 |
| TP-004 | Equipment Registry Object Reference | 所有物・購入予定ギアの唯一の台帳（キッチン以外） |
| TP-005 | Acquisition Strategy | 何を・いつ・どんな基準で迎えるかの戦略と月間予算 |
| TP-006 | Foundation Compass | 積載・設営・撤収・季節ごとの運用のしかた |
| TP-007 | Habitat Architecture | 現地で完成する暮らしの空間そのものの設計思想 |
| TP-008 | Affinity Lexicon | 好み・美意識を表す語彙辞典 |
| TP-009 | Aesthetic Grammar | 「なぜそれが美しいのか」を説明する法則集 |
| TP-010 | Storage Blueprint | 収納・コンテナの割り当てルール |
| TP-011 | Galley Fare | キッチン道具だけの独立した台帳 |

## PX Series — 運用・調達（どう進めるか）

| ID | Document | ひとことで言うと |
|----|----------|----------|
| PX-001 | Documentation System | 文書運用ルールそのものの基準書 |
| PX-002 | Project Ledger | この文書。会話履歴・早見表・運用ダッシュボード |
| PX-003 | Vigil Protocol | 欲しいギアの市場監視・パトロールの実行手順 |
| PX-004 | Barista Codex | コーヒー機材の意思決定文書 |
| PX-005 | Acquisition Handbook | コーヒー機材の調達先・価格・購入計画 |
| PX-006 | Brew Care | コーヒー機材のお手入れ・洗浄・保管ルール |
| PX-007 | Deliberation Codex | コーヒー以外のゾーンで検討中のギアの比較・検討記録 |

## TM Series — 記録・メディア（残す、伝える）

| ID | Document | ひとことで言うと |
|----|----------|----------|
| TM-001 | Heritage Chronicle | プロジェクトの歴史・決定理由のアーカイブ |
| TM-002 | Atelier Discovery | 市場・ブランドの「今」を観測するリサーチメディア |
| TM-003 | Beyond Journey | キャンプを超えたデザイン文化を紹介するカルチャーマガジン |
| TM-004 | Cultural Pantheon | ブランドの文化・背景・系譜のアーカイブ |
| TM-005 | Search Doctrine | 調査の哲学・方法論 |

---

# Project Overview

| Series | Documents | Status |
|:------:|:---------:|:------:|
| TP | 12 | ✓ |
| TM | 5 | ✓ |
| PX | 7 | ✓ |

---

# Project Inbox

| Date | Topic |
|------|-------|
| — | — |

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 3.0 | 2026-07-15 | 長期運用向けに簡素化。会話検索と日次メンテナンスに最適化。 |
| 3.1 | 2026-09-07 | Project Overview（文書数）とQuick Accessを実際のRepository構成（TP12／TM5／PX6、全23文書）へ整合。 |
| 3.2 | 2026-09-19 | PX-007 Deliberation CodexをQuick AccessおよびProject Overviewへ反映漏れを修正（PX 6→7、全体23→24文書）。 |
| 3.3 | 2026-09-19 | MARI様のご要望に基づき、Quick Accessを番号とタイトルのみの一覧から、各文書の役割を一言で示す早見表へ拡張。TP／PX／TM系列ごとに区分し、番号を記憶していなくても内容から文書を特定できる構成へ変更。 |

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

# End of Document
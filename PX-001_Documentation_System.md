PX-001 Documentation System
# PX-001 Documentation System

**Document ID**: PX-001  
**Title**: Documentation System  
**Series**: PX – Project  
**Version**: 1.0  
**Authority**: Standard  
**Status**: Active  
**Owner**: THE THIRD PLACE Project

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | 2026-07-15 | Initial release. Documentation System migrated into the PX Series as the official operational standard for THE THIRD PLACE Project. |

---

# 1. Purpose

本書は、THE THIRD PLACE Project における文書体系および運用基準を定義する。

TP・TM・PX の各シリーズが長期にわたり一貫した構造で運用されることを目的とする。

本書は、文書の役割、分類、管理方法および運用ルールを定義する PX シリーズの基準文書である。

---

# 2. Scope

本書は、THE THIRD PLACE Project に存在するすべての正式文書へ適用する。

## Included

- TP Series
- TM Series
- PX Series

## Excluded

- 一時メモ
- 作業メモ
- 個人的なメモ
- 試験用ドラフト
- 非公開作業資料

---

# 3. Terms and Definitions

本書で使用する主要用語を定義する。

| Term | Definition |
|------|------------|
| Document | THE THIRD PLACE を構成する正式文書 |
| Series | TP・TM・PX の文書群 |
| Authority | 文書の権限区分 |
| Status | 文書のライフサイクル状態 |
| SSOT | Single Source of Truth（唯一の正本） |
| Reference | 他文書への参照情報 |
| Revision | 文書の改訂履歴 |
| Governance | 文書運用ルール |
| Lifecycle | 文書の状態遷移 |

---

# 4. Project Architecture

THE THIRD PLACE Project は、3つの独立したシリーズで構成される。

```text
THE THIRD PLACE

├── TP
│     Design
│
├── TM
│     Media
│
└── PX
      Project
```

各シリーズは独立した責任範囲を持ち、相互に役割を侵害してはならない。

---

# 5. Series Responsibilities

## TP — Design

TPシリーズは、THE THIRD PLACEそのものを設計する。

対象

- Design Philosophy
- Constitution
- Design Rules
- Master Data
- Equipment
- Architecture
- Design Standards

TPシリーズは運用ルールを定義しない。

---

## TM — Media

TMシリーズは、THE THIRD PLACE の活動・発見・記録を保存する。

対象

- Chronicle
- Discovery
- Journey
- Cultural Reference

TMシリーズは設計基準および運用基準を定義しない。

---

## PX — Project

PXシリーズは、THE THIRD PLACE Project の運用を定義する。

対象

- Documentation
- Governance
- Workflow
- Project Management
- Document Management
- Version Management

PXシリーズは設計思想・世界観・記録を保持しない。

---

# 6. Responsibility Matrix

| Series | Responsibility | Not Responsible For |
|---------|----------------|---------------------|
| TP | Design | Project Operation |
| TM | Media | Design Standards |
| PX | Project Operation | Design Philosophy / Records |

各シリーズは、自身の責任範囲のみを保持する。

機能重複は禁止する。

---

# 7. Project Principles

PXシリーズは以下の原則に従う。

## Principle 001

One Document, One Responsibility

一つの文書は、一つの責任のみを持つ。

---

## Principle 002

No Functional Overlap

既存文書と役割が重複する新規文書を作成してはならない。

---

## Principle 003

Single Source of Truth

同一情報は一箇所のみで管理する。

重複管理は禁止する。

---

## Principle 004

Human First

人が迷わず利用できる構造を最優先とする。

---

## Principle 005

AI Friendly

見出し・用語・構造を統一し、AIが一貫して解釈できる構造を維持する。

---

# 8. Document Series

## TP Series

Design Documents

- TP-000
- TP-001
- TP-002
- TP-003
- TP-004
- TP-005
- TP-006
- TP-007
- TP-008
- TP-009

---

## TM Series

Media Documents

- TM-001
- TM-002
- TM-003
- TM-004

---

## PX Series

Project Documents

- PX-001 Documentation System
- PX-002 Project Ledger

Reserved

- PX-003 Workflow Standard
- PX-004 Metadata Standard
- PX-005 Change Log
- PX-006 Release Notes
- PX-007 Reserved

# 9. Document Classification

すべての正式文書は、Authority および Status を保持する。

Authority は文書の役割を示し、Status は文書の現在の状態を示す。

Authority と Status は独立して管理する。

---

## 9.1 Authority

| Authority | Description |
|-----------|-------------|
| SSOT | 唯一の正本。唯一の管理元となる文書。 |
| Standard | プロジェクト標準を定義する文書。 |
| Reference | 補足資料・参考資料。 |
| Archive | 過去の履歴として保存する文書。 |

Authority は発行後、原則として変更しない。

---

## 9.2 Status

| Status | Description |
|---------|-------------|
| Draft | 作成中 |
| Review | レビュー中 |
| Active | 正式運用中 |
| Archive | 保存済み |
| Deprecated | 廃止済み |

Status は文書ライフサイクルに従って変更する。

---

# 10. Document Lifecycle

正式文書は以下のライフサイクルに従う。

```text
Draft

↓

Review

↓

Active

↓

Archive

↓

Deprecated
```

文書は削除しない。

履歴を保持することを優先する。

---

# 11. Naming Convention

文書番号はシリーズごとに採番する。

```
Series-Number Document Title
```

例

```
TP-004 Equipment Registry Object Reference

TM-001 Heritage Chronicle

PX-001 Documentation System
```

文書公開後は、Document ID を変更してはならない。

Title の変更は必要最小限とする。

---

# 12. Version Policy

Version は Semantic Versioning の考え方を採用する。

---

## Major Version

文書構造・責任範囲・仕様変更。

例

```
1.0 → 2.0
```

---

## Minor Version

章追加・機能追加・構成追加。

例

```
2.0 → 2.1
```

---

## Patch Version

誤字修正・文章修正・軽微修正。

例

```
2.1.0 → 2.1.1
```

---

# 13. Single Source of Truth

同じ情報は複数の文書で管理してはならない。

情報は一つの SSOT のみが保持する。

参照は自由に行ってよい。

複製は禁止する。

---

## SSOT Examples

| Information | SSOT |
|-------------|------|
| Equipment | TP-004 |
| Design Philosophy | TP-002 |
| Project Documentation | PX-001 |
| Project Status | PX-002 |

---

# 14. Cross References

文書間の関係は Reference によって表現する。

本文を複製してはならない。

必要な情報は、責任を持つ文書を参照する。

---

## Reference Rules

許可される例

```
See TP-004 Equipment Registry Object Reference.
```

禁止例

TP-004 の内容を別文書へコピーして保持すること。

---

# 15. Document Dependencies

文書間には依存関係が存在する。

依存関係は Project Ledger にて管理する。

Documentation System は依存関係を定義するが、

依存情報そのものは保持しない。

---

# 16. Document Ownership

各文書には一つの責任を持つ。

複数文書が同じ責任を持ってはならない。

責任が重複する場合、

新規文書ではなく既存文書を更新する。

---

# 17. Reserved Numbers

未使用番号は将来利用のため保持する。

欠番は原則として作らない。

不要になった番号も再利用しない。

Document ID は永続的な識別子とする。


# 18. Governance

すべての正式文書は、本章で定義する運用手順に従う。

---

## 18.1 Document Creation

新規文書を作成する前に、以下を確認する。

1. 既存文書で対応できないこと
2. TP・TM・PX のいずれに属するか
3. 責任範囲が既存文書と重複しないこと
4. Document ID を採番すること
5. Project Ledger へ登録すること

これらを満たした場合のみ、新規文書を発行する。

---

## 18.2 Document Update

文書を更新した場合は、Version を更新する。

更新内容は Revision History に記録する。

Project Ledger を運用している場合は、更新内容を反映する。

---

## 18.3 Document Retirement

不要となった文書は削除しない。

Status を Archive または Deprecated に変更し、履歴として保持する。

---

# 19. PX Operating Rules

PXシリーズは以下の運用ルールに従う。

---

## Rule PX-001

PXシリーズは、プロジェクト運用のみを対象とする。

設計思想・世界観・活動記録は保持しない。

---

## Rule PX-002

TP・TM・PX の責任範囲を侵害してはならない。

---

## Rule PX-003

Project Ledger はプロジェクトの運用状況を管理する。

Documentation System は運用ルールを管理する。

両者の役割を混在させてはならない。

---

## Rule PX-004

正式文書は必ず Documentation System に従う。

例外を設けない。

---

## Rule PX-005

すべての文書は References を用いて相互参照する。

本文の複製は禁止する。

---

## Rule PX-006

Project Ledger は唯一の運用ダッシュボードとする。

文書一覧・Conversation・Current Focus などの運用情報は Project Ledger が管理する。

Documentation System は保持しない。

---

## Rule PX-007

Conversation は履歴として保持する。

チャットを削除した場合でも、

Project Ledger 上では履歴を残すことを推奨する。

---

## Rule PX-008

Project Ledger は Living Document として運用する。

Documentation System は Standard Document として運用する。

---

# 20. Quality Principles

PXシリーズは以下を品質基準とする。

- Readability
- Consistency
- Maintainability
- Traceability
- Scalability

これらを満たすことを優先し、

文書量を増やすことを目的としない。

---

# 21. Documentation Principles

PXシリーズは、

「読むため」ではなく、

「運用するため」の文書である。

したがって、

- 曖昧な表現
- 解釈が複数存在する表現
- 感想
- 思想
- コラム

は記載しない。

必要事項のみを定義する。

---

# 22. Project Management Principles

PXシリーズは、

プロジェクト全体の運用効率を向上させることを目的とする。

文書は増やすためではなく、

管理を簡潔にするために存在する。

そのため、

新規文書を追加する前に、

既存文書への統合を優先する。

---

# 23. Change Management

Project Structure を変更する場合は、

Documentation System を最初に更新する。

その後、

Project Ledger、

関連文書、

Reference を更新する。

Documentation System を更新せずに構造変更を行ってはならない。

# 24. References

## Primary Documents

### TP Series

- TP-001 Constitution
- TP-002 Design Bible
- TP-003 Field Atlas Landscape Framework
- TP-004 Equipment Registry Object Reference
- TP-005 Acquisition Strategy
- TP-006 Foundation Compass
- TP-007 Habitat Architecture
- TP-008 Affinity Lexicon
- TP-009 Aesthetic Grammar

---

### TM Series

- TM-001 Heritage Chronicle
- TM-002 Atelier Discovery
- TM-003 Beyond Journey
- TM-004 Cultural Reference

---

### PX Series

- PX-001 Documentation System
- PX-002 Project Ledger

---

# 25. Compliance

すべての正式文書は、本書で定義する運用基準へ準拠する。

Documentation System は PX シリーズの基準文書であり、

Project 全体の Documentation Standard として位置付ける。

本書と矛盾する運用が存在する場合は、

Documentation System を優先する。

---

# 26. Future Expansion

PXシリーズは、

THE THIRD PLACE Project の運用状況に応じて拡張する。

将来的な PX 文書は、

本書の構造および運用ルールへ従うこと。

Reserved IDs は必要時のみ使用する。

不要な PX 文書は追加しない。

---

# Appendix A — Series Summary

| Series | Purpose | Responsibility |
|---------|----------|----------------|
| TP | Design | プロジェクトを設計する |
| TM | Media | プロジェクトを記録する |
| PX | Project | プロジェクトを運用する |

---

# Appendix B — Authority Summary

| Authority | Purpose |
|-----------|---------|
| SSOT | 唯一の正本 |
| Standard | プロジェクト標準 |
| Reference | 補足資料 |
| Archive | 履歴保存 |

---

# Appendix C — Status Summary

| Status | Description |
|---------|-------------|
| Draft | 作成中 |
| Review | レビュー中 |
| Active | 正式運用中 |
| Archive | 保存文書 |
| Deprecated | 廃止文書 |

---

# Appendix D — Document Lifecycle

```text
Draft
   │
   ▼
Review
   │
   ▼
Active
   │
   ├──────────────┐
   ▼              │
Archive           │
                  │
                  ▼
            Deprecated
```

---

# Appendix E — Documentation Philosophy

THE THIRD PLACE Documentation System は、

文書を増やすことを目的としない。

目的は、

- 情報を整理すること
- 情報を維持すること
- 情報を継続できること

である。

Documentation は資産であり、

Project を長期的に維持するための基盤である。

---

# End of Document

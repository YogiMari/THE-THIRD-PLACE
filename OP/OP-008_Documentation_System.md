# OP-008 Documentation System

**Document ID**: OP-008  
**Title**: Documentation System  
**Series**: OP – Operation (Definition)  
**Version**: 3.0
**Authority**: Standard  
**Status**: Active  
**Owner**: THE THIRD PLACE Project

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | 2026-07-15 | 初版。Documentation SystemをPXシリーズへ移行し、THE THIRD PLACE Projectの正式な運用標準として採用。 |
| 1.1 | 2026-09-07 | Document Series一覧(§8)とReferences(§24)を実際のRepository構成へ整合。TP-010・TP-011、TM-005、PX-003〜PX-006を追加。 |
| 1.2 | 2026-09-19 | Document Series一覧(§8)の反映漏れを修正。PX-007を「Reserved」からPX-007 Deliberation Codex（正式発行済み）へ更新。 |
| 2.0 | 2026-09-19 | プロジェクト全体の文書番号再編（Constitution OP-001 Ver.5.0参照）に伴い、TP-001からOP-008へ番号を変更。本書が定義する文書体系そのものを、旧TP／PX／TM 3系列から、新DS／OP／記録（DB・MD・BR・CZ・KN）系列へ全面的に再構築した（Major Version）。§4 Project Architecture、§5 Series Responsibilities、§6 Responsibility Matrix、§8 Document Series、§11 Naming Convention、§13 SSOT Examples、§14 Reference Rules、§24 Referencesを新体系へ更新。§19の運用ルール番号を、もはや存在しないPX接頭辞から独立したDOC番号へ改称。 |
| 3.0 | 2026-09-24 | Volatility Restructure。§8 Document Seriesを唯一の文書カタログへ拡張（Document ID／Title／Path／Role／Authority／Volatility列を新設、OP-010を追加）。§9にVolatility区分（Static／Periodic／Living）を新設。§24 Referencesの文書一覧を§8参照の1行へ置換。Rule DOC-06の自己矛盾を解消。責任範囲の変更のためMajor Version。 |

---

# 1. Purpose

本書は、THE THIRD PLACE Project における文書体系および運用基準を定義する。

DS・OP・記録（DB・MD・BR・CZ・KN）の各系列が長期にわたり一貫した構造で運用されることを目的とする。

本書は、文書の役割、分類、管理方法および運用ルールを定義する、文書体系そのものの基準文書である。

---

# 2. Scope

本書は、THE THIRD PLACE Project に存在するすべての正式文書へ適用する。

## Included

- DS Series
- OP Series
- 記録（DB・MD・BR・CZ・KN Series）

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
| Series | DS・OP・記録（DB・MD・BR・CZ・KN）の文書群 |
| Authority | 文書の権限区分 |
| Status | 文書のライフサイクル状態 |
| SSOT | Single Source of Truth（唯一の正本） |
| Reference | 他文書への参照情報 |
| Revision | 文書の改訂履歴 |
| Governance | 文書運用ルール |
| Lifecycle | 文書の状態遷移 |

---

# 4. Project Architecture

THE THIRD PLACE Project は、可変性の度合いによって区分された系列で構成される。

```text
THE THIRD PLACE

├── DS
│     設計（絶対不変）
│
├── OP
│     運用（定義：不変だが改訂の可能性あり）
│
└── 記録（可変）
      │
      ├── DB   Dashboard
      ├── MD   Master Data
      ├── BR   Barista
      ├── CZ   Cross-Zone Ops
      └── KN   Knowledge
```

各系列は独立した責任範囲を持ち、相互に役割を侵害してはならない。

---

# 5. Series Responsibilities

## DS — Design（絶対不変）

DSシリーズは、THE THIRD PLACEの不変の思想的原典を保持する。

対象

- Human Principlesの原典的記述

DSシリーズは、通常の意思決定プロセスによる改訂を前提としない。

---

## OP — Operation（定義）

OPシリーズは、THE THIRD PLACEの設計思想・規則・法則そのものを定義する。

対象

- Constitution
- Design Philosophy
- Design Rules
- Vocabulary / Grammar
- Documentation Governance
- Research Methodology

OPシリーズは、Versionは改訂されるが、個別データの入れ替えは伴わない。

---

## 記録（DB・MD・BR・CZ・KN）— Record（可変）

記録系列は、THE THIRD PLACE Project の運用データ・所有物・意思決定・アーカイブを保持する。

対象

- Dashboard（運用管理そのもの）
- Master Data（所有物・場所の台帳）
- Barista（コーヒー機材の意思決定・調達・手入れ）
- Cross-Zone Ops（コーヒー以外のゾーンの検討・市場監視）
- Knowledge（知の蓄積・文化アーカイブ）

記録系列は、設計思想そのものを定義しない。

---

# 6. Responsibility Matrix

| Series | Responsibility | Not Responsible For |
|---------|----------------|---------------------|
| DS | 不変の思想原典 | Project Operation / Records |
| OP | 設計・規則の定義 | Project Operation Data |
| 記録（DB/MD/BR/CZ/KN） | Project Operation / Records | Design Philosophy |

各系列は、自身の責任範囲のみを保持する。

機能重複は禁止する。

---

# 7. Project Principles

文書体系は以下の原則に従う。

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

文書カタログ（文書一覧）は本節を唯一の正本（SSOT）とする。

各文書の Role（役割説明）は OP-001 Constitution §13.2〜13.18 より逐語移設したものである（移設元には参照のみ残す。詳細は Revision History 参照）。

Authority 列は本 Version（3.0）で新設された分類であり、既存の文書内 Authority 宣言（BR-001／DB-001／OP-008）以外は Claude による提案区分である。マージ前に MARI 様の確認・修正を要する（PR 本文の提案根拠を参照）。

| Document ID | Title | Path | Role | Authority | Volatility |
|---|---|---|---|---|---|
| DS-001 | THE THIRD PLACE Original | `DS/DS-001_Original.md` | (role text is not catalogued in OP-001 §13.2–13.18; see OP-001 §13.0 in its original position) | SSOT | Static |
| OP-001 | Constitution | `OP/OP-001_Constitution.md` | 管理対象<br>・Human Principles<br>・Project Principles<br>・Document Architecture<br>・Project Governance | Standard | Static |
| OP-002 | Design Bible | `OP/OP-002_Design_Bible.md` | 管理対象<br>・空間思想<br>・デザイン原理<br>・空間全体の完成定義 | SSOT | Static |
| OP-003 | Affinity Lexicon | `OP/OP-003_Affinity_Lexicon.md` | 管理対象<br>Affinity Lexiconは、<br>Human Principlesから派生する<br>「好み」<br>を管理する文書である。<br>対象は、<br>ブランドではない。<br>美意識でもない。<br>人生を通して蓄積される<br>嗜好、<br>感性、<br>建築、<br>家具、<br>文化、<br>色、<br>素材、<br>音、<br>香り、<br>思想、<br>世界観<br>などを体系的に記録する。<br>Affinity Lexiconは、<br>Design Bibleを変更する権限を持たない。<br>Human Principlesを説明する補助資料として扱う。 | Standard | Static |
| OP-004 | Aesthetic Grammar | `OP/OP-004_Aesthetic_Grammar.md` | 管理対象<br>・比率<br>・余白<br>・光と陰影<br>・素材と質感<br>・色<br>・構成と動線<br>・調和<br>Aesthetic Grammarは、<br>Affinity Lexiconが定義する語彙に、<br>「なぜ美しいのか」という法則を与える。 | Standard | Static |
| OP-005 | Acquisition Strategy | `OP/OP-005_Acquisition_Strategy.md` | 管理対象<br>・Acquisition Priority（Must Buy／High／Medium／Low）<br>・Acquisition Status（Planned／Watching／Ready／Acquired）<br>・月間予算<br>・市場監視<br>Acquisition Strategyは、<br>Equipment Registryの情報を基準に、<br>取得順序・取得時期を管理する。<br>Equipmentの詳細情報は保持しない。 | Standard | Static |
| OP-006 | Foundation Compass | `OP/OP-006_Foundation_Compass.md` | 管理対象<br>・Equipment Module<br>・Vehicle Loading<br>・Deployment Sequence<br>・Recovery Sequence<br>・Seasonal Configuration<br>・Maintenance Cycle<br>Containerごとの具体的な役割・固定収納物は、<br>MD-001 Storage Blueprintが管理する。<br>本書では重複して記載しない。 | Standard | Static |
| OP-007 | Habitat Architecture | `OP/OP-007_Habitat_Architecture.md` | 管理対象<br>・居住空間<br>・サイト構成<br>・ゾーニング<br>・空間構成 | Standard | Static |
| OP-008 | Documentation System | `OP/OP-008_Documentation_System.md` |  | Standard | Static |
| OP-009 | Search Doctrine | `OP/OP-009_Search_Doctrine.md` | 管理対象<br>・調査の哲学・方法論<br>・情報源の優先順位<br>・Difference Analysis手法<br>監視対象（Watch List）・調査キーワード自体は、<br>CZ-002 Vigil Protocolが管理する。 | Standard | Static |
| OP-010 | Registry Standard | `OP/OP-010_Registry_Standard.md` | OP-010 Registry Standard は、記録系列台帳（MD-002／MD-003／MD-004）の登録規則・評価基準を定義する。 | Standard | Static |
| DB-001 | Project Ledger | `DB/DB-001_Project_Ledger.md` | 管理対象<br>・Conversation Ledger（会話記録・検索用ワード）<br>・Active Conversations<br>・Quick Access<br>Project Ledgerは、<br>重要な判断の記録先として、<br>本Constitution §9（記録）で参照される。 | Standard | Periodic |
| MD-001 | Storage Blueprint | `MD/MD-001_Storage_Blueprint.md` | 管理対象<br>・収納<br>・収納ルール<br>・Container Assignment | SSOT | Living |
| MD-002 | Field Atlas Landscape Framework | `MD/MD-002_Field_Atlas_Landscape_Framework.md` | 管理対象<br>・キャンプ場<br>・ロケーション<br>・適性評価<br>・運用条件 | SSOT | Periodic |
| MD-003 | Galley Fare | `MD/MD-003_Galley_Fare.md` | 管理対象<br>・キッチン調理器具<br>・調理の機能的必然性に基づく選定基準<br>Galley Fareは、<br>Equipment Registryとは異なる評価軸を持つ、<br>独立したMaster Databaseである。<br>所作、<br>デザイン、<br>ブランドの格を、<br>必須条件としない。<br>実際に調理が成立する機能性を、<br>最優先とする。 | SSOT | Living |
| MD-004 | Equipment Registry Object Reference | `MD/MD-004_Equipment_Registry_Object_Reference.md` | 管理対象<br>・所有物<br>・購入予定<br>・Status<br>・Zone<br>・Category<br>・Official Name<br>Equipment Registryは、<br>Human Principlesとの美意識的整合を条件とする所有物の、<br>唯一のMaster Databaseである。<br>調理の機能的必然性に基づくキッチン機材は、<br>MD-003 Galley Fareが独立して管理する。 | SSOT | Living |
| BR-001 | Brew Care | `BR/BR-001_Brew_Care.md` | (role text is not catalogued in OP-001 §13.2–13.18; no verbatim source exists for this cell — flagged in hold list) | Standard | Static |
| BR-002 | Barista Codex | `BR/BR-002_Barista_Codex.md` | (role text is not catalogued in OP-001 §13.2–13.18; no verbatim source exists for this cell — flagged in hold list) | Standard | Periodic |
| BR-003 | Acquisition Handbook | `BR/BR-003_Acquisition_Handbook.md` | (role text is not catalogued in OP-001 §13.2–13.18; no verbatim source exists for this cell — flagged in hold list) | Standard | Living |
| CZ-001 | Deliberation Codex | `CZ/CZ-001_Deliberation_Codex.md` | (role text is not catalogued in OP-001 §13.2–13.18; no verbatim source exists for this cell — flagged in hold list) | SSOT | Living |
| CZ-002 | Vigil Protocol | `CZ/CZ-002_Vigil_Protocol.md` | (role text is not catalogued in OP-001 §13.2–13.18; no verbatim source exists for this cell — flagged in hold list) | SSOT | Living |
| KN-001 | Heritage Chronicle | `KN/KN-001_Heritage_Chronicle.md` | 管理対象<br>・活動記録<br>・月次記録<br>・完成までの歩み<br>Chronicleは、<br>歴史を保存する文書である。<br>設計判断は記載しない。 | Archive | Static |
| KN-002 | Cultural Pantheon | `KN/KN-002_Cultural_Pantheon.md` | 管理対象<br>・ブランド文化<br>・Creator<br>・Community<br>・Gallery<br>・Shop<br>・Brand Tier（S〜D）<br>・Brand Lineage（系譜）<br>Cultural Pantheonは、<br>Equipment情報を保持しない。<br>ブランドの背景・思想のみを扱う。 | Reference | Static |
| KN-003 | Beyond Journey | `KN/KN-003_Beyond_Journey.md` | 管理対象<br>・体験<br>・価値観<br>・人生との関係<br>Beyond Journeyは、<br>THE THIRD PLACEを通して得られた、<br>人生そのものの記録を管理する。 | Archive | Static |
| KN-004 | Atelier Discovery | `KN/KN-004_Atelier_Discovery.md` | 管理対象<br>・市場調査<br>・ブランド調査<br>・技術調査<br>・比較調査<br>Discoveryは、<br>研究記録である。<br>Discoveryに記載された内容は、<br>正式情報ではない。<br>採用された時点で、<br>各Master Documentへ反映される。 | Reference | Static |

---
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

## 9.3 Volatility

すべての正式文書は、Authority および Status に加え、Volatility（変動性）を保持する。

Volatility は、文書に記載される内容がどの程度の頻度で更新される前提かを示す区分である。

| Volatility | Description |
|------------|-------------|
| Static | 原則更新されない（規則・原典・編集方針）。 |
| Periodic | 決定の変化時に更新する。 |
| Living | 台帳・リスト。頻繁に更新される前提。 |

各文書の Volatility 区分は §8 Document Series のカタログ表を正本とする。

Static 文書に Living データを置かない。Living 文書に恒久ルールを置かない。記録文書は他文書の Status を書き写さず、ID参照のみとする。

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
MD-004 Equipment Registry Object Reference

KN-001 Heritage Chronicle

OP-008 Documentation System
```

文書公開後は、Document ID を変更してはならない（2026-09-19付の文書番号再編は、プロジェクトオーナー自身による意図的なDocument Architecture変更であり、本原則の例外として正式に記録される。詳細はOP-001 Constitution §27参照）。

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
| Equipment | MD-004 |
| Design Philosophy | OP-002 |
| Project Documentation | OP-008 |
| Project Status | DB-001 |

---

# 14. Cross References

文書間の関係は Reference によって表現する。

本文を複製してはならない。

必要な情報は、責任を持つ文書を参照する。

---

## Reference Rules

許可される例

```
See MD-004 Equipment Registry Object Reference.
```

禁止例

MD-004 の内容を別文書へコピーして保持すること。

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
2. DS・OP・記録（DB/MD/BR/CZ/KN）のいずれに属するか
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

# 19. Documentation Operating Rules

文書体系は以下の運用ルールに従う。

---

## Rule DOC-01

記録系列は、プロジェクト運用のみを対象とする。

設計思想・原典は保持しない。

---

## Rule DOC-02

DS・OP・記録 の責任範囲を侵害してはならない。

---

## Rule DOC-03

Project Ledger はプロジェクトの運用状況を管理する。

Documentation System は運用ルールを管理する。

両者の役割を混在させてはならない。

---

## Rule DOC-04

正式文書は必ず Documentation System に従う。

例外を設けない。

---

## Rule DOC-05

すべての文書は References を用いて相互参照する。

本文の複製は禁止する。

---

## Rule DOC-06

文書カタログ（文書一覧）は OP-008 §8 を唯一の正本とする。

Project Ledger は Current Focus・Conversation・Inbox 等の運用情報を管理し、文書一覧は OP-008 §8 を参照する。

---

## Rule DOC-07

Conversation は履歴として保持する。

チャットを削除した場合でも、

Project Ledger 上では履歴を残すことを推奨する。

---

## Rule DOC-08

Project Ledger は Living Document として運用する。

Documentation System は Standard Document として運用する。

---

# 20. Quality Principles

文書体系は以下を品質基準とする。

- Readability
- Consistency
- Maintainability
- Traceability
- Scalability

これらを満たすことを優先し、

文書量を増やすことを目的としない。

---

# 21. Documentation Principles

記録系列は、

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

文書体系は、

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

文書一覧は OP-008 §8 Document Series を参照。

---

# 25. Compliance

すべての正式文書は、本書で定義する運用基準へ準拠する。

Documentation System は文書体系の基準文書であり、

Project 全体の Documentation Standard として位置付ける。

本書と矛盾する運用が存在する場合は、

Documentation System を優先する。

---

# 26. Future Expansion

文書体系は、

THE THIRD PLACE Project の運用状況に応じて拡張する。

将来的な文書は、

本書の構造および運用ルールへ従うこと。

Reserved IDs は必要時のみ使用する。

不要な文書は追加しない。

---

# Appendix A — Series Summary

| Series | Purpose | Responsibility |
|---------|----------|----------------|
| DS | 設計（絶対不変） | 不変の思想原典を保持する |
| OP | 運用（定義） | 設計思想・規則・法則を定義する |
| DB / MD / BR / CZ / KN | 記録（可変） | プロジェクトを運用・記録する |

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

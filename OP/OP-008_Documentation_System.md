# OP-008 Documentation System

**Document ID**: OP-008  
**Title**: Documentation System  
**Series**: OP – Operation (Definition)  
**Version**: 3.2
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
| 3.0 | 2026-09-24 | Volatility Restructure。§8 Document Seriesを唯一の文書カタログへ拡張（Document ID／Title／Path／Role／Authority／Volatility列を新設、OP-010を追加）。§9にVolatility区分（Static／Periodic／Living）を新設。§24 Referencesの文書一覧を§8参照の1行へ置換。Rule DOC-06の自己矛盾を解消。責任範囲の変更のためMajor Version。（追補）Appendix F — Document Profilesを新設し、README.mdの全文書プロフィール文（日英）を逐語移設。§8にSummary列を新設し、DB-001 Quick Accessの「ひとことで言うと」列を逐語移設。DS-001・OP-008・BR-001〜003・CZ-001〜002のRole列を「See Appendix F」へ更新。BR-002・BR-003のAuthorityをSSOTへ変更（2026-09-24 MARI様承認）。 |
| 3.1 | 2026-09-24 | MARI様のご指摘に基づき、§11 Naming Conventionへ文書名重複禁止ルール（Document Title Uniqueness Rule）を新設。制定にあたり、OP-010／MD-004のRegistry重複、OP-005／BR-003のAcquisition重複、BR-002／CZ-001のCodex重複が判明したため、OP-010をQualification Charterへ、OP-005をPursuit Strategyへ、BR-003をProcurement Handbookへ、BR-002をBarista Canonへ、CZ-001をDeliberation Dossierへそれぞれ改名し是正。§8カタログのTitle／Path列、Appendix Fの該当プロフィール文（日英）を同期。ファイル名もそれぞれ変更。 |
| 3.2 | 2026-09-26 | §8カタログのDB-001 Volatilityが『Periodic』のまま、Rule DOC-08およびDB-001自身のヘッダー記述（Living Document）と矛盾していた点をMARI様確認の上、実態に合わせ『Living』へ修正。 |

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

各文書の Role（役割説明）は OP-001 Constitution §13.2〜13.18 より逐語移設したものである（移設元には参照のみ残す。詳細は Revision History 参照）。 DS-001／OP-008／BR-001〜003／CZ-001〜002はOP-001 §13.2〜13.18に該当節がないため、Role列は「See Appendix F」とし、Appendix F — Document Profiles（README.mdから移設したプロフィール文）を参照する。Summary列はDB-001 Project LedgerのQuick Access（「ひとことで言うと」列）から逐語移設したものである（OP-010は本Restructureで新設のため元データなし）。

Authority 列は本 Version（3.0）で新設された分類である。BR-001／DB-001／OP-008の既存の文書内 Authority 宣言に加え、他区分は2026-09-24 MARI様承認（BR-002・BR-003はSSOTへ変更）。

| Document ID | Title | Path | Role | Authority | Volatility | Summary |
|---|---|---|---|---|---|---|
| DS-001 | THE THIRD PLACE Original | `DS/DS-001_Original.md` | See Appendix F | SSOT | Static | 不変の人生哲学の原典。プロジェクトの出発点となった考え方そのもの |
| OP-001 | Constitution | `OP/OP-001_Constitution.md` | 管理対象<br>・Human Principles<br>・Project Principles<br>・Document Architecture<br>・Project Governance | Standard | Static | プロジェクト全体の最高位規則書。文書体系・SSOT・GitHub運用ルールを定義 |
| OP-002 | Design Bible | `OP/OP-002_Design_Bible.md` | 管理対象<br>・空間思想<br>・デザイン原理<br>・空間全体の完成定義 | SSOT | Static | 空間づくりの設計思想 |
| OP-003 | Affinity Lexicon | `OP/OP-003_Affinity_Lexicon.md` | 管理対象<br>Affinity Lexiconは、<br>Human Principlesから派生する<br>「好み」<br>を管理する文書である。<br>対象は、<br>ブランドではない。<br>美意識でもない。<br>人生を通して蓄積される<br>嗜好、<br>感性、<br>建築、<br>家具、<br>文化、<br>色、<br>素材、<br>音、<br>香り、<br>思想、<br>世界観<br>などを体系的に記録する。<br>Affinity Lexiconは、<br>Design Bibleを変更する権限を持たない。<br>Human Principlesを説明する補助資料として扱う。 | Standard | Static | 好み・美意識を表す語彙辞典 |
| OP-004 | Aesthetic Grammar | `OP/OP-004_Aesthetic_Grammar.md` | 管理対象<br>・比率<br>・余白<br>・光と陰影<br>・素材と質感<br>・色<br>・構成と動線<br>・調和<br>Aesthetic Grammarは、<br>Affinity Lexiconが定義する語彙に、<br>「なぜ美しいのか」という法則を与える。 | Standard | Static | 「なぜそれが美しいのか」を説明する法則集 |
| OP-005 | Pursuit Strategy | `OP/OP-005_Pursuit_Strategy.md` | 管理対象<br>・Acquisition Priority（Must Buy／High／Medium／Low）<br>・Acquisition Status（Planned／Watching／Ready／Acquired）<br>・月間予算<br>・市場監視<br>Pursuit Strategyは、<br>Equipment Registryの情報を基準に、<br>取得順序・取得時期を管理する。<br>Equipmentの詳細情報は保持しない。 | Standard | Static | 何を・いつ・どんな基準で迎えるかの戦略と月間予算 |
| OP-006 | Foundation Compass | `OP/OP-006_Foundation_Compass.md` | 管理対象<br>・Equipment Module<br>・Vehicle Loading<br>・Deployment Sequence<br>・Recovery Sequence<br>・Seasonal Configuration<br>・Maintenance Cycle<br>Containerごとの具体的な役割・固定収納物は、<br>MD-001 Storage Blueprintが管理する。<br>本書では重複して記載しない。 | Standard | Static | 積載・設営・撤収・季節ごとの運用のしかた |
| OP-007 | Habitat Architecture | `OP/OP-007_Habitat_Architecture.md` | 管理対象<br>・居住空間<br>・サイト構成<br>・ゾーニング<br>・空間構成 | Standard | Static | 現地で完成する暮らしの空間そのものの設計思想 |
| OP-008 | Documentation System | `OP/OP-008_Documentation_System.md` | See Appendix F | Standard | Static | 文書運用ルールそのものの基準書 |
| OP-009 | Search Doctrine | `OP/OP-009_Search_Doctrine.md` | 管理対象<br>・調査の哲学・方法論<br>・情報源の優先順位<br>・Difference Analysis手法<br>監視対象（Watch List）・調査キーワード自体は、<br>CZ-002 Vigil Protocolが管理する。 | Standard | Static | 調査の哲学・方法論 |
| OP-010 | Qualification Charter | `OP/OP-010_Qualification_Charter.md` | OP-010 Qualification Charter は、記録系列台帳（MD-002／MD-003／MD-004）の登録規則・評価基準を定義する。 | Standard | Static | 台帳（MD-002／003／004）の登録規則・評価基準の基準書 |
| DB-001 | Project Ledger | `DB/DB-001_Project_Ledger.md` | 管理対象<br>・Conversation Ledger（会話記録・検索用ワード）<br>・Active Conversations<br>・Quick Access<br>Project Ledgerは、<br>重要な判断の記録先として、<br>本Constitution §9（記録）で参照される。 | Standard | Living | この文書。会話履歴・早見表・運用ダッシュボード |
| MD-001 | Storage Blueprint | `MD/MD-001_Storage_Blueprint.md` | 管理対象<br>・収納<br>・収納ルール<br>・Container Assignment | SSOT | Living | 収納・コンテナの割り当てルール |
| MD-002 | Field Atlas Landscape Framework | `MD/MD-002_Field_Atlas_Landscape_Framework.md` | 管理対象<br>・キャンプ場<br>・ロケーション<br>・適性評価<br>・運用条件 | SSOT | Periodic | キャンプ場・ロケーションの選定と評価 |
| MD-003 | Galley Fare | `MD/MD-003_Galley_Fare.md` | 管理対象<br>・キッチン調理器具<br>・調理の機能的必然性に基づく選定基準<br>Galley Fareは、<br>Equipment Registryとは異なる評価軸を持つ、<br>独立したMaster Databaseである。<br>所作、<br>デザイン、<br>ブランドの格を、<br>必須条件としない。<br>実際に調理が成立する機能性を、<br>最優先とする。 | SSOT | Living | キッチン道具だけの独立した台帳 |
| MD-004 | Equipment Registry Object Reference | `MD/MD-004_Equipment_Registry_Object_Reference.md` | 管理対象<br>・所有物<br>・購入予定<br>・Status<br>・Zone<br>・Category<br>・Official Name<br>Equipment Registryは、<br>Human Principlesとの美意識的整合を条件とする所有物の、<br>唯一のMaster Databaseである。<br>調理の機能的必然性に基づくキッチン機材は、<br>MD-003 Galley Fareが独立して管理する。 | SSOT | Living | 所有物・購入予定ギアの唯一の台帳（キッチン以外） |
| BR-001 | Brew Care | `BR/BR-001_Brew_Care.md` | See Appendix F | Standard | Static | コーヒー機材のお手入れ・洗浄・保管ルール |
| BR-002 | Barista Canon | `BR/BR-002_Barista_Canon.md` | See Appendix F | SSOT | Periodic | コーヒー機材の意思決定文書 |
| BR-003 | Procurement Handbook | `BR/BR-003_Procurement_Handbook.md` | See Appendix F | SSOT | Living | コーヒー機材の調達先・価格・購入計画 |
| CZ-001 | Deliberation Dossier | `CZ/CZ-001_Deliberation_Dossier.md` | See Appendix F | SSOT | Living | コーヒー以外のゾーンで検討中のギアの比較・検討記録 |
| CZ-002 | Vigil Protocol | `CZ/CZ-002_Vigil_Protocol.md` | See Appendix F | SSOT | Living | 欲しいギアの市場監視・パトロールの実行手順 |
| KN-001 | Heritage Chronicle | `KN/KN-001_Heritage_Chronicle.md` | 管理対象<br>・活動記録<br>・月次記録<br>・完成までの歩み<br>Chronicleは、<br>歴史を保存する文書である。<br>設計判断は記載しない。 | Archive | Static | プロジェクトの歴史・決定理由のアーカイブ |
| KN-002 | Cultural Pantheon | `KN/KN-002_Cultural_Pantheon.md` | 管理対象<br>・ブランド文化<br>・Creator<br>・Community<br>・Gallery<br>・Shop<br>・Brand Tier（S〜D）<br>・Brand Lineage（系譜）<br>Cultural Pantheonは、<br>Equipment情報を保持しない。<br>ブランドの背景・思想のみを扱う。 | Reference | Static | ブランドの文化・背景・系譜のアーカイブ |
| KN-003 | Beyond Journey | `KN/KN-003_Beyond_Journey.md` | 管理対象<br>・体験<br>・価値観<br>・人生との関係<br>Beyond Journeyは、<br>THE THIRD PLACEを通して得られた、<br>人生そのものの記録を管理する。 | Archive | Static | キャンプを超えたデザイン文化を紹介するカルチャーマガジン |
| KN-004 | Atelier Discovery | `KN/KN-004_Atelier_Discovery.md` | 管理対象<br>・市場調査<br>・ブランド調査<br>・技術調査<br>・比較調査<br>Discoveryは、<br>研究記録である。<br>Discoveryに記載された内容は、<br>正式情報ではない。<br>採用された時点で、<br>各Master Documentへ反映される。 | Reference | Static | 市場・ブランドの「今」を観測するリサーチメディア |

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

## 11.1 Document Title Uniqueness Rule（2026-09-24新設）

文書タイトル（§8カタログのTitle列に記載される名称そのもの）は、既存の他文書のタイトルと同じ単語を含んではならない。

本ルールは文書タイトルにのみ適用する。文書本文中の見出し・データ項目名（例：Acquisition Priority、Acquisition Status等の記録系フィールド名）や、Constitution §17が定義するCanonのような概念語の使用までは制限しない。

文書公開後はDocument IDを変更してはならない、というNaming Convention本則は維持されるが、本ルールに抵触することが判明した既存タイトルについては、第11節の定める「必要最小限」の例外としてTitle変更を認める。

制定時点（2026-09-24、MARI様のご指摘）で判明していた重複と是正内容は以下の通り。

| 重複語 | 旧タイトル | 新タイトル |
|---|---|---|
| Registry | OP-010 Registry Standard | OP-010 Qualification Charter |
| Acquisition | OP-005 Acquisition Strategy | OP-005 Pursuit Strategy |
| Acquisition | BR-003 Acquisition Handbook | BR-003 Procurement Handbook |
| Codex | BR-002 Barista Codex | BR-002 Barista Canon |
| Codex | CZ-001 Deliberation Codex | CZ-001 Deliberation Dossier |

新規文書を発行する際は、既存の全文書タイトル（§8参照）と語が重複しないことを、発行前に確認する。

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

# Appendix F — Document Profiles

README.md から移設した、全文書のプロフィール文（日本語版・英語版）。README.md は本節および §8 へのリンクのみを保持する。

---

## Japanese (JA)

### 🏛 DS — Design（設計・絶対不変）

THE THIRD PLACEの不変の思想的原典を保持するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| DS-001 | Original | プロジェクトの原典。特定のギアやデザインではなく、著者が人生を通して辿り着いた「判断原理」そのものを記録した最上位文書。 |

---

### ⚙️ OP — Operation（運用・定義）

設計思想・規則・法則そのものを定義するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| OP-001 | Constitution | プロジェクト全体を支える最高位文書。Human Principles・Design Principles・文書体系（Document Architecture）・SSOT・ブランドとの向き合い方（Brand Philosophy）・意思決定の構造（Decision Philosophy）・AI／GitHub運用原則を定義する。 |
| OP-002 | Design Bible | 設計思想・評価基準・完成定義を定めるプロジェクトの根幹文書。空間を構成するDesign Domains（Furniture／Light／Aroma／Storage／Coffee／Fire）と、それを統一するDesign Language（Appearance／Industrial／Graphic／Harmony）の二層で設計体系を構成する。 |
| OP-003 | Affinity Lexicon | 「好き」を判断のための共通言語として体系化する嗜好辞典。ブランドや製品そのものを管理する文書ではない。 |
| OP-004 | Aesthetic Grammar | 比率・余白・光・素材・配置・所作など、美しさを成立させる法則を定義する美意識文法。Design Languageを補完する。 |
| OP-005 | Pursuit Strategy | Equipmentを「いつ・どの順序で・どのような判断基準で迎えるか」を定める調達戦略文書。 |
| OP-006 | Foundation Compass | Equipmentを最も美しく、効率的に、一貫性を持って運用するための基盤指針。収納マニュアルではなく「運用の基盤」を定義する。 |
| OP-007 | Habitat Architecture | Foundation Compassが定める基盤の上に築かれる、フィールドに完成する「暮らしの空間」そのものを設計する文書。 |
| OP-008 | Documentation System | DS・OP・記録（DB・MD・BR・CZ・KN）の各系列が長期にわたり一貫した構造で運用されるための、文書の役割・分類・管理方法を定める文書体系全体の基準文書。 |
| OP-009 | Search Doctrine | 情報をどのように発見・評価・解釈し、知識へ変換するかを定めるリサーチの哲学・方法論。実際の実行手順はCZ-002が別途管理する。 |
| OP-010 | Qualification Charter | 記録系列台帳（MD-002 Field Atlas／MD-003 Galley Fare／MD-004 Equipment Registry）の登録規則・評価基準を定義する文書。データそのものは各台帳が保持する。 |

---

### 📊 DB — Dashboard

プロジェクトの現在の進行状況を記録するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| DB-001 | Project Ledger | プロジェクトの唯一の運用ダッシュボード。Current Focus・Active Conversationsに加え、目的のチャットを最短で探すConversation Ledger、番号を覚えていなくても文書を特定できるQuick Access（早見表）、系列別の文書数を示すProject Overviewを管理する「生きた文書（Living Document）」。 |

---

### 🗃 MD — Master Data

所有物・場所の台帳を管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| MD-001 | Storage Blueprint | 収納の配置、パッキング手順、設営・撤収の手順など、Storageを一つの運用システムとして定義する文書。 |
| MD-002 | Field Atlas Landscape Framework | フィールド・ロケーションなど、プロジェクトが展開される「舞台」そのものの選定基準を定義する。 |
| MD-003 | Galley Fare | キッチン機材（調理器具・刃物・調理小物）を、MD-004とは独立した実用性優先の基準で管理するMaster Document。 |
| MD-004 | Equipment Registry Object Reference | 所有物（Equipment）に関する唯一のマスターデータベース。Design Bibleとの美意識的整合を選定条件とし、7つのDomain（Furniture／Light／Aroma／Storage／Coffee／Fire／Shelter）のEquipment・Components・親子関係・Material・Color・Attribute・Ownership Statusを管理する。Coffee機材は購入されOwnedになった時点で初めて登録する。 |

---

### ☕ BR — Barista

コーヒー機材の意思決定・調達・お手入れを管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| BR-001 | Brew Care | コーヒー器具のお手入れ・メンテナンスに関する基準を定める文書。 |
| BR-002 | Barista Canon | Coffee System（コーヒー機材）に関する正式な意思決定・選定基準・ブランド判断を管理する仕様書。 |
| BR-003 | Procurement Handbook | BR-002で正式採用されたCoffee Equipmentについて、価格・購入先・輸送・関税など実際の調達情報を管理するハンドブック。 |

---

### 🔭 CZ — Cross-Zone Ops

コーヒー以外のゾーンの検討・市場監視を管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| CZ-001 | Deliberation Dossier | Coffee Domain（BR系列管轄）を除く全ゾーン（Furniture／Light／Aroma／Storage／Fire／Shelter）における検討中ギアの評価哲学・比較検討・購入待ちリストを管理する文書。 |
| CZ-002 | Vigil Protocol | ガレージブランドや市場の動向を継続的に監視し、入手機会の鮮度（Freshness）を評価するリサーチ運用プロトコル。 |

---

### 📖 KN — Knowledge

知の蓄積・文化アーカイブを管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| KN-001 | Heritage Chronicle | プロジェクトの重要な意思決定・設計思想の変化・Equipment構成の変遷を時系列で記録する公式アーカイブ。「なぜその判断をしたのか」を未来の自分が理解するための知識資産。 |
| KN-002 | Cultural Pantheon（旧題: Cultural Reference） | ブランドそのものではなく、ブランドを生み出した思想・人物・コミュニティ・ショップ・系譜を記録する公式カルチャーリファレンス。 |
| KN-003 | Beyond Journey | キャンプという趣味に留まらず、建築・家具・照明・工業デザイン・自動車・写真・ライフスタイルなど分野横断でTHE THIRD PLACEの美意識を育てるカルチャーマガジン。 |
| KN-004 | Atelier Discovery | ガレージブランド・アウトドアブランド・市場動向をリサーチするメディア。ブランドの宣伝ではなく、動向の観察を目的とする。冒頭に、最優先購入対象を継続監視するMust Buy Dashboardを常設する。 |

---

## English (EN)


### 🏛 DS — Design (Absolute, Immutable)

The series holding THE THIRD PLACE's immutable philosophical origin.

| ID | Document | What this document is |
| --- | --- | --- |
| DS-001 | Original | The project's founding text. Rather than any specific gear or design, it records the **judgment principles** the author arrived at over a lifetime — the highest-authority document in the project. |

---

### ⚙️ OP — Operation (Definitions)

The series defining THE THIRD PLACE's design philosophy, rules, and laws themselves.

| ID | Document | What this document is |
| --- | --- | --- |
| OP-001 | Constitution | The highest-authority document supporting the whole project. Defines the Human Principles, Design Principles, Document Architecture, SSOT, the relationship with brands (Brand Philosophy), the structure of decision-making (Decision Philosophy), and the AI / GitHub operating principles. |
| OP-002 | Design Bible | The project's foundational document, defining design philosophy, evaluation criteria, and the definition of completion. Its design framework has two layers: the Design Domains that compose the space (Furniture / Light / Aroma / Storage / Coffee / Fire) and the Design Language that unifies them (Appearance / Industrial / Graphic / Harmony). |
| OP-003 | Affinity Lexicon | A dictionary that systematizes "what is liked" as a shared vocabulary for judgment. It does not manage brands or products themselves. |
| OP-004 | Aesthetic Grammar | Defines the laws that constitute beauty — proportion, margin, light, material, composition, gesture — complementing the Design Language. |
| OP-005 | Pursuit Strategy | Defines when, in what order, and by what criteria Equipment is acquired. |
| OP-006 | Foundation Compass | The operational foundation for running Equipment as beautifully, efficiently, and consistently as possible. Not a storage manual — it defines the "foundation of operation" itself. |
| OP-007 | Habitat Architecture | Building on the foundation defined by Foundation Compass, this document designs the completed living space itself as it appears in the field. |
| OP-008 | Documentation System | The foundational standard for the entire documentation system, defining the roles, classification, and management rules of documents so that the DS, OP, and Record (DB / MD / BR / CZ / KN) series remain structurally consistent over the long term. |
| OP-009 | Search Doctrine | Defines the philosophy and methodology of research — how information should be discovered, evaluated, interpreted, and turned into knowledge. Actual operational execution is separately governed by CZ-002. |
| OP-010 | Qualification Charter | Defines the registration rules and evaluation criteria for the record-series ledgers (MD-002 Field Atlas / MD-003 Galley Fare / MD-004 Equipment Registry). The data itself remains held by each ledger. |

---

### 📊 DB — Dashboard

The series recording the project's current state of progress.

| ID | Document | What this document is |
| --- | --- | --- |
| DB-001 | Project Ledger | The project's single operational dashboard. Alongside Current Focus and Active Conversations, it manages the Conversation Ledger (for finding the right chat fastest), Quick Access (a quick-reference table that identifies documents without memorizing their numbers), and the Project Overview (document counts by series) — a living document. |

---

### 🗃 MD — Master Data

The series managing the ledger of owned equipment and places.

| ID | Document | What this document is |
| --- | --- | --- |
| MD-001 | Storage Blueprint | Defines storage layout, packing sequence, and setup/teardown procedures, treating Storage as a complete operational system rather than mere packing. |
| MD-002 | Field Atlas Landscape Framework | Defines the selection criteria for the "stage" itself — campsites, locations, and terrain — on which the project is deployed. |
| MD-003 | Galley Fare | An independent Master Document for kitchen equipment (cookware, blades, cooking tools), governed by a function-first standard separate from MD-004. |
| MD-004 | Equipment Registry Object Reference | The single master database of owned Equipment. Aesthetic alignment with the Design Bible is a condition for inclusion. It manages Equipment, Components, Parent / Child relationships, Material, Color, Attributes, and Ownership Status across seven Domains (Furniture / Light / Aroma / Storage / Coffee / Fire / Shelter). Coffee equipment is registered only once purchased and Owned. |

---

### ☕ BR — Barista

The series managing decisions, procurement, and care for coffee equipment.

| ID | Document | What this document is |
| --- | --- | --- |
| BR-001 | Brew Care | Defines the standards for cleaning and maintaining coffee equipment. |
| BR-002 | Barista Canon | The official specification governing decisions, selection criteria, and brand judgments for the Coffee System. |
| BR-003 | Procurement Handbook | Manages the actual procurement information — price, purchase source, shipping, import duties — for Coffee Equipment officially adopted in BR-002. |

---

### 🔭 CZ — Cross-Zone Ops

The series managing deliberation and market monitoring for zones outside coffee.

| ID | Document | What this document is |
| --- | --- | --- |
| CZ-001 | Deliberation Dossier | Manages zone evaluation philosophy, in-progress equipment deliberation, and the purchase-pending list for all zones outside the Coffee Domain governed by the BR series (Furniture / Light / Aroma / Storage / Fire / Shelter). |
| CZ-002 | Vigil Protocol | A research operations protocol for continuously monitoring garage brands and market trends, evaluating the freshness of acquisition opportunities. |

---

### 📖 KN — Knowledge

The series managing accumulated knowledge and the cultural archive.

| ID | Document | What this document is |
| --- | --- | --- |
| KN-001 | Heritage Chronicle | The official archive recording, in chronological order, the project's key decisions, shifts in design philosophy, and the evolution of its Equipment configuration — a knowledge asset for understanding, in the future, why a given decision was made. |
| KN-002 | Cultural Pantheon (formerly titled Cultural Reference) | An official cultural reference recording not the brands themselves, but the philosophies, people, communities, shops, and lineages that gave rise to them. |
| KN-003 | Beyond Journey | A culture magazine that grows THE THIRD PLACE's aesthetic sense by crossing disciplines — architecture, furniture, lighting, industrial design, automobiles, photography, lifestyle — beyond camping as a single hobby. |
| KN-004 | Atelier Discovery | A research publication covering garage brands, outdoor brands, and market trends. Its aim is observation of trends, not brand promotion. It opens with a permanent Must Buy Dashboard that continuously monitors the highest-priority acquisition targets. |

---

# End of Document

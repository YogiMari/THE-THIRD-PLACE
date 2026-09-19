![THE THIRD PLACE](assets/banner.PNG)

# 🏕️ THE THIRD PLACE
**可動式アウトドアリビング（A Movable Outdoor Living Room）**

---

## 🌄 概要（Overview）

THE THIRD PLACEは、「可動式アウトドアリビング」という一つの思想のもとに、
歳月をかけて静かに育てられ続けている、長期にわたる審美的な営みである。

ウォールナットに歳月が滲ませる艶、
真鍮が時とともに翳る金色、
黒鉄が佇まいを支える重み——

その一つひとつに、指先で触れ、光の中で見つめ、静けさの中で聴き取るようにしてフィロソフィーを通わせ、
余白と沈黙を残したまま、機能と美意識が拮抗するデザインへと昇華させる。

目指すのは、それを仕立て上げることそのものではない。

そうして構築された空間に、ただ静かに身を置き、
時間そのものが纏う気配を味わうこと。

そこにノイズが一切存在しない、澄み切ったTHE THIRD PLACEを味わうこと——
それこそが、このプロジェクトの目的である。

野外に身を置くという振る舞いを記録することでも、
装備を蒐集し尽くすことでもない。

移動するその居場所の中で、
風の香りや光の傾きとともに歳月を重ね、
思想そのものを住まわせること。

すべての公式文書はこのリポジトリ内で管理されており、本リポジトリがプロジェクトの唯一の正（Single Source of Truth／SSOT）として機能する。

---

## 🗂 リポジトリ構成（Repository Structure）

```
THE-THIRD-PLACE/
├── .github/
│   └── workflows/
│       └── third-place-sync.yml   # MD-004 / BR-002 / BR-003 整合性自動検証（CI）
│
├── assets/
│   └── banner.PNG
│
├── scripts/
│   └── third_place_sync_validator.py   # SSOT同期バリデータ
│
├── DS/    # Design（設計）
├── OP/    # Operation（運用）
├── DB/    # Dashboard
├── MD/    # Master Data
├── BR/    # Barista
├── CZ/    # Cross-Zone Ops
├── KN/    # Knowledge
│
├── CLAUDE.md   # Claude Code運用指示書（自動読込）
└── README.md
```

---

## 📚 ドキュメント一覧（Documentation）

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
| OP-001 | Constitution | プロジェクト全体の憲章。思想・運営原則・ブランドとの向き合い方（Brand Philosophy）・意思決定の構造（Decision Philosophy）を定義する。 |
| OP-002 | Design Bible | 設計思想・評価基準・Design Language（Appearance／Industrial／Graphic／Harmony）を定めるプロジェクトの根幹文書。 |
| OP-003 | Affinity Lexicon | 「好き」を判断のための共通言語として体系化する嗜好辞典。ブランドや製品そのものを管理する文書ではない。 |
| OP-004 | Aesthetic Grammar | 比率・余白・光・素材・配置・所作など、美しさを成立させる法則を定義する美意識文法。Design Languageを補完する。 |
| OP-005 | Acquisition Strategy | Equipmentを「いつ・どの順序で・どのような判断基準で迎えるか」を定める調達戦略文書。 |
| OP-006 | Foundation Compass | Equipmentを最も美しく、効率的に、一貫性を持って運用するための基盤指針。収納マニュアルではなく「運用の基盤」を定義する。 |
| OP-007 | Habitat Architecture | Foundation Compassが定める基盤の上に築かれる、フィールドに完成する「暮らしの空間」そのものを設計する文書。 |
| OP-008 | Documentation System | DS・OP・記録（DB・MD・BR・CZ・KN）の各系列が長期にわたり一貫した構造で運用されるための、文書の役割・分類・管理方法を定める文書体系全体の基準文書。 |
| OP-009 | Search Doctrine | 情報をどのように発見・評価・解釈し、知識へ変換するかを定めるリサーチの哲学・方法論。実際の実行手順はCZ-002が別途管理する。 |

---

### 📊 DB — Dashboard

プロジェクトの現在の進行状況を記録するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| DB-001 | Project Ledger | プロジェクトの現在の focus、進行中の議論、進捗状況を記録する「生きた文書（Living Document）」。 |

---

### 🗃 MD — Master Data

所有物・場所の台帳を管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| MD-001 | Storage Blueprint | 収納の配置、パッキング手順、設営・撤収の手順など、Storageを一つの運用システムとして定義する文書。 |
| MD-002 | Field Atlas Landscape Framework | フィールド・ロケーションなど、プロジェクトが展開される「舞台」そのものの選定基準を定義する。 |
| MD-003 | Galley Fare | キッチン機材（調理器具・刃物・調理小物）を、MD-004とは独立した実用性優先の基準で管理するMaster Document。 |
| MD-004 | Equipment Registry Object Reference | 所有物（Equipment）に関する唯一のマスターデータベース。Design Bibleとの美意識的整合を選定条件とする。 |

---

### ☕ BR — Barista

コーヒー機材の意思決定・調達・お手入れを管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| BR-001 | Brew Care | コーヒー器具のお手入れ・メンテナンスに関する基準を定める文書。 |
| BR-002 | Barista Codex | Coffee System（コーヒー機材）に関する正式な意思決定・選定基準・ブランド判断を管理する仕様書。 |
| BR-003 | Acquisition Handbook | BR-002で正式採用されたCoffee Equipmentについて、価格・購入先・輸送・関税など実際の調達情報を管理するハンドブック。 |

---

### 🔭 CZ — Cross-Zone Ops

コーヒー以外のゾーンの検討・市場監視を管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| CZ-001 | Deliberation Codex | Coffee Domain（BR系列管轄）を除く全ゾーン（Furniture／Light／Aroma／Storage／Fire／Shelter）における検討中ギアの評価哲学・比較検討・購入待ちリストを管理する文書。 |
| CZ-002 | Vigil Protocol | ガレージブランドや市場の動向を継続的に監視し、入手機会の鮮度（Freshness）を評価するリサーチ運用プロトコル。 |

---

### 📖 KN — Knowledge

知の蓄積・文化アーカイブを管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| KN-001 | Heritage Chronicle | プロジェクトの重要な意思決定・設計思想の変化・Equipment構成の変遷を時系列で記録する公式アーカイブ。「なぜその判断をしたのか」を未来の自分が理解するための知識資産。 |
| KN-002 | Cultural Pantheon（旧題: Cultural Reference） | ブランドそのものではなく、ブランドを生み出した思想・人物・コミュニティ・ショップ・系譜を記録する公式カルチャーリファレンス。 |
| KN-003 | Beyond Journey | キャンプという趣味に留まらず、建築・家具・照明・工業デザイン・自動車・写真・ライフスタイルなど分野横断でTHE THIRD PLACEの美意識を育てるカルチャーマガジン。 |
| KN-004 | Atelier Discovery | ガレージブランド・アウトドアブランド・市場動向をリサーチするメディア。ブランドの宣伝ではなく、動向の観察を目的とする。 |

---

## 🎯 唯一の正（Single Source of Truth／SSOT）

本GitHubリポジトリは、THE THIRD PLACEの公式**Single Source of Truth（SSOT）**である。

プロジェクト全体を通して、以下の優先順位が守られる。

1. GitHubリポジトリ
2. 公式DS・OP文書（設計・運用）
3. 公式記録文書（DB・MD・BR・CZ・KN）
4. 一時的な議論
5. 作業中の草稿（Working Drafts）

会話・アップロードされたファイル・ローカルのコピーのいずれも、GitHubリポジトリの内容を上書きすることはない。

---

## 🧩 文書アーキテクチャ（Documentation Architecture）

ドキュメントは、可変性の度合いによって区分された3つの分類で構成される。

| 分類 | 役割 |
| --- | --- |
| 設計（DS） | 絶対不変の思想原典 |
| 運用（OP） | 設計思想・規則・法則の定義（不変だが改訂の可能性あり） |
| 記録（DB・MD・BR・CZ・KN） | 運用データ・所有物・意思決定・アーカイブ（可変） |

この分離により、不変性の度合いが異なる思想・規則・記録が、それぞれ独立性を保ちながらも、相互に密接に連携する構造が保たれる。

---

## 🔄 開発ワークフロー（Development Workflow）

```
Research（調査）
   │
   ▼
Investigation（検証）
   │
   ▼
Discussion（議論）
   │
   ▼
Decision（決定）
   │
   ▼
Document Revision（文書改訂）
   │
   ▼
GitHub Repository（SSOT）
```

すべての公式な決定は、プロジェクトのベースラインの一部となる前に、該当する正式文書へ反映される。

---

## 🗃 マスターデータベース（Master Database）

**MD-004 Equipment Registry Object Reference**は、Human Principlesによる美意識的整合を条件とするキャンプ装備について、プロジェクトのマスター装備データベースとして機能する。

美意識ドメインに属するすべての装備の参照・追加・更新・ライフサイクル管理は、MD-004を起点とする。

キッチン調理器具については、**MD-003 Galley Fare**が、実用性を優先した別基準のもとで独立して管理する。

他の文書は、装備データを重複管理するのではなく、MD-004またはMD-003を参照する形をとる。

---

## 🚀 開発状況（Development Status）

THE THIRD PLACEは、現在も活発に進化を続けている長期プロジェクトである。

現在の主な開発領域は以下の通り。

* Foundation Architecture（基盤アーキテクチャ）
* Equipment Registry（装備台帳）
* Coffee System（コーヒーシステム）
* Kitchen / Galley Fare System（キッチンシステム）
* Documentation Framework（文書フレームワーク）
* Design Language（デザイン言語）
* Knowledge Management（ナレッジマネジメント）
* Acquisition Planning（調達計画）
* Research Methodology（リサーチ手法）

すべての公式な改訂は、本リポジトリへコミットされる。

---

## 📄 ライセンス（License）

特に明記されない限り、本リポジトリ内のすべてのオリジナル文書・デザイン・構造・記述内容は、**THE THIRD PLACE**プロジェクトの一部である。

---

## © THE THIRD PLACE

<br>

---
---

<br>

# 🏕️ THE THIRD PLACE (English)
**A Movable Outdoor Living Room**

---

## 🌄 Overview

THE THIRD PLACE is born of a single idea — a movable outdoor living room —
tended in silence, season after season, a long and languid devotion to beauty.

The luster that the years coax from walnut,
the gold that brass surrenders to, slowly, as time caresses it,
the weight black steel carries in its stillness, holding presence like a held breath——

Into each of these, philosophy is poured —
traced by fingertip, drunk in with the eye's light, tasted in the hush of silence —
until, leaving space and quiet untouched, function and beauty are distilled into a tension no less than desire.

The aim was never to fashion such a thing into being.

It is to linger, unhurried, within the space once conjured,
and to savor the fragrance that time itself leaves behind.

To savor a THE THIRD PLACE utterly cleansed of noise——
that, and only that, is what this project longs for.

Not to chronicle the act of surrendering oneself to the open air,
nor to hoard equipment without end.

Within that place which drifts and moves,
the years gather themselves in the scent of wind, the slant of falling light,
until thought itself comes to rest there, at home.

All official documents are maintained within this repository, which serves as the project's **Single Source of Truth (SSOT)**.

---

## 🗂 Repository Structure

```
THE-THIRD-PLACE/
├── .github/
│   └── workflows/
│       └── third-place-sync.yml   # Automated MD-004 / BR-002 / BR-003 sync validation (CI)
│
├── assets/
│   └── banner.PNG
│
├── scripts/
│   └── third_place_sync_validator.py   # SSOT sync validator
│
├── DS/    # Design
├── OP/    # Operation
├── DB/    # Dashboard
├── MD/    # Master Data
├── BR/    # Barista
├── CZ/    # Cross-Zone Ops
├── KN/    # Knowledge
│
├── CLAUDE.md   # Claude Code operating instructions (auto-loaded)
└── README.md
```

---

## 📚 Documentation

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
| OP-001 | Constitution | The project-wide charter. Defines the overall philosophy, operating principles, the relationship with brands (Brand Philosophy), and the structure of decision-making (Decision Philosophy). |
| OP-002 | Design Bible | The project's foundational document, defining design philosophy, evaluation criteria, and the Design Language (Appearance / Industrial / Graphic / Harmony). |
| OP-003 | Affinity Lexicon | A dictionary that systematizes "what is liked" as a shared vocabulary for judgment. It does not manage brands or products themselves. |
| OP-004 | Aesthetic Grammar | Defines the laws that constitute beauty — proportion, margin, light, material, composition, gesture — complementing the Design Language. |
| OP-005 | Acquisition Strategy | Defines when, in what order, and by what criteria Equipment is acquired. |
| OP-006 | Foundation Compass | The operational foundation for running Equipment as beautifully, efficiently, and consistently as possible. Not a storage manual — it defines the "foundation of operation" itself. |
| OP-007 | Habitat Architecture | Building on the foundation defined by Foundation Compass, this document designs the completed living space itself as it appears in the field. |
| OP-008 | Documentation System | The foundational standard for the entire documentation system, defining the roles, classification, and management rules of documents so that the DS, OP, and Record (DB / MD / BR / CZ / KN) series remain structurally consistent over the long term. |
| OP-009 | Search Doctrine | Defines the philosophy and methodology of research — how information should be discovered, evaluated, interpreted, and turned into knowledge. Actual operational execution is separately governed by CZ-002. |

---

### 📊 DB — Dashboard

The series recording the project's current state of progress.

| ID | Document | What this document is |
| --- | --- | --- |
| DB-001 | Project Ledger | A living document recording the project's current focus, ongoing discussions, and progress. |

---

### 🗃 MD — Master Data

The series managing the ledger of owned equipment and places.

| ID | Document | What this document is |
| --- | --- | --- |
| MD-001 | Storage Blueprint | Defines storage layout, packing sequence, and setup/teardown procedures, treating Storage as a complete operational system rather than mere packing. |
| MD-002 | Field Atlas Landscape Framework | Defines the selection criteria for the "stage" itself — campsites, locations, and terrain — on which the project is deployed. |
| MD-003 | Galley Fare | An independent Master Document for kitchen equipment (cookware, blades, cooking tools), governed by a function-first standard separate from MD-004. |
| MD-004 | Equipment Registry Object Reference | The single master database of owned Equipment. Aesthetic alignment with the Design Bible is a condition for inclusion. |

---

### ☕ BR — Barista

The series managing decisions, procurement, and care for coffee equipment.

| ID | Document | What this document is |
| --- | --- | --- |
| BR-001 | Brew Care | Defines the standards for cleaning and maintaining coffee equipment. |
| BR-002 | Barista Codex | The official specification governing decisions, selection criteria, and brand judgments for the Coffee System. |
| BR-003 | Acquisition Handbook | Manages the actual procurement information — price, purchase source, shipping, import duties — for Coffee Equipment officially adopted in BR-002. |

---

### 🔭 CZ — Cross-Zone Ops

The series managing deliberation and market monitoring for zones outside coffee.

| ID | Document | What this document is |
| --- | --- | --- |
| CZ-001 | Deliberation Codex | Manages zone evaluation philosophy, in-progress equipment deliberation, and the purchase-pending list for all zones outside the Coffee Domain governed by the BR series (Furniture / Light / Aroma / Storage / Fire / Shelter). |
| CZ-002 | Vigil Protocol | A research operations protocol for continuously monitoring garage brands and market trends, evaluating the freshness of acquisition opportunities. |

---

### 📖 KN — Knowledge

The series managing accumulated knowledge and the cultural archive.

| ID | Document | What this document is |
| --- | --- | --- |
| KN-001 | Heritage Chronicle | The official archive recording, in chronological order, the project's key decisions, shifts in design philosophy, and the evolution of its Equipment configuration — a knowledge asset for understanding, in the future, why a given decision was made. |
| KN-002 | Cultural Pantheon (formerly titled Cultural Reference) | An official cultural reference recording not the brands themselves, but the philosophies, people, communities, shops, and lineages that gave rise to them. |
| KN-003 | Beyond Journey | A culture magazine that grows THE THIRD PLACE's aesthetic sense by crossing disciplines — architecture, furniture, lighting, industrial design, automobiles, photography, lifestyle — beyond camping as a single hobby. |
| KN-004 | Atelier Discovery | A research publication covering garage brands, outdoor brands, and market trends. Its aim is observation of trends, not brand promotion. |

---

## 🎯 Single Source of Truth (SSOT)

This GitHub repository is the official **Single Source of Truth (SSOT)** for THE THIRD PLACE.

The following priority is observed throughout the project:

1. GitHub Repository
2. Official DS and OP Documents (Design / Operation)
3. Official Record Documents (DB / MD / BR / CZ / KN)
4. Temporary discussion
5. Working drafts

No conversation, uploaded file, or local copy supersedes the GitHub repository.

---

## 🧩 Documentation Architecture

The documentation is organized into three categories, classified by degree of mutability.

| Category | Purpose |
| --- | --- |
| Design (DS) | The absolute, immutable philosophical origin |
| Operation (OP) | Definitions of design philosophy, rules, and laws (immutable, but subject to revision) |
| Record (DB / MD / BR / CZ / KN) | Operational data, possessions, decisions, and archives (mutable) |

This separation ensures that philosophy, rules, and records, each carrying a different degree of immutability, remain independent while staying fully interconnected.

---

## 🔄 Development Workflow

```
Research
   │
   ▼
Investigation
   │
   ▼
Discussion
   │
   ▼
Decision
   │
   ▼
Document Revision
   │
   ▼
GitHub Repository (SSOT)
```

Every official decision is reflected in the relevant official document before becoming part of the project's baseline.

---

## 🗃 Master Database

**MD-004 Equipment Registry Object Reference** is the project's master equipment database for camp equipment governed by Human Principles aesthetic alignment.

All aesthetic-domain equipment references, additions, updates, and lifecycle management originate from MD-004.

Kitchen cooking equipment is governed separately, under a function-first selection standard, by **MD-003 Galley Fare**.

Other documents reference MD-004 or MD-003 rather than maintaining duplicate equipment data.

---

## 🚀 Development Status

THE THIRD PLACE is an actively evolving long-term project.

Current areas of development include:

* Foundation architecture
* Equipment registry
* Coffee system
* Kitchen / Galley Fare system
* Documentation framework
* Design language
* Knowledge management
* Acquisition planning
* Research methodology

Every official revision is committed to this repository.

---

## 📄 License

Unless otherwise stated, all original documents, designs, structures, and written content within this repository are part of **THE THIRD PLACE** project.

---

## © THE THIRD PLACE

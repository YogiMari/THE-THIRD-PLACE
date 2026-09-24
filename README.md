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

個別文書の一覧・役割・Authority・Volatility区分は、OP-008 Documentation System §8 Document Series を参照。

### Volatility（変動性）区分

| 区分 | 説明 |
| --- | --- |
| Static | 原則更新されない（規則・原典・編集方針） |
| Periodic | 決定の変化時に更新する |
| Living | 台帳・リスト。頻繁に更新される前提 |

Static 文書に Living データを置かない。Living 文書に恒久ルールを置かない。詳細は OP-008 §9.3 を参照。

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

For the full document catalog (ID, role, Authority, and Volatility), see OP-008 Documentation System §8 Document Series.

### Volatility Classification

| Class | Description |
| --- | --- |
| Static | Not normally updated (rules, origin texts, editorial policy) |
| Periodic | Updated when a decision changes |
| Living | Ledgers / lists, expected to be updated frequently |

A Static document must not hold Living data. A Living document must not hold permanent rules. See OP-008 §9.3 for details.

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

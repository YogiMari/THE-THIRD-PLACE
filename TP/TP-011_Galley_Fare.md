# TP-011 Galley Fare
Version 1.3

---

# Purpose

THE THIRD PLACEはキャンプという活動である以上、調理という営みを避けて成立しない。

しかし、インスタント食品や調理済み食品の持ち込みだけで食を完結させることは、THE THIRD PLACEの思想として許容しない。

本書は、キッチン機材（調理器具・刃物・調理小物）の選定・管理基準を定める、独立したMaster Documentである。

---

# Relationship to TP-004

TP-004 Equipment Registry Object Referenceは、Human Principles / Design Bibleとの美意識的整合を選定条件とする所有物の、唯一のMaster Databaseである。

TP-011はこれと異なる評価軸を用いる。

TP-011の対象機材はTP-004には登録しない。

両者は独立したMaster Documentとして並立する。

---

# Selection Standard

キッチン機材は、以下を選定基準とする。

- 所作、デザイン、ブランドの格を必須条件としない
- 由来・背景のない量産品（理由なきアルミクッカー等）は選ばない、本物志向を優先する
- 実際に調理が成立する機能を持つこと
- 長期使用に耐える実用品であること

Popularity、SNS、レビュー、希少性は評価基準にしない。

---

# Registry Rules

## Equipment ID

KIT-001〜（3文字Prefix、TP-004の採番規則を継続使用）

IDは欠番不可。番号は変更しない。

複数の候補が同一カテゴリで併存する場合、同一メイン番号に対して枝番（a, b, c...）を付与する（例：KIT-007a, KIT-007b, KIT-007c）。

## Status

| Status | Meaning |
|---------|----------|
| Owned | Currently owned |
| Essential | Necessary and purchase is decided (awaiting purchase) |
| Candidate | Necessary, but the specific product is not yet decided (under evaluation) |
| Upgrade | A replacement for something already owned, or a "nice to have" item (lowest priority tier) |

## Attribute Policy

TP-004と同一のフィールド構成を用いる。

- Brand
- Product
- Status
- Color
- Material
- Graphic Attribute
- Industrial Attribute
- Parent / Child relationships（該当する場合）

## Candidate Recording Policy

TP-011は、キッチン機材を選んでいく過程・ストーリー自体を記録対象とする。

そのため、同一カテゴリ（同じIndustrial Attribute）に対して複数のCandidateが併存することを許容する。

同一カテゴリの複数候補は、同一メイン番号の枝番（a, b, c...）として記録する（例：まな板候補＝KIT-007a/007b/007c、包丁候補＝KIT-008a/008b/008c）。

TP-004（所有物のみを記録）とは異なり、TP-011は「まだ選ばれていない候補」も、検討過程の記録として枝番付きIDで管理する。

いずれか一つが購入・確定した時点でStatusをOwnedへ更新し、TP-004には登録しない（TP-011で完結）。不採用となった候補はStatusをUpgrade等に変更するか、Version Historyに不採用の経緯を記録した上で扱いを決める。

---

# Kitchen

---

## KIT-001

**Brand**

Snow Peak

**Product**

和鉄ダッチオーブン26（CS-520）

**Status**

Owned

### Color

Black

### Material

Ductile Cast Iron（Silicone Heat-Resistant Coating）／Stainless Steel

### Graphic Attribute

None

### Industrial Attribute

Dutch Oven（Whole Chicken Capacity）

---

## KIT-002

**Brand**

Snow Peak

**Product**

コンボダッチデュオ（CS-550）

**Status**

Owned

### Color

Black

### Material

Ductile Cast Iron（Silicone Heat-Resistant Coating）／Stainless Steel

### Graphic Attribute

None

### Industrial Attribute

Compact Dutch Oven Set

---

## KIT-003

**Brand**

Snow Peak × 三暁

**Product**

Fukuyama Free Forged Ferrum Griddle 22

**Status**

Owned

### Color

Black

### Material

Low-Carbon Steel（Hand-Forged）

### Graphic Attribute

None

### Industrial Attribute

Campfire Steak Griddle（Detachable Handle）

---

## KIT-004

**Brand**

JHQ

**Product**

鉄板マルチグリドル 縁型33cm（TMGEDGE33）

**Status**

Owned

### Color

Black

### Material

Aluminum Alloy（Inoble Coating）

### Graphic Attribute

None

### Industrial Attribute

Multi Griddle

---

## KIT-005

**Brand**

DEVISE WORKS × FEDECA

**Product**

SPECIAL GORIMAX

**Status**

Owned

### Color

Black／Brown（Walnut）

### Material

Walnut／Stainless Steel（Blackened）／Brass

### Graphic Attribute

Graffiti-style Graphic（Engraved, Handle & Blade）

### Industrial Attribute

Folding Cooking Knife

---

## KIT-006

**Brand**

Snow Peak

**Product**

MYプレート（TW-040）

**Status**

Owned

### Quantity

2

### Color

Brown

### Material

Natural Wood（Oak）

### Graphic Attribute

None

### Industrial Attribute

Plate / Cutting Board Dual-Use

---

## KIT-007a

**Brand**

OLD MOUNTAIN

**Product**

崇行 TO 昌平

**Status**

Candidate

### Color

Brown（Olive Wood）／Black（Resin）

### Material

Olive Wood／Resin

### Graphic Attribute

None

### Industrial Attribute

Cutting Board（Folding, designed to store TAKAYUKI knife when opened）

---

## KIT-007b

**Brand**

**Product**

**Status**

Candidate

### Color

### Material

Resin（Partial）／Wood

### Graphic Attribute

### Industrial Attribute

Cutting Board（Handle-less, resin-partial construction desired; no specific product identified yet）

---

## KIT-007c

**Brand**

FEDECA

**Product**

ファセットカッティングボード（Facet Cutting Board）

**Status**

Candidate

### Color

Brown

### Material

Hard Maple or Black Walnut（size/material variants available）

### Graphic Attribute

None

### Industrial Attribute

Cutting Board（Beveled edge for easy lifting）

---

## KIT-008a

**Brand**

OLD MOUNTAIN

**Product**

TAKAYUKI

**Status**

Candidate

### Color

Silver

### Material

SG2 Nickel Damascus Steel（SPG2）

### Graphic Attribute

None

### Industrial Attribute

Kitchen Knife（by knife gallery Shibata Takayuki, OLD MOUNTAIN special edition）

---

## KIT-008b

**Brand**

38explore × 恵比寿刃-YEBISUYAIBA

**Product**

Gripknife38×ASIMO（Black Dia）

**Status**

Candidate

### Color

Black（Leather Case）

### Material

Laminated Damascus Steel（槌目仕上げ／ダマスカス積層鋼）

### Graphic Attribute

None

### Industrial Attribute

Kitchen Knife（Shellcon-standard grip, customizable）

---

## KIT-008c

**Brand**

LAVA LAVA GEARCLUB

**Product**

MUSASHI

**Status**

Candidate

### Color

Brown（Walnut Grip）

### Material

Steel／Walnut（Wantkey Camp製グリップ）／Leather（Sheath）

### Graphic Attribute

None

### Industrial Attribute

Kitchen Knife Set（Main Knife + Sub Knife + Leather Sheath, two-blade set）

---

# Single Source of Truth

TP-011 Galley Fareは、キッチン機材（調理器具・刃物・調理小物）に関する唯一のMaster Databaseである。

以下の情報はTP-011を起点とする。

- Equipment IDs（KIT-）
- Brand
- Product Name
- Status
- Material
- Color
- Graphic Attribute
- Industrial Attribute

TP-004はキッチン機材を管理しない。

Planning、調達戦略、デザイン思想、美意識、評価は、それぞれの関連文書が管理する。

---

# Related Documents

- TP-001 THE THIRD PLACE Constitution
- TP-004 Equipment Registry Object Reference

---

# Version History

## Version 1.0

新設。TP-004からキッチン機材を分離し、独立したMaster Databaseとして正式採用。

### Changes

- Purpose、Relationship to TP-004、Selection Standard、Registry Rulesを新規定義
- KIT-001〜005を初期登録（Snow Peak 和鉄ダッチオーブン26、Snow Peak コンボダッチデュオ、Snow Peak×三暁 Fukuyama Free Forged Ferrum Griddle 22、JHQ 鉄板マルチグリドル縁型33cm、DEVISE WORKS×FEDECA SPECIAL GORIMAX）
- 全5件、Status = Owned

---

## Version 1.1

所有ギア確認（Snow Peak MYプレート TW-040、天然木オーク、2枚所有、まな板兼皿として使用）を踏まえ、専用まな板・本格包丁の枠を仮登録。

### Changes

- KIT-006（新規、暫定）：専用まな板の空枠。Status = Candidate。
- KIT-007（新規、暫定）：本格包丁の空枠。Status = Candidate。

---

## Version 1.2

KIT-006をMYプレート（TW-040）の正式登録に更新し、まな板・包丁それぞれの具体候補を個別IDで登録。TP-011は選定プロセスそのものを記録するドキュメントであるため、同一カテゴリ内の複数Candidateの併存を正式に許容する運用ルール（Candidate Recording Policy）を新設。

### Changes

- Registry Rulesに「Candidate Recording Policy」を新設：TP-011はTP-004と異なり、同一Industrial Attribute内で複数Candidateの併存を許容する旨を明記。
- KIT-006：暫定の空枠から、Snow Peak MYプレート（TW-040、天然木オーク、180×250×15mm、500g、2枚所有）の正式Owned登録へ更新。
- KIT-007〜012（新規）：まな板3候補・包丁3候補を個別の連番IDとして登録。

---

## Version 1.3

採番方式を修正：同一カテゴリの複数候補は連番ではなく、同一メイン番号の枝番（a/b/c）として記録する運用へ変更。KIT-007〜012の連番だった構成を、KIT-007（まな板カテゴリ）とKIT-008（包丁カテゴリ）それぞれの枝番へ再編。

### Changes

- Registry Rules・Candidate Recording Policyに枝番方式（KIT-007a/007b/007c等）の記録ルールを明記。
- 旧KIT-007（崇行 TO 昌平）→ KIT-007a
- 旧KIT-008（レジン一部・取手なし候補）→ KIT-007b
- 旧KIT-009（FEDECAファセットカッティングボード）→ KIT-007c
- 旧KIT-010（OLD MOUNTAIN TAKAYUKI）→ KIT-008a
- 旧KIT-011（38explore×恵比寿刃 Gripknife38×ASIMO）→ KIT-008b
- 旧KIT-012（LAVA LAVA GEARCLUB MUSASHI）→ KIT-008c
- 内容（Brand/Product/Material等）はVersion 1.2から変更なし。番号体系のみ再編。

---

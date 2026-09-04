# TP-011 Galley Fare
Version 1.2

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

TP-004（所有物のみを記録）とは異なり、TP-011は「まだ選ばれていない候補」も、検討過程の記録として個別IDで管理する。

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

## KIT-007

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

## KIT-008

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

## KIT-009

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

## KIT-010

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

## KIT-011

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

## KIT-012

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
- KIT-007（新規）：OLD MOUNTAIN「崇行 TO 昌平」。オリーブウッド／レジン、二つ折りでTAKAYUKI包丁を収納できる専用設計のまな板。Candidate。
- KIT-008（新規）：レジン一部使用・取手なしのまな板候補。ブランド・製品未定。Candidate。
- KIT-009（新規）：FEDECA「ファセットカッティングボード」。ハードメープル／ブラックウォルナット展開、縁が斜めにカットされ持ち上げやすい形状。Candidate。
- KIT-010（新規）：OLD MOUNTAIN「TAKAYUKI」。knife gallery柴田崇行氏の名包丁のOLD MOUNTAIN特別仕様。SG2ニッケルダマスカス鋼。Candidate。
- KIT-011（新規）：38explore×恵比寿刃-YEBISUYAIBA「Gripknife38×ASIMO（Black Dia）」。槌目×ダマスカス積層鋼、シェルコン規格グリップ対応。Candidate。
- KIT-012（新規）：LAVA LAVA GEARCLUB「MUSASHI」。メイン包丁＋サブ包丁＋レザーシースの二刀流セット、グリップはWantkey Camp製ウォールナット。Candidate。
- 旧KIT-006/007（暫定空枠）の内容は本バージョンで正式内容に置き換えられ、消滅した。

---

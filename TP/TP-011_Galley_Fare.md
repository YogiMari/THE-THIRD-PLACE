# TP-011 Galley Fare
Version 1.0

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

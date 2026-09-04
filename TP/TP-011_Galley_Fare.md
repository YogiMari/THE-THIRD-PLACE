# TP-011 Galley Fare
Version 2.0

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

既存の所有物（Owned）に対する買い替え候補も、同様に元のIDへ枝番を付与して記録する（例：KIT-020の買い替え候補＝KIT-020a）。

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

既存Owned品の買い替え候補も同じ枝番方式で記録する（例：KIT-020a＝KIT-020の買い替え候補）。

TP-004（所有物のみを記録）とは異なり、TP-011は「まだ選ばれていない候補」も、検討過程の記録として枝番付きIDで管理する。

いずれか一つが購入・確定した時点でStatusをOwnedへ更新し、TP-004には登録しない（TP-011で完結）。不採用となった候補はStatusをUpgrade等に変更するか、Version Historyに不採用の経緯を記録した上で扱いを決める。

## Domain Scope Note (Kitchen vs. Fire/Coffee)

TP-004のFire Domainと本書Kitchen（TP-011）は、燃料の種類ではなく、機材の**目的**によって区分される。

- **Fire Domain（TP-004）**：暖を取る、あるいは焚き火のような炎そのものを楽しむための機材。燃料は薪に限らず、ケロシン（灯油）等も含む（例：FIR-018 武井バーナー Purple Stove 501Aは灯油式のケロシンヒーターだが、目的が暖房であるためFire Domainに属する）。
- **Kitchen（TP-011）**：調理を成立させるための機材。燃料はガス・アルコール等を問わない（例：フラットバーナー、火焔ストーブ、ヤエンストーブ、グリルバーナー等は、いずれも調理目的であるためKitchenに属する）。

コーヒー器具（ミル・ケトル・ドリッパー等）についても、キッチンゾーンでの調理行為の一部として同様にKitchenで管理する。

この区分は、TP-004 Fire Domainの既存定義を変更するものではなく、両ドメインの境界を目的ベースで明確化したものである。

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

## KIT-009

**Brand**

FEDECA

**Product**

つかみのトング（名栗ブラック）

**Status**

Owned

### Color

Black

### Material

Stainless Steel（SUS821L1, Black Oxide Finish）／Reinforced Wood（Naguri）／Brass（Screw）

### Graphic Attribute

None

### Industrial Attribute

Tong（U-shaped, spring/hinge-less structure, 235mm）

---

## KIT-010

**Brand**

FEDECA

**Product**

CLEVER TONG（名栗ブラウン）

**Status**

Owned

### Color

Brown

### Material

Stainless Steel（Black Oxide Finish）／Wood（Naguri）／Brass（Screw）

### Graphic Attribute

None

### Industrial Attribute

Tong（Standard, 240mm）

---

## KIT-011

**Brand**

FEDECA

**Product**

CLEVER TONG mini（名栗ホワイト）

**Status**

Owned

### Color

White

### Material

Stainless Steel（Black Oxide Finish）／Reinforced Wood（Naguri）／Brass（Screw）

### Graphic Attribute

None

### Industrial Attribute

Tong（Mini, 150mm）

---

## KIT-012

**Brand**

FEDECA

**Product**

CLEVER TONG mini（名栗ブラック）

**Status**

Owned

### Color

Black

### Material

Stainless Steel（Black Oxide Finish）／Reinforced Wood（Naguri）／Brass（Screw）

### Graphic Attribute

None

### Industrial Attribute

Tong（Mini, 150mm）

---

## KIT-013

**Brand**

Snow Peak

**Product**

チタン先割れスプーン（SCT-004）

**Status**

Owned

### Color

Green

### Material

Titanium

### Graphic Attribute

None

### Industrial Attribute

Spork（Spoon/Fork Combo）

---

## KIT-014

**Brand**

Snow Peak

**Product**

チタン先割れスプーン（SCT-004）

**Status**

Owned

### Color

Purple

### Material

Titanium

### Graphic Attribute

None

### Industrial Attribute

Spork（Spoon/Fork Combo）

---

## KIT-015

**Brand**

Snow Peak

**Product**

チタン先割れスプーン（SCT-004）

**Status**

Owned

### Color

Blue

### Material

Titanium

### Graphic Attribute

None

### Industrial Attribute

Spork（Spoon/Fork Combo）

---

## KIT-016

**Brand**

Snow Peak

**Product**

チタン先細箸（SCT-115）

**Status**

Owned

### Color

Green

### Material

Titanium Alloy

### Graphic Attribute

None

### Industrial Attribute

Chopsticks（Tapered Tip, Cold-Forged）

---

## KIT-017

**Brand**

Snow Peak

**Product**

チタン先細箸（SCT-115）

**Status**

Owned

### Color

Purple

### Material

Titanium Alloy

### Graphic Attribute

None

### Industrial Attribute

Chopsticks（Tapered Tip, Cold-Forged）

---

## KIT-018

**Brand**

Snow Peak

**Product**

チタン先細箸（SCT-115）

**Status**

Owned

### Color

Blue

### Material

Titanium Alloy

### Graphic Attribute

None

### Industrial Attribute

Chopsticks（Tapered Tip, Cold-Forged）

---

## KIT-019

**Brand**

Snow Peak

**Product**

チタンシングルマグ220

**Status**

Owned

### Color

Silver

### Material

Titanium

### Graphic Attribute

None

### Industrial Attribute

Single-Wall Mug（Direct-Fire Safe, 220ml）

---

## KIT-020

**Brand**

Snow Peak

**Product**

チタンダブルマグ300（MG-152）

**Status**

Owned

### Color

Silver

### Material

Titanium

### Graphic Attribute

None

### Industrial Attribute

Double-Wall Mug（300ml, stackable with MG-153）

---

## KIT-020a

**Brand**

Snow Peak

**Product**

チタンダブルマグ300 海外限定カラー版（正確なモデル名・色は要確認）

**Status**

Candidate

### Color

Grey／Blue／Purple／Green（いずれか、アノダイズ加工のいずれかの色を想定）

### Material

Titanium（Anodized Finish）

### Graphic Attribute

None

### Industrial Attribute

Double-Wall Mug（300ml, replacement candidate for KIT-020）

---

## KIT-021

**Brand**

Snow Peak

**Product**

チタンダブルマグ450（MG-153）

**Status**

Owned

### Color

Silver

### Material

Titanium

### Graphic Attribute

None

### Industrial Attribute

Double-Wall Mug（450ml, renewed model, stacks with MG-152）

---

## KIT-021a

**Brand**

**Product**

**Status**

Candidate

### Color

### Material

### Graphic Attribute

### Industrial Attribute

Double-Wall Mug or Single-Wall Mug（450, specific product/color undecided; replacement candidate for KIT-021）

---

## KIT-022

**Brand**

Snow Peak

**Product**

サーモタンブラー470 サンド（TW-470-SN）

**Status**

Owned

### Color

Sand

### Material

Stainless Steel（Interior）／Polyester-Coated Steel（Exterior）／Silicone（Bottom Cover）

### Graphic Attribute

None

### Industrial Attribute

Vacuum-Insulated Tumbler（470ml, φ84×150mm, 215g）

---

## KIT-022a

**Brand**

YETI

**Product**

Rambler 16oz Tumbler（正式モデル名・色は要確認、473ml、470mlに最も近い容量）

**Status**

Candidate

### Color

### Material

Stainless Steel（18/8, Double-Wall Vacuum Insulated）

### Graphic Attribute

None

### Industrial Attribute

Vacuum-Insulated Tumbler（Replacement candidate for KIT-022）

---

## KIT-023

**Brand**

Snow Peak

**Product**

サーモタンブラー470 ブラック（TW-470-BK）

**Status**

Owned

### Color

Black

### Material

Stainless Steel（Interior）／Polyester-Coated Steel（Exterior）／Silicone（Bottom Cover）

### Graphic Attribute

None

### Industrial Attribute

Vacuum-Insulated Tumbler（470ml, φ84×150mm, 215g）

---

## KIT-023a

**Brand**

YETI

**Product**

Rambler 16oz Tumbler（正式モデル名・色は要確認、473ml、470mlに最も近い容量）

**Status**

Candidate

### Color

### Material

Stainless Steel（18/8, Double-Wall Vacuum Insulated）

### Graphic Attribute

None

### Industrial Attribute

Vacuum-Insulated Tumbler（Replacement candidate for KIT-023）

---

## KIT-024

**Brand**

Snow Peak

**Product**

Snow Peak Way ECO CUP

**Status**

Owned

### Color

Silver

### Material

Stainless Steel

### Graphic Attribute

Snow Peak Way Event Logo（Year Edition Unspecified）

### Industrial Attribute

Stacking Cup（500cc, φ85×H125mm）

---

## KIT-025

**Brand**

Snow Peak

**Product**

サヨウ（茶踊、CS-340）

**Status**

Owned

### Color

Clear／Natural Wood（Knob）

### Material

Saturated Polyester Resin（Pot Body / Cups）／Stainless Steel（Lid）／Natural Wood（Knob）／Silicone Rubber（Packing）／Cotton Canvas（Storage Case）

### Graphic Attribute

None

### Industrial Attribute

Teapot Set（600ml Pot + 2× 150ml Cups, Furoshiki-Style Storage Case）

---

## KIT-026

**Brand**

Snow Peak

**Product**

フラットバーナー（GS-450R）

**Status**

Owned

### Color

Silver

### Material

Stainless Steel／Brass／Aluminum／Steel／Resin

### Graphic Attribute

None

### Industrial Attribute

Cartridge Gas Burner（IGT-Compatible, 270×410×110mm, 1.9kg）

---

## KIT-027

**Brand**

Snow Peak

**Product**

火焔ストーブ コーエン（クッカーセット）

**Status**

Owned

### Color

Red／Silver

### Material

Stainless Steel／Heat-Resistant Glass

### Graphic Attribute

None

### Industrial Attribute

Alcohol Stove with Cooker Set（Max Φ23cm Pot Compatible, Bioethanol Fuel）

---

## KIT-028

**Brand**

Snow Peak

**Product**

火焔ストーブ サカン（BS-020）

**Status**

Owned

### Color

Silver

### Material

Stainless Steel／Heat-Resistant Glass

### Graphic Attribute

None

### Industrial Attribute

Alcohol Stove（Tabletop, 200ml Capacity, ~70min Burn Time, Bioethanol Fuel）

---

## KIT-029

**Brand**

Snow Peak

**Product**

ヤエンストーブ レギ（GS-370）

**Status**

Owned

### Color

Silver

### Material

Stainless Steel／Aluminum Alloy／Brass／Rubber

### Graphic Attribute

None

### Industrial Attribute

Cartridge Gas Burner（Integrated Low-Center-of-Gravity Design, 2900kcal/h）

---

## KIT-030

**Brand**

Snow Peak

**Product**

ヤエンストーブ ナギ（GS-360）

**Status**

Owned

### Color

Silver

### Material

Stainless Steel

### Graphic Attribute

None

### Industrial Attribute

Cartridge Gas Burner（Integrated Windscreen, 2800kcal/h）

---

## KIT-031

**Brand**

Snow Peak

**Product**

グリルバーナー 雪峰苑（GS-355）

**Status**

Owned

### Color

Black

### Material

Stainless Steel／Brass／Zinc Die-Cast／Resin（Body）／Steel, Enamel Finish（Oil Pan）／Cast Iron, Silicone Heat-Resistant Coating（Griddle）

### Graphic Attribute

None

### Industrial Attribute

Cast Iron Griddle Grill Burner（Yakiniku-Style, 1700kcal/h, 5.0kg）

---

## KIT-032

**Brand**

Snow Peak

**Product**

フィールドバリスタ ミル（CS-116）

**Status**

Owned

### Color

Silver

### Material

Stainless Steel／Iron／Ceramic（Burr）／POM Resin／Natural Wood

### Graphic Attribute

None

### Industrial Attribute

Manual Coffee Mill（Foldable Handle/Lid Integrated, 225g）

---

## KIT-033

**Brand**

Snow Peak

**Product**

フィールドバリスタケトル ブラック Online Edition

**Status**

Owned

### Color

Black

### Material

Stainless Steel／Brass／Natural Wood

### Graphic Attribute

None

### Industrial Attribute

Pour-Over Kettle（Detachable Handle, 3-Hole Spout for Flow Control, 1.0L）

---

## KIT-034

**Brand**

Snow Peak

**Product**

フォールディングコーヒードリッパー「焚火台型」（CS-113）

**Status**

Owned

### Color

Silver

### Material

Stainless Steel（18-8）

### Graphic Attribute

None

### Industrial Attribute

Folding Coffee Dripper（Firepit-Style, Uses Standard Paper Filters, 140g）

---

## KIT-035

**Brand**

Snow Peak

**Product**

ホットサンドクッカー トラメジーノ（GR-009R）

**Status**

Owned

### Color

Black

### Material

Aluminum Die-Cast, Silicone Coating（Body）／Stainless Steel（Handle）／Bamboo Laminate（Grip）／Cotton Canvas（Storage Case）

### Graphic Attribute

None

### Industrial Attribute

Hot Sandwich Cooker（Dual-Sandwich, 880g）

---

## KIT-036

**Brand**

DEVISE WORKS

**Product**

BOXER ハーフユニット

**Status**

Owned

### Quantity

1（2個入りセット）

### Color

Black（Silver Print Emblem）

### Material

Steel（Unspecified Finish）

### Graphic Attribute

Emblem（Silver Print）

### Industrial Attribute

Storage Box（0.5 Unit Size, for Cutlery/Cookware Organization）

---

## KIT-037

**Brand**

DEVISE WORKS

**Product**

SPICE BOTTLE BOYS

**Status**

Owned

### Quantity

2

### Color

Black

### Material

Stainless Steel（Black-Painted Body）／Heat-Resistant Glass（Bottle）

### Graphic Attribute

Laser-Engraved Design（MONSHO or LOGO type, wraparound）

### Industrial Attribute

Spice Bottle（3-Stage Adjustable Spout, φ49×H82.5mm, Not Waterproof）

---

## KIT-038

**Brand**

DEVISE WORKS

**Product**

禁断コラボ スパイスボトル

**Status**

Owned

### Quantity

2

### Color

Black

### Material

Stainless Steel（Black-Painted Body）／Heat-Resistant Glass（Bottle）

### Graphic Attribute

Kindan Collab Graphic（Wraparound, YOKOHAMA BAYOUT vol.2 Limited）

### Industrial Attribute

Spice Bottle（Same Base as SPICE BOTTLE BOYS, Event-Limited Graphic Variant）

---

## KIT-039

**Brand**

DEVISE WORKS

**Product**

BURABURA お玉

**Status**

Owned

### Color

Brown（Walnut）

### Material

Walnut（Handle, Engraved）／Nylon（Tip）

### Graphic Attribute

Laser-Engraved Design

### Industrial Attribute

Ladle（Hangable, Not Fire-Safe due to Nylon Tip）

---

## KIT-040

**Brand**

DEVISE WORKS

**Product**

BURABURA ターナー

**Status**

Owned

### Color

Brown（Presumed, Series-Consistent）

### Material

Wood（Handle, Engraved, Exact Species Unconfirmed）／Unconfirmed（Tip）

### Graphic Attribute

Laser-Engraved Design（Presumed, Series-Consistent）

### Industrial Attribute

Turner（Hangable, BURABURA Series）

---

## KIT-041

**Brand**

DEVISE WORKS

**Product**

BURABURA 菜ばし

**Status**

Owned

### Color

Brown（Rosewood）

### Material

Rosewood（Handle, Engraved）／Stainless Steel（Tip）

### Graphic Attribute

Laser-Engraved Design

### Industrial Attribute

Cooking Chopsticks（Hangable, Also Usable as Skewer）

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

## Version 1.4

所有物の洗い出し（Step 1）の一環として、FEDECA製トング4点、Snow Peak製カトラリー6点（先割れスプーン×3色・先細箸×3色）を新規登録。

### Changes

- KIT-009（新規）：FEDECA CLEVER TONG、名栗ブラック、標準サイズ（240mm）。Owned。
- KIT-010（新規）：FEDECA CLEVER TONG、ブラウン系の名栗、標準サイズ（240mm）。正確な公式カラー名は未確認（名栗イペ等の可能性）。Owned。
- KIT-011（新規）：FEDECA CLEVER TONG mini、名栗ブラック、150mm。Owned。
- KIT-012（新規）：FEDECA CLEVER TONG mini、ライトブラウン系の名栗、150mm。正確な公式カラー名は未確認。Owned。
- KIT-013〜015（新規）：Snow Peak チタン先割れスプーン（SCT-004）、オンライン限定色のグリーン・パープル・ブルーをそれぞれ個別登録。Owned。
- KIT-016〜018（新規）：Snow Peak チタン先細箸（SCT-115）、グリーン・パープル・ブルーをそれぞれ個別登録。Owned。
- KIT-010・KIT-012は公式カラー名が未確認のため、Product欄に「要確認」の注記を残した。正式名称が判明次第、更新する。

---

## Version 1.5

Version 1.4のKIT-009〜012を訂正。「つかみのトング」がFEDECAのCLEVER TONGとは別の独立した製品ライン（2026年Makuake発、CLEVER TONGの兄弟モデル、全長235mm、U字構造でバネ・ヒンジ無し）であることが判明したため、ブランド構成を全面的に修正。

### Changes

- KIT-009：CLEVER TONG（誤登録）→ つかみのトング（名栗ブラック）に修正。素材・サイズ（235mm、SUS821L1）を正しい仕様へ更新。
- KIT-010：CLEVER TONGのまま、色をブラウン系（未確認）→ 名栗ブラウン（確定）に修正。
- KIT-011：CLEVER TONG miniのまま、色を名栗ブラック（誤り）→ 名栗ホワイトに修正。
- KIT-012：CLEVER TONG miniのまま、色をライトブラウン系（未確認）→ 名栗ブラック（確定）に修正。
- 「つかみのトング」公式仕様（全長約235mm、重量約105g、ステンレスSUS821L1黒酸化発色、積層強化木ハンドル、真鍮ネジ、日本製）を反映。

---

## Version 1.6

所有物の洗い出し（Step 1）の一環として、カップ類6点（Snow Peakチタンマグ3種、サーモタンブラー2色、Way ECO CUP）を新規登録。

### Changes

- KIT-019（新規）：Snow Peak チタンシングルマグ220。Owned。
- KIT-020（新規）：Snow Peak チタンダブルマグ300（MG-152）。Owned。
- KIT-021（新規）：Snow Peak チタンダブルマグ450（MG-153）。Owned。
- KIT-022（新規）：Snow Peak サーモタンブラー470 サンド（TW-470-SN）。Owned。
- KIT-023（新規）：Snow Peak サーモタンブラー470 ブラック（TW-470-BK）。Owned。
- KIT-024（新規）：Snow Peak Way ECO CUP。年度限定ロゴ入りのため、具体的な年度（何年のWayイベント配布分か）は未確認。Owned。
- 会話内で言及された「KIT-020/021/022/023それぞれの買い替え候補（ダブル300/450の別色・限定品、または相当するシングルサイズ／YETI）」は、いずれも具体的な製品名が未確定のため、今回は正式なCandidate IDとして登録せず、口頭記録に留めた。具体化した時点でKIT-020〜023それぞれの枝番（例：KIT-022a=YETI候補）として登録する想定。

---

## Version 1.7

Version 1.6で保留にしていた買い替え候補を調査し、枝番Candidateとして正式登録。また、Snow Peak「サヨウ」（茶踊、CS-340）を新規登録。

### Changes

- Registry Rules・Candidate Recording Policyに「既存Owned品への買い替え候補も同じ枝番方式で記録する」旨を追記。
- KIT-020a（新規）：チタンダブルマグ300の海外限定カラー版候補。グレー／ブルー／パープル／グリーンのアノダイズカラー展開が存在することを確認したが、正確なモデル名・入手経路は未確認。Candidate。
- KIT-021a（新規）：チタンダブルマグ450の買い替え候補枠。具体的な色・製品・シングル450かどうかも含めて未確定のため、空枠として確保。Candidate。
- KIT-022a（新規）：サーモタンブラー470サンドの買い替え候補としてYETI Rambler 16oz（473ml）を仮登録。470mlに最も近い容量として確認。正式モデル名・色は未確認。Candidate。
- KIT-023a（新規）：サーモタンブラー470ブラックの買い替え候補として同じくYETI Rambler 16oz。Candidate。
- KIT-025（新規）：Snow Peak サヨウ（CS-340、2023年発売）。透明急須本体＋湯呑み2個＋風呂敷型収納ケースのセット。急須600ml、湯呑み150ml。Owned。

---

## Version 1.8

キッチンゾーンで使用するSnow Peak製バーナー・ストーブ6点、コーヒー器具3点、ホットサンドクッカー1点の計10点を、TP-004のFire/Coffee Domainとは別に、TP-011（Kitchen）側で管理する方針を反映。Registry Rulesに「Domain Scope Note」を新設した（本バージョン時点では「例外的取り決め」として記述）。

### Changes

- Registry Rulesに「Domain Scope Note (Kitchen vs. Fire/Coffee overlap)」を新設。
- KIT-026（新規）：Snow Peak フラットバーナー（GS-450R）。IGT規格対応カートリッジガスバーナー。Owned。
- KIT-027（新規）：Snow Peak 火焔ストーブ コーエン（クッカーセット）。バイオエタノール式アルコールストーブ、最大Φ23cm鍋対応。Owned。
- KIT-028（新規）：Snow Peak 火焔ストーブ サカン（BS-020）。卓上型アルコールストーブ、200ml、燃焼時間約70分。Owned。
- KIT-029（新規）：Snow Peak ヤエンストーブ レギ（GS-370）。低重心一体型カートリッジガスバーナー、2900kcal/h。Owned。
- KIT-030（新規）：Snow Peak ヤエンストーブ ナギ（GS-360）。風防一体型カートリッジガスバーナー、2800kcal/h。Owned。
- KIT-031（新規）：Snow Peak グリルバーナー 雪峰苑（GS-355）。鋳鉄グリドル焼肉バーナー、1700kcal/h。Owned。
- KIT-032（新規）：Snow Peak フィールドバリスタ ミル（CS-116）。手挽きセラミック刃コーヒーミル、225g。Owned。
- KIT-033（新規）：Snow Peak フィールドバリスタケトル ブラック Online Edition。オンライン限定黒、注ぎ口3穴構造、1.0L。Owned。
- KIT-034（新規）：Snow Peak フォールディングコーヒードリッパー「焚火台型」（CS-113）。ステンレス18-8、市販フィルター対応、140g。Owned。
- KIT-035（新規）：Snow Peak ホットサンドクッカー トラメジーノ（GR-009R）。アルミダイカスト、2枚同時焼成、880g。Owned。

---

## Version 1.9

Version 1.8の「Domain Scope Note」を訂正。プロジェクトオーナーより、Fire DomainとKitchenの区分は「例外的な取り決め」ではなく、燃料ではなく**目的**による定義上の区分であるとの指摘を受けた。Fire Domain＝暖房・炎の鑑賞目的（燃料は薪に限らずケロシン等も含む。FIR-018武井バーナーは灯油式だが暖房目的のためFire Domainのまま）。Kitchen＝調理目的（燃料はガス・アルコール等を問わない）。この原則に基づき記述を修正した。

### Changes

- Registry Rulesの「Domain Scope Note」を全面的に書き直し、「プロジェクトオーナーの判断による例外」という表現を削除。区分原則を「機材の目的（暖房・鑑賞 vs. 調理）」として明記。
- FIR-018（武井バーナー Purple Stove 501A）が灯油式でありながらFire Domainに留まる理由（暖房目的）を明記。
- KIT-026〜035の登録内容自体に変更なし。区分原則の記述のみ訂正。

---

## Version 2.0

所有物の洗い出し（Step 1）の一環として、DEVISE WORKS製の調味料入れ・収納ボックス・キッチンツール計6点（BOXERハーフユニット、SPICE BOTTLE BOYS×2、禁断コラボスパイスボトル×2、BURABURAシリーズ3種）を新規登録。

### Changes

- KIT-036（新規）：DEVISE WORKS「BOXERハーフユニット」。ユニットサイズ規格0.5サイズの黒いボックス、2個入り、カトラリー・調理器具の整理用。Owned。
- KIT-037（新規）：DEVISE WORKS「SPICE BOTTLE BOYS」×2。ステンレス黒塗装＋耐熱ガラス、レーザー彫刻、3段階出し口調整、φ49×H82.5mm。防水性なし。Owned。
- KIT-038（新規）：DEVISE WORKS「禁断コラボ スパイスボトル」×2。SPICE BOTTLE BOYSと同じベースに、YOKOHAMA BAYOUT vol.2限定の「禁断」コラボグラフィックを施したバージョン。Owned。
- KIT-039（新規）：DEVISE WORKS「BURABURA お玉」。ハンドルはウォールナット（彫刻入り、高級外車使用材）、先端はナイロン。Owned。
- KIT-040（新規）：DEVISE WORKS「BURABURA ターナー」。BURABURAシリーズの一つ。素材の詳細（正確な木材種・先端素材）は未確認のため、シリーズ準拠と推定する旨を注記。Owned。
- KIT-041（新規）：DEVISE WORKS「BURABURA 菜ばし」。ハンドルはローズウッド（彫刻入り）、先端はステンレス。串としても使用可能。Owned。

---

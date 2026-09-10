# TP-004 Equipment Registry Object Reference  
Version 7.11  
  
---  
  
# Purpose（目的）  
  
TP-004は、THE THIRD PLACEの公式Equipment Registry（装備台帳）である。  
  
この文書は、THE THIRD PLACEを構成するすべての物理的なオブジェクトを管理する。  
  
以下項目のSingle Source of Truthである:  
  
- Equipment  
- Components  
- Parent / Child relationships  
- Material  
- Color  
- Graphic Attribute  
- Industrial Attribute  
- Ownership Status  
  
Planning情報（計画段階の情報）は、意図的に除外している。  

TP-004はキッチン調理器具を管理しない。キッチン機材は、別途function-first（機能優先）の選定基準を持つTP-011 Galley Fareが管理する。詳細はTP-011を参照。  

Coffee機材は、他のすべてのDomainと異なる登録ルールに従う。比較検討中・意思決定中のアイテムは、TP-004ではなくPX-004 Barista Codexのみで追跡する。Coffeeアイテムは、購入されOwnedになった時点で初めてTP-004（COF-series）へ登録される。それまでの間、Coffee Domain（COF-series）は意図的に未入力のままとする — これはデータの欠落ではなく、設計上の仕様である。

このルールは、CoffeeとKitchenのみに適用される。他のすべてのDomain（Furniture、Light、Aroma、Storage、Fire）には影響しない: 検討中・保留中・決定済みだが未購入のアイテムは、これまで通り既存のStatusシステム（Essential / Candidate / Upgrade）を用いてTP-004へ登録され続ける。
  
---  
  
# Registry Rules（登録ルール）  
  
## Equipment Domains（装備ドメイン）  
  
Equipmentは、6つのDomainに分類される。  
  
1. Furniture  
2. Light  
3. Aroma  
4. Storage  
5. Coffee  
6. Fire  
  
---  
  
## Equipment ID（装備ID）  
  
各オブジェクトには、恒久的なIDが1つ付与される。  
  
Examples  
  
FUR-001  
  
LGT-001  
  
ARM-001  
  
STR-001  
  
COF-001  
  
FIR-001  
  
IDは変更されない。  

ブランチ接尾辞（小文字アルファベット、例: LGT-028a、LGT-028b）は、後続IDの番号をずらすことなく、同じ装備枠を競合する複数の製品候補を登録するために、親IDへ直接付与できる。これはChild Components（恒久的に付随する構成部品、同時に所有される）とは異なる: ブランチバリアントは、1つの枠に対する代替候補を表し、通常は最終的にどちらか一方だけが昇格（StatusがEssential/Ownedへ変更）し、もう一方は廃止または別枠へ分類される。  
  
---  
  
## Status（ステータス）  
  
| Status | 意味 |  
|---------|----------|  
| Owned | 現在所有している |  
| Essential | 必要であり、購入が決定している（購入待ち） |  
| Candidate | 必要だが、具体的な製品はまだ決まっていない（検討中） |  
| Upgrade | 既に所有しているものの置き換え、または「あれば良い」アイテム（最も優先度の低い層） |  

「Wanted」は廃止され、その意味は「Essential」へ統合された。  
  
---  
  
## Attribute Policy（属性ポリシー）  
  
Appearance（外観）は保存**しない**。  
  
Appearanceは、TP-002 Design Bibleにより、以下を用いて決定される:  
  
- Material  
- Color  
- Texture  
- Finish  
  
そのためTP-004が保存するのは、以下のみである:  
  
- Material  
- Color  
- Graphic Attribute  
- Industrial Attribute  
  
---  
  
# Furniture  

---  

## FUR-001  

**Brand**  

Kermit Chair USA  

**Product**  

Kermit Chair ①  

**Status**  

Owned  

### Child Components  

- FUR-002  
- FUR-003  
- FUR-004  
- FUR-005  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Organic Furniture  

---  

## FUR-002  

**Brand**  

ROYAL BROWN  

**Product**  

Chester Field Seat  

**Status**  

Owned  

**Parent**  

FUR-001  

### Color  

Black  

### Material  

Tochigi Leather  

### Graphic Attribute  

None  

### Industrial Attribute  

Craft Leather  

---  

## FUR-003  

**Brand**  

OLD MOUNTAIN  

**Product**  

Brass Bolt & Plate  

**Status**  

Owned  

**Parent**  

FUR-001  

### Color  

Gold  

### Material  

Brass  

### Graphic Attribute  

None  

### Industrial Attribute  

Hardware Custom  

---  

## FUR-004  

**Brand**  

natural mountain monkeys  

**Product**  

NOVITA  

**Status**  

Owned  

**Parent**  

FUR-001  

### Color  

Gold  

### Material  

Brass  

### Graphic Attribute  

None  

### Industrial Attribute  

Leg Extension  

---  

## FUR-005  

**Brand**  

DEVISE WORKS × OLD MOUNTAIN  

**Product**  

HIJIWARU  

**Status**  

Owned  

**Parent**  

FUR-001  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

Occult Emblem  

### Industrial Attribute  

Armrest Replacement  

---  

## FUR-006  

**Brand**  

Kermit Chair USA  

**Product**  

Kermit Chair ②  

**Status**  

Owned  

### Child Components  

- FUR-007  
- FUR-008  
- FUR-009  
- FUR-010  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Organic Furniture  

---  

## FUR-007  

**Brand**  

DEVISE WORKS × PINO WORKS  

**Product**  

SANDANBARA  

**Status**  

Owned  

**Parent**  

FUR-006  

### Color  

Black  

### Material  

Leather  

### Graphic Attribute  

None  

### Industrial Attribute  

Seat Custom  

---  

## FUR-008  

**Brand**  

DEVISE WORKS × INAVANCE  

**Product**  

KURO Bolt & Plate  

**Status**  

Owned  

**Parent**  

FUR-006  

### Color  

Black  

### Material  

Black Anodized Aluminum  

### Graphic Attribute  

None  

### Industrial Attribute  

Hardware Custom  

---  

## FUR-009  

**Brand**  

DEVISE WORKS × natural mountain monkeys  

**Product**  

WARU NOVITA  

**Status**  

Owned  

**Parent**  

FUR-006  

### Color  

Black  

### Material  

Black Anodized Aluminum  

### Graphic Attribute  

None  

### Industrial Attribute  

Leg Extension  

---  

## FUR-010  

**Brand**  

DEVISE WORKS × OLD MOUNTAIN  

**Product**  

HIJIWARU  

**Status**  

Owned  

**Parent**  

FUR-006  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

Occult Emblem  

### Industrial Attribute  

Armrest Replacement  

---  

## FUR-011  

**Brand**  

DEVISE WORKS × SOMABITO  

**Product**  

SOMA Chair ①  

**Status**  

Owned  

### Color  

Black  

### Material  

Leather / Walnut  

### Graphic Attribute  

Street Graffiti-style Occult Emblem (Silkscreen, White)  

### Industrial Attribute  

Fireside Chair  

---  

## FUR-012  

**Brand**  

SOMABITO  

**Product**  

SOMA Chair ②  

**Status**  

Owned  

### Color  

Black / Brown  

### Material  

Leather / Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Fireside Chair  

---  

## FUR-013  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

EXTENMON TABLE  

**Status**  

Owned  

### Child Components  

- FUR-014  
- FUR-015  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

Occult Emblem (Silkscreen, Black)  

### Industrial Attribute  

Kitchen Extension Table  

---  

## FUR-014  

**Brand**  

DEVISE WORKS × ANCAM  

**Product**  

ANO D TENBAN  

**Status**  

Upgrade  

**Parent**  

FUR-013  

### Color  

Black  

### Material  

Black Skin Iron (approx. 1cm)  

### Graphic Attribute  

Street Graffiti-style Brand Logo (Cutout)  

### Industrial Attribute  

Unit Top Plate  

---  

## FUR-015  

**Brand**  

DEVISE WORKS × WANTKEY CAMP  

**Product**  

ONETOP"D"  

**Status**  

Upgrade  

**Parent**  

FUR-013  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

Engraved Logo  

### Industrial Attribute  

Unit Top Plate  

---  

## FUR-016  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

Butterfly D  

**Status**  

Owned  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

Occult Emblem (Silkscreen)  

### Industrial Attribute  

Folding Table  

---  

## FUR-017  

**Brand**  

nodel design  

**Product**  

Butterfly Table M Black Look  

**Status**  

Upgrade  

### Color  

Black  

### Material  

Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Side Table  

---  

## FUR-018  

**Brand**  

BONFLAG  

**Product**  

TACTICAL AIR SOFA 2P  

**Status**  

Owned  

### Color  

Black  

### Material  

Oxford 1000D / PVC  

### Graphic Attribute  

None  

### Industrial Attribute  

Inflatable Sofa  

---  

## FUR-019  

**Brand**  

BONFLAG  

**Product**  

TACTICAL AIR BED 2P  

**Status**  

Owned  

### Color  

Black  

### Material  

Oxford 1000D / PVC  

### Graphic Attribute  

None  

### Industrial Attribute  

Inflatable Bed  

---  

## FUR-020  

**Brand**  

Snow Peak  

**Product**  

ダウン システムオフトン（BD-060, Quilt component only）  

**Status**  

Essential  

**Quantity**  

2  

### Color  

Unconfirmed（メーカー公式ページに色名記載なし、要確認）  

### Material  

50D Polyester（表地）／150D Polyester（裏地）／Down 95%・Feather 5%（中綿）  

### Graphic Attribute  

None  

### Industrial Attribute  

Quilt（関東〜雪中入門用、快適温度2℃・下限温度-4℃、FUR-021と併用が前提）  

---  

## FUR-021  

**Brand**  

Snow Peak  

**Product**  

コンパクトワイドマット（TM-089）  

**Status**  

Essential  

**Quantity**  

2  

### Color  

Unconfirmed（メーカー公式ページに色名記載なし、要確認）  

### Material  

75D Polyester  

### Graphic Attribute  

None  

### Industrial Attribute  

Sleeping Mat（R値5.4・ASTM F3340-22準拠、2枚連結使用。FUR-020セット付属。FUR-022系との併用時は本格雪中用の主断熱層としても使用）  

---  

## FUR-022  

**Brand**  

Unconfirmed（候補2社から選定予定）  

**Product**  

Unconfirmed  

**Status**  

Candidate  

### Branch Variants  

- FUR-022a  
- FUR-022b  

### Color  

Black  

### Material  

Down（Full Custom Order）  

### Industrial Attribute  

Quilt（本格雪中用。バックレス構造につきFUR-021・FUR-023との併用が必須。カスタムオーダーで下限-18℃級を想定）  

---  

## FUR-022a  

**Brand**  

Enlightened Equipment  

**Product**  

Accomplice（2-Person Sleeping Quilt）  

**Status**  

Candidate  

**Parent**  

FUR-022  

### Color  

Black  

### Material  

Down（850fp／950fp選択可、Full Custom）  

### Industrial Attribute  

Quilt（2人用、パッド固定ストラップ標準装備、外側19色・内側12色からのフルカスタム展開）  

---  

## FUR-022b  

**Brand**  

UGQ Outdoor  

**Product**  

Tango Duo（Quilt for 2）  

**Status**  

Candidate  

**Parent**  

FUR-022  

### Color  

Black  

### Material  

Down（850fp／900fp選択可、Full Custom）  

### Industrial Attribute  

Quilt（2人用、Made to Order、外側50色以上・内側11色からのフルカスタム展開）  

---  

## FUR-023  

**Brand**  

Unconfirmed  

**Product**  

Unconfirmed  

**Status**  

Candidate  

### Color  

Unconfirmed  

### Material  

Closed-Cell Foam  

### Industrial Attribute  

Sleeping Mat（本格雪中用、断熱補強およびエア漏れ時の保険。FUR-021の下に重ね敷きする想定）  

---  

## FUR-024  

**Brand**  

Unconfirmed（候補2案から選定予定）  

**Product**  

Unconfirmed  

**Status**  

Candidate  

### Branch Variants  

- FUR-024a  
- FUR-024b  

### Color  

Black  

### Material  

Unconfirmed  

### Industrial Attribute  

Pad Sheet（マット上に敷くシーツ。約77×196cm相当を2枚使用しFUR-021全面をカバー。関東〜雪中入門用・本格雪中用の両方で共通使用）  

---  

## FUR-024a  

**Brand**  

Therm-a-Rest  

**Product**  

Synergy Lite Sheet（X-Large）  

**Status**  

Candidate  

**Parent**  

FUR-024  

### Color  

Black  

### Material  

Nylon  

### Industrial Attribute  

Pad Sheet（専用ブランド品、X-Largeサイズ：76×196cm）  

---  

## FUR-024b  

**Brand**  

Unconfirmed（汎用品）  

**Product**  

汎用キャンプマット用フィッテッドシーツ  

**Status**  

Candidate  

**Parent**  

FUR-024  

### Color  

Black  

### Material  

Unconfirmed  

### Industrial Attribute  

Pad Sheet（汎用品、寸法要件優先：約77×196cm、ブランド不問）  

# Light  

---  

## LGT-001  

**Brand**  

DEVISE WORKS × BLACK DESIGN  

**Product**  

KUROshidare  

**Status**  

Owned  

### Color  

Black  

### Material  

Oak  

### Graphic Attribute  

None  

### Industrial Attribute  

Lantern Stand  

---  

## LGT-002  

**Brand**  

Vapourax  

**Product**  

M320  

**Status**  

Owned  

### Color  

Gold  

### Material  

Brass  

### Graphic Attribute  

None  

### Industrial Attribute  

Kerosene Lantern  

---  

## LGT-003  

**Brand**  

WANTKEY CAMP × 38Explore  

**Product**  

38-kT HAUS5 WANTKEY Exclusive  

**Status**  

Owned  

### Child Components  

- LGT-004  
- LGT-005  
- LGT-006  
- LGT-007  
- LGT-008  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

38-kT Shade & Case  

---  

## LGT-004  

**Brand**  

nodel design  

**Product**  

38-kT miyabi wood (Joker)  

**Status**  

Owned  

**Parent**  

LGT-003  

### Color  

Brown  

### Material  

Camphor Wood  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-005  

**Brand**  

nodel design  

**Product**  

38-kT miyabi wood (King)  

**Status**  

Owned  

**Parent**  

LGT-003  

### Color  

Brown  

### Material  

Satin Walnut  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-006  

**Brand**  

nodel design  

**Product**  

38-kT miyabi wood (Queen)  

**Status**  

Owned  

**Parent**  

LGT-003  

### Color  

Brown  

### Material  

Zebrawood  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-007  

**Brand**  

nodel design  

**Product**  

38-kT miyabi wood (Jack)  

**Status**  

Owned  

**Parent**  

LGT-003  

### Color  

Brown  

### Material  

New Guinea Walnut  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-008  

**Brand**  

nodel design  

**Product**  

38-kT miyabi wood (Ace)  

**Status**  

Owned  

**Parent**  

LGT-003  

### Color  

Brown  

### Material  

Jindai Yakusugi  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-009  

**Brand**  

38Explore  

**Product**  

38-kT HAUS5  

**Status**  

Owned  

### Child Components  

- LGT-010  
- LGT-011  
- LGT-012  
- LGT-013  
- LGT-014  
- LGT-015  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

38-kT Shade & Case  

---  

## LGT-010  

**Brand**  

1/f SPACE  

**Product**  

38-kT HAUS5 PANEL  

**Status**  

Owned  

**Parent**  

LGT-009  

### Color  

Black  

### Material  

Stainless Steel  

### Industrial Attribute  

Custom Panel  

---  

## LGT-011  

**Brand**  

neru design works × 1/f SPACE  

**Product**  

MIYABI RICH 0/f Copper Glove  

**Status**  

Owned  

**Parent**  

LGT-009  

### Color  

Copper  

### Material  

Copper  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-012  

**Brand**  

CARMA STORE  

**Product**  

THE RICH Celluloid Mother of Pearl  

**Status**  

Owned  

**Parent**  

LGT-009  

### Color  

White  

### Material  

Mother of Pearl  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-013  

**Brand**  

CARMA STORE  

**Product**  

38KT TORTOISE  

**Status**  

Owned  

**Parent**  

LGT-009  

### Color  

Brown  

### Material  

Celluloid (Tortoise Shell Pattern)  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-014  

**Brand**  

neru design works × LampUp  

**Product**  

MIYABI RICH Amber  

**Status**  

Owned  

**Parent**  

LGT-009  

### Color  

Multi  

### Material  

Stained Glass  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-015  

**Brand**  

neru design works × LampUp  

**Product**  

MIYABI RICH Alumi Frozen  

**Status**  

Essential  

**Parent**  

LGT-009  

### Color  

Silver  

### Material  

Aluminum  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-016  

**Brand**  

nodel design  

**Product**  

3ndelier Blade  

**Status**  

Owned  

### Child Components  

- LGT-017  
- LGT-021  
- LGT-022  
- LGT-023  
- LGT-024  
- LGT-025  
- LGT-026  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Lantern Hanger  

---  

## LGT-017  

**Brand**  

nodel design  

**Product**  

G31 Slider  

**Status**  

Owned  

**Parent**  

LGT-016  

### Quantity  

3  

### Color  

Black  

### Material  

Aluminum  

### Industrial Attribute  

Slider  

---  

## LGT-018  

**Brand**  

nodel design × solworks  

**Product**  

Solol Wood (Walnut)  

**Status**  

Owned  

### Child Components  

- LGT-042  

### Color  

Brown  

### Material  

Walnut  

### Industrial Attribute  

Airlight Shade  

---  

## LGT-019  

**Brand**  

nodel design × solworks  

**Product**  

Solol Wood (Hinoki)  

**Status**  

Owned  

### Child Components  

- LGT-043  

### Color  

Brown  

### Material  

Hinoki  

### Industrial Attribute  

Airlight Shade  

---  

## LGT-020  

**Brand**  

nodel design × solworks  

**Product**  

Solol Wood (Pine)  

**Status**  

Owned  

### Child Components  

- LGT-044  

### Color  

Brown  

### Material  

Pine  

### Industrial Attribute  

Airlight Shade  

---  

## LGT-021  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (Walnut)  

**Status**  

Owned  

**Parent**  

LGT-016  

### Color  

Brown  

### Material  

Walnut  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-022  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (Hinoki)  

**Status**  

Upgrade  

**Parent**  

LGT-016  

### Color  

Brown  

### Material  

Hinoki  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-023  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (Karin)  

**Status**  

Owned  

**Parent**  

LGT-016  

### Color  

Brown  

### Material  

Karin  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-024  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (African Wood)  

**Status**  

Owned  

**Parent**  

LGT-016  

### Color  

Brown  

### Material  

African Wood  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-025  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (Pine)  

**Status**  

Upgrade  

**Parent**  

LGT-016  

### Color  

Brown  

### Material  

Pine  

### Industrial Attribute  

Wood Sleeve  

---  

## LGT-026  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (Maple)  

**Status**  

Upgrade  

**Parent**  

LGT-016  

### Color  

Brown  

### Material  

Maple  

### Industrial Attribute  

Wood Sleeve  

---  

## LGT-027  

**Brand**  

TARPtoTARP × LampUp  

**Product**  

Glass Shade & Wood Stand Set  

**Status**  

Owned  

### Color  

Gray  

### Material  

Glass  

### Graphic Attribute  

None  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-028  

**Brand**  

CARMA STORE  

**Product**  

MMM Pocket Shade PAJAMA MOON LIAN HOME  

**Status**  

Owned  

### Branch Variants  

- LGT-028a  
- LGT-028b  

### Color  

Floral  

### Material  

Fabric  

### Graphic Attribute  

None  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-028a  

**Brand**  

neru design works  

**Product**  

メッシュシェード  

**Status**  

Candidate  

**Parent**  

LGT-028  

### Color  

Copper  

### Material  

Copper（Mesh Fabric）  

### Graphic Attribute  

None  

### Industrial Attribute  

Portable LED Lantern（38-kT Shade）  

---  

## LGT-028b  

**Brand**  

CALMA STORE × neru design works  

**Product**  

POCKET SHADE M（neru design works柄）  

**Status**  

Candidate  

**Parent**  

LGT-028  

### Color  

Khaki  

### Material  

Fabric  

### Graphic Attribute  

None  

### Industrial Attribute  

Portable LED Lantern（38-kT Shade, Foldable）  

---  

## LGT-029  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

デバデバの実  

**Status**  

Owned  

### Child Components  

- LGT-030  
- LGT-045  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Airlight Shade  

---  

## LGT-030  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

MITOCOLOMON  

**Status**  

Owned  

**Parent**  

LGT-029  

### Color  

Brown（Wood）／Gold（Brass）  

### Material  

Wood（Engraved）／Brass（Pole）  

### Graphic Attribute  

Engraved Design  

### Industrial Attribute  

Lantern Stand（Base W160×D160×H15mm, Brass Pole H270mm, 1/4-inch screw thread, compatible with tripod series）  

---  

## LGT-031  

**Brand**  

WHAT WE WANT × COLONISTA  

**Product**  

CONPE10_WWW  

**Status**  

Owned  

### Child Components  

- LGT-032  
- LGT-046  

### Color  

White  

### Material  

Fabric  

### Graphic Attribute  

None  

### Industrial Attribute  

Airlight Shade  

---  

## LGT-032  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

OTACHIDAI BLACK  

**Status**  

Owned  

**Parent**  

LGT-031  

### Color  

Black（Body）／Gold（Brass Pole）  

### Material  

Walnut, Black-Painted（Engraved）／Brass（Pole）  

### Graphic Attribute  

Occult Emblem（Engraved, Gold Ink Inlay）  

### Industrial Attribute  

Tabletop Lantern Stand（Base W140×D150×H26mm, Brass Pole H190mm, 1/4-inch screw thread）  

---  

## LGT-033  

**Brand**  

neru design works × T no T.LE  

**Product**  

Valo shade "MID CENTURY"  

**Status**  

Owned  

### Child Components  

- LGT-047  

### Color  

Orange  

### Material  

Silicone  

### Industrial Attribute  

Airlight Shade  

---  

## LGT-034  

**Brand**  

KI-no  

**Product**  

Kn One Off Shade (38灯)  

**Status**  

Owned  

### Child Components  

- LGT-048  

### Color  

Oak / Light Blue  

### Material  

Resin / Walnut  

### Industrial Attribute  

Airlight Shade  

---  

## LGT-035  

**Brand**  

neru design works  

**Product**  

革シェード  

**Status**  

Owned  

### Child Components  

- LGT-049  

### Color  

Light Brown  

### Material  

Leather  

### Industrial Attribute  

Airlight Shade  

---  

## LGT-036  

**Brand**  

38Explore  

**Product**  

38-kT THE RICH classic100  

**Status**  

Owned  

### Quantity  

2  

### Color  

Black  

### Material  

Brass  

### Graphic Attribute  

None  

### Industrial Attribute  

Premium Lantern  

---  

## LGT-037  

**Brand**  

rove troupe  

**Product**  

RT-01AC01 / ECHO LAMP  

**Status**  

Essential  

### Child Components  

- LGT-050  

### Color  

Black  

### Material  

Aluminum / Glass  

### Graphic Attribute  

None  

### Industrial Attribute  

Airlight Shade (Hanging)  

---  

## LGT-038  

**Brand**  

KURASHI MADE  

**Product**  

DOME LOOK  

**Status**  

Essential  

### Child Components  

- LGT-051  

### Color  

Black  

### Material  

Aluminum / Glass  

### Graphic Attribute  

None  

### Industrial Attribute  

Airlight Shade (Hanging)  

---  

## LGT-039  

**Brand**  

IFA  

**Product**  

Pivotshade  

**Status**  

Essential  

### Child Components  

- LGT-052  

### Color  

Silver  

### Material  

Aluminum  

### Graphic Attribute  

None  

### Industrial Attribute  

Airlight Shade (Hanging)  

---  

## LGT-040  

Vacant ID. Reserved for a fourth hanging-type Airlight shade, not yet identified.  

### Child Components  

- LGT-053  

---  

## LGT-041  

**Brand**  

wildingout  

**Product**  

LF1984  

**Status**  

Candidate  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Portable LED Lantern  

---  

## LGT-042  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-018  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

---  

## LGT-043  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-019  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

---  

## LGT-044  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-020  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

---  

## LGT-045  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-029  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

---  

## LGT-046  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-031  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

---  

## LGT-047  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-033  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

---  

## LGT-048  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-034  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

---  

## LGT-049  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-035  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

---  

## LGT-050  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-037  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

---  

## LGT-051  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-038  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

---  

## LGT-052  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-039  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

---  

## LGT-053  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-040 (pending — parent shade not yet identified)  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

# Aroma  

---  

## ARM-001  

**Brand**  

asimocrafts × UNPLUG TRACK DESIGN MARKET  

**Product**  

MOSCOKEZURU IROSOERU  

**Status**  

Owned  

### Color  

Brown / Blue  

### Material  

Oak / Resin  

### Graphic Attribute  

None  

### Industrial Attribute  

Mosquito Coil Holder  

---  

## ARM-002  

**Brand**  

OLD MOUNTAIN  

**Product**  

MKGP  

**Status**  

Essential  

### Color  

Gold / Brown  

### Material  

Brass / Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Palo Santo Holder  

---  

## ARM-003  

**Brand**  

Filoméla  

**Product**  

INCENSE CHAMBER Tokyo Limited  

**Status**  

Essential  

### Color  

Gray  

### Material  

Ceramic  

### Graphic Attribute  

None  

### Industrial Attribute  

Incense Chamber  

---  

## ARM-004  

**Brand**  

UNIT/04 × KUNST・BAUM  

**Product**  

SCENT TOWER  

**Status**  

Candidate  

### Color  

Black  

### Material  

Metal  

### Graphic Attribute  

None  

### Industrial Attribute  

Vertical Diffuser  

# Storage  

---  

## STR-001  

**Brand**  

Snow Peak  

**Product**  

Shelf Container 25 雪峰祭 Black  

**Alias**  

Shellcon 01  

**Status**  

Owned  

### Child Components  

- STR-002  
- STR-003  
- STR-004  
- STR-005  
- STR-006  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Storage Container  

---  

## STR-002  

**Brand**  

WANTKEY CAMP  

**Product**  

WANTKEY BOXTOP SC25 HEXA  

**Parent**  

STR-001  

### Status  

Owned  

### Color  

Brown  

### Material  

Walnut / Resin  

### Graphic Attribute  

None  

### Industrial Attribute  

Top Board  

---  

## STR-003  

**Brand**  

RALBUDDY PRODUCT × WANTKEY CAMP  

**Product**  

HEXA Side Table  

**Parent**  

STR-001  

### Status  

Owned  

### Color  

Brown  

### Material  

Walnut / Resin  

### Graphic Attribute  

None  

### Industrial Attribute  

Side Expansion  

---  

## STR-004  

**Brand**  

WANTKEY CAMP  

**Product**  

WANTKEY UNITY HANDLE 25  

**Parent**  

STR-001  

### Status  

Owned  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Handle Custom  

---  

## STR-005  

**Brand**  

WANTKEY CAMP  

**Product**  

WANTKEY GP-SC  

**Parent**  

STR-001  

### Status  

Owned  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Grip Custom  

---  

## STR-006  

**Brand**  

BALLISTICS  

**Product**  

SHELCON LEG 25  

**Parent**  

STR-001  

### Status  

Essential  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Leg Custom  
---  

## STR-007  

**Brand**  

Snow Peak  

**Product**  

Shelf Container 25 Black Label  

**Alias**  

Shellcon 02  

**Status**  

Owned  

### Child Components  

- STR-008  
- STR-009  
- STR-010  
- STR-011  
- STR-012  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Storage Container  

---  

## STR-008  

**Brand**  

WANTKEY CAMP  

**Product**  

WANTKEY BOXTOP SC25 TC  

**Parent**  

STR-007  

### Status  

Owned  

### Color  

Brown  

### Material  

Walnut / Resin  

### Industrial Attribute  

Top Board  

---  

## STR-009  

**Brand**  

NOWELLCAMP × WANTKEY CAMP  

**Product**  

SST WANTKEY Version  

**Parent**  

STR-007  

### Status  

Owned  

### Color  

Black  

### Material  

Steel  

### Industrial Attribute  

Side Expansion  

---  

## STR-010  

**Brand**  

DAMNGOOD!!  

**Product**  

SKULL HANDLE  

**Parent**  

STR-007  

### Status  

Owned  

### Color  

Black  

### Material  

Steel  

### Industrial Attribute  

Handle Custom  

---  

## STR-011  

**Brand**  

OMA FACTORY  

**Product**  

OMA.SC-PICATINNY RAIL-No.001G  

**Parent**  

STR-007  

### Status  

Owned  

### Color  

Black  

### Material  

Anodized Aluminum  

### Industrial Attribute  

Grip Custom  

---  

## STR-012  

**Brand**  

LOCKFIELD EQUIPMENT × BALLISTIC  

**Product**  

SHELCON LEG 25  

**Parent**  

STR-007  

### Status  

Essential  

### Color  

Black  

### Material  

Steel  

### Industrial Attribute  

Leg Custom  

---  

## STR-013  

**Brand**  

nodel design  

**Product**  

Beck Container ①  

**Status**  

Owned  

### Child Components  

- STR-014  

### Color  

Black  

### Material  

Painted Aluminum  

### Industrial Attribute  

Modular Storage（Kitchen）  

---  

## STR-014  

**Brand**  

nodel design  

**Product**  

Wood Board（Oak）  

**Parent**  

STR-013  

### Status  

Essential  

### Quantity  

2組  

### Color  

Brown  

### Material  

Oak  

---  

## STR-015  

**Brand**  

nodel design  

**Product**  

Beck Container ②  

**Status**  

Owned  

### Child Components  

- STR-016  

### Color  

Black  

### Material  

Painted Aluminum  

### Industrial Attribute  

Modular Storage（Coffee & Table Components）  

---  

## STR-016  

**Brand**  

nodel design  

**Product**  

Wood Board（Walnut）  

**Parent**  

STR-015  

### Status  

Essential  

### Quantity  

2組  

### Color  

Brown  

### Material  

Walnut  

---  

## STR-017  

**Brand**  

nodel design  

**Product**  

Container Bridge Frame  

**Status**  

Essential  

### Child Components  

- STR-018  
- STR-019  

### Color  

Black  

### Material  

Black Skin Iron  

---  

## STR-018  

**Brand**  

nodel design  

**Product**  

Wood Board（Walnut）  

**Parent**  

STR-017  

### Status  

Owned  

### Quantity  

3組  

### Color  

Brown  

### Material  

Walnut  

---  

## STR-019  

**Brand**  

nodel design  

**Product**  

Butterfly Under Shelf  

**Parent**  

STR-017  

### Status  

Essential  

### Color  

Black  

### Material  

Aluminum  

### Industrial Attribute  

Under Shelf  

---  

## STR-020  

**Brand**  

サンゾー工務店 × asimocrafts × 横濱帆布鞄  

**Product**  

rodan_no_kaban  

**Status**  

Owned  

### Color  

Gray  

### Material  

Canvas  

### Industrial Attribute  

Fire Tool Storage  

---  

## STR-021  

**Brand**  

サンゾー工務店 × asimocrafts × 横濱帆布鞄  

**Product**  

table_no_kaban  

**Status**  

Owned  

### Color  

Gray  

### Material  

Canvas  

### Industrial Attribute  

Iron Table Storage  

---  

## STR-022  

**Brand**  

Snow Peak  

**Product**  

Multi Container L  

**Status**  

Owned  

### Color  

Black  

### Material  

Fabric  

### Industrial Attribute  

Accessory Storage  

---  

## STR-023  

**Brand**  

WHATNOT  

**Product**  

One Touch Bucket HD  

**Status**  

Owned  

### Color  

Black  

### Material  

Canvas  

### Industrial Attribute  

Consumables Storage  

---  

## STR-024  

**Brand**  

YETI  

**Product**  

Roadie 24  

**Status**  

Owned  

### Color  

Gray  

### Material  

Polyethylene（Rotomolded）  

### Industrial Attribute  

Cooler  

---  

## STR-025  

**Brand**  

YETI  

**Product**  

Hopper Flip 16  

**Status**  

Owned  

### Color  

Black  

### Material  

DryHide Fabric  

### Industrial Attribute  

Soft Cooler  

# Coffee  

Coffee Domainは、抽出に関する一連のワークフロー全体を管理する。  

選定基準や購入優先順位は、TP-005 Acquisition Strategyの管轄である。  

TP-004は、装備（Equipment）のみを管理する。  

---  

## COF-001  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-002  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-003  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-004  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-005  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-006  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-007  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-008  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-009  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-010  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-011  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-012  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-013  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-014  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-015  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-016  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-017  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-018  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

## COF-019  

**Brand**  

**Product**  

**Status**  

### Color  

### Material  

### Graphic Attribute  

### Industrial Attribute  

---  

# Fire  

---  

## FIR-001  

**Brand**  

サンゾー工務店  

**Product**  

RODAN BRICK  

**Status**  

Owned  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Fire Pit  

---  

## FIR-002  

**Brand**  

サンゾー工務店  

**Product**  

Iron Table  

**Status**  

Owned  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Fire Table (stand for FIR-001 RODAN BRICK)  

---  

## FIR-003  

**Brand**  

DEVISE WORKS × BLACK DESIGN  

**Product**  

ブランコ（秋竿）  

**Status**  

Owned  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Fire Tool Stand  

---  

## FIR-004  

**Brand**  

neru design works  

**Product**  

ono kezuru  

**Status**  

Owned  

### Color  

Brown  

### Material  

Steel / Oak  

### Graphic Attribute  

None  

### Industrial Attribute  

Axe  

---  

## FIR-005  

**Brand**  

neru design works  

**Product**  

nata kezuru  

**Status**  

Owned  

### Color  

Brown  

### Material  

Steel / Oak  

### Graphic Attribute  

None  

### Industrial Attribute  

Machete  

---  

## FIR-006  

**Brand**  

サンゾー工務店  

**Product**  

PULSE  

**Status**  

Owned  

### Child Components  

- FIR-007  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Fire Tongs  

---  

## FIR-007  

**Brand**  

asimocrafts  

**Product**  

asigrip  

**Parent**  

FIR-006  

**Status**  

Owned  

### Color  

Brown  

### Material  

Wood  

### Graphic Attribute  

None  

### Industrial Attribute  

Grip Custom  

---  

## FIR-008  

**Brand**  

Snow Peak  

**Product**  

焚き火ツールPro  

**Status**  

Owned  

### Child Components  

- FIR-009  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Ash Scoop  

---  

## FIR-009  

**Brand**  

asimocrafts  

**Product**  

asigrip  

**Parent**  

FIR-008  

**Status**  

Owned  

### Color  

Brown  

### Material  

Wood  

### Graphic Attribute  

None  

### Industrial Attribute  

Grip Custom  

---  

## FIR-010  

**Brand**  

asimocrafts  

**Product**  

tsuru_s_asi  

**Status**  

Owned  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Fire Poker  

---  

## FIR-011  

**Brand**  

asimocrafts  

**Product**  

asiblaster  

**Status**  

Owned  

### Color  

Black  

### Material  

Stainless Steel / Oak  

### Graphic Attribute  

None  

### Industrial Attribute  

Fire Blower  

---  

## FIR-012  

**Brand**  

Snow Peak  

**Product**  

Folding Torch  

**Status**  

Owned  

### Child Components  

- FIR-013  
- FIR-014  
- FIR-015  
- FIR-016  
- FIR-017  

### Color  

Silver  

### Material  

Stainless Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Torch  

---  

## FIR-013  

**Brand**  

asimocrafts  

**Product**  

asigrip  

**Status**  

Owned  

**Parent**  

FIR-012  

### Color  

Brown  

### Material  

Wood  

### Graphic Attribute  

None  

### Industrial Attribute  

Grip Custom  

---  

## FIR-014  

**Brand**  

neru design works  

**Product**  

copper250  

**Status**  

Essential  

**Parent**  

FIR-012  

### Color  

Copper  

### Material  

Copper  

### Graphic Attribute  

None  

### Industrial Attribute  

Gas Tube Cover  

---  

## FIR-015  

**Brand**  

DAMNGOOD!! × OMA FACTORY  

**Product**  

FT no BARREL  

**Status**  

Upgrade  

**Parent**  

FIR-012  

### Color  

Gray  

### Material  

Titanium  

### Graphic Attribute  

None  

### Industrial Attribute  

Torch Barrel  

---  

## FIR-016  

**Brand**  

OMA FACTORY  

**Product**  

OMA.BARREL  

**Status**  

Owned  

**Parent**  

FIR-012  

### Color  

Gray  

### Material  

Titanium  

### Graphic Attribute  

None  

### Industrial Attribute  

Torch Barrel  

---  

## FIR-017  

**Brand**  

OMA FACTORY  

**Product**  

OMA.KNOB-No.071F  

**Status**  

Owned  

**Parent**  

FIR-012  

### Color  

Gray  

### Material  

Duralumin  

### Graphic Attribute  

None  

### Industrial Attribute  

Torch Knob  

---  

## FIR-018  

**Brand**  

武井バーナー  

**Product**  

Purple Stove 501A  

**Status**  

Owned  

### Color  

Gold  

### Material  

Brass  

### Graphic Attribute  

None  

### Industrial Attribute  

Kerosene Heater  

---  

## FIR-019  

**Brand**  

MT.SUMI  

**Product**  

Aura FG  

**Status**  

Candidate  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Fire Pit  

---  

## FIR-020  

**Brand**  

FIREGRAPHIX  

**Product**  

BLISS-SP  

**Status**  

Candidate  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Fire Pit  

# Parent / Child Rules（親子関係ルール）  

Parentオブジェクトは、主たる装備を表す。  

Childオブジェクトは、構成部品、カスタムパーツ、交換可能なアクセサリー、または恒久的に付随するアイテムである。  

Childオブジェクトは、将来ステータスが変更されない限り、単独では存在しない。  

Example  

FUR-001  
└ FUR-002  
└ FUR-003  
└ FUR-004  
└ FUR-005  

LGT-009  
└ LGT-010  
└ LGT-011  
└ LGT-012  
└ LGT-013  
└ LGT-014  
└ LGT-015  

STR-001  
└ STR-002  
└ STR-003  
└ STR-004  
└ STR-005  
└ STR-006  

STR-007  
└ STR-008  
└ STR-009  
└ STR-010  
└ STR-011  
└ STR-012  

---  

# Graphic Attribute（グラフィック属性）  

Graphic Attributeは、適用されたグラフィック表現のみを記録する。  

Graphicは装備そのもの**ではない**。  

Examples  

- Emblem  
- New Graphic  
- Skull  
- Silkscreen  
- Exterior Graphic  

グラフィックが存在しない場合、  

Graphic Attribute = None  

---  

# Industrial Attribute（インダストリアル属性）  

Industrial Attributeは、そのオブジェクトの機能的・構造的な役割を記録する。  

Examples  

Furniture  

- Organic Furniture  
- Folding Table  
- Seat Custom  
- Hardware Custom  
- Leg Extension  

Light  

- Portable LED Lantern  
- Lantern Stand  
- Glass Shade  
- Wood Sleeve  
- Ambient Light  

Storage  

- Storage Container  
- Top Board  
- Side Expansion  
- Handle Custom  
- Cooler  

Coffee  

- Espresso Machine  
- Grinder  
- Milk Steamer  
- Bean Storage  
- Tamper  
- WDT Tool  

Fire  

- Fire Pit  
- Fire Table  
- Fire Poker  
- Torch  
- Heater  
- Fire Blower  

---  

# Color Rule（カラールール）  

記録するのは、実際の物理的な色のみである。  

Examples  

- Black  
- Brown  
- Gold  
- Silver  
- White  
- Gray  
- Copper  
- Floral  
- Multi  

主観的な表現は認めない。  

---  

# Material Rule（マテリアルルール）  

記録するのは、実際の素材のみである。  

Examples  

- Walnut  
- Oak  
- Brass  
- Leather  
- Steel  
- Stainless Steel  
- Aluminum  
- Glass  
- Ceramic  
- Fabric  
- Resin  
- Titanium  

表面仕上げ（Surface finish）は、TP-002 Design Bibleの管轄である。  

---  

# Single Source of Truth（唯一の正）  

TP-004 Equipment Registryは、Human Principlesとの美意識的整合が求められる、すべてのキャンプ装備における正式な情報源である。キッチン調理器具は、TP-011 Galley Fareが別途管理し、TP-004には登録しない。  

以下の情報は、TP-004を発生源とする:  

- Equipment IDs  
- Brand  
- Product Name  
- Parent / Child relationships  
- Status  
- Material  
- Color  
- Graphic Attribute  
- Industrial Attribute  

他の文書はTP-004を参照するが、装備情報を再定義しない。  

Planning、Acquisition Strategy、Design Philosophy、Aesthetics、Positioning、Evaluationは、それぞれの文書で管理する。  

---  

# Related Documents  

- TP-001 THE THIRD PLACE Constitution  
- TP-002 Design Bible  
- TP-003 Field Atlas  
- TP-005 Acquisition Strategy  
- TP-006 Foundation Compass  
- TP-007 Habitat Architecture  
- TP-008 Affinity Lexicon  
- TP-009 Aesthetic Grammar  
- TP-010 Storage Blueprint  
- TP-011 Galley Fare  

---  

# Version History  

## Version 7.0  

旧・装備リストからの大規模リファクタリング。  

### Changes  

- 恒久的なEquipment IDを導入。  
- Parent / Child階層を導入。  
- Bible列を削除。  
- Priority列を削除。  
- 価格情報を削除。  
- 購入戦略を削除。  
- 装備レコードから設計思想を削除。  
- Status値を標準化。  
- Graphic Attributeを装備の同一性から分離。  
- Industrial Attributeを装備の同一性から分離。  
- TP-004を、全装備におけるSingle Source of Truthとして確立。  

---  

## Version 7.1  

重複していた3つのTP-004ファイルを1つの正本ファイルへ統合し、フォーマットを修復。  

### Changes  

- Light Domain（LGT-001〜LGT-034）を標準的なMarkdown構造（`##`見出し、`**bold**`のコアフィールド、`---`区切り）へ再フォーマットし、従来の崩れたプレーンテキスト形式を置き換えた。装備データ自体は置き換えておらず、既存のフィールド値（StatusおよびQuantityを含む）はそのまま保持。  
- LGT-017（G31 Slider）のQuantity = 1を確認（1つのスライダーが3つの38-kTランタンを保持）。  
- 現行のCoffee Domainの枠組みを維持（構造のみ、製品データなし）。  
- 重複していたTP-004ファイルを削除: `TP-004 Equipment Registry Object Reference.md` および `TP-004_Equipment_Registry_Object_Reference.md`。  
- 文書ヘッダー内で重複していたタイトル行を修正。  

---  

## Version 7.2  

プロジェクトオーナーとの直接確認に基づき、Storage Domain（STR）を全面的に修正。従来存在していたSTR-004の欠番（このファイルがバージョン管理下に入る以前から存在）を解消: これはデータの消失ではなく、Shellcon 01用の一体型ハンドル+グリップアクセサリーのために確保されていたものの、結局取得されなかった未使用IDであった。IDは欠番なく連番へ振り直した（STR-001〜STR-025）。これは「IDは変更されない」ルールに対する、正確性優先の例外として扱う。  

### Changes  

- STR-001（Shellcon 01）: Productを「Shelf Container 25 雪峰祭 Black」に修正。  
- STR-002（BOXTOP SC25 HEXA）: 変更なしを確認。  
- STR-003（HEXA Side Table）: Brandを「RALBUDDY PRODUCT × WANTKEY CAMP」に修正。  
- STR-004（旧STR-005、WANTKEY UNITY HANDLE 25）: 番号を振り直し、その他は変更なしを確認。  
- STR-005（旧STR-006、WANTKEY GP-SC）: 番号を振り直し、その他は変更なしを確認。  
- STR-006（旧STR-007、SHELCON LEG 25）: 番号を振り直し、その他は変更なしを確認。  
- STR-007（旧STR-008、Shellcon 02）: Productを「Shelf Container 25 Black Label」に修正。  
- STR-008（旧STR-009、BOXTOP SC25 TC）: 番号を振り直し、Industrial Attribute「Top Board」を追加。  
- STR-009（旧STR-010、SST WANTKEY Version）: 番号を振り直し、Brandの表記順を「NOWELLCAMP × WANTKEY CAMP」に修正、Industrial Attribute「Side Expansion」を追加。  
- STR-010（旧STR-011、SKULL HANDLE）: 番号を振り直し、Industrial Attribute「Handle Custom」を追加。  
- STR-011（旧STR-012）: Brand/Productを「WANTKEY CAMP / WANTKEY GP-SC」から「OMA FACTORY / OMA.SC-PICATINNY RAIL-No.001G」に修正、StatusをCandidateからOwnedに修正、MaterialをAnodized Aluminumに修正、Industrial Attribute「Grip Custom」を確認。  
- STR-012（旧STR-013、SHELCON LEG 25）: 番号を振り直し、その他は変更なしを確認。  
- STR-013（旧STR-014、Beck Container）: 2つの独立管理ユニットへ分割。「Beck Container ①」（Owned、Kitchen用、Oak製Wood Board）と、STR-015「Beck Container ②」（Owned、Coffee & Table Component用、Walnut製Wood Board）。個別ID化に伴い、Quantityフィールドは廃止。  
- STR-014（新規、旧STR-015/016のWood Boardペアの一部）: 「Wood Board (Oak)」×2セット、Wanted、Parent STR-013。  
- STR-015（新規）: 「Beck Container ②」、Owned、STR-016のParent。  
- STR-016（新規）: 「Wood Board (Walnut)」×2セット、Wanted、Parent STR-015。  
- STR-017（旧STR-015、Container Bridge Frame）: Beck ContainerとのParent/Child関係を解除、独立化し、自身のChildとしてSTR-018・STR-019を持つ。  
- STR-018（新規）: 「Wood Board (Walnut)」×3セット、Owned、Parent STR-017。素材は同一だが、オーナーの指示によりSTR-016とは別IDとする。  
- STR-019（新規）: 「Butterfly Under Shelf」、Wanted、Black Aluminum、Parent STR-017。  
- STR-020（旧STR-017、rodan_no_kaban）: 番号を振り直し、Industrial Attributeを「Fire Storage」から「Fire Tool Storage」に修正（焚き火・薪ストーブ関連の道具類を収納。焚き火台やストーブ本体は含まない）。  
- STR-021（旧STR-018、table_no_kaban）: 番号を振り直し、Industrial Attributeを「Fire Storage」から「Iron Table Storage」に修正（FIR-002 Iron Table専用ケース）。  
- STR-022（旧STR-019、Multi Container L）: 番号を振り直し、その他は変更なしを確認。  
- STR-023（旧STR-020、One Touch Bucket HD）: 番号を振り直し、その他は変更なしを確認。  
- STR-024（旧STR-021、YETI Roadie 24）: 番号を振り直し、メーカー仕様に基づきMaterialを「Resin」から「Polyethylene (Rotomolded)」に修正。  
- STR-025（旧STR-022、YETI Hopper Flip 16）: 番号を振り直し、メーカー仕様に基づきMaterialを「Fabric」から「DryHide Fabric」に修正（YETI独自の高密度シェルファブリック。詳細な繊維構成は非公開）。  
- 修正後のSTR-001・STR-007の階層構造を反映するよう、Parent / Child Rulesの例を更新。  
- 文書ヘッダーのバージョン番号は「Version 7.0」のまま維持（文書全体のバージョン番号の統一修正は別途予定）。  

---  

## Version 7.3  

Version 7.2と同一の作業セッション内で、プロジェクトオーナーとの直接確認に基づき、Furniture・Aroma・Fire・Light各Domainを全面修正し、あわせてStatusシステムを再定義。  

### Statusシステムの変更  

- 「Wanted」を廃止。Statusシステムは以下の4段階となる: **Owned**（現在所有）、**Essential**（必要かつ購入決定済み・購入待ち — 旧「Wanted」の意味を吸収）、**Candidate**（必要だが具体的製品は未決定）、**Upgrade**（既存品の置き換え、または「あれば良い」もの・最も優先度の低い層）。すべてのDomainにおける従来の「Wanted」エントリは、一律のデフォルトではなく、個別にEssential・Candidate・Upgradeのいずれかへ再分類した。  
- Storage Domain（Version 7.2で導入、本再定義以前）に対する追従修正: STR-006、STR-014、STR-016、STR-017、STR-019は依然「Wanted」のまま記録されていたため、新システムに合わせて「Essential」へ更新。  

### Furniture (FUR)  

- FUR-005、FUR-010（HIJIWARU ×2）: Graphic Attributeを「New Graphic」／「Emblem」から「Occult Emblem」に修正、Industrial Attributeを「Wood Custom」から「Armrest Replacement」に修正（いずれも純正アームレストの交換パーツ）。  
- FUR-009（WARU NOVITA）: Brandを「DEVISE WORKS × natural mountain monkeys」に修正、Productを「WARU NOVITA」に修正（従来、Brand/Productのフィールドが入れ替わっていた）。  
- FUR-011（旧SOMABITO単独のSOMA Chair ①、別ChildとしてFUR-012「Silkscreen Graphic」が存在）: 単一レコードへ統合 — Brandを「DEVISE WORKS × SOMABITO」に修正、Graphic Attribute「Street Graffiti-style Occult Emblem (Silkscreen, White)」を追加、Industrial Attributeを「Fireside Chair」に設定。旧FUR-012は独立エントリとしては存在しなくなった。  
- FUR-012（新番号、旧FUR-013、SOMA Chair ②）: 番号を振り直し、Industrial Attributeを「Fireside Chair」に設定、ColorをBlack/Brown、MaterialをLeather/Walnutに修正。  
- FUR-013（旧FUR-014、EXTENMON TABLE）: 番号を振り直し、Graphic Attribute「Occult Emblem (Silkscreen, Black)」を追加、Industrial Attributeを「Expandable Table」から「Kitchen Extension Table」に修正。  
- FUR-014（旧FUR-015、ANO D TENBAN）: 番号を振り直し、StatusをUpgradeに修正、Graphic Attributeを「Street Graffiti-style Brand Logo (Cutout)」に修正、Industrial Attributeを「Iron Top Plate」から「Unit Top Plate」に修正。  
- FUR-015（新規）: DEVISE WORKS × WANTKEY CAMP、「ONETOP"D"」 — FUR-013（EXTENMON TABLE）用の2つ目のユニット規格天板、Upgrade、Brown、Walnut、Graphic Attribute「Engraved Logo」、Industrial Attribute「Unit Top Plate」。正式な製品名・コラボレーション表記はDEVISE WORKSオンラインストアで確認済み。  
- FUR-016（Butterfly D）: Graphic Attribute「Occult Emblem (Silkscreen)」を追加。  
- FUR-017（Butterfly Table M Black Look）: StatusをCandidateからUpgradeに修正、Industrial Attributeを「Folding Table」から「Side Table」に修正。  
- FUR-018、FUR-019（BONFLAG Air Sofa/Bed）: Industrial Attributeをそれぞれ「Inflatable Sofa」／「Inflatable Bed」に修正。  

### Aroma (ARM)  

- ARM-001: Industrial Attributeを「Incense Holder」から「Mosquito Coil Holder」に修正。  
- ARM-002: Color/Materialを「Gold / Brown」「Brass / Walnut」に修正（従来はGold / Brassのみ）、Status再定義に伴いStatusをEssentialに変更。  
- ARM-003: Status再定義に伴いStatusをEssentialに変更。  

### Fire (FIR)  

- FIR-002（Iron Table）: Industrial Attributeを「Fire Table (stand for FIR-001 RODAN BRICK)」として明確化。  
- FIR-003: Industrial Attributeを「Lantern Hanger」から「Fire Tool Stand」に修正。  
- FIR-004／FIR-005（ono kezuru／nata kezuru）: Industrial Attributeをそれぞれ「Axe」「Machete」に分離（従来はいずれも「Hatchet」表記）。  
- FIR-006（PULSE）: Industrial Attributeを「Fire Poker」から「Fire Tongs」に修正。  
- FIR-008（新規）: Snow Peak、「焚き火ツールPro」（灰取りスコップ）、Owned、Black、Steel、Industrial Attribute「Ash Scoop」、新規FIR-009（asimocrafts asigrip）のParent。旧FIR-007の後に挿入し、以降のFire IDはすべて2つ繰り下げ。  
- FIR-010（新規、旧・空番のID枠）: asimocrafts、「tsuru_s_asi」（火かき棒）、Owned、Black、Steel、Industrial Attribute「Fire Poker」。  
- FIR-011（旧FIR-009、asiblaster）: 番号を振り直し、その他は変更なし。  
- FIR-012（旧FIR-008、Snow Peak Folding Torch）: 番号を振り直し、Childを2件追加（FIR-016、FIR-017）。  
- FIR-013（旧・FIR-009の重複参照、Folding Torch配下のasigrip）: 番号を振り直し、その他は変更なし。  
- FIR-014（旧FIR-012、copper250）: 番号を振り直し、FIR-012（Folding Torch）のChildへ再割当（従来は独立したFire Blowerとして記載）、Industrial Attributeを「Fire Blower」から「Gas Tube Cover」に修正。  
- FIR-015（旧FIR-013、FT no BARREL）: 番号を振り直し、StatusをUpgradeに修正、FIR-012のChildへ再割当。  
- FIR-016（新規）: OMA FACTORY、「OMA.BARREL」、FIR-012のChild、Owned、Gray、Titanium、Industrial Attribute「Torch Barrel」。  
- FIR-017（新規）: OMA FACTORY、「OMA.KNOB-No.071F」、FIR-012のChild、Owned、Gray、Duralumin、Industrial Attribute「Torch Knob」。  
- FIR-018（旧FIR-010、Purple Stove 501A）: 番号を振り直し、その他は変更なし。  
- FIR-019（旧FIR-014、Aura FG）: 番号を振り直し、StatusをWantedからCandidateに修正。  
- FIR-020（旧FIR-015、BLISS-SP）: 番号を振り直し、StatusはCandidateのまま確認。  
- アイテム数は15件から20件に増加（新規4件: 焚き火ツールPro、tsuru_s_asi、OMA.BARREL、OMA.KNOB-No.071F — 削除は無し）。  

### Light (LGT)  

- LGT-002: Industrial Attributeを「Kerosene」から「Kerosene Lantern」に修正。  
- LGT-003、LGT-009: Industrial Attributeを「Portable LED Lantern」から「38-kT Shade & Case」に修正（いずれもLEDランタン本体を収めるシェード／ケース一式であり、ランタン本体そのものではない）。  
- LGT-004〜008、LGT-011〜015: LGT-003・LGT-009配下の全ランタン本体Childに、Industrial Attribute「Portable LED Lantern」を確認・追加。  
- LGT-010: Industrial Attribute「Custom Panel」を追加。  
- LGT-013: Materialを「Celluloid (Tortoise Shell Pattern)」として明確化。  
- LGT-016（3ndelier Blade）: Industrial Attributeを「Pendant Lighting System」から「Lantern Hanger」に修正。Childリストを再構成: LGT-018〜020（Solol Wood shades）をChildから外し、独立したParentアイテムとして再登録。LGT-021〜026（Bladeに直接取り付けられる38-kT miyabi Wood）はChildのまま維持。  
- LGT-017（G31 Slider）: Quantityを1から3に修正（1つのスライダー一式が3つのランタンを保持する構造。Version 7.1時点の「Quantity = 1」の記述は本改訂で上書き — 実際には3つの物理スライダーを所有）。  
- LGT-018〜020（Solol Wood ×3）: LGT-016のChildから独立したParentアイテムへ変更、それぞれに専用のCARGO CONTAINER AIR LIGHTユニットをChildとして1件ずつ追加。Industrial Attributeを「Airlight Shade」に設定。  
- LGT-025〜026（38-kT miyabi Wood Pine/Maple）: StatusをOwnedからUpgradeに修正、LGT-016のChildであることを確認。  
- LGT-027、LGT-028（Glass Shade & Wood Stand Set、MMM Pocket Shade）: Industrial Attributeを「Ambient Table Light」／「Fabric Shade」から「Portable LED Lantern」に修正（いずれも自身の38-kTランタン本体を内包する独立シェードであり、Airlight Shadeではない）。  
- LGT-029、LGT-030（デバデバの実、CONPE10_WWW）: Industrial Attributeを「Wood Shade」／「Textile Shade」から「Airlight Shade」に修正、それぞれに専用のAIR LIGHTユニットをChildとして1件追加。  
- LGT-031（新位置）: neru design works × T no T.LE、「Valo shade "MID CENTURY"」、Owned、Orange、Silicone、Industrial Attribute「Airlight Shade」、Child = AIR LIGHTユニット1件。正式な製品名および素材（レザーではなくシリコン）はメーカー・取扱店情報で確認済み。  
- LGT-032（新位置）: KI-no、「Kn One Off Shade (38灯)」、Owned、Color Oak/Light Blue、Material Resin/Walnut、Industrial Attribute「Airlight Shade」、Child = AIR LIGHTユニット1件。正式なブランド・製品名は取扱店情報で確認済み。  
- LGT-033（新位置）: neru design works、「革シェード」、Owned、Light Brown、Leather、Industrial Attribute「Airlight Shade」、Child = AIR LIGHTユニット1件。正式な製品名はメーカー公式取扱ページ（LOG / lifeoverground.com）で確認済み。  
- LGT-034（旧LGT-031、38-kT THE RICH classic100）: 番号を振り直し、その他は変更なし。  
- LGT-035〜037（旧LGT-032〜034、ECHO LAMP／DOME LOOK／新規IFA Pivotshade）: 番号を振り直し、3件ともStatusをEssentialに修正、汎用の「Portable Lamp」から「Airlight Shade (Hanging)」へ再分類、それぞれに専用のAIR LIGHTユニットをChildとして1件追加。LGT-037（IFA Pivotshade）は新規: IFA、「Pivotshade」、Essential、Silver、Aluminum — CARGO CONTAINER AIR LIGHTと互換性のある上向き反射シェード、メーカー情報で確認済み。  
- LGT-038（新規）: 空番ID。未確定の4つ目のハンギング型Airlight Shade用として意図的に確保。将来のAIR LIGHTユニット用にChild枠（LGT-051）を1つ保持。  
- LGT-039（旧LGT-034、LF1984）: 番号を振り直し、StatusをWantedからCandidateに修正、Industrial Attributeは「Portable LED Lantern」であることを確認（自身にLEDを内蔵する独立型ランタンであり、Airlight Shadeではない）。  
- LGT-040〜051（新規）: CARGO CONTAINER「AIR LIGHT」ユニットを12個、個別番号で登録（Owned、Black、Plastic）。各Airlight Shade（LGT-018、019、020、029、030、031、032、033、035、036、037、および保留中のLGT-038）につき1個ずつ。各ユニットは個別のBluetooth制御でシェードと対になっているため、Quantity=12の単一レコードではなく個別登録とした。ブランド・製品情報はメーカー・取扱店情報で確認済み（CARGO CONTAINER、韓国のアウトドアブランド、83g、IP66、アプリ制御）。  
- アイテム数は34件から51件に増加（新規: LGT-031/032/033のAirlight Shade、LGT-037 IFA Pivotshade、LGT-038の空番枠、LGT-040〜051のAIR LIGHTユニット12個 — 削除は無し。既存アイテムはこれに伴い番号を振り直し）。  

### General  

- 文書ヘッダーのバージョン番号を「Version 7.0」から「Version 7.3」に修正し、前述のバージョン番号統一修正を完了。  

## Version 7.4  

ファイルレベルの整理: Version 7.1の変更履歴における不正確な記述を修正。当時「重複TP-004ファイルを削除した」としていたが、実際にはアンダースコア表記の重複ファイル（`TP-004_Equipment Registry Object Reference.md`、Version 7.0の内容）が本ファイルと並んでリポジトリ内に残存していた。あわせて、本ファイル名をリポジトリ全体の命名規則（`{SERIES}-{NUM}_Word_Word_Word.md`）に合わせて統一。

### Changes  

- `TP-004_Equipment Registry Object Reference.md`を削除（Version 7.0時点の古い重複ファイル。Version 7.1以降は本ファイルにより代替済み）。  
- 本ファイル名を`TP-004 Equipment Registry Object Reference.md`から`TP-004_Equipment_Registry_Object_Reference.md`へ変更し、TP・PX・TM各シリーズ文書で使われるアンダースコア区切りの命名規則に統一。  
- 本改訂では、装備データ・Status・フィールド値の変更は無し。  

---  

## Version 7.5  

プロジェクトオーナーとの直接協議に基づく対象範囲の修正: キッチン調理器具（ダッチオーブン、グリドル、調理用ナイフなど、機能的な調理道具）をTP-004の管理対象から除外し、新設の独立管理文書TP-011 Galley Fareへ移管。TP-004と異なり、TP-011はHuman Principles / Design Bibleとの美意識的整合を選定条件として求めない。その基準はfunction-first（機能優先 — 実際に調理が成立することが最優先）であり、演出性やブランド性を優先するものではない。  

### Changes  

- Purposeセクション: キッチン調理器具を除外し、TP-011を参照する旨の注記を追加。  
- Single Source of Truthセクション: TP-004の管轄を、Human Principlesの美意識的整合が求められる装備に限定。キッチン調理器具は明示的に対象外となった。  
- Related Documents: TP-011 Galley Fareを追加。  
- TP-004にKitchen domainは追加していない。KIT-series IDは本文書には登録せず、TP-011側で登録する。  

---  

## Version 7.6  

プロジェクトオーナーの直接指示によるLight Domainの更新: 新規のランタンスタンド用アクセサリー2点（MITOCOLOMON、OTACHIDAI BLACK）を、それぞれの親シェード（デバデバの実＝LGT-029、CONPE10_WWW）のChildとして、各Parentの直後に挿入。旧LGT-030以降のLight Domain IDはすべて2つ繰り下げ（「IDは変更されない」ルールに対する、正確性優先の例外。Version 7.2で設けた前例に準拠）。  

### Changes  

- LGT-029（デバデバの実）: Child Componentsを更新し、既存のAIR LIGHT Child（番号振り直し後LGT-045、旧LGT-043）に加え、新規LGT-030（MITOCOLOMON）を含める。  
- LGT-030（新規）: DEVISE WORKS × WHAT WE WANT「MITOCOLOMON」。Owned。Parent = LGT-029。彫刻入り木製ベース（W160×D160×H15mm）、真鍮ポール（H270mm）、1/4インチネジ規格でtripodシリーズと互換。メーカー公式ストアで確認済み。  
- LGT-031（旧LGT-030、CONPE10_WWW）: 番号を振り直し、Child Componentsを更新し、既存のAIR LIGHT Child（番号振り直し後LGT-046、旧LGT-044）に加え、新規LGT-032（OTACHIDAI BLACK）を含める。  
- LGT-032（新規）: DEVISE WORKS × WHAT WE WANT「OTACHIDAI BLACK」。Owned。Parent = LGT-031。黒塗装・彫刻入り・金泥象嵌の木製ベース（W140×D150×H26mm）、真鍮ポール（H190mm）、1/4インチネジ規格。メーカー公式ストアで確認済み。  
- LGT-033〜041（旧LGT-031〜039）: 番号を振り直し、2つ繰り下げ。内容自体に変更なし。  
- LGT-042〜053（旧LGT-040〜051、CARGO CONTAINER AIR LIGHTユニット12個）: 番号を振り直し、2つ繰り下げ。各ユニットのParent参照は、対応するシェードの新IDに合わせて更新（LGT-018/019/020は変更なし、LGT-029→045、LGT-031→046、LGT-033→047、LGT-034→048、LGT-035→049、LGT-037→050、LGT-038→051、LGT-039→052、LGT-040→053）。  
- LGT-018/019/020のChild Componentsを更新し、番号振り直し後のAIR LIGHTユニット（LGT-042/043/044、旧LGT-040/041/042）を参照するようにした。  
- アイテム数は51件から53件に増加（新規2件: MITOCOLOMON、OTACHIDAI BLACK）。  

---  

## Version 7.7  

LGT-032（OTACHIDAI BLACK）の仕様を修正。プロジェクトオーナーが、ベース素材は汎用の「Wood」ではなく黒染めウォールナットであること、また彫刻モチーフはオカルト調のエンブレムで、彫り込んだ溝に金泥を象嵌していることを確認。  

### Changes  

- LGT-032: Materialを「Wood, Black-Painted (Engraved with Gold Ink) / Brass (Pole)」から「Walnut, Black-Painted (Engraved) / Brass (Pole)」に修正。  
- LGT-032: Graphic Attributeを「Engraved Design (Gold Ink Inlay)」から「Occult Emblem (Engraved, Gold Ink Inlay)」に修正し、FUR-005/010（HIJIWARU）およびFUR-013（EXTENMON TABLE）で用いているGraphic Attributeの語彙と統一。  
- LGT-032: Colorを「Black (Body) / Gold (Brass Pole)」に簡素化し、Graphic Attribute側で表現するようになった「Engraving Ink Inlay」の重複注記を削除。  

---  

## Version 7.8  

プロジェクトオーナーの直接指示によるStatus変更: LGT-022（38-kT miyabi Wood, Hinoki）をCandidateからUpgradeへ再分類。  

### Changes  

- LGT-022: StatusをCandidateからUpgradeに修正。  

---  

## Version 7.9  

プロジェクトオーナーの直接指示により、ブランチ接尾辞方式のID表記を導入。LGT-028に対する競合する2つのシェード候補を、後続のLight Domain IDの番号をずらすことなく登録するための仕組み（Version 7.6で用いたChild Componentsパターンよりも軽量な代替手段）。  

### Changes  

- 「Branch Variants」を、「Child Components」とは別の新規フィールドとして導入: ブランチバリアント（小文字アルファベットの接尾辞、例: LGT-028a）は、恒久的に付随する構成部品ではなく、1つの装備枠を巡って競合する、互いに排他的な候補を表す。  
- LGT-028（CARMA STORE、MMM Pocket Shade PAJAMA MOON LIAN HOME）: Branch VariantsフィールドにLGT-028a・LGT-028bを追加。他のフィールドに変更なし。  
- LGT-028a（新規）: neru design works、「メッシュシェード」、Candidate、Parent LGT-028、Copper / Copper Mesh Fabric、Portable LED Lantern（38-kT Shade）。  
- LGT-028b（新規）: CALMA STORE × neru design works、「POCKET SHADE M」（neru design works柄）、Candidate、Parent LGT-028、Khaki / Fabric、Portable LED Lantern（38-kT Shade, Foldable）。  
- Registry Rules（Equipment IDセクション）: 今後の運用に向け、ブランチ接尾辞表記を定義する注記を追加。  
- 既存のLight Domain ID（LGT-029以降）は、番号の振り直し・繰り下げともに発生していない。  

---  

## Version 7.10  

プロジェクトオーナーの直接指示による対象範囲の明確化: Coffee Domain（COF-series）の登録タイミングを、Kitchen除外ルールとは別に正式化。  

### Changes  

- Purposeセクション: 比較検討・意思決定中のCoffee機材はPX-004 Barista Codexのみで追跡し、TP-004（COF-series）への登録は購入（Owned）時に限る、というルールを追加。購入までの間、空のCOF-seriesの枠（Version 7.1以来維持）は意図的なものであり、データの欠落ではないことを確認。  
- Purposeセクション: この段階的登録ルールがCoffeeとKitchenのみに適用されることを明確化。他のすべてのDomain（Furniture、Light、Aroma、Storage、Fire）は、これまで通り未購入アイテム（Essential / Candidate / Upgrade）を直接TP-004へ登録し続ける — 本変更はその既存の運用を変えるものではない。  
- 本改訂では、装備データ・Status・フィールド値の変更は無し。  

---  

## Version 7.11  

プロジェクトオーナーの直接指示に基づき、複数回のプロジェクトチャットセッションにわたって行った冬季スリーピングシステムの調査結果を、Furniture Domainの新規エントリとして登録。これは、既存のグランドオフトン（FUR-019 BONFLAG TACTICAL AIR BED 2Pの上で使用）の代替を、(1) 関東エリア・雪中入門用、(2) 本格雪中用、という2つの異なる用途について扱うもの。FUR-019自体（Owned）に変更はなく、その上で使用するキルト／マット／シーツ系の新規・独立エントリである。  

### Changes  

- FUR-020（新規）: Snow Peak、「ダウン システムオフトン」（キルト部分のみ、×2）、Essential。黒を志向しているが、メーカー公式の色名表記が未確認のためColorはUnconfirmedとした。快適温度2℃／下限温度-4℃。ノンダウン仕様（BD-061/071、快適温度10℃／下限温度5℃）よりも保温性に優れ収納サイズも小さいため、こちらを選定。購入は決定済みで、関東エリア・雪中入門用の確定解として扱う。  
- FUR-021（新規）: Snow Peak、「コンパクトワイドマット (TM-089)」（×2）、Essential、R値5.4（ASTM F3340-22準拠）、マット同士を連結可能。FUR-020の購入とセットで扱う（Slim／Wideのマットセット構成はキルト自体の機能には無関係で内容は同一だが、Wideのマット幅（77cm×2＝154cm）がFUR-019のベッド幅152cmに一致するため選定。Slim（65cm×2＝130cm）は不採用）。関東・雪中入門用、本格雪中用の両方において、主断熱層として機能する。  
- FUR-022（新規）: Brand/Product未確定、Candidate、Black（色のみ決定済み、他の仕様は未確定）。本格雪中対応のトップキルト用の装備枠を表し、競合する2つのBranch Variants（FUR-022a、FUR-022b）を持つ。両候補ともバックレス構造のキルト（床面一体型ではない）のため、下にFUR-021・FUR-023の併用が必須。  
- FUR-022a（新規）: Enlightened Equipment、「Accomplice」2-Person Sleeping Quilt、Candidate、Parent FUR-022、Black、フルカスタムオーダー（850fp／950fpダウン、温度定格は0°F／-18℃以下までカスタム可、シングルパッド2枚・ダブルパッド1枚のいずれにも対応するパッド固定ストラップ標準装備）。  
- FUR-022b（新規）: UGQ Outdoor、「Tango Duo」（Quilt for 2）、Candidate、Parent FUR-022、Black、フルカスタムオーダー（850fp／900fpダウン、温度定格は0°F／-19℃までカスタム可、米国ミシガン州Jacksonでの受注生産）。  
- FUR-023（新規）: Brand/Product未確定、Candidate、クローズドセルフォーム製スリーピングマット。本格雪中用途に限り、FUR-021の下に敷く断熱補強／パンク時の保険として機能する（合算R値を、-10℃以下・高地条件で一般的に推奨されるR6前後の基準以上に引き上げ、現地でエアマットが破損した場合の断熱総喪失を防ぐ）。  
- FUR-024（新規）: Brand/Product未確定、Candidate、Black（色は決定済み — このシーツはマットの上に敷かれ視認されるため、下に隠れてColor未確定のFUR-020／021とは異なる扱い）。FUR-021の上に敷くフィッテッドシーツ用の装備枠を表し、競合する2つのBranch Variants（FUR-024a、FUR-024b）を持つ。FUR-021のフットプリントに合わせ、約77×196cm×2のサイズ。関東・雪中入門用、本格雪中用の両方で共通使用。  
- FUR-024a（新規）: Therm-a-Rest、「Synergy Lite Sheet」（X-Large、76×196cm）、Candidate、Parent FUR-024、Black、ナイロン。専用ブランド品の選択肢であり、FUR-021マット1枚分にほぼ一致するサイズ。  
- FUR-024b（新規）: Brand未確定、汎用キャンプマット用フィッテッドシーツ、Candidate、Parent FUR-024、Black、素材未確定。ブランドよりも寸法適合（約77×196cm）を優先する汎用品の選択肢。  
- 補足: FUR-019（BONFLAG TACTICAL AIR BED 2P）は公開されたR値を持たない（「Oxford 1000D / PVC」構造から、内蔵断熱層は無いと判断される）。FUR-021・FUR-023選定の根拠となるR値計算においては、FUR-019単体の断熱寄与はほぼ無いものとして扱う。  
- Furniture Domainのアイテム数は20件から29件に増加（新規: FUR-020〜FUR-024、およびBranch VariantsのFUR-022a/022b、FUR-024a/024b — 合計9件の新規ID。削除は無し）。  

---  

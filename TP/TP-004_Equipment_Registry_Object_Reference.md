ated 
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

Major refactor from legacy equipment lists.  

### Changes  

- Introduced permanent Equipment IDs.  
- Introduced Parent / Child hierarchy.  
- Removed Bible column.  
- Removed Priority column.  
- Removed Price information.  
- Removed purchasing strategy.  
- Removed design philosophy from equipment records.  
- Standardized Status values.  
- Separated Graphic Attribute from equipment identity.  
- Separated Industrial Attribute from equipment identity.  
- Established TP-004 as the Single Source of Truth for all equipment.  

---  

## Version 7.1  

Consolidated three duplicate TP-004 files into a single canonical file and repaired formatting.  

### Changes  

- Reformatted the Light Domain (LGT-001–LGT-034) into standard Markdown structure (`##` headers, `**bold**` core fields, `---` separators), replacing the previously broken plain-text formatting. No equipment data was replaced; existing field values (including Status and Quantity) were preserved as-is.  
- Confirmed LGT-017 (G31 Slider) Quantity = 1 (one slider holding three 38-kT lanterns).  
- Retained the current Coffee Domain frame (structure only, no product data).  
- Removed duplicate TP-004 files: `TP-004 Equipment Registry Object Reference.md` and `TP-004_Equipment_Registry_Object_Reference.md`.  
- Fixed duplicated title line in the document header.  

---  

## Version 7.2  

Full correction of the Storage Domain (STR) following direct verification with the project owner. The previous STR-004 gap (present since before this file entered version control) is resolved: it was never lost data, but an unused ID reserved for an integrated handle+grip accessory for Shellcon 01 that was never acquired. IDs are renumbered sequentially with no gaps (STR-001–STR-025); this is treated as an accuracy-priority exception to the "IDs never change" rule.  

### Changes  

- STR-001 (Shellcon 01): Product corrected to "Shelf Container 25 雪峰祭 Black."  
- STR-002 (BOXTOP SC25 HEXA): confirmed unchanged.  
- STR-003 (HEXA Side Table): Brand corrected to "RALBUDDY PRODUCT × WANTKEY CAMP."  
- STR-004 (formerly STR-005, WANTKEY UNITY HANDLE 25): renumbered, confirmed unchanged otherwise.  
- STR-005 (formerly STR-006, WANTKEY GP-SC): renumbered, confirmed unchanged otherwise.  
- STR-006 (formerly STR-007, SHELCON LEG 25): renumbered, confirmed unchanged otherwise.  
- STR-007 (formerly STR-008, Shellcon 02): Product corrected to "Shelf Container 25 Black Label."  
- STR-008 (formerly STR-009, BOXTOP SC25 TC): renumbered; Industrial Attribute "Top Board" added.  
- STR-009 (formerly STR-010, SST WANTKEY Version): renumbered; Brand order corrected to "NOWELLCAMP × WANTKEY CAMP"; Industrial Attribute "Side Expansion" added.  
- STR-010 (formerly STR-011, SKULL HANDLE): renumbered; Industrial Attribute "Handle Custom" added.  
- STR-011 (formerly STR-012): Brand/Product corrected from "WANTKEY CAMP / WANTKEY GP-SC" to "OMA FACTORY / OMA.SC-PICATINNY RAIL-No.001G"; Status corrected from Candidate to Owned; Material corrected to Anodized Aluminum; Industrial Attribute "Grip Custom" confirmed.  
- STR-012 (formerly STR-013, SHELCON LEG 25): renumbered, confirmed unchanged otherwise.  
- STR-013 (formerly STR-014, Beck Container): split into two independently managed units, "Beck Container ①" (Owned, Kitchen use, Oak Wood Board) and STR-015 "Beck Container ②" (Owned, Coffee & Table Component use, Walnut Wood Board). Quantity field removed in favor of separate IDs.  
- STR-014 (new, formerly part of STR-015/016 Wood Board pair): "Wood Board (Oak)" ×2 sets, Wanted, Parent STR-013.  
- STR-015 (new): "Beck Container ②," Owned, Parent of STR-016.  
- STR-016 (new): "Wood Board (Walnut)" ×2 sets, Wanted, Parent STR-015.  
- STR-017 (formerly STR-015, Container Bridge Frame): Parent/Child relationship with Beck Container removed; now independent, with its own children STR-018 and STR-019.  
- STR-018 (new): "Wood Board (Walnut)" ×3 sets, Owned, Parent STR-017. Distinct ID from STR-016 despite same material, per owner instruction.  
- STR-019 (new): "Butterfly Under Shelf," Wanted, Black Aluminum, Parent STR-017.  
- STR-020 (formerly STR-017, rodan_no_kaban): renumbered; Industrial Attribute corrected from "Fire Storage" to "Fire Tool Storage" (holds fire/wood-stove-related tools, excluding the fire pit and stove itself).  
- STR-021 (formerly STR-018, table_no_kaban): renumbered; Industrial Attribute corrected from "Fire Storage" to "Iron Table Storage" (dedicated case for FIR-002 Iron Table).  
- STR-022 (formerly STR-019, Multi Container L): renumbered, confirmed unchanged otherwise.  
- STR-023 (formerly STR-020, One Touch Bucket HD): renumbered, confirmed unchanged otherwise.  
- STR-024 (formerly STR-021, YETI Roadie 24): renumbered; Material corrected from "Resin" to "Polyethylene (Rotomolded)" per manufacturer specification.  
- STR-025 (formerly STR-022, YETI Hopper Flip 16): renumbered; Material corrected from "Fabric" to "DryHide Fabric" per manufacturer specification (YETI's proprietary high-density shell fabric; detailed fiber composition not publicly disclosed).  
- Updated the Parent / Child Rules example to reflect the corrected STR-001 and STR-007 hierarchies.  
- Document header version number left at "Version 7.0" pending a separate, consolidated version-numbering correction across the document (planned).  

---  

## Version 7.3  

Full correction of the Furniture, Aroma, Fire, and Light Domains, plus a redefinition of the Status system, following direct verification with the project owner in the same working session as Version 7.2.  

### Status system change  

- Retired "Wanted." The Status system is now four tiers: **Owned** (currently owned), **Essential** (necessary and purchase decided, awaiting purchase — absorbs the old "Wanted" meaning), **Candidate** (necessary, but the specific product not yet decided), **Upgrade** (a replacement for something already owned, or a "nice to have," lowest priority tier). All prior "Wanted" entries across every domain were reclassified into Essential, Candidate, or Upgrade individually rather than defaulted.  
- Follow-up correction to the Storage Domain (introduced in Version 7.2, prior to this redefinition): STR-006, STR-014, STR-016, STR-017, and STR-019 were still recorded as "Wanted" and have been updated to "Essential" to match the new system.  

### Furniture (FUR)  

- FUR-005, FUR-010 (HIJIWARU ×2): Graphic Attribute corrected from "New Graphic" / "Emblem" to "Occult Emblem"; Industrial Attribute corrected from "Wood Custom" to "Armrest Replacement" (both are default-armrest replacement parts).  
- FUR-009 (WARU NOVITA): Brand corrected to "DEVISE WORKS × natural mountain monkeys"; Product corrected to "WARU NOVITA" (previously brand/product fields were swapped).  
- FUR-011 (formerly SOMA Chair ① by SOMABITO alone, with a separate child FUR-012 "Silkscreen Graphic"): merged into a single record — Brand corrected to "DEVISE WORKS × SOMABITO," Graphic Attribute "Street Graffiti-style Occult Emblem (Silkscreen, White)" added, Industrial Attribute set to "Fireside Chair." The old FUR-012 no longer exists as a separate entry.  
- FUR-012 (new number, formerly FUR-013, SOMA Chair ②): renumbered; Industrial Attribute set to "Fireside Chair"; Color corrected to Black/Brown, Material to Leather/Walnut.  
- FUR-013 (formerly FUR-014, EXTENMON TABLE): renumbered; Graphic Attribute "Occult Emblem (Silkscreen, Black)" added; Industrial Attribute corrected from "Expandable Table" to "Kitchen Extension Table."  
- FUR-014 (formerly FUR-015, ANO D TENBAN): renumbered; Status corrected to Upgrade; Graphic Attribute corrected to "Street Graffiti-style Brand Logo (Cutout)"; Industrial Attribute corrected from "Iron Top Plate" to "Unit Top Plate."  
- FUR-015 (new): DEVISE WORKS × WANTKEY CAMP, "ONETOP\"D\"" — a second unit-standard top plate for FUR-013 (EXTENMON TABLE), Upgrade, Brown, Walnut, Graphic Attribute "Engraved Logo," Industrial Attribute "Unit Top Plate." Official product name and collaboration confirmed via DEVISE WORKS' online store.  
- FUR-016 (formerly FUR-016, Butterfly D): Graphic Attribute "Occult Emblem (Silkscreen)" added.  
- FUR-017 (formerly FUR-017, Butterfly Table M Black Look): Status corrected from Candidate to Upgrade; Industrial Attribute corrected from "Folding Table" to "Side Table."  
- FUR-018, FUR-019 (formerly FUR-018/019, BONFLAG Air Sofa/Bed): Industrial Attribute corrected to "Inflatable Sofa" / "Inflatable Bed" respectively.  

### Aroma (ARM)  

- ARM-001: Industrial Attribute corrected from "Incense Holder" to "Mosquito Coil Holder."  
- ARM-002: Color/Material corrected to "Gold / Brown" and "Brass / Walnut" (previously Gold / Brass only); Status changed to Essential per the Status redefinition.  
- ARM-003: Status changed to Essential per the Status redefinition.  

### Fire (FIR)  

- FIR-002 (Iron Table): Industrial Attribute clarified as "Fire Table (stand for FIR-001 RODAN BRICK)."  
- FIR-003: Industrial Attribute corrected from "Lantern Hanger" to "Fire Tool Stand."  
- FIR-004/005 (ono kezuru / nata kezuru): Industrial Attribute split into "Axe" and "Machete" respectively (previously both listed as "Hatchet").  
- FIR-006 (PULSE): Industrial Attribute corrected from "Fire Poker" to "Fire Tongs."  
- FIR-008 (new): Snow Peak, "焚き火ツールPro" (ash scoop), Owned, Black, Steel, Industrial Attribute "Ash Scoop," parent of a new FIR-009 (asimocrafts asigrip). Inserted after the old FIR-007; all subsequent Fire IDs shifted down by two.  
- FIR-010 (new, formerly a bare ID slot): asimocrafts, "tsuru_s_asi" (fire poker), Owned, Black, Steel, Industrial Attribute "Fire Poker."  
- FIR-011 (formerly FIR-009, asiblaster): renumbered, unchanged otherwise.  
- FIR-012 (formerly FIR-008, Snow Peak Folding Torch): renumbered; gained two additional children (FIR-016, FIR-017).  
- FIR-013 (formerly FIR-009 duplicate reference, asigrip under Folding Torch): renumbered, unchanged otherwise.  
- FIR-014 (formerly FIR-012, copper250): renumbered; reassigned as a child of FIR-012 (Folding Torch, previously listed as an independent Fire Blower); Industrial Attribute corrected from "Fire Blower" to "Gas Tube Cover."  
- FIR-015 (formerly FIR-013, FT no BARREL): renumbered; Status corrected to Upgrade; reassigned as a child of FIR-012.  
- FIR-016 (new): OMA FACTORY, "OMA.BARREL," child of FIR-012, Owned, Gray, Titanium, Industrial Attribute "Torch Barrel."  
- FIR-017 (new): OMA FACTORY, "OMA.KNOB-No.071F," child of FIR-012, Owned, Gray, Duralumin, Industrial Attribute "Torch Knob."  
- FIR-018 (formerly FIR-010, Purple Stove 501A): renumbered, unchanged otherwise.  
- FIR-019 (formerly FIR-014, Aura FG): renumbered; Status corrected from Wanted to Candidate.  
- FIR-020 (formerly FIR-015, BLISS-SP): renumbered; Status confirmed as Candidate.  
- Item count increased from 15 to 20 (four new items: 焚き火ツールPro, tsuru_s_asi, OMA.BARREL, OMA.KNOB-No.071F — offset by no removals).  

### Light (LGT)  

- LGT-002: Industrial Attribute corrected from "Kerosene" to "Kerosene Lantern."  
- LGT-003, LGT-009: Industrial Attribute corrected from "Portable LED Lantern" to "38-kT Shade & Case" (both are shade/case assemblies that house separate LED lantern bodies, not lantern bodies themselves).  
- LGT-004–008, LGT-011–015: Industrial Attribute "Portable LED Lantern" confirmed/added for all lantern-body children of LGT-003 and LGT-009.  
- LGT-010: Industrial Attribute "Custom Panel" added.  
- LGT-013: Material clarified as "Celluloid (Tortoise Shell Pattern)."  
- LGT-016 (3ndelier Blade): Industrial Attribute corrected from "Pendant Lighting System" to "Lantern Hanger." Child list restructured: LGT-018–020 (Solol Wood shades) removed as children and re-registered as independent parent items; LGT-021–026 (38-kT miyabi Wood, mounted directly on the Blade) retained as children.  
- LGT-017 (G31 Slider): Quantity corrected from 1 to 3 (one slider assembly holds three lanterns; the prior "Quantity = 1" description in Version 7.1 is superseded — three physical sliders are owned).  
- LGT-018–020 (Solol Wood ×3): converted from children of LGT-016 to independent parent items, each gaining one child (a dedicated CARGO CONTAINER AIR LIGHT unit). Industrial Attribute set to "Airlight Shade."  
- LGT-025–026 (38-kT miyabi Wood Pine/Maple): Status corrected from Owned to Upgrade; confirmed as children of LGT-016.  
- LGT-027, LGT-028 (Glass Shade & Wood Stand Set, MMM Pocket Shade): Industrial Attribute corrected from "Ambient Table Light" / "Fabric Shade" to "Portable LED Lantern" (both are independent shades that house their own 38-kT lantern body, not Airlight shades).  
- LGT-029, LGT-030 (デバデバの実, CONPE10_WWW): Industrial Attribute corrected from "Wood Shade" / "Textile Shade" to "Airlight Shade"; each gained one child (a dedicated AIR LIGHT unit).  
- LGT-031 (new position): neru design works × T no T.LE, "Valo shade \"MID CENTURY\"," Owned, Orange, Silicone, Industrial Attribute "Airlight Shade," child = one AIR LIGHT unit. Official product name and material (silicone, not leather) confirmed via manufacturer/retailer sources.  
- LGT-032 (new position): KI-no, "Kn One Off Shade (38灯)," Owned, Color Oak/Light Blue, Material Resin/Walnut, Industrial Attribute "Airlight Shade," child = one AIR LIGHT unit. Official brand/product name confirmed via retailer listings.  
- LGT-033 (new position): neru design works, "革シェード" (leather shade), Owned, Light Brown, Leather, Industrial Attribute "Airlight Shade," child = one AIR LIGHT unit. Official product name confirmed via the manufacturer's official retail listing (LOG / lifeoverground.com).  
- LGT-034 (formerly LGT-031, 38-kT THE RICH classic100): renumbered, unchanged otherwise.  
- LGT-035–037 (formerly LGT-032–034, ECHO LAMP / DOME LOOK / new IFA Pivotshade): renumbered; all three Status corrected to Essential; reclassified from generic "Portable Lamp" to "Airlight Shade (Hanging)"; each gained one child (a dedicated AIR LIGHT unit). LGT-037 (IFA Pivotshade) is new: IFA, "Pivotshade," Essential, Silver, Aluminum — an upward-facing reflective shade compatible with CARGO CONTAINER AIR LIGHT, confirmed via manufacturer source.  
- LGT-038 (new): vacant ID, intentionally reserved for a fourth hanging-type Airlight shade not yet identified. Holds one child slot (LGT-051) for its future AIR LIGHT unit.  
- LGT-039 (formerly LGT-034, LF1984): renumbered; Status corrected from Wanted to Candidate; Industrial Attribute confirmed as "Portable LED Lantern" (this is a self-contained lantern with its own built-in LED, not an Airlight shade).  
- LGT-040–051 (new): twelve individually numbered CARGO CONTAINER "AIR LIGHT" units (Owned, Black, Plastic), one per Airlight shade (LGT-018, 019, 020, 029, 030, 031, 032, 033, 035, 036, 037, and the pending LGT-038), registered individually rather than as a single Quantity=12 record because each unit is paired to its shade via individual Bluetooth control. Brand and product confirmed via manufacturer/retailer sources (CARGO CONTAINER, Korean outdoor brand, 83g, IP66, app-controlled).  
- Item count increased from 34 to 51 (new items: LGT-031/032/033 Airlight shades, LGT-037 IFA Pivotshade, LGT-038 vacant slot, LGT-040–051 twelve AIR LIGHT units — offset by no removals; existing items renumbered accordingly).  

### General  

- Document header version number corrected from "Version 7.0" to "Version 7.3," completing the version-numbering correction referenced above.  

## Version 7.4  

File-level cleanup: corrected an inaccuracy in the Version 7.1 changelog, which claimed duplicate TP-004 files had been removed when in fact the underscore-named duplicate (`TP-004_Equipment Registry Object Reference.md`, Version 7.0 content) remained in the repository alongside this file. Also aligned this file's name with the repository-wide naming convention (`{SERIES}-{NUM}_Word_Word_Word.md`).

### Changes  

- Deleted `TP-004_Equipment Registry Object Reference.md` (stale Version 7.0 duplicate, superseded by this file since Version 7.1).  
- Renamed this file from `TP-004 Equipment Registry Object Reference.md` to `TP-004_Equipment_Registry_Object_Reference.md` to match the underscore-separated naming convention used across TP, PX, and TM series documents.  
- No equipment data, Status, or field values were changed in this revision.  

---  

## Version 7.5  

Scope correction following direct discussion with the project owner: kitchen cooking equipment (dutch ovens, griddles, cooking knives, and similar functional cookware) is removed from TP-004's scope and placed under a new, independently governed document, TP-011 Galley Fare. Unlike TP-004, TP-011 does not require Human Principles / Design Bible aesthetic alignment as a selection condition; its standard is function-first (the equipment must make real cooking possible) rather than gesture- or brand-driven.  

### Changes  

- Purpose section: added a note excluding kitchen cooking equipment and pointing to TP-011.  
- Single Source of Truth section: narrowed TP-004's authority to equipment governed by Human Principles aesthetic alignment; kitchen cooking equipment is now explicitly out of scope.  
- Related Documents: added TP-011 Galley Fare.  
- No Kitchen domain was added to TP-004. No KIT-series IDs are registered here; they are registered in TP-011.  

---  

## Version 7.6  

Light Domain update per direct instruction from the project owner: two new lantern-stand accessories (MITOCOLOMON, OTACHIDAI BLACK) are inserted as children of their respective parent shades (デバデバの実 = LGT-029, CONPE10_WWW), placed immediately after each parent in sequence. All subsequent Light Domain IDs from the old LGT-030 onward are shifted down by two (accuracy-priority exception to the "IDs never change" rule, consistent with the precedent set in Version 7.2).

### Changes  

- LGT-029 (デバデバの実): Child Components updated to include the new LGT-030 (MITOCOLOMON) in addition to its existing AIR LIGHT child (renumbered LGT-045, formerly LGT-043).  
- LGT-030 (new): DEVISE WORKS × WHAT WE WANT "MITOCOLOMON." Owned. Parent = LGT-029. Engraved wood base (W160×D160×H15mm) with brass pole (H270mm); 1/4-inch screw thread compatible with tripod series. Confirmed via manufacturer's official store.  
- LGT-031 (formerly LGT-030, CONPE10_WWW): renumbered; Child Components updated to include the new LGT-032 (OTACHIDAI BLACK) in addition to its existing AIR LIGHT child (renumbered LGT-046, formerly LGT-044).  
- LGT-032 (new): DEVISE WORKS × WHAT WE WANT "OTACHIDAI BLACK." Owned. Parent = LGT-031. Black-painted engraved wood base with gold ink inlay (W140×D150×H26mm), brass pole (H190mm); 1/4-inch screw thread. Confirmed via manufacturer's official store.  
- LGT-033–041 (formerly LGT-031–039): renumbered, shifted down by two; content otherwise unchanged.  
- LGT-042–053 (formerly LGT-040–051, the twelve CARGO CONTAINER AIR LIGHT units): renumbered, shifted down by two; each unit's Parent reference updated to match its shade's new ID (LGT-018/019/020 unchanged; LGT-029→045; LGT-031→046; LGT-033→047; LGT-034→048; LGT-035→049; LGT-037→050; LGT-038→051; LGT-039→052; LGT-040→053).  
- LGT-018/019/020 Child Components updated to reference the renumbered AIR LIGHT units (LGT-042/043/044, formerly LGT-040/041/042).  
- Item count increased from 51 to 53 (two new items: MITOCOLOMON, OTACHIDAI BLACK).  

---  

## Version 7.7  

LGT-032 (OTACHIDAI BLACK) specification corrected. Project owner confirmed the base is black-dyed walnut (not generic "Wood"), and the engraving motif is an occult-style emblem with gold ink inlay pressed into the engraved grooves.

### Changes  

- LGT-032: Material corrected from "Wood, Black-Painted (Engraved with Gold Ink) / Brass (Pole)" to "Walnut, Black-Painted (Engraved) / Brass (Pole)."  
- LGT-032: Graphic Attribute corrected from "Engraved Design (Gold Ink Inlay)" to "Occult Emblem (Engraved, Gold Ink Inlay)," aligning with the same Graphic Attribute vocabulary used for FUR-005/010 (HIJIWARU) and FUR-013 (EXTENMON TABLE).  
- LGT-032: Color simplified to "Black (Body) / Gold (Brass Pole)," removing the redundant "Engraving Ink Inlay" sub-note now captured under Graphic Attribute.  

---  

## Version 7.8  

Status change per direct instruction from the project owner: LGT-022 (38-kT miyabi Wood, Hinoki) reclassified from Candidate to Upgrade.

### Changes  

- LGT-022: Status corrected from Candidate to Upgrade.  

---  

## Version 7.9  

Branch-suffix ID notation introduced per direct instruction from the project owner, to register two competing shade candidates for LGT-028 without shifting the numbering of subsequent Light Domain IDs (a lighter-weight alternative to the Child Components pattern used in Version 7.6).

### Changes  

- Introduced "Branch Variants" as a new field, distinct from "Child Components": branch variants (lowercase letter suffixes, e.g. LGT-028a) represent mutually exclusive candidates competing for one equipment slot, rather than permanently associated sub-parts.  
- LGT-028 (CARMA STORE, MMM Pocket Shade PAJAMA MOON LIAN HOME): added Branch Variants field listing LGT-028a and LGT-028b. No other field changed.  
- LGT-028a (new): neru design works, "メッシュシェード" (Mesh Shade), Candidate, Parent LGT-028, Copper / Copper Mesh Fabric, Portable LED Lantern (38-kT Shade).  
- LGT-028b (new): CALMA STORE × neru design works, "POCKET SHADE M" (neru design works pattern), Candidate, Parent LGT-028, Khaki / Fabric, Portable LED Lantern (38-kT Shade, Foldable).  
- Registry Rules (Equipment ID section): added a note defining branch-suffix notation for future use.  
- No existing Light Domain IDs (LGT-029 onward) were renumbered or shifted.  

---  

## Version 7.10  

Scope clarification per direct instruction from the project owner: Coffee Domain (COF-series) registration timing formalized, distinct from the Kitchen exclusion rule.

### Changes  

- Purpose section: added a rule stating that Coffee equipment under active decision-making is tracked exclusively in PX-004 Barista Codex, and is registered in TP-004 (COF-series) only upon purchase (Owned status). Until purchase, the empty COF-series frame (retained since Version 7.1) is confirmed as intentional, not missing data.  
- Purpose section: clarified that this phased-registration rule applies only to Coffee and Kitchen. All other domains (Furniture, Light, Aroma, Storage, Fire) continue to register not-yet-purchased items (Essential / Candidate / Upgrade) directly in TP-004 as before — this change does not alter their existing practice.  
- No equipment data, Status, or field values were changed in this revision.  

---  

## Version 7.11  

Winter sleeping-system research (conducted across multiple project chat sessions) registered as new Furniture Domain entries, following direct instruction from the project owner. This covers the replacement of the existing Grand Ofton (used atop FUR-019 BONFLAG TACTICAL AIR BED 2P) for two distinct use cases: (1) Kanto-area / entry-level snow camping, and (2) full-scale snow camping. FUR-019 itself (Owned) is unchanged; these are new, separate entries for the quilt/mat/sheet system used on top of it.

### Changes  

- FUR-020 (new): Snow Peak, "ダウン システムオフトン" (Quilt component only, ×2), Essential, Black-target aesthetic but Color left Unconfirmed pending manufacturer color-name verification. Comfort temperature 2°C / limit temperature -4°C. Selected over the non-down variant (BD-061/071, comfort 10°C / limit 5°C) for superior warmth and smaller packed size. Purchase decided; this is the confirmed solution for Kanto-area / entry-level snow camping use.  
- FUR-021 (new): Snow Peak, "コンパクトワイドマット (TM-089)" (×2), Essential, R-value 5.4 (ASTM F3340-22), connectable pad-to-pad. Bundled with FUR-020's purchase (Slim vs. Wide mat-set packaging is functionally irrelevant to the quilt itself, which is identical across both; Wide's mat width (77cm ×2 = 154cm) was selected because it matches FUR-019's 152cm bed width, unlike Slim's 65cm ×2 = 130cm). Serves as the primary insulation layer for both the Kanto/entry-level and full winter use cases.  
- FUR-022 (new): Unconfirmed Brand/Product, Candidate, Black (confirmed color decision; all other specs pending). Represents the equipment slot for a full winter-capable top quilt with two competing Branch Variants (FUR-022a, FUR-022b). Both candidates are backless quilt designs (no integrated floor), requiring FUR-021 and FUR-023 underneath.  
- FUR-022a (new): Enlightened Equipment, "Accomplice" 2-Person Sleeping Quilt, Candidate, Parent FUR-022, Black, full custom order (850fp/950fp down, temperature ratings customizable to 0°F/-18°C and colder, integrated pad-attachment straps compatible with either two single pads or one double pad).  
- FUR-022b (new): UGQ Outdoor, "Tango Duo" (Quilt for 2), Candidate, Parent FUR-022, Black, full custom order (850fp/900fp down, temperature ratings customizable to 0°F/-19°C, made to order in Jackson, Michigan).  
- FUR-023 (new): Unconfirmed Brand/Product, Candidate, closed-cell foam sleeping mat. Serves as insulation backup / puncture insurance beneath FUR-021, specifically for the full winter use case (raises combined R-value above the ~R6 threshold generally recommended for sub -10°C / high-altitude conditions, and protects against total insulation loss if the air mat fails in the field).  
- FUR-024 (new): Unconfirmed Brand/Product, Candidate, Black (confirmed color decision — this sheet sits on top of the mat and is visible, unlike FUR-020/021 which sit underneath and were left color-unconfirmed). Represents the equipment slot for a fitted sheet used over FUR-021, with two competing Branch Variants (FUR-024a, FUR-024b). Sized at approximately 77×196cm ×2 to match FUR-021's footprint; shared across both the Kanto/entry-level and full winter use cases.  
- FUR-024a (new): Therm-a-Rest, "Synergy Lite Sheet" (X-Large, 76×196cm), Candidate, Parent FUR-024, Black, nylon. Dedicated-brand option; sized to closely match one FUR-021 mat unit.  
- FUR-024b (new): Unconfirmed Brand, generic fitted camp-mat sheet, Candidate, Parent FUR-024, Black, material unconfirmed. Generic option prioritizing dimensional fit (~77×196cm) over brand.  
- Note: FUR-019 (BONFLAG TACTICAL AIR BED 2P) has no published/available R-value (its "Oxford 1000D / PVC" construction indicates no built-in insulation layer); it is treated as contributing negligible insulation on its own for the R-value calculations underlying FUR-021/FUR-023's selection.  
- Item count increased from 20 to 29 in the Furniture Domain (new items: FUR-020 through FUR-024, including Branch Variants FUR-022a/022b and FUR-024a/024b — nine new IDs total; offset by no removals).  

---  

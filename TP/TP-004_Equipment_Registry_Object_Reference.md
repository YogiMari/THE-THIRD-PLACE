# TP-004 Equipment Registry Object Reference  
Version 7.25  
  
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

**Candidate段階における具体的製品情報の扱い**：Status = Candidateのアイテムは、TP-004上ではBrand / Productを「Unconfirmed」とし、用途（Industrial Attribute）とEquipment IDのみを記録する。複数の具体的な製品候補間の比較・評価・検討記録は、TP-004ではなくPX-007 Deliberation Codexのみで管理する。特定の製品が正式に決定（Status = Essential）した時点で、初めてBrand / ProductをTP-004へ記載する。これにより、Candidateの定義（「必要だが、具体的な製品はまだ決まっていない」）とTP-004上の実データを正確に一致させる。競合していた複数の候補IDは、1件の決定枠IDへ統合し、不要となったIDはRetired（統合済み）として記録を残す。
  
---  
  
# Registry Rules（登録ルール）  
  
## Equipment Domains（装備ドメイン）  
  
Equipmentは、7つのDomainに分類される。  
  
1. Furniture  
2. Light  
3. Aroma  
4. Storage  
5. Coffee  
6. Fire  
7. Shelter  
  
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
  
SHL-001  
  
IDは変更されない。  

ブランチ接尾辞（小文字アルファベット、例: LGT-028a、LGT-028b）は、後続IDの番号をずらすことなく、同じ装備枠を競合する複数の製品候補を登録するために、親IDへ直接付与できる。これはChild Components（恒久的に付随する構成部品、同時に所有される）とは異なる: ブランチバリアントは、1つの枠に対する代替候補を表し、通常は最終的にどちらか一方だけが昇格（StatusがEssential/Ownedへ変更）し、もう一方は廃止または別枠へ分類される。  

**運用注記（Version 7.14以降）**：新規に発生する検討中候補の比較については、原則としてBranch Variant形式（a/b/c...）をTP-004上で新設せず、単一の親ID（Brand/Product = Unconfirmed）のみを登録し、具体的な候補間比較はPX-007 Deliberation Codexで管理する。既存のBranch Variant（LGT-028a/b等）は、整理が完了するまでの間、現状の形式のまま維持する。  
  
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
- Price（Version 7.25より、任意項目として再導入。既存登録済みアイテムへの遡及記載は別途対応）  
  
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

Taupe / Classic Brown（トープ／クラシックブラウン。プロジェクトオーナーからの情報提供に基づく。メーカー公式ページ・レビューサイトのテキスト情報では独立した裏付けが取れていないため、購入前に実物・店舗での最終確認を推奨）  

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

Unconfirmed（マット単体の色名は未確認。FUR-020と同一セット内の付属品のため、Taupe / Classic Brownと同系統である可能性が高いが、未検証のためUnconfirmedのまま維持）  

### Material  

75D Polyester  

### Graphic Attribute  

None  

### Industrial Attribute  

Sleeping Mat（R値5.4・ASTM F3340-22準拠、2枚連結使用。FUR-020セット付属。FUR-022系との併用時は本格雪中用の主断熱層としても使用）  

---  

## FUR-022  

**Brand**  

Unconfirmed  

**Product**  

Unconfirmed  

**Status**  

Candidate  

### Color  

Black  

### Material  

Down（Full Custom Order）  

### Industrial Attribute  

Quilt（本格雪中用トップキルト。バックレス構造につきFUR-021・FUR-023との併用が必須。カスタムオーダーで下限-18℃級を想定。具体的な候補比較はPX-007 Deliberation Codexで管理）  

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

Unconfirmed  

**Product**  

Unconfirmed  

**Status**  

Candidate  

### Color  

Black  

### Material  

Unconfirmed  

### Industrial Attribute  

Pad Sheet（マット上に敷くシーツ。約77×196cm相当を2枚使用しFUR-021全面をカバー。関東〜雪中入門用・本格雪中用の両方で共通使用。具体的な候補比較はPX-007 Deliberation Codexで管理）  

---  

## FUR-025  

**Brand**  

Unconfirmed  

**Product**  

真聖衣  

**Status**  

Owned  

**Parent**  

FUR-002  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Hardware / Screw Set Custom（ROYAL BROWN Chester Field Seat用カスタムパーツ）  

### Price  

¥18,655  

---  
## FUR-026  

**Brand**  

neru design works（NDW）  

**Product**  

2UNITFRAME NDW ver.  

**Status**  

Owned  

**Parent**  

FUR-013  


### Color  

Black  

### Material  

Unconfirmed  

### Industrial Attribute  

Table Top Frame（天板枠 左）  

### Price  

¥16,500  

---  
## FUR-027  

**Brand**  

Unconfirmed  

**Product**  

TSURAICHI KUROWAKU  

**Status**  

Owned  

**Parent**  

FUR-013  


### Color  

Black  

### Material  

Unconfirmed  

### Industrial Attribute  

Table Top Frame（天板枠 右）  

### Price  

¥17,160  

---  
## FUR-028  

**Brand**  

Unconfirmed  

**Product**  

CUTTING MAT BLACK  

**Status**  

Owned  

**Parent**  

FUR-013  


### Color  

Black  

### Material  

Silicone  

### Industrial Attribute  

Table Silicone Mat  

### Price  

¥8,350  

---  
## FUR-029  

**Brand**  

Unconfirmed  

**Product**  

CUTTING MAT White  

**Status**  

Owned  

**Parent**  

FUR-013  


### Color  

White  

### Material  

Silicone  

### Industrial Attribute  

Table Silicone Mat  

### Price  

¥8,350  

---  
## FUR-030  

**Brand**  

DEVISE WORKS  

**Product**  

EDGEPAD GOLD紋章  

**Status**  

Owned  

**Parent**  

FUR-013  


### Color  

Gold  

### Material  

Silicone  

### Graphic Attribute  

Occult Emblem  

### Industrial Attribute  

Table Silicone Sheet  

### Price  

¥6,050  

---  
## FUR-031  

**Brand**  

neru design works（NDW）  

**Product**  

WWW_EXTENSIONSIDEBAR NDWver  

**Status**  

Owned  

**Parent**  

FUR-013  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Table Hanger Hook  

### Price  

¥5,000  

---  
## FUR-032  

**Brand**  

ABLE  

**Product**  

IGT 1ユニットスタンド  

**Status**  

Owned  

### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Table Unit Stand  

### Price  

¥20,200  

---  
## FUR-033  

**Brand**  

Kermit Chair USA  

**Product**  

Kermit CARRY TOTE  

**Status**  

Owned  

### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Carrying Tote（Kermit Chair①②共通使用、2脚収納可。MARI様のご意向により本来はFUR-001の直後へ番号挿入・後続番号繰下げが望ましいが、今回の一括登録では既存IDへの影響を避けるため末尾に追加。別途Furniture Domainの番号整理を検討）  

### Price  

¥19,700  

---  
## FUR-034  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

EXTENSIONTABLE CASE  

**Status**  

Owned  

**Parent**  

FUR-013  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Carrying Case（EXTENMON TABLE用）  

### Price  

¥15,400  

---  
## FUR-035  

**Brand**  

SNIPE  

**Product**  

SNIPE HANGER home. モク  

**Status**  

Owned  

### Color  

Unconfirmed  

### Material  

Wood  

### Industrial Attribute  

Hanger Rack  

### Price  

¥22,000  

---  
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

### Child Components  

- LGT-058  

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

Owned  

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

38-kT miyabi Wood (Sugi)  

**Status**  

Owned  

**Parent**  

LGT-016  

### Color  

Brown  

### Material  

Sugi  

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

neru design works × CALMA STORE  

**Product**  

POCKET SHADE  

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

### Child Components  

- LGT-059  

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

### Child Components  

- LGT-060  

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

Unconfirmed  

**Product**  

Unconfirmed  

**Status**  

Candidate  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Portable LED Lantern（検討中。具体的な候補情報はPX-007 Deliberation Codexで管理）  

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

---  

## LGT-054  

**Brand**  

neru design works  

**Product**  

BM Lanthan  

**Status**  

Owned  

### Child Components  

- LGT-055  
- LGT-056  
- LGT-057  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Gas Lantern（本体、通称「ネルガス」）  

### Price  

¥48,400  

---  
## LGT-055  

**Brand**  

MOLDS Tokyo  

**Product**  

Vintage cover250  

**Status**  

Owned  

**Parent**  

LGT-054  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Base  

### Price  

¥37,980  

---  
## LGT-056  

**Brand**  

Unconfirmed  

**Product**  

Futamata  

**Status**  

Owned  

**Parent**  

LGT-054  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Side Rail  

### Price  

¥23,150  

---  
## LGT-057  

**Brand**  

INOUT  

**Product**  

OD-CAN PLATE  

**Status**  

Owned  

**Parent**  

LGT-054  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Lower Base  

### Price  

¥14,800  

---  
## LGT-058  

**Brand**  

Vapourax  

**Product**  

クラッシュアイス  

**Status**  

Owned  

**Parent**  

LGT-002  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Kerosene Lantern Accessory / Variant Part（LGT-002用）  

### Price  

¥40,000  

---  
## LGT-059  

**Brand**  

Unconfirmed  

**Product**  

WWW_LANTHANUMHOOK  

**Status**  

Owned  

**Parent**  

LGT-032  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Otachidai Bar（お立ち台バー）  

### Price  

¥1,320  

---  
## LGT-060  

**Brand**  

Unconfirmed  

**Product**  

FORKBASEset (BS)  

**Status**  

Owned  

**Parent**  

LGT-036  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Stand（38-kT THE RICH classic100 ×2用）  

### Price  

¥18,040  

---  
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

Essential  

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

Owned  

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

Retired. FIR-036へ移設済み（Fireドメインの装備専用ケースはFireドメインで管理する方針に基づき、Storageから移動）。本IDは欠番として保持する。  

---  

## STR-021  

Retired. FIR-037へ移設済み（Fireドメインの装備専用ケースはFireドメインで管理する方針に基づき、Storageから移動）。本IDは欠番として保持する。  

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

### Child Components

- STR-030

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

### Child Components

- STR-031

### Color  

Black  

### Material  

DryHide Fabric  

### Industrial Attribute  

Soft Cooler  

---  

## STR-026  

**Brand**  

ANOBA  

**Product**  

BLACK EDITION マルチダストバケット  

**Status**  

Owned  

**Parent**  

STR-029  

### Color  

Black  

### Material  

Polyester / PE板 / Tarpaulin / PP  

### Graphic Attribute  

None  

### Industrial Attribute  

Dust Bucket（燃えないゴミ〈缶・ビン〉用。使用頻度が低いため、多段階の取り出し動作を許容する。従来使用のSnow Peak ガビングスタンド（DB-030、STR-027としてRetired登録済み）からの置き換えとして採用）  

---  

## STR-027  

Retired. Snow Peak ガビングスタンド（DB-030）。サイズ50×36×63(h)cm、重量2.0kg、ポリ袋を最大3枚まで取り付け分別対応可能なフレーム組立式ダストスタンドであったが、設営効率（TP-002 Storage Domain評価軸）を著しく損なうと判断され、STR-026（ANOBA BLACK EDITION マルチダストバケット）への置き換え対象となった。TP-004への正式登録がなされないまま運用されていた期間があり、本レコードは事後的な記録である。TP-010 Duplicate Storage Exceptionの適用事例として、本IDを今後同種の入れ替えが発生した際の記録形式の参照として保持する。  

---  

## STR-028  

**Brand**  

KAZE_TO_MORI × WINDY AND RAINY  

**Product**  

Folding Wire T-box 全面コンプリートセット  

**Status**  

Essential  

### Color  

Black（デジタルカモフラージュ柄。本体側はスチールメッキ地肌）  

### Material  

Steel（メッキ加工、ワイヤー部）／Steel + Plastic（メッキ加工、脚部）／X-PAC（Dimension-Polyant社製。表地＋X-Ply補強層＋防水フィルムから成る3〜4層ラミネート。元来ヨット用セイルクロスの技術を応用したもので、アウトドア・バッグ業界で広く採用される汎用素材。KAZE_TO_MORI製COVER・FUTA部に使用。本製品固有の表地デニールやグレード（X3/X4等）は未確認）  

### Graphic Attribute  

None  

### Industrial Attribute  

Dust Bucket（燃えるゴミ用。本体はWINDY AND RAINY「Folding wire T-box」（W395×H440×D195mm、重量約1420g、耐荷重20kg、ワンアクションで組み立て完了）。KAZE_TO_MORIオリジナルのCOVER×2・FUTA×3を装着したフルセットとして採用。ブランドデザインのゴミ袋付属。フォールディングサイドテーブルを介さず単独で運用。使用頻度が高いため、取り出し動作の少ない構成とした）  

---  

## STR-029  

**Brand**  

ANOBA  

**Product**  

フォールディングサイドテーブル  

**Status**  

Essential  

### Child Components  

- STR-026  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Side Table（SKU: AN139。サイズ約38×31×45Hcm、重量約2850g、静耐荷重天板約5kg・各棚約2.5kg）  

---  

## STR-030  

**Brand**  

YETI  

**Product**  

YETI ICE 4 lb (1.8 kg)  

**Status**  

Owned  

**Parent**

STR-024

### Color  

Blue  

### Material  

Plastic  

### Industrial Attribute  

Ice Pack (Hard)  

### Price  

¥6,160  

---  
## STR-031  

**Brand**  

YETI  

**Product**  

YETI Thin Ice - Large  

**Status**  

Owned  

**Parent**

STR-025

### Color  

Blue  

### Material  

Plastic  

### Industrial Attribute  

Ice Pack (Soft, for Soft Cooler)  

### Price  

¥4,730  

---  
## STR-032  

**Brand**  

YETI  

**Product**  

Rambler® Half Gallon Jug  

**Status**  

Owned  

### Child Components  

- STR-032a  


### Color  

Unconfirmed  

### Material  

Stainless Steel  

### Industrial Attribute  

Insulated Jug (1.9L)  

### Price  

要確認  

---  
## STR-032a  

**Brand**  

Unconfirmed  

**Product**  

KRAKEN STAND  

**Status**  

Owned  

**Parent**  

STR-032  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Jug Stand（STR-032用）  

### Price  

¥19,800  

---  
## STR-013a  

**Brand**  

nodel design  

**Product**  

Black Stand  

**Status**  

Owned  

**Parent**  

STR-013  


### Color  

Black  

### Material  

Unconfirmed  

### Industrial Attribute  

Leg（Beck Container①用）  

### Price  

¥9,900  

---  
## STR-015a  

**Brand**  

nodel design  

**Product**  

Black Stand  

**Status**  

Owned  

**Parent**  

STR-015  


### Color  

Black  

### Material  

Unconfirmed  

### Industrial Attribute  

Leg（Beck Container②用）  

### Price  

¥9,900  

---  
## STR-033  

**Brand**  

Unconfirmed  

**Product**  

ユニバーサルスタンド  

**Status**  

Owned  

### Quantity  

4  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Storage Container Base / Leg（汎用スタンド）  

### Price  

¥55,500  

---  
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

### Child Components  

- FIR-034  
- FIR-035  
- FIR-036  

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

### Child Components  

- FIR-037  

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

Unconfirmed  

**Product**  

Unconfirmed  

**Status**  

Candidate  

### Color  

Black  

### Material  

Steel  

### Graphic Attribute  

None  

### Industrial Attribute  

Fire Pit（検討中。旧FIR-020と統合。具体的な候補情報はPX-007 Deliberation Codexで管理）  

---  

## FIR-020  

Retired. FIR-019（Fire Pit枠）へ統合済み。旧登録情報（FIREGRAPHIX BLISS-SP）はPX-007 Deliberation Codexへ移管。本IDは欠番として保持する。  

---  

## FIR-021  

**Brand**  

Unconfirmed  

**Product**  

LECTER Ver2  

**Status**  

Owned  

### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Trivet（五徳）  

### Price  

¥19,000  

---  
## FIR-022  

**Brand**  

Unconfirmed  

**Product**  

TAKIBI SHEET  

**Status**  

Owned  

### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Fire-Resistant Sheet  

### Price  

¥7,480  

---  
## FIR-023  

**Brand**  

DEVISE WORKS  

**Product**  

MACKY DEVISE  

**Status**  

Owned  

### Color  

Unconfirmed  

### Material  

Steel  

### Industrial Attribute  

Fire Knife  

### Price  

¥54,450  

---  
## FIR-024  

**Brand**  

Unconfirmed  

**Product**  

HONE HOOK  

**Status**  

Owned  

### Quantity  

2  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Hook  

### Price  

¥3,200  

---  
## FIR-025  

**Brand**  

SomAbito  

**Product**  

焚き火side stand  

**Status**  

Owned  

### Color  

Black（KURO脚）  

### Material  

Steel / Brass（真鍮紋章）  

### Graphic Attribute  

Emblem（紋章）  

### Industrial Attribute  

Fireside Stand  

### Price  

¥39,050  

---  
## FIR-026  

**Brand**  

neru design works  

**Product**  

Ono kezuru カバー  

**Status**  

Owned  

**Parent**  

FIR-004  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Axe Cover  

### Price  

¥3,630  

---  
## FIR-027  

**Brand**  

WHAT WE WANT（WWW）  

**Product**  

WWW_SAYA  

**Status**  

Owned  

**Parent**  

FIR-005  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Sheath Case（Nata kezuru用）  

### Price  

¥9,900  

---  
## FIR-028  

**Brand**  

Unconfirmed  

**Product**  

shank heater 百式改  

**Status**  

Owned  

### Child Components  

- FIR-029  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Gas Stove  

### Price  

¥38,500  

---  
## FIR-029  

**Brand**  

Unconfirmed  

**Product**  

shank container  

**Status**  

Owned  

**Parent**  

FIR-028  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Stove Bag  

### Price  

¥8,800  

---  
## FIR-030  

**Brand**  

DEVISE WORKS  

**Product**  

MACCHO CASE  

**Status**  

Owned  

### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Fire Starter Case  

### Price  

¥9,020  

---  
## FIR-031  

**Brand**  

SOMABITO  

**Product**  

SOMA no Folk  

**Status**  

Owned  

### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Fireside Fork  

### Price  

¥11,800  

---  
## FIR-032  

**Brand**  

WHAT WE WANT（WWW）  

**Product**  

WWW_HANGER  

**Status**  

Owned  

### Quantity  

7  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Hook  

### Price  

¥7,040  

---  
## FIR-033  

**Brand**  

SOMABITO  

**Product**  

SOMA no Hera  

**Status**  

Owned  

### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Fireside Spatula  

### Price  

¥11,800  

---  
## FIR-034  

**Brand**  

Unconfirmed  

**Product**  

カスタムベロ（ナターシャ・マチルダ・アンナ・ジェーン）  

**Status**  

Owned  

**Parent**  

FIR-001  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Rodan Custom Option Part（ベロ）  

### Price  

¥11,800  

---  
## FIR-035  

**Brand**  

Blick  

**Product**  

半月セット  

**Status**  

Owned  

**Parent**  

FIR-001  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Rodan Custom Option Part（半月）  

### Price  

¥23,650  

---  
## FIR-036  

**Brand**  

サンゾー工務店 × asimocrafts × 横濱帆布鞄  

**Product**  

rodan_no_kaban  

**Status**  

Owned  

**Parent**  

FIR-001  


### Color  

Gray  

### Material  

Canvas  

### Industrial Attribute  

Fire Pit Carrying Case（旧STR-020より移設）  

### Price  

¥20,900  

---  
## FIR-037  

**Brand**  

サンゾー工務店 × asimocrafts × 横濱帆布鞄  

**Product**  

table_no_kaban  

**Status**  

Owned  

**Parent**  

FIR-002  


### Color  

Gray  

### Material  

Canvas  

### Industrial Attribute  

Iron Table Carrying Case（旧STR-021より移設）  

### Price  

¥38,500  

---  

# Shelter  

---  

## SHL-001  

**Brand**  

Unconfirmed  

**Product**  

幕男  

**Status**  

Owned  

### Child Components  

- SHL-002  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Winter Hexa Tarp  

### Price  

¥62,535  

---  
## SHL-002  

**Brand**  

DEVISE  

**Product**  

W3.8 ROPE（DEVISE ver.）  

**Status**  

Owned  

**Parent**  

SHL-001  

### Quantity  

2  


### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Guy Rope（ガイロープ）  

### Price  

¥21,780  

---  
## SHL-003  

**Brand**  

DEVISE WORKS × HEIMPLANET  

**Product**  

CLOUDBREAK"D"  

**Status**  

Owned  

### Color  

White  

### Material  

High Tenacity (HT) Polyester, TPU（エアフレーム）／100D ripstop polyester（フライシート）／210D Nylon（フロア）  

### Industrial Attribute  

Inflatable Shelter Tent（設営約5分、インナーテント着脱可、フロントドア跳ね上げ対応）  

### Price  

¥550,000  

---  
## SHL-004  

**Brand**  

HELLOS factory  

**Product**  

Slug Shelter V2.0（国内流通名：スネイルシェルター）  

**Status**  

Owned  

### Color  

Black  

### Material  

Unconfirmed  

### Industrial Attribute  

Shelter Tent  

### Price  

要確認  

---  
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

STR-029  
└ STR-026  

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

Planning、Acquisition Strategy、Design Philosophy、Aesthetics、Positioning、Evaluationは、それぞれの文書で管理する。Candidate段階の具体的製品比較・評価はPX-007 Deliberation Codexで管理する。  

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
- PX-007 Deliberation Codex  

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

## Version 7.1〜7.13

（旧履歴は変更なし。詳細は本ファイルの過去バージョンを参照。）

---  

## Version 7.14  

プロジェクトオーナーの直接指示に基づき、PX-007 Deliberation Codexの新設と連動した、Candidate段階のデータ運用ルールの是正。目的は、Candidateの定義（「必要だが、具体的な製品はまだ決まっていない」）とTP-004上の実データを一致させること。既存のCandidate系比較情報を遡って移行した。  

### Changes  

- Purposeセクション：Candidate段階における具体的製品情報の扱いに関する新ルールを追加。具体的な候補比較情報はPX-007 Deliberation Codexでのみ管理し、TP-004には用途・IDのみを記録する旨を明記。  
- Registry Rules（Equipment ID）：今後の新規検討はBranch Variant形式を新設せず、単一の親IDのみで登録する運用注記を追加。既存のBranch Variant（LGT-028a/b）は今回の整理対象外として現状維持。  
- FUR-022：Brand/Productを「Unconfirmed（候補2社から選定予定）」から「Unconfirmed」に簡素化。Branch Variantsフィールドを削除。  
- FUR-022a・FUR-022b：削除。具体情報（Enlightened Equipment Accomplice、UGQ Outdoor Tango Duo）はPX-007 Deliberation Codexへ移管。  
- FUR-024：Brand/Productを「Unconfirmed（候補2案から選定予定）」から「Unconfirmed」に簡素化。Branch Variantsフィールドを削除。  
- FUR-024a〜FUR-024d：削除。具体情報（Therm-a-Rest、WAQ、HOTEL CAMPS、VISIONPEAKS×NANGAの4候補）はPX-007 Deliberation Codexへ移管。  
- FIR-019：Brand/Productを「MT.SUMI」「Aura FG」から「Unconfirmed」に変更。旧FIR-020と統合し、単一のFire Pit検討枠とした。  
- FIR-020：Retiredとして記録。旧登録情報はPX-007 Deliberation Codexへ移管。ID自体は欠番として保持。  
- LGT-041：Brand/Productを「wildingout」「LF1984」から「Unconfirmed」に変更。具体情報はPX-007 Deliberation Codexへ移管。  
- ARM-004：プロジェクトオーナーの判断により購入決定。StatusをCandidateからEssentialへ変更。Brand/Product（UNIT/04 × KUNST・BAUM SCENT TOWER）はTP-004に残置し、PX-007への移管対象から除外。  
- LGT-028グループ（親子構造、LGT-028a/028b）：今回の整理対象外として現状維持（別途整理を予定）。  
- Related Documents：PX-007 Deliberation Codexを追加。  
- Furniture Domainのアイテム数：30件（基本ID24件＋Branch Variant 6件）から24件（Branch Variant全廃止）に減少。Fire Domainの実登録数：20件から19件（FIR-020統合によりFire Pit枠が1件に）に減少（IDは欠番として20件分保持）。  

---  

## Version 7.15  

プロジェクトオーナーの指摘に基づく実態訂正。STR-001（Shellcon 01）は購入決定済みだが未所有であり、Status = Ownedは誤記であった。  

### Changes  

- STR-001：StatusをOwnedからEssentialへ訂正。  

---  

## Version 7.16  

プロジェクトオーナーの指摘に基づく実態訂正。LGT-022は「Hinoki」として登録されていたが、nodel design「38-kT miyabi Wood」シリーズに同名の製品は実在しないことが判明した。同シリーズは2024年3月の発売時点でWalnutとSugiの2色のみで展開されており、プロジェクトオーナーが所有する4色目（Walnut・Karin・African Woodに次ぐもの）は、発売時期および外観の特徴（明るい色味・縦方向の力強い木目）から、Sugiである可能性が高いと判断した。

### Changes  

- LGT-022：Product/Materialを「Hinoki」から「Sugi」へ訂正。StatusをUpgradeからOwnedへ訂正（プロジェクトオーナーが既に所有しているため）。  
- LGT-025（Pine）・LGT-026（Maple）：変更なし。引き続きUpgrade（購入希望）として維持する。  

---  

## Version 7.17  

プロジェクトオーナーの指摘に基づく実態訂正。LGT-028bのBrand表記が誤っていた。  

### Changes  

- LGT-028b：Brandを「CALMA STORE × neru design works」から「neru design works × CALMA STORE」へ訂正（neru design worksによるCALMA STORE別注品であり、ブランド順は制作元が先）。Productを「POCKET SHADE M（neru design works柄）」から「POCKET SHADE」へ簡素化。  

---  

## Version 7.18  

プロジェクトオーナーとの協議に基づき、TP-010 Duplicate Storage Exceptionの新設を受けて、ゴミ箱運用をANOBAへ切り替え。  

### Changes  

- STR-026：新規登録。ANOBA BLACK EDITION マルチダストバケット（Status: Essential, Quantity: 2）。TP-010 Duplicate Storage Exceptionに基づき、燃えるゴミ・缶ゴミ用／ビンゴミ用の役割分化を行った2台構成として採用。  
- 従来使用のSnow Peak ガビングスタンド（DB-030）は、TP-004へ未登録のまま運用されていたため、Retiredレコードの追加は行わない。  
- Related Documents：変更なし。  

---  

## Version 7.19  

MARI様のご購入報告に基づき、Essential段階だった3件のStatusをOwnedへ更新。

### Changes  

- STR-001：StatusをEssentialからOwnedへ更新（Snow Peak Shelf Container 25 雪峰祭 Black／Shellcon 01、本体を購入）。子部品（STR-002〜006）のStatusは個別に維持し、本更新の対象外とする。  
- LGT-015：StatusをEssentialからOwnedへ更新（neru design works × LampUp MIYABI RICH Alumi Frozen）。  
- STR-017：StatusをEssentialからOwnedへ更新（nodel design Container Bridge Frame、本体を購入）。子部品（STR-018・STR-019）のStatusは個別に維持し、本更新の対象外とする。  
- Related Documents：変更なし。  

---  

## Version 7.20  

Version 7.18時点で見送っていたSnow Peak ガビングスタンド（DB-030）のRetiredレコードを、プロジェクトオーナーの指示により追加。今後も同種の装備入れ替えが継続的に発生する見込みのため、記録形式を確立する目的も兼ねる。

### Changes  

- STR-027：新規登録（Retired）。Snow Peak ガビングスタンド（DB-030）。STR-026への置き換えに伴う廃止記録。サイズ・重量・分別仕様を事後的に記録。  
- Related Documents：変更なし。  

---  

## Version 7.21  

MARI様のご購入報告に基づき、STR-026（ANOBAダストバケット）のStatus更新と、2台目検討枠の新設。IDはSTR-027が直前のVersion 7.20で別用途（Retired記録）に確定していたため、新規枠にはSTR-028を採番した。

### Changes  

- STR-026：StatusをEssentialからOwnedへ更新（ANOBA BLACK EDITION マルチダストバケット、1台目を購入）。Quantityフィールドを削除（2台構成から単数運用へ変更のため）。Industrial Attributeの記述を、1台目を運用中である旨・2台目検討枠はSTR-028である旨に修正。  
- STR-028：新規登録。ダストバケット2台目の検討枠（Status: Candidate）。STR-026と同一のANOBA製品を追加購入するか、別ブランドを検討するかは未定。具体的な候補比較はPX-007 Deliberation Codexで管理する。  
- Related Documents：変更なし。  

---  

## Version 7.22  

プロジェクトオーナーとの協議の結果、ダストバケット2台目枠（STR-028）の検討が完了。単なる複製ではなく、役割の異なる2製品（ANOBA・KAZE_TO_MORI×WINDY AND RAINY T-box）による構成に確定した。これに伴い、TP-010のDuplicate Storage Exceptionは本件には適用されないこととなった（TP-010 Ver.2.4を参照）。

### Changes  

- STR-026：Industrial Attributeを、燃えないゴミ（缶・ビン）用・STR-029フォールディングサイドテーブルへ収納して運用する旨に修正。  
- STR-028：検討枠（Candidate）から正式決定（Status: Essential）へ更新。Brand/Productを「KAZE_TO_MORI × WINDY AND RAINY / Folding Wire T-box 全面コンプリートセット」に確定。燃えるゴミ用として単独運用する。本体単体のサイズ・重量・開閉方式は未確認のため、Industrial Attributeにその旨を明記。  
- STR-029：新規登録。ANOBA フォールディングサイドテーブル（Status: Essential）。STR-026の収納先として採用。  
- Related Documents：変更なし。  

---  

## Version 7.23  

プロジェクトオーナーの指示に基づき、STR-026とSTR-029をParent/Child関係として明示。あわせて、windyandrainy.tokyo公式ページの確認により、STR-028（T-box本体）のサイズ・重量・素材・耐荷重が判明したため反映。

### Changes  

- STR-026：**Parent** STR-029を追加。Industrial Attributeから、収納先を説明する記述（Parent/Childで自明になったため）を削除し簡素化。  
- STR-029：**Child Components** STR-026を追加。  
- STR-028：Color・Material・Industrial Attributeを、windyandrainy.tokyo公式ページ（商品コード war-037）の情報に基づき更新。本体サイズW395×H440×D195mm、重量約1420g、素材はスチールメッキ（ワイヤー部）／スチールメッキ+プラスチック（脚部）、耐荷重20kg、ワンアクション組み立てであることを確認・反映。KAZE_TO_MORI製COVER/FUTA部の生地構成（X-PAC）は引き続き未確認。  
- Parent / Child Rules セクションのExampleに STR-029└STR-026 を追加。  
- Related Documents：変更なし。  

---  

## Version 7.24  

プロジェクトオーナーの指摘に基づく実態訂正。X-PACは、KAZE_TO_MORI固有の未知の素材ではなく、Dimension-Polyant社（アメリカ、ヨット用セイルクロス世界最大手）が開発した業界標準のラミネート生地であり、多くのアウトドア・バッグブランドで採用されている汎用素材であることが判明した。

### Changes  

- STR-028：Material欄の記述を「詳細な生地構成は未確認」から、X-PACの一般的な構造（表地＋X-Ply補強層＋防水フィルムの3〜4層ラミネート、Dimension-Polyant社製）を明記する記述へ訂正。未確認として残すのは、本製品固有の表地デニールやグレード（X3/X4等）のみに限定。  
- Related Documents：変更なし。  

## Version 7.25  

MARI様がClaude導入以前に個人管理していたスプレッドシート（Numbersファイル）を精査し、GitHub未登録の既存所有ギアをTP-004へ統合。あわせて、7つ目のDomain「Shelter」を新設し、Price（価格）フィールドを任意項目として再導入した（Version 7.0で一度削除された項目の復活。既存登録済みアイテムへの遡及記載は別途対応予定）。

### Changes（構造）

- Registry Rules：Equipment Domainsを6→7に変更し、「Shelter」を追加。Equipment ID例に「SHL-001」を追加。  
- Attribute Policy：保存フィールドに「Price」を追加（任意項目）。  
- Domain運用ルール：装備専用のケース・バッグ類は、対象装備と同じDomainに属する（Storageへ分離しない）方針を確認。これに伴いSTR-020・STR-021をFireドメインへ移設。  

### Changes（Furniture、新規11件）

- FUR-025〜FUR-035：真聖衣（FUR-002子部品）、天板枠左右2種（FUR-013子部品）、シリコンマット黒白2種（FUR-013子部品）、シリコンシート（FUR-013子部品）、ハンガーフック（FUR-013子部品）、ABLE IGTユニットスタンド、Kermit CARRY TOTE、EXTENSIONTABLE CASE（FUR-013子部品）、SNIPE HANGER home.を新規登録。すべてOwned。  
- 備考：Kermit CARRY TOTEは、MARI様のご意向としては本来FUR-001直後への番号挿入・後続繰下げが望ましいが、今回の一括登録では既存ID体系への影響を避けるため末尾（FUR-033）に追加した。Furniture Domainの番号整理は別途の課題として保持する。  

### Changes（Storage、新規7件・移設2件）

- STR-030〜STR-033、STR-013a、STR-015a、STR-032aを新規登録（YETI ICE／Thin Ice／Rambler Half Gallon Jug／ユニバーサルスタンド／Beck Container用Black Stand×2／Jug Stand）。すべてOwned。  
- STR-020（rodan_no_kaban）・STR-021（table_no_kaban）：Fireドメインへ移設のためRetired化。移設先はFIR-036・FIR-037。  

### Changes（Fire、新規17件）

- FIR-021〜FIR-037：五徳、焚き火シート、ナイフ、フック、SomAbito焚き火side stand、斧カバー（FIR-004子）、鞘ケース（FIR-005子）、ガスストーブ＋バッグ、着火ケース、フォーク、フック、ヘラ、Rodanカスタムオプション2件（FIR-001子）、旧STR-020・STR-021（FIR-001／FIR-002子として移設）を新規登録。すべてOwned。  
- FIR-001・FIR-002：Child Componentsを追加。  

### Changes（Light、新規7件）

- LGT-054〜LGT-060：ガスランタン「ネルガス」一式4点（本体・ベース・横レール・下部ベース）、Vapourax M320用アクセサリー（LGT-002子）、お立ち台バー（LGT-032子）、FORKBASEset（LGT-036子）を新規登録。すべてOwned。  
- LGT-002・LGT-032・LGT-036：Child Componentsを追加。  

### Changes（Shelter、新設・4件）

- Domain新設。SHL-001（幕男、冬用ヘキサタープ）とその子SHL-002（ガイロープ）、SHL-003（DEVISE WORKS×HEIMPLANET CLOUDBREAK"D" White）、SHL-004（HELLOS factory Slug Shelter V2.0／国内名スネイルシェルター、Black）を新規登録。すべてOwned。  

### 既知の未確認事項

- STR-032（YETI Rambler Half Gallon Jug）・SHL-004（Slug Shelter V2.0）の価格が未確認。  
- Furniture Domainの番号整理（Kermit CARRY TOTEの適切な位置への挿入）が未対応。  
- 上記以外の新規登録アイテムの一部（ニッチなガレージブランド品）は、ウェブ上での公式情報が確認できず、購入記録上の名称をそのまま採用している。  

- Related Documents：変更なし。  

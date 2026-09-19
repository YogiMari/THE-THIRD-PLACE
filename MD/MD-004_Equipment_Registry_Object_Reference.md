# MD-004 Equipment Registry Object Reference  
  
Version 7.36  
  
---  
  
# Purpose（目的）  
  
MD-004は、THE THIRD PLACEの公式Equipment Registry（装備台帳）である。  
  
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

MD-004はキッチン調理器具を管理しない。キッチン機材は、別途function-first（機能優先）の選定基準を持つMD-003 Galley Fareが管理する。詳細はMD-003を参照。  

Coffee機材は、他のすべてのDomainと異なる登録ルールに従う。比較検討中・意思決定中のアイテムは、MD-004ではなくBR-002 Barista Codexのみで追跡する。Coffeeアイテムは、購入されOwnedになった時点で初めてMD-004（COF-series）へ登録される。それまでの間、Coffee Domain（COF-series）は意図的に未入力のままとする — これはデータの欠落ではなく、設計上の仕様である。

このルールは、CoffeeとKitchenのみに適用される。他のすべてのDomain（Furniture、Light、Aroma、Storage、Fire）には影響しない: 検討中・保留中・決定済みだが未購入のアイテムは、これまで通り既存のStatusシステム（Essential / Candidate / Upgrade）を用いてMD-004へ登録され続ける。

**Candidate段階における具体的製品情報の扱い**：Status = Candidateのアイテムは、MD-004上ではBrand / Productを「Unconfirmed」とし、用途（Industrial Attribute）とEquipment IDのみを記録する。複数の具体的な製品候補間の比較・評価・検討記録は、MD-004ではなくCZ-001 Deliberation Codexのみで管理する。特定の製品が正式に決定（Status = Essential）した時点で、初めてBrand / ProductをMD-004へ記載する。これにより、Candidateの定義（「必要だが、具体的な製品はまだ決まっていない」）とMD-004上の実データを正確に一致させる。競合していた複数の候補IDは、1件の決定枠IDへ統合し、不要となったIDはRetired（統合済み）として記録を残す。
  
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

**運用注記（Version 7.14以降）**：新規に発生する検討中候補の比較については、原則としてBranch Variant形式（a/b/c...）をMD-004上で新設せず、単一の親ID（Brand/Product = Unconfirmed）のみを登録し、具体的な候補間比較はCZ-001 Deliberation Codexで管理する。既存のBranch Variant（LGT-028a/b等）は、整理が完了するまでの間、現状の形式のまま維持する。  
  
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
  
Appearanceは、OP-002 Design Bibleにより、以下を用いて決定される:  
  
- Material  
- Color  
- Texture  
- Finish  
  
そのためMD-004が保存するのは、以下のみである:  
  
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
- FUR-004  
- FUR-005  
- FUR-006  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Organic Furniture  

### Price  

¥65,000  

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

### Child Components  

- FUR-003  

### Color  

Black  

### Material  

Tochigi Leather  

### Graphic Attribute  

None  

### Industrial Attribute  

Craft Leather  

### Price  

¥116,400  

---  

## FUR-004  

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

### Price  

¥19,250  

---  

## FUR-005  

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

### Price  

¥30,360  

---  

## FUR-006  

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

### Price  

¥28,000  

---  

## FUR-007  

**Brand**  

Kermit Chair USA  

**Product**  

Kermit Chair ②  

**Status**  

Owned  

### Child Components  

- FUR-008  
- FUR-009  
- FUR-010  
- FUR-011  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Organic Furniture  

### Price  

¥65,000  

---  

## FUR-008  

**Brand**  

DEVISE WORKS × PINO WORKS  

**Product**  

SANDANBARA  

**Status**  

Owned  

**Parent**  

FUR-007  

### Color  

Black  

### Material  

Leather  

### Graphic Attribute  

None  

### Industrial Attribute  

Seat Custom  

### Price  

¥68,000  

---  

## FUR-009  

**Brand**  

DEVISE WORKS × INAVANCE  

**Product**  

KURO Bolt & Plate  

**Status**  

Owned  

**Parent**  

FUR-007  

### Color  

Black  

### Material  

Black Anodized Aluminum  

### Graphic Attribute  

None  

### Industrial Attribute  

Hardware Custom  

### Price  

¥37,400  

---  

## FUR-010  

**Brand**  

DEVISE WORKS × natural mountain monkeys  

**Product**  

WARU NOVITA  

**Status**  

Owned  

**Parent**  

FUR-007  

### Color  

Black  

### Material  

Black Anodized Aluminum  

### Graphic Attribute  

None  

### Industrial Attribute  

Leg Extension  

### Price  

¥41,800  

---  

## FUR-011  

**Brand**  

DEVISE WORKS × OLD MOUNTAIN  

**Product**  

HIJIWARU  

**Status**  

Owned  

**Parent**  

FUR-007  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

Occult Emblem  

### Industrial Attribute  

Armrest Replacement  

### Price  

¥28,900  

---  

## FUR-012  

**Brand**  

Kermit Chair USA  

**Product**  

Kermit CARRY TOTE  

**Status**  

Owned  

### Color  

Black  

### Material  

500D Cordura Nylon  

### Industrial Attribute  

Carrying Tote（Kermit Chair①②共通使用、2脚収納可。Version 7.28にて、MARI様のご指示によりKermit Chair②の子部品群（FUR-008〜FUR-011）の直後の番号へ移動。以降のFurniture IDを1つずつ繰り下げ）  

### Price  

¥19,700  

---  

## FUR-013  

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

### Price  

¥38,500（ソマチェア2脚合計¥77,000の折半）  

---  

## FUR-014  

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

### Price  

¥38,500（ソマチェア2脚合計¥77,000の折半）  

---  

## FUR-015  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

EXTENMON TABLE  

**Status**  

Owned  

### Child Components  

- FUR-016  
- FUR-017  
- FUR-018  
- FUR-019  
- FUR-020  
- FUR-021  
- FUR-022  
- FUR-023  
- FUR-024  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

Occult Emblem (Silkscreen, Black)  

### Industrial Attribute  

Kitchen Extension Table  

### Price  

¥184,800  

---  

## FUR-016  

**Brand**  

DEVISE WORKS × ANCAM  

**Product**  

ANO D TENBAN  

**Status**  

Upgrade  

**Parent**  

FUR-015  

### Color  

Black  

### Material  

Black Skin Iron (approx. 1cm)  

### Graphic Attribute  

Street Graffiti-style Brand Logo (Cutout)  

### Industrial Attribute  

Unit Top Plate  

### Price  

¥12,650  

---  

## FUR-017  

**Brand**  

DEVISE WORKS × WANTKEY CAMP  

**Product**  

ONETOP"D"  

**Status**  

Upgrade  

**Parent**  

FUR-015  

### Color  

Brown  

### Material  

Walnut  

### Graphic Attribute  

Engraved Logo  

### Industrial Attribute  

Unit Top Plate  

### Price  

¥20,900  

---  

## FUR-025  

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

### Price  

¥41,800  

---  

## FUR-026  

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

### Price  

¥66,000  

---  

## FUR-027  

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

### Price  

¥37,000  

---  

## FUR-028  

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

### Price  

¥44,000  

---  

## FUR-031  

**Brand**  

Snow Peak  

**Product**  

ダウン システムオフトン スリムマットセット（BD-060、掛け布団+マット一式）  

**Status**  

Essential  

**Quantity**  

2  

### Color  

Taupe / Classic Brown（トープ／クラシックブラウン。プロジェクトオーナーからの情報提供に基づく。メーカー公式ページ・レビューサイトのテキスト情報では独立した裏付けが取れていないため、購入前に実物・店舗での最終確認を推奨）  

### Material  

50D Polyester（表地）／150D Polyester（裏地）／Down 95%・Feather 5%（中綿、掛け布団部）／75D Polyester（マット部）  

### Graphic Attribute  

None  

### Industrial Attribute  

Quilt & Sleeping Mat Set（関東〜雪中入門用、快適温度2℃・下限温度-4℃。掛け布団+コンパクトワイドマット（R値5.4・ASTM F3340-22準拠、2枚連結使用）のセット販売のため、旧FUR-021単体マット登録は本IDへ統合。FUR-032系との併用時はマット部が本格雪中用の主断熱層としても使用）  

### Price  

¥44,000  

---  

## FUR-032  

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

Quilt（本格雪中用トップキルト。バックレス構造につきFUR-031（マット部）・FUR-033との併用が必須。カスタムオーダーで下限-18℃級を想定。具体的な候補比較はCZ-001 Deliberation Codexで管理）  

---  

## FUR-033  

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

Sleeping Mat（本格雪中用、断熱補強およびエア漏れ時の保険。FUR-031（マット部）の下に重ね敷きする想定）  

---  

## FUR-034  

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

Pad Sheet（マット上に敷くシーツ。約77×196cm相当を2枚使用しFUR-031（マット部）全面をカバー。関東〜雪中入門用・本格雪中用の両方で共通使用。具体的な候補比較はCZ-001 Deliberation Codexで管理）  

---  

## FUR-003  

**Brand**  

Release  

**Product**  

真聖衣  

**Status**  

Owned  

**Parent**  

FUR-002  


### Color  

Gold  

### Material  

Brass  

### Industrial Attribute  

Hardware / Screw Set Custom（ROYAL BROWN Chester Field Seat用カスタムパーツ）  

### Price  

¥18,655  

---  

## FUR-018  

**Brand**  

neru design works（NDW）  

**Product**  

2UNITFRAME NDW ver.  

**Status**  

Owned  

**Parent**  

FUR-015  


### Color  

Black  

### Material  

Iron  

### Industrial Attribute  

Table Top Frame（天板枠 左）  

### Price  

¥16,500  

---  

## FUR-019  

**Brand**  

DEVISE WORKS  

**Product**  

TSURAICHI KUROWAKU  

**Status**  

Owned  

**Parent**  

FUR-015  


### Color  

Black  

### Material  

Iron  

### Industrial Attribute  

Table Top Frame（天板枠 右）  

### Price  

¥17,160  

---  

## FUR-020  

**Brand**  

DEVISE WORKS  

**Product**  

CUTTING MAT BLACK  

**Status**  

Owned  

**Parent**  

FUR-015  


### Color  

Black  

### Material  

Silicone  

### Industrial Attribute  

Table Silicone Mat  

### Price  

¥8,350  

---  

## FUR-021  

**Brand**  

DEVISE WORKS  

**Product**  

CUTTING MAT White  

**Status**  

Owned  

**Parent**  

FUR-015  


### Color  

White  

### Material  

Silicone  

### Industrial Attribute  

Table Silicone Mat  

### Price  

¥8,350  

---  

## FUR-022  

**Brand**  

DEVISE WORKS  

**Product**  

EDGEPAD GOLD紋章  

**Status**  

Owned  

**Parent**  

FUR-015  


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

## FUR-023  

**Brand**  

neru design works（NDW）  

**Product**  

WWW_EXTENSIONSIDEBAR NDWver  

**Status**  

Owned  

**Parent**  

FUR-015  


### Color  

Gold  

### Material  

Brass  

### Industrial Attribute  

Table Hanger Hook  

### Price  

¥5,000  

---  

## FUR-029  

**Brand**  

ABLE  

**Product**  

IGT 1ユニットスタンド  

**Status**  

Owned  

### Color  

Dark Brown  

### Material  

Walnut  

### Industrial Attribute  

Table Unit Stand  

### Price  

¥20,200  

---  

## FUR-024  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

EXTENSIONTABLE CASE  

**Status**  

Owned  

**Parent**  

FUR-015  


### Color  

Black  

### Material  

Polyester  

### Industrial Attribute  

Carrying Case（EXTENMON TABLE用）  

### Price  

¥15,400  

---  

## FUR-030  

**Brand**  

SNIPE  

**Product**  

SNIPE HANGER home. モク  

**Status**  

Owned  

### Color  

Wood-grain Print（モク）  

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

### Price  

¥95,000  

---  

## LGT-002  

**Brand**  

Vapalux  

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

### Price  

¥49,500  

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

### Price  

¥25,600  

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

### Price  

¥69,000  

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

### Price  

¥25,000  

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

### Price  

¥25,000  

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

### Price  

¥25,000  

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

### Price  

¥25,000  

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

### Price  

¥16,800  

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

### Price  

¥9,980  

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

### Price  

¥81,999  

---  

## LGT-012  

**Brand**  

CALMA STORE  

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

### Price  

¥25,000  

---  

## LGT-013  

**Brand**  

CALMA STORE  

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

### Price  

¥32,000  

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

### Price  

¥29,700  

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

### Price  

¥48,890  

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

### Price  

¥30,800  

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

### Price  

¥11,800  

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

### Price  

¥50,000  

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

### Price  

¥50,000  

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

### Price  

¥50,000  

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

### Price  

¥13,970  

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

### Price  

¥14,800  

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

### Price  

¥13,970  

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

### Price  

¥13,970  

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

### Price  

¥11,990  

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

### Price  

¥25,000  

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

### Price  

¥67,000  

---  

## LGT-028  

**Brand**  

CALMA STORE  

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

### Price  

¥4,780  

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

### Price  

¥67,777  

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

### Price  

¥16,720  

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

### Price  

¥27,170  

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

### Price  

¥16,720  

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

### Price  

¥40,000  

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

### Price  

¥15,400  

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

### Price  

¥18,450  

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

### Price  

¥25,740（2個合計）  

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

### Price  

¥45,000  

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

### Price  

¥8,800  

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

### Price  

¥23,000  

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

Portable LED Lantern（検討中。具体的な候補情報はCZ-001 Deliberation Codexで管理）  

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

### Price  

¥5,780  

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

### Price  

¥5,780  

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

### Price  

¥5,780  

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

### Price  

¥5,780  

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

### Price  

¥5,780  

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

### Price  

¥5,780  

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

### Price  

¥5,780  

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

### Price  

¥5,780  

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

### Price  

¥5,780  

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

### Price  

¥5,780  

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

### Price  

¥5,780  

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

### Price  

¥5,780  

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

Gold  

### Material  

Brass  

### Industrial Attribute  

Gas Lantern（本体）  

### Price  

¥48,400  

---  
## LGT-055  

**Brand**  

neru design works  

**Product**  

Vintage cover250  

**Status**  

Owned  

**Parent**  

LGT-054  


### Color  

Copper（Marbled Patina）  

### Material  

Copper（Chemically Patinated）  

### Industrial Attribute  

Base  

### Price  

¥37,980  

---  
## LGT-056  

**Brand**  

neru design works  

**Product**  

Futamata  

**Status**  

Owned  

**Parent**  

LGT-054  


### Color  

Gold  

### Material  

Brass  

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

Brown  

### Material  

Black Walnut  

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

Amber  

### Material  

Glass  

### Industrial Attribute  

Kerosene Lantern Accessory / Variant Part（LGT-002用）  

### Price  

¥40,000  

---  
## LGT-059  

**Brand**  

WHAT WE WANT（WWW）  

**Product**  

WWW_LANTHANUMHOOK  

**Status**  

Owned  

**Parent**  

LGT-032  


### Color  

Gold  

### Material  

Brass  

### Industrial Attribute  

Otachidai Bar（お立ち台バー）  

### Price  

¥1,320  

---  
## LGT-060  

**Brand**  

38Explore  

**Product**  

FORKBASEset (BS)  

**Status**  

Owned  

**Parent**  

LGT-036  


### Color  

Gold  

### Material  

Brass  

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

### Price  

¥27,000  

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

### Price  

¥38,500  

---  

## ARM-003  

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

### Price  

¥19,800  

---  

## ARM-004  

**Brand**  

Filoméla  

**Product**  

INCENSE CHAMBER Tokyo Limited  

**Status**  

Upgrade  

### Color  

Gray  

### Material  

Ceramic  

### Graphic Attribute  

None  

### Industrial Attribute  

Incense Chamber  

### Price  

¥60,500  

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

### Price  

¥27,500  

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

### Price  

¥64,800  

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

### Price  

¥49,980  

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

### Price  

¥14,800  

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

### Price  

¥28,000  

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
### Price  

¥33,880  

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

### Price  

¥29,800  

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

### Price  

¥76,500  

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

### Price  

¥39,800  

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

### Price  

¥27,500  

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

### Price  

¥12,000  

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

### Price  

¥17,000  

---  

## STR-013  

**Brand**  

nodel design  

**Product**  

Beck Container ①  

**Status**  

Owned  

### Child Components  

- STR-013a  
- STR-014  

### Color  

Black  

### Material  

Painted Aluminum  

### Industrial Attribute  

Modular Storage（Kitchen）  

### Price  

¥55,000（2台合計¥110,000の折半）  

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

### Price  

¥16,500  

---  

## STR-015  

**Brand**  

nodel design  

**Product**  

Beck Container ②  

**Status**  

Owned  

### Child Components  

- STR-015a  
- STR-016  

### Color  

Black  

### Material  

Painted Aluminum  

### Industrial Attribute  

Modular Storage（Coffee & Table Components）  

### Price  

¥55,000（2台合計¥110,000の折半）  

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

### Price  

¥16,500  

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

### Price  

¥30,800  

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

### Price  

¥16,500  

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

### Price  

¥25,300  

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

### Price  

¥9,108  

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

### Price  

¥2,980  

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

### Price  

¥51,150  

---  

## STR-025  

**Brand**  

YETI  

**Product**  

Hopper Flip 12  

**Status**  

Owned  

### Color  

Black  

### Material  

DryHide Fabric  

### Industrial Attribute  

Soft Cooler  

### Price  

¥46,860  

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

### Price  

¥5,000  

---  

## STR-027  

Retired. Snow Peak ガビングスタンド（DB-030）。サイズ50×36×63(h)cm、重量2.0kg、ポリ袋を最大3枚まで取り付け分別対応可能なフレーム組立式ダストスタンドであったが、設営効率（OP-002 Storage Domain評価軸）を著しく損なうと判断され、STR-026（ANOBA BLACK EDITION マルチダストバケット）への置き換え対象となった。MD-004への正式登録がなされないまま運用されていた期間があり、本レコードは事後的な記録である。MD-001 Duplicate Storage Exceptionの適用事例として、本IDを今後同種の入れ替えが発生した際の記録形式の参照として保持する。  

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

### Price  

¥50,600  

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

### Price  

¥9,000  

---  

## STR-030  

**Brand**  

YETI  

**Product**  

YETI ICE 4 lb (1.8 kg)  

**Status**  

Owned  

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

Silver  

### Material  

Stainless Steel  

### Industrial Attribute  

Insulated Jug (1.9L)  

### Price  

¥17,930  

---  

## STR-032a  

**Brand**  

calma store  

**Product**  

KRAKEN STAND  

**Status**  

Owned  

**Parent**  

STR-032  


### Color  

Brown  

### Material  

Oak / Stainless Steel  

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

Iron  

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

Iron  

### Industrial Attribute  

Leg（Beck Container②用）  

### Price  

¥9,900  

---  

## STR-033  

**Brand**  

wanderout  

**Product**  

ユニバーサルスタンド  

**Status**  

Owned  

### Quantity  

4  


### Color  

Black  

### Material  

Steel（Chrome-Plated）  

### Industrial Attribute  

Storage Container Base / Leg（汎用スタンド）  

### Price  

¥55,500  

---  
# Coffee  

Coffee Domainは、抽出に関する一連のワークフロー全体を管理する。  

選定基準や購入優先順位は、OP-005 Acquisition Strategyの管轄である。  

MD-004は、装備（Equipment）のみを管理する。  

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

### Price  

¥44,000  

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

### Price  

¥25,080  

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

### Price  

¥85,000  

---  

## FIR-004  

**Brand**  

neru design works  

**Product**  

ono kezuru  

**Status**  

Owned  

### Child Components  

- FIR-026  

### Color  

Brown  

### Material  

Steel / Oak  

### Graphic Attribute  

None  

### Industrial Attribute  

Axe  

### Price  

¥33,000  

---  

## FIR-005  

**Brand**  

neru design works  

**Product**  

nata kezuru  

**Status**  

Owned  

### Child Components  

- FIR-027  

### Color  

Brown  

### Material  

Steel / Oak  

### Graphic Attribute  

None  

### Industrial Attribute  

Machete  

### Price  

¥29,700  

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

### Price  

¥10,780  

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

### Price  

¥6,380  

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

### Price  

¥13,200  

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

### Price  

¥4,810  

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

### Price  

¥19,800  

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

### Price  

¥33,000  

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

### Price  

¥7,920  

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

### Price  

¥4,810  

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

### Price  

¥28,000  

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

### Price  

¥13,200  

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

### Price  

¥8,800  

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

### Price  

¥2,400  

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

### Price  

¥121,000  

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

Fire Pit（検討中。旧FIR-020と統合。具体的な候補情報はCZ-001 Deliberation Codexで管理）  

---  

## FIR-020  

Retired. FIR-019（Fire Pit枠）へ統合済み。旧登録情報（FIREGRAPHIX BLISS-SP）はCZ-001 Deliberation Codexへ移管。本IDは欠番として保持する。  

---  

## FIR-021  

**Brand**  

サンゾー工務店  

**Product**  

LECTER Ver2  

**Status**  

Owned  

### Color  

Black  

### Material  

Iron  

### Industrial Attribute  

Trivet（五徳）  

### Price  

¥19,000  

---  
## FIR-022  

**Brand**  

zen camp  

**Product**  

TAKIBI SHEET  

**Status**  

Owned  

### Color  

Black  

### Material  

Silicone-Coated Fiberglass  

### Industrial Attribute  

Fire-Resistant Sheet  

### Price  

¥7,480  

---  
## FIR-023  

**Brand**  

asimocrafts × DEVISE WORKS  

**Product**  

MACKY DEVISE  

**Status**  

Owned  

### Color  

Brown  

### Material  

Steel / Oak  

### Industrial Attribute  

Fire Knife  

### Price  

¥54,450  

---  
## FIR-024  

**Brand**  

DAMNGOOD!!  

**Product**  

HONE HOOK  

**Status**  

Owned  

### Quantity  

2  


### Color  

Black  

### Material  

Iron  

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

neru design works × calma store  

**Product**  

Ono kezuru カバー  

**Status**  

Owned  

**Parent**  

FIR-004  


### Color  

Gold  

### Material  

Brass  

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

Brown  

### Material  

Walnut  

### Industrial Attribute  

Sheath Case（Nata kezuru用）  

### Price  

¥9,900  

---  
## FIR-028  

**Brand**  

neru design works × calma store  

**Product**  

shank heater 百式改  

**Status**  

Owned  

### Child Components  

- FIR-029  


### Color  

Black  

### Material  

Brass（Black-Painted）  

### Industrial Attribute  

Gas Stove  

### Price  

¥38,500  

---  
## FIR-029  

**Brand**  

neru design works  

**Product**  

shank container  

**Status**  

Owned  

**Parent**  

FIR-028  


### Color  

Camouflage  

### Material  

Nylon  

### Industrial Attribute  

Stove Bag  

### Price  

¥8,800  

---  
## FIR-030  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

MACCHO CASE  

**Status**  

Owned  

### Color  

Dark Brown  

### Material  

Walnut  

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

Light Brown  

### Material  

Oak  

### Industrial Attribute  

Fireside Fork  

### Price  

¥11,800  

---  
## FIR-032  

**Brand**  

SOMABITO  

**Product**  

SOMA no Hera  

**Status**  

Owned  

### Color  

Light Brown  

### Material  

Oak  

### Industrial Attribute  

Fireside Spatula  

### Price  

¥11,800  

---  
## FIR-033  

**Brand**  

WHAT WE WANT（WWW）  

**Product**  

WWW_HANGER  

**Status**  

Owned  

### Quantity  

7  


### Color  

Brown / Dark Brown  

### Material  

Walnut / Oak  

### Industrial Attribute  

Hook  

### Price  

¥7,040  

---  
## FIR-034  

**Brand**  

サンゾー工務店  

**Product**  

カスタムベロ（ナターシャ・マチルダ・アンナ・ジェーン）  

**Status**  

Owned  

**Parent**  

FIR-001  


### Color  

Gray  

### Material  

Nitrided Iron（窒化処理）  

### Industrial Attribute  

Rodan Custom Option Part（ベロ）  

### Price  

¥11,800  

---  
## FIR-035  

**Brand**  

サンゾー工務店  

**Product**  

半月セット  

**Status**  

Owned  

**Parent**  

FIR-001  


### Color  

Gray  

### Material  

Nitrided Iron（窒化処理）  

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

The Arth  

**Product**  

幕男  

**Status**  

Owned  

### Child Components  

- SHL-002  


### Color  

Black  

### Material  

Polyester  

### Industrial Attribute  

Winter Hexa Tarp  

### Price  

¥62,535  

---  
## SHL-002  

**Brand**  

DEVISE WORKS  

**Product**  

W3.8 ROPE（DEVISE ver.）  

**Status**  

Owned  

**Parent**  

SHL-001  

### Quantity  

2  


### Color  

Black  

### Material  

Polyester  

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

### Child Components  

- SHL-005  


### Color  

Black  

### Material  

Nylon 40D Ripstop（Silicone Coating, PU Blackout）／AL7001 Aluminum（Poles）  

### Industrial Attribute  

Shelter Tent  

### Price  

¥396,000  

---  
## SHL-005  

**Brand**  

HELLOS factory  

**Product**  

ベスタビュールV2.0（DAC POLE）  

**Status**  

Owned  

**Parent**  

SHL-004  


### Color  

Black  

### Material  

Nylon 40D Ripstop（Silicone Coating, PU Blackout）／DAC Pole  

### Industrial Attribute  

Vestibule（SHL-004 Slug Shelter V2.0専用の前室オプション）  

### Price  

¥90,200（販売店の税込価格。オーナー申告「10万弱」と整合）  

---  
# Parent / Child Rules（親子関係ルール）  

Parentオブジェクトは、主たる装備を表す。  

Childオブジェクトは、構成部品、カスタムパーツ、交換可能なアクセサリー、または恒久的に付随するアイテムである。  

Childオブジェクトは、将来ステータスが変更されない限り、単独では存在しない。  

Example  

FUR-001  
└ FUR-002  
└ FUR-004  
└ FUR-005  
└ FUR-006  

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

表面仕上げ（Surface finish）は、OP-002 Design Bibleの管轄である。  

---  

# Single Source of Truth（唯一の正）  

MD-004 Equipment Registryは、Human Principlesとの美意識的整合が求められる、すべてのキャンプ装備における正式な情報源である。キッチン調理器具は、MD-003 Galley Fareが別途管理し、MD-004には登録しない。  

以下の情報は、MD-004を発生源とする:  

- Equipment IDs  
- Brand  
- Product Name  
- Parent / Child relationships  
- Status  
- Material  
- Color  
- Graphic Attribute  
- Industrial Attribute  

他の文書はMD-004を参照するが、装備情報を再定義しない。  

Planning、Acquisition Strategy、Design Philosophy、Aesthetics、Positioning、Evaluationは、それぞれの文書で管理する。Candidate段階の具体的製品比較・評価はCZ-001 Deliberation Codexで管理する。  

---  

# Related Documents  

- OP-001 THE THIRD PLACE Constitution  
- OP-002 Design Bible  
- MD-002 Field Atlas  
- OP-005 Acquisition Strategy  
- OP-006 Foundation Compass  
- OP-007 Habitat Architecture  
- OP-003 Affinity Lexicon  
- OP-004 Aesthetic Grammar  
- MD-001 Storage Blueprint  
- MD-003 Galley Fare  
- CZ-001 Deliberation Codex  

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

## Version 7.26  

MARI様がClaude導入以前に個人管理していたスプレッドシート（Numbersファイル）から、Price未記載だった既存登録済みアイテムの価格情報を抽出し反映した。

### Changes  

- 全65件の既存アイテム（Furniture 17件、Light 28件、Aroma 1件、Storage 17件、Fire 13件相当、重複ID含む）にPriceフィールドを追加。  
- STR-013・STR-015（Beck Container①②）：Numbers記載の合計価格（¥110,000／2台分）を折半して各¥55,000として記録。  
- FUR-011・FUR-012（SOMAチェア①②）：Numbers記載の合計価格（¥77,000／2脚分）を折半して各¥38,500として記録。  
- STR-007：Numbers上「シェルコン①」表記だったが、製品名（Black Label）に基づきSTR-007（Shellcon 02）へ割当（Version 7.25で確立した「矛盾時はTP側を正とする」原則の逆側、すなわちTP-004の製品名を基準にNumbers側のラベル誤りを解釈）。STR-001は該当データなしのまま。  
- LGT-037：Numbers上「RT-01/ECHO LAMP」関連の重複記載（タープC-1／タープC-1-2）のうち、rove troupe本体に一致する側を採用。LGT-027は該当データなしのまま。  
- LGT-036：Numbers記載額はQuantity 2（38-kT THE RICH classic100 ×2）の合計額であることをMARI様に確認済み。単価分割はせず、合計額のままPriceへ記録し、その旨を注記。  
- 引き続きPriceが空欄のアイテム（コンテナ本体・チェア本体等、Numbers上に取得当時の記録が残っていなかったもの）は、今後判明次第追記する。  

- Related Documents：変更なし。  

## Version 7.27  

Version 7.26時点でPrice未確認（要確認）のまま残っていた11件について、ウェブ調査およびプロジェクトオーナーへの確認により価格情報を確定・反映した。あわせて、調査過程で判明したFUR-020／FUR-021の登録構造の誤り、およびSTR-025の型番誤記をプロジェクトオーナーの指摘に基づき訂正した。

### Changes（Price確定、11件）

- LGT-001（KUROshidare）：¥95,000（プロジェクトオーナー確認）。  
- LGT-004（38-kT miyabi wood Joker）：¥69,000（プロジェクトオーナー確認）。  
- LGT-014（MIYABI RICH Amber）：¥29,700（neru design works × LampUp公式価格）。  
- LGT-026（38-kT miyabi Wood Maple）：¥25,000（プロジェクトオーナー確認）。  
- LGT-027（TARPtoTARP × LampUp Glass Shade & Wood Stand Set）：¥67,000（プロジェクトオーナー確認）。  
- ARM-004（UNIT/04 × KUNST・BAUM SCENT TOWER）：¥19,800（プロジェクトオーナー確認）。  
- STR-025（YETI Hopper Flip 12）：¥46,860（YETI Japan公式価格）。型番訂正は下記参照。  
- STR-028（KAZE_TO_MORI × WINDY AND RAINY Folding Wire T-box 全面コンプリートセット）：¥50,600（プロジェクトオーナー確認）。  
- FIR-014（neru design works copper250）：¥28,000（プロジェクトオーナー確認）。  
- FIR-018（武井バーナー Purple Stove 501A）：¥121,000（プロジェクトオーナー確認。生産終了品につき中古相場での記録）。  

### Changes（構造訂正）

- FUR-020／FUR-021：Snow Peak「ダウン システムオフトン スリムマットセット（BD-060）」は掛け布団+マットのセット販売であることが判明。単体マットとして別ID登録されていたFUR-021をFUR-020へ統合し、FUR-021は削除（Retiredではなく登録自体を撤回）。Price ¥44,000（セット価格）はFUR-020側に記録。FUR-022系・FUR-023・FUR-024のIndustrial Attribute内のFUR-021参照、およびPX-007 Deliberation Codexの該当箇所を「FUR-020（マット部）」へ更新。  
- STR-025：Product表記を誤記の「Hopper Flip 16」から正しい「Hopper Flip 12」へ訂正（16はモデル名ではなく容量16qtを指す表記だった）。  

- Related Documents：PX-007 Deliberation Codex（FUR-020/021統合に伴う参照更新）。  

## Version 7.28

STR-011のPrice未記載を解消。また、プロジェクトオーナーの直接指示に基づき、Furniture Domainの番号整理を実施した。これはRegistry Rulesの「IDは変更されない」という原則に対する例外であり、Kermit Chair①②の専用収納ケース（旧FUR-033 Kermit CARRY TOTE）が、Kermit Chair②の子部品群（FUR-007〜FUR-010）の直後に位置すべきという実態に合わせるための、一回限りの意図的な再採番である。

### Changes（Price確定）

- STR-011（OMA FACTORY OMA.SC-PICATINNY RAIL-No.001G）：Price未記載だったため¥12,000を追記（プロジェクトオーナー確認）。

### Changes（Furniture番号整理）

- 旧FUR-033（Kermit CARRY TOTE）をFUR-011へ移動。Kermit Chair②の子部品群（FUR-007〜FUR-010）の直後に位置づけた。
- 上記に伴い、旧FUR-011〜FUR-020をFUR-012〜FUR-021へ、旧FUR-022〜FUR-032は番号据え置き、旧FUR-034・FUR-035をFUR-033・FUR-034へ、それぞれ1つずつ繰り下げ。旧FUR-021（削除済み・欠番）は詰められ、Furniture Domainの登録範囲はFUR-001〜FUR-034の連番となった。
- Parent参照（旧FUR-013→新FUR-014を親とする子部品群: 旧FUR-014・015・026〜031・034）、およびChild Componentsリスト（新FUR-006・新FUR-014）を、すべて新番号に更新。
- FUR-022・FUR-023・FUR-024のIndustrial Attribute内の「FUR-020（マット部）」参照を「FUR-021（マット部）」へ更新（Quilt & Sleeping Mat Set本体の新ID反映）。
- PX-007 Deliberation Codex（FUR-020参照2箇所）、PX-003 Vigil Protocol（FUR-017参照1箇所）を、新番号（FUR-021、FUR-018）へ更新。
- Version 7.0〜7.27の記述内にある旧FUR-ID表記は、当時の記録として遡及修正しない。

- Related Documents：PX-003 Vigil Protocol、PX-007 Deliberation Codex（Furniture番号整理に伴う参照更新）。  

## Version 7.29

Owned/EssentialアイテムのうちBrand／Color／Materialが「Unconfirmed」のまま残っていた項目について、ウェブ調査により公式ページ・販売元ページで確認できた範囲のみ反映した。同一製品で複数のカラーバリエーションが存在する等、購入した個体を特定できない項目は、推測を避けるため引き続きUnconfirmedのまま保持している。

なお、Brass／Walnutなど無垢素材のColorは、当該Materialが確認できた場合に本文書内の既存表記慣例（例：LGT-002・LGT-030・FUR-003＝Brass→Gold、FUR-001・FUR-016等＝Walnut→Brown）に基づき記録した。個別に塗装色が確認された場合を除く。

### Changes（確認・反映、13件）

- FUR-011（Kermit CARRY TOTE）：Materialを「500D Cordura Nylon」に確定（Ballistics.jp公式ページ）。Colorは公式に3配色（Coyote×Multicam等）が存在し所有個体を特定できないため、Unconfirmedのまま維持。
- FUR-034（SNIPE HANGER home. モク）：Colorを「Wood-grain Print（モク）」に確定（SINANO WORKS公式ページ、モクは同社の正式カラー名）。
- LGT-056（Futamata）：Brandを「neru design works」、Materialを「Brass」に確定（lifeoverground.com掲載、真鍮削り出しと明記）。Colorは上記慣例によりGoldとした。
- LGT-057（OD-CAN PLATE）：Materialを「Black Walnut」に確定（INOUT公式ページ）。Colorは無垢ウォールナットの実色としてBrownとした。
- LGT-059（WWW_LANTHANUMHOOK）：Brandを「WHAT WE WANT（WWW）」、Materialを「Brass」に確定（WHAT WE WANT公式ページ）。Colorは上記慣例によりGoldとした。
- LGT-060（FORKBASEset (BS)）：Brandを「38Explore」に確定（価格一致・製品ラインナップにより確認）。Color・Materialは情報未確認のまま維持。
- STR-032a（KRAKEN STAND）：Materialを「Oak / Stainless Steel」に確定（calma store公式ページ）。Brand・Colorは販売元と製造元の関係が不明確なため未確認のまま維持。
- STR-033（ユニバーサルスタンド）：Brandを「wanderout」、Materialを「Steel（Chrome-Plated）」に確定（wanderout公式ページ）。複数カラー展開があり所有個体を特定できないため、Colorは未確認のまま維持。
- FIR-021（LECTER Ver2）：Brandを「サンゾー工務店」に確定（同社公式サイトに一致製品あり）。
- FIR-027（WWW_SAYA）：Materialを「Walnut」に確定（WHAT WE WANT公式ページ）。Colorは無垢ウォールナットの実色としてBrownとした。
- FIR-028（shank heater 百式改）：Materialを「Brass（Black-Painted）」、Colorを「Black」に確定（lifeoverground.com掲載、黒塗装が真鍮地に馴染む旨明記）。Brandは制作元表記が複数説あり確定できないため未確認のまま維持。
- FIR-034（カスタムベロ）：Brandを「サンゾー工務店」に確定（同社RODANシリーズのキャラクター名オプションパーツと一致）。
- SHL-004（Slug Shelter V2.0）：Materialを「Nylon 40D Ripstop（Silicone Coating, PU Blackout）／AL7001 Aluminum（Poles）」に確定（HELLOS factory製品情報の複数ソース集約）。

### 引き続きUnconfirmedのまま残る項目

- 上記以外の項目（FUR-025〜027・031〜033、LGT-054・055・058、STR-013a・015a・032（Color）、FIR-022〜024・026・029〜033・035、SHL-001・002）：公式ページが見つからない、販売元と製造元の帰属が不明確、または複数バリエーションが存在し所有個体を特定できないため、引き続きUnconfirmedのまま保持する。今後、プロジェクトオーナーによる現物確認または追加情報の提供を待つ。
- Related Documents：変更なし。

## Version 7.30

Version 7.29で保留としていたFIR-035のBrand訂正について、プロジェクトオーナーの確認が取れたため反映した。

### Changes

- FIR-035（半月セット）：Brandを誤記の「Blick」から「サンゾー工務店」へ訂正（プロジェクトオーナー確認。FIR-001 RODAN BRICKと同一メーカーによるオプションパーツ）。Materialを「Nitrided Iron（窒化処理）」に確定（RODANシリーズ共通仕様）。Colorは個体を特定できないため引き続きUnconfirmed。

- Related Documents：変更なし。

## Version 7.31

Version 7.29までの調査で残っていたUnconfirmed項目について、プロジェクトオーナーが現物・購入記録を確認し、まとめて情報提供を受けた。提供された内容をそのまま反映した。ウェブ調査による推測ではなく、すべてプロジェクトオーナー本人による現物確認に基づく一次情報である。

### Changes（Furniture）

- FUR-011（Kermit CARRY TOTE）：Colorを「Black」に確定。
- FUR-025（真聖衣）：Brandを「Release」、Colorを「Gold」、Materialを「Brass」に確定。
- FUR-026（2UNITFRAME NDW ver.）：Materialを「Iron」に確定。
- FUR-027（TSURAICHI KUROWAKU）：Brandを「DEVISE WORKS」、Materialを「Iron」に確定。
- FUR-028（CUTTING MAT BLACK）・FUR-029（CUTTING MAT White）：Brandを「DEVISE WORKS」に確定。
- FUR-031（WWW_EXTENSIONSIDEBAR NDWver）：Colorを「Gold」、Materialを「Brass」に確定。
- FUR-032（IGT 1ユニットスタンド）：Colorを「Dark Brown」、Materialを「Walnut」に確定。
- FUR-033（EXTENSIONTABLE CASE）：Colorを「Black」に確定（Materialは未確認のまま維持）。

### Changes（Light）

- LGT-054（BM Lanthan）：Colorを「Gold」、Materialを「Brass」に確定。Industrial Attributeから通称「ネルガス」の注記を削除。
- LGT-055（Vintage cover250）：Brandを「MOLDS Tokyo」から「neru design works」へ訂正（プロジェクトオーナー確認）。Colorを「Copper（Marbled Patina）」、Materialを「Copper（Chemically Patinated）」に確定。
- LGT-058（クラッシュアイス）：Colorを「Amber」、Materialを「Glass」に確定。
- LGT-060（FORKBASEset (BS)）：Colorを「Gold」、Materialを「Brass」に確定。

### Changes（Storage）

- STR-032（Rambler® Half Gallon Jug）：Colorを「Silver」に確定。
- STR-032a（KRAKEN STAND）：Brandを「calma store」、Colorを「Brown」に確定。
- STR-013a・STR-015a（Black Stand）：Materialを「Iron」に確定。
- STR-033（ユニバーサルスタンド）：Colorを「Black」に確定。

### Changes（Fire）

- FIR-021（LECTER Ver2）：Colorを「Black」、Materialを「Iron」に確定。
- FIR-022（TAKIBI SHEET）：Brandを「zen camp」、Colorを「Black」、Materialを「Silicone-Coated Fiberglass」に確定。
- FIR-023（MACKY DEVISE）：Brandを「DEVISE WORKS」から「asimocrafts × DEVISE WORKS」へ訂正（プロジェクトオーナー確認）。Colorを「Brown」に確定。Materialを「Steel」から「Steel / Oak」へ更新（柄部の素材を追加）。
- FIR-024（HONE HOOK）：Brandを「DAMNGOOD!!」、Colorを「Black」、Materialを「Iron」に確定。
- FIR-026（Ono kezuruカバー）：Brandを「neru design works」から「neru design works × calma store」へ訂正（プロジェクトオーナー確認）。Colorを「Gold」、Materialを「Brass」に確定。
- FIR-029（shank container）：Brandを「neru design works」、Colorを「Camouflage」、Materialを「Nylon」に確定。
- FIR-030（MACCHO CASE）：Brandを「DEVISE WORKS」から「DEVISE WORKS × WHAT WE WANT」へ訂正（プロジェクトオーナー確認）。Colorを「Dark Brown」、Materialを「Walnut」に確定。
- FIR-031（SOMA no Folk）：Colorを「Light Brown」、Materialを「Oak」に確定。
- **FIR-032／FIR-033：番号を入れ替え**。プロジェクトオーナーの指示により、SOMA no Hera（SOMABITO）をFIR-032へ、WWW_HANGER（WHAT WE WANT）をFIR-033へ番号変更。IDが変更されない原則に対する例外として、Version 7.28（Furniture番号整理）と同様の扱いとする。FIR-032（SOMA no Hera）：Colorを「Light Brown」、Materialを「Oak」に確定。FIR-033（WWW_HANGER）：Colorを「Brown / Dark Brown」、Materialを「Walnut / Oak」に確定（7個中、素材違いの2バリエーションが混在）。他ドキュメントにFIR-032／FIR-033への参照は存在しないため、相互参照の更新は不要と確認済み。
- FIR-034（カスタムベロ）・FIR-035（半月セット）：Colorを「Gray」に確定。FIR-034のMaterialを「Nitrided Iron（窒化処理）」に確定（FIR-035と同一仕様）。

### Changes（Shelter）

- SHL-001（幕男）：Brandを「The Arth」、Colorを「Black」に確定（プロジェクトオーナー確認、https://thearth.design/item-detail/1450017 ）。
- SHL-002（W3.8 ROPE（DEVISE ver.））：Brandを「DEVISE」から「DEVISE WORKS」へ表記統一。Colorを「Black」、Materialを「Polyester」に確定。

### 引き続きUnconfirmedのまま残る項目

- FUR-033（EXTENSIONTABLE CASE）：Material。
- FIR-028（shank heater 百式改）：Brand。
- SHL-001（幕男）：Material。

- Related Documents：変更なし。

## Version 7.32

Version 7.31で残っていた最後の3件のUnconfirmedについて、プロジェクトオーナーの現物確認が取れたため反映した。これにより、Coffee Domain（意図的に未入力のCOF-series）を除く、全DomainのOwned／EssentialアイテムのBrand・Color・Materialが確定した。

あわせて、Excelスプレッドシートのマージ時に混入した「通称」表記のような非公式な注記が他に残っていないか、Industrial Attribute欄を全件確認した。LGT-054の「ネルガス」（Version 7.31で削除済み）以外に同種の注記は見つからなかった。なお、SHL-004の「国内流通名：スネイルシェルター」は公式な国内代理店表記であり、ネルガスのような非公式なあだ名とは性質が異なるため、削除対象としない。

### Changes

- FIR-028（shank heater 百式改）：Brandを「neru design works × calma store」に確定（プロジェクトオーナー確認）。
- FUR-033（EXTENSIONTABLE CASE）：Materialを「Polyester」に確定（プロジェクトオーナー確認）。
- SHL-001（幕男）：Materialを「Polyester」に確定（プロジェクトオーナー確認）。

- Related Documents：変更なし。

## Version 7.33

MD-003 Galley Fare Version 2.8（ゴミ箱のストレージ移管に伴うKIT-070系の整理）との整合確認、および親子関係の記載点検の結果、親側のChild Componentsリストに抜けがあったため補完した。本文書のゴミ関連の登録（STR-026〜STR-029）の内容に変更はなく、引き続きゴミ箱・ダストバケット・サイドテーブルの正の登録先は本文書である。

### Changes

- FUR-002：Child Componentsとして FUR-025 を追記（FUR-025のParent記載に対応）。
- FUR-014：Child Componentsに FUR-026・FUR-027・FUR-028・FUR-029・FUR-030・FUR-031・FUR-033 を追記（各子部品のParent記載に対応。従来はFUR-015・FUR-016のみ記載）。
- FIR-004：Child Componentsとして FIR-026 を追記。
- FIR-005：Child Componentsとして FIR-027 を追記。
- STR-013：Child Componentsに STR-013a を追記（従来はSTR-014のみ記載）。
- STR-015：Child Componentsに STR-015a を追記（従来はSTR-016のみ記載）。
- 各子部品側のParent記載および登録内容に変更なし。

- Related Documents：MD-003 Galley Fare（Version 2.8。KIT-070系をSTR-026・027・029の移管記録へ整理）。

## Version 7.34

MARI様のご指示に基づき、Aroma Domainの2件のStatusおよび番号を整理した。ARM-003（Filoméla INCENSE CHAMBER Tokyo Limited）をEssentialからUpgradeへ変更し、購入決定済みのARM-004（UNIT/04 × KUNST・BAUM SCENT TOWER）と番号を入れ替えた。Essential（購入決定）を先に、Upgrade（「あれば良い」枠）を後に並べる整理である。これはRegistry Rulesの「IDは変更されない」という原則に対する例外であり、Version 7.28（Furniture番号整理）・Version 7.31（FIR-032／FIR-033入替）と同様の扱いとする。

### Changes

- ARM-003：旧ARM-004（UNIT/04 × KUNST・BAUM SCENT TOWER）を新ARM-003として配置。Status（Essential）を含む登録内容に変更なし。
- ARM-004：旧ARM-003（Filoméla INCENSE CHAMBER Tokyo Limited）を新ARM-004として配置。StatusをEssentialからUpgradeへ変更。その他の登録内容に変更なし。
- CZ-001 Deliberation Codex（Version 2.6）・CZ-002 Vigil Protocol（Version 2.5）内のARM-003／ARM-004参照を新番号へ更新。
- Version 7.14・Version 7.27の記述内にある旧ARM-004（SCENT TOWER）の表記は、当時の記録として遡及修正しない。

- Related Documents：CZ-001 Deliberation Codex、CZ-002 Vigil Protocol（Aroma番号入替に伴う参照更新）。

## Version 7.35

MARI様のご指示に基づき、SHL-004（HELLOS factory Slug Shelter V2.0）の専用オプション「ベスタビュールV2.0」をSHL-005として子部品登録した。

### Changes

- SHL-005：新規登録（Status: Owned、Parent: SHL-004）。Brand・Productは日本正規ディーラー（Burn Freely等）の商品表記「HELLOS FACTORY SNAIL SHELTER V2.0専用ベスタビュールV2.0(DAC POLE)」に基づく。Color・Materialはオーナーの指示により本体（SHL-004）と同一（Black／Nylon 40D Ripstop）とした。ポールのみ、商品名表記に基づきDAC Poleとして記録（本体のAL7001 Aluminumとは異なる可能性があるため、現物確認後に必要であれば訂正）。Price ¥90,200は販売店の税込価格で、オーナー申告（10万弱）と整合。実購入額が異なる場合は訂正する。  
- SHL-004：Child Componentsとして SHL-005 を追記。  

- Related Documents：変更なし。

## Version 7.36

プロジェクトオーナーの直接指示に基づき、Furniture Domainの番号整理を実施した。これはRegistry Rulesの「IDは変更されない」という原則に対する例外であり、Version 7.28（Kermit CARRY TOTEの位置整理）と同様の、実態（Kermit①→②→CARRY TOTE→SOMA→EXTENMON TABLE→Butterfly→Sofa／Quilt & Sleeping Mat Set系の順）に合わせるための一回限りの意図的な再採番である。

### Changes（Furniture番号整理）

- 下記の旧→新対応表に基づき、Furniture Domain全34件（FUR-001〜FUR-034）を同時に再採番した（プレースホルダ経由の一括置換により、途中の番号衝突は発生していない）。

| 旧ID | 新ID | 旧ID | 新ID | 旧ID | 新ID |
|---|---|---|---|---|---|
| FUR-001 | FUR-001 | FUR-013 | FUR-014 | FUR-025 | FUR-003 |
| FUR-002 | FUR-002 | FUR-014 | FUR-015 | FUR-026 | FUR-018 |
| FUR-003 | FUR-004 | FUR-015 | FUR-016 | FUR-027 | FUR-019 |
| FUR-004 | FUR-005 | FUR-016 | FUR-017 | FUR-028 | FUR-020 |
| FUR-005 | FUR-006 | FUR-017 | FUR-025 | FUR-029 | FUR-021 |
| FUR-006 | FUR-007 | FUR-018 | FUR-026 | FUR-030 | FUR-022 |
| FUR-007 | FUR-008 | FUR-019 | FUR-027 | FUR-031 | FUR-023 |
| FUR-008 | FUR-009 | FUR-020 | FUR-028 | FUR-032 | FUR-029 |
| FUR-009 | FUR-010 | FUR-021 | FUR-031 | FUR-033 | FUR-024 |
| FUR-010 | FUR-011 | FUR-022 | FUR-032 | FUR-034 | FUR-030 |
| FUR-011 | FUR-012 | FUR-023 | FUR-033 | | |
| FUR-012 | FUR-013 | FUR-024 | FUR-034 | | |

- Parent、Child Componentsリスト、Industrial Attribute内のFUR参照（子部品・関連部品への言及を含む）を、すべて上記対応表に基づき新番号へ更新した。
- Parent / Child Rules（親子関係ルール）章のExample（FUR-001とその子部品の例示）も、実際のデータに合わせて新番号へ更新した。
- FUR-031（旧FUR-021、Quilt & Sleeping Mat Set）のIndustrial Attribute内にある「旧FUR-021単体マット登録は本IDへ統合」という記述は、Version 7.28以前に削除・撤回された別ID（今回の対応表の対象外）を指す歴史的記述のため、遡及修正しない。
- Version 7.0〜7.35の記述内にある旧FUR-ID表記は、当時の記録として遡及修正しない。
- CZ-001 Deliberation Codex（Winter Top Quilt／Winter Sleeping Mat／Pad Sheet／Confirmed - Purchase PendingにおけるFUR参照）、CZ-002 Vigil Protocol（Butterfly Table M Black LookのMD-004 Reference）を、それぞれ新番号へ更新。

- Related Documents：CZ-001 Deliberation Codex、CZ-002 Vigil Protocol（Furniture番号整理に伴う参照更新）。

---  

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、TP-004からMD-004へ番号を変更した。本文中の他文書参照（TP-002・TP-005・TP-011・PX-007等）および「Relationship to Other Core Documents」表を新ID体系へ更新した。Version History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持した。内容（Version 7.32）に変更はない。旧ID: TP-004。  

# MD-004 Equipment Registry Object Reference  
  
**Document ID**: MD-004  
**Title**: Equipment Registry Object Reference  
**Series**: MD – Master Data (Record)  
**Version**: 7.82  
**Authority**: SSOT  
**Status**: Active  
**Owner**: THE THIRD PLACE Project  
  
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

Coffee機材は、他のすべてのDomainと異なる登録ルールに従う。比較検討中・意思決定中のアイテムは、MD-004ではなくBR-002 Barista Canonのみで追跡する。Coffeeアイテムは、購入されOwnedになった時点で初めてMD-004（COF-series）へ登録される。それまでの間、Coffee Domain（COF-series）は意図的に未入力のままとする — これはデータの欠落ではなく、設計上の仕様である。

このルールは、CoffeeとKitchenのみに適用される。他のすべてのDomain（Furniture、Light、Aroma、Storage、Fire、Shelter）には影響しない: 検討中・保留中・決定済みだが未購入のアイテムは、これまで通り既存のStatusシステム（Essential / Candidate / Upgrade）を用いてMD-004へ登録され続ける。

**Candidate段階における具体的製品情報の扱い**：Status = Candidateのアイテムは、MD-004上ではBrand / Productを「Unconfirmed」とし、用途（Industrial Attribute）とEquipment IDのみを記録する。複数の具体的な製品候補間の比較・評価・検討記録は、MD-004ではなくCZ-001 Deliberation Dossierのみで管理する。特定の製品が正式に決定（Status = Essential）した時点で、初めてBrand / ProductをMD-004へ記載する。これにより、Candidateの定義（「必要だが、具体的な製品はまだ決まっていない」）とMD-004上の実データを正確に一致させる。競合していた複数の候補IDは、1件の決定枠IDへ統合し、不要となったIDはRetired（統合済み）として記録を残す。
  
---  
  
# Registry Rules（登録ルール）  

→ OP-010 Qualification Charter Part A を参照。

---

# Furniture

---

## FUR-001  

**Brand**  

Kermit Chair USA  

**Product**  

Kermit Chair Chesterfield  

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

Kermit Chair SANDANBARA  

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

BALLISTICS INDUSTRIES  

**Product**  

Kermit CARRY TOTE  

**Status**  

Owned  

### Color  

Black  

### Material  

500D Cordura Nylon  

### Industrial Attribute  

Carrying Tote（Kermit Chair Chesterfield・SANDANBARA共通使用、2脚収納可。Version 7.28にて、MARI様のご指示によりKermit Chair SANDANBARAの子部品群（FUR-008〜FUR-011）の直後の番号へ移動。以降のFurniture IDを1つずつ繰り下げ）  

### Price  

¥19,700  

---  

## FUR-013  

**Brand**  

DEVISE WORKS × SomAbito  

**Product**  

SOMA CHAIR DEVISE MODEL  

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

SomAbito  

**Product**  

SOMA Chair  

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

None（刻印ロゴのみ。OP-010 §Graphic Attributeの特筆性の基準によりNone）  

### Industrial Attribute  

Unit Top Plate  

### Price  

¥20,900  

---  

## FUR-018  

**Brand**  

neru design works  

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

neru design works  

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

## FUR-024  

**Brand**  

neru design works × WHAT WE WANT  

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

## FUR-025  

**Brand**  

DEVISE WORKS × TENt o TEN × WHAT WE WANT  

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

WHAT WE WANT  

**Product**  

WWW_KAZARITANA  

**Status**  

Owned  

### Color  

Brown / Dark Brown  

### Material  

Oak / Walnut  

### Graphic Attribute  

None  

### Industrial Attribute  

Nesting Table  

### Price  

¥35,000  

---  

## FUR-028  

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

## FUR-029  

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

## FUR-030  

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

## FUR-031  

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

## FUR-032  

**Brand**  

Snow Peak  

**Product**  

ダウン システムオフトン ワイドマットセット（BD-070、掛け布団+マット一式）  

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

Quilt & Sleeping Mat Set（関東〜雪中入門用、快適温度2℃・下限温度-4℃。掛け布団+コンパクトワイドマット（R値5.4・ASTM F3340-22準拠、2枚連結使用）のセット販売のため、旧FUR-021単体マット登録は本IDへ統合。冬用トップキルト枠〈FUR-033〉は本IDの採用により統合済み〈Retired〉）  

### Price  

¥45,100  

---  

## FUR-033  

Retired. 冬用トップキルト枠（本格雪中用、Candidate）。プロジェクトオーナーの決定により、冬用キルトはSnow Peak ダウン システムオフトン スリムマットセット（FUR-032）を採用したため、本枠はFUR-032へ統合した。本IDは統合記録として保持する。  

---  

## FUR-034  

**Brand**  

BlackishGear  

**Product**  

BLACK ZONE MAT  

**Status**  

Essential  

**Quantity**  

2  

### Color  

Black（両面）  

### Material  

Polyethylene (IXPE)  

### Industrial Attribute  

Sleeping Mat（本格雪中用の断熱補強およびエア漏れ時の保険。FUR-032（マット部）の下に重ね敷きする想定。展開サイズ185×60×2cm、収納サイズ15×60×15cm（蛇腹折り畳み）、重量380g、R値1.9（第三者試験報告書、GB/T 10294-2008・ASTM F3340-22準拠）。CZ-001 Deliberation DossierでTherm-a-Rest Zライトソル・NEMOスイッチバックとの比較検討の結果、採用決定）  

### Price  

¥3,564（セール価格）  

---  

## FUR-035  

**Brand**  

HOTEL CAMPS  

**Product**  

リバーシブル ホットカバー（コットカバー）  

**Status**  

Essential  

**Quantity**  

2  

### Color  

Black（両面、リバーシブル）  

### Material  

表：ポリエステル100%（吸湿発熱ボア）／裏：ポリエステル70%・レーヨン30%／中材：アルミシート  

### Industrial Attribute  

マット上に敷くシーツ。FUR-032（マット部、TM-089ワイドマット、196×77×8cm）×2枚それぞれの上に被せて使用。使用時約205×84cm、収納時約30×18cm、重量約750g。TM-089より長さ+9cm・幅+7cm大きく、4隅をドローコードで絞ってマットごと固定するリバーシブル両面ラップ構造。CZ-001 Deliberation Dossierで候補①②④（Color不適合等）との比較検討の結果、採用決定。  

### Price  

¥9,980（公式サイト価格）  

---  

## FUR-036  

**Brand**  

Snow Peak  

**Product**  

オフトン ウォームアダプター（BD-066）  

**Status**  

Essential  

**Quantity**  

2  

### Color  

Charcoal Gray（MARI様確認。Snow Peak公式サイトのカラー表記は「その他」）  

### Material  

Polyester（フリース生地）  

### Industrial Attribute  

Inner Liner（システムオフトンの掛け布団内側に、スナップボタン付きテープをループへ通して4箇所で固定して使用するインナーシュラフ。サイズ75×180cm、収納サイズφ16×25cm、重量800g。汚れ防止・追加保温用。FUR-032との併用が前提）  

### Price  

¥7,480  

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

¥99,500  

---  

## LGT-002  

**Brand**  

Vapalux  

**Product**  

M320  

**Status**  

Owned  

### Child Components  

- LGT-003  

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

Vapalux  

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
## LGT-004  

**Brand**  

WANTKEY CAMP × 38Explore  

**Product**  

38-kT HAUS5 WANTKEY Exclusive  

**Status**  

Owned  

### Child Components  

- LGT-005  
- LGT-006  
- LGT-007  
- LGT-008  
- LGT-009  

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

## LGT-005  

**Brand**  

nodel design  

**Product**  

38-kT miyabi wood (Joker)  

**Status**  

Owned  

**Parent**  

LGT-004  

### Color  

Brown  

### Material  

Camphor Wood  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥69,000  

---  

## LGT-006  

**Brand**  

nodel design  

**Product**  

38-kT miyabi wood (King)  

**Status**  

Owned  

**Parent**  

LGT-004  

### Color  

Brown  

### Material  

Satin Walnut  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥25,000  

---  

## LGT-007  

**Brand**  

nodel design  

**Product**  

38-kT miyabi wood (Queen)  

**Status**  

Owned  

**Parent**  

LGT-004  

### Color  

Brown  

### Material  

Zebrawood  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥25,000  

---  

## LGT-008  

**Brand**  

nodel design  

**Product**  

38-kT miyabi wood (Jack)  

**Status**  

Owned  

**Parent**  

LGT-004  

### Color  

Brown  

### Material  

New Guinea Walnut  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥25,000  

---  

## LGT-009  

**Brand**  

nodel design  

**Product**  

38-kT miyabi wood (Ace)  

**Status**  

Owned  

**Parent**  

LGT-004  

### Color  

Brown  

### Material  

Jindai Yakusugi  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥25,000  

---  

## LGT-010  

**Brand**  

38Explore  

**Product**  

38-kT HAUS5  

**Status**  

Owned  

### Child Components  

- LGT-011  
- LGT-012  
- LGT-013  
- LGT-014  
- LGT-015  
- LGT-016  

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

## LGT-011  

**Brand**  

1/f SPACE  

**Product**  

38-kT HAUS5 PANEL  

**Status**  

Owned  

**Parent**  

LGT-010  

### Color  

Black  

### Material  

Stainless Steel  

### Industrial Attribute  

Custom Panel  

### Price  

¥9,980  

---  

## LGT-012  

**Brand**  

neru design works × 1/f SPACE  

**Product**  

MIYABI RICH 0/f Copper Glove  

**Status**  

Owned  

**Parent**  

LGT-010  

### Color  

Copper  

### Material  

Copper  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥81,999  

---  

## LGT-013  

**Brand**  

CALMA STORE  

**Product**  

THE RICH Celluloid Mother of Pearl  

**Status**  

Owned  

**Parent**  

LGT-010  

### Color  

White  

### Material  

Mother of Pearl  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥25,000  

---  

## LGT-014  

**Brand**  

CALMA STORE  

**Product**  

38KT TORTOISE  

**Status**  

Owned  

**Parent**  

LGT-010  

### Color  

Brown  

### Material  

Celluloid (Tortoise Shell Pattern)  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥32,000  

---  

## LGT-015  

**Brand**  

neru design works × LampUp  

**Product**  

MIYABI RICH Amber  

**Status**  

Owned  

**Parent**  

LGT-010  

### Color  

Multi  

### Material  

Stained Glass  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥29,700  

---  

## LGT-016  

**Brand**  

neru design works × LampUp  

**Product**  

MIYABI RICH Alumi Frozen  

**Status**  

Owned  

**Parent**  

LGT-010  

### Color  

Silver  

### Material  

Aluminum  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥48,990  

---  

## LGT-017  

**Brand**  

OTEBO CRAFTS  

**Product**  

BABEL  

**Status**  

Essential  

### Child Components  

- LGT-017a  

### Color  

Brown  

### Material  

Walnut（Black Walnut）  

### Industrial Attribute  

Lantern Stand（木工旋盤仕上げ。Goal Zero・38灯・ZIG対応。支柱高約13cm、全高約15cm、約130g。uyan.base.shop〈OTEBO CRAFTS公式ショップ〉で確認、2026-09-28。公式ショップの定価は¥12,500〈SOLD OUT〉）  

### Price  

¥20,000（実勢価格。未購入のため、OP-010 Part AのPrice規定に基づき実勢価格で記載〈2026-09-29、MARI様のご決定〉。購入後は実際の購入価格へ更新する）  

---  

## LGT-017a  

**Brand**  

Unconfirmed  

**Product**  

Unconfirmed  

**Status**  

Candidate  

**Parent**  

LGT-017  

### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Portable LED Lantern（38-kT Shade, Foldable。フィールドでの設営時に開いてLGT-017 BABELの上に載せて使用する。具体的な製品比較はCZ-001 Deliberation Dossierで管理）  

---  

## LGT-017b  

Retired. 38-kT用シェードの候補枠（Candidate）。MD-004 §Purposeの候補記録ルール（競合する複数の候補IDは1件の決定枠IDへ統合する）に基づき、LGT-017aへ統合した（2026-09-29、MARI様のご決定）。候補製品の比較はCZ-001 Deliberation Dossierで管理する。本IDは統合記録として保持する。  

---  

## LGT-018  

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

## LGT-019  

**Brand**  

KI-no  

**Product**  

Kn One Off Shade (38灯)  

**Status**  

Owned  

### Child Components  

- LGT-04_1a  

### Color  

Oak / Light Blue  

### Material  

Resin / Walnut  

### Industrial Attribute  

Airlight Shade  

### Price  

¥15,400  

---  

## LGT-04_1a  

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

## LGT-020  

**Brand**  

neru design works  

**Product**  

革シェード  

**Status**  

Owned  

### Child Components  

- LGT-04_1b  

### Color  

Light Brown  

### Material  

Leather  

### Industrial Attribute  

Airlight Shade  

### Price  

¥18,450  

---  

## LGT-04_1b  

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

## LGT-021  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

デバデバの実  

**Status**  

Owned  

### Child Components  

- LGT-022  
- LGT-04_1c  

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

## LGT-022  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

MITOCOLOMON  

**Status**  

Owned  

**Parent**  

LGT-021  

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

## LGT-04_1c  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-021  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

### Price  

¥5,780  

---  

## LGT-023  

**Brand**  

WHAT WE WANT × COLONISTA  

**Product**  

CONPE10_WWW  

**Status**  

Owned  

### Child Components  

- LGT-024  
- LGT-04_1d  

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

## LGT-024  

**Brand**  

DEVISE WORKS × WHAT WE WANT  

**Product**  

OTACHIDAI BLACK  

**Status**  

Owned  

**Parent**  

LGT-023  

### Child Components  

- LGT-025  

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

## LGT-025  

**Brand**  

WHAT WE WANT  

**Product**  

WWW_LANTHANUMHOOK  

**Status**  

Owned  

**Parent**  

LGT-024  


### Color  

Gold  

### Material  

Brass  

### Industrial Attribute  

Otachidai Bar（お立ち台バー）  

### Price  

¥1,320  

---  
## LGT-04_1d  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-023  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

### Price  

¥5,780  

---  

## LGT-026  

**Brand**  

neru design works × T no T.LE  

**Product**  

Valo shade "MID CENTURY"  

**Status**  

Owned  

### Child Components  

- LGT-04_2a  

### Color  

Orange  

### Material  

Silicone  

### Industrial Attribute  

Airlight Shade  

### Price  

¥40,000  

---  

## LGT-04_2a  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-026  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

### Price  

¥5,780  

---  

## LGT-027  

**Brand**  

nodel design  

**Product**  

3ndelier Blade  

**Status**  

Owned  

### Child Components  

- LGT-028  
- LGT-029  
- LGT-030  
- LGT-031  
- LGT-032  
- LGT-033  
- LGT-034  

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

## LGT-028  

**Brand**  

nodel design  

**Product**  

G31 Slider  

**Status**  

Owned  

**Parent**  

LGT-027  

### Quantity  

3  

### Color  

Black  

### Material  

Aluminum  

### Industrial Attribute  

Slider  

### Price  

¥11,800（3個合計。MARI様確認）  

---  

## LGT-029  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (Walnut)  

**Status**  

Owned  

**Parent**  

LGT-027  

### Color  

Brown  

### Material  

Walnut  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥14,300  

---  

## LGT-030  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (Sugi)  

**Status**  

Owned  

**Parent**  

LGT-027  

### Color  

Brown  

### Material  

Sugi  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥14,800  

---  

## LGT-031  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (Karin)  

**Status**  

Owned  

**Parent**  

LGT-027  

### Color  

Brown  

### Material  

Karin  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥13,970  

---  

## LGT-032  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (African Wood)  

**Status**  

Owned  

**Parent**  

LGT-027  

### Color  

Brown  

### Material  

African Wood  

### Industrial Attribute  

Portable LED Lantern  

### Price  

¥13,970  

---  

## LGT-033  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (Pine)  

**Status**  

Upgrade  

**Parent**  

LGT-027  

### Color  

Brown  

### Material  

Pine  

### Industrial Attribute  

Wood Sleeve  

### Price  

¥11,990  

---  

## LGT-034  

**Brand**  

nodel design  

**Product**  

38-kT miyabi Wood (Maple)  

**Status**  

Upgrade  

**Parent**  

LGT-027  

### Color  

Brown  

### Material  

Maple  

### Industrial Attribute  

Wood Sleeve  

### Price  

¥25,000  

---  

## LGT-035  

**Brand**  

nodel design × solworks  

**Product**  

Solol Wood (Walnut)  

**Status**  

Owned  

### Child Components  

- LGT-04_2b  

### Color  

Brown  

### Material  

Walnut  

### Industrial Attribute  

Airlight Shade  

### Price  

¥52,999  

---  

## LGT-04_2b  

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

## LGT-036  

**Brand**  

nodel design × solworks  

**Product**  

Solol Wood (Hinoki)  

**Status**  

Owned  

### Child Components  

- LGT-04_2c  

### Color  

Brown  

### Material  

Hinoki  

### Industrial Attribute  

Airlight Shade  

### Price  

¥50,000  

---  

## LGT-04_2c  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-036  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

### Price  

¥5,780  

---  

## LGT-037  

**Brand**  

nodel design × solworks  

**Product**  

Solol Wood (Pine)  

**Status**  

Owned  

### Child Components  

- LGT-04_2d  

### Color  

Brown  

### Material  

Pine  

### Industrial Attribute  

Airlight Shade  

### Price  

¥50,000  

---  

## LGT-04_2d  

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

## LGT-038  

**Brand**  

38Explore  

**Product**  

38-kT THE RICH classic100  

**Status**  

Owned  

### Child Components  

- LGT-039  

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

## LGT-039  

**Brand**  

38Explore  

**Product**  

FORKBASEset (BS)  

**Status**  

Owned  

**Parent**  

LGT-038  


### Color  

Gold  

### Material  

Brass  

### Industrial Attribute  

Stand（38-kT THE RICH classic100 ×2用）  

### Price  

¥18,040  

---  
## LGT-040  

**Brand**  

rove troupe  

**Product**  

RT-01AC01 / ECHO LAMP  

**Status**  

Essential  

### Child Components  

- LGT-04_3a  

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

## LGT-04_3a  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-040  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

### Price  

¥5,780  

---  

## LGT-041  

**Brand**  

KURASHI MADE  

**Product**  

DOME LOOK  

**Status**  

Essential  

### Child Components  

- LGT-04_3b  

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

## LGT-04_3b  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-041  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

### Price  

¥5,780  

---  

## LGT-042  

**Brand**  

IFA  

**Product**  

Pivotshade  

**Status**  

Essential  

### Child Components  

- LGT-04_3c  

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

## LGT-04_3c  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-042  

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

Vacant ID. Reserved for a fourth hanging-type Airlight shade, not yet identified.  

### Child Components  

- LGT-04_3d  

---  

## LGT-04_3d  

**Brand**  

CARGO CONTAINER  

**Product**  

AIR LIGHT  

**Status**  

Owned  

**Parent**  

LGT-043 (pending — parent shade not yet identified)  

### Color  

Black  

### Material  

Plastic  

### Industrial Attribute  

Airlight (Portable LED Light Body)  

### Price  

¥5,780  

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

---  

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

¥42,900  

---  

## STR-002  

**Brand**  

WANTKEY CAMP  

**Product**  

WANTKEY BOXTOP SC25 HEXA  

**Parent**  

STR-001  

**Status**  

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

¥69,800  

---  

## STR-003  

**Brand**  

RALBUDDY PRODUCT × WANTKEY CAMP  

**Product**  

HEXA Side Table  

**Parent**  

STR-001  

**Status**  

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

**Status**  

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

**Status**  

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

BALLISTICS INDUSTRIES  

**Product**  

SHELCON LEG 25  

**Parent**  

STR-001  

**Status**  

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

¥50,000  

---  

## STR-008  

**Brand**  

WANTKEY CAMP  

**Product**  

WANTKEY BOXTOP SC25 TC  

**Parent**  

STR-007  

**Status**  

Owned  

### Color  

Brown  

### Material  

Walnut / Resin  

### Industrial Attribute  

Top Board  

### Price  

¥62,800  

---  

## STR-009  

**Brand**  

WANTKEY CAMP × NOWELLCAMP  

**Product**  

SST WANTKEY Version  

**Parent**  

STR-007  

**Status**  

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

**Status**  

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

**Status**  

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

LOCKFIELD EQUIPMENT × BALLISTICS INDUSTRIES  

**Product**  

SHELCON LEG 25  

**Parent**  

STR-007  

**Status**  

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

Beck Container #1  

**Status**  

Owned  

### Child Components  

- STR-014  
- STR-015  

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

Leg（Beck Container #1用）  

### Price  

¥19,800  

---  

## STR-015  

**Brand**  

nodel design  

**Product**  

Wood Board（Oak）  

**Parent**  

STR-013  

**Status**  

Essential  

### Quantity  

2組  

### Color  

Brown  

### Material  

Oak  

### Industrial Attribute  

Top Board（STR-013 Beck Container #1の蓋へ設置するサイドテーブル天板。MD-001 Storage Blueprint参照）  

### Price  

¥33,000（2組合計。1組¥16,500。MARI様確認）  

---  

## STR-016  

**Brand**  

nodel design  

**Product**  

Beck Container #2  

**Status**  

Owned  

### Child Components  

- STR-017  
- STR-018  

### Color  

Black  

### Material  

Painted Aluminum  

### Industrial Attribute  

Modular Storage（Coffee & Table Components）  

### Price  

¥55,000（2台合計¥110,000の折半）  

---  

## STR-017  

**Brand**  

nodel design  

**Product**  

Black Stand  

**Status**  

Owned  

**Parent**  

STR-016  

### Color  

Black  

### Material  

Iron  

### Industrial Attribute  

Leg（Beck Container #2用）  

### Price  

¥19,800  

---  

## STR-018  

**Brand**  

nodel design  

**Product**  

Wood Board（Walnut）  

**Parent**  

STR-016  

**Status**  

Essential  

### Quantity  

2組  

### Color  

Brown  

### Material  

Walnut  

### Industrial Attribute  

Top Board（STR-016 Beck Container #2の蓋へ設置するサイドテーブル天板。MD-001 Storage Blueprint参照）  

### Price  

¥33,000（2組合計。1組¥16,500。MARI様確認）  

---  

## STR-019  

**Brand**  

nodel design  

**Product**  

Container Bridge Frame  

**Status**  

Owned  

### Child Components  

- STR-020  
- STR-021  
- STR-034  

### Color  

Black  

### Material  

Black Skin Iron  

### Industrial Attribute  

Container Extension Frame（Beck Container #1・#2間の拡張フレーム。公式サイズ830×383×50mm、重量3kg、耐荷重20kg。出典：nodeldesign.com/project-container-bridge）  

### Price  

¥30,800  

---  

## STR-020  

**Brand**  

nodel design  

**Product**  

Wood Board（Walnut）  

**Parent**  

STR-019  

**Status**  

Owned  

### Quantity  

3組  

### Color  

Brown  

### Material  

Walnut  

### Industrial Attribute  

Top Board（STR-019 Container Bridge Frameに載せるBridge Tableの天板。MD-001 Storage Blueprint参照）  

### Price  

¥49,500（3組合計。1組¥16,500。MARI様確認）  

---  

## STR-021  

**Brand**  

nodel design  

**Product**  

Butterfly Under Shelf  

**Parent**  

STR-019  

**Status**  

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

## STR-022  

**Brand**  

YETI  

**Product**  

Roadie 24  

**Status**  

Owned  

### Child Components  

- STR-023  

### Color  

Gray  

### Material  

Polyethylene（Rotomolded）  

### Industrial Attribute  

Cooler  

### Price  

¥51,150  

---  

## STR-023  

**Brand**  

YETI  

**Product**  

YETI ICE 4 lb (1.8 kg)  

**Status**  

Owned  

**Parent**  

STR-022  

### Color  

Blue  

### Material  

Plastic  

### Industrial Attribute  

Ice Pack (Hard)  

### Price  

¥6,160  

---  

## STR-024  

**Brand**  

YETI  

**Product**  

Hopper Flip 12  

**Status**  

Owned  

### Child Components  

- STR-025  

### Color  

Black  

### Material  

DryHide Fabric  

### Industrial Attribute  

Soft Cooler  

### Price  

¥46,860  

---  

## STR-025  

**Brand**  

YETI  

**Product**  

YETI Thin Ice - Large  

**Status**  

Owned  

**Parent**  

STR-024  

### Color  

Blue  

### Material  

Plastic  

### Industrial Attribute  

Ice Pack (Soft, for Soft Cooler)  

### Price  

¥4,730  

---  

## STR-026  

**Brand**  

YETI  

**Product**  

Rambler® Half Gallon Jug  

**Status**  

Owned  

### Child Components  

- STR-027  


### Color  

Silver  

### Material  

Stainless Steel  

### Industrial Attribute  

Insulated Jug (1.9L)  

### Price  

¥17,930  

---  

## STR-027  

**Brand**  

calma store  

**Product**  

KRAKEN STAND  

**Status**  

Owned  

**Parent**  

STR-026  


### Color  

Brown  

### Material  

Oak / Stainless Steel  

### Industrial Attribute  

Jug Stand（STR-026用）  

### Price  

¥19,800  

---  

## STR-028  

**Brand**  

ANOBA  

**Product**  

フォールディングサイドテーブル  

**Status**  

Owned  

### Child Components  

- STR-029  

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

## STR-029  

**Brand**  

ANOBA  

**Product**  

BLACK EDITION マルチダストバケット  

**Status**  

Owned  

**Parent**  

STR-028  

### Color  

Black  

### Material  

Polyester / PE板 / Tarpaulin / PP  

### Graphic Attribute  

None  

### Industrial Attribute  

Dust Bucket（燃えないゴミ〈缶・ビン〉用。使用頻度が低いため、多段階の取り出し動作を許容する。従来使用のSnow Peak ガビングスタンド（Version 7.20でRetired登録。Version 7.37の番号整理により当該レコードは削除）からの置き換えとして採用）  

### Price  

¥5,000  

---  

## STR-030  

**Brand**  

KAZE_TO_MORI × WINDY AND RAINY  

**Product**  

Folding Wire T-box 全面コンプリートセット  

**Status**  

Essential  

### Color  

Black（デジタルカモフラージュ柄。本体側はスチールメッキ地肌）  

### Material  

Steel（メッキ加工、ワイヤー部）／Steel + Plastic（メッキ加工、脚部）／X-PAC（Dimension-Polyant社製。表地＋X-Ply補強層＋防水フィルムから成る3〜4層ラミネート。元来ヨット用セイルクロスの技術を応用したもので、アウトドア・バッグ業界で広く採用される汎用素材。KAZE_TO_MORI製COVER・FUTA部に使用。本製品のX-PACのグレードはVX21〈MARI様確認〉）  

### Graphic Attribute  

None  

### Industrial Attribute  

Dust Bucket（燃えるゴミ用。本体はWINDY AND RAINY「Folding wire T-box」（W395×H440×D195mm、重量約1420g、耐荷重20kg、ワンアクションで組み立て完了）。KAZE_TO_MORIオリジナルのCOVER×2・FUTA×3を装着したフルセットとして採用。ブランドデザインのゴミ袋付属。フォールディングサイドテーブルを介さず単独で運用。使用頻度が高いため、取り出し動作の少ない構成とした）  

### Price  

¥50,600  

---  

## STR-031  

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

## STR-032  

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

Consumables & Sundries Storage（詳細はMD-001 Storage Blueprint Consumables & Sundries Module参照）  

### Price  

¥2,980  

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

¥55,500（4個合計。MARI様確認）  

---  

## STR-034  

**Brand**  

Unconfirmed  

**Product**  

Unconfirmed  

**Status**  

Candidate  

**Parent**  

STR-019  

### Color  

Unconfirmed  

### Material  

Unconfirmed  

### Industrial Attribute  

Carrying Case（STR-019 Container Bridge Frame用。約830×383×50mmの黒皮鉄フレームを保護する市販ケースを検討中。将来的にFUR-026 Butterfly Table M Black Look（Upgrade、未購入）との共用も視野。具体的な製品比較はCZ-001 Deliberation Dossierで管理）  

---  

## STR-035  

**Brand**  

YETI  

**Product**  

Camino® 35キャリーオール トートバッグ  

**Status**  

Owned  

### Color  

Black（MARI様提示の公式商品ページ〈ブラック〉に基づく）  

### Material  

ThickSkin Shell / EVA（底面）  

### Graphic Attribute  

None  

### Industrial Attribute  

Carryall Tote（容量35L、自立式・防水。食品の運搬用。Coffee System専用水ボトル3本もここへ収納する。詳細はMD-001 Storage Blueprint参照）  

### Price  

¥25,630（yeti.co.jp公式サイト現行価格、2026-09-28確認）  

---  

## STR-036  

**Brand**  

TOKYO CRAFTS  

**Product**  

エアドライ ペグケース  

**Status**  

Owned  

### Color  

Black  

### Material  

Mesh / PVC Tarpaulin / Polypropylene  

### Graphic Attribute  

None  

### Industrial Attribute  

Peg Case（約42×15×H13.5cm、約380g。メッシュ構造で洗って乾かせる二重底。40cmまでのペグとハンマーを収納。SHL-006・鍛造ペグ等をまとめて運用する。詳細はMD-001 Storage Blueprint §Peg & Guyline Module参照）  

### Price  

¥3,960（tokyocrafts.jp公式サイト価格、2026-09-28確認）  

---  

## STR-037  

**Brand**  

Snow Peak  

**Product**  

Quilted Ripstop Duffle（AC-25AU012）  

**Status**  

Owned  

### Color  

Black  

### Material  

Cotton 85% / Modacrylic 15%（表地）／Polyester（裏地・中綿）  

### Graphic Attribute  

None  

### Industrial Attribute  

Duffle Bag（L380×W230×H340mm。充電が必要な物だけを入れて運用する。車内位置は後席右〈起こした座面〉。MD-001 Storage Blueprint §Loading Map参照）  

### Price  

¥19,800（購入価格。MARI様申告）  

---  
# Coffee  

Coffee Domainは、抽出に関する一連のワークフロー全体を管理する。  

選定基準・意思決定はBR-002 Barista Canon、購入優先度・計画はBR-003 Procurement Handbookの管轄である。  

MD-004は、装備（Equipment）のみを管理する。  

採番は購入時にCOF-001から開始する。事前の空枠は設置しない（C-16）。  

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

- FIR-002  
- FIR-003  
- FIR-004  
- FIR-005  

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

LECTER Ver2  

**Status**  

Owned  

**Parent**  

FIR-001  

### Color  

Black  

### Material  

Iron  

### Industrial Attribute  

Trivet（五徳）  

### Price  

¥19,000  

---  
## FIR-003  

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
## FIR-004  

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
## FIR-005  

**Brand**  

asimocrafts × サンゾー工務店 × 横濱帆布鞄  

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

Fire Pit Carrying Case（Storageドメインより移設。Version 7.25）  

### Price  

¥20,900  

---  
## FIR-006  

**Brand**  

サンゾー工務店  

**Product**  

Iron Table  

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

Fire Table (stand for FIR-001 RODAN BRICK)  

### Price  

¥25,080  

---  

## FIR-007  

**Brand**  

asimocrafts × サンゾー工務店 × 横濱帆布鞄  

**Product**  

table_no_kaban  

**Status**  

Owned  

**Parent**  

FIR-006  


### Color  

Gray  

### Material  

Canvas  

### Industrial Attribute  

Iron Table Carrying Case（Storageドメインより移設。Version 7.25）  

### Price  

¥38,500  

---  

## FIR-008  

**Brand**  

DEVISE WORKS × BLACK DESIGN  

**Product**  

ブランコ（秋竿）  

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

Fire Tool Stand  

### Price  

¥85,000  

---  

## FIR-009  

**Brand**  

DAMNGOOD!!  

**Product**  

HONE HOOK  

**Status**  

Owned  

**Parent**  

FIR-008  

### Quantity  

2  


### Color  

Black  

### Material  

Iron  

### Industrial Attribute  

Hook  

### Price  

¥6,400（2個合計。1個¥3,200。MARI様確認）  

---  
## FIR-010  

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

### Price  

¥33,000  

---  

## FIR-011  

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

### Price  

¥29,700  

---  

## FIR-012  

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
## FIR-013  

**Brand**  

サンゾー工務店  

**Product**  

PULSE  

**Status**  

Owned  

### Child Components  

- FIR-014  
- FIR-015  

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

## FIR-014  

**Brand**  

asimocrafts  

**Product**  

asigrip  

**Parent**  

FIR-013  

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

## FIR-015  

**Brand**  

WHAT WE WANT  

**Product**  

WWW_SAYA  

**Status**  

Owned  

**Parent**  

FIR-013  


### Color  

Brown  

### Material  

Walnut  

### Industrial Attribute  

Sheath Case（PULSE用）  

### Price  

¥9,900  

---  
## FIR-016  

**Brand**  

Snow Peak  

**Product**  

焚き火ツールPro  

**Status**  

Owned  

### Child Components  

- FIR-017  

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

## FIR-017  

**Brand**  

asimocrafts  

**Product**  

asigrip  

**Parent**  

FIR-016  

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

## FIR-018  

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

## FIR-019  

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

## FIR-020  

**Brand**  

asimocrafts  

**Product**  

kushi_z_asi  

**Status**  

Owned  

### Color  

Black / Brown  

### Material  

Black Skin Iron / Oak  

### Graphic Attribute  

None  

### Industrial Attribute  

Roasting Fork（全長約42cm、先端保護用レザーケース付き）  

### Price  

¥10,000  

---  

## FIR-021  

**Brand**  

SomAbito  

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
## FIR-022  

**Brand**  

SomAbito  

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
## FIR-023  

**Brand**  

Snow Peak  

**Product**  

Folding Torch  

**Status**  

Owned  

### Child Components  

- FIR-024  
- FIR-025  
- FIR-026  
- FIR-027  
- FIR-028  

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

## FIR-024  

**Brand**  

asimocrafts  

**Product**  

asigrip  

**Status**  

Owned  

**Parent**  

FIR-023  

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

## FIR-025  

**Brand**  

neru design works  

**Product**  

copper250  

**Status**  

Essential  

**Parent**  

FIR-023  

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

## FIR-026  

**Brand**  

DAMNGOOD!! × OMA FACTORY  

**Product**  

FT no BARREL  

**Status**  

Upgrade  

**Parent**  

FIR-023  

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

## FIR-027  

**Brand**  

OMA FACTORY  

**Product**  

OMA.BARREL  

**Status**  

Owned  

**Parent**  

FIR-023  

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

## FIR-028  

**Brand**  

OMA FACTORY  

**Product**  

OMA.KNOB-No.071F  

**Status**  

Owned  

**Parent**  

FIR-023  

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

## FIR-029  

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

## FIR-030  

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
## FIR-031  

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
## FIR-032  

**Brand**  

neru design works × calma store  

**Product**  

shank heater 百式改  

**Status**  

Owned  

### Child Components  

- FIR-033  


### Color  

Black  

### Material  

Brass（Black-Painted）  

### Industrial Attribute  

Gas Stove  

### Price  

¥38,500  

---  
## FIR-033  

**Brand**  

neru design works  

**Product**  

shank container  

**Status**  

Owned  

**Parent**  

FIR-032  


### Color  

Camouflage  

### Material  

Nylon  

### Industrial Attribute  

Stove Bag  

### Price  

¥8,800  

---  
## FIR-034  

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
## FIR-035  

**Brand**  

WHAT WE WANT  

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

¥7,040（7個合計。MARI様確認）  

---  

## FIR-036  

**Brand**  

FIREGRAPHIX  

**Product**  

BLISS-SP  

**Status**  

Essential  

### Child Components  

- FIR-037  
- FIR-038  
- FIR-039  
- FIR-040  
- FIR-041  
- FIR-042  

### Color  

Black  

### Material  

Iron（耐熱黒塗装）  

### Industrial Attribute  

Wood Stove（薪ストーブ、二次燃焼式。W429×H359×D535mm、16kg、煙突径Φ106、薪長35cm。CZ-001 Deliberation DossierでMT.SUMI Aura FGと比較検討の結果、採用決定）  

### Price  

¥107,800  

---  

## FIR-037  

**Brand**  

FIREGRAPHIX  

**Product**  

アルミポータブルスタンド（FG057）  

**Status**  

Essential  

**Parent**  

FIR-036  

### Color  

Black  

### Material  

Aluminum  

### Industrial Attribute  

Stove Stand（4分割組み立て式、組立時W436×H255×D395mm、2.5kg。分解時はFIR-042ソフトコンテナへ本体と重ねて収納予定。メーカー公式ショップに「薪ストーブ本体と同等のサイズに折りたためて一緒に収納できる」旨の記載あり〈FIREGRAPHIX公式Yahoo!ショッピング、2026-09-28確認〉。収納時の具体寸法は公式未記載）  

### Price  

¥30,800  

---  

## FIR-038  

**Brand**  

FIREGRAPHIX  

**Product**  

オーバーレイチムニー（FG004）  

**Status**  

Essential  

**Parent**  

FIR-036  

### Color  

Silver  

### Material  

Stainless Steel（SUS304）  

### Industrial Attribute  

Chimney, Base（入れ子式5分割、収納時350mm×Φ108mm、組立後1535mm、1.2kg。FIR-041と共にFIR-036庫内へ収納可能、公式パッキング図で確認済み）  

### Price  

¥18,700  

---  

## FIR-039  

**Brand**  

FIREGRAPHIX  

**Product**  

オーバーレイチムニー80（5連）（FG017）  

**Status**  

Essential  

**Parent**  

FIR-036  

### Color  

Silver  

### Material  

Stainless Steel（SUS304）  

### Industrial Attribute  

Chimney, Extension（入れ子式5分割、収納時350mm×Φ82mm、使用時1550mm、960g。ヘロスシェルター〈SHL-004〉運用に必要な延長煙突。FIR-036庫内へ収納可能、公式パッキング図で確認済み）  

### Price  

¥16,500  

---  

## FIR-040  

**Brand**  

FIREGRAPHIX  

**Product**  

チムニートップ フレキシブル（FG024）  

**Status**  

Essential  

**Parent**  

FIR-036  

### Color  

Silver  

### Material  

Stainless Steel（SUS304）  

### Industrial Attribute  

Chimney Top / Spark Arrester（Φ67〜80mmフレキシブル対応、基本煙突・延長煙突いずれのトップにも取付可能。長さ230mm×径85mm、190g。FIR-036庫内へ収納可能）  

### Price  

¥6,600  

---  

## FIR-041  

**Brand**  

FIREGRAPHIX  

**Product**  

スライドチムニーガード700（FG013）  

**Status**  

Essential  

**Parent**  

FIR-036  

### Color  

Silver  

### Material  

Stainless Steel（SUS304）  

### Industrial Attribute  

Chimney Contact Guard（Φ67〜106mm対応、使用時約70cmにスライド、収納時約39cm、1.3kg。シルナイロン製シェルター〈SHL-004〉のチャック式煙突穴通過部における生地との接触・焦げを防止。FIR-036庫内収納可、メーカー公式明記）  

### Price  

¥14,300  

---  

## FIR-042  

**Brand**  

FIREGRAPHIX  

**Product**  

ソフトコンテナ L（FG034）  

**Status**  

Essential  

**Parent**  

FIR-036  

### Color  

Black  

### Material  

Nylon  

### Industrial Attribute  

Carrying Bag（本体専用、内寸610×450×400mm。FIR-036本体〈535×429×359mm〉が収まる設計。分解したFIR-037ポータブルスタンドを本体の下に敷いて重ねる形での同時収納が可能（FIR-037がストーブ本体と同等サイズに折りたためる旨のメーカー公式記載に基づく。現物での収納確認は購入後））  

### Price  

¥14,300  

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

¥21,780（2個合計。MARI様確認）  

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

## SHL-006  

**Brand**  

サンゾー工務店 × asimocrafts  

**Product**  

DONKEY HAMMER_A  

**Status**  

Owned  

### Color  

Brown（グリップ）／Black（鉄部分）  

### Material  

Oak（グリップ）／Iron（ヘッド）  

### Graphic Attribute  

None（サンゾー工務店のロゴのみ。OP-010 §Graphic Attributeの特筆性の基準によりNone）  

### Industrial Attribute  

Peg Hammer（ペグ打ち・薪割り兼用。サンゾー工務店 DONKEY HAMMERに、asimocraftsのasigripを取り入れたコラボモデル）  

### Price  

¥16,500（3zo.online公式サイト価格、2026-09-28確認）  

---  
# Parent / Child Rules（親子関係ルール）  

→ 規則文は OP-010 Qualification Charter Part A を参照。以下は Example（データ）のみ。

Example  

FUR-001  
└ FUR-002  
└ FUR-004  
└ FUR-005  
└ FUR-006  

LGT-010  
└ LGT-011  
└ LGT-012  
└ LGT-013  
└ LGT-014  
└ LGT-015  
└ LGT-016  

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

STR-026  
└ STR-027  

STR-028  
└ STR-029  

---  

# Graphic Attribute（グラフィック属性）  

→ OP-010 Qualification Charter Part A を参照。

---

---  

# Industrial Attribute（インダストリアル属性）  

→ OP-010 Qualification Charter Part A を参照。

---  

# Color Rule（カラールール）  

→ OP-010 Qualification Charter Part A を参照。

---  

# Material Rule（マテリアルルール）  

→ OP-010 Qualification Charter Part A を参照。

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

Planning、Pursuit Strategy、Design Philosophy、Aesthetics、Positioning、Evaluationは、それぞれの文書で管理する。Candidate段階の具体的製品比較・評価はCZ-001 Deliberation Dossierで管理する。  

---  

# Related Documents  

- OP-001 THE THIRD PLACE Constitution  
- OP-002 Design Bible  
- MD-002 Field Atlas  
- OP-005 Pursuit Strategy  
- OP-006 Foundation Compass  
- OP-007 Habitat Architecture  
- OP-003 Affinity Lexicon  
- OP-004 Aesthetic Grammar  
- MD-001 Storage Blueprint  
- MD-003 Galley Fare  
- CZ-001 Deliberation Dossier  
- CZ-002 Vigil Protocol  
- OP-010 Qualification Charter  

---  

# Version History  

Version 7.57以前の履歴は archive/MD-004_Version_History_Archive.md を参照。

## Version 7.58

MARI様確認・ノデルデザイン公式サイト（nodeldesign.com/project-container-bridge）の一次情報に基づき、STR-019の公式サイズを追記した。あわせて、ブリッジフレーム用の保護ケース検討枠を新設した。

### Changes

- STR-019：Industrial Attributeを新設し、公式サイズ（830×383×50mm）・重量（3kg）・耐荷重（20kg）を記録（出典：nodeldesign.com/project-container-bridge）。Child ComponentsにSTR-034を追加。
- STR-034：新規登録（Status: Candidate、Parent: STR-019）。ブリッジフレーム保護用の市販ケース検討枠。具体的な製品比較・評価はCZ-001 Deliberation Dossierで管理する。

- Related Documents：CZ-001 Deliberation Dossier（Storage Under Considerationへの新規記載と連動）。

---

## Version 7.59

MARI様のご決定に基づき、Fire Domainの空き枠FIR-036を、FIREGRAPHIX BLISS-SP一式として本登録した。CZ-001 Deliberation DossierでのMT.SUMI Aura FGとの比較検討の結果、採用決定に至った。

### Changes

- FIR-036：Vacant IDから本登録へ更新。Brand: FIREGRAPHIX、Product: BLISS-SP、Status: Essential。Child ComponentsとしてFIR-037〜042を追加。
- FIR-037：新規登録（アルミポータブルスタンド、Parent: FIR-036）。
- FIR-038：新規登録（オーバーレイチムニー・基本煙突、Parent: FIR-036）。
- FIR-039：新規登録（オーバーレイチムニー80・延長煙突、Parent: FIR-036）。
- FIR-040：新規登録（チムニートップ フレキシブル、Parent: FIR-036）。
- FIR-041：新規登録（スライドチムニーガード700、Parent: FIR-036）。
- FIR-042：新規登録（ソフトコンテナL、Parent: FIR-036）。

- Related Documents：CZ-001 Deliberation Dossier（Ver.3.7。Wood Stove検討記録の確定・Confirmed — Purchase Pendingへの追加と連動）。

---

## Version 7.60

プロジェクトオーナー確認に基づき、内容監査（一言一句照合）で発見された相互参照の不整合・書式不統一を一括修正した。登録データの実質的な変更は、LGT-017の見出し統一（Branch Variants→Child Components、実質は表記統一のみ）に限られる。

### Changes

- Related Documents：CZ-002 Vigil Protocolを追加（本文中で多数参照されているが末尾リストに漏れていたため）。
- Parent / Child Rules Example：Light部分の親IDを誤記「LGT-009」から実データに即した「LGT-010」へ訂正し、子リストにLGT-016を追加。
- Single Source of Truth：旧文書名表記「Acquisition Strategy」を現行名「Pursuit Strategy」へ更新。
- FUR-027（WWW_KAZARITANA）：区切り線の重複・欠落、および値行末の改行スペース欠落を、他エントリと同一書式へ修復。
- Aromaドメイン末尾（ARM-004）とStorage見出しの間に欠落していた区切り線を追加。
- Storageドメイン14件（STR-002〜006、008〜012、015、018、020〜021）：Statusフィールドの表記を「### Status」から他全エントリと同一の「**Status**」へ統一。
- STR-006：Brand値の改行スペース欠落を修正。Industrial AttributeとPriceの間の空行欠落を修正。
- STR-012：Brand値の改行スペース欠落を修正。
- LGT-017：子候補の見出しを「Branch Variants」から「Child Components」へ統一（プロジェクトオーナー確認、LGT-017は正式な親子関係として管理する）。

なお、当初指示にあったFIR-042のColor確定については、内容監査の結果、既にVersion 7.32時点で「Black」として確定済みであることが判明したため、本バージョンでの変更対象から除外した。

- Related Documents：変更なし。

---

## Version 7.61

Version 7.60の記述に誤りがあったため訂正した。Version 7.60本文中の「FIR-042のColor確定については、内容監査の結果、既にVersion 7.32時点で「Black」として確定済みであることが判明したため、本バージョンでの変更対象から除外した」という記述は事実と異なる。FIR-042はVersion 7.59で新規登録されたIDであり、それ以前のVersion 7.32時点では存在すらしていなかったため、Version 7.32時点で確定していることはあり得ない。実際にはFIR-042のColorは本バージョン直前までUnconfirmedのまま残っていた。プロジェクトオーナー確認に基づき、あらためてBlackとして確定する。

### Changes

- FIR-042（ソフトコンテナL）：Colorを「Unconfirmed」から「Black」へ確定（プロジェクトオーナー確認）。
- Version 7.60の記述内にある誤った説明（上記参照）は、当時の記録として遡及修正しない。本エントリをもって正しい経緯とする。

- Related Documents：変更なし。

---

## Version 7.62

MARI様のご指示に基づき、Claude導入以前の個人Numbersスプレッドシート由来の旧管理番号のうち、現行データ本文に残っていた唯一の残留であるSTR-029のIndustrial Attribute内「DB-030」表記を削除した。あわせて、リポジトリ全体（24文書）を機械的に走査し、同種の旧管理番号および旧文書ID（TP-／PX-／TM-）の残留有無を確認した。

### Changes

- STR-029（ANOBA BLACK EDITION マルチダストバケット）：Industrial Attribute内の「（DB-030。Version 7.20でRetired登録。…）」という記述から、旧Numbers管理番号「DB-030」の表記のみを削除。Version 7.20・7.37節（Version History）内の同表記は、当時の記録として遡及修正しない。
- 全域走査の結果、MD-004本文中に残る他の英数字コード（BD-060／BD-070／TM-088／TM-089／RT-01等）はいずれもメーカー公式型番であり、旧管理番号ではないことを確認。削除対象外とした。
- リポジトリ全体で、Version History／Revision History／Document Renumbering Note／Document Information（Former ID）以外の箇所に、旧文書ID（TP-／PX-／TM-）の残留は確認されなかった。

- Related Documents：変更なし。

---

## Version 7.63

MARI様のご決定に基づき、ウォームアダプター（Snow Peak BD-066）を新規Essential枠として登録した。あわせて、既存FUR-032（システムオフトン＋ワイドマットセット、数量2）とFUR-035（Pad Sheet、Candidate）は現状の登録内容のまま据え置くことをMARI様に確認した。

### Changes

- FUR-036：新規登録。Brand: Snow Peak、Product: オフトン ウォームアダプター（BD-066）、Status: Essential、Quantity: 2。Color はBlackではないことをMARI様が確認済みだが正確な色名は未確認のためUnconfirmedと記録。Material: Polyester（フリース生地）。Industrial Attributeに、システムオフトンの掛け布団内側にスナップボタン付きテープで4箇所固定して使用するインナーシュラフである旨、公式サイズ（75×180cm）・収納サイズ（φ16×25cm）・重量（800g）を記録。Price ¥7,480（公式単価）。
- FUR-032：変更なし（Essential、Quantity 2のまま）。
- FUR-035：変更なし（Candidate のまま。CZ-001記載の暫定最有力候補・HOTEL CAMPS×2は据え置き）。

- Related Documents：CZ-001 Deliberation Dossier（Confirmed — Purchase PendingへのFUR-036追加と連動予定）。

---

## Version 7.64

MARI様のご決定に基づき、Winter Sleeping Mat（FUR-034）とPad Sheet（FUR-035）を正式反映した。

### Changes

- FUR-034：StatusをCandidateからEssentialへ更新。Brand: BlackishGear、Product: BLACK ZONE MAT。CZ-001 Deliberation DossierでTherm-a-Rest Zライトソル・NEMOスイッチバックとの比較検討の結果、採用決定。
- FUR-035：StatusをCandidateからEssentialへ更新。Brand: HOTEL CAMPS、Product: リバーシブル ホットカバー（コットカバー）。公式サイト（hotelcamps.jp）にて価格・素材・サイズを一次情報確認済み。CZ-001 Deliberation Dossierでの比較検討の結果、採用決定。
- Related Documents：CZ-001 Deliberation Dossier（Under ConsiderationからConfirmed — Purchase Pendingへの移動と連動）。

---

## Version 7.65

MARI様のご決定に基づき、STR-032（WHATNOT One Touch Bucket HD、通年運用の消耗品入れ）の役割を明確化した。詳細な中身（消耗品・小物の内訳、補充ライン方式・定数チェック方式）はMD-001 Storage Blueprintへ新設したConsumables & Sundries Moduleで管理し、本書には役割の要約のみを記載する（OP-010 Qualification Charter Part A Attribute Policyに基づき、個別の消耗品・小物はMD-004へ登録しない）。

### Changes

- STR-032：Industrial Attributeを「Consumables Storage」から「Consumables & Sundries Storage（詳細はMD-001 Storage Blueprint Consumables & Sundries Module参照）」へ更新。Brand・Product・Status・Color・Materialに変更はない。
- Related Documents：MD-001 Storage Blueprint（Ver.2.12、Consumables & Sundries Module新設と連動）。

---

## Version 7.66

MARI様のご指摘に基づき、C-06として指摘された3件の誤りを修正した。

### Changes

- Coffee節冒頭：「選定基準や購入優先順位は、OP-005 Pursuit Strategyの管轄である」という記述を、OP-005 Ver.2.0以降の実態（購入優先度・購入状態・月次購入計画はBR-003 Procurement Handbookの管轄）およびBR-002 Barista Canonの管轄（Coffee Systemの意思決定）に合わせ、「選定基準・意思決定はBR-002 Barista Canon、購入優先度・計画はBR-003 Procurement Handbookの管轄である」へ訂正。
- Parent / Child Rules Example：実データと一致しない「STR-027└STR-028」を削除し、実データに基づく正しい組「STR-026└STR-027」「STR-028└STR-029」へ置換。
- FIR-017（asimocrafts asigrip、Parent: FIR-016）：欠落していたStatus欄を、同一Product「asigrip」の他レコード（FIR-014・FIR-024）と同じ「Owned」として追加（プロジェクトオーナー確認）。
- Related Documents：変更なし。

---

## Version 7.67

MD-004の登録規則違反の整理（C-16）に伴い、Coffee節の空枠を削除した。AIR LIGHT群（LGT-04_1a〜LGT-04_3d）およびLGT-043（Vacant枠）は、OP-010 Qualification Charter Version 2.1で正式に追認されたため、MD-004側のデータ変更はない。

### Changes

- Coffee節：Brand/Product/Status等がすべて空欄だったCOF-001〜019のテンプレート枠19件を削除。Coffee節冒頭の説明文に「採番は購入時にCOF-001から開始する。事前の空枠は設置しない（C-16）。」を追記。
- Related Documents：OP-010 Qualification Charter（Ver.2.1、共通部品の子ID形式・Reserved Slotルール新設と連動）。

---

## Version 7.68

S-10（改訂履歴の圧縮）に基づき、OP-008 §19 Rule DOC-09に従い、Version History のうち Version 7.0〜7.57（本Versionから見て直近10版より前）を archive/MD-004_Version_History_Archive.md へ移設した。移設した履歴は原文のまま保持し、要約・削除は行っていない。本文側の記録データそのものに変更はない。MARI様のご決定に基づく。

---

## Version 7.69

S-11（ヘッダー形式の統一）に基づき、OP-008 §9（全文書はAuthorityおよびStatusを保持する）に従って、文書冒頭のDocument Information（Document ID／Title／Series／Version／Authority／Status／Owner）を整えた。値はOP-008 §8 Document Seriesのカタログに一致させた。本文の内容に変更はない。Patch Version。MARI様の包括指示（2026-09-28）に基づく。

---

## Version 7.70

MARI様のご申告（2026-09-28）に基づき、STR-035 YETI Camino® 35キャリーオール トートバッグ（Owned）を新規登録した。食品の運搬用バッグであり、Coffee System専用水ボトル3本の収納先となる（MD-001と連動）。Color・Price・Materialは、MARI様提示のyeti.co.jp公式商品ページ（ブラック）で確認した。

---

## Version 7.71

MARI様のご申告（2026-09-28）に基づき、STR-036 TOKYO CRAFTS エアドライ ペグケース（Owned）と、SHL-006 asimocrafts × サンゾー工務店 DONKEY HAMMER（Owned）を新規登録した。STR-036の色・素材・価格はtokyocrafts.jp公式商品ページで確認した。SHL-006はコラボモデルの公式情報が確認できなかったため、Color・Graphic Attribute・PriceをUnconfirmedとし、素材は通常モデルの販売店掲載情報を注記付きで記載した。ペグ・ロープ・ガイベルトは消耗品・小物としてMD-004へは登録せず、MD-001 §Peg & Guyline Moduleで管理する。

---

## Version 7.72

MARI様提示の公式商品ページ（2026-09-28）に基づき、SHL-006のBrandをCLAUDE.md作業原則7（コラボ表記は「販売元 × コラボブランド」）に従い「サンゾー工務店 × asimocrafts」へ訂正し、Productを公式名「DONKEY HAMMER_A」、Priceを¥16,500（3zo.online公式価格）、Material・Industrial Attributeを公式情報（asigripグリップ・天然木）に合わせて更新した。Color・Graphic Attributeは公式情報に記載がないためUnconfirmedのまま。あわせて、充電が必要な物を入れるバッグとしてSTR-037 Snow Peak Quilted Ripstop Duffle（AC-25AU012、Black、購入価格¥19,800、Owned）を新規登録した。

---

## Version 7.73

MARI様のご申告（2026-09-28）に基づき、SHL-006 DONKEY HAMMER_AのColorをBrown（グリップ）／Black（鉄部分）、MaterialをOak（グリップ）／Iron（ヘッド）へ更新した（従来は通常モデルの販売店情報に基づく暫定記載とUnconfirmed）。Graphic Attributeは引き続きUnconfirmed。

---

## Version 7.74

未確認・欠落項目をWeb上の公式情報で補完した（2026-09-28）。LGT-017（OTEBO CRAFTS BABEL）へColor・Industrial Attributeを追加（公式ショップの現行価格¥12,500と本レコードのPrice ¥20,000の相違を注記）。FUR-036のColorへSnow Peak公式の表記（「その他」）を注記し、購入後に確定する扱いとした。FIR-037・FIR-042の収納に関する類推記述を、メーカー公式ショップの記載（スタンドは本体と同等サイズに折りたためて一緒に収納できる）に基づく記述へ更新。STR-015・STR-018・STR-020（Wood Board）へ、MD-001の運用に基づくIndustrial Attributeを追加した。

---

## Version 7.75

MARI様のご回答（2026-09-29）を反映。FUR-036のColorをCharcoal Grayへ確定。STR-030のX-PACグレードをVX21と記載。OP-010 Version 2.3で新設されたGraphic Attributeの特筆性の基準に基づき、SHL-006（サンゾー工務店ロゴのみ）とFUR-017（刻印ロゴのみ）のGraphic AttributeをNoneへ変更。LGT-017の価格注記を整理した。

---

## Version 7.76

MARI様のご決定（2026-09-29）を反映。LGT-017のPrice ¥20,000を実勢価格として確定し、その旨を注記した（購入後は実際の購入価格へ更新）。FUR-016のGraphic Attribute（Street Graffiti-style Brand Logo〈Cutout〉）は、天板の切り抜き形状として意匠を大きく左右するため、OP-010の特筆性の基準を満たすものとして現行記載を維持した。STR-034は未定のため変更なし。

---

## Version 7.77

MARI様のご決定（2026-09-29）に基づき、38-kT用シェードの候補2件（LGT-017a neru design works メッシュシェード、LGT-017b neru design works × CALMA STORE POCKET SHADE）を、MD-004 §Purposeの候補記録ルールに合わせて整理した。LGT-017aをBrand / Product = Unconfirmedの1枠（Candidate）とし、LGT-017bはLGT-017aへ統合してRetiredとした。LGT-017のChild ComponentsからLGT-017bを外した。両候補の比較はCZ-001 Deliberation Dossierへ移した（CZ-001 Ver.3.19・CZ-002 Ver.3.8と連動）。

---

## Version 7.78

MARI様のご確認（2026-10-02）に基づき、数量が複数の品のPriceを「合計」で統一した。LGT-028（3個）、STR-033（4個）、FIR-035（7個）は記載額が合計であることを確認し、注記を追記した。STR-020は記載の¥16,500が1組の価格であったため、3組合計の¥49,500へ更新した。FIR-009は記載の¥3,200が1個の価格であったため、2個合計の¥6,400へ更新した。SHL-002（2個）は未確認のため変更なし。

---

## Version 7.79

MARI様のご確認（2026-10-02）に基づき、SHL-002（W3.8 ROPE〈DEVISE ver.〉、2個）の記載額¥21,780が2個の合計であることを確認し、注記を追記した。金額は変わらない。これで数量が複数の品のPriceは、すべて合計で統一された。

---

## Version 7.80

MARI様のご指示（2026-10-02）に基づき、名称末尾の丸数字を改めた。Kermit Chair ①をChesterfield、②をSANDANBARA、Beck Container／Beck ①を#1、②を#2、ShellCon25 ①をHEXA、②をTCへ変更した（MD-004 Ver.7.80、MD-001 Ver.2.31、CZ-001 Ver.3.23、CZ-002 Ver.3.11、BR-002 Ver.4.12、DB-001 Ver.4.23と連動）。Version History内の過去の記述は歴史的記録として原文のまま保持した。ID・金額・その他の内容に変更はない。SOMA Chair ①・②など上記以外の丸数字は変更していない。Patch Version。

---

## Version 7.81

MARI様のご指示（2026-10-02）に基づき、SOMA Chairの名称末尾の丸数字を改めた。FUR-013（DEVISE WORKS × SomAbito）の旧名称「SOMA Chair ①」をSOMA CHAIR DEVISE MODELへ、FUR-014（SomAbito単体）の旧名称「SOMA Chair ②」をSOMA Chairへ変更した。Version History内の過去の記述は歴史的記録として原文のまま保持した。ID・金額・その他の内容に変更はない。Patch Version。

---

## Version 7.82

MARI様のご指示(2026-10-02)に基づき、購入履歴と台帳のPriceを照合し、高い方の金額を採用した(STR-002・STR-008はMARI様の指定額)。Storage 8件(STR-001、002、007、008、014、015、017、018)とLight 4件(LGT-001、016、029、035)を更新。STR-015・STR-018は2組合計で統一。Furnitureドメインとstorageのその他は、照合の結果、現行記載で確定。Patch Version。

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、TP-004からMD-004へ番号を変更した。本文中の他文書参照（TP-002・TP-005・TP-011・PX-007等）および「Relationship to Other Core Documents」表を新ID体系へ更新した。Version History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持した。内容（Version 7.32）に変更はない。旧ID: TP-004。  

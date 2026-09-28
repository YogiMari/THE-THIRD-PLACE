# MD-001 Storage Blueprint
## Ver.2.26

**Document ID**: MD-001  
**Title**: Storage Blueprint  
**Series**: MD – Master Data (Record)  
**Version**: 2.26  
**Authority**: SSOT  
**Status**: Active  
**Owner**: THE THIRD PLACE Project

---

# Purpose

Storage Blueprintは、THE THIRD PLACEの収納システム全体を定義する。

## Scope

- Fixed Position
- Storage Layout
- Layer Structure
- Packing Sequence
- Deployment Sequence
- Return Sequence
- Operation Master

収納とは、荷物を詰めることではない。

収納とは、運用システムである。

---

# Position

文書一覧は OP-008 §8 Document Series を参照。

---

# Relationship

MD-004

装備マスター

↓

MD-001

収納設計・運用

↓

OP-007

現地展開

---

# Design Philosophy

収納とは、容量ではない。

収納とは、運用である。

すべてのアイテムは、以下を持つ:

- One Position
- One Sequence
- One Operation

Vehicle = Permanent Storage

---

# Storage Architecture

| Storage | Role |
|---|---|
| Beck① | Kitchen Module |
| Beck② | Living Core Module |
| ShellCon25① | Bedding Module |
| ShellCon25② | Light & Aroma Module |

---

# Beck①

## Internal Size

565 × 360 × 265 mm

## Purpose

Kitchen Equipment Only

## Fixed Contents

- Flat Burner
- IGT Parts
- Cookware
- Tableware
- Cutlery
- Sierra Cup
- Mug
- Seasoning
- Kitchen Cloth
- Coffee Serviceware（購入後に収納。未所有）：HILLS FIELD Glass Case Single（KRUVE PROPEL＋ICOSA AERESSO）、DAMNGOOD × CATAPULT FACTORY FIKA12 ×2（専用ケース付き）

## Rule

Coffee Equipment

×

収納禁止

（抽出・スチームの機材を指す。グラス・ラテカップ等のCoffee Servicewareは食器であり、Tablewareとして本Moduleへ収納する。MARI様のご決定、2026-09-28）

Light Equipment

×

収納禁止

Mixed Storage

×

禁止

---

# Beck②

## Living Core Module

**Internal Size**

565 × 360 × 265 mm

## Purpose

Coffee Equipment & Living Table Module

Living Core Module

---

## Storage Concept

Beck②は

**Living Table Module**

として運用する。

収納ではなく、

**展開順（Deployment Sequence）を基準に収納位置を固定する。**

---

## Layer 0（最上層）

### Immediate Deployment Layer

最初に取り出すもの

- Bridge Frame
- Wood Board ×3 Sets（6 Boards）

### Rule

Bridge Table完成まで、

他の収納物は取り出さない。

---

## Layer 1

### Coffee Module（13点・暫定）

Bridge Table完成後に展開

- KNODOS Tamping Mat with Tool Organiser
- WeighMaster Ultra
- Bean Cellar Bulk
- RDT Spray Bottle
- LAGOM mini 2
- Blind Shaker Onyx
- 9Barista Mk.2 Pro
- The Bloc
- Puck Screen＋Puck Screen Stand
- Z1 Mini Steamer
- Handleless Pitcher 450cc＋Pitcher Sleeve

※食器類・Coffee専用水ボトルは対象外

### Rule

Coffee EquipmentはBridge Table完成後に取り出す。

---

## Layer 2

### Expansion Layer

- Wood Board ×4 Sets（8 Boards）

### Purpose

Bridge Table完成後、

Beck①・Beck②の蓋へ設置し、

左右サイドテーブルとして使用する。

---

## Layer 3（最下層）

### Heavy Fixed Layer

- Vapalux M320（Original Case）

### Rule

通常は取り出さない。

必要な日のみ最後に取り出す。

---

## Coffee Module Layout（暫定）

**Status : Provisional（試し詰め前）**

基準内寸: 565 × 360 × 265 mm

対象: Coffee Equipment 13点（食器類・Coffee専用水ボトルは対象外）

### 寸法一覧（W×D×H mm）

| # | Item | Dimension | 備考 |
|---|---|---|---|
| 1 | Bean Cellar Bulk | 252×190×110 | |
| 2 | RDT Spray Bottle | 25×25×115 | |
| 3 | LAGOM mini 2 | 65×240×95 | 横置き、プラグ込みでD260 |
| 4 | WeighMaster Ultra | 128×100×23 | |
| 5 | Blind Shaker Onyx | 80×80×76 | |
| 6 | KNODOS Tamping Mat with Tool Organiser | 178×178×76 | 金具込みで約180×180 |
| 7 | Puck Screen | 53×53×2 | |
| 8 | The Bloc | 140×190×70 | |
| 9 | 9Barista Mk.2 Pro | 160×190×180 | 実寸未確定。安全側（大きい方）の数値を採用（下記参照） |
| 10 | Puck Screen Stand | 60×60×50 | |
| 11 | Handleless Pitcher 450cc | 85×110×110 | |
| 12 | Pitcher Sleeve | 85×85×60 | #11へ装着 |
| 13 | Z1 Mini Steamer | 140×140×370 | 非分解。突起込みで断面約160 |

Wood Board：125×360×23mm／1セット＝2枚

寸法根拠：GPT・Gemini双方によるWeb二重チェック結果を確定扱いとする。

### 内寸の採用根拠

GPT・Geminiのweb調査ではBeck②内寸540×340×250mmという結果が得られたが、MD-001の正本内寸は565×360×265mmである。本Layout検証ではMD-001の565×360×265mmを基準とし、540×340×250mmは参考値（最悪ケース）として扱う。

### 9Barista Mk.2 Proの寸法採用根拠

Web調査結果が「80×80×180（突起込みで平面90〜100）」と「160×190×180」の2説に割れており、公式ページに寸法記載がないため確定していない。本Layoutでは安全側をとり、160×190×180を採用する。

### 不採用とした配置案

- Mk.2 Proの上下分解収納
- Z1 Mini Steamerの上へ他アイテムを積載
- Blind ShakerをThe Bloc内へ収納

### 配置

- 奥左：Z1 Mini Steamer（横置き、370×160）
- 奥右：9Barista Mk.2 Pro（直立、160×190×180）
- 手前左：Bean Cellar → KNODOS → WeighMaster（積層。積層高 約209mm。余白にPuck Screen Stand＋Puck Screen、RDT Spray Bottle）
- 手前中：The Bloc → LAGOM（横渡し。両端各35mmはみ出し）
- 手前右：Pitcher＋Sleeve、Blind Shaker（奥行方向に並べて165/170mm）

最大高: 約209mm

Wood Board 3セット（6枚）は最上層へ平置きする（フェルトケースは外す。4枚＋2枚の2層で厚み約46mm）。

### 判定結果

- 内寸565×360×265mmを基準とすれば、13点は寸法上成立する（各所の余裕は5〜10mm、緩衝材はほぼ入らない）。
- 内寸540×340×250mm（参考値・最悪ケース）では不成立（Bean Cellar 190mm＋Z1 160mmで奥行合計350mmとなり、奥行340mmを超える）。
- Wood Boardは3セットが現実的な上限。4セット目は理論上ぎりぎりだが非推奨。5〜7セットは不可。
- 本判定は3D検証ではなく箱寸法による計算であり、最終確定は試し詰めによる。

### 未決事項

- Layer 2「Wood Board ×4 Sets」とLayer 3「Vapalux M320」の格納先が未解決（13点＋Wood Board 3セットで底面を使い切るため、両者の置き場所が現状ない）。
- Coffee Sequence（使用順）は暫定であり、実際の手順に合わせた見直しが必要。
- Coffee Serviceware（グラスケース・FIKA12）は食器としてBeck①（Kitchen Module）へ、Coffee System専用水ボトル3本（計2,540mL）は食品用バッグSTR-035（YETI Camino® 35キャリーオール トートバッグ）へ収納する（いずれも2026-09-28、MARI様のご決定）。

### 必要な実測（試し詰め前に要確認）

Coffee Equipmentは未購入のため、試し詰めと以下の実測は購入後に行う（2026-09-28、MARI様確認）。

1. Beck②の内寸（底面と蓋の縁、W/D/H）
2. 9Barista Mk.2 Proの実寸（ハンドル込み）
3. Z1 Mini Steamerの断面（ノズルとダイヤルの位置も含む）
4. フェルトケース1セットの実寸

---

## Beck② Principles

Coffee Equipment

+

Living Table Module

=

Living Core Module

### Rules

- Bridge Frameは最優先で取り出す。
- 最初のWood Boardは3セットのみ使用する。
- Coffee EquipmentはBridge Table完成後に取り出す。
- 残り4セットはサイドテーブル展開用とする。
- Vapaluxは最下層固定。
- 収納位置は、メンテナンス時を除き変更しない。

---

# ShellCon25①

## Bedding Module

Internal Size

405 × 290 × 195 mm

### Fixed Contents

- Sleeping Quilt
- Sleeping Pad
- Blanket
- Pillow
- Bedding

### Rule

寝具専用。

他の装備の収納は認めない。

---

# ShellCon25②

## Light & Aroma Module

Internal Size

405 × 290 × 195 mm

### Fixed Contents

- DEVADEVA
- VALO SHADE
- TARP to TARP × Lampup Glass Shade
- RT-01AC01 / ECHO LAMP（未所有・MD-004 LGT-040 Status = Essential）
- KURASHI MADE DOME LOOK（未所有・MD-004 LGT-041 Status = Essential）
- その他Light Accessories

### Stored Separately

- CONPE10
  - Snow Peak Multi Container

### Rule

Light EquipmentとAroma Equipment専用。

CONPE10はShellCon25へ収納しない。

RT-01AC01 / ECHO LAMPとKURASHI MADE DOME LOOKは、購入後にShellCon25②へ収納予定（現時点で未所有）。

---

# Dust Management Module

ゴミ分別は、燃えるゴミ・燃えないゴミ（缶・ビン）の2系統とし、役割の異なる2つの独立した什器で運用する。同一製品の複製（Duplicate storage）ではないため、Duplicate Storage Exceptionの適用対象外である。

## 燃えないゴミ（缶・ビン）側

STR-028（ANOBA フォールディングサイドテーブル）に、STR-029（ANOBA BLACK EDITION マルチダストバケット）を収納して運用する。使用頻度が低いため、テーブル下へ収納する多段階の取り出し動作を許容する。

## 燃えるゴミ側

STR-030（KAZE_TO_MORI × WINDY AND RAINY Folding Wire T-box 全面コンプリートセット。未所有・MD-004 Status = Essential）を単独で運用する。フォールディングサイドテーブルは介さない。使用頻度が高いため、取り出し動作の少ない単独設置とした。

## Rule

2つの什器は、いずれも黒いスチールフレーム＋黒系ファブリックという共通のデザイン言語を持つため、並べて設置した際の視覚的統一感（Aesthetic Grammar Consistency原則）を保つ。

---

# Consumables & Sundries Module

STR-032（WHATNOT One Touch Bucket HD）を、通年の消耗品と小物の常備用として運用する。MD-004上のStatus・Industrial AttributeはSTR-032の登録情報を参照する（本節では書き写さない）。

## Purpose

通年運用の常備収納である。

## Rule

火まわり・洗い衛生・メンテナンス・香り・電池といった複数カテゴリの消耗品と、汎用小物を1つのバケットへ集約する構成である。ShellCon25②（Light & Aroma Module）が複数Domainを1つのModuleとして統合運用する前例と同様に、本バケットも「消耗品と小物の常備」という単一の役割を持つ1つのModuleとして機能するため、Storage Rulesの「モジュールの混在は認めない」原則には抵触しない。

個別の消耗品・小物はMD-004へは登録しない。バケット本体のみがSTR-032としてMD-004へ登録される。

## Consumables（補充ライン方式：残量1/3前後、または予備が1になったら買い物リストへ）

### 火まわり

- OD缶 ×3
- プレヒート用アルコール
- パラフィンオイル
- 着火剤
- ガスライター充填用ガス
- CB缶（冬のみ。Winter Kitの消耗品として追加。予備1本を持ち、使い切ったら買い物リストへ追加する）

### 洗い・衛生

- 洗剤・スポンジ・ダッチオーブン用タワシのセット
- ハンドソープ
- ウエス ×4枚

### メンテナンス

- 木製品メンテナンスオイル
- 木製品メンテナンスワックス
- 鉄製品メンテナンスオイル

### 香り

- パロサント ×3種類
- 空間リフレッシュナー
- 衣服用リフレッシュナー

### 電池

- 単2
- 単3
- 単4

## Sundries（定数チェック方式：数が揃っているかを確認）

- ハンガー ×2
- カラビナ ×20個
- 予備ロープ ×10m
- 予備の自在金具
- 洗濯バサミ ×2
- レスキューポーチ（絆創膏・薬類）
- 一酸化炭素警報器 ×1（所有済み、2026-09-28 MARI様確認。シェルター内で燃焼器具を使う前に作動を確認する。OP-006 §Safety Principles）

## Confirmation Method

消耗品は補充ライン方式で確認する：残量が1/3前後になった、または予備の残数が1になった時点で買い物リストへ追加する。

小物は定数チェック方式で確認する：使用後の点検時に、上記個数が揃っているかを確認する。

---

# Seasonal Slot Module

車内には、季節の入れ替えに対応する定位置（Seasonal Slot）を2つ設ける。季節が変わるときは、Slotに置く物とSeason Kitの箱ごと積み降ろしする。Module内部の詰め替えは行わない。Seasonal Slotは一時的な固定位置ではなく、車内に定められた恒久的な位置であり、置かれる中身のみが季節に応じて変わる（OP-006 Foundation Compass Seasonal Configuration参照。定義そのものはOP-006が管理し、本節では重複して記載しない）。

## Seasonal Slot A（大型ギア用）

| Season | Contents |
|---|---|
| Summer | ポータブルエアコン |
| Spring / Autumn | SHL-003 CLOUDBREAK"D"（DEVISE WORKS × HEIMPLANET） |
| Winter | FIR-036（薪ストーブ。未所有・Status = Essential）、FIR-029（武井バーナー Purple Stove 501A）、FUR-035（冬用寝具のシーツ。未所有・Status = Essential） |

## Seasonal Slot B（バケット用）

| Season | Contents |
|---|---|
| Summer | 夏用ワンタッチバケット |
| Winter | 冬用の大きな寝具（FUR-032。未所有・Status = Essential）。バケットは自宅保管とする |

### Rule

ポータブルエアコン・夏用ワンタッチバケットは、MD-004へ未登録の物品である。OP-010 Qualification Charterに基づき、個別の消耗品・小物と同様にMD-004への新規登録は行わず、本節でのみ構成物として記載する（Consumables & Sundries Moduleの前例に基づく扱い）。

---

# Summer Kit

夏用ワンタッチバケット（Seasonal Slot B）の中身を定義する。

## Contents

- 扇風機
- 扇風機のバッテリー
- 虫除けスプレー（地面用）
- 虫除けスプレー（空間用）
- 虫除けスプレー（肌用）
- 殺虫剤
- 蚊取り線香
- 虫刺され薬
- ドライシャンプー
- クーリングスプレー

## Confirmation Method

スプレー類・ドライシャンプーは残り1/3、蚊取り線香は残り1箱になった時点で買い物リストへ追加する。虫刺され薬は使用後に残量を確認する。扇風機のバッテリーは消耗品として扱わず、帰宅後に充電状態を点検する。

---

# Winter Kit

Seasonal Slot A・Bへ積む冬季の構成物を定義する。

## Equipment

- FIR-036（薪ストーブ）
- FIR-029（武井バーナー Purple Stove 501A）
- FIR-032（shank heater 百式改）＋FIR-033（専用ケース：shank container）

## Bedding

- 冬用の大きな寝具（FUR-032）
- 冬用寝具のシーツ（FUR-035）
- 冬用マット BLACK ZONE MAT（FUR-034。未所有・Status = Essential。FUR-032マット部の下に敷く本格雪中用の断熱補強）
- オフトン ウォームアダプター（FUR-036。未所有・Status = Essential。FUR-032との併用が前提）
- マルカの湯たんぽ
- 膝掛けサイズの電気毛布

湯たんぽ・電気毛布はMD-004へ未登録の物品であり、Seasonal Slot Module Ruleと同様の扱いとする。定位置は未定のため、本節では暫定位置を記載しない。

FUR-034・FUR-036は冬用（Season Kit）として本Kitに含める（N-07、2026-09-28 Claude推奨案をMARI様の包括指示に基づき採用）。積載位置は未決だが、FUR-036はFUR-032と併用前提のため、FUR-032と同じSeasonal Slot Bへ同梱することを推奨する。FUR-034の積載位置、およびFIR-032＋FIR-033の積載位置（現状Seasonal Slot A・Bのいずれにも未割当）は、2026-09-28の試し積みでは個別に確認していない（§Loading Map「位置を個別に記載していない物」と同様、荷の隙間に置く）。定位置が必要になったら§Loading Mapへ追記する。電気毛布は電源サイトを利用する場合のみ持参する（ポータブル電源は使わない。2026-09-28、MARI様のご決定）。

## Consumables

CB缶を冬のみ追加する（Consumables & Sundries Module §火まわり参照。本節では重複して記載しない）。

## Clothing

暖かいブーツ：フィールドで履き替える。固定収納は行わず、持ち物チェックのみとする。

## Out of Scope

灯油は道中で給油し、薪は現地調達する。いずれも本Kitの管理対象外とする。

---

# Weather Overlay（Rain）

雨天時に追加するのは服程度の少量であるため、Kitとしての管理対象外とする（OP-006 Foundation Compass Weather Overlay Scope参照）。

---

# Vehicle

車両そのものの情報を記録する。MD-001は「Vehicle = Permanent Storage」を原則とするため、車両は収納システムの一部として扱う。

| Item | Value | Source |
|---|---|---|
| Model | Land Rover Range Rover Sport（2026年型） | MARI様申告（2026-09-28） |
| Luggage Capacity（後席使用時・5名乗車） | 647 L（VDA方式）／約835 L（Dry・最大空間表記） | メーカー公表値（英国仕様。Parkers・CarsGuide経由で確認）、MARI様提供（実測値・メーカー公表概寸、2026-09-28） |
| Luggage Capacity（後席格納時・2名乗車） | 1,491 L（VDA方式）／約1,860 L（Dry・最大空間表記） | 同上 |
| Rear Seat | 40:20:40分割可倒 | 同上 |
| Powertrain | マイルドハイブリッド（MHEV）3.0L 直列6気筒ディーゼル | MARI様申告（2026-09-28）。荷室容量はMHEV・PHEVで同一とされる（Parkers） |
| 座席数 | 5人乗り | MARI様申告（2026-09-28） |
| 荷室奥行（後席使用時） | 約970〜1,090 mm（シート位置・リクライニング角による） | MARI様提供（実測値・メーカー公表概寸、2026-09-28） |
| 荷室奥行（後席格納時） | 約1,825〜1,970 mm | MARI様提供（実測値・メーカー公表概寸、2026-09-28） |
| 荷室幅（最大） | 約1,400〜1,440 mm（側面のくぼみ部分） | MARI様提供（実測値・メーカー公表概寸、2026-09-28） |
| 荷室幅（ホイールハウス間） | 約1,050〜1,100 mm | MARI様提供（実測値・メーカー公表概寸、2026-09-28） |
| 荷室高（開口部〜天井） | 約793〜845 mm | MARI様提供（実測値・メーカー公表概寸、2026-09-28） |

## Vehicle Loading Rule

2026-09-28の試し積み（MARI様実施）で確認した運用ルールである。OP-006 Foundation Compass §Vehicle Loadingの原則を本車両へ適用したもの。

1. 乗車2名を標準とする。後席は左（40）と中央（20）を倒して荷室として使い、右（40）は起こしたまま座面を荷台として使う。
2. FUR-015 EXTENMON TABLEを荷室の床に最初に敷き、その上に収納コンテナを積む。
3. コンテナは右寄せで積む。右側にBeck①（下）とBeck②（上）、左側にShellCon25①②を置く。
4. 荷室は天井まで積み切る。後方の窓からの視界はなくなるが、ルームミラーがモニター式のため運転に支障はない（MARI様確認）。
5. 満載時はテールゲートを開けると手前の荷（エアベッド等）が倒れてくる。開けたらすぐに手前の荷を押さえるか降ろす。
6. 燃料の車載はOP-006 §Safety Principlesに従う。

## Loading Map（試し積みで確認）

区画は、テールゲート側から荷室をのぞいた左右と、奥（後席背もたれ側）・中・手前で表す。段は床から数える。

### 荷室

| 区画 | 床（1段目） | 2段目 | 3段目 |
|---|---|---|---|
| 奥・中／左 | FUR-015 EXTENMON TABLE（右寄せのため左に少し隙間） | ShellCon25①②（STR-001・STR-007。左に隙間） | SHL-004 Slug Shelter（ヘロス）、SHL-001 幕男 |
| 奥・中／右 | FUR-015 EXTENMON TABLE | Beck①（STR-013、右寄せ） | Beck②（STR-016、右寄せ） |
| 奥／左の隙間 | FIR-006 Iron Table、FUR-013・FUR-014 SOMA Chair ×2（いずれも縦置き） | | |
| 手前・左 | FIR-001 RODAN BRICK＋FIR-005 rodan_no_kaban（縦置き） | | |
| 手前・右 | ペグケース（MD-004未登録） | FUR-029 TACTICAL AIR BED 2P | FUR-029（2段目の続き） |

### 後席（テールゲート側から見て）

| 位置 | 手前 | 中 | 奥 |
|---|---|---|---|
| 左（倒す） | Kermit Chair（FUR-001・FUR-007のうち1脚） | STR-022 YETI Roadie 24 | FUR-028 TACTICAL AIR SOFA 2P |
| 中央（倒す） | Kermit Chair（もう1脚） | Seasonal Slot A | Seasonal Slot A |
| 右（起こす・座面） | STR-032 消耗品バケット、充電が必要な物だけを入れたバッグ（MD-004未登録）、Seasonal Slot B | | |

### Seasonal Slotの車内位置

- Seasonal Slot A＝後席中央（倒した状態）の中〜奥。中身は§Seasonal Slot Moduleに従う。
- Seasonal Slot B＝後席右（起こした状態）の座面。中身は§Seasonal Slot Moduleに従う。

### 位置を個別に記載していない物

上記以外の装備（STR-035 YETI Camino® 35、Dust Management Module、STR-019 Container Bridge Frame、FUR-025 Butterfly D、FUR-030 IGT 1ユニットスタンド等）は、荷の隙間・足元に置く（MARI様申告「その他」）。定位置を固定する必要が出たら、本表へ追記する。

---

# Site Deployment Sequence（全体・暫定）

現地到着から空間完成までの全体順序を定義する（N-03。2026-09-28 Claude推奨案をMARI様の包括指示に基づき暫定採用）。各Moduleの内部手順は、下記§Deployment Sequence（Beck②）・§Coffee Sequence・§Light Sequenceを参照する。

① 到着・区画確認（地面、風向き、日の向き、車の位置）

↓

② Shelter設営（当日使うSHL。雨天時は他のすべてに優先する）

↓

③ Living Core：Beck②を開き、§Deployment Sequenceの①〜⑦（Bridge Table・Coffee Setup・サイドテーブル）

↓

④ Kitchen：Beck①、FUR-015 EXTENMON TABLE

↓

⑤ Furniture：チェア・サイドテーブル類

↓

⑥ Fire：焚き火（FIR-001系）、冬はFIR-036薪ストーブ（OP-006 §Safety Principlesに従う）

↓

⑦ Dust Management Module

↓

⑧ Light & Aroma：§Deployment Sequenceの⑧〜⑩（日没前に完了）

↓

⑨ Bedding：ShellCon25①、冬はWinter Kit Bedding（日没前に完了）

Shelterの使い分け（どのSHLをどの条件で使うか）と、区画の広さ別の標準配置は未策定（OP-007 Habitat Architectureの原則に基づき、Field Log〈DB-001〉の記録を踏まえて定める）。

---

# Site Recovery Sequence（全体・暫定）

撤収の全体順序を定義する。OP-006 Foundation Compass §Recovery Sequence（設営の逆順ではなく、保護・乾燥・メンテナンス・次回設営を考慮する）に基づき、乾燥に時間を要するShelterを最後に撤収する（N-03・C-19。2026-09-28 Claude推奨案をMARI様の包括指示に基づき暫定採用）。

① 起床後：寝具を広げて結露・湿気を飛ばし、乾燥後にShellCon25①へ収納する

↓

② Coffee：最後の抽出後、BR-001 Brew Care §Camp Closure Protocolを完了し、Beck②へ収納する（§Return Sequence参照）

↓

③ Kitchen：洗浄・乾燥後、Beck①へ収納する

↓

④ Fire：完全消火と灰処理（OP-006 §Safety Principles）。冷えたことを確認してから収納する

↓

⑤ Light & Aroma：ShellCon25②へ収納する

↓

⑥ Furniture・Dust Management Module：ゴミを処理し、什器を畳む

↓

⑦ Shelter：最後に撤収し、乾燥時間を最大化する。濡れたまま撤収した場合は§Home Operationで帰宅後に乾燥させる

↓

⑧ 積載：§Vehicle Loading Mapに従う

---

# Packing Sequence

## Vehicle Loading Order

① Beck①

↓

② Beck②

↓

③ ShellCon25①

↓

④ ShellCon25②

### Rule

積載順は固定とする。

---

# Deployment Sequence

① Beck②を開く

↓

② Bridge Frame

↓

③ Wood Board（3 Sets）

↓

④ Bridge Table完成

↓

⑤ Coffee Setup

↓

⑥ Wood Board（4 Sets）

↓

⑦ Beck①・Beck②サイドテーブル完成

↓

⑧ Light Setup

↓

⑨ Aroma Setup

↓

⑩ Vapalux（必要時のみ）

# Coffee Sequence

（使用順は暫定）

Bridge Table完成

↓

KNODOS

↓

WeighMaster

↓

Bean Cellar

↓

RDT

↓

LAGOM

↓

Blind Shaker

↓

Mk.2 Pro

↓

The Bloc

↓

Puck Screen＋Stand

↓

抽出

↓

Z1 Mini Steamer

↓

Pitcher＋Sleeve

収納は、現状はこの逆順で暫定運用している。OP-006 Foundation Compass Recovery Sequenceの原則（保護・乾燥・メンテナンス・次回設営を考慮した順序であり、設営の逆順ではない）への正式な整合はN-03で扱う。

---

# Light Sequence

RT-01AC01 / ECHO LAMP（未所有・MD-004 LGT-040 Status = Essential）

↓

KURASHI MADE DOME LOOK（未所有・MD-004 LGT-041 Status = Essential）

↓

DEVADEVA

↓

VALO SHADE

↓

TARP to TARP × Lampup Glass Shade

↓

Vapalux（必要時のみ）

本Sequenceのうち、RT-01AC01 / ECHO LAMPとKURASHI MADE DOME LOOKは未購入（MD-004 Status = Essential）。本SequenceはMD-004購入決定後の想定手順であり、実運用は未了。

---

# Return Sequence

現状はDeployment Sequenceのほぼ逆順で暫定運用している。OP-006 Foundation Compass Recovery Sequenceの原則（保護・乾燥・メンテナンス・次回設営を考慮した順序であり、設営の逆順ではない）に基づく正式な撤収手順の設計はN-03で扱う。

Coffee Equipment

↓

Wood Board（4 Sets）

↓

サイドテーブルを閉じる

↓

Wood Board（3 Sets）

↓

Bridge Frame

↓

Light Equipment

↓

Aroma Equipment

↓

Beck②を閉じる

↓

車両積載

---

# Home Operation

## 取り外すもののみ

- Vapalux M320（使用時のみ）

充電

↓

必要に応じて乾燥

↓

定位置へ戻す

Bridge Frame・Wood Board・Coffee Equipmentは

**Beck②へ固定収納**とする。

Light Equipment・Aroma Equipmentは

**ShellCon25②へ固定収納**とする。

CONPE10は

**Snow Peak Multi Containerへ固定収納**とする。

その他の装備は、

車両内をPermanent Storageとして維持する。

濡れたまま撤収したShelter・布製品は、帰宅後に取り出して完全に乾燥させてから車両へ戻す（OP-006 §Material Care Principles）。

---

# Operation Master

## Vehicle

車両固定収納をデフォルト状態とする。

---

## Camp

定められたDeployment Sequenceに従う。

収納位置は変更しない。

---

## Return

定められたReturn Sequenceに従う。

すべてのアイテムを定位置へ戻す。

---

## Maintenance

使用後は毎回点検する。

収納前に清掃する。

コンテナを閉じる前に完全に乾燥させる。

---

# Fixed Position Rules

## Beck①

Kitchen Module専用。

---

## Beck②

Living Core Module専用。

Coffee Equipment

+

Living Table Module

Bridge Frame・Wood Board・Coffee Equipment・Vapaluxの収納位置は固定とする。

---

## ShellCon25①

Bedding専用。

---

## ShellCon25②

Light & Aroma Module専用。

### Fixed Contents

- DEVADEVA
- VALO SHADE
- TARP to TARP × Lampup Glass Shade
- RT-01AC01 / ECHO LAMP（未所有・MD-004 LGT-040 Status = Essential）
- KURASHI MADE DOME LOOK（未所有・MD-004 LGT-041 Status = Essential）

### Separate Storage

- CONPE10 → Snow Peak Multi Container

---

# Storage Rules

One Item

↓

One Position

↓

One Sequence

↓

One Operation

一時的な固定位置は認めない。

重複収納は原則として認めない（例外はDuplicate Storage Exceptionを参照）。

モジュールの混在は認めない。

収納は、空きスペースにではなく、運用に従う。

---

# Duplicate Storage Exception（重複収納の例外）

Duplicate storageは、原則として禁止とする。

ただし、以下の条件をすべて満たす場合に限り、例外として認める。

1. 既存Equipmentが、Storage Domainの評価軸（設営効率・撤収効率）を著しく損なっていること
2. 複数個を、単なる複製ではなく、明確な機能分化（役割の違い）を持つPairとして運用すること
3. 同一Product・同一Color・同一Materialにより、Aesthetic GrammarのConsistency原則（素材の反復による調和）を満たすこと
4. 例外適用はEquipment単位で個別に判断し、Blanket Ruleとしない

本例外は、Duplicate storage禁止の原則を撤回するものではなく、Storage Domainの完成度を優先するための限定的な運用判断である。

## Applied Case

現時点で本例外の適用事例はない。ゴミ箱運用の検討（Dust Management Module参照）では、最終的に異なる2製品（ANOBA・T-box）による役割分化構成を採用したため、Duplicate storageには該当せず、本例外の適用対象外となった。

---

# Version

## Document

MD-001 Storage Blueprint

---

## Version

Ver.2.26

---

## Status

Active

---

## Parent Documents

- OP-001 THE THIRD PLACE Constitution
- OP-002 Design Bible
- MD-004 Equipment Registry Object Reference
- OP-006 Foundation Compass

---

# Validation Summary

## Beck② Storage Verification

### Result

Provisional（Wood Board Layer 2・Layer 3の格納先未解決のため）

- Bridge Frame
- Wood Board ×3 Sets（Layer 0・格納先確定）
- Coffee Module
- Wood Board ×4 Sets（Layer 2・格納先未解決）
- Vapalux M320（Layer 3・格納先未解決）
- Living Table Deployment
- Side Table Deployment

Coffee Module Layout（暫定）の判定により、Wood Board 3セット＋Coffee Equipment 13点でBeck②底面を使い切るため、Layer 2（Wood Board ×4 Sets）とLayer 3（Vapalux M320）の格納先は未解決である（詳細はCoffee Module Layout（暫定）§未決事項を参照。格納先自体の決定は本修正の対象外）。Wood Board ×7 Sets のうち4セット（STR-015・STR-018、各2組）は未購入（MD-004 Status = Essential）。本検証結果は未購入分・格納先未解決分を含む。実物での確認は未了。

---

## ShellCon25② Storage Verification

### Internal Size

405 × 290 × 195 mm

### Verified Equipment

- DEVADEVA
- VALO SHADE
- TARP to TARP × Lampup Glass Shade
- RT-01AC01 / ECHO LAMP
- KURASHI MADE DOME LOOK

RT-01AC01 / ECHO LAMPとKURASHI MADE DOME LOOKは未購入（MD-004 Status = Essential）。本検証結果は未購入分を含む。実物での確認は未了。

### Separate Storage

- CONPE10
  - Snow Peak Multi Container

---

## Storage Verification Result

| Item | Result |
|------|--------|
| Beck② Storage | 🔶 Provisional（Wood Board ×4 Sets・Vapalux M320の格納先未解決。Coffee Module Layout §未決事項参照） |
| Coffee Module | 🔶 Provisional（箱寸法計算では基準内寸565×360×265mmにて成立。試し詰め未了） |
| Living Table Deployment | ✅ Verified |
| Side Table Deployment | 🔶 Provisional（サイドテーブル用Wood Board ×4 Setsの格納先未解決のため） |
| ShellCon25② Storage | ✅ Verified |
| CONPE10 Relocation | ✅ Verified |
| Operation Sequence | 🔶 Provisional（Wood Board ×4 Sets・Vapalux格納先未解決のため） |

---

## Final Operational Rules

収納とは、容量ではない。

収納とは、運用である。

Every item has

- One Position
- One Sequence
- One Operation

Vehicle

↓

Permanent Storage

↓

Deployment

↓

Operation

↓

Return

↓

Permanent Storage

---

## Fixed Principles

- Beck①はKitchen Module専用。
- Beck②はLiving Core Module専用。
- ShellCon25①はBedding専用。
- ShellCon25②はLight & Aroma Module専用。
- CONPE10はSnow Peak Multi Containerへ固定収納。
- Bridge Frame・Wood Board・Coffee Equipment・Vapaluxは固定位置を変更しない。
- 展開順と収納位置の層順（箱内でどの層に何を格納するか）は常に一致させる。これは箱内の格納位置に関する原則であり、撤収作業を行う順序を指すものではない。撤収作業の順序はOP-006 Foundation Compass Recovery Sequenceの原則（保護・乾燥・メンテナンス・次回設営を考慮した順序であり、設営の逆順ではない）に従う。
- Temporary permanent locationsは禁止。
- Duplicate storageは原則禁止（例外条件はDuplicate Storage Exceptionを参照。現時点で適用事例なし）。
- ゴミ分別は、STR-028+STR-029（燃えないゴミ）とSTR-030（燃えるゴミ）の役割分化構成で運用する（Dust Management Module参照）。
- Mixed modulesは禁止。

---

本文書は、THE THIRD PLACEの収納ゾーン全体における運用ブループリントである。

---

# Revision History

| Version | Date | Description |
|---|---|---|
| 2.8 | 2026-09-26 | Position表内のOP-005表記が旧題『Acquisition Strategy』のままだった箇所をPursuit Strategyへ修正。OP-001表記もOP-008 §8カタログのTitle表記へ統一。加えて、ヘッダーStatus値『Planning』をOP-008 §9.2準拠の『Active』へ更新（MARI様確認：収納設計は実運用中のため）。 |
| 2.9 | 2026-09-28 | MARI様のご指摘に基づき、MD-004（SSOT）・CZ-001との矛盾を是正。LGT-043はMD-004上でVacant（未確定）であり、wildingout LF1984はCZ-001でStatus: Candidate（LGT-043への充当を検討中）に留まる未所有装備であるにもかかわらず、本文書ではLight Sequence冒頭・Home Operation「取り外すもののみ」・Maintenanceの3箇所で、既に所有・実運用中の固定装備であるかのように記載されていた。該当3箇所からLF1984関連の記載を削除し、MD-004・CZ-001とのSSOT整合を回復した。 |
| 2.10 | 2026-09-28 | Beck②にCoffee Module Layout（暫定）を追記。Layer 1旧リストは未同期 |
| 2.11 | 2026-09-28 | Layer 1 Coffee ModuleとCoffee Sequenceを、旧リスト（7品目）から現行の13点（暫定・試し詰め前）へ置換。Validation SummaryのCoffee ModuleをVerifiedからProvisionalへ修正。Layout節の「旧リスト未同期」注記を削除。Layer 2（Wood Board ×4 Sets）とLayer 3（Vapalux M320）は、本案との矛盾を未解決のまま残している |
| 2.12 | 2026-09-28 | MARI様のご決定に基づき、Consumables & Sundries Module（STR-032 WHATNOT One Touch Bucket HD、通年の消耗品と小物の常備用）を新設。中身（消耗品：火まわり・洗い衛生・メンテナンス・香り・電池／小物：ハンガー・カラビナ等）、分類（補充ライン方式・定数チェック方式）、確認方法を記載。役割の要約はMD-004 STR-032のIndustrial Attributeへ記載し、詳細は本書のみで管理する（重複管理を回避）。Storage Rulesの「モジュールの混在は認めない」原則との整合は、ShellCon25②（Light & Aroma Module）の複数Domain統合運用の前例に基づき、本バケットを単一役割の1 Moduleとして位置付けることで確保した。 |
| 2.13 | 2026-09-28 | MARI様のご決定に基づき（GitHub Issue #46）、Seasonal Slot Module（Seasonal Slot A：大型ギア用／B：バケット用）、Summer Kit（夏用ワンタッチバケットの中身・補充ライン）、Winter Kit（Equipment：FIR-036・FIR-029・FIR-032＋FIR-033／Bedding：FUR-032・FUR-035＋湯たんぽ・電気毛布／Consumables：CB缶／Clothing：ブーツ／Out of Scope：灯油・薪）、Weather Overlay（Rain、管理対象外）を新設。Consumables & Sundries Module §火まわりへCB缶（冬のみ）を追加。MD-004に未登録の物品（ポータブルエアコン・夏用ワンタッチバケット・湯たんぽ・電気毛布）は、Consumables & Sundries Moduleの前例に基づきMD-004へ新規登録せず、本書内でのみKit構成物として記載した。定義（Base／Season Kit／Weather Overlay、Seasonal Slotの位置づけ）はOP-006 Foundation Compassが管理し、本節では中身（データ）のみを記載する（重複管理を回避）。冬用暖房コンテナ・冬の小物の暫定位置は未決定のため本書には記載しない。 |
| 2.14 | 2026-09-28 | MARI様のご指摘に基づき、Seasonal Slot Moduleの冬季内容の誤りを訂正した。Seasonal Slot A（ポータブルエアコンの場所）の冬はFIR-036・FIR-029に加えFUR-035（冬用寝具のシーツ）も含む。Seasonal Slot B（夏用ワンタッチバケットの場所）の冬はFUR-032（冬用の大きな寝具、嵩張る方）のみであり、FUR-035はSlot Bには含まれない。Winter Kit § Equipment・Bedding自体（何が冬季に積まれるか）に変更はなく、Seasonal Slot Moduleの表（どちらのSlotに何が入るか）のみを訂正した。 |
| 2.15 | 2026-09-28 | 【引継ぎ】Beck②コーヒーギア13点収納設計を受け、Coffee Module Layout（暫定）節を拡充。13点＋Wood Boardの寸法一覧（GPT・Gemini web二重チェック確定値）、Beck②内寸の採用根拠（MD-001正本565×360×265mmを基準、540×340×250mmは参考値扱い）、9Barista Mk.2 Proの寸法採用根拠（実寸未確定のため安全側160×190×180を採用）、不採用配置案、配置詳細、判定結果（基準内寸では13点成立、参考値内寸では不成立、Wood Boardは3セットが上限・4セット目は非推奨・5〜7セットは不可）、未決事項（Layer 2 Wood Board×4 SetsとLayer 3 Vapalux M320の格納先が未解決のまま）、試し詰め前に必要な実測項目を追記した。Coffee ModuleのStatusは引き続きProvisional（試し詰め未了のため）。Validation Summaryの該当行へ判定根拠を追記。mainへ先行反映されていたSeasonal Slot Module訂正（旧Ver.2.14）とのコンフリクトを解消し、両変更を統合してVer.2.15とした。 |
| 2.16 | 2026-09-28 | MARI様のご確認に基づき、MD-004（SSOT）との矛盾を是正。Filoméla INCENSE CHAMBER Tokyo Limited（MD-004 ARM-004：Status = Upgrade）、RT-01AC01 / ECHO LAMP（LGT-040：Status = Essential）、KURASHI MADE DOME LOOK（LGT-041：Status = Essential）、MMM Pocket Shade（MD-004に登録なし。旧LGT-018はOTEBO CRAFTS BABELへ差し替え済み）はいずれも未所有であるにもかかわらず、ShellCon25②（Light & Aroma Module）のFixed Contents・Light Sequence・Fixed Position Rules・Validation Summaryの4箇所で、既に所有・実運用中の固定装備であるかのように記載されていた。Filoméla（Upgrade）・MMM Pocket Shade（未登録）はSSOT整合を優先し、該当4箇所から記載を削除した（Ver.2.9と同様の考え方）。一方、RT-01AC01 / ECHO LAMPとKURASHI MADE DOME LOOK（いずれもMD-004でStatus = Essential）は、購入決定済み装備として記録を残す必要があるため削除せず、該当4箇所に「未所有・MD-004 Status = Essential」の注記を付して維持した（Beck② Storage VerificationのWood Board未購入分と同様の扱い）。あわせて、Filomélaの「横置き固定収納」に関する個別ルール・検証行（Rule節、Validation Summary、Fixed Position Rulesまとめの計3箇所）も、対象がFixed Contentsから外れたことに伴い削除した。MD-004側のStatus（Upgrade／Essential）は変更なし。 |
| 2.17 | 2026-09-28 | MARI様のご指摘に基づき（課題C-11）、Validation SummaryとCoffee Module Layout（暫定）§未決事項との矛盾を是正。Beck② Storage VerificationのResultは、13点のCoffee Module新構成（Wood Board 3セットで底面を使い切る）のもとではLayer 2（Wood Board ×4 Sets）・Layer 3（Vapalux M320）の格納先が未解決であるにもかかわらずVerifiedのままだったため、Provisionalへ修正し、該当箇所を格納先確定分（Wood Board ×3 Sets）と未解決分（Wood Board ×4 Sets・Vapalux M320）に分けて明記した。Storage Verification Result表のBeck² Storage・Side Table Deployment・Operation Sequenceの3行も✅VerifiedからProvisionalへ修正した（Living Table DeploymentはLayer 0が格納先確定済みのためVerifiedを維持）。Wood Board 4セット・Vapalux M320自体の格納先は本改訂では決定せず、未解決である旨の明記に留めた（格納先の決定はN-06で別途扱う）。 |
| 2.18 | 2026-09-28 | MARI様のご指摘に基づき（課題C-19）、OP-006 Foundation Compass Recovery Sequence「撤収は、設営の逆順ではない」とMD-001の「収納順」に関する記述の間で、「積載・収納の層順（箱内の格納位置）」と「撤収作業の順序」という異なる2つの概念が同じ「順」という言葉で書かれ、矛盾して見えていた点を是正した。Fixed Principles「展開順と収納順は常に一致させる」は層順（箱内の格納位置）を指す原則であることを明記し、撤収作業の順序はOP-006 Recovery Sequenceに従う旨を追記した。Coffee Sequence「収納は、この逆順で行う」およびReturn Sequence本体（Deployment Sequenceのほぼ逆順）は、現状はOP-006の原則に未整合な暫定運用であることを明記し、正式な撤収手順の設計はN-03で別途扱うこととした。OP-006自体は変更不要（MARI様のご確認済み）。 |
| 2.19 | 2026-09-28 | MARI様のご確認に基づき（課題C-20）、MD-001内の記述の揺れを是正。(1) Parent Documents（OP-001・OP-002・MD-004・OP-006・OP-007）とRelationship図（MD-004→MD-001→OP-007、OP-007は下流＝現地展開）が矛盾していたため、Parent DocumentsからOP-007を外した（OP-001・OP-002・MD-004・OP-006の4件に修正）。Relationship図・Position表は変更していない。(2) Beck②のPurpose「Coffee Equipment & Light Equipment」およびBeck② Principles「Coffee Equipment + Light Equipment + Living Table Module = Living Core Module」は、Fixed Position Rules Beck²の記述（Coffee Equipment + Living Table Module）および実際のFixed Contents（Beck②内の照明はVapalux M320のみ。DEVADEVA等の照明・香り一般はShellCon25②の担当）と不整合だったため、両箇所とも「Coffee Equipment & Living Table Module」「Coffee Equipment + Living Table Module = Living Core Module」へ修正し、Fixed Position Rulesの記述に統一した。Vapalux M320は引き続きLayer 3・Fixed Position Rulesの個別記載（Bridge Frame・Wood Board・Coffee Equipment・Vapaluxの収納位置は固定）でのみ扱う。Position表（S-08で削除予定）は本改訂の対象外。mainへ先行マージされていたRecovery Sequence訂正（C-19、Ver.2.18）とのマージコンフリクトを解消し、両変更を統合してVer.2.19とした。 |
| 2.20 | 2026-09-28 | OP-008 Rule DOC-06・Principle 003に基づき、§Positionの文書一覧表（OP-008 §8と重複）を「文書一覧は OP-008 §8 Document Series を参照。」の1行へ置換した。直後の§Relationship（MD-004→MD-001→OP-007のフロー図）は本書固有の情報のため変更していない。MARI様のご決定に基づく（S-08）。 |
| 2.21 | 2026-09-28 | 整備バックログ（N-02・N-03・N-06・N-07）対応。§Vehicle（Range Rover Sport 2026年型、公表荷室容量647 L／1,491 L、実測待ち項目）、§Vehicle Loading Rule（暫定）、§Full Loading Order（暫定・未検証）、§Site Deployment Sequence（全体・暫定）、§Site Recovery Sequence（全体・暫定。乾燥に時間を要するShelterを最後に撤収）を新設。Winter Kit BeddingへFUR-034・FUR-036を追加し積載位置の未決事項を明記。Coffee Module Layout §未決事項へCoffee Serviceware・専用水の定位置未定を追記。Home Operationへ濡れたShelterの帰宅後乾燥を追記。Dust Management Module・Seasonal Slot Moduleの未所有Equipment（STR-030・FIR-036・FUR-035・FUR-032）へ未所有注記を付記（S-02バリデータ警告の解消）。ヘッダーと末尾Version欄の版数不一致（2.20／2.19）を是正。いずれもClaude推奨案をMARI様の包括指示（2026-09-28）に基づき暫定採用したもの。 |
| 2.22 | 2026-09-28 | S-11（ヘッダー形式の統一）に基づき、OP-008 §9（全文書はAuthorityおよびStatusを保持する）に従って、文書冒頭のDocument Information（Document ID／Title／Series／Version／Authority／Status／Owner）を整えた。値はOP-008 §8 Document Seriesのカタログに一致させた。本文の内容に変更はない。Patch Version。MARI様の包括指示（2026-09-28）に基づく。 |
| 2.23 | 2026-09-28 | MARI様のご回答（2026-09-28）を反映。Beck①のFixed ContentsへCoffee Serviceware（HILLS FIELD Glass Case Single、FIKA12 ×2）を追加し、Ruleの「Coffee Equipment収納禁止」は抽出・スチーム機材を指し、Servicewareは食器として収納する旨を明記。Coffee Module Layout §未決事項を専用水ボトルのみに更新。Winter Kitの電気毛布を「電源サイト利用時のみ持参」とした。§VehicleへPowertrain（MHEV 3.0L 直列6気筒ディーゼル）を記載。Consumables & Sundries ModuleのSundriesへ一酸化炭素警報器（所有済み）を追加。 |
| 2.24 | 2026-09-28 | MARI様のご回答を反映。§Vehicleの座席数を5人乗りと記載。Coffee System専用水ボトル3本の収納先を食品用バッグSTR-035（YETI Camino® 35キャリーオール トートバッグ、MD-004 Version 7.70で新規登録）に決定し、Coffee Module Layout §未決事項を解消。§Full Loading Order ③へSTR-035を追加。 |
| 2.25 | 2026-09-28 | MARI様提供の荷室データを§Vehicleへ記載（容量のVDA方式・Dry表記、奥行〈後席使用時・格納時〉、最大幅、ホイールハウス間幅、開口部〜天井高）。Coffee Module Layout §必要な実測へ、Coffee Equipment未購入のため試し詰めは購入後に行う旨を追記。 |
| 2.26 | 2026-09-28 | MARI様の試し積み（写真2枚と区画ごとの申告）に基づき、§Vehicle Loading Rule（暫定）と§Full Loading Order（暫定・未検証）を、確認済みの§Vehicle Loading Ruleと§Loading Map（荷室・後席、Seasonal Slotの車内位置）へ置き換えた。後席は左40・中央20を倒し右40を起こす運用、EXTENMON TABLEを床に敷きコンテナを右寄せで積む構成、満載時にテールゲートを開けると手前の荷が倒れる注意を記載。Seasonal Slot Aへ春・秋の中身（SHL-003 CLOUDBREAK"D"）を追加。暫定案にあった「当日のShelterをテールゲート側に置く」ルールは、実際の構成（Shelterは奥の3段目）と異なるため削除した。 |

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、TP-010からMD-001へ番号を変更した。本文中の文書参照（Position表・Relationship・Parent Documents）を新ID体系へ更新した。内容（Ver.2.5）に変更はない。旧ID: TP-010。

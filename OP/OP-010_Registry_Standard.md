# OP-010 Registry Standard

**Document ID**: OP-010  
**Title**: Registry Standard  
**Series**: OP – Operation (Definition)  
**Version**: 1.0  
**Authority**: Standard  
**Status**: Active  
**Owner**: THE THIRD PLACE Project

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | 2026-09-24 | 新規発行。Volatility Restructureに伴い、MD-004・MD-003・MD-002から登録規則・評価基準（恒久ルール）を移設し、記録系列台帳の登録規則・評価基準を定義する文書として新設した。データ（具体的な登録内容・台帳）は移設元に残る。 |

---

# 1. Purpose

本書は、記録系列台帳（MD-002 Field Atlas／MD-003 Galley Fare／MD-004 Equipment Registry）の登録規則・評価基準を定義する。

本書はデータを保持しない。データは各Master Document（MD-002／MD-003／MD-004）が保持する。

---

# Part A — Equipment Registry（MD-004）

適用対象: MD-004 Equipment Registry Object Reference

本Partは、MD-004の登録規則・属性ポリシーを定義する。適用範囲を変更しない。

---

## Registry Rules（登録ルール）  
  
### Equipment Domains（装備ドメイン）  
  
Equipmentは、7つのDomainに分類される。  
  
1. Furniture  
2. Light  
3. Aroma  
4. Storage  
5. Coffee  
6. Fire  
7. Shelter  
  
---  
  
### Equipment ID（装備ID）  
  
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
  
### Status（ステータス）  
  
| Status | 意味 |  
|---------|----------|  
| Owned | 現在所有している |  
| Essential | 必要であり、購入が決定している（購入待ち） |  
| Candidate | 必要だが、具体的な製品はまだ決まっていない（検討中） |  
| Upgrade | 既に所有しているものの置き換え、または「あれば良い」アイテム（最も優先度の低い層） |  

「Wanted」は廃止され、その意味は「Essential」へ統合された。  
  
---  
  
### Attribute Policy（属性ポリシー）  
  
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
  

---

## Parent / Child Rules（親子関係ルール）  

Parentオブジェクトは、主たる装備を表す。  

Childオブジェクトは、構成部品、カスタムパーツ、交換可能なアクセサリー、または恒久的に付随するアイテムである。  

Childオブジェクトは、将来ステータスが変更されない限り、単独では存在しない。  

具体的な Parent / Child ID 対応表（Example）は MD-004 Equipment Registry Object Reference を参照。

---

## Graphic Attribute（グラフィック属性）  

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

---

## Industrial Attribute（インダストリアル属性）  

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

---

## Color Rule（カラールール）  

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

---

## Material Rule（マテリアルルール）  

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

---

# Part B — Galley Registry（MD-003）

適用対象: MD-003 Galley Fare

本Partは、MD-003の選定基準・登録規則を定義する。適用範囲を変更しない。

---

## Selection Standard

キッチン機材は、以下を選定基準とする。

- 所作、デザイン、ブランドの格を必須条件としない
- 由来・背景のない量産品（理由なきアルミクッカー等）は選ばない、本物志向を優先する
- 実際に調理が成立する機能を持つこと
- 長期使用に耐える実用品であること

Popularity、SNS、レビュー、希少性は評価基準にしない。

---

---

## Registry Rules

### Equipment ID

KIT-001〜（3文字Prefix、MD-004の採番規則を継続使用）

IDは欠番不可。番号は原則として変更しない。

ただし、プロジェクトオーナーの明示的な指示による全面的な再編成（Version 2.5：用途別グルーピングによる全件再採番）は、この原則の例外として記録する。再編成の詳細な新旧対応表はVersion Historyに記載する。

他のMaster Document（MD-004等）へ管理を移管したIDは、欠番とせず、移管先を示す記録（Retired）として保持する（Version 2.8より）。

複数の候補が同一カテゴリで併存する場合、同一メイン番号に対して枝番（a, b, c...）を付与する（例：KIT-015a, KIT-015b, KIT-015c）。

既存の所有物（Owned）に対する買い替え候補も、同様に元のIDへ枝番を付与して記録する（例：KIT-036の買い替え候補＝KIT-036a）。

### Status

| Status | 意味 |
|---------|----------|
| Owned | 現在所有している |
| Essential | 必要であり、購入が決定している（購入待ち） |
| Candidate | 必要だが、具体的な製品はまだ決まっていない（検討中） |
| Upgrade | 既に所有しているものの置き換え、または「あれば良い」アイテム（最も優先度の低い層） |

### Attribute Policy

MD-004と同一のフィールド構成を用いる。

- Brand
- Product
- Status
- Color
- Material
- Graphic Attribute
- Industrial Attribute
- Parent / Child relationships（該当する場合）
- Price（Version 2.7より、任意項目として再導入。既存登録済みアイテムへの遡及記載は別途対応）

### Candidate Recording Policy

MD-003は、キッチン機材を選んでいく過程・ストーリー自体を記録対象とする。

そのため、同一カテゴリ（同じIndustrial Attribute）に対して複数のCandidateが併存することを許容する。

同一カテゴリの複数候補は、同一メイン番号の枝番（a, b, c...）として記録する（例：まな板候補＝KIT-015a/015b/015c、包丁候補＝KIT-017a/017b/017c）。

既存Owned品の買い替え候補も同じ枝番方式で記録する（例：KIT-036a＝KIT-036の買い替え候補）。

MD-004（所有物のみを記録）とは異なり、MD-003は「まだ選ばれていない候補」も、検討過程の記録として枝番付きIDで管理する。

いずれか一つが購入・確定した時点でStatusをOwnedへ更新し、MD-004には登録しない（MD-003で完結）。不採用となった候補はStatusをUpgrade等に変更するか、Version Historyに不採用の経緯を記録した上で扱いを決める。

### Category Grouping Policy（Version 2.5新設）

Version 2.5より、KIT-番号は取得順の連番ではなく、用途別グループごとに連番として整理する。

グループ順序は以下の通り（本書内の登場順と一致）。

1. 鍋・グリドル・焚火系調理器具（KIT-001〜007）
2. バーナー・ストーブ（KIT-008〜013）
3. 刃物・まな板（KIT-014〜017）
4. 汎用調理小道具（KIT-018〜025）
5. 食事用カトラリー（KIT-026〜031）
6. 串・耐熱グローブ（KIT-032〜034）
7. マグ・タンブラー（KIT-035〜040）
8. 急須（KIT-041）
9. シェラカップ・炊飯関連（KIT-042〜059）
10. コーヒー器具（KIT-060〜062）
11. 鍋敷き（KIT-063）
12. 収納・スパイス（KIT-064〜069）
13. ゴミ処理（KIT-070〜070b。Version 2.8よりMD-004 Storage Domainへ移管済み。移管記録のみ保持）

新規カテゴリの追加時は、末尾（現状KIT-070の次）に新グループとして追加するか、既存グループ内に挿入する場合は当該グループ以降の番号をすべて繰り下げる全面再採番を伴う。番号変更を伴う再編成は、その都度Version Historyに新旧対応表を記録する。

### Domain Scope Note (Kitchen vs. Fire/Coffee)

MD-004のFire Domainと本書Kitchen（MD-003）は、燃料の種類ではなく、機材の**目的**によって区分される。

- **Fire Domain（MD-004）**：暖を取る、あるいは焚き火のような炎そのものを楽しむための機材。燃料は薪に限らず、ケロシン（灯油）等も含む（例：FIR-029 武井バーナー Purple Stove 501Aは灯油式のケロシンヒーターだが、目的が暖房であるためFire Domainに属する）。
- **Kitchen（MD-003）**：調理を成立させるための機材。燃料はガス・アルコール等を問わない（例：フラットバーナー、火焔ストーブ、ヤエンストーブ、グリルバーナー等は、いずれも調理目的であるためKitchenに属する）。

コーヒー器具（ミル・ケトル・ドリッパー等）についても、キッチンゾーンでの調理行為の一部として同様にKitchenで管理する。

この区分は、MD-004 Fire Domainの既存定義を変更するものではなく、両ドメインの境界を目的ベースで明確化したものである。

**Storage Domainとの境界（Version 2.8追記）**：ゴミ箱・ダストスタンド・ダストバケット（およびその置き台となるサイドテーブル）は、調理を目的としない収納系の装備であるため、Kitchenではなくストレージ（MD-004 Storage Domain）で管理する。

---

---

# Part C — Field Atlas Evaluation（MD-002）

適用対象: MD-002 Field Atlas Landscape Framework

本Partは、MD-002の評価哲学・評価軸・スコアリング・表示規則を定義する。適用範囲を変更しない。Field Atlas Database・Reference Benchmark Site・Radar Sub-Scoresのデータそのものは MD-002 に残る。

---

## Basic Philosophy

キャンプ場は宿泊施設ではない。

THE THIRD PLACE を成立させる
ランドスケープそのものを評価する。

評価対象は、

・景観

・土地の個性

・設備品質

・周辺環境

・文化

・体験

・居心地

・近さ

まで含めた総合的な空間である。

人気や流行ではなく、

Design Bible との親和性を最優先に判断する。

---

## Evaluation Framework

Field Atlas は
以下6つの評価軸によって構成される。

1. Site

2. Facility

3. Comfort

4. View

5. Identity

6. 近さ（Distance）

この6軸の合計点を、**Partner Value（総合スコア）**として別途算出する。

---

## 1. Site

### Purpose

サイトそのものの品質を評価する。

評価対象

- 地面（砂利・芝・土など）
- 区画面積
- 平坦性
- レイアウト自由度
- ペグの刺さりやすさ
- 車横付けのしやすさ
- 設営・撤収の快適性

評価では、

「設営しやすいか」ではなく、

**THE THIRD PLACE を美しく構築できるか**

を重視する。

#### 地面によるスコアの目安

- 7点以上：砂利（🪨）
- 4〜6点：芝（🌱）
- 3点以下：土（🟫）

ただし、芝の状態が特別に優れている場合は、芝であっても7点以上になり得る。地面の種類は出発点の目安であり、絶対的な上限・下限ではない。

---

## 2. Facility

### Purpose

設備品質を評価する。

評価対象

- 管理棟
- トイレ
- 炊事場
- 温水設備
- シャワー
- 電源
- 清掃状況
- メンテナンス品質

設備数ではなく、

**品質そのもの**を評価対象とする。

**設備までの場内移動距離（トイレが遠い等）は、この軸には含めない。Comfort軸で評価する。**

**管理棟に併設されたショップ・温泉・サウナ・スパ等、その場所固有の体験価値を伴う要素は、Facilityではなく Identity（Experience Identity）で評価する。Facilityは、あくまで運営インフラとしての品質のみを対象とする。**

---

## 3. Comfort

### Purpose

居心地の良さに直結する要素を評価する。

Ver.2.1までは「Surroundings」として周辺環境（アクセス・スーパー・コンビニ・温泉・病院・観光等）を評価する軸だったが、Ver.3.0でこれをIdentity軸（土地の価値の一部）へ統合し、代わりに本軸を新設した。

評価対象

- 設備（トイレ・炊事場・水場等）までの場内移動距離
- 区画同士の間隔・プライバシー
- 静けさ
- サイト全体としての快適さ・落ち着きやすさ

設備そのものの品質（Facility軸）ではなく、

**その設備・区画配置が、実際に過ごす上でどれだけ快適か**

を評価基準とする。

---

## 4. View

### Purpose

景観そのものを評価する。

景色が美しいだけでは評価しない。

THE THIRD PLACE にとって、

「帰りたくなる景色」であるかを重視する。

#### 評価対象

- 開放感
- 林間性
- 山岳景観
- 湖畔
- 海辺
- 富士山などのランドマーク
- 光の入り方
- 季節変化
- 空間全体のバランス

写真映えではなく、

**その場所で長時間過ごしたくなるか**

を評価基準とする。

---

## 5. Identity

### Purpose

Identity は、

そのキャンプ場だけが持つ価値を評価する。

Field Atlas において、

最も重要な評価項目である。

Identity は次の三要素で構成される。

---

### Place Identity

場所そのものが持つ個性。

例

- サーキット
- 建築
- デザイン
- リゾート
- 林間
- 農園
- 湖畔
- 海辺
- 富士山
- 高原

その土地だから成立する価値を評価する。

---

### Experience Identity

その場所でしか体験できない価値。

例

- 貸切露天風呂
- 貸切サウナ
- 薪使い放題
- モータースポーツ文化
- ガレージブランドイベント
- 農園体験
- 地域文化との接点
- 管理棟等に併設されたショップ・温泉・サウナ・スパ

---

### Surrounding Value（Ver.3.0 新設）

優れた周辺環境は、それ自体がその土地の価値である、という考え方に基づき、旧Surroundings軸の評価対象をここへ統合する。

例

- アクセスの良さ
- 高速道路からの利便性
- スーパー・コンビニの近さ
- 温泉・観光地との近接
- 病院等生活インフラとの近さ

Identity は固定された評価ではない。

訪問前の調査、

現地体験、

再訪によって成熟していく評価である。

---

## 6. 近さ（Distance）

### Purpose

近さは、

**自宅からの実際の距離・移動負担**

を評価する指標である。

Ver.2.1までは「距離はフィールド本来の価値を下げない」という方針のもと、スコアに含めないAccess Note（参考情報）として扱っていたが、Ver.3.0でこの方針を正式に転換し、6軸の1つとして正式にスコアへ含める。

評価対象

- 移動時間（起点：東京都江戸川区小岩）
- 道中の負担感（渋滞・道路状況等、移動時間だけでは測れない体感的な近さ）

Mariの感覚値（訪問済み）、またはDatabase記載のAccess Note（移動時間、未訪問）を根拠として記録する。

---

## Partner Value（総合スコア）

Partner Value は、

Site／Facility／Comfort／View／Identity／近さの

**6軸の合計点**として算出する総合スコアである。

Ver.2.1までは独立した評価軸（★評価）だったが、Ver.3.0でこれを6軸の合計から導かれる**出力値**へ変更した。

**「また二人で来たいと思えるか」を最終的に判断する数値として用いる。**

---

## Ranking Philosophy

Field Atlas のランキングは、

人気順ではない。

知名度順でもない。

THE THIRD PLACE Design Bible との親和性を基準とし、

本フレームワークによる総合評価によって順位を決定する。

**Ver.3.0より、近さ（Distance）は6軸の1つとして正式にスコアへ含める。Ver.2.1までの「距離はフィールドの価値そのものを下げる理由にはならない」という方針は、Mariの意思決定により正式に撤回された。**

未訪問キャンプ場は、

調査結果に基づく暫定評価とする。

訪問後は、

実体験を最優先し、

必要に応じて評価を更新する。

Field Atlas は、

経験とともに成熟していく評価体系である。

**⚠️ 移行に関する注記：Field Atlas Database内の既存49件の統合スコア（例：98.5、97.8等）は、Ver.2.1までの旧フレームワーク（Site・Facility・Surroundings・View・Identity・Partner Valueの6軸、距離除外）のもとで算定された値であり、Ver.3.0の新フレームワークでの再評価は未実施である。既存スコアは暫定的に現行の掲載順のまま維持し、Radar Sub-Scoresでの個別ヒアリングが進むにつれて、新フレームワークに基づく統合スコアへ順次更新していく方針とする。**

---

## Official Display Format

キャンプ場は以下の形式で統一して記録する。

●：訪問済み

○：未訪問

---

### Example

● 1

Render Fika（千葉県山武市）

約2時間　🪨 Gravel

**Design Retreat**

貸切露天風呂・貸切サウナ・静かな林間。

クリエイターが自然に集う、

THE THIRD PLACE の基準となる場所。

---

### Display Rules

#### Travel Time

Googleマップ実勢時間を基準とする。

30分単位で切り上げて表示する。

例

- 約1時間
- 約1時間30分
- 約2時間

移動時間が未確認のフィールドは、確認済みSHAが取れるまで表記を省略する（推測で埋めない）。

起点は東京都江戸川区小岩とする（Ver.1.8時点で明示化）。それ以前に記録された時間は起点が個別に確認できないため、実測値が判明次第、順次この基準へ更新する。

Ver.3.0より、この移動時間は「近さ」軸の根拠情報としても用いられる。

---

#### Location

都道府県・市区町村まで表記する。

---

#### Ground Surface

地面はアイコンで統一する。

🪨 Gravel

🌱 Grass

🌲 Wood Deck

🟫 Soil

複数ある場合は、

主となるサイトを基準とする。

---

#### Identity

Identity は、

英語タイトルと、

一文で表現する。

例

**Design Retreat**

クリエイターが自然に集い、

静かに過ごせるデザインリトリート。

**Identityのコメントには、他フィールドとの相対順位・比較表現（「〜より上」「〜のすぐ下」等）を含めない。順位はDatabase内の掲載順そのもので表現し、コメント本文はそのフィールド固有の情報のみで構成する。**

---

#### Visited Status（Database Table 表記）

一覧表（Database）形式では、

●／○ の代わりに、

**訪問済みのみスコアとField名を太字表記する**。

太字：訪問済み

通常：未訪問

未訪問のスコアには「(暫定)」を付記し、フィールド本来の質による暫定評価であることを明示する。

Full Entry（Example形式のような単体表記）では、

引き続き ●／○ を使用する。

---

---

# Related Documents

- MD-002 Field Atlas Landscape Framework
- MD-003 Galley Fare
- MD-004 Equipment Registry Object Reference
- OP-008 Documentation System

---

# End of Document

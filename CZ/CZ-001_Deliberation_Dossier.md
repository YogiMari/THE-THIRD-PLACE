# CZ-001 Deliberation Dossier

# Document ID

CZ-001

# Document Title

Deliberation Dossier

# Version

3.8

# Status

Active

---

## Purpose

CZ-001 Deliberation Dossierは、Coffee Domain（BR-002管轄）を除く全ゾーン（Furniture／Light／Aroma／Storage／Fire／Shelter）における、検討中ギアの意思決定を支援する文書である。

本書は3種類の内容を管理する。

* **Zone Evaluation Philosophy**（恒久）：各ゾーンの評価哲学・評価軸。ゾーンの性格が変わらない限り、恒久的に保持する。
* **Under Consideration**（可変）：現在検討中のギアの具体的製品情報・比較・評価記録。MD-004側のステータスが確定（Candidate → Essential/Owned）した時点で、当該記載を空欄化する。
* **Confirmed — Purchase Pending**（可変）：製品・ブランドは確定済み（MD-004側のStatus = Essential）だが、まだ所有していないEquipmentの一覧。Coffee Domainを除く全ゾーン（Furniture／Light／Aroma／Storage／Fire／Shelter）が対象。本セクションは、購入リスト（買い物タスク管理）アーティファクトのソースとして使用する。

### MD-004との役割分担

* MD-004：Brand／Product／Status／Material等のSingle Source of Truth。Status = Candidateの間は、Brand / Productを「Unconfirmed」とする。
* CZ-001：Candidate段階の具体的な製品名・ブランド・比較評価・検討経緯（Under Consideration）、およびEssential段階の購入待ちEquipment一覧（Confirmed — Purchase Pending）を保持する。

Candidateが確定（Essential/Owned）した時点でUnder Considerationから削除し、Decision Logへ一行要約を残す。詳細な比較内容そのものは確定後は保持しない。Essentialになったアイテムは同時にConfirmed — Purchase Pendingへ追加し、購入完了（Owned）した時点でそこから削除する。

---

## Relationship

```
CZ-001 Deliberation Dossier
│
├─ Zone Evaluation Philosophy（恒久）
│
├─ Under Consideration（可変）
│       │ 検討が深まる
│       ▼
│  MD-004 Status更新（Candidate → Essential）
│       │
│       ▼
│  Under Considerationから削除 → Decision Logへ一行記録
│       │
│       ▼
│  Confirmed — Purchase Pendingへ追加
│       │
│       │（将来、買い替え検討が発生）
│       ▼
│  CZ-001 Under Considerationへ再登場
│
└─ Confirmed — Purchase Pending（可変）
        │ 購入完了
        ▼
   MD-004 Status更新（Essential → Owned）
        │
        ▼
   Confirmed — Purchase Pendingから削除
```

---

# Zone Evaluation Philosophy（恒久）

→ OP-002 Design Bible §Design Domains（各ドメイン節 Zone Evaluation Philosophy）を参照。

---

# Under Consideration（可変）

---

## Fire

現時点でCandidate項目なし（薪ストーブ検討はDecision Logおよび下記「Fire — Wood Stove 選定記録」を参照。2026-09-26、FIREGRAPHIX BLISS-SPで決定）。

---

## Furniture

### Winter Sleeping Mat（MD-004: FUR-034）

**Status**：Candidate（**暫定最有力候補：BLACK ZONE MAT×2**、正式決定・MD-004 Status更新は未了）

FUR-032（マット部、R値5.4）の下に敷く断熱補強・パンク保険。幅77cm×2枚連結（計154cm）に対し、重ねずに敷く前提（隙間許容案）で候補を仮登録していたが、2026-09-26、MARI様のご指示によりBLACK ZONE MAT×2を暫定最有力候補とした。

| | 候補① Zライトソル | 候補② NEMOスイッチバック | 候補③ BLACK ZONE MAT（**暫定最有力**） |
|---|---|---|---|
| ブランド | Therm-a-Rest | NEMO | BlackishGear |
| 幅×長さ×厚さ | 51×183×2.0cm | 51×183×2.3cm | 60×185×2.0cm |
| R値 | 2.0 | 2.0 | 1.9（第三者試験報告書あり、GB/T 10294-2008・ASTM F3340-22準拠） |
| 折り畳み方式 | 蛇腹 | 蛇腹 | 蛇腹 |
| 収納サイズ | 51×13×14cm | 51×13×14cm | 15×60×15cm |
| 重量 | 410g | 415g | 380g |
| カラー | Silver/Sage（Black展開なし） | Violet/Orange（Black展開なし） | 両面ブラック |
| 実勢価格 | 約¥8,000 | ¥9,500（税抜） | ¥3,564 |
| 実績 | 定番・登山用途での耐久実績が豊富 | 定番・厚みでやや優位 | 2025年Makuake発の新興ブランド、レビュー7件のみ |

**配置前提**：お一人様1枚ずつ（数量2）、FUR-032マット幅の左右中央に揃えて敷く。カバー率は幅比で候補①②が約66%（51/77cm）、候補③が約78%（60/77cm）。残りは隙間として許容し、四隅への滑り止め（面ファスナー等）併用を推奨。

**検討経緯（フルカバー案の棄却）**：154cm幅を1枚または2枚重ねでフルカバーする案（例：CAPTAIN STAG IXPEフォームマット〈ダブル〉116×183cm×2枚を77cmずつずらして重ねる配置）も検討したが、重なり部分（幅78cm相当）で厚さが実質2倍になり段差が生じ、寝心地への悪影響が判明したため棄却。フルカバーを重なりなしで実現する幅154cm級の薄手マットは、2026-09-25時点で発見に至っていない（継続調査の余地あり）。

**Unresolved Gaps**：BLACK ZONE MATはR値の第三者試験データはあるものの、実使用（特に厳冬期）での耐久性実績がまだ乏しい点は残るリスクとして保持。幅154cm級フルカバー品の探索は継続中。

**Decision**：**仮確定**（BLACK ZONE MAT×2、2026-09-26、MARI様）。正式な購入決定（MD-004 Status = Essentialへの更新・Confirmed — Purchase Pendingへの追加）は別途行う。候補①②は比較参考として保持する。

### Pad Sheet（MD-004: FUR-035）

**Status**：Under Evaluation

| | 候補① Therm-a-Rest Synergy Lite Sheet | 候補② WAQ 専用カバー | 候補③ HOTEL CAMPS リバーシブルホットカバー | 候補④ VISIONPEAKS×NANGA IBUKI BOX SHEETS S |
|---|---|---|---|---|
| Color適合 | Stargazer柄のみ、Black展開なし（不適合） | Black指定可 | Black×Black指定可 | Brownのみ、Black展開なし（不適合） |
| 特徴 | 廃盤の可能性あり | 洗濯機で丸洗い可能 | 断熱アルミシート内蔵、リバーシブル | NANGAコラボ由来 |

**Decision**：未決定。候補①・④はオールブラック条件不適合につき参考記録として保持。実質的な最有力候補は②・③。

---

## Light

### Portable LED Lantern（MD-004: LGT-043 空き枠への充当を検討中）

**Status**：Candidate（比較対象なし）

検討中製品：wildingout「LF1984」。Brown、Walnut。

MD-004 Light Domain末尾の空き枠LGT-043（吊り下げ型ランタン用に確保）へ充当するかどうかを検討中。

---

## Aroma

現時点でUnder Consideration項目なし（ARM-003は購入決定済み。Decision Log参照）。

---

## Storage

### Carrying Case for STR-019 Container Bridge Frame（MD-004: STR-034）

**Status**：Under Evaluation

STR-019 Container Bridge Frame（nodel design、830×383×50mm、黒皮鉄）は、角があり周囲を傷つける恐れがあるため、保護ケースが必須と判明（MARI様確認）。将来的に未購入のFUR-026 Butterfly Table M Black Look（nodel design、Upgrade）との共用も視野に入れている。市販品を条件に、ブランド不問・デザイン重視で探索中。

| 候補 | ブランド | 評価 |
|---|---|---|
| Tactical Bag / M【+AS2OV】 | nodel design × AS2OV | ノデルデザイン純正、Butterfly Table Mを felt bag ごと2枚まで収納可能な公式設計（1000×500×50mm）で、サイズ・共用要件は最適。ただし素材がBllisstic CORDURA・カラーがSandで、Design Bibleの素材・色リストに非該当。MOLLE仕様のタクティカルな意匠もTHE THIRD PLACEの世界観と不調和。現在SOLD OUT。サイズ面の妥協候補として保持するが、美意識面で不採用寄り |

**Unresolved Gaps**：Design Bible準拠（黒・茶／帆布・レザー）で、かつ830mm超の長さに対応する既製品がまだ見つかっていない。asimocrafts×横濱帆布鞄系（FIR-005・FIR-007と同系統）は最大68cm止まり、TEMBEAは該当サイズ未確認、レザーキャディバッグ系は円筒形状で不適合、スキーケースは素材が不適合と判明済み。FIR-007（table_no_kaban）の流用も検討したが、収納対象であるIron Table本体の公式収納時サイズが665mmであることから、長さ不足と判断。

**Decision**：未決定。引き続き市販品を探索中。

---

## Shelter

現時点でCandidate項目なし。

---

# Confirmed — Purchase Pending（可変）

MD-004でStatus = Essentialとなっている、Coffee Domainを除く全Equipmentの一覧。製品・ブランドは確定済みだが、まだ所有していない。

購入完了（MD-004側でStatus = Ownedへ更新）した時点で、該当行を本セクションから削除する。

## Furniture

| ID | Product | Brand | Note |
|---|---|---|---|
| FUR-032 | ダウン システムオフトン ワイドマットセット（BD-070、掛け布団+マット一式） | Snow Peak | 数量2 |

## Light

| ID | Product | Brand | Note |
|---|---|---|---|
| LGT-017 | BABEL | OTEBO CRAFTS | — |
| LGT-040 | RT-01AC01 / ECHO LAMP | rove troupe | — |
| LGT-041 | DOME LOOK | KURASHI MADE | — |
| LGT-042 | Pivotshade | IFA | — |

## Aroma

| ID | Product | Brand | Note |
|---|---|---|---|
| ARM-002 | MKGP | OLD MOUNTAIN | — |
| ARM-003 | SCENT TOWER | UNIT/04 × KUNST・BAUM | — |

## Storage

| ID | Product | Brand | Note |
|---|---|---|---|
| STR-006 | SHELCON LEG 25 | BALLISTICS | Parent: STR-001 |
| STR-012 | SHELCON LEG 25 | LOCKFIELD EQUIPMENT × BALLISTIC | Parent: STR-007 |
| STR-015 | Wood Board（Oak） | nodel design | Parent: STR-013／数量2組 |
| STR-018 | Wood Board（Walnut） | nodel design | Parent: STR-016／数量2組 |
| STR-021 | Butterfly Under Shelf | nodel design | Parent: STR-019 |
| STR-030 | Folding Wire T-box 全面コンプリートセット | KAZE_TO_MORI × WINDY AND RAINY | — |

## Fire

| ID | Product | Brand | Note |
|---|---|---|---|
| FIR-025 | copper250 | neru design works | Parent: FIR-023 |
| FIR-036 | BLISS-SP | FIREGRAPHIX | Parent（本体） |
| FIR-037 | アルミポータブルスタンド（FG057） | FIREGRAPHIX | Parent: FIR-036 |
| FIR-038 | オーバーレイチムニー（FG004） | FIREGRAPHIX | Parent: FIR-036 |
| FIR-039 | オーバーレイチムニー80・5連（FG017） | FIREGRAPHIX | Parent: FIR-036 |
| FIR-040 | チムニートップ フレキシブル（FG024） | FIREGRAPHIX | Parent: FIR-036 |
| FIR-041 | スライドチムニーガード700（FG013） | FIREGRAPHIX | Parent: FIR-036 |
| FIR-042 | ソフトコンテナL（FG034） | FIREGRAPHIX | Parent: FIR-036 |

## Shelter

現時点でStatus = Essentialの項目なし（SHL-001〜SHL-005はすべてOwned）。

---

# Decision Log

確定・削除した項目を一行要約で記録する。詳細な比較内容そのものは、確定後は保持しない。

| Date | Domain | Item | Decision |
|---|---|---|---|
| 2026-09 | Aroma | ARM-003 Vertical Diffuser | UNIT/04 × KUNST・BAUM SCENT TOWERを正式決定（Status: Essential）。詳細はMD-004参照。（決定当時のIDはARM-004。2026-09-19のMD-004 Version 7.34で番号入替） |
| 2026-09-19 | Aroma | ARM-004 Incense Chamber | Filoméla INCENSE CHAMBER Tokyo LimitedのStatusをEssentialからUpgradeへ変更（MD-004 Version 7.34、MARI様のご指示）。Confirmed — Purchase Pendingから除外。旧ID: ARM-003。 |
| 2026-09-23 | Furniture | FUR-033 Winter Top Quilt | 候補（Enlightened Equipment Accomplice／UGQ Outdoor Tango Duo）の検討を終了。冬用キルトはSnow Peak ダウン システムオフトン スリムマットセット（FUR-032）を採用（プロジェクトオーナー決定）。FUR-033はMD-004 Version 7.54でRetired（FUR-032へ統合）。 |
| 2026-09-26 | Fire | Wood Stove（FIR-036〜042） | FIREGRAPHIX BLISS-SPを正式採用（MARI様決定）。MT.SUMI Aura FGとの比較検討を経て決定。詳細な検討記録は下記「Fire — Wood Stove 選定記録」を参照（MARI様のご指示により、通常の一行要約ルールの例外として詳細を保持）。 |

---

## Fire — Wood Stove 選定記録（2026-09-26、詳細保持）

**注記**：本セクションは、CZ-001の通常運用（Candidateが確定した時点でUnder Considerationを削除しDecision Logへ一行要約する）の例外として、MARI様のご指示により両候補の詳細な検討記録をそのまま保持するものである。

**決定**：FIREGRAPHIX BLISS-SPを正式採用（Status: Essential、MD-004: FIR-036〜FIR-042）。

**最終比較表（OP-002 Design Bible Fire Domain 4軸）**

| 評価軸 | MT.SUMI Aura FG | FIREGRAPHIX BLISS-SP |
|---|---|---|
| Form | 洗練された機能美、多次燃焼構造 | 職人手作業のフロントフェイス・ハンドル、所有欲を掻き立てる意匠 |
| Flame Aesthetics | フルガラス3面窓、炎を遮らない | 前面のみガラスだが、エアカーテン機構による「オーロラの炎」（ブランド公式呼称） |
| Ease of Clean-up | 耐火煉瓦を外すと底面に穴が現れ灰を掃ける（公式動画で確認） | ロストル形状改良で灰が捨てやすい（メーカー公称、直近マイナーチェンジ） |
| Transport | 標準セット＋延長煙突1本で足りるが、ガードは庫内に入らず別携行確定 | 延長・トップ・ガードまで庫内収納可能（公式資料確認済み）。庫外はスタンドのみ、本体と同一バッグへの収納見込み |

**Aura FG側の検討詳細（不採用・比較参考として保持）**

- 候補：Mt.SUMI AURA FG（ステンレス版基準）
- 本体スペック：燃焼室内寸W41×D32.5×H22cm、標準煙突Φ80mm×325mm（有効270mm）×8本継ぎ、使用時最大高さ（煙突＋本体）2.85m
- ヘロスシェルター（SHL-004）運用時の必要高さ：煙突穴まで約2.3m
- 屋根面クリアランス60cm基準で計算：標準8本のみでは離隔55cmとなり5cm不足。追加1本（Mt.SUMI純正煙突、¥1,690）で離隔82cmとなり基準クリア
- 煙突ガード（Mt.SUMI製、Φ140mm×530mm）：燃焼室内寸との対角線計算（約52.3cm）、および高さ方向の残り余白（約60mm）から、庫内収納は構造的に不可と判断。バッグとは別携行が確定
- スパークアレスター：Mt.SUMI純正品は確認できず、汎用品での代替が必要と判明
- 灰処理：公式動画で耐火煉瓦を外すと底面に穴が現れ、小箒で灰を掃ける仕様を確認

**BLISS-SP側の検討詳細（採用・確定記録）**

- 本体：FIREGRAPHIX BLISS-SP、W429×H359×D535mm、16kg、煙突径Φ106、薪長35cm、¥107,800（MD-004: FIR-036）
- スタンド：アルミポータブルスタンド（FG057）、4分割式、組立時W436×H255×D395mm、2.5kg、¥30,800（FIR-037）
- 基本煙突：オーバーレイチムニー（FG004）、入れ子式5分割、収納時350×Φ108mm、¥18,700（FIR-038）
- 延長煙突：オーバーレイチムニー80・5連（FG017）、収納時350×Φ82mm、使用時1550mm、¥16,500（FIR-039）。標準＋延長を合わせるとヘロスの必要高さ2.3m・60cmクリアランス基準を計算上クリア
- トップ：チムニートップ フレキシブル（FG024）、Φ67〜80mm対応・全煙突種に取付可、¥6,600（FIR-040）
- ガード：スライドチムニーガード700（FG013）、Φ67〜106mm対応、使用時70cm／収納時39cm、BLISS-SP炉内収納可（公式明記）、¥14,300（FIR-041）
- 収納バッグ：ソフトコンテナL（FG034）、内寸610×450×400mm、本体専用設計、¥14,300（FIR-042）
- 総額：¥209,000
- 庫内収納：FIREGRAPHIX公式パッキング図により、基本煙突・延長煙突・トップ・ガード一式がすべて庫内（炉内）に収納可能であることを確認。庫外に出るのはスタンドのみ
- スタンド収納：分解したアルミポータブルスタンドをソフトコンテナL内で本体の下に敷く形での同梱を検討。公式の分解時サイズ記載はないが、同社の鉄製旧型スタンド（FG002）の実測値（収納時330×434×厚み9mm）から類推し、寸法上は収納可能と推定（高さ・幅・奥行きいずれも計算上矛盾なし。ただし公式数値ではなく類推である旨を明記）

---

# SSOT

各ゾーンの評価哲学・比較記録・決定理由に関する正式情報は、**CZ-001 Deliberation Dossier**を基準とする。

Equipment自体のBrand／Product／Status／Material等の登録情報は、引き続き**MD-004 Equipment Registry**をSingle Source of Truthとする。CZ-001はMD-004の登録ルールを変更せず、その意思決定背景を補完する。

---

# Version History

| Version | Date | Summary |
|---|---|---|
| 1.0 | 2026-09 | 初回ドラフト（PX-007 Fire Codexとして作成）。Fire Domain Evaluation Criteriaを確立し、FIR-019 vs FIR-020の試験比較を記録。 |
| 2.0 | 2026-09 | 文書をFire単独からCoffee以外の全ゾーン横断の検討支援文書「Deliberation Codex」へ再定義。Zone Evaluation Philosophy（恒久）とUnder Consideration（可変）を分離。 |
| 2.1 | 2026-09 | TP-004 Version 7.14と連動し、Candidate段階の具体的製品情報を全てPX-007へ移管。FUR-022a/b、FUR-024a〜d、FIR-020（FIR-019へ統合）、LGT-041の具体情報をUnder Considerationへ反映。ARM-004はプロジェクトオーナーの判断により購入決定（Essential）となったため、Under Considerationには含めず、Decision Logへ記録しTP-004に詳細を残置。ファイルをPX-007_Fire_Codex.mdからPX-007_Deliberation_Codex.mdへリネーム。 |
| 2.2 | 2026-09-16 | プロジェクトオーナーの指示に基づき「Confirmed — Purchase Pending」セクションを新設。Coffee Domainを除く全ゾーンでStatus = Essentialとなっている全Equipment（Furniture 2件、Light 4件、Aroma 3件、Storage 7件、Fire 1件）を一覧化。STR-001（Shellcon 01）のStatus訂正（Owned→Essential、TP-004 v7.15）を反映。本セクションは購入リストアーティファクトのソースとして使用する。Purpose・Relationshipを3カテゴリ構成へ更新。 |
| 2.3 | 2026-09-17 | MARI様のご購入報告（STR-001／LGT-015／STR-017）を受け、TP-004側のStatus更新（Essential→Owned）と連動して「Confirmed — Purchase Pending」から該当3行（Light: LGT-015、Storage: STR-001・STR-017）を削除。 |
| 2.4 | 2026-09-18 | TP-004 Version 7.28（Furniture Domain番号整理）と連動し、FUR-020参照を全てFUR-021へ更新。 |
| 2.5 | 2026-09-19 | Document Header の Version 欄が「2.3」のまま更新されておらず、本Version History の最終行（2.4）と不一致であったため、Version欄を2.4へ同期した上で、本行の追加により2.5へ更新。内容面の変更は無し。 |
| 2.6 | 2026-09-19 | MD-004 Version 7.34（Aroma番号入替）と連動。SCENT TOWERのIDをARM-004からARM-003へ更新（Under Considerationの注記、Confirmed — Purchase Pendingの表、Decision Log）。Filoméla INCENSE CHAMBER Tokyo LimitedはStatusがEssentialからUpgradeへ変更（新ID: ARM-004）となったため、Confirmed — Purchase Pending（Aroma）から除外し、Decision Logへ記録。Version 2.1・2.2の過去行は歴史的記録として遡及修正しない。 |
| 2.7 | 2026-09-19 | MD-004 Version 7.36（Furniture Domain番号整理・二回目）と連動し、FUR-022→FUR-032、FUR-023→FUR-033、FUR-021→FUR-031（2箇所）、FUR-024→FUR-034参照を更新。 |
| 2.8 | 2026-09-19 | MD-004 Version 7.38（Fire Domain番号整理）と連動し、FIR-019→FIR-030（Fire Pit見出し・Confirmed — Purchase Pending表）、FIR-014→FIR-025・FIR-012→FIR-023（Confirmed — Purchase Pendingの表、Parent表記）参照を更新。旧FIR-020（BLISS-SP）に関するNoteを、MD-004側で当該レコード自体が削除されたことを反映した記述へ更新。Version 1.0・2.1の過去行は歴史的記録として遡及修正しない。 |
| 2.9 | 2026-09-20 | MD-004 Version 7.25で新設されたShelter Domain（現在SHL-001〜SHL-005、すべてOwned）が、本書の対象ゾーン表記に反映されていなかったため補完。Purpose（対象ゾーン・Confirmed — Purchase Pendingの対象）へShelterを追加し、Zone Evaluation Philosophy・Under Consideration・Confirmed — Purchase Pendingへ Shelter 見出しを新設（いずれも現時点で該当項目なし）。Version 1.0〜2.8の過去行は歴史的記録として遡及修正しない。 |
| 3.0 | 2026-09-24 | Volatility Restructureにより、Zone Evaluation Philosophy（恒久）の各ドメイン節をOP-002 Design Bible §Design Domainsへ逐語移設し、本節を参照1行へ置換。責任範囲の変更のためMajor Version。 |
| 2.10 | 2026-09-20 | MD-004 Version 7.37（Storage Domain番号整理）と連動した点検で、Confirmed — Purchase Pending の Storage 表に、MD-004で Status = Essential でありながら未掲載だった STR-027（KAZE_TO_MORI × WINDY AND RAINY Folding Wire T-box 全面コンプリートセット。旧STR-028）を追加。表の収録は、MD-004 の Essential 全13件（Coffee除く）と一致した。 |
| 2.11 | 2026-09-22 | MD-004 Light Zone再編（LGT-016・018〜020のLGT-035子化、LGT-027・028のLGT-036子化、AIR LIGHT群のa/b/c/d表記化、LGT-058クラッシュアイスのLGT-003移設に伴うLGT-003〜057全体繰り下げ）と連動し、Confirmed — Purchase Pending の Light 表を更新：LGT-037→LGT-038（RT-01AC01 / ECHO LAMP）、LGT-038→LGT-039（DOME LOOK）、LGT-039→LGT-040（Pivotshade）。 |
| 2.12 | 2026-09-22 | MD-004 Version 7.49（Light Domain再修正：LGT-055〜058削除、LGT-003ブランド訂正、革シェード〈LGT-036〉のParent/Child解消、Glass Shade & Wood Stand Set/MMM Pocket ShadeのLGT-016子化、全体再連番）と連動し、Confirmed — Purchase Pending の Light 表を更新：LGT-038→LGT-048（RT-01AC01 / ECHO LAMP）、LGT-039→LGT-050（DOME LOOK）、LGT-040→LGT-052（Pivotshade）。 |
| 2.13 | 2026-09-23 | MD-004 Version 7.50（LGT-017のLGT-016子化解消、LGT-018をOTEBO CRAFTS BABELへ差し替え、LGT-018a/018bをLGT-019a/019bへ改番、以降のLight Domain番号を1つずつ繰り下げ）と連動し、Confirmed — Purchase Pending の Light 表を更新：LGT-048→LGT-049（RT-01AC01 / ECHO LAMP）、LGT-050→LGT-051（DOME LOOK）、LGT-052→LGT-053（Pivotshade）。 |
| 2.14 | 2026-09-23 | MD-004 Version 7.51（LGT-018/BABELの独立親化、LGT-034〜046ブロックのLGT-017直後への移動と並べ替え、AIR LIGHT群の4個単位グループ化、全体再連番）と連動し、Confirmed — Purchase Pending の Light 表を更新：LGT-049→LGT-040（RT-01AC01 / ECHO LAMP）、LGT-051→LGT-041（DOME LOOK）、LGT-053→LGT-042（Pivotshade）。 |
| 2.15 | 2026-09-23 | MD-004（Version 7.53）との番号照合に基づき、プロジェクトオーナーの指示で参照を訂正。Furniture：Winter Top Quilt FUR-032→FUR-033、Winter Sleeping Mat FUR-033→FUR-034、Pad Sheet FUR-034→FUR-035、マット部参照 FUR-031→FUR-032（Under Consideration・Confirmed — Purchase Pending表）。Light：Portable LED Lantern（wildingout LF1984）の参照を削除済みの旧LGT-041から、空き枠LGT-043への充当検討へ変更。Storage：Wood Board（Oak）STR-014→STR-015、Wood Board（Walnut）STR-016→STR-018（Parent: STR-016）、Butterfly Under Shelf STR-019→STR-021（Parent: STR-019）。Fire：Fire Pit見出し・NoteをFIR-030（削除済み）からMD-004 Version 7.53新設の空き枠FIR-036へ更新。 |
| 2.16 | 2026-09-23 | MD-004（Version 7.53）を正とした照合に基づき、Confirmed — Purchase Pending を訂正：Storage表のFolding Wire T-box 全面コンプリートセットをSTR-027→STR-030へ更新。Light表に、MD-004でStatus = Essentialでありながら未掲載だったLGT-017（OTEBO CRAFTS BABEL、MD-004 Version 7.50で登録）を追加。 |
| 2.17 | 2026-09-23 | MD-004 Version 7.54と連動。Under ConsiderationからWinter Top Quilt（FUR-033）を削除し、Decision Logへ「Snow Peak ダウン システムオフトン（FUR-032）採用・FUR-033 Retired」を記録。Light欄の「LGT-028グループの親子構造は据え置き」の注記を削除（該当グループはMD-004上に存在しないため。プロジェクトオーナー確認）。 |
| 3.1 | 2026-09-24 | MARI様のご指摘に基づき、OP-008 §11 Naming Conventionへ新設された文書名重複禁止ルールに伴い、タイトルをDeliberation CodexからDeliberation Dossierへ変更（BR-002 Barista Canonとの語重複を解消）。ファイル名もCZ-001_Deliberation_Dossier.mdへ変更。Version History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持。内容（検討記録そのもの）に変更はない。 |
| 3.2 | 2026-09-25 | MD-004 Version 7.56（Snow Peak公式ECサイト・価格.com・campreview.jp等の一次情報により、FUR-032の正しい型番はBD-070＝ワイドマットセットであると確定）と連動し、Confirmed — Purchase Pending の Furniture 表を「スリムマットセット（BD-060）」から「ワイドマットセット（BD-070）」へ訂正。Decision Log内の2026-09-23付の行（FUR-033関連）にある「スリムマットセット」表記は、当時の記録として遡及修正しない。 |
| 3.3 | 2026-09-25 | MARI様のご指摘に基づき、Fire節の見出し誤り「Fire Pit」を「Wood Stove／薪ストーブ」へ訂正。焚き火台は既にFIR-001（RODAN BRICK、Owned）で充足済みであり、本検討中の候補（MT.SUMI Aura FG、FIREGRAPHIX BLISS-SP）はいずれも薪ストーブ（二次燃焼式ポータブルストーブ）であることをウェブ一次情報で確認した（MARI様確認）。MD-004 Version 7.57・CZ-002 Vigil Protocol Version 3.1と連動。 |
| 3.4 | 2026-09-25 | MARI様のご指示に基づき、Storage Under Considerationへ新規記載。STR-019 Container Bridge Frame（MD-004: STR-034としてCandidate登録）の保護ケース検討を追加。市販のノデルデザイン純正Tactical Bag（AS2OV）をサイズ適合の妥協候補として記録。MD-004 Version 7.58と連動。 |
| 3.5 | 2026-09-25 | MARI様のご指示に基づき、Furniture Under ConsiderationのWinter Sleeping Mat（FUR-034）を、ブランド調査未着手の空欄から3候補比較（Zライトソル／NEMOスイッチバック／BLACK ZONE MAT）へ更新。幅77cm×2枚連結に対し重ねずに敷く「隙間許容案」を仮登録。フルカバー案（116cm幅マット2枚を重ねる配置）は、重なり部分の段差による寝心地悪化が判明したため検討経緯として記録の上で棄却。 |
| 3.6 | 2026-09-26 | MARI様のご指示に基づき、Winter Sleeping Mat（FUR-034）のStatus・Decisionを更新し、BLACK ZONE MAT×2を暫定最有力候補（仮確定）として明記。MD-004側のStatus更新（Candidate→Essential）・Confirmed — Purchase Pendingへの追加は、正式な購入決定を待って別途行う。候補①②（Zライトソル・NEMOスイッチバック）は比較参考として引き続き保持。 |
| 3.7 | 2026-09-26 | MARI様のご決定に基づき、Fire — Wood Stove検討（MT.SUMI Aura FG vs FIREGRAPHIX BLISS-SP）を正式決定。FIREGRAPHIX BLISS-SPを採用（MD-004 Version 7.59・FIR-036〜042と連動）。Under Consideration（Fire）を空欄化し、Decision Logへ記録の上、通常運用の例外としてMARI様のご指示により両候補の詳細な検討記録を「Fire — Wood Stove 選定記録」として新設・保持。Confirmed — Purchase Pending（Fire）へFIR-036〜042の7行を追加。 |
| 3.8 | 2026-09-26 | ヘッダーStatus値『Official』をOP-008 §9.2準拠の『Active』へ統一。 |

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、PX-007からCZ-001へ番号を変更した。本文中の他文書参照（TP-004等）を新ID体系へ更新した。Version History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持した。内容（Ver.2.3）に変更はない。旧ID: PX-007。2026-09-24付でタイトルをDeliberation CodexからDeliberation Dossierへ変更した（Ver.3.1参照）。

---

# End of Document

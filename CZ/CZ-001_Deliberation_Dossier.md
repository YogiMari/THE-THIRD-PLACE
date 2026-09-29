# CZ-001 Deliberation Dossier

# Document ID

CZ-001

# Document Title

Deliberation Dossier

# Version

3.22

# Status

Active

# Authority

SSOT

---

## Purpose

CZ-001 Deliberation Dossierは、Coffee Domain（BR-002管轄）を除く全ゾーン（Furniture／Light／Aroma／Storage／Fire／Shelter）における、検討中ギアの意思決定を支援する文書である。

本書は3種類の内容を管理する。

* **Under Consideration**（可変）：現在検討中のギアの具体的製品情報・比較・評価記録。MD-004側のステータスが確定（Candidate → Essential/Owned）した時点で、当該記載を空欄化する。
* **Confirmed — Purchase Pending**（可変）：製品・ブランドは確定済み（MD-004側のStatus = Essential）だが、まだ所有していないEquipmentの一覧。Coffee Domainを除く全ゾーン（Furniture／Light／Aroma／Storage／Fire／Shelter）が対象。本セクションは、購入リスト（買い物タスク管理）アーティファクトのソースとして使用する。
* **Decision Log ＋ 詳細記録**（恒久）：確定・削除した項目の一行要約（Decision Log）と、不採用候補とその理由を含む詳細な比較内容（詳細記録）。2026-09-27付でCZ-001の標準運用となった。KN-001 Heritage Chronicle発行時の一次資料として使用する。

各ゾーンのZone Evaluation Philosophy（評価哲学・評価軸）は、Ver.3.0でOP-002 Design Bible §Design Domainsへ移設済みである。CZ-001内には参照1行のみを保持する（後掲「Zone Evaluation Philosophy」節参照）。

### MD-004との役割分担

* MD-004：Brand／Product／Status／Material等のSingle Source of Truth。Status = Candidateの間は、Brand / Productを「Unconfirmed」とする。
* CZ-001：Candidate段階の具体的な製品名・ブランド・比較評価・検討経緯（Under Consideration）、およびEssential段階の購入待ちEquipment一覧（Confirmed — Purchase Pending）を保持する。

Candidateが確定（Essential/Owned）した時点でUnder Considerationから削除し、Decision Logへ一行要約を残す。あわせて、不採用候補とその理由を含む詳細な比較内容を、Decision Log直下の「詳細記録」として恒久的に保持する（一行要約のみで、詳細を破棄することはしない。2026-09-27付でCZ-001の標準運用となった）。この詳細記録は、KN-001 Heritage Chronicle発行時の一次資料として使用する。Essentialになったアイテムは同時にConfirmed — Purchase Pendingへ追加し、購入完了（Owned）した時点でそこから削除する。


**比較検討の必須化（2026-09-29、MARI様のご決定。N-12）**：MD-004へEssentialとして登録するEquipmentは、候補が1つしか想定されない場合も、必ず本書のUnder Considerationへ掲載し、他の候補がないかを確認してから決定する。確認の結果、比較候補がなかった場合は、その旨と採用理由をDecision Logへ記録する。本規則の制定前に比較を経ずに登録されたFUR-036は、さかのぼって比較を行う（Status = Essentialのまま。2026-09-30、比較の結果FUR-036の継続採用を決定。Decision Log参照）。

---

## Relationship

```
CZ-001 Deliberation Dossier
│
├─ Zone Evaluation Philosophy（恒久）→ OP-002 Design Bible §Design Domainsへ移設済み（Ver.3.0）。CZ-001には参照1行のみ保持
│
├─ Under Consideration（可変）
│       │ 検討が深まる
│       ▼
│  MD-004 Status更新（Candidate → Essential）
│       │
│       ▼
│  Under Considerationから削除 → Decision Logへ一行記録 + 詳細記録を保持
│       │
│       ▼
│  Confirmed — Purchase Pendingへ追加
│       │
│       │（将来、買い替え検討が発生）
│       ▼
│  CZ-001 Under Considerationへ再登場
│
├─ Confirmed — Purchase Pending（可変）
│       │ 購入完了
│       ▼
│  MD-004 Status更新（Essential → Owned）
│       │
│       ▼
│  Confirmed — Purchase Pendingから削除
│
└─ Decision Log ＋ 詳細記録（恒久）
        │
        │（MARI様のご意向に応じて随時）
        ▼
   KN-001 Heritage Chronicleとして
   Artifact発行（一次資料からの編集・執筆）
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

現時点でCandidate項目なし（Winter Sleeping Mat〈FUR-034〉・Pad Sheet〈FUR-035〉は正式決定済み。Decision Logおよび下記「Furniture — Winter Sleeping Mat / Pad Sheet 選定記録」を参照。2026-09-28、BLACK ZONE MAT×2・HOTEL CAMPS リバーシブルホットカバー×2で決定。FUR-036はさかのぼっての比較を終え、2026-09-30に継続採用を決定。下記「Furniture — Ofuton Warm Adapter 再比較記録」を参照）。

---

## Light

### Portable LED Lantern（MD-004未登録）

**Status**：Candidate（比較対象なし・保留中）

検討中製品：wildingout「LF1984」。Brown、Walnut。

Airlightを使わない独立したLEDランタンのため、Airlightシェード用の空き枠LGT-043には充当しない。検討中は本文書（とCZ-002 Watch List）にのみ記載し、MD-004へは登録しない。購入した時点で、MD-004 Light DomainにLGT-04番台の新規IDを付番して登録する（2026-09-29、MARI様のご決定）。

**Hold Reasons**（2026-09-29、MARI様のご説明）：LF1984はAirlightを使わない、独立したLEDランタンである。見た目はTHE THIRD PLACEに非常に合うが、次の2点が解決していないため決定を保留している。

- 独立した充電管理が必要になる（Airlight本体と充電を共通化できない）。
- 積載時の収納先が決まらない（充電が必要な物を入れるSTR-037 Snow Peak Quilted Ripstop Duffleに入らない）。

### 38-kT Shade（MD-004: LGT-017a）

**Status**：Candidate（2候補を比較中）

LGT-017 OTEBO CRAFTS BABEL（Essential）の上に載せる38-kT用シェード。どちらも折りたたみ式で、フィールドでの設営時に開いてBABELの上に載せて使う。枠は1つのため、どちらか一方を選ぶ。2026-09-29、MD-004のLGT-017a／LGT-017bから本節へ移した（MD-004 Version 7.77）。

| 候補 | ブランド | 評価 |
|---|---|---|
| メッシュシェード | neru design works | Color：Copper、Material：Copper（Mesh Fabric）。THE THIRD PLACEに相応しい（MARI様） |
| POCKET SHADE M（neru design works柄） | CALMA STORE × neru design works | Color：Khaki、Material：Fabric。THE THIRD PLACEに相応しい（MARI様） |

**Decision**：未決定（MARI様が検討中）。

---

## Aroma

現時点でUnder Consideration項目なし（ARM-003は購入決定済み。Decision Log参照）。

---

## Storage

### Carrying Case for STR-019 Container Bridge Frame（MD-004: STR-034）

**Status**：Under Evaluation

STR-019 Container Bridge Frame（nodel design、830×383×50mm、黒皮鉄）は、角があり周囲を傷つける恐れがあるため、保護ケースが必須と判明（MARI様確認）。将来的に未購入のFUR-026 Butterfly Table M Black Look（nodel design、Upgrade）との共用も視野に入れている。市販品を条件に、ブランド不問・デザイン重視で探索中。

**Search Criteria**（2026-09-29、MARI様のご指示）

- Color：Blackを最優先。次点でGray等のモノトーン、その次にBrown系。
- Material：優先度は低い。ただし安っぽく見えないものに限る。
- Size：フレーム（830×383×50mm）はマチがほとんど無いため、薄型のケースで可。内寸の横幅（830mm以上）と高さ（383mm以上）が合えば収まる（2026-09-29、MARI様のご指示）。

| 候補 | ブランド | 評価 |
|---|---|---|
| Tactical Bag / M【+AS2OV】 | nodel design × AS2OV | ノデルデザイン純正、Butterfly Table Mを felt bag ごと2枚まで収納可能な公式設計（1000×500×50mm）で、サイズ・共用要件は最適。ただし素材がBllisstic CORDURA・カラーがSandで、Design Bibleの素材・色リストに非該当。MOLLE仕様のタクティカルな意匠もTHE THIRD PLACEの世界観と不調和。現在SOLD OUT。サイズ面の妥協候補として保持するが、美意識面で不採用寄り |

**Unresolved Gaps**：上記Search Criteriaを満たし、かつ830mm超の長さに対応する既製品がまだ見つかっていない。以下は、Search Criteria設定前（黒・茶／帆布・レザーを条件としていた時点）の探索結果である。素材を理由に除外した候補（スキーケース等）は、素材の優先度が下がったため、色と質感の条件で再評価の対象とする。asimocrafts×横濱帆布鞄系（FIR-005・FIR-007と同系統）は最大68cm止まり、TEMBEAは該当サイズ未確認、レザーキャディバッグ系は円筒形状で不適合、スキーケースは素材が不適合と判明済み。FIR-007（table_no_kaban）の流用も検討したが、収納対象であるIron Table本体の公式収納時サイズが665mmであることから、長さ不足と判断。

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
| FUR-034 | BLACK ZONE MAT | BlackishGear | 数量2 |
| FUR-035 | リバーシブル ホットカバー（コットカバー） | HOTEL CAMPS | 数量2 |
| FUR-036 | オフトン ウォームアダプター（BD-066） | Snow Peak | 数量2 |

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

確定・削除した項目を一行要約で記録する。あわせて、不採用候補とその理由を含む詳細な比較内容を、各行に対応する「詳細記録」として本節直下（またはリンク先の専用節）に恒久的に保持する（2026-09-27付でCZ-001の標準運用となった。詳細記録はKN-001 Heritage Chronicle発行時の一次資料として使用する）。

| Date | Domain | Item | Decision |
|---|---|---|---|
| 2026-09 | Aroma | ARM-003 Vertical Diffuser | UNIT/04 × KUNST・BAUM SCENT TOWERを正式決定（Status: Essential）。詳細はMD-004参照。（決定当時のIDはARM-004。2026-09-19のMD-004 Version 7.34で番号入替） |
| 2026-09-19 | Aroma | ARM-004 Incense Chamber | Filoméla INCENSE CHAMBER Tokyo LimitedのStatusをEssentialからUpgradeへ変更（MD-004 Version 7.34、MARI様のご指示）。Confirmed — Purchase Pendingから除外。旧ID: ARM-003。 |
| 2026-09-23 | Furniture | FUR-033 Winter Top Quilt | 候補（Enlightened Equipment Accomplice／UGQ Outdoor Tango Duo）の検討を終了。冬用キルトはSnow Peak ダウン システムオフトン スリムマットセット（FUR-032）を採用（プロジェクトオーナー決定）。FUR-033はMD-004 Version 7.54でRetired（FUR-032へ統合）。※本行は標準運用化（2026-09-27）以前の記録のため、詳細記録は保持していない。 |
| 2026-09-26 | Fire | Wood Stove（FIR-036〜042） | FIREGRAPHIX BLISS-SPを正式採用（MARI様決定）。MT.SUMI Aura FGとの比較検討を経て決定。詳細な検討記録は下記「Fire — Wood Stove 選定記録」を参照。 |
| 2026-09-27 | Furniture | FUR-036 Ofuton Warm Adapter | Snow Peak オフトン ウォームアダプター（BD-066）を正式決定（Status: Essential、数量2、MARI様決定）。CZ-001での事前検討記録は無く、MD-004へ直接新規登録された。詳細はMD-004参照。 |
| 2026-09-27 | Storage | ShellCon25①／②のBedding Module転用検討 | ShellCon25①単独、および①＋②の2箱体制の両方で「FUR-032（掛け布団収納ケース×2・マット収納ケース×2）＋FUR-036（ウォームアダプター×2）」全6点の収納可否を検証したが、床面積不足により不採用。既存の収納割当（①＝Bedding Module、②＝Light & Aroma Module）を維持。詳細は下記「Storage — Bedding Module収納検証」を参照。 |
| 2026-09-28 | Furniture | Winter Sleeping Mat（FUR-034）／Pad Sheet（FUR-035） | BLACK ZONE MAT×2（FUR-034）・HOTEL CAMPS リバーシブルホットカバー×2（FUR-035）を正式決定（Status: Essential、MARI様決定）。MD-004 Version 7.64と連動。詳細な検討記録は下記「Furniture — Winter Sleeping Mat / Pad Sheet 選定記録」を参照。 |
| 2026-09-29 | Furniture | FUR-036 Ofuton Warm Adapter | §Purpose「比較検討の必須化」（N-12）の制定に伴い、比較を経ずに登録されていたFUR-036を、Status = Essentialのままさかのぼって比較する対象としてUnder Considerationへ掲載（MARI様決定）。 |
| 2026-09-30 | Furniture | FUR-036 Ofuton Warm Adapter | さかのぼっての比較（Sea to Summit Reactor Fleeceweight／Coleman フリースインナー 封筒型）の結果、FUR-032専用設計でマットへ固定できる唯一の候補であるSnow Peak オフトン ウォームアダプター（BD-066）の継続採用を決定（Status: Essentialのまま、MARI様決定）。詳細な検討記録は下記「Furniture — Ofuton Warm Adapter 再比較記録」を参照。 |

---

## Fire — Wood Stove 選定記録（2026-09-26、詳細保持）

**注記**：本節は、Decision Logの該当行に対応する詳細記録（不採用候補とその理由を含む）である。2026-09-27付でCZ-001の標準運用となった（従来は例外運用だった）。

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

## Storage — Bedding Module収納検証（2026-09-27、詳細保持）

**注記**：本節は、Decision Logの該当行に対応する詳細記録（不採用理由を含む）である。

**決定**：ShellCon25①／②をBedding Module（寝具収納）へ転用する案は不採用。既存の収納割当（ShellCon25①＝Bedding Module、ShellCon25②＝Light & Aroma Module〈MD-001でVerified済み〉）を維持する。

**検討の発端**：FUR-032（ダウン システムオフトン ワイドマットセット、掛け布団収納ケース×2＋マット収納ケース×2）とFUR-036（オフトン ウォームアダプター×2）の合計6点が、ShellCon25①（内寸405×290×195mm）単体に収まるかを検証したのが起点。単体では収まらないと判明したため、ShellCon25②（同サイズ）も動員した2箱体制での収納も追加検証した。

**アイテムの床面積・高さ（円柱状収納袋、寝かせて1層で収める前提）**

| アイテム | 床面積（直径×長さ） | 高さ（直径） |
|---|---|---|
| 掛け布団収納ケース（Q） | 700cm² | 20cm（**内寸19.5cmを0.5cm超過**） |
| マット収納ケース（M） | 390cm² | 13cm |
| ウォームアダプター（W） | 400cm² | 16cm |

**容量計算**

- 箱1個あたりの床面積：40.5×29.0＝1,174.5cm²
- 箱2個合計：2,349cm²
- 全アイテム（Q×2、M×2、W×2）の床面積合計：700×2＋390×2＋400×2＝2,980cm²
- **不足**：2,980cm² − 2,349cm² ＝ 約631cm²（約27%不足）。2箱体制でも全6点は収まらない。

**組み合わせパターンの検証（2箱体制）**

- パターンA（掛け布団を諦める）：箱①＝M×2（66%）、箱②＝W×2（68%）→どちらも余裕で収まるが、Q×2の行き場がなくなる
- パターンB（掛け布団を活かす）：箱①＝Q×1＋M×1（93%）、箱②＝Q×1＋M×1（93%）→Qは2個とも収まる見込みだが、W×2の行き場がなくなる
- **結論**：どの組み合わせでも、必ず2点が行き場を失う。6点全部を2箱に収める組み合わせは存在しない。

**付随する制約**：掛け布団収納ケース（Q）は直径20cmで、箱の内寸19.5cmを単体でも0.5cm超過しており、この時点で常にリスクを抱えている。また、ShellCon25②は現状Light & Aroma Module（Filoméla INCENSE CHAMBER、DEVADEVA、KURASHI MADE DOME LOOK、RT-01AC01／ECHO LAMP、VALO SHADE、TARP to TARP×Lampup Glass Shade、MMM Pocket Shade等）の固定収納先としてMD-001でVerified済みであり、転用する場合はこれらの照明・香り系装備一式の新しい収納先を別途用意する必要がある。

**MARI様のご判断**：「結局全部入らないのなら、やめておく」として転用を見送り。ShellCon25①②とも既存の収納割当のまま据え置く。

---

## Furniture — Winter Sleeping Mat / Pad Sheet 選定記録（2026-09-28、詳細保持）

**注記**：本節は、Decision Logの該当行に対応する詳細記録（不採用候補とその理由を含む）である。

**決定**：Winter Sleeping Mat（FUR-034）はBlackishGear BLACK ZONE MAT×2、Pad Sheet（FUR-035）はHOTEL CAMPS リバーシブル ホットカバー×2を正式採用（いずれもStatus: Essential）。

**Winter Sleeping Mat（FUR-034）比較表（2026-09-26仮確定時点）**

| | 候補① Zライトソル | 候補② NEMOスイッチバック | 候補③ BLACK ZONE MAT（**採用**） |
|---|---|---|---|
| ブランド | Therm-a-Rest | NEMO | BlackishGear |
| 幅×長さ×厚さ | 51×183×2.0cm | 51×183×2.3cm | 60×185×2.0cm |
| R値 | 2.0 | 2.0 | 1.9（第三者試験報告書あり、GB/T 10294-2008・ASTM F3340-22準拠） |
| 折り畳み方式 | 蛇腹 | 蛇腹 | 蛇腹 |
| 収納サイズ | 51×13×14cm | 51×13×14cm | 15×60×15cm |
| 重量 | 410g | 415g | 380g |
| カラー | Silver/Sage（Black展開なし） | Violet/Orange（Black展開なし） | 両面ブラック |
| 実勢価格 | 約¥8,000 | ¥9,500（税抜） | ¥3,564（セール価格） |
| 実績 | 定番・登山用途での耐久実績が豊富 | 定番・厚みでやや優位 | 2025年Makuake発の新興ブランド、レビュー7件のみ |

**配置前提**：お一人様1枚ずつ（数量2）、FUR-032マット幅の左右中央に揃えて敷く。カバー率は幅比で候補①②が約66%（51/77cm）、候補③が約78%（60/77cm）。残りは隙間として許容し、四隅への滑り止め（面ファスナー等）併用を推奨。

**検討経緯（フルカバー案の棄却）**：154cm幅を1枚または2枚重ねでフルカバーする案（例：CAPTAIN STAG IXPEフォームマット〈ダブル〉116×183cm×2枚を77cmずつずらして重ねる配置）も検討したが、重なり部分（幅78cm相当）で厚さが実質2倍になり段差が生じ、寝心地への悪影響が判明したため棄却。フルカバーを重なりなしで実現する幅154cm級の薄手マットは、2026-09-25時点で発見に至っていない。

**残存リスク**：BLACK ZONE MATはR値の第三者試験データはあるものの、実使用（特に厳冬期）での耐久性実績がまだ乏しい点はリスクとして保持。

**Pad Sheet（FUR-035）比較表（2026-09-27精査時点）**

| | 候補① Therm-a-Rest Synergy Lite Sheet | 候補② WAQ 専用カバー | 候補③ HOTEL CAMPS リバーシブル ホットカバー（**採用**） | 候補④ VISIONPEAKS×NANGA IBUKI BOX SHEETS S |
|---|---|---|---|---|
| Color適合 | Stargazer柄のみ、Black展開なし（不適合） | Black指定可 | **Black×Black指定可**（リバーシブル両面） | Brownのみ、Black展開なし（不適合） |
| サイズ | 未調査 | 約200×70×10cm | 使用時約205×84cm、収納時約30×18cm | 未調査 |
| 適合性 | — | 公式に「WAQ RELAXING CAMP MAT専用」「他製品への適合は確認しておりません」と明記。幅70cm・厚み10cm仕様でTM-089（幅77cm・厚み8cm）とは規格不一致 | 4隅をドローコードで絞ってマットごと固定する汎用ラップ構造。TM-089より長さ+9cm・幅+7cm大きく、絞り込んでフィットさせる設計のため適合可能 | — |
| 素材・機能 | 廃盤の可能性あり | 洗濯機で丸洗い可能 | 表：ポリエステル100%吸湿発熱ボア／裏：ポリエステル70%＋レーヨン30%／中材：アルミシート。断熱・保温・丸洗い可・ブランケット/掛け布団兼用 | NANGAコラボ由来 |
| 重量 | 未調査 | 未記載 | 約750g | 未調査 |
| 公式価格 | 未調査 | ¥3,840 | ¥9,980（hotelcamps.jp公式、2026-09-28確認） | 未調査 |

**配置前提**：TM-089ワイドマット1枚につきHOTEL CAMPS×1枚を被せ、4隅のドローコードで絞って固定する（数量2）。

**不採用理由**：候補②WAQは他社マットへの適合が公式に未確認かつサイズ規格が不一致であり不採用。候補①はStargazer柄のみでBlack展開がなく不適合。候補④はBrownのみでBlack展開がなく不適合。

**一次情報確認**：2026-09-28、hotelcamps.jp公式商品ページ（リバーシブル ホットカバー／コットカバー）にて、正式品名・価格（¥9,980）・サイズ（使用時約205×84cm、収納時約30×18cm）・素材・重量（約750g）を再確認済み。

---

## Furniture — Ofuton Warm Adapter 再比較記録（2026-09-30、詳細保持）

**注記**：本節は、Decision Logの該当行に対応する詳細記録（不採用候補とその理由を含む）である。§Purpose「比較検討の必須化」（N-12）に基づき、比較を経ずに登録されていたFUR-036をさかのぼって比較した。

**決定**：Snow Peak オフトン ウォームアダプター（BD-066、FUR-036）を継続採用（Status: Essential、数量2）。

**比較の基準**：FUR-032 ダウン システムオフトン ワイドマットセットと併用し、冬の保温を底上げするインナー。

| | FUR-036 オフトン ウォームアダプター（**採用**） | Sea to Summit Reactor Fleeceweight | Coleman フリースインナー 封筒型 |
|---|---|---|---|
| 形状 | 長方形（布団型） | マミー型・フード付き・腕の開口あり | 封筒型（長方形） |
| サイズ | 75×180cm | — | 使用時約190×84cm |
| 重量 | 800g | 未確認（同社旧Reactor Fleece Linerは379g） | 約700g |
| 収納サイズ | φ16×25cm | 未確認 | 約φ16×30cm |
| 保温の目安 | 公表なし | 最大+8℃／14°F（メーカー公表） | 公表なし |
| マットへの固定 | 可能（掛け布団と同様に固定できる） | 不可（付属スナップはSea to Summit寝袋用） | 不可 |
| 価格 | ¥7,480（税込） | 未確認 | 未確認 |
| 備考 | FUR-032と同日発売のオプション品 | 風が通りやすい生地のため、隙間風のない場所での使用が前提（メーカー説明） | バンダナデザイン。現行販売の有無は未確認（情報は2022年の記事） |

**不採用理由**：Sea to Summit Reactor Fleeceweightは、寝袋の中に入れる前提のマミー型で、オフトン（掛け布団式）の下では位置が定まらない。Colemanは形状は近いが、マットへ固定できず、現行販売とデザインの適合が確認できない。FUR-036は、FUR-032のために設計され、マットへ固定できる唯一の候補であるため、ずれによる保温効果の低下を避けられる。

**一次情報確認**：FUR-036の仕様・価格はcampreview.jp（2025-10-31、Snow Peak システムオフトン シリーズ紹介記事）、Sea to Summit Reactor Fleeceweightの仕様はseatosummit.com公式商品ページ、Colemanの仕様はhappycamper.jp（2022-08-28）による（2026-09-30確認）。

---

# SSOT

各ゾーンの評価哲学・比較記録・決定理由に関する正式情報は、**CZ-001 Deliberation Dossier**を基準とする。

Equipment自体のBrand／Product／Status／Material等の登録情報は、引き続き**MD-004 Equipment Registry**をSingle Source of Truthとする。CZ-001はMD-004の登録ルールを変更せず、その意思決定背景を補完する。

Decision Logおよびその詳細記録は、**KN-001 Heritage Chronicle**発行時の一次資料として使用される。Heritage Chronicle自体は、決定の都度ではなく、MARI様のご意向に応じて随時Artifactとして発行する（発行記録はDB-001 KN Publication Logへ）。

---

# Version History

| Version | Date | Summary |
|---|---|---|
| — | — | Version 1.0・2.0〜2.17の履歴は archive/CZ-001_Version_History_Archive.md を参照。 |
| 3.0 | 2026-09-24 | Volatility Restructureにより、Zone Evaluation Philosophy（恒久）の各ドメイン節をOP-002 Design Bible §Design Domainsへ逐語移設し、本節を参照1行へ置換。責任範囲の変更のためMajor Version。 |
| 3.1 | 2026-09-24 | MARI様のご指摘に基づき、OP-008 §11 Naming Conventionへ新設された文書名重複禁止ルールに伴い、タイトルをDeliberation CodexからDeliberation Dossierへ変更（BR-002 Barista Canonとの語重複を解消）。ファイル名もCZ-001_Deliberation_Dossier.mdへ変更。Version History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持。内容（検討記録そのもの）に変更はない。 |
| 3.2 | 2026-09-25 | MD-004 Version 7.56（Snow Peak公式ECサイト・価格.com・campreview.jp等の一次情報により、FUR-032の正しい型番はBD-070＝ワイドマットセットであると確定）と連動し、Confirmed — Purchase Pending の Furniture 表を「スリムマットセット（BD-060）」から「ワイドマットセット（BD-070）」へ訂正。Decision Log内の2026-09-23付の行（FUR-033関連）にある「スリムマットセット」表記は、当時の記録として遡及修正しない。 |
| 3.3 | 2026-09-25 | MARI様のご指摘に基づき、Fire節の見出し誤り「Fire Pit」を「Wood Stove／薪ストーブ」へ訂正。焚き火台は既にFIR-001（RODAN BRICK、Owned）で充足済みであり、本検討中の候補（MT.SUMI Aura FG、FIREGRAPHIX BLISS-SP）はいずれも薪ストーブ（二次燃焼式ポータブルストーブ）であることをウェブ一次情報で確認した（MARI様確認）。MD-004 Version 7.57・CZ-002 Vigil Protocol Version 3.1と連動。 |
| 3.4 | 2026-09-25 | MARI様のご指示に基づき、Storage Under Considerationへ新規記載。STR-019 Container Bridge Frame（MD-004: STR-034としてCandidate登録）の保護ケース検討を追加。市販のノデルデザイン純正Tactical Bag（AS2OV）をサイズ適合の妥協候補として記録。MD-004 Version 7.58と連動。 |
| 3.5 | 2026-09-25 | MARI様のご指示に基づき、Furniture Under ConsiderationのWinter Sleeping Mat（FUR-034）を、ブランド調査未着手の空欄から3候補比較（Zライトソル／NEMOスイッチバック／BLACK ZONE MAT）へ更新。幅77cm×2枚連結に対し重ねずに敷く「隙間許容案」を仮登録。フルカバー案（116cm幅マット2枚を重ねる配置）は、重なり部分の段差による寝心地悪化が判明したため検討経緯として記録の上で棄却。 |
| 3.6 | 2026-09-26 | MARI様のご指示に基づき、Winter Sleeping Mat（FUR-034）のStatus・Decisionを更新し、BLACK ZONE MAT×2を暫定最有力候補（仮確定）として明記。MD-004側のStatus更新（Candidate→Essential）・Confirmed — Purchase Pendingへの追加は、正式な購入決定を待って別途行う。候補①②（Zライトソル・NEMOスイッチバック）は比較参考として引き続き保持。 |
| 3.7 | 2026-09-26 | MARI様のご決定に基づき、Fire — Wood Stove検討（MT.SUMI Aura FG vs FIREGRAPHIX BLISS-SP）を正式決定。FIREGRAPHIX BLISS-SPを採用（MD-004 Version 7.59・FIR-036〜042と連動）。Under Consideration（Fire）を空欄化し、Decision Logへ記録の上、通常運用の例外としてMARI様のご指示により両候補の詳細な検討記録を「Fire — Wood Stove 選定記録」として新設・保持。Confirmed — Purchase Pending（Fire）へFIR-036〜042の7行を追加。 |
| 3.8 | 2026-09-26 | ヘッダーStatus値『Official』をOP-008 §9.2準拠の『Active』へ統一。 |
| 3.9 | 2026-09-27 | MARI様のご指示に基づき、Furniture Under ConsiderationのPad Sheet（FUR-035）を更新。公式一次情報（WAQ公式・HOTEL CAMPS公式）調査により、候補②WAQ専用カバーはWAQ製マット専用でありTM-089との規格不一致（サイズ・適合性未確認）と判明。候補③HOTEL CAMPS リバーシブルホットカバー（Black×Black、¥9,980、205×84cm、4隅ドローコード式）をTM-089ワイドマットとのサイズ適合性含め確認の上、暫定最有力候補（仮確定）として明記。MD-004側のStatus更新（Candidate→Essential）・Confirmed — Purchase Pendingへの追加は、正式な購入決定を待って別途行う。候補①②④は比較参考として引き続き保持。 |
| 3.10 | 2026-09-27 | MARI様のご決定に基づき、Snow Peak オフトン ウォームアダプター（BD-066、MD-004: FUR-036、Status: Essential、数量2）をConfirmed — Purchase PendingのFurniture表へ追加し、Decision Logへ記録。本アイテムはCZ-001での事前のUnder Consideration記録を経ずMD-004へ直接新規登録されたため、Under Considerationセクションへの追加・削除は発生しない。 |
| 3.11 | 2026-09-27 | MARI様のご指示に基づき、Decision Logの標準運用を変更。従来「詳細な比較内容そのものは、確定後は保持しない」としていたルールを廃止し、不採用候補とその理由を含む詳細記録を恒久的に保持する運用へ変更（Purpose・Decision Log見出し文・Relationship図を更新）。これに伴い、Wood Stove選定記録（Ver.3.7で「例外」として新設）を標準運用の一例として再定義。あわせてSSOTセクションへ、この詳細記録がKN-001 Heritage Chronicle発行時の一次資料となる旨を明記。Minor Version（運用ルール変更のためMajor Versionとの境界事例だが、既存の記録構造〈Decision Log＋詳細記録節〉自体は変更せず、保持方針の転換のみのためMinor Versionとした）。 |
| 3.12 | 2026-09-27 | MARI様のご依頼に基づき、過去のチャット「Bedding Module収納検証」（2026-09-27）から、ShellCon25①／②をBedding Moduleへ転用する案の検討記録を遡って追記。床面積計算により全6点（Q×2／M×2／W×2）は2箱体制でも収まらないと判明し、転用を不採用としてShellCon25①②とも既存の収納割当を維持した経緯を、Ver.3.11で新設した標準運用（一行要約＋詳細記録）に沿ってDecision LogおよびStorage詳細記録節へ記録。 |
| 3.13 | 2026-09-28 | MARI様のご決定（GitHub Issue #44）に基づき、Winter Sleeping Mat（FUR-034）・Pad Sheet（FUR-035）を正式決定として反映。MD-004 Version 7.64（Status: Candidate→Essential）と連動し、Furniture Under ConsiderationからFUR-034・FUR-035の検討記載を削除、Confirmed — Purchase Pendingへ両ID（BLACK ZONE MAT×2、HOTEL CAMPS リバーシブル ホットカバー×2）を追加。Decision Logへ確定日を記録し、Ver.3.11の標準運用に沿って「Furniture — Winter Sleeping Mat / Pad Sheet 選定記録」を新設して不採用候補の詳細比較を恒久保持。Pad Sheetの価格・正式品名はhotelcamps.jp公式サイトで一次情報確認済み（¥9,980）。 |
| 3.14 | 2026-09-28 | MARI様のご指摘（Issue C-07）に基づき、PurposeとRelationship図を整合。Purposeの管理対象を「Under Consideration／Confirmed — Purchase Pending／Decision Log ＋ 詳細記録」の3項目へ改め、Zone Evaluation PhilosophyはVer.3.0でOP-002 Design Bible §Design Domainsへ移設済みである旨の参照注記へ変更（管理対象の列挙からは除外）。Relationship図もZone Evaluation Philosophyノードへ同旨の注記を追加し、独立ブロックだったDecision Log ＋ 詳細記録をCZ-001ツリーの4本目の枝として統合。あわせてVersion Historyの3.0の行を2.10〜2.17より後（2026-09-24、時系列順）へ並べ替え。構成追加のためMinor Version。 |
| 3.15 | 2026-09-28 | S-10（改訂履歴の圧縮）に基づき、OP-008 §19 Rule DOC-09に従い、Version History のうち Version 1.0・2.0〜2.17を archive/CZ-001_Version_History_Archive.md へ移設した。移設した履歴は原文のまま保持し、要約・削除は行っていない。本文側の検討記録そのものに変更はない。MARI様のご決定に基づく。 |
| 3.16 | 2026-09-28 | 整備バックログ（N-12）対応。Purposeへ「比較検討を経ない登録」の運用（1製品で即決した場合もDecision Logへ一行記録し、Under Considerationと詳細記録は不要）を追記。あわせてPurposeの「4種類の内容」を、実際に列挙されている3種類へ是正。Claude推奨案をMARI様の包括指示に基づき暫定採用。Minor Version。 |
| 3.17 | 2026-09-28 | S-11（ヘッダー形式の統一）に基づき、OP-008 §9（全文書はAuthorityおよびStatusを保持する）に従って、文書冒頭のDocument Information（Document ID／Title／Series／Version／Authority／Status／Owner）を整えた。値はOP-008 §8 Document Seriesのカタログに一致させた。本文の内容に変更はない。Patch Version。MARI様の包括指示（2026-09-28）に基づく。 |
| 3.18 | 2026-09-29 | MARI様のご指示に基づき、Storage Under ConsiderationのCarrying Case for STR-019 Container Bridge Frame（MD-004: STR-034）へSearch Criteriaを追記（Color：Black最優先、次点Gray等のモノトーン、その次にBrown系。Material：優先度は低いが安っぽく見えないもの）。Unresolved Gapsを新しい条件に合わせて改め、素材を理由に除外した候補を再評価の対象とした。Decisionは未決定のまま。 |
| 3.19 | 2026-09-29 | MARI様のご決定・ご説明に基づき、Light Under Considerationを更新。(1) LGT-043のwildingout LF1984について、Airlightを使わない独立したLEDランタンであること、独立した充電管理が必要なことと積載時の収納先（STR-037に入らない）が未解決のため決定を保留していることを記録。(2) MD-004 Version 7.77と連動し、38-kT Shade（MD-004: LGT-017a）の節を新設。メッシュシェード（neru design works）とPOCKET SHADE M（CALMA STORE × neru design works）の2候補をMD-004から移した。どちらも折りたたみ式で、設営時に開いてBABELの上に載せて使う。 |
| 3.20 | 2026-09-29 | 暫定採用項目の個別確認（N-12）。MARI様のご決定に基づき、Version 3.16で暫定採用した「比較検討を経ない登録」（即決時はDecision Logへ一行のみ）を採らず、§Purposeを「比較検討の必須化」（候補が1つでも必ずUnder Considerationへ掲載し、他候補の有無を確認してから決定する）へ改めた。あわせて、比較を経ずに登録されていたFUR-036をStatus = Essentialのままさかのぼって比較する対象としてFurniture Under Considerationへ掲載し、Confirmed — Purchase PendingのNoteとDecision Logへ記録した。Minor Version。 |
| 3.21 | 2026-09-30 | FUR-036のさかのぼっての比較を完了。MARI様のご決定に基づき、Snow Peak オフトン ウォームアダプター（BD-066）の継続採用をDecision Logへ記録し、詳細記録「Furniture — Ofuton Warm Adapter 再比較記録」（Sea to Summit Reactor Fleeceweight・Coleman フリースインナー 封筒型との比較）を新設した。Furniture Under ConsiderationからFUR-036を外し、Confirmed — Purchase PendingのNoteと§Purposeの記述を比較完了に合わせて改めた。Patch Version。 |
| 3.22 | 2026-09-30 | MARI様のご決定・ご指示に基づき、(1) Light Under ConsiderationのLF1984を「LGT-043への充当を検討中」から「MD-004未登録。検討中は本文書とCZ-002にのみ記載し、購入時にLGT-04番台の新規IDを付番」へ改めた。(2) Carrying Case for STR-019（MD-004: STR-034）のSearch CriteriaへSizeを追加（マチはほぼ不要で薄型で可、内寸の横幅830mm以上・高さ383mm以上）。 |

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、PX-007からCZ-001へ番号を変更した。本文中の他文書参照（TP-004等）を新ID体系へ更新した。Version History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持した。内容（Ver.2.3）に変更はない。旧ID: PX-007。2026-09-24付でタイトルをDeliberation CodexからDeliberation Dossierへ変更した（Ver.3.1参照）。

---

# End of Document

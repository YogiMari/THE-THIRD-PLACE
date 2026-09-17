# PX-007 Deliberation Codex

# Document ID

PX-007

# Document Title

Deliberation Codex

# Version

2.3

# Status

Official

---

## Purpose

PX-007 Deliberation Codexは、Coffee Domain（PX-004管轄）を除く全ゾーン（Furniture／Light／Aroma／Storage／Fire）における、検討中ギアの意思決定を支援する文書である。

本書は3種類の内容を管理する。

* **Zone Evaluation Philosophy**（恒久）：各ゾーンの評価哲学・評価軸。ゾーンの性格が変わらない限り、恒久的に保持する。
* **Under Consideration**（可変）：現在検討中のギアの具体的製品情報・比較・評価記録。TP-004側のステータスが確定（Candidate → Essential/Owned）した時点で、当該記載を空欄化する。
* **Confirmed — Purchase Pending**（可変）：製品・ブランドは確定済み（TP-004側のStatus = Essential）だが、まだ所有していないEquipmentの一覧。Coffee Domainを除く全ゾーン（Furniture／Light／Aroma／Storage／Fire）が対象。本セクションは、購入リスト（買い物タスク管理）アーティファクトのソースとして使用する。

### TP-004との役割分担

* TP-004：Brand／Product／Status／Material等のSingle Source of Truth。Status = Candidateの間は、Brand / Productを「Unconfirmed」とする。
* PX-007：Candidate段階の具体的な製品名・ブランド・比較評価・検討経緯（Under Consideration）、およびEssential段階の購入待ちEquipment一覧（Confirmed — Purchase Pending）を保持する。

Candidateが確定（Essential/Owned）した時点でUnder Considerationから削除し、Decision Logへ一行要約を残す。詳細な比較内容そのものは確定後は保持しない。Essentialになったアイテムは同時にConfirmed — Purchase Pendingへ追加し、購入完了（Owned）した時点でそこから削除する。

---

## Relationship

```
PX-007 Deliberation Codex
│
├─ Zone Evaluation Philosophy（恒久）
│
├─ Under Consideration（可変）
│       │ 検討が深まる
│       ▼
│  TP-004 Status更新（Candidate → Essential）
│       │
│       ▼
│  Under Considerationから削除 → Decision Logへ一行記録
│       │
│       ▼
│  Confirmed — Purchase Pendingへ追加
│       │
│       │（将来、買い替え検討が発生）
│       ▼
│  PX-007 Under Considerationへ再登場
│
└─ Confirmed — Purchase Pending（可変）
        │ 購入完了
        ▼
   TP-004 Status更新（Essential → Owned）
        │
        ▼
   Confirmed — Purchase Pendingから削除
```

---

# Zone Evaluation Philosophy（恒久）

## Fire

Fire Domainの機材は、以下4軸で評価する。

1. **Form（意匠美）** — ギア本体・道具そのものの造形的な美しさ
2. **Flame Aesthetics（炎の見え方）** — 燃焼中の炎そのものの視覚的な美しさ
3. **Ease of Clean-up（撃収容易性）** — 災処理・撃収にかかる手間
4. **Transport（積載のしやすさ）** — 車両への積載・収納の一体性

以下は評価対象としない（THE THIRD PLACE全体のBaselineに準拠）：Popularity／SNS／Review Count／Rarity／Collector Value／Price。

Fire DomainはCoffee Zoneのような「非合理的ラグジュアリー原則」の例外領域ではない。機能を伴わない贅沢の採用は正式に許容しない。

## Furniture

未策定。

## Light

未策定。

## Aroma

未策定。

## Storage

未策定（現時点でCandidate項目なし）。

---

# Under Consideration（可変）

---

## Fire

### Fire Pit（TP-004: FIR-019）

**Status**：Under Evaluation

| Axis | 候補① MT.SUMI Aura FG | 候補② FIREGRAPHIX BLISS-SP |
|---|---|---|
| Form | 洗練された機能美を掛げる多次燃焼デザイン | 所有欲を掘り立てるデザインを意図し、フロントフェイス・ハンドルは職人の手作業にこだわる |
| Flame Aesthetics | フルガラス3面窓で炎を遙るものがなく、ダイナミクスと美しさを最大限楽しめる | エアカーテン機構の開発が最も苦労した部分であり、独自の揚らめく炎を生み出す |
| Ease of Clean-up | 多次燃焼構造で灰が比較的少量、炉板も軽量。灰受け自体の取り出しやすさは未確認（Gap） | ロストル形状変更で灰が捨てやすく改良済み。ただし「向き合う感覚」を重視し灰を残す運用哲学もあり |
| Transport | 収納バッグ1つに全部品完結、総重量22kg | 本体単体16kg、煙突・スタンドは別売で管理単位が分散 |

**Note**：旧FIR-020（BLISS-SP）はFIR-019へ統合済み。TP-004上のID自体はRetiredとして保持。

**Unresolved Gaps**：MT.SUMI Aura FGの灰受け取り出しやすさは一次情報で未確認。両候補とも実物確認未実施。

**Decision**：未決定

---

## Furniture

### Winter Top Quilt（TP-004: FUR-022）

**Status**：Under Evaluation

| | 候補① Enlightened Equipment Accomplice | 候補② UGQ Outdoor Tango Duo |
|---|---|---|
| 仕様 | 2人用、2人用850fp／950fp選択可、パッド固定ストラップ標準装備、外側19色・内側12色フルカスタム | 2人用、850fp／900fp選択可、Made to Order、外凄50色以上・内凄11色フルカスタム |

**Decision**：未決定

### Winter Sleeping Mat（TP-004: FUR-023）

**Status**：Candidate（比較対象なし、ブランド調査未着手）

クローズドセルフォーム製。FUR-021の下に敷く断熱補強・パンク保険として機能。

### Pad Sheet（TP-004: FUR-024）

**Status**：Under Evaluation

| | 候補① Therm-a-Rest Synergy Lite Sheet | 候補② WAQ 専用カバー | 候補③ HOTEL CAMPS リバーシブルホットカバー | 候補④ VISIONPEAKS×NANGA IBUKI BOX SHEETS S |
|---|---|---|---|---|
| Color適合 | Stargazer柄のみ、Black展開なし（不適合） | Black指定可 | Black×Black指定可 | Brownのみ、Black展開なし（不適合） |
| 特徴 | 廃盤の可能性あり | 洗濯機で丸洗い可能 | 断熱アルミシート内蔵、リバーシブル | NANGAコラボ由来 |

**Decision**：未決定。候補①・④はオールブラック条件不適合につき参考記録として保持。実質的な最有力候補は②・③。

---

## Light

### Portable LED Lantern（TP-004: LGT-041）

**Status**：Candidate（比較対象なし）

検討中製品：wildingout「LF1984」。Brown、Walnut。

（LGT-028グループの親子構造は、今回の整理対象外として据え置き）

---

## Aroma

現時点でUnder Consideration項目なし（ARM-004は購入決定済み。Decision Log参照）。

---

## Storage

現時点でCandidate項目なし。

---

# Confirmed — Purchase Pending（可変）

TP-004でStatus = Essentialとなっている、Coffee Domainを除く全Equipmentの一覧。製品・ブランドは確定済みだが、まだ所有していない。

購入完了（TP-004側でStatus = Ownedへ更新）した時点で、該当行を本セクションから削除する。

## Furniture

| ID | Product | Brand | Note |
|---|---|---|---|
| FUR-020 | ダウン システムオフトン（BD-060, Quilt component only） | Snow Peak | 数量2 |
| FUR-021 | コンパクトワイドマット（TM-089） | Snow Peak | 数量2 |

## Light

| ID | Product | Brand | Note |
|---|---|---|---|
| LGT-037 | RT-01AC01 / ECHO LAMP | rove troupe | — |
| LGT-038 | DOME LOOK | KURASHI MADE | — |
| LGT-039 | Pivotshade | IFA | — |

## Aroma

| ID | Product | Brand | Note |
|---|---|---|---|
| ARM-002 | MKGP | OLD MOUNTAIN | — |
| ARM-003 | INCENSE CHAMBER Tokyo Limited | Filoméla | — |
| ARM-004 | SCENT TOWER | UNIT/04 × KUNST・BAUM | — |

## Storage

| ID | Product | Brand | Note |
|---|---|---|---|
| STR-006 | SHELCON LEG 25 | BALLISTICS | Parent: STR-001 |
| STR-012 | SHELCON LEG 25 | LOCKFIELD EQUIPMENT × BALLISTIC | Parent: STR-007 |
| STR-014 | Wood Board（Oak） | nodel design | Parent: STR-013／数量2組 |
| STR-016 | Wood Board（Walnut） | nodel design | Parent: STR-015／数量2組 |
| STR-019 | Butterfly Under Shelf | nodel design | Parent: STR-017 |

## Fire

| ID | Product | Brand | Note |
|---|---|---|---|
| FIR-014 | copper250 | neru design works | Parent: FIR-012 |

---

# Decision Log

確定・削除した項目を一行要約で記録する。詳細な比較内容そのものは、確定後は保持しない。

| Date | Domain | Item | Decision |
|---|---|---|---|
| 2026-09 | Aroma | ARM-004 Vertical Diffuser | UNIT/04 × KUNST・BAUM SCENT TOWERを正式決定（Status: Essential）。詳細はTP-004参照。 |

---

# SSOT

各ゾーンの評価哲学・比較記録・決定理由に関する正式情報は、**PX-007 Deliberation Codex**を基準とする。

Equipment自体のBrand／Product／Status／Material等の登録情報は、引き続き**TP-004 Equipment Registry**をSingle Source of Truthとする。PX-007はTP-004の登録ルールを変更せず、その意思決定背景を補完する。

---

# Version History

| Version | Date | Summary |
|---|---|---|
| 1.0 | 2026-09 | 初回ドラフト（PX-007 Fire Codexとして作成）。Fire Domain Evaluation Criteriaを確立し、FIR-019 vs FIR-020の試験比較を記録。 |
| 2.0 | 2026-09 | 文書をFire単独からCoffee以外の全ゾーン横断の検討支援文書「Deliberation Codex」へ再定義。Zone Evaluation Philosophy（恒久）とUnder Consideration（可変）を分離。 |
| 2.1 | 2026-09 | TP-004 Version 7.14と連動し、Candidate段階の具体的製品情報を全てPX-007へ移管。FUR-022a/b、FUR-024a〜d、FIR-020（FIR-019へ統合）、LGT-041の具体情報をUnder Considerationへ反映。ARM-004はプロジェクトオーナーの判断により購入決定（Essential）となったため、Under Considerationには含めず、Decision Logへ記録しTP-004に詳細を残置。ファイルをPX-007_Fire_Codex.mdからPX-007_Deliberation_Codex.mdへリネーム。 |
| 2.2 | 2026-09-16 | プロジェクトオーナーの指示に基づき「Confirmed — Purchase Pending」セクションを新設。Coffee Domainを除く全ゾーンでStatus = Essentialとなっている全Equipment（Furniture 2件、Light 4件、Aroma 3件、Storage 7件、Fire 1件）を一覧化。STR-001（Shellcon 01）のStatus訂正（Owned→Essential、TP-004 v7.15）を反映。本セクションは購入リストアーティファクトのソースとして使用する。Purpose・Relationshipを3カテゴリー構成へ更新。 |
| 2.3 | 2026-09-17 | MARI様のご購入報告（STR-001／LGT-015／STR-017）を受け、TP-004側のStatus更新（Essential→Owned）と連動して「Confirmed — Purchase Pending」から該当3行（Light: LGT-015、Storage: STR-001・STR-017）を削除。 |

---

# End of Document

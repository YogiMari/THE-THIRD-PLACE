# CZ-001 Deliberation Dossier

# Document ID

CZ-001

# Document Title

Deliberation Dossier

# Version

3.2

# Status

Official

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

### Fire Pit（MD-004: FIR-036、空き枠）

**Status**：Under Evaluation

| Axis | 候補① MT.SUMI Aura FG | 候補② FIREGRAPHIX BLISS-SP |
|---|---|---|
| Form | 洗練された機能美を掲げる多次燃焼デザイン | 所有欲を掻き立てるデザインを意図し、フロントフェイス・ハンドルは職人の手作業にこだわる |
| Flame Aesthetics | フルガラス3面窓で炎を遮るものがなく、ダイナミクスと美しさを最大限楽しめる | エアカーテン機構の開発が最も苦労した部分であり、独自の揺らめく炎を生み出す |
| Ease of Clean-up | 多次燃焼構造で灰が比較的少量、炉板も軽量。灰受け自体の取り出しやすさは未確認（Gap） | ロストル形状変更で灰が捨てやすく改良済み。ただし「向き合う感覚」を重視し灰を残す運用哲学もあり |
| Transport | 収納バッグ1つに全部品完結、総重量22kg | 本体単体16kg、煙突・スタンドは別売で管理単位が分散 |

**Note**：旧FIR-020（BLISS-SP）はFIR-019へ統合済み（その後FIR-030へ改番、MD-004 Version 7.49で削除）。現在はMD-004 Version 7.53で新設した空き枠FIR-036が本検討の登録先であり、いずれかの候補を購入した時点でFIR-036へ登録する。旧FIR-020は欠番として保持されていたが、MD-004 Version 7.38のFire Domain番号整理により当該レコード自体を削除した。統合の経緯はMD-004 Version 7.14を参照。

**Unresolved Gaps**：MT.SUMI Aura FGの灰受け取り出しやすさは一次情報で未確認。両候補とも実物確認未実施。

**Decision**：未決定

---

## Furniture

### Winter Sleeping Mat（MD-004: FUR-034）

**Status**：Candidate（比較対象なし、ブランド調査未着手）

クローズドセルフォーム製。FUR-032（マット部）の下に敷く断熱補強・パンク保険として機能。

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

現時点でCandidate項目なし。

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

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、PX-007からCZ-001へ番号を変更した。本文中の他文書参照（TP-004等）を新ID体系へ更新した。Version History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持した。内容（Ver.2.3）に変更はない。旧ID: PX-007。2026-09-24付でタイトルをDeliberation CodexからDeliberation Dossierへ変更した（Ver.3.1参照）。

---

# End of Document

# MD-004 Equipment Registry Object Reference  
  
**Document ID**: MD-004  
**Title**: Equipment Registry Object Reference  
**Series**: MD – Master Data (Record)  
**Version**: 8.5  
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

# Domain Files（領域別ファイル）  

MD-004の登録（Equipment ID単位のレコード）は、Domainごとにファイルを分けて保持する（OP-008 §11.2 Multi-file Document）。本ファイルは入口であり、Version・Purpose・Registry Rules・Coffee・共通ルール・Version Historyを保持する。  

| Domain | Prefix | File |
|---|---|---|
| Furniture | FUR | `MD-004_FUR_Furniture.md` |
| Light | LGT | `MD-004_LGT_Light.md` |
| Aroma | ARM | `MD-004_ARM_Aroma.md` |
| Storage | STR | `MD-004_STR_Storage.md` |
| Fire | FIR | `MD-004_FIR_Fire.md` |
| Shelter | SHL | `MD-004_SHL_Shelter.md` |

Coffee Domainは未採番のため、ファイルを設けない（上記Coffee節を参照）。  

---  

# Coffee  

Coffee Domainは、抽出に関する一連のワークフロー全体を管理する。  

選定基準・意思決定はBR-002 Barista Canon、購入優先度・計画はBR-003 Procurement Handbookの管轄である。  

MD-004は、装備（Equipment）のみを管理する。  

採番は購入時にCOF-001から開始する。事前の空枠は設置しない（C-16）。  

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

Version 7.82以前の履歴は archive/MD-004_Version_History_Archive.md を参照。

## Version 7.83

MARI様のご決定（2026-10-02）に基づき、FIR-003「カスタムベロ（ナターシャ・マチルダ・アンナ・ジェーン）」（¥11,800）を、FIR-003 カスタムベロ（マチルダ）／FIR-004 カスタムベロ（ジェーン）／FIR-005 カスタムベロ（ナターシャ）／FIR-006 カスタムベロ（アンナ）の4件へ分解した。各件のPriceは4枚合計¥11,800の折半で¥2,950。4件ともGraphic Attributeに Bunny Girl Series（Cutout）を追加し、Industrial Attributeへ「半月スタイル時の前框〈カマチ〉押さえ部分に使用」を加えた。これに伴い、旧FIR-004〜FIR-042をFIR-007〜FIR-045へ+3繰り下げ、FIR-001のChild ComponentsをFIR-002〜FIR-008へ更新した（FUR-012の前例と同じ形式）。CZ-001 Ver.3.25・CZ-002 Ver.3.12・MD-001 Ver.2.32・OP-010 Ver.3.4が連動して本文のFIR参照を新番号へ更新した。Version History内の過去の記述は原文のまま保持している。Patch Version。

---

## Version 7.84

MARI様のご指示（2026-10-02）に基づき、FUR-009（DEVISE WORKS × INAVANCE）のProductを、DEVISE WORKS公式オンラインショップの商品名に合わせて「KURO Bolt & Plate」から「NEW KURO金具」へ変更した。Brand・Color・Material・Price・Parent・その他の内容に変更はない。Version History内の過去の記述は歴史的記録として原文のまま保持した。Patch Version。

---

## Version 7.85

MARI様のご指示（2026-10-02）に基づき、SHL-001（The Arth）のProductを、The Arth_six公式ストアの正式名称に合わせて「幕男」から「幕男 4th.ver」へ変更した。MD-001 Ver.2.34と連動する。Brand・Color・Material・Price・Child Components・その他の内容に変更はない。Version History内の過去の記述は歴史的記録として原文のまま保持した。Patch Version。

---

## Version 7.86

MARI様のご指示（2026-10-03）に基づき、以下6件のレコードを訂正した。いずれもBrand・Price・Parent・Child Components・その他の内容に変更はない。Version History内の過去の記述は歴史的記録として原文のまま保持した。Patch Version。

### Changes

- FIR-038（WHAT WE WANT WWW_HANGER）：Materialを「Walnut / Oak」から「Vegetable-Tanned Leather（Body） / Brass（S-Hook）」へ訂正（WHAT WE WANT公式ページの素材表記「本体：革（ヌメ革）／S字フック：真鍮」に基づく）。
- FUR-005：Productを、natural mountain monkeys公式ストアの商品名に合わせて「NOVITA」から「NOVITA neo BRASS」へ変更。
- FUR-010：Productを、DEVISE WORKS公式オンラインショップの商品名に合わせて「WARU NOVITA」から「NEW WARU NOVITA」へ変更。
- LGT-012：「MIYABI RICH 0/f Copper Glove」から「MIYABI RICH 0/f Brass Glove」へ変更し、Colorを「Copper」から「Gold」、Materialを「Copper」から「Brass」へ訂正。
- LGT-021：Productを「デバデバの実」から「DEVA DEVAの実」へ訂正。
- STR-022：Colorを「Gray」から「Charcoal」へ訂正。

---

## Version 8.0

MARI様のご決定（2026-10-03）に基づき、AIが必要なDomainのみを読めるよう、MD-004をDomain別のファイルへ分割した（OP-008 Ver.3.19 §11.2 Multi-file Documentに基づく。文書構造の変更のためMajor Version）。分割はVersion 7.86（PR #106：FIR-038・FUR-005・FUR-010・LGT-012・LGT-021・STR-022の6件の訂正）を取り込んだ上で行った。分割にあたり、登録内容（Equipment ID・Brand・Product・Status・Price・各属性）は一字も変更していない。

### Changes

- ファイル配置：単一ファイル `MD/MD-004_Equipment_Registry_Object_Reference.md` を、`MD/MD-004/` フォルダへ移した。入口ファイル（本書）の名称は従来のまま。
- 本書（入口）：Document Information・Purpose・Registry Rules・Coffee・Parent / Child Rules・Graphic / Industrial Attribute・Color Rule・Material Rule・Single Source of Truth・Related Documents・Version Historyを保持する。Domain Files節を新設した。
- Domain別ファイル6本：Furniture（FUR）・Light（LGT）・Aroma（ARM）・Storage（STR）・Fire（FIR）・Shelter（SHL）の各Domain節を、Version 7.86反映後の内容のまま `MD-004_{Prefix}_{Domain}.md` へ移した。各ファイルの先頭に、Document IDと入口ファイルを示す参照ヘッダー（3行）を追加した。これ以外の文言は追加していない。
- Version History：Version 7.58〜7.82を `archive/MD-004_Version_History_Archive.md` へ原文のまま移設し（OP-008 §19 Rule DOC-09）、本文にはVersion 7.83以降（7.86を含む）を残した。archive冒頭の範囲記述を更新した。
- 連動：OP-008 Ver.3.19（§8カタログのPath、§11.2新設）、CLAUDE.md（Master Databaseのパス）、third_place_sync_validator.py・field_atlas_navigator.py・codex_arbor.py・third-place-sync.yml（複数ファイルの読み込み）。

---

## Version 8.1

MARI様のご決定（2026-10-03）に基づき、Quantityが2のFUR-032・FUR-034・FUR-035・FUR-036のPriceを、単価から合計額の記載へ改めた（数量が2以上の記録のPriceは合計額で記載し、合計である旨を注記する）。4件とも、改訂前のPriceは1個（1組）あたりの単価であることをMARI様が確認された。Brand・Product・Status・Color・Material・Parent・Quantity・その他の内容に変更はない。Version History内の過去の記述は歴史的記録として原文のまま保持した。Patch Version。

### Changes

- FUR-032：Priceを「¥45,100」から「¥90,200（2組合計。1組¥45,100。MARI様確認）」へ変更。
- FUR-034：Priceを「¥3,564（セール価格）」から「¥7,128（2個合計。1個¥3,564、セール価格。MARI様確認）」へ変更。
- FUR-035：Priceを「¥9,980（公式サイト価格）」から「¥19,960（2個合計。1個¥9,980、公式サイト価格。MARI様確認）」へ変更。
- FUR-036：Priceを「¥7,480」から「¥14,960（2個合計。1個¥7,480。MARI様確認）」へ変更。

---

## Version 8.2

MARI様のご指示（2026-10-03）に基づき、Retired記録のFUR-033・LGT-017bの冒頭を、OP-010 Part A §Retirementの記録形式「Retired（Reason）. YYYY-MM-DD.」へ改めた。2件とも、Reasonは他の枠への統合（Merged）である。経緯の本文・Equipment ID・その他の内容に変更はない。Version History内の過去の記述は歴史的記録として原文のまま保持した。Patch Version。

### Changes

- FUR-033：冒頭を「Retired.」から「Retired（Merged）. 2026-09-23.」へ変更。日付は、FUR-032への統合を記録したCZ-001 Deliberation Dossier Decision Log（2026-09-23付、プロジェクトオーナー決定）による。MD-004上の反映はVersion 7.54である。
- LGT-017b：冒頭を「Retired.」から「Retired（Merged）. 2026-09-29.」へ変更。日付は、本文に記載済みのLGT-017aへの統合日（2026-09-29、MARI様のご決定）による。

---

## Version 8.3

MARI様のご指示（2026-10-03）に基づき、LGT-021（DEVISE WORKS × WHAT WE WANT）のProductを、正式な製品名「DEVA DEVA no MI」へ訂正した（Version 7.86で「DEVA DEVAの実」としていた）。Brand・Color・Material・Price・Child Components・その他の内容に変更はない。Version History内の過去の記述は歴史的記録として原文のまま保持した。Patch Version。

### Changes

- LGT-021：Productを「DEVA DEVAの実」から「DEVA DEVA no MI」へ訂正。

---

## Version 8.4

MARI様のご確認・ご指示（2026-10-04）に基づき、公式サイト価格を仮置きしていた3件のPriceを購入価格へ確定し、あわせて既存のPrice注記にあった「MARI様確認」「MARI様申告」の文言を外した。いずれも金額は変わらず、注記のみの変更である。

### Changes

- STR-035：Priceの注記を「yeti.co.jp公式サイト現行価格、2026-09-28確認」から「購入価格」へ変更。¥25,630のまま。
- STR-036：Priceの注記を「tokyocrafts.jp公式サイト価格、2026-09-28確認」から「購入価格」へ変更。¥3,960のまま。
- SHL-006：Priceの注記を「3zo.online公式サイト価格、2026-09-28確認」から「購入価格」へ変更。¥16,500のまま。
- FUR-036：Colorの注記から「MARI様確認」を削除。STR-030：Materialの注記から「MARI様確認」を削除。内容は変更なし。
- Priceの注記から「MARI様確認」「MARI様申告」を削除（13件）：FIR-012、FIR-038、FUR-032、FUR-034、FUR-035、FUR-036、LGT-028、SHL-002、STR-015、STR-018、STR-020、STR-033、STR-037。

---

## Version 8.5

MARI様のご指示（2026-10-04）に基づき、Snow Peak Recycled Cordura Tote Bag（BB-26SU002）をSTR-038として新規登録した（Status: Owned）。購入価格はSnow Peakオンラインストアの注文確認メール（注文日2026-10-04、数量1）による。Material・寸法・仕様はSnow Peak公式ページで確認した。親子関係・他IDへの変更はない。Minor Version。

### Changes

- STR-038（新規）：Snow Peak Recycled Cordura Tote Bag（BB-26SU002）。Owned、Black、¥15,840（購入価格）。

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、TP-004からMD-004へ番号を変更した。本文中の他文書参照（TP-002・TP-005・TP-011・PX-007等）および「Relationship to Other Core Documents」表を新ID体系へ更新した。Version History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持した。内容（Version 7.32）に変更はない。旧ID: TP-004。  

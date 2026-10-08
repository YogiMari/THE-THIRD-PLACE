# MD-004 Equipment Registry Object Reference  
  
**Document ID**: MD-004  
**Title**: Equipment Registry Object Reference  
**Series**: MD – Master Data (Record)  
**Version**: 8.8  
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

Coffee機材は、他のすべてのDomainと異なる登録ルールに従う。比較検討中・意思決定中のアイテムは、MD-004ではなくBR-002 Barista Canonのみで追跡する。Coffeeアイテムは、購入した時点（到着を待たない）でOwnedとして、初めてMD-004（COF-series）へ登録される。それまでの間、未購入のCoffee機材に対応するCOF-seriesの番号は意図的に未入力（空き番）のままとする — これはデータの欠落ではなく、設計上の仕様である。

このルールは、CoffeeとKitchenのみに適用される。他のすべてのDomain（Furniture、Light、Aroma、Storage、Fire、Shelter）には影響しない: 検討中・保留中・決定済みだが未購入のアイテムは、これまで通り既存のStatusシステム（Essential / Candidate / Upgrade）を用いてMD-004へ登録され続ける。

**Candidate段階における具体的製品情報の扱い**：Status = Candidateのアイテムは、MD-004上ではBrand / Productを「Unconfirmed」とし、用途（Industrial Attribute）とEquipment IDのみを記録する。複数の具体的な製品候補間の比較・評価・検討記録は、MD-004ではなくCZ-001 Deliberation Dossierのみで管理する。特定の製品が正式に決定（Status = Essential）した時点で、初めてBrand / ProductをMD-004へ記載する。これにより、Candidateの定義（「必要だが、具体的な製品はまだ決まっていない」）とMD-004上の実データを正確に一致させる。競合していた複数の候補IDは、1件の決定枠IDへ統合し、不要となったIDはRetired（統合済み）として記録を残す。
  
---  
  
# Registry Rules（登録ルール）  

→ OP-010 Qualification Charter Part A を参照。

---

# Domain Files（領域別ファイル）  

MD-004の登録（Equipment ID単位のレコード）は、Domainごとにファイルを分けて保持する（OP-008 §11.2 Multi-file Document）。本ファイルは入口であり、Version・Purpose・Registry Rules・Coffee（採番の方針）・共通ルール・Version Historyを保持する。  

| Domain | Prefix | File |
|---|---|---|
| Furniture | FUR | `MD-004_FUR_Furniture.md` |
| Light | LGT | `MD-004_LGT_Light.md` |
| Aroma | ARM | `MD-004_ARM_Aroma.md` |
| Storage | STR | `MD-004_STR_Storage.md` |
| Fire | FIR | `MD-004_FIR_Fire.md` |
| Shelter | SHL | `MD-004_SHL_Shelter.md` |  
| Coffee | COF | `MD-004_COF_Coffee.md` |

Coffee Domainは、購入した機材のみを保持する（上記Coffee節を参照）。  

---  

# Coffee  

Coffee Domainは、抽出に関する一連のワークフロー全体を管理する。  

選定基準・意思決定はBR-002 Barista Canon、購入優先度・計画はBR-003 Procurement Handbookの管轄である。  

MD-004は、装備（Equipment）のみを管理する。  

採番はBR-002 Barista Canon §Coffee Registry Orderの順（Confirmed Coffee Preparation Workflowの順。ワークフローに現れない機材は末尾）で行う。購入順ではない。購入した機材は、その順序の番号で登録する。未購入の機材の番号は空けたままとし、事前の空枠（Vacant）は設置しない（C-16）。登録は購入した時点で行い、到着を待たない（OP-010 Part A §Coffee Domain Scope）。  

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

COF-010  
└ COF-011  

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

Version 8.6以前の履歴は archive/MD-004_Version_History_Archive.md を参照。

## Version 8.8

MARI様のご決定（2026-10-08）に基づく。Coffee Domain（COF-series）の登録時点を「購入した時点（到着を待たない）」と明確にし、採番をBR-002 §Coffee Registry Orderのワークフロー順（購入順ではない）と定めた。これに伴い、Coffee用の部品ファイル `MD-004_COF_Coffee.md` を新設し（OP-008 §11.2。Domain別ファイルは7つ）、Domain Filesの表とCoffee節を改めた。2026-10-08に購入した次の5件を新規登録した（すべてStatus = Owned）：COF-005（9Barista Magnetic Dosing Funnel）、COF-009（9Barista Espresso Filter Paper 51mm）、COF-010（9Barista Mk.2 Pro）、COF-011（9Barista Handle - Walnut、COF-010の子）、COF-018（KNODOS Tamping Mat with Tool Organiser - Walnut 54mm）。COF-001〜004ほか未購入の番号は空けたまま。Parent / Child RulesのExampleへCOF-010 └ COF-011を追加。Color・Materialは確認済みの情報のみ記載し、不明な項目は空欄とした。COF-018のPriceはBR-003 Product 10のplanning estimate（実額は未確認）。OP-010 Ver.3.6、OP-008 Ver.3.20、BR-002 Ver.4.16、BR-003 Ver.4.11と連動。Minor Version。

---

## Version 8.7

MARI様のご指示（2026-10-06）に基づき、Version Historyのうち Version 7.83〜8.6の全件を、原文のまま `archive/MD-004_Version_History_Archive.md` へ移設した（OP-008 §19 Rule DOC-09）。本文には直近の版（Version 8.7）のみを残した。archive冒頭の範囲記述を、移設後の範囲（Version 7.0〜8.6）へ更新した。登録内容（Equipment ID・Brand・Product・Status・Price・各属性）に変更はない。Patch Version。

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、TP-004からMD-004へ番号を変更した。本文中の他文書参照（TP-002・TP-005・TP-011・PX-007等）および「Relationship to Other Core Documents」表を新ID体系へ更新した。Version History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持した。内容（Version 7.32）に変更はない。旧ID: TP-004。  

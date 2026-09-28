OP-005 Pursuit Strategy
# OP-005
# Pursuit Strategy
## Ver.2.0

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.2 | 2026-09-20 | MD-004 の Status 体系（Essential / Candidate / Upgrade）に合わせ、Relationship の購入対象Statusの記述を「Must Buy または Candidate」から「Essential・Candidate・Upgrade」へ修正。Acquisition Priority（Must Buy / High / Medium / Low）は取得優先度の区分であり、変更なし。 |
| 1.3 | 2026-09-24 | Volatility Restructureにより、BR-003 Acquisition Handbookの調達方針（Preferred Sources／Price Policy／Successor Model Policyの方針文）を、新章§Coffee Zone Acquisition Rulesへ逐語移設した。適用範囲はCoffee Zoneのまま。章追加のためMinor Version。 |
| 1.4 | 2026-09-24 | MARI様のご指摘に基づき、OP-008 §11 Naming Conventionへ新設された文書名重複禁止ルールに伴い、タイトルをAcquisition StrategyからPursuit Strategyへ変更（BR-003 Acquisition Handbookとの語重複を解消）。BR-003側もProcurement Handbookへ改名されたため、本書内の参照表記を同期。Acquisition Priority／Acquisition Statusは、他文書（MD-004・BR-003等）でも使用される既存のデータ項目名であり、文書タイトルではないため変更していない。ファイル名もOP-005_Pursuit_Strategy.mdへ変更。 |
| 1.5 | 2026-09-28 | MARI様のご決定に基づき、月間予算・Acquisition Priority・Acquisition Status・Monthly Planningの適用範囲をCoffee Zoneに限定した（実際の運用はBR-003 Procurement Handbook）。あわせて、Coffee以外のゾーンは「買えるときに買う」方針を新章§Non-Coffee Zones Acquisition Policyへ明記した。章追加のためMinor Version。OP-008 §8カタログのOP-005行（Role・Summary）を同期。 |
| 2.0 | 2026-09-28 | MARI様のご決定に基づき、BR-003 Procurement HandbookがCoffee Zoneの購入優先度・購入状態・月次購入計画を自前で定義・運用している実態に合わせ、本書の§Acquisition Priority（Must Buy／High／Medium／Low）・§Acquisition Status（Planned／Watching／Ready／Acquired）・§Monthly Planning（Must Buy／Primary Target／Secondary Target／Waiting）を削除し、新章§Coffee Zone Classification Referenceによる参照へ置換した（二重定義の解消。OP-008 Principle 003）。あわせて、§Monthly Budgetの「Must Buyが市場へ現れた場合は予算超過を許容する」旨の記述を、対応区分の削除に伴い削除した。§Non-Coffee Zones Acquisition Policyの表現を同期。章削除・責任範囲の変更のためMajor Version。OP-008 §8カタログのOP-005行（Role）を同期。 |

---

# Purpose

Pursuit Strategy は、

THE THIRD PLACE を構成する Equipment を、

いつ、

どの順序で、

どの判断基準によって迎えるかを定義する戦略文書である。

本書は価格表ではない。

Design Bible を実現するための

**調達戦略**

を管理する。

Equipment Registry Object Reference が

「何を所有するか」

を定義するのに対し、

Pursuit Strategy は

「何を迎えるか」

を定義する。

---

# Relationship

本書は、

MD-004 Equipment Registry Object Reference

を唯一の参照元とする。

購入対象は、

Equipment Registry の

Status が

Essential・Candidate・Upgrade

のいずれかとなっている Equipment のみとする。

Equipment 情報を

本書で重複管理しない。

---

# Core Philosophy

迎える理由は、

価格ではない。

人気でもない。

限定でもない。

THE THIRD PLACE を

より完成へ近づけるかどうか。

それだけを判断基準とする。

---

# Decision Priority

Equipment は、

以下の順序で判断する。

1. Design Bible との一致

2. 空間完成度への貢献

3. 入手機会

4. 市場価格

5. 月間予算（Coffee Zoneのみ）

価格は判断材料の一つであり、

最優先事項ではない。

---

# Monthly Budget

適用範囲：Coffee Zoneのみ。実際の運用はBR-003 Procurement Handbookを参照。

標準予算

100,000円 / 月

---

# Coffee Zone Classification Reference

Coffee Zoneの購入優先度（Purchase Priority）・購入状態（Acquisition Status）・購入グルーピング（Purchase Grouping）・月次購入計画（Monthly Acquisition Plan）は、BR-003 Procurement Handbookが定義・管理する。本書では定義しない。

---

# Market Policy

市場価格は参考情報である。

購入判断は、

価格のみで行わない。

市場では、

以下を継続的に確認する。

- 定価
- 中古価格
- 新品流通
- 再販情報
- イベント販売
- ブランド公式販売

---

# Purchase Rules

以下は、

購入理由にならない。

- 人気
- 限定
- プレミア価格
- SNSでの話題
- 入手困難

唯一の判断基準は、

Design Bible を実現する価値があるかどうかである。

---

# Review Cycle

Pursuit Strategy は、

固定された計画ではない。

Equipment の完成度、

市場状況、

再販情報、

Design Review の結果に応じて、

継続的に更新する。

計画変更は、

THE THIRD PLACE の成熟過程として記録する。

---

# Non-Coffee Zones Acquisition Policy

Coffee Zone以外の全ゾーン（Furniture／Light／Aroma／Storage／Fire／Shelter／Kitchen）では、月間予算・取得時期の計画・購入優先度・購入状態による管理を行わない。

購入判断は、Core Philosophy・Decision Priority（1〜4）・Purchase Rulesに従い、買えるときに買う。

- 購入待ちのEquipment：CZ-001 Deliberation Dossier「Confirmed — Purchase Pending」（KitchenはMD-003 Galley FareのStatus）
- 市場監視：CZ-002 Vigil Protocol Watch List
- 購入完了：MD-004（KitchenはMD-003）のStatusをOwnedへ更新

---

# Relationship to Other Core Documents

Pursuit Strategy は、

THE THIRD PLACE Core Documents の

取得戦略を担う文書である。

各文書との役割は明確に分離する。

| Document | Responsibility |
|-----------|----------------|
| DS-001 THE THIRD PLACE Original | プロジェクトの原典 |
| OP-001 Constitution | プロジェクト全体の憲章 |
| OP-002 Design Bible | 設計思想 |
| MD-002 Field Atlas | 舞台の設計 |
| MD-004 Equipment Registry | Equipment の唯一のマスターデータ |
| **OP-005 Pursuit Strategy** | Equipment を迎える戦略 |
| OP-006 Foundation Compass | Foundation を構成・維持するための指針 |
| OP-007 Habitat Architecture | フィールドで完成する暮らしの設計 |
| OP-003 Affinity Lexicon | 好み・美意識・親和性の語彙 |
| OP-004 Aesthetic Grammar | 美しさを構成する法則 |
| MD-001 Storage Blueprint | 収納設計・運用 |
| MD-003 Galley Fare | キッチン機材の独立マスターデータ |

Pursuit Strategy は、

Equipment Registry の情報を基準に、

取得順序・取得時期・市場監視を管理する。

Equipment の詳細情報は保持しない。

---

# Coffee Zone Acquisition Rules（BR-003から移設）

本章は、Coffee Zoneの調達に関する方針をBR-003 Procurement Handbookから移設したものである。適用範囲はCoffee Zoneのままとし、他ゾーンへ拡張しない。

---

### Preferred Sources  
  
1. メーカー公式ストア  
2. 正規代理店  
3. 国内正規販売店  
4. Amazon Japan（公式または正規販売者であることが明確な場合のみ）  

---

## Price Policy  
  
BR-003では、購入判断に使用できるよう、原則として全製品に価格目安を記載する。  
  
価格の優先順位は以下とする。  
  
1. Current Official Price  
2. Current Authorized Retail Price  
3. Current Established Retail Market Price  
4. Conservative Planning Estimate  
  
価格が公式価格でない場合は、`Estimated` として扱う。  
  
海外製品については、日本到着までに必要となる可能性のある以下を考慮してEstimated Total Costを設定する。  
  
* Product Price  
* International Shipping  
* Consumption Tax  
* Import Tax / Duty  
* Import Handling Fee  
* Currency fluctuation  
  
#### Conservative Total Cost Policy  
  
Estimated Total Costは、実際の購入時に不足しないことを優先し、やや保守的に設定する。  
  
Estimated Total Costは公式販売価格を意味しない。  
  
---  

---

## Successor Model Policy  
  
BR-002に登録された製品が現在販売終了しており、メーカーが明確な後継モデルを販売している場合、BR-003では現行後継モデルをCurrent Purchase Modelとして扱う。  
  
ただし、BR-002の正式なDecisionや歴史的モデル名称を独断で変更しない。  

具体的な後継モデル対応表（Current Successor Mapping）は BR-003 Procurement Handbook を参照。

---

# Single Source of Truth

Equipment の情報は、

MD-004 Equipment Registry Object Reference

のみが保持する。

Pursuit Strategy は、

取得判断だけを管理する。

情報を二重管理してはならない。

---

# Ultimate Principle

迎えるという行為は、

消費ではない。

収集でもない。

THE THIRD PLACE を、

より完成へ近づけるための

一つの設計行為である。

Pursuit Strategy は、

その判断を一貫した思想で支えるために存在する。

---

> **Every acquisition is a design decision.**

**「すべての迎え入れは、デザイン上の意思決定である。」**

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、TP-005からOP-005へ番号を変更した。本文中の他文書参照（Equipment Registry等）および「Relationship to Other Core Documents」表を新ID体系へ更新した。内容（Ver.1.1）に変更はない。旧ID: TP-005。2026-09-24付でタイトルをAcquisition StrategyからPursuit Strategyへ変更した（Ver.1.4参照）。

OP-005 Acquisition Strategy
# OP-005
# Acquisition Strategy
## Ver.1.3

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.2 | 2026-09-20 | MD-004 の Status 体系（Essential / Candidate / Upgrade）に合わせ、Relationship の購入対象Statusの記述を「Must Buy または Candidate」から「Essential・Candidate・Upgrade」へ修正。Acquisition Priority（Must Buy / High / Medium / Low）は取得優先度の区分であり、変更なし。 |
| 1.3 | 2026-09-24 | Volatility Restructureにより、BR-003 Acquisition Handbookの調達方針（Preferred Sources／Price Policy／Successor Model Policyの方針文）を、新章§Coffee Zone Acquisition Rulesへ逐語移設した。適用範囲はCoffee Zoneのまま。章追加のためMinor Version。 |

---

# Purpose

Acquisition Strategy は、

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

Acquisition Strategy は

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

5. 月間予算

価格は判断材料の一つであり、

最優先事項ではない。

---

# Monthly Budget

標準予算

100,000円 / 月

ただし、

Must Buy が市場へ現れた場合は、

予算を超えても取得を優先する。

一時的な予算超過は許容する。

---

# Acquisition Priority

Equipment は、

以下4段階で管理する。

## Must Buy

市場に現れた時点で取得する。

価格より、

機会を優先する。

---

## High

早期取得が望ましい。

---

## Medium

状況を見ながら取得する。

---

## Low

完成後でも問題ない。

---

# Acquisition Status

Acquisition Strategy では、

購入対象を以下の状態で管理する。

## Planned

取得予定。

購入時期は未定。

---

## Watching

継続して市場を監視する。

販売開始

中古市場

再販

イベント販売

を対象とする。

---

## Ready

購入条件が整っている。

市場へ現れた場合、

取得可能な状態。

---

## Acquired

取得完了。

Equipment Registry Object Reference の

Status を

**Owned**

へ更新し、

本書から管理対象を外す。

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

# Monthly Planning

毎月、

取得候補を整理する。

### Must Buy

最優先。

---

### Primary Target

今月取得を目指す。

---

### Secondary Target

状況に応じて取得する。

---

### Waiting

市場動向を見ながら待機する。

---

# Review Cycle

Acquisition Strategy は、

固定された計画ではない。

Equipment の完成度、

市場状況、

再販情報、

Design Review の結果に応じて、

継続的に更新する。

計画変更は、

THE THIRD PLACE の成熟過程として記録する。

---

# Relationship to Other Core Documents

Acquisition Strategy は、

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
| **OP-005 Acquisition Strategy** | Equipment を迎える戦略 |
| OP-006 Foundation Compass | Foundation を構成・維持するための指針 |
| OP-007 Habitat Architecture | フィールドで完成する暮らしの設計 |
| OP-003 Affinity Lexicon | 好み・美意識・親和性の語彙 |
| OP-004 Aesthetic Grammar | 美しさを構成する法則 |
| MD-001 Storage Blueprint | 収納設計・運用 |
| MD-003 Galley Fare | キッチン機材の独立マスターデータ |

Acquisition Strategy は、

Equipment Registry の情報を基準に、

取得順序・取得時期・市場監視を管理する。

Equipment の詳細情報は保持しない。

---

# Coffee Zone Acquisition Rules（BR-003から移設）

本章は、Coffee Zoneの調達に関する方針をBR-003 Acquisition Handbookから移設したものである。適用範囲はCoffee Zoneのままとし、他ゾーンへ拡張しない。

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

具体的な後継モデル対応表（Current Successor Mapping）は BR-003 Acquisition Handbook を参照。

---

# Single Source of Truth

Equipment の情報は、

MD-004 Equipment Registry Object Reference

のみが保持する。

Acquisition Strategy は、

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

Acquisition Strategy は、

その判断を一貫した思想で支えるために存在する。

---

> **Every acquisition is a design decision.**

**「すべての迎え入れは、デザイン上の意思決定である。」**

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、TP-005からOP-005へ番号を変更した。本文中の他文書参照（Equipment Registry等）および「Relationship to Other Core Documents」表を新ID体系へ更新した。内容（Ver.1.1）に変更はない。旧ID: TP-005。

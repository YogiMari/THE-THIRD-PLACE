# PX-007 Fire Codex  

# Document ID  

PX-007  

# Document Title  

Fire Codex  

# Version  

1.0（Draft）  

# Status  

Draft  

---  

## Purpose  

PX-007 Fire Codexは、THE THIRD PLACEにおけるFire Domain（焚き火台・薪ストーブ・暖房機材）の意思決定基準を管理する仕様書である。  

本書では以下を管理する。  

* Fire Domain Evaluation Criteria  
* Decision Reasons  
* Comparison Records（候補間の評価記録）  
* Rejected Items  
* Pending Items  

価格・購入先・輸送・関税などの調達情報は管理対象外とする（別途PX系文書での管理を将来検討）。  

**Coffeeドメインとの相違点**：PX-004 Barista Codexは「Confirmed（決定）してから初めてTP-004へ反映する」段階的登録ルールを採用しているが、Fire DomainはTP-004 Purposeで明記されている通り、Candidate／Essential／Upgrade段階から直接TP-004（FIR-series）へ登録される。したがってPX-007は、TP-004にすでに存在するFIR-seriesアイテムに対して、その選定理由・比較評価・意思決定ロジックを補完する文書として機能する。TP-004の登録タイミング自体は変更しない。  

---  

## Relationship  

```
TP-004
Equipment Registry (FIR-series)
      ▲
      │ 参照・補完
      │
PX-007
Fire Codex
（評価基準・比較記録・決定理由）
```

---  

## Design Principles（Fire Domain Evaluation Axes）  

Fire Domainの機材は、以下4軸で評価する。  

### 1. Form（意匠美）  
ギア本体・道具そのものの造形的な美しさ。素材・仕上げ・Design Bibleとの整合、既存FIRドメインアイテムとの美意識的一貫性。  

### 2. Flame Aesthetics（炎の見え方）  
燃焼中の炎そのものの視覚的な美しさ。炎の高さ・揺らめき方・開口部からの見え方、薪の組み方による表情の出やすさ。  

### 3. Ease of Clean-up（撤収容易性）  
灰処理・撤収にかかる手間。灰受けの取り外しやすさ、燃焼後の温度低下の速さ、パーツ点数の少なさ。  

### 4. Transport（積載のしやすさ）  
車両への積載・収納の一体性。本体・煙突・スタンド等が単一の収納系にまとまっているか、パーツが分散管理を要求しないか。  

以下は評価対象としない（THE THIRD PLACE全体のBaselineに準拠）。  

* Popularity  
* SNS  
* Review Count  
* Rarity  
* Collector Value  
* Price  

**Coffee Zoneとの相違**：Fire DomainはCoffee Zoneのような「非合理的ラグジュアリー原則」の例外領域ではない。4軸すべてにおいて実用性と美意識のバランスを取ることを基本とし、機能を伴わない贅沢の採用は正式に許容しない。  

---  

# Comparison Records  

---  

## Fire Pit Candidate Comparison（FIR-019 vs FIR-020）  

**Status**  

Under Evaluation（両候補ともTP-004上でCandidate、正式決定はしていない）  

### Candidates  

| Category | Brand | Model | TP-004 ID |  
|---|---|---|---|  
| Fire Pit | MT.SUMI | Aura FG | FIR-019 |  
| Fire Pit | FIREGRAPHIX | BLISS-SP | FIR-020 |  

### Evaluation  

| Axis | FIR-019 Aura FG | FIR-020 BLISS-SP |  
|---|---|---|  
| Form | 洗練された機能美を掲げる多次燃焼デザイン | 所有欲を掻き立てる高価格に負けないデザインを意図し、フロントフェイス・ハンドルは職人の手作業にこだわる |  
| Flame Aesthetics | フルガラス3面窓で炎を遮るものがなく、ダイナミクスと美しさを最大限楽しめる | エアカーテン機構の開発が最も苦労した部分であり、独自の揺らめく炎を生み出す |  
| Ease of Clean-up | 多次燃焼構造により燃え残り・灰が比較的少量。炉板（耐火煉瓦ライト）も軽量。灰受け自体の取り出しやすさは未確認（Gap） | ロストル形状変更により灰が捨てやすく改良済み。ただし「向き合う感覚」を重視し、灰をあえて残す運用哲学もあり、Ease of Clean-up軸との整合はやや複雑 |  
| Transport | 収納バッグ1つに本体・煙突8分割・固定リング・グリッド・工具が完結。総重量22kg | 本体単体16kg。煙突・スタンドは別売オプションで、車両積載時は複数の管理単位に分かれる |  

### Unresolved Gaps  

* FIR-019（Aura FG）の灰受け機構そのものの取り出しやすさは、一次情報で確認できていない。  
* 両候補とも実物確認（現地でのハンズオン検証）は未実施。  

### Decision  

**未決定。** 本Comparisonは評価軸の試験運用として実施したものであり、正式採用を確定するものではない。  

---  

# Pending  

現時点では正式決定していない項目。  

* Fire Pit（FIR-019 vs FIR-020の最終決定）  

---  

# Rejected Equipment  

（現時点で正式に不採用となったFire Domain候補なし）  

---  

# SSOT  

Fire Domainの評価基準・比較記録・決定理由に関する正式情報は、**PX-007 Fire Codex**を基準とする。  

Equipment自体のBrand／Product／Status／Material等の登録情報は、引き続き**TP-004 Equipment Registry**をSingle Source of Truthとする。PX-007はTP-004の登録ルールを変更せず、その意思決定背景を補完する。  

---  

# Version History  

| Version | Date | Summary |  
|---|---|---|  
| 1.0 | 2026-09 | 初回ドラフト作成。Fire Domain Evaluation Criteria（Form／Flame Aesthetics／Ease of Clean-up／Transport）を確立。FIR-019 vs FIR-020の試験的比較評価を記録。 |  

---  

# End of Document  

# CZ-002
# Vigil Protocol
### THE THIRD PLACE Acquisition Monitoring & Patrol Operations

**Document ID**: CZ-002  
**Title**: Vigil Protocol  
**Series**: CZ – Cross-Zone Ops  
**Version**: 2.16  
**Status**: Official  
**Owner**: THE THIRD PLACE

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 2.0 | — | 旧バージョン。正確な公開日は未記録。 |
| 2.1 | 2026-09-07 | 分割起源の修復。PX-003とTM-005 Search Doctrineはもともと1つの文書だったが、後に方法論（TM-005）と実行（PX-003）へ分割された際、章番号の振り直しやヘッダーセクションの復元が行われず、PX-003が第XXXII章から始まり、それ以前の章もPurposeセクションも存在しない状態になっていた。「I. Purpose」（Relationship with Other Documentsを含む）を追加し、全章をI〜VIIIへ振り直し、文書ヘッダーにSeriesフィールドを追加した。 |
| 2.2 | 2026-09-08 | Watch Listにエントリ008〜022を追加。TP-004 Equipment Registryのうち、Status = Essential / Candidate / Upgradeで既存エントリに含まれていない全アイテムを抽出（各エントリにTP-004 Reference IDを付記）。Coffee Domainは意図的に除外（PX-004/PX-005が管轄）。 |
| 2.3 | 2026-09-08 | エントリ018（Wood Board）を、プロジェクトオーナーの確認に基づき修正: nodel designがこの製品を「Wood Board」という正確な名称で単品販売していることを確認。入手可否に関する不確実性の注記を削除し、キーワードを整理した。 |
| 2.4 | 2026-09-18 | TP-004 Version 7.28（Furniture Domain番号整理）と連動し、Butterfly Table M Black LookのTP-004 ReferenceをFUR-017からFUR-018へ更新。 |
| 2.5 | 2026-09-19 | MD-004 Version 7.34（Aroma番号入替）と連動し、エントリ014（Filoméla INCENSE CHAMBER）のMD-004 ReferenceをARM-003（Status: Essential）からARM-004（Status: Upgrade）へ、エントリ015（SCENT TOWER）のMD-004 ReferenceをARM-004からARM-003へ更新。エントリ015のStatus表記（Candidate）は、MD-004 Version 7.14（Essential化）以降の更新漏れであったため、あわせてEssentialへ訂正した。 |
| 2.6 | 2026-09-19 | MD-004 Version 7.36（Furniture Domain番号整理・二回目）と連動し、Butterfly Table M Black LookのMD-004 ReferenceをFUR-018からFUR-026へ更新。 |
| 2.7 | 2026-09-19 | MD-004 Version 7.38（Fire Domain番号整理）と連動し、エントリ019（copper250）のMD-004 ReferenceをFIR-014からFIR-025へ、エントリ020（FT no BARREL）をFIR-015からFIR-026へ、エントリ021（MT.SUMI Aura FG）をFIR-019からFIR-030へ更新。エントリ022（FIREGRAPHIX BLISS-SP、MD-004 Reference: 旧FIR-020）は、参照先の旧FIR-020レコード自体がMD-004側で削除されたため削除した。 |
| 2.8 | 2026-09-19 | MD-004 Version 7.40（Fire Domain検討中案件の表記整理）と連動し、Watch List説明文の「エントリ008〜022」の表記をエントリ022削除後の実態に合わせて「エントリ008〜021」に訂正。 |
| 2.9 | 2026-09-19 | 文書番号再編時の Series 表記更新漏れを訂正。Series: PX – Project → CZ – Cross-Zone Ops。内容に変更なし。 |
| 2.10 | 2026-09-22 | MD-004 Light Zone再編（LGT-016・018〜020のLGT-035子化、LGT-027・028のLGT-036子化、AIR LIGHT群のa/b/c/d表記化、LGT-058クラッシュアイスのLGT-003移設に伴うLGT-003〜057全体繰り下げ）と連動し、MD-004 Referenceを更新：エントリ009（MIYABI RICH Alumi Frozen）をLGT-015からLGT-016へ、エントリ010（メッシュシェード）をLGT-028aからLGT-029aへ、エントリ011（POCKET SHADE M）をLGT-028bからLGT-029bへ、エントリ012（Pivotshade）をLGT-039からLGT-040へ更新。 |
| 2.11 | 2026-09-22 | MD-004 Version 7.49（Light Domain再修正）と連動し、MD-004 Referenceを更新：エントリ010（メッシュシェード）をLGT-029aからLGT-018aへ、エントリ011（POCKET SHADE M）をLGT-029bからLGT-018bへ、エントリ012（Pivotshade）をLGT-040からLGT-052へ更新。エントリ009（MIYABI RICH Alumi Frozen、LGT-016）は今回の再編後も番号に変更がないため更新なし。 |
| 2.12 | 2026-09-23 | MD-004 Version 7.50（LGT-017のLGT-016子化解消、LGT-018をOTEBO CRAFTS BABELへ差し替え、LGT-018a/018bをLGT-019a/019bへ改番、以降のLight Domain番号を1つずつ繰り下げ）と連動し、MD-004 Referenceを更新：エントリ010（メッシュシェード）をLGT-018aからLGT-019aへ、エントリ011（POCKET SHADE M）をLGT-018bからLGT-019bへ、エントリ012（Pivotshade）をLGT-052からLGT-053へ更新。エントリ009（MIYABI RICH Alumi Frozen、LGT-016）は今回の再編後も番号に変更がないため更新なし。 |
| 2.13 | 2026-09-23 | MD-004 Version 7.51（LGT-018/BABELの独立親化、LGT-034〜046ブロックの移動・並べ替え、AIR LIGHT群の4個単位グループ化、全体再連番）と連動し、MD-004 Referenceを更新：エントリ010（メッシュシェード）をLGT-019aからLGT-017aへ、エントリ011（POCKET SHADE M）をLGT-019bからLGT-017bへ、エントリ012（Pivotshade）をLGT-053からLGT-042へ更新。エントリ009（MIYABI RICH Alumi Frozen、LGT-016）は今回の再編後も番号に変更がないため更新なし。 |
| 2.14 | 2026-09-23 | MD-004（Version 7.53）との番号照合に基づき、プロジェクトオーナーの指示でMD-004 Referenceを訂正：エントリ017（Butterfly Under Shelf）をSTR-019からSTR-021へ、エントリ018（Wood Board）をSTR-014, STR-016からSTR-015, STR-018へ（Notes内の記述も同期）、エントリ021（MT.SUMI Aura FG）を削除済みのFIR-030からMD-004 Version 7.53新設の空き枠FIR-036へ更新。 |
| 2.15 | 2026-09-23 | MD-004（Version 7.53）を正とした照合に基づき、エントリ009（MIYABI RICH Alumi Frozen）のMD-004 Reference のStatus表記をEssentialからOwnedへ訂正（MD-004上はOwned）。エントリ自体の扱い（Watch Listからの除外要否）は変更していない。 |
| 2.16 | 2026-09-23 | MD-004（Version 7.54）を正としたWatch Listの整理（プロジェクトオーナー指示）。MD-004上でOwnedとなっている旧エントリ009（MIYABI RICH Alumi Frozen、LGT-016）を削除し、旧エントリ010〜021を009〜020へ繰り上げ。MD-004でStatus = Essentialながら未掲載だった3件を追加：021 OTEBO CRAFTS BABEL（LGT-017）、022 Snow Peak ダウン システムオフトン スリムマットセット（FUR-032）、023 KAZE_TO_MORI × WINDY AND RAINY Folding Wire T-box 全面コンプリートセット（STR-030）。エントリ001・002・004・005・006・007にMD-004 Referenceを付記し、Brand表記をMD-004の公式表記へ統一（001 DEVISE WORKS × ANCAM、002 DEVISE WORKS × WANTKEY CAMP、004 rove troupe、006 wildingout、007 nodel design）。 |

---

# I. Purpose

## Mission

Vigil Protocolは、THE THIRD PLACEにおける調達監視の**実行運用**を定義する。

調査の思想・方法論を定義することは目的としない。それは別途**OP-009 Search Doctrine**が管轄する。

本書の目的は、パトロールがどのように実行されるかを定義することである: 何を検索するか、鮮度と入手可否をどう検証するか、発見内容をどうスコアリングするか、Watch Listをどう維持するか。

---

## Origin

Vigil ProtocolとOP-009 Search Doctrineは、もともと1つの文書であった。

方法論と実行をそれぞれ独立して管理・更新できるよう、後に分割された。

OP-009は**調査がどう考えるべきか**を担う。

CZ-002は**調査がどう実行されるか**を担う。

---

## Relationship with Other Documents

```text
OP-009 Search Doctrine
（方法論・思想）
        │
        ▼
CZ-002 Vigil Protocol
（実行：Patrol、Watch List、Scoring）
        │
        │ 検索を実行
        ▼
Web Research
        │
        ▼
Difference Analysis
        │
        ▼
KN-004 Atelier Discovery
（日次インテリジェンスレポート）
        │
        ▼
KN-001 Heritage Chronicle
（長期ナレッジアーカイブ）
```

Vigil Patrolによって発見された内容は、購入判断のためOP-005 Acquisition Strategyへ引き継がれる。

---

# II. Freshness Validation

すべての発見内容は、報告対象となる前に鮮度検証を受けなければならない。

Vigilの目的は、過去の情報ではなく現在の調達機会を検知することである。

鮮度検証は、すべてのMarketplaceにおいて必須とする。

---

## Freshness Priority

検索結果は、以下の順序で評価する。

★★★★★ 即時の機会

- Available Now
- Restock Today
- Reservation Open
- Lottery Open
- Newly Listed Used Item
- Newly Released Product

★★★★☆ 最近

- 過去7日以内に公開された情報。
- 新たに発表された発売スケジュール。
- 新たに確認された生産情報。

★★★☆☆ 現行

- 過去30日以内に公開された情報。
- なお有効かつ行動可能。

★★☆☆☆ 経過

- 30日を超えた情報。
- なお行動可能な場合のみ報告する。

★☆☆☆☆ 過去

- 90日を超えた情報。
- 明示的に要求されない限り報告しない。

---

## Automatic Exclusion

以下の発見内容は、自動的に除外する。

Official Stores（公式ストア）

- 再入荷告知のないSold Outページ。
- アーカイブされたニュース。
- 終了したキャンペーンページ。
- 終了した抽選ページ。
- 終了した予約ページ。
- 締め切られた予約注文ページ。
- 過去の発売告知。
- もはや注文を受け付けていない製品ページ。

Marketplace Listings（マーケットプレイス出品）

- SOLD
- 売り切れ
- 成約済み
- Completed Listing
- Deleted Listing
- Removed Listing
- Expired Listing

全般

- リンク切れのURL。
- リダイレクトループ。
- キャッシュされたページ。
- 有効な出品を伴わない検索結果。
- 重複する過去の告知。

これらの発見内容は、Patrol Report内に決して含めない。

---

# III. Availability Verification

ページを見つけることは、発見とみなさない。

すべての候補観測は、入手可否検証を通過しなければならない。

検証順序:

1. Product Identity（製品の同一性）
2. Marketplace
3. Availability（入手可否）
4. Price（価格）
5. Publication Date（公開日）
6. Listing Status（出品状態）
7. URL Accessibility（URLのアクセス可否）

いずれかの段階で失敗した場合、その発見内容は無効とする。

---

## Official Store Rules

Official Storesは、以下のいずれかのみを報告対象とする。

- Available
- Reservation Open
- Lottery Open
- Coming Soon
- Restocked
- Newly Announced

以下は、決して報告しない。

- Sold Out only
- Archived product page
- Historical release page
- Old news article
- Expired campaign

---

## Marketplace Rules

Marketplace出品は、すべての条件を満たさなければならない。

- 出品がactiveであること。
- 出品が一般に閲覧可能であること。
- 出品が購入または入札可能であること。
- 出品にSOLDの表示がないこと。
- 出品が削除されていないこと。

満たさない場合は、その結果を除外する。

---

# IV. Date Validation

報告するすべての発見内容には、可能な限り最新の検証可能な日付を含める。

日付は、以下の基準で評価する。

今日

★★★★★

3日以内

★★★★☆

7日以内

★★★★☆

30日以内

★★★☆☆

31〜90日

★★☆☆☆

90日超

除外。

例外:

過去の情報は、以下と直接結びつく場合に限り報告してよい:

- 新たに再開された販売。
- 新たに再開された予約。
- 新たに再開された抽選。
- 新たに更新された仕様。
- 新たに更新された価格。

---

# V. Opportunity Evaluation

検証済みのすべての発見内容には、Opportunity Score（機会スコア）を付与する。

評価要素

Availability

- Available
- Reservation
- Lottery
- Coming Soon

Scarcity

- Limited
- Discontinued
- Rare
- Small Production

Condition

- New
- Excellent Used
- Rare Specification

Price

- Below Market
- Market
- Above Market

Freshness

- Today
- This Week
- This Month

優先度は、単一の要素ではなく、これらを総合した評価によって決定する。

---

# VI. Reporting Philosophy

Vigilは、検索結果を報告するために存在するのではない。

Vigilは、機会を報告するために存在する。

Webページが存在すること自体に意味はない。

行動可能な機会が存在することにこそ意味がある。

報告するすべての発見内容は、次の問いに答えられなければならない。

「THE THIRD PLACEは、この情報に基づき今日行動できるか？」

答えが否である場合、その発見内容は通常除外する。

---

# VII. Patrol Initiation

Vigil Patrolの実行を指示された場合、Vigilは直ちに実行運用を開始する。

管轄文書の要約は行わない。

プロトコルの説明は行わない。

Watch Listの説明は行わない。

実行は直ちに開始する。

実行手順。

1. Protocolを読み込む。
2. Watch Listを読み込む。
3. Patrolを初期化する。
4. Official Storesを検索する。
5. Secondary Marketplacesを検索する。
6. 鮮度を検証する。
7. 入手可否を検証する。
8. 重複を除去する。
9. 発見内容を優先順位付けする。
10. Patrol Reportを生成する。

実行前に、説明的な応答を生成してはならない。

---

# VIII. Watch List

Watch Listは、本文書の末尾で維持する。

この位置は、運用上の保守専用として確保する。

対象の追加・削除は、このセクションのみの修正で行う。

Watch Listを維持する際、それ以前のプロトコルの各セクションは変更しない。

すべてのpatrolは、検索実行の直前にこのセクションを読み込む。

## Watch List Structure

すべてのWatch Listエントリは、以下の構造に従う。

| Brand | Target | Required Keywords | Marketplace Priority | Notes |
|--------|---------|-------------------|----------------------|-------|

Required Keywordsには、発見精度を最大化するために必要な実用的なバリエーションをすべて含める。

各Watch Listエントリは、本プロトコルの他のセクションに影響を与えることなく、独立して修正してよい。

---

# Current Watch List

エントリ001〜007は、本改訂以前から存在する。

エントリ008〜023は、**MD-004 Equipment Registry**を照合し、Status = Essential / Candidate / Upgrade（つまり未Owned）で、かつ既存エントリに含まれていないすべてのアイテムを追加したものである。各エントリには、追跡可能性のため**MD-004 Reference** IDを記載する。Coffee Domain（COF-series）のアイテムは意図的に除外している — 購入されるまでは、BR-002 Barista Codex / BR-003 Acquisition Handbookが引き続き管轄する。

エントリ001〜007にも、MD-004上の該当IDが存在するものについては**MD-004 Reference**を付記している（003 WANTKEY SC HANDLEはMD-004に該当IDなし）。MD-004上の製品が未確定（Brand / Product = Unconfirmed）の枠（FUR-034 Sleeping Mat、FUR-035 Pad Sheet）は、検索対象の製品が定まらないため本リストの対象外とし、CZ-001 Deliberation Codexで管理する。

## 001

**Brand**

DEVISE WORKS × ANCAM

**Target**

ANO D TENBAN

**MD-004 Reference**

FUR-016 (Status: Upgrade)

**Required Keywords**

- ANO D TENBAN
- ano d tenban
- ANODTENBAN
- ano d tenban devise works
- デバイスワークス 天板
- デバイスワークス ano
- アノディーテンバン

---

## 002

**Brand**

DEVISE WORKS × WANTKEY CAMP

**Target**

ONETOP"D"

**MD-004 Reference**

FUR-017 (Status: Upgrade)

**Required Keywords**

- ONETOP"D"
- ONETOP D
- onetop d
- devise works onetop
- ワントップ
- ワントップD
- デバイスワークス ワントップ

---

## 003

**Brand**

WANTKEY CAMP

**Target**

SC HANDLE

**Required Keywords**

- SC HANDLE
- sc handle
- WANTKEY SC HANDLE
- WANTKEY CAMP SC HANDLE
- WANTKEY
- SCハンドル
- WANTKEY ハンドル

---

## 004

**Brand**

rove troupe

**Target**

RT-01 ECHO LAMP

**MD-004 Reference**

LGT-040 (Status: Essential)

**Required Keywords**

- RT-01
- RT01
- RT-01 ECHO LAMP
- ECHO LAMP
- ROVE TROUPE
- ローブトループ
- エコーランプ

---

## 005

**Brand**

KURASHI MADE

**Target**

DOME LOOK

**MD-004 Reference**

LGT-041 (Status: Essential)

**Required Keywords**

- DOME LOOK
- dome look
- KURASHI MADE
- DOMELOOK
- ドームルック
- くらしメイド

---

## 006

**Brand**

wildingout

**Target**

LF1984

**MD-004 Reference**

LGT-043 (Status: Vacant — 本製品を充当するか検討中。CZ-001参照)

**Required Keywords**

- LF1984
- LF-1984
- WILDINGOUT
- wildingout
- LF1984 ランタン
- ワイルディングアウト

---

## 007

**Brand**

nodel design

**Target**

Miyabi Wood

**MD-004 Reference**

LGT-033, LGT-034 (Status: Upgrade)

**Required Keywords**

- Miyabi Wood
- miyabi wood
- NODEL DESIGN
- NODEL
- 38灯
- 38KT
- Miyabi
- ノデルデザイン
- ミヤビウッド

---

## 008

**Brand**

nodel design

**Target**

Butterfly Table M Black Look

**MD-004 Reference**

FUR-026 (Status: Upgrade)

**Required Keywords**

- Butterfly Table M
- Butterfly Table Black Look
- nodel design butterfly
- ノデルデザイン
- バタフライテーブル
- バタフライテーブル M

---

## 009

**Brand**

neru design works

**Target**

メッシュシェード (Mesh Shade, 38-kT)

**MD-004 Reference**

LGT-017a (Status: Candidate)

**Required Keywords**

- メッシュシェード
- Mesh Shade neru design works
- 38-kT メッシュシェード
- ネルデザインワークス メッシュ

---

## 010

**Brand**

CALMA STORE × neru design works

**Target**

POCKET SHADE M（neru design works柄）

**MD-004 Reference**

LGT-017b (Status: Candidate)

**Required Keywords**

- POCKET SHADE M
- Pocket Shade neru design works
- CALMA STORE ポケットシェード
- ポケットシェード M

---

## 011

**Brand**

IFA

**Target**

Pivotshade

**MD-004 Reference**

LGT-042 (Status: Essential)

**Required Keywords**

- IFA Pivotshade
- Pivotshade
- IFA ピボットシェード
- ピボットシェード

---

## 012

**Brand**

OLD MOUNTAIN

**Target**

MKGP

**MD-004 Reference**

ARM-002 (Status: Essential)

**Required Keywords**

- MKGP OLD MOUNTAIN
- MKGP Palo Santo Holder
- オールドマウンテン MKGP
- MKGP パロサント

---

## 013

**Brand**

Filoméla

**Target**

INCENSE CHAMBER Tokyo Limited

**MD-004 Reference**

ARM-004 (Status: Upgrade)

**Required Keywords**

- Filoméla INCENSE CHAMBER
- Filomela Incense Chamber Tokyo
- フィロメラ インセンスチャンバー
- Filoméla Tokyo Limited

---

## 014

**Brand**

UNIT/04 × KUNST・BAUM

**Target**

SCENT TOWER

**MD-004 Reference**

ARM-003 (Status: Essential)

**Required Keywords**

- UNIT/04 SCENT TOWER
- SCENT TOWER KUNST BAUM
- ユニット04 セントタワー
- UNIT04 diffuser

---

## 015

**Brand**

BALLISTICS / LOCKFIELD EQUIPMENT

**Target**

SHELCON LEG 25

**MD-004 Reference**

STR-006, STR-012 (Status: Essential)

**Required Keywords**

- SHELCON LEG 25
- Ballistics Shelcon Leg
- LOCKFIELD EQUIPMENT Shelcon Leg
- バリスティクス シェルコンレッグ
- シェルコン25 レッグ

---

## 016

**Brand**

nodel design

**Target**

Butterfly Under Shelf

**MD-004 Reference**

STR-021 (Status: Essential)

**Required Keywords**

- Butterfly Under Shelf
- nodel design under shelf
- ノデルデザイン アンダーシェルフ
- バタフライ アンダーシェルフ

---

## 017

**Brand**

nodel design

**Target**

Wood Board

**MD-004 Reference**

STR-015, STR-018 (Status: Essential)

**Notes**

nodel designが「Wood Board」という製品名でそのまま単品販売している。Beck Container ①（STR-013）用のOak（STR-015）およびBeck Container ②（STR-016）用のWalnut（STR-018）。

**Required Keywords**

- nodel design Wood Board
- Wood Board nodel design Oak
- Wood Board nodel design Walnut
- ノデルデザイン Wood Board
- ノデルデザイン ウッドボード

---

## 018

**Brand**

neru design works

**Target**

copper250

**MD-004 Reference**

FIR-025 (Status: Essential)

**Required Keywords**

- copper250 neru design works
- ネルデザインワークス コッパー250
- copper250 gas tube cover

---

## 019

**Brand**

DAMNGOOD!! × OMA FACTORY

**Target**

FT no BARREL

**MD-004 Reference**

FIR-026 (Status: Upgrade)

**Required Keywords**

- FT no BARREL
- DAMNGOOD OMA FACTORY barrel
- エフティーノーバレル
- FT NO BARREL Titanium

---

## 020

**Brand**

MT.SUMI

**Target**

Aura FG

**MD-004 Reference**

FIR-036 (Status: Vacant — 購入時に登録予定)

**Required Keywords**

- MT.SUMI Aura FG
- Aura FG fire pit
- マウントスミ オーラFG

---

## 021

**Brand**

OTEBO CRAFTS

**Target**

BABEL

**MD-004 Reference**

LGT-017 (Status: Essential)

**Required Keywords**

- OTEBO CRAFTS BABEL
- otebo crafts babel
- OTEBO BABEL
- BABEL OTEBO
- OTEBOCRAFTS
- BABEL Walnut
- オテボクラフツ
- オテボクラフツ バベル

---

## 022

**Brand**

Snow Peak

**Target**

ダウン システムオフトン スリムマットセット（BD-060）

**MD-004 Reference**

FUR-032 (Status: Essential)

**Required Keywords**

- BD-060
- Snow Peak BD-060
- snow peak BD-060
- ダウン システムオフトン スリムマットセット
- システムオフトン スリムマットセット
- スノーピーク システムオフトン
- スノーピーク BD-060
- スノーピーク ダウン システムオフトン

---

## 023

**Brand**

KAZE_TO_MORI × WINDY AND RAINY

**Target**

Folding Wire T-box 全面コンプリートセット

**MD-004 Reference**

STR-030 (Status: Essential)

**Required Keywords**

- Folding Wire T-box
- Folding Wire T-box 全面コンプリートセット
- KAZE_TO_MORI T-box
- WINDY AND RAINY T-box
- KAZE_TO_MORI WINDY AND RAINY
- T-box 全面コンプリートセット
- フォールディングワイヤー Tボックス
- Tボックス コンプリートセット

---

# Watch List Maintenance Rules

Watch Listは、頻繁に修正されることを前提とする。

対象の追加・削除・編集は、この章以外のいかなるプロトコルセクションの修正も必要としない。

すべてのpatrolは、検索実行の直前に最新版のWatch Listを読み込む。

キーワードの追加は、可能な限り既存のキーワードを保持したうえで行う。

キーワードの削除は、それが発見精度の向上にもはや寄与しないことを繰り返し確認した後にのみ行う。

Marketplace優先順位は、本プロトコル内で正式に改訂されない限り固定とする。

---

# Operational Directives

すべてのpatrolの前に、Vigilは以下を行う:

1. 本プロトコルを読み込む。
2. Watch Listを読み込む。
3. すべての対象について、すべてのキーワードを実行する。
4. すべてのMarketplaceを優先順位順に検索する。
5. 鮮度を検証する。
6. 過去の情報を除去する。
7. SOLDの出品を除去する。
8. 終了した告知を除去する。
9. 行動可能な機会のみを優先する。
10. Patrol Reportを生成する。

Patrol Reportには、以下を決して含めない:

- 現行の再入荷を伴わないSold Outページ。
- 完了したマーケットプレイス出品。
- 削除された出品。
- 過去のニュース。
- 終了した抽選。
- 終了した予約。
- 新たに行動可能となった事象と直接結びつかない、90日を超える情報。

Vigilの目的は、網羅的な検索ではない。

Vigilの目的は、情報ノイズを最小限に抑えながら、現在有効で、検証可能で、行動可能な調達機会を浮かび上がらせることである。

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、PX-003からCZ-002へ番号を変更した。本文中の他文書参照（TM-005・TM-001・TM-002・TP-004・TP-005・PX-004・PX-005等）を新ID体系へ更新した。Revision History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持した。内容（Ver.2.4）に変更はない。旧ID: PX-003。

---

**End of Document**
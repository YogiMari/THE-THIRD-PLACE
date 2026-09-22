# PX-003
# Vigil Protocol
### THE THIRD PLACE Acquisition Monitoring & Patrol Operations

**Document ID**: PX-003  
**Title**: Vigil Protocol  
**Series**: PX – Project  
**Version**: 2.3  
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

---

# I. Purpose

## Mission

Vigil Protocolは、THE THIRD PLACEにおける調達監視の**実行運用**を定義する。

調査の思想・方法論を定義することは目的としない。それは別途**TM-005 Search Doctrine**が管轄する。

本書の目的は、パトロールがどのように実行されるかを定義することである: 何を検索するか、鮮度と入手可否をどう検証するか、発見内容をどうスコアリングするか、Watch Listをどう維持するか。

---

## Origin

Vigil ProtocolとTM-005 Search Doctrineは、もともと1つの文書であった。

方法論と実行をそれぞれ独立して管理・更新できるよう、後に分割された。

TM-005は**調査がどう考えるべきか**を担う。

PX-003は**調査がどう実行されるか**を担う。

---

## Relationship with Other Documents

```text
TM-005 Search Doctrine
（方法論・思想）
        │
        ▼
PX-003 Vigil Protocol
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
TM-002 Atelier Discovery
（日次インテリジェンスレポート）
        │
        ▼
TM-001 Heritage Chronicle
（長期ナレッジアーカイブ）
```

Vigil Patrolによって発見された内容は、購入判断のためTP-005 Acquisition Strategyへ引き継がれる。

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

エントリ008〜022は、**TP-004 Equipment Registry**を照合し、Status = Essential / Candidate / Upgrade（つまり未Owned）で、かつ既存エントリに含まれていないすべてのアイテムを追加したものである。各エントリには、追跡可能性のため**TP-004 Reference** IDを記載する。Coffee Domain（COF-series）のアイテムは意図的に除外している — 購入されるまでは、PX-004 Barista Codex / PX-005 Acquisition Handbookが引き続き管轄する。

## 001

**Brand**

DEVISE WORKS

**Target**

ANO D TENBAN

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

DEVISE WORKS

**Target**

ONETOP"D"

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

ROVE TROUPE

**Target**

RT-01 ECHO LAMP

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

WILDINGOUT

**Target**

LF1984

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

NODEL DESIGN

**Target**

Miyabi Wood

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

**TP-004 Reference**

FUR-017 (Status: Upgrade)

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

neru design works × LampUp

**Target**

MIYABI RICH Alumi Frozen

**TP-004 Reference**

LGT-015 (Status: Essential)

**Required Keywords**

- MIYABI RICH Alumi Frozen
- MIYABI RICH アルミ
- neru design works LampUp
- ミヤビリッチ
- アルミフローズン
- ネルデザインワークス ランプアップ

---

## 010

**Brand**

neru design works

**Target**

メッシュシェード (Mesh Shade, 38-kT)

**TP-004 Reference**

LGT-028a (Status: Candidate)

**Required Keywords**

- メッシュシェード
- Mesh Shade neru design works
- 38-kT メッシュシェード
- ネルデザインワークス メッシュ

---

## 011

**Brand**

CALMA STORE × neru design works

**Target**

POCKET SHADE M（neru design works柄）

**TP-004 Reference**

LGT-028b (Status: Candidate)

**Required Keywords**

- POCKET SHADE M
- Pocket Shade neru design works
- CALMA STORE ポケットシェード
- ポケットシェード M

---

## 012

**Brand**

IFA

**Target**

Pivotshade

**TP-004 Reference**

LGT-039 (Status: Essential)

**Required Keywords**

- IFA Pivotshade
- Pivotshade
- IFA ピボットシェード
- ピボットシェード

---

## 013

**Brand**

OLD MOUNTAIN

**Target**

MKGP

**TP-004 Reference**

ARM-002 (Status: Essential)

**Required Keywords**

- MKGP OLD MOUNTAIN
- MKGP Palo Santo Holder
- オールドマウンテン MKGP
- MKGP パロサント

---

## 014

**Brand**

Filoméla

**Target**

INCENSE CHAMBER Tokyo Limited

**TP-004 Reference**

ARM-003 (Status: Essential)

**Required Keywords**

- Filoméla INCENSE CHAMBER
- Filomela Incense Chamber Tokyo
- フィロメラ インセンスチャンバー
- Filoméla Tokyo Limited

---

## 015

**Brand**

UNIT/04 × KUNST・BAUM

**Target**

SCENT TOWER

**TP-004 Reference**

ARM-004 (Status: Candidate)

**Required Keywords**

- UNIT/04 SCENT TOWER
- SCENT TOWER KUNST BAUM
- ユニット04 セントタワー
- UNIT04 diffuser

---

## 016

**Brand**

BALLISTICS / LOCKFIELD EQUIPMENT

**Target**

SHELCON LEG 25

**TP-004 Reference**

STR-006, STR-012 (Status: Essential)

**Required Keywords**

- SHELCON LEG 25
- Ballistics Shelcon Leg
- LOCKFIELD EQUIPMENT Shelcon Leg
- バリスティクス シェルコンレッグ
- シェルコン25 レッグ

---

## 017

**Brand**

nodel design

**Target**

Butterfly Under Shelf

**TP-004 Reference**

STR-019 (Status: Essential)

**Required Keywords**

- Butterfly Under Shelf
- nodel design under shelf
- ノデルデザイン アンダーシェルフ
- バタフライ アンダーシェルフ

---

## 018

**Brand**

nodel design

**Target**

Wood Board

**TP-004 Reference**

STR-014, STR-016 (Status: Essential)

**Notes**

nodel designが「Wood Board」という製品名でそのまま単品販売している。Beck Container ①（Oak, STR-014）およびBeck Container ②（Walnut, STR-016）用。

**Required Keywords**

- nodel design Wood Board
- Wood Board nodel design Oak
- Wood Board nodel design Walnut
- ノデルデザイン Wood Board
- ノデルデザイン ウッドボード

---

## 019

**Brand**

neru design works

**Target**

copper250

**TP-004 Reference**

FIR-014 (Status: Essential)

**Required Keywords**

- copper250 neru design works
- ネルデザインワークス コッパー250
- copper250 gas tube cover

---

## 020

**Brand**

DAMNGOOD!! × OMA FACTORY

**Target**

FT no BARREL

**TP-004 Reference**

FIR-015 (Status: Upgrade)

**Required Keywords**

- FT no BARREL
- DAMNGOOD OMA FACTORY barrel
- エフティーノーバレル
- FT NO BARREL Titanium

---

## 021

**Brand**

MT.SUMI

**Target**

Aura FG

**TP-004 Reference**

FIR-019 (Status: Candidate)

**Required Keywords**

- MT.SUMI Aura FG
- Aura FG fire pit
- マウントスミ オーラFG

---

## 022

**Brand**

FIREGRAPHIX

**Target**

BLISS-SP

**TP-004 Reference**

FIR-020 (Status: Candidate)

**Required Keywords**

- FIREGRAPHIX BLISS-SP
- BLISS-SP fire pit
- ファイアーグラフィックス ブリスSP

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

**End of Document**
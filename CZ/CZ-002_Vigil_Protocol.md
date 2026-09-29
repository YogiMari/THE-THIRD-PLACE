# CZ-002
# Vigil Protocol
### THE THIRD PLACE Acquisition Monitoring & Patrol Operations

**Document ID**: CZ-002  
**Title**: Vigil Protocol  
**Series**: CZ – Cross-Zone Ops  
**Version**: 3.9  
**Authority**: SSOT  
**Status**: Active  
**Owner**: THE THIRD PLACE

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| — | — | Version 2.0〜2.16の履歴は archive/CZ-002_Version_History_Archive.md を参照。 |
| 3.0 | 2026-09-24 | Volatility Restructureにより、実行プロトコル各章（II〜VII、Watch List Structure、Watch List Maintenance Rules、Operational Directives）をOP-009 Search Doctrine §XVIII. Patrol Protocolへ逐語移設した。責任範囲の変更のためMajor Version。併せて、プロジェクトオーナーの確認により、エントリ003のBrandを「WANTKEY CAMP × LOCKFIELD EQUIPMENT」、Targetを「SC HANDLE WANTKEY Exclusive」へ確定（旧KN-004 Watch Listの表記を公式表記として採用）し、Required Keywordsに正式製品名を追加。 |
| 3.1 | 2026-09-25 | MD-004 Version 7.57（FIR-036の呼称訂正：Fire Pit→Wood Stove）と連動。エントリ020（MT.SUMI Aura FG）のRequired Keywordsから誤った「fire pit」表記を削除し「薪ストーブ」関連キーワードへ修正。MD-004 ReferenceにFIR-036が薪ストーブ検討枠である旨を明記。Version 2.7でMD-004側の旧FIR-020レコード削除に伴い削除されていたFIREGRAPHIX BLISS-SPを、新設のFIR-036参照でエントリ024として復元登録。あわせて、Current Watch List冒頭の説明文にある旧称参照を「CZ-001 Deliberation Codex」から「CZ-001 Deliberation Dossier」へ更新し、エントリ022（Snow Peak システムオフトン）をMD-004/CZ-001側で確定済みのBD-070／ワイドマットセット表記へ同期した（従来はBD-060／スリムマットセット表記のまま更新漏れとなっていた）。 |
| 3.2 | 2026-09-26 | ヘッダーStatus値『Official』をOP-008 §9.2準拠の『Active』へ統一。 |
| 3.3 | 2026-09-28 | OP-005 Pursuit Strategy Ver.1.5（Acquisition Priority／Acquisition StatusをCoffee Zoneのみ適用、Coffee以外は「買えるときに買う」）に伴い、I. Purpose「Relationship with Other Documents」内の「Vigil Patrolによって発見された内容は、購入判断のためOP-005 Pursuit Strategyへ引き継がれる」を、KN-004への報告・OP-005の基準に従う購入判断・CZ-001「Confirmed — Purchase Pending」による購入待ち管理へ差し替えた。KN-004の常設ダッシュボード改称（Must Buy Dashboard→Horizon、監視対象はCZ-002 Watch Listへ統一）と連動。MARI様のご決定に基づく。 |
| 3.4 | 2026-09-28 | Ver.3.0で実行プロトコル（Freshness Validation〜Operational Directives）をOP-009 §XVIII Patrol Protocolへ移設済みであるにもかかわらず、I. Purpose（Mission／Origin／Relationship with Other Documents）が「本書は調達監視の実行運用を定義する」「CZ-002は調査がどう実行されるかを担う」など、実行主体がCZ-002であるかのような記述のまま残存していた点を是正。Missionを「Watch List（監視対象・調査キーワード）を管理する」旨へ、Originを「OP-009＝方法論と実行手順、CZ-002＝Watch List」へ、Relationship図をCZ-002→OP-009（監視対象を提供）の順へ描き直した。OP-008 §8／Appendix F、OP-009 §XVIの同時改訂と連動。MARI様のご決定に基づく（C-05）。 |
| 3.5 | 2026-09-28 | MD-004の現状に合わせてWatch Listを整理（C-08、MARI様のご決定に基づく）。旧エントリ020 MT.SUMI Aura FGを削除（CZ-001 Decision Log 2026-09-26により不採用確定、MD-004に登録なし）。これに伴い旧021〜024（BABEL／FUR-032／T-box／BLISS-SP）を020〜023へ繰り上げ。エントリ023（FIREGRAPHIX BLISS-SP）のMD-004 Reference・Notesを、「購入時に登録予定・エントリ020と競合」から「MD-004上でStatus: Essential登録済み、2026-09-26付でMT.SUMI Aura FGとの比較検討の末に正式採用」へ訂正。MD-004でStatus = Essentialながら未掲載だった9件を新規追加：024 FUR-034（BlackishGear BLACK ZONE MAT）、025 FUR-035（HOTEL CAMPS リバーシブルホットカバー）、026 FUR-036（Snow Peak BD-066 オフトン ウォームアダプター）、027〜032 FIR-037〜042（FIREGRAPHIX BLISS-SPの付属品6点、Parent: FIR-036、個別エントリとして管理）。Current Watch List冒頭の説明文を「エントリ008〜023」から「エントリ008〜032」へ、Unconfirmed除外枠の例示を「FUR-034 Sleeping Mat、FUR-035 Pad Sheet」（2026-09-28にEssential確定済みのため該当しなくなった）から「STR-034 Container Bridge Frame保護ケース」へ更新。 |
| 3.6 | 2026-09-28 | S-10（改訂履歴の圧縮）に基づき、OP-008 §19 Rule DOC-09に従い、Revision History のうち Version 2.0〜2.16を archive/CZ-002_Version_History_Archive.md へ移設した。移設した履歴は原文のまま保持し、要約・削除は行っていない。本文側のWatch Listデータそのものに変更はない。MARI様のご決定に基づく。 |
| 3.7 | 2026-09-28 | S-11（ヘッダー形式の統一）に基づき、OP-008 §9（全文書はAuthorityおよびStatusを保持する）に従って、文書冒頭のDocument Information（Document ID／Title／Series／Version／Authority／Status／Owner）を整えた。値はOP-008 §8 Document Seriesのカタログに一致させた。本文の内容に変更はない。Patch Version。MARI様の包括指示（2026-09-28）に基づく。 |
| 3.8 | 2026-09-29 | MD-004 Version 7.77（LGT-017aをBrand / Product = Unconfirmedの候補枠へ整理、LGT-017bをRetired）と連動し、旧エントリ009（neru design works メッシュシェード、LGT-017a）と旧エントリ010（CALMA STORE × neru design works POCKET SHADE M、LGT-017b）を削除した。両候補の比較はCZ-001 Deliberation Dossierで管理する。これに伴い旧011〜032を009〜030へ繰り上げ、Current Watch List冒頭の説明文を「エントリ008〜032」から「エントリ008〜030」へ、Unconfirmed除外枠の例示へLGT-017aを追加した。MARI様のご決定に基づく。 |
| 3.9 | 2026-09-29 | 暫定採用項目の個別確認（N-14）。MARI様のご決定に基づき、Coffee Zoneの機材もVigil Protocolの監視対象とし、§Coffee Watch Scope（BR-003でAcquisition Status = Purchase Requiredの全品目をProduct番号で参照して監視）を新設した。Current Watch List冒頭の「Coffee Domainは意図的に除外」の記述と、I. Purpose「Relationship with Other Documents」を合わせて改めた。OP-005 Pursuit Strategy Ver.2.6と連動。Minor Version。 |

---

# I. Purpose

## Mission

Vigil Protocolは、THE THIRD PLACEにおける調達監視の**Watch List（監視対象・調査キーワード）**を管理する。

パトロールがどのように実行されるか（何を検索するか、鮮度と入手可否をどう検証するか、発見内容をどうスコアリングするか）を定義することは目的としない。それは別途**OP-009 Search Doctrine §XVIII. Patrol Protocol**が管轄する。

本書の目的は、監視対象として何を追跡するかを定義し、Watch Listをどう維持するかを定めることである。

---

## Origin

Vigil ProtocolとOP-009 Search Doctrineは、もともと1つの文書であった。

方法論と実行をそれぞれ独立して管理・更新できるよう、後に分割された。

OP-009は**調査がどう考えるべきか、およびどう実行されるか**（方法論と実行手順）を担う。

CZ-002は**Watch List（監視対象・調査キーワード）**を担う。

---

## Relationship with Other Documents

```text
CZ-002 Vigil Protocol
（Watch List：監視対象・調査キーワード）
        │
        │ 監視対象を提供
        ▼
OP-009 Search Doctrine
（方法論・実行手順：Patrol Protocol §XVIII）
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

Vigil Patrolによって発見された内容は、KN-004 Atelier Discoveryへ報告される。購入判断はOP-005 Pursuit Strategyの基準（Decision Priority・Purchase Rules）に従い、購入待ちの管理はCZ-001 Deliberation Dossier「Confirmed — Purchase Pending」が担う。Coffee Zoneの機材（§Coffee Watch Scope）は、購入の順序と時期をBR-003 Procurement Handbook Monthly Acquisition Planが管理する。

---

# II. Freshness Validation

→ OP-009 Search Doctrine §XVIII. Patrol Protocol を参照。

---

# III. Availability Verification

→ OP-009 Search Doctrine §XVIII. Patrol Protocol を参照。

---

# IV. Date Validation

→ OP-009 Search Doctrine §XVIII. Patrol Protocol を参照。

---

# V. Opportunity Evaluation

→ OP-009 Search Doctrine §XVIII. Patrol Protocol を参照。

---

# VI. Reporting Philosophy

→ OP-009 Search Doctrine §XVIII. Patrol Protocol を参照。

---

# VII. Patrol Initiation

→ OP-009 Search Doctrine §XVIII. Patrol Protocol を参照。

---

# VIII. Watch List

Watch Listは、本文書の末尾で維持する。

この位置は、運用上の保守専用として確保する。

対象の追加・削除は、このセクションのみの修正で行う。

Watch Listを維持する際、それ以前のプロトコルの各セクションは変更しない。

すべてのpatrolは、検索実行の直前にこのセクションを読み込む。

## Watch List Structure

→ OP-009 Search Doctrine §XVIII. Patrol Protocol を参照。

---

# Current Watch List

エントリ001〜007は、本改訂以前から存在する。

エントリ008〜030は、**MD-004 Equipment Registry**を照合し、Status = Essential / Candidate / Upgrade（つまり未Owned）で、かつ既存エントリに含まれていないすべてのアイテムを追加したものである。各エントリには、追跡可能性のため**MD-004 Reference** IDを記載する。Coffee Domain（COF-series）のアイテムは、購入されるまではMD-004に登録されないため本エントリ群には含めず、下記§Coffee Watch Scopeで監視する。

エントリ001〜007にも、MD-004上の該当IDが存在するものについては**MD-004 Reference**を付記している（003 WANTKEY CAMP × LOCKFIELD EQUIPMENT SC HANDLE WANTKEY ExclusiveはMD-004に該当IDなし）。MD-004上の製品が未確定（Brand / Product = Unconfirmed）の枠（STR-034 Container Bridge Frame保護ケース、LGT-017a 38-kT用シェード）は、検索対象の製品が定まらないため本リストの対象外とし、CZ-001 Deliberation Dossierで管理する。

## 001

**Brand**

DEVISE WORKS × ANCAM

**Target**

ANO D TENBAN

**MD-004 Reference**

FUR-016

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

FUR-017

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

WANTKEY CAMP × LOCKFIELD EQUIPMENT

**Target**

SC HANDLE WANTKEY Exclusive

**Required Keywords**

- SC HANDLE WANTKEY Exclusive
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

LGT-040

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

LGT-041

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

LGT-043（本製品を充当するか検討中。CZ-001参照）

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

LGT-033, LGT-034

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

FUR-026

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

IFA

**Target**

Pivotshade

**MD-004 Reference**

LGT-042

**Required Keywords**

- IFA Pivotshade
- Pivotshade
- IFA ピボットシェード
- ピボットシェード

---

## 010

**Brand**

OLD MOUNTAIN

**Target**

MKGP

**MD-004 Reference**

ARM-002

**Required Keywords**

- MKGP OLD MOUNTAIN
- MKGP Palo Santo Holder
- オールドマウンテン MKGP
- MKGP パロサント

---

## 011

**Brand**

Filoméla

**Target**

INCENSE CHAMBER Tokyo Limited

**MD-004 Reference**

ARM-004

**Required Keywords**

- Filoméla INCENSE CHAMBER
- Filomela Incense Chamber Tokyo
- フィロメラ インセンスチャンバー
- Filoméla Tokyo Limited

---

## 012

**Brand**

UNIT/04 × KUNST・BAUM

**Target**

SCENT TOWER

**MD-004 Reference**

ARM-003

**Required Keywords**

- UNIT/04 SCENT TOWER
- SCENT TOWER KUNST BAUM
- ユニット04 セントタワー
- UNIT04 diffuser

---

## 013

**Brand**

BALLISTICS / LOCKFIELD EQUIPMENT

**Target**

SHELCON LEG 25

**MD-004 Reference**

STR-006, STR-012

**Required Keywords**

- SHELCON LEG 25
- Ballistics Shelcon Leg
- LOCKFIELD EQUIPMENT Shelcon Leg
- バリスティクス シェルコンレッグ
- シェルコン25 レッグ

---

## 014

**Brand**

nodel design

**Target**

Butterfly Under Shelf

**MD-004 Reference**

STR-021

**Required Keywords**

- Butterfly Under Shelf
- nodel design under shelf
- ノデルデザイン アンダーシェルフ
- バタフライ アンダーシェルフ

---

## 015

**Brand**

nodel design

**Target**

Wood Board

**MD-004 Reference**

STR-015, STR-018

**Notes**

nodel designが「Wood Board」という製品名でそのまま単品販売している。Beck Container ①（STR-013）用のOak（STR-015）およびBeck Container ②（STR-016）用のWalnut（STR-018）。

**Required Keywords**

- nodel design Wood Board
- Wood Board nodel design Oak
- Wood Board nodel design Walnut
- ノデルデザイン Wood Board
- ノデルデザイン ウッドボード

---

## 016

**Brand**

neru design works

**Target**

copper250

**MD-004 Reference**

FIR-025

**Required Keywords**

- copper250 neru design works
- ネルデザインワークス コッパー250
- copper250 gas tube cover

---

## 017

**Brand**

DAMNGOOD!! × OMA FACTORY

**Target**

FT no BARREL

**MD-004 Reference**

FIR-026

**Required Keywords**

- FT no BARREL
- DAMNGOOD OMA FACTORY barrel
- エフティーノーバレル
- FT NO BARREL Titanium

---

## 018

**Brand**

OTEBO CRAFTS

**Target**

BABEL

**MD-004 Reference**

LGT-017

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

## 019

**Brand**

Snow Peak

**Target**

ダウン システムオフトン ワイドマットセット（BD-070）

**MD-004 Reference**

FUR-032

**Required Keywords**

- BD-070
- Snow Peak BD-070
- snow peak BD-070
- ダウン システムオフトン ワイドマットセット
- システムオフトン ワイドマットセット
- スノーピーク システムオフトン
- スノーピーク BD-070
- スノーピーク ダウン システムオフトン

---

## 020

**Brand**

KAZE_TO_MORI × WINDY AND RAINY

**Target**

Folding Wire T-box 全面コンプリートセット

**MD-004 Reference**

STR-030

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

## 021

**Brand**

FIREGRAPHIX

**Target**

BLISS-SP

**MD-004 Reference**

FIR-036

**Notes**

薪ストーブ検討枠。2026-09-26付でMT.SUMI Aura FGとの比較検討の結果、FIREGRAPHIX BLISS-SPを正式採用（CZ-001 Deliberation Dossier「Fire — Wood Stove選定記録」参照）。MD-004上でStatus: Essentialとして登録済み（不採用となった旧MT.SUMI Aura FGのエントリ〈旧020〉は本改訂で削除）。付属品（アルミポータブルスタンド・チムニー2種・チムニートップ・チムニーガード・収納バッグ）は、エントリ027〜032でFIR-037〜042として個別管理する。

**Required Keywords**

- FIREGRAPHIX BLISS-SP
- BLISS-SP 薪ストーブ
- ファイヤーグラフィックス BLISS
- BLISS SP wood stove

---

## 022

**Brand**

BlackishGear

**Target**

BLACK ZONE MAT

**MD-004 Reference**

FUR-034

**Required Keywords**

- BLACK ZONE MAT
- BlackishGear BLACK ZONE MAT
- ブラックゾーンマット
- ブラックイッシュギア マット

---

## 023

**Brand**

HOTEL CAMPS

**Target**

リバーシブル ホットカバー（コットカバー）

**MD-004 Reference**

FUR-035

**Required Keywords**

- HOTEL CAMPS ホットカバー
- リバーシブルホットカバー
- ホテルキャンプス コットカバー
- HOTEL CAMPS reversible hot cover

---

## 024

**Brand**

Snow Peak

**Target**

オフトン ウォームアダプター（BD-066）

**MD-004 Reference**

FUR-036

**Required Keywords**

- BD-066
- Snow Peak BD-066
- スノーピーク ウォームアダプター
- オフトン ウォームアダプター

---

## 025

**Brand**

FIREGRAPHIX

**Target**

アルミポータブルスタンド（FG057）

**MD-004 Reference**

FIR-037（Parent: FIR-036）

**Required Keywords**

- FIREGRAPHIX FG057
- アルミポータブルスタンド
- FIREGRAPHIX アルミポータブルスタンド
- FG057 stove stand

---

## 026

**Brand**

FIREGRAPHIX

**Target**

オーバーレイチムニー（FG004）

**MD-004 Reference**

FIR-038（Parent: FIR-036）

**Required Keywords**

- FIREGRAPHIX FG004
- オーバーレイチムニー
- FIREGRAPHIX オーバーレイチムニー
- FG004 chimney

---

## 027

**Brand**

FIREGRAPHIX

**Target**

オーバーレイチムニー80（5連）（FG017）

**MD-004 Reference**

FIR-039（Parent: FIR-036）

**Required Keywords**

- FIREGRAPHIX FG017
- オーバーレイチムニー80
- オーバーレイチムニー80 5連
- FIREGRAPHIX 延長煙突

---

## 028

**Brand**

FIREGRAPHIX

**Target**

チムニートップ フレキシブル（FG024）

**MD-004 Reference**

FIR-040（Parent: FIR-036）

**Required Keywords**

- FIREGRAPHIX FG024
- チムニートップ フレキシブル
- FIREGRAPHIX スパークアレスター
- FG024 chimney top

---

## 029

**Brand**

FIREGRAPHIX

**Target**

スライドチムニーガード700（FG013）

**MD-004 Reference**

FIR-041（Parent: FIR-036）

**Required Keywords**

- FIREGRAPHIX FG013
- スライドチムニーガード700
- FIREGRAPHIX チムニーガード
- FG013 chimney guard

---

## 030

**Brand**

FIREGRAPHIX

**Target**

ソフトコンテナ L（FG034）

**MD-004 Reference**

FIR-042（Parent: FIR-036）

**Required Keywords**

- FIREGRAPHIX FG034
- ソフトコンテナL
- FIREGRAPHIX 収納バッグ
- FG034 soft container

---

# Coffee Watch Scope

Coffee Zoneの機材は、BR-003 Procurement HandbookでAcquisition Status = Purchase Requiredとなっている全品目を監視対象とする（2026-09-29、MARI様のご決定。OP-005 Pursuit Strategy §Availability Check。N-14）。

- 対象品目はBR-003 Confirmed Equipment Acquisition RegistryのProduct番号で参照し、本書へ品目を転記しない（記録文書は他文書のデータを書き写さない）。購入してAcquisition StatusがPurchase Requiredでなくなった品目は、自動的に対象外となる。
- Targetおよび検索キーワードは、BR-003に記載された製品名・ブランド名とする。BR-003のNotesに入手可否・在庫・カラーの確認に関する注記がある品目は、その点を重点的に確認する。
- Patrolで得た在庫・販売状況は、BR-003 Monthly Acquisition Planに沿った購入判断の材料とする。
- 本節の品目はMD-004 Referenceを持たないため、Current Watch List（MD-004 Reference照合の対象）とは別の節として管理する。

---

# Watch List Maintenance Rules

→ OP-009 Search Doctrine §XVIII. Patrol Protocol を参照。

---

# Operational Directives

→ OP-009 Search Doctrine §XVIII. Patrol Protocol を参照。

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、PX-003からCZ-002へ番号を変更した。本文中の他文書参照（TM-005・TM-001・TM-002・TP-004・TP-005・PX-004・PX-005等）を新ID体系へ更新した。Revision History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持した。内容（Ver.2.4）に変更はない。旧ID: PX-003。

---

**End of Document**

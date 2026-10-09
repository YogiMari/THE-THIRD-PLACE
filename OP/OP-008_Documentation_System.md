# OP-008 Documentation System

**Document ID**: OP-008  
**Title**: Documentation System  
**Series**: OP – Operation (Definition)  
**Version**: 3.22
**Authority**: Standard  
**Status**: Active  
**Owner**: THE THIRD PLACE Project

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | 2026-07-15 | 初版。Documentation SystemをPXシリーズへ移行し、THE THIRD PLACE Projectの正式な運用標準として採用。 |
| 1.1 | 2026-09-07 | Document Series一覧(§8)とReferences(§24)を実際のRepository構成へ整合。TP-010・TP-011、TM-005、PX-003〜PX-006を追加。 |
| 1.2 | 2026-09-19 | Document Series一覧(§8)の反映漏れを修正。PX-007を「Reserved」からPX-007 Deliberation Codex（正式発行済み）へ更新。 |
| 2.0 | 2026-09-19 | プロジェクト全体の文書番号再編（Constitution OP-001 Ver.5.0参照）に伴い、TP-001からOP-008へ番号を変更。本書が定義する文書体系そのものを、旧TP／PX／TM 3系列から、新DS／OP／記録（DB・MD・BR・CZ・KN）系列へ全面的に再構築した（Major Version）。§4 Project Architecture、§5 Series Responsibilities、§6 Responsibility Matrix、§8 Document Series、§11 Naming Convention、§13 SSOT Examples、§14 Reference Rules、§24 Referencesを新体系へ更新。§19の運用ルール番号を、もはや存在しないPX接頭辞から独立したDOC番号へ改称。 |
| 3.0 | 2026-09-24 | Volatility Restructure。§8 Document Seriesを唯一の文書カタログへ拡張（Document ID／Title／Path／Role／Authority／Volatility列を新設、OP-010を追加）。§9にVolatility区分（Static／Periodic／Living）を新設。§24 Referencesの文書一覧を§8参照の1行へ置換。Rule DOC-06の自己矛盾を解消。責任範囲の変更のためMajor Version。（追補）Appendix F — Document Profilesを新設し、README.mdの全文書プロフィール文（日英）を逐語移設。§8にSummary列を新設し、DB-001 Quick Accessの「ひとことで言うと」列を逐語移設。DS-001・OP-008・BR-001〜003・CZ-001〜002のRole列を「See Appendix F」へ更新。BR-002・BR-003のAuthorityをSSOTへ変更（2026-09-24 MARI様承認）。 |
| 3.1 | 2026-09-24 | MARI様のご指摘に基づき、§11 Naming Conventionへ文書名重複禁止ルール（Document Title Uniqueness Rule）を新設。制定にあたり、OP-010／MD-004のRegistry重複、OP-005／BR-003のAcquisition重複、BR-002／CZ-001のCodex重複が判明したため、OP-010をQualification Charterへ、OP-005をPursuit Strategyへ、BR-003をProcurement Handbookへ、BR-002をBarista Canonへ、CZ-001をDeliberation Dossierへそれぞれ改名し是正。§8カタログのTitle／Path列、Appendix Fの該当プロフィール文（日英）を同期。ファイル名もそれぞれ変更。 |
| 3.2 | 2026-09-26 | §8カタログのDB-001 Volatilityが『Periodic』のまま、Rule DOC-08およびDB-001自身のヘッダー記述（Living Document）と矛盾していた点をMARI様確認の上、実態に合わせ『Living』へ修正。 |
| 3.3 | 2026-09-27 | 他の全23文書が備える「Document Renumbering Note」（旧ID開示）が本書のみ欠落していた不整合を、MARI様のご指摘・ご指示に基づき是正。本書末尾へDocument Renumbering Noteを新設し、旧ID: TP-001を明記した。内容の実質的な変更はない。 |
| 3.4 | 2026-09-27 | MARI様のご指摘に基づき、§8カタログのDB-001 Role列にあった「Project Ledgerは、重要な判断の記録先として、本Constitution §9（記録）で参照される」という記述を是正。実際の意思決定記録先はCoffee Domain：BR-002 Barista Canon、Coffee以外の全ゾーン：CZ-001 Deliberation Dossierであり、DB-001は運用ダッシュボードとして会話管理・進捗管理等のみを担う旨へ更新。OP-001 Constitution §9・§14の同時改訂（Ver.5.3）と連動。 |
| 3.5 | 2026-09-27 | OP-001 Constitution §12 Information Hierarchy全面再構成、および同文書§27→§26への繰り上げ是正に伴い、本書内の相互参照2箇所（§11・Document Renumbering Note）をOP-001 §26参照へ更新。MARI様のご指摘に基づく。 |
| 3.6 | 2026-09-28 | OP-005 Pursuit Strategy Ver.1.5（月間予算・Acquisition Priority・Acquisition Status・Monthly Planningの適用範囲をCoffee Zoneに限定、Coffee以外は買えるときに買う方針を新章で明記）に伴い、§8カタログのOP-005行のRole・Summaryを同期。MARI様のご決定に基づく。 |
| 3.7 | 2026-09-28 | Drive⇄GitHub同期運用の決定に伴い、§27 Drive Mirror Operationを新設（Minor Version：章追加）。GitHub→Driveの一方向ミラー、協力者の書き込み先（Contributions）、取り込みの流れを定義。OP-001 §21.1（External Contribution Protocol）と連動。MARI様のご決定に基づく。 |
| 3.8 | 2026-09-28 | KN-004 Atelier Discoveryの常設ダッシュボードの改称（Must Buy Dashboard→Horizon、監視対象はCZ-002 Watch Listへ統一）に伴い、Appendix F — Document ProfilesのKN-004紹介文（日英）を同期。MARI様のご決定に基づく。 |
| 3.9 | 2026-09-28 | OP-005 Pursuit Strategy Ver.2.0（Acquisition Priority／Acquisition Status／Monthly Planningの3章を削除しBR-003参照へ置換、月間予算とCoffee以外の調達方針のみを保持）に伴い、§8カタログのOP-005行のRoleを同期。MARI様のご決定に基づく。 |
| 3.10 | 2026-09-28 | OP-005 Pursuit Strategy Ver.2.1（購入優先度・購入状態・月次購入計画はBR-003の管轄、Coffee以外は買えるときに買う、市場監視はCZ-002／OP-009の管轄という実態に合わせ、Purpose・Relationship to Other Core Documentsの「いつ・どの順序で」「取得順序・取得時期・市場監視」という残存記述を是正）に伴い、§8カタログのOP-005行のRoleおよびAppendix F（日英）のOP-005紹介文を同期。市場監視の管理元をCZ-002／OP-009へ明記した。MARI様のご決定に基づく（C-04）。 |
| 3.11 | 2026-09-28 | CZ-002 Ver.3.0で実行プロトコル（Freshness Validation〜Operational Directives）がOP-009 §XVIII Patrol Protocolへ移設済みであるにもかかわらず、Appendix FのOP-009紹介文（日英）「実際の実行手順はCZ-002が別途管理する」、§8カタログのCZ-002 Summary「パトロールの実行手順」、Appendix FのCZ-002紹介文（日英）「鮮度を評価するリサーチ運用プロトコル」が逆の記述のまま残存していた点を是正。「OP-009＝方法論と実行手順（§XVIII）、CZ-002＝Watch List（監視対象・調査キーワード）」に統一。CZ-002 I. PurposeおよびOP-009 §XVIの同時改訂と連動。MARI様のご決定に基づく（C-05）。 |
| 3.12 | 2026-09-28 | §15 Document Dependenciesが「依存関係はProject Ledgerにて管理する」としていたが、DB-001に該当節が存在せず、Rule DOC-06（文書一覧はOP-008 §8が唯一の正本、Project LedgerはCurrent Focus等の運用情報のみを管理）とも整合しなかった点を是正し、「依存関係は各文書のReferences（Related Documents）にて個別に表現し、一元的な依存関係台帳は持たない」へ書き換えた。§18.1手順5「Project Ledgerへ登録すること」も同じ矛盾があったため「OP-008 §8 Document Seriesへ登録すること」へ改めた。§18.2「Project Ledgerを運用している場合は、更新内容を反映する」は、DB-001が個別文書の更新内容を記録する節を持たない実態と整合しないため削除した。MARI様のご決定に基づく（C-13）。Patch Version。 |
| 3.13 | 2026-09-28 | KN発行方針の参照先不在（DB-001が参照する「ways-of-working KN issuance rules」がリポジトリに実在しない不整合）を是正するため、§28 KN Publication Policyを新設（Minor Version：章追加）。KN-001〜004の本文はGitHubに置かず、Artifactとしてのみ発行する方針と、その理由（発行物が今後何百と増えていく見込みであるため）を明文化した。DB-001の参照を本節へ統一。MARI様のご決定に基づく（C-14）。 |
| 3.14 | 2026-09-28 | §8カタログのKN-003 Role列が「体験・価値観・人生との関係」の管理対象列挙に留まり、KN-003本文Purposeが定めるカルチャーマガジンとしての編集目的（キャンプという趣味に留まらず、建築・家具・照明・工業デザイン・自動車・写真・ライフスタイルなど分野横断でTHE THIRD PLACEの美意識を育てる）を欠いていた不整合を是正。KN-003本文Purposeを正として、Role列へ当該記述を追記した。Summary列は変更なし。OP-002 Editorial Series（KN-003）の同時改訂と連動。MARI様のご決定に基づく（C-17）。Patch Version。 |
| 3.15 | 2026-09-28 | S-06（BR-003のルールとデータの分離）に伴い、BR-003 Procurement HandbookのLiving文書に置かれていた恒久ルール（Acquisition Status Policy・Purchasing Priority・Purchase List Definition・各種Purchase Policy等）をOP-005 Pursuit Strategy §Coffee Zone Acquisition Rulesへ移設する方針決定に合わせ、§8カタログのOP-005行RoleへCoffee Zone調達の恒久ルールを本書§Coffee Zone Acquisition Rulesが定義する旨を追記した（OP-008 §23 Change Managementに基づき、OP-005・BR-003本体の改訂に先行して反映）。責任範囲の管理主体（値の割り当てはBR-003、ルールの定義はOP-005）自体はOP-005 Ver.2.0の決定と矛盾しない。MARI様のご決定に基づく。 |
| 3.16 | 2026-09-28 | S-10（改訂履歴の圧縮）に伴い、§19にRule DOC-09（Revision Historyの一定規模超過時、直近履歴を本文に残しそれ以前をarchive/へ移設できる旨）を新設し、§10 Document Lifecycleへ参照注記を追加した（OP-008 §23 Change Managementに基づき、MD-004・MD-003・CZ-001・CZ-002・BR-003本体の履歴移設に先行して反映）。MARI様のご決定に基づく。 |
| 3.17 | 2026-09-28 | 整備バックログ（N-01・N-04・N-05）で新設された内容に合わせ、§8カタログのOP-006 Role（Safety・Material Care）とDB-001 Role（Field Log）、Appendix FのOP-006・DB-001紹介文（日英）を同期。DB-001紹介文に残っていたProject Overview（S-08で削除済み）の記述をProject Inbox・Field Logへ置き換えた。MARI様の包括指示に基づく。Patch Version。 |
| 3.18 | 2026-10-01 | Document Renumbering Noteの旧IDを「TP-001」から「PX-001」へ訂正した。新旧ID対応の正式な参照先であるOP-001 Constitution Appendix C Ver.5.0（OP-001 §26）は「PX-001→OP-008」「TP-001→OP-001」と定めており、OP-001 §26本文も「PX-001（新ID：OP-008）」と記している。本書Version 1.0の「Documentation SystemをPXシリーズへ移行」とも整合する。Revision History内のVersion 2.0・3.3の行にある「TP-001」の記述は、歴史的記録として原文のまま保持する。プロジェクトオーナーのご指示に基づく。Patch Version。 |
| 3.19 | 2026-10-03 | MD-004 Equipment Registry Object ReferenceのDomain別分割（AIが必要なDomainのみを読めるようにするためのファイル再構成）に伴い、§11.2 Multi-file Documentを新設した（Minor Version：節追加）。あわせて§8カタログのMD-004のPathを、分割後の入口ファイル `MD/MD-004/MD-004_Equipment_Registry_Object_Reference.md` へ更新した。Document ID・Title・Authority・Volatilityは変更しない。MARI様のご決定に基づく。 |
| 3.20 | 2026-10-08 | BR-004 Terroir Almanacを新設（Minor Version：文書追加）。コーヒー豆に関する全ての記録を本書で管理し、BR-002 Barista Canonはコーヒー機材のみ、BR-003 Procurement HandbookもCoffee Equipmentの調達のみとする方針（MARI様のご決定、2026-10-08）に基づく。§8カタログへBR-004（Authority：SSOT、Volatility：Living）を登録し、§5 Series ResponsibilitiesのBR系列の説明、Appendix F（日英）のBR系列の紹介文を同期した。タイトルは、既存の全文書タイトルと語の重複がないこと（§11.1）を確認のうえ、MARI様が選定した。OP-008 §23に従い本書を先に更新し、BR-002 Ver.4.16・BR-003 Ver.4.10・BR-004 Ver.1.0を同時に反映した。 |
| 3.21 | 2026-10-09 | BR-004 Terroir Almanac Ver.1.1（豆選びの暫定基準の採用、§6新設）に伴い、§8カタログのBR-004行のRole、およびAppendix F（日英）のBR-004紹介文を同期した。Roleの「豆選びの基準・購入した豆の記録項目は、決定後に本書へ追加する」を、暫定基準は本書が管理し、購入した豆の記録項目は決定後に追加する旨へ改めた。Authority（SSOT）・Volatility（Living）は変更しない。暫定基準は見直し前提であり恒久ルールではないため、§9.3との矛盾は生じない（恒久化する場合は置き場所を改めて決める。BR-004 §7参照）。MARI様のご決定（2026-10-09）に基づく。Patch Version。 |
| 3.22 | 2026-10-08 | MD-004 Ver.8.8でCoffee Domain用の部品ファイル `MD-004_COF_Coffee.md` を新設し、Domain別ファイルが7つ（FUR／LGT／ARM／STR／FIR／SHL／COF）になったことを確認した。部品ファイルは§11.2に従い入口ファイル（MD-004）の一部であり、§8カタログへの新規登録は不要（Document ID・Title・Authority・Volatility・Pathは変更なし）。あわせてAppendix F（日英）のMD-004紹介文を、OP-010 Ver.3.6のCoffee登録時点（購入した時点。到着を待たない）に合わせた。Patch Version。MARI様のご決定（2026-10-08）に基づく。 |

---

# 1. Purpose

本書は、THE THIRD PLACE Project における文書体系および運用基準を定義する。

DS・OP・記録（DB・MD・BR・CZ・KN）の各系列が長期にわたり一貫した構造で運用されることを目的とする。

本書は、文書の役割、分類、管理方法および運用ルールを定義する、文書体系そのものの基準文書である。

---

# 2. Scope

本書は、THE THIRD PLACE Project に存在するすべての正式文書へ適用する。

## Included

- DS Series
- OP Series
- 記録（DB・MD・BR・CZ・KN Series）

## Excluded

- 一時メモ
- 作業メモ
- 個人的なメモ
- 試験用ドラフト
- 非公開作業資料

---

# 3. Terms and Definitions

本書で使用する主要用語を定義する。

| Term | Definition |
|------|------------|
| Document | THE THIRD PLACE を構成する正式文書 |
| Series | DS・OP・記録（DB・MD・BR・CZ・KN）の文書群 |
| Authority | 文書の権限区分 |
| Status | 文書のライフサイクル状態 |
| SSOT | Single Source of Truth（唯一の正本） |
| Reference | 他文書への参照情報 |
| Revision | 文書の改訂履歴 |
| Governance | 文書運用ルール |
| Lifecycle | 文書の状態遷移 |

---

# 4. Project Architecture

THE THIRD PLACE Project は、可変性の度合いによって区分された系列で構成される。

```text
THE THIRD PLACE

├── DS
│     設計（絶対不変）
│
├── OP
│     運用（定義：不変だが改訂の可能性あり）
│
└── 記録（可変）
      │
      ├── DB   Dashboard
      ├── MD   Master Data
      ├── BR   Barista
      ├── CZ   Cross-Zone Ops
      └── KN   Knowledge
```

各系列は独立した責任範囲を持ち、相互に役割を侵害してはならない。

---

# 5. Series Responsibilities

## DS — Design（絶対不変）

DSシリーズは、THE THIRD PLACEの不変の思想的原典を保持する。

対象

- Human Principlesの原典的記述

DSシリーズは、通常の意思決定プロセスによる改訂を前提としない。

---

## OP — Operation（定義）

OPシリーズは、THE THIRD PLACEの設計思想・規則・法則そのものを定義する。

対象

- Constitution
- Design Philosophy
- Design Rules
- Vocabulary / Grammar
- Documentation Governance
- Research Methodology

OPシリーズは、Versionは改訂されるが、個別データの入れ替えは伴わない。

---

## 記録（DB・MD・BR・CZ・KN）— Record（可変）

記録系列は、THE THIRD PLACE Project の運用データ・所有物・意思決定・アーカイブを保持する。

対象

- Dashboard（運用管理そのもの）
- Master Data（所有物・場所の台帳）
- Barista（コーヒー機材の意思決定・調達・手入れ、およびコーヒー豆の記録）
- Cross-Zone Ops（コーヒー以外のゾーンの検討・市場監視）
- Knowledge（知の蓄積・文化アーカイブ）

記録系列は、設計思想そのものを定義しない。

---

# 6. Responsibility Matrix

| Series | Responsibility | Not Responsible For |
|---------|----------------|---------------------|
| DS | 不変の思想原典 | Project Operation / Records |
| OP | 設計・規則の定義 | Project Operation Data |
| 記録（DB/MD/BR/CZ/KN） | Project Operation / Records | Design Philosophy |

各系列は、自身の責任範囲のみを保持する。

機能重複は禁止する。

---

# 7. Project Principles

文書体系は以下の原則に従う。

## Principle 001

One Document, One Responsibility

一つの文書は、一つの責任のみを持つ。

---

## Principle 002

No Functional Overlap

既存文書と役割が重複する新規文書を作成してはならない。

---

## Principle 003

Single Source of Truth

同一情報は一箇所のみで管理する。

重複管理は禁止する。

---

## Principle 004

Human First

人が迷わず利用できる構造を最優先とする。

---

## Principle 005

AI Friendly

見出し・用語・構造を統一し、AIが一貫して解釈できる構造を維持する。

---

# 8. Document Series

文書カタログ（文書一覧）は本節を唯一の正本（SSOT）とする。

各文書の Role（役割説明）は OP-001 Constitution §13.2〜13.18 より逐語移設したものである（移設元には参照のみ残す。詳細は Revision History 参照）。 DS-001／OP-008／BR-001〜003／CZ-001〜002はOP-001 §13.2〜13.18に該当節がないため、Role列は「See Appendix F」とし、Appendix F — Document Profiles（README.mdから移設したプロフィール文）を参照する。Summary列はDB-001 Project LedgerのQuick Access（「ひとことで言うと」列）から逐語移設したものである（OP-010は本Restructureで新設のため元データなし）。

Authority 列は本 Version（3.0）で新設された分類である。BR-001／DB-001／OP-008の既存の文書内 Authority 宣言に加え、他区分は2026-09-24 MARI様承認（BR-002・BR-003はSSOTへ変更）。

| Document ID | Title | Path | Role | Authority | Volatility | Summary |
|---|---|---|---|---|---|---|
| DS-001 | THE THIRD PLACE Original | `DS/DS-001_Original.md` | See Appendix F | SSOT | Static | 不変の人生哲学の原典。プロジェクトの出発点となった考え方そのもの |
| OP-001 | Constitution | `OP/OP-001_Constitution.md` | 管理対象<br>・Human Principles<br>・Project Principles<br>・Document Architecture<br>・Project Governance | Standard | Static | プロジェクト全体の最高位規則書。文書体系・SSOT・GitHub運用ルールを定義 |
| OP-002 | Design Bible | `OP/OP-002_Design_Bible.md` | 管理対象<br>・空間思想<br>・デザイン原理<br>・空間全体の完成定義 | SSOT | Static | 空間づくりの設計思想 |
| OP-003 | Affinity Lexicon | `OP/OP-003_Affinity_Lexicon.md` | 管理対象<br>Affinity Lexiconは、<br>Human Principlesから派生する<br>「好み」<br>を管理する文書である。<br>対象は、<br>ブランドではない。<br>美意識でもない。<br>人生を通して蓄積される<br>嗜好、<br>感性、<br>建築、<br>家具、<br>文化、<br>色、<br>素材、<br>音、<br>香り、<br>思想、<br>世界観<br>などを体系的に記録する。<br>Affinity Lexiconは、<br>Design Bibleを変更する権限を持たない。<br>Human Principlesを説明する補助資料として扱う。 | Standard | Static | 好み・美意識を表す語彙辞典 |
| OP-004 | Aesthetic Grammar | `OP/OP-004_Aesthetic_Grammar.md` | 管理対象<br>・比率<br>・余白<br>・光と陰影<br>・素材と質感<br>・色<br>・構成と動線<br>・調和<br>Aesthetic Grammarは、<br>Affinity Lexiconが定義する語彙に、<br>「なぜ美しいのか」という法則を与える。 | Standard | Static | 「なぜそれが美しいのか」を説明する法則集 |
| OP-005 | Pursuit Strategy | `OP/OP-005_Pursuit_Strategy.md` | 管理対象<br>・迎える判断基準（Decision Priority・Purchase Rules）<br>・月間予算（Coffee Zoneのみ）<br>・Coffee以外のゾーンの調達方針（買えるときに買う）<br>・Coffee Zone調達の恒久ルール（Acquisition Status定義／Purchasing Priority／Purchase List Definition／各種Purchase Policy等。詳細は本書§Coffee Zone Acquisition Rules）<br>Coffee Zoneの購入優先度・購入状態・月次購入計画の実際の値の割り当ては、<br>BR-003 Procurement Handbookが管理する。<br>市場監視は、<br>CZ-002 Vigil Protocol／OP-009 Search Doctrineが管理する。<br>Equipmentの詳細情報は保持しない。 | Standard | Static | 何を・どんな基準で迎えるかの戦略。月間予算はCoffee Zoneのみ |
| OP-006 | Foundation Compass | `OP/OP-006_Foundation_Compass.md` | 管理対象<br>・Equipment Module<br>・Vehicle Loading<br>・Deployment Sequence<br>・Recovery Sequence<br>・Seasonal Configuration<br>・Maintenance Cycle<br>・Safety（火・燃料・シェルターの安全原則）<br>・Material Care（Coffee以外の素材別ケア）<br>Containerごとの具体的な役割・固定収納物は、<br>MD-001 Storage Blueprintが管理する。<br>本書では重複して記載しない。 | Standard | Static | 積載・設営・撤収・季節ごとの運用のしかた |
| OP-007 | Habitat Architecture | `OP/OP-007_Habitat_Architecture.md` | 管理対象<br>・居住空間<br>・サイト構成<br>・ゾーニング<br>・空間構成 | Standard | Static | 現地で完成する暮らしの空間そのものの設計思想 |
| OP-008 | Documentation System | `OP/OP-008_Documentation_System.md` | See Appendix F | Standard | Static | 文書運用ルールそのものの基準書 |
| OP-009 | Search Doctrine | `OP/OP-009_Search_Doctrine.md` | 管理対象<br>・調査の哲学・方法論<br>・情報源の優先順位<br>・Difference Analysis手法<br>監視対象（Watch List）・調査キーワード自体は、<br>CZ-002 Vigil Protocolが管理する。 | Standard | Static | 調査の哲学・方法論 |
| OP-010 | Qualification Charter | `OP/OP-010_Qualification_Charter.md` | OP-010 Qualification Charter は、記録系列台帳（MD-002／MD-003／MD-004）の登録規則・評価基準を定義する。 | Standard | Static | 台帳（MD-002／003／004）の登録規則・評価基準の基準書 |
| DB-001 | Project Ledger | `DB/DB-001_Project_Ledger.md` | 管理対象<br>・Conversation Ledger（会話記録・検索用ワード）<br>・Active Conversations<br>・Quick Access<br>・Field Log（キャンプの計画と実施の記録）<br>Project Ledgerは、<br>会話管理・進捗管理等の運用状況を扱う運用ダッシュボードであり、<br>個別の意思決定内容そのものは保持しない（意思決定はCoffee Domain：BR-002、Coffee以外の全ゾーン：CZ-001が担う。OP-001 Constitution §9・§14参照）。 | Standard | Living | この文書。会話履歴・早見表・運用ダッシュボード |
| MD-001 | Storage Blueprint | `MD/MD-001_Storage_Blueprint.md` | 管理対象<br>・収納<br>・収納ルール<br>・Container Assignment | SSOT | Living | 収納・コンテナの割り当てルール |
| MD-002 | Field Atlas Landscape Framework | `MD/MD-002_Field_Atlas_Landscape_Framework.md` | 管理対象<br>・キャンプ場<br>・ロケーション<br>・適性評価<br>・運用条件 | SSOT | Periodic | キャンプ場・ロケーションの選定と評価 |
| MD-003 | Galley Fare | `MD/MD-003_Galley_Fare.md` | 管理対象<br>・キッチン調理器具<br>・調理の機能的必然性に基づく選定基準<br>Galley Fareは、<br>Equipment Registryとは異なる評価軸を持つ、<br>独立したMaster Databaseである。<br>所作、<br>デザイン、<br>ブランドの格を、<br>必須条件としない。<br>実際に調理が成立する機能性を、<br>最優先とする。 | SSOT | Living | キッチン道具だけの独立した台帳 |
| MD-004 | Equipment Registry Object Reference | `MD/MD-004/MD-004_Equipment_Registry_Object_Reference.md` | 管理対象<br>・所有物<br>・購入予定<br>・Status<br>・Zone<br>・Category<br>・Official Name<br>Equipment Registryは、<br>Human Principlesとの美意識的整合を条件とする所有物の、<br>唯一のMaster Databaseである。<br>調理の機能的必然性に基づくキッチン機材は、<br>MD-003 Galley Fareが独立して管理する。 | SSOT | Living | 所有物・購入予定ギアの唯一の台帳（キッチン以外） |
| BR-001 | Brew Care | `BR/BR-001_Brew_Care.md` | See Appendix F | Standard | Static | コーヒー機材のお手入れ・洗浄・保管ルール |
| BR-002 | Barista Canon | `BR/BR-002_Barista_Canon.md` | See Appendix F | SSOT | Periodic | コーヒー機材の意思決定文書 |
| BR-003 | Procurement Handbook | `BR/BR-003_Procurement_Handbook.md` | See Appendix F | SSOT | Living | コーヒー機材の調達先・価格・購入計画 |
| BR-004 | Terroir Almanac | `BR/BR-004_Terroir_Almanac.md` | 管理対象<br>・コーヒー豆に関する全ての記録<br>・Current Rotation<br>・調査記録<br>・豆選びの暫定基準（見直し前提）<br>コーヒー機材は、<br>BR-002／BR-003が管理する。<br>購入した豆の記録項目は、<br>決定後に本書へ追加する。 | SSOT | Living | コーヒー豆の記録（ローテーション・調査・購入） |
| CZ-001 | Deliberation Dossier | `CZ/CZ-001_Deliberation_Dossier.md` | See Appendix F | SSOT | Living | コーヒー以外のゾーンで検討中のギアの比較・検討記録 |
| CZ-002 | Vigil Protocol | `CZ/CZ-002_Vigil_Protocol.md` | See Appendix F | SSOT | Living | 欲しいギアの市場監視Watch List（監視対象・調査キーワード） |
| KN-001 | Heritage Chronicle | `KN/KN-001_Heritage_Chronicle.md` | 管理対象<br>・活動記録<br>・月次記録<br>・完成までの歩み<br>Chronicleは、<br>歴史を保存する文書である。<br>設計判断は記載しない。 | Archive | Static | プロジェクトの歴史・決定理由のアーカイブ |
| KN-002 | Cultural Pantheon | `KN/KN-002_Cultural_Pantheon.md` | 管理対象<br>・ブランド文化<br>・Creator<br>・Community<br>・Gallery<br>・Shop<br>・Brand Tier（S〜D）<br>・Brand Lineage（系譜）<br>Cultural Pantheonは、<br>Equipment情報を保持しない。<br>ブランドの背景・思想のみを扱う。 | Reference | Static | ブランドの文化・背景・系譜のアーカイブ |
| KN-003 | Beyond Journey | `KN/KN-003_Beyond_Journey.md` | 管理対象<br>・体験<br>・価値観<br>・人生との関係<br>Beyond Journeyは、<br>キャンプという趣味に留まらず、<br>建築・家具・照明・工業デザイン・自動車・写真・ライフスタイルなど分野横断で、<br>THE THIRD PLACEの美意識を育てるカルチャーマガジンである。 | Archive | Static | キャンプを超えたデザイン文化を紹介するカルチャーマガジン |
| KN-004 | Atelier Discovery | `KN/KN-004_Atelier_Discovery.md` | 管理対象<br>・市場調査<br>・ブランド調査<br>・技術調査<br>・比較調査<br>Discoveryは、<br>研究記録である。<br>Discoveryに記載された内容は、<br>正式情報ではない。<br>採用された時点で、<br>各Master Documentへ反映される。 | Reference | Static | 市場・ブランドの「今」を観測するリサーチメディア |

---
# 9. Document Classification

すべての正式文書は、Authority および Status を保持する。

Authority は文書の役割を示し、Status は文書の現在の状態を示す。

Authority と Status は独立して管理する。

---

## 9.1 Authority

| Authority | Description |
|-----------|-------------|
| SSOT | 唯一の正本。唯一の管理元となる文書。 |
| Standard | プロジェクト標準を定義する文書。 |
| Reference | 補足資料・参考資料。 |
| Archive | 過去の履歴として保存する文書。 |

Authority は発行後、原則として変更しない。

---

## 9.2 Status

| Status | Description |
|---------|-------------|
| Draft | 作成中 |
| Review | レビュー中 |
| Active | 正式運用中 |
| Archive | 保存済み |
| Deprecated | 廃止済み |

Status は文書ライフサイクルに従って変更する。

---

## 9.3 Volatility

すべての正式文書は、Authority および Status に加え、Volatility（変動性）を保持する。

Volatility は、文書に記載される内容がどの程度の頻度で更新される前提かを示す区分である。

| Volatility | Description |
|------------|-------------|
| Static | 原則更新されない（規則・原典・編集方針）。 |
| Periodic | 決定の変化時に更新する。 |
| Living | 台帳・リスト。頻繁に更新される前提。 |

各文書の Volatility 区分は §8 Document Series のカタログ表を正本とする。

Static 文書に Living データを置かない。Living 文書に恒久ルールを置かない。記録文書は他文書の Status を書き写さず、ID参照のみとする。

---

# 10. Document Lifecycle

正式文書は以下のライフサイクルに従う。

```text
Draft

↓

Review

↓

Active

↓

Archive

↓

Deprecated
```

文書は削除しない。

履歴を保持することを優先する。

履歴が一定規模を超えた場合の移設ルールは Rule DOC-09 を参照。

---

# 11. Naming Convention

文書番号はシリーズごとに採番する。

```
Series-Number Document Title
```

例

```
MD-004 Equipment Registry Object Reference

KN-001 Heritage Chronicle

OP-008 Documentation System
```

文書公開後は、Document ID を変更してはならない（2026-09-19付の文書番号再編は、プロジェクトオーナー自身による意図的なDocument Architecture変更であり、本原則の例外として正式に記録される。詳細はOP-001 Constitution §26参照）。

Title の変更は必要最小限とする。

---

## 11.1 Document Title Uniqueness Rule（2026-09-24新設）

文書タイトル（§8カタログのTitle列に記載される名称そのもの）は、既存の他文書のタイトルと同じ単語を含んではならない。

本ルールは文書タイトルにのみ適用する。文書本文中の見出し・データ項目名（例：Acquisition Priority、Acquisition Status等の記録系フィールド名）や、Constitution §17が定義するCanonのような概念語の使用までは制限しない。

文書公開後はDocument IDを変更してはならない、というNaming Convention本則は維持されるが、本ルールに抵触することが判明した既存タイトルについては、第11節の定める「必要最小限」の例外としてTitle変更を認める。

制定時点（2026-09-24、MARI様のご指摘）で判明していた重複と是正内容は以下の通り。

| 重複語 | 旧タイトル | 新タイトル |
|---|---|---|
| Registry | OP-010 Registry Standard | OP-010 Qualification Charter |
| Acquisition | OP-005 Acquisition Strategy | OP-005 Pursuit Strategy |
| Acquisition | BR-003 Acquisition Handbook | BR-003 Procurement Handbook |
| Codex | BR-002 Barista Codex | BR-002 Barista Canon |
| Codex | CZ-001 Deliberation Codex | CZ-001 Deliberation Dossier |

新規文書を発行する際は、既存の全文書タイトル（§8参照）と語が重複しないことを、発行前に確認する。

## 11.2 Multi-file Document（2026-10-03新設）

1つの文書の内容が大きく、利用者（人・AI）が必要な部分のみを読む方が適切な場合、その文書を複数のファイルへ分割できる。分割しても文書は1つであり、以下に従う。

- Document ID・Title・Authority・Volatilityは分割前と同一とし、新しいDocument IDを増やさない。
- ファイルは `{SERIES}/{Document ID}/` フォルダに置く。
- 入口ファイル（`{Document ID}_{Title}.md`、従来のファイル名）が、文書のヘッダー・Version・Revision History（またはVersion History）・総則を保持する。§8カタログのPath列には入口ファイルのパスを記載する。
- 部品ファイル（`{Document ID}_{Part}_{Word}.md`）は、入口ファイルと同じフォルダに置く。先頭に、Document IDと入口ファイルへの参照を明記する。部品ファイルはVersionを持たず、変更履歴は入口ファイルへ記録する。
- 分割前後で記録の内容は変更しない。分割は置き場所の変更であり、Documentの内容改訂ではない。

---

# 12. Version Policy

Version は Semantic Versioning の考え方を採用する。

---

## Major Version

文書構造・責任範囲・仕様変更。

例

```
1.0 → 2.0
```

---

## Minor Version

章追加・機能追加・構成追加。

例

```
2.0 → 2.1
```

---

## Patch Version

誤字修正・文章修正・軽微修正。

例

```
2.1.0 → 2.1.1
```

---

# 13. Single Source of Truth

同じ情報は複数の文書で管理してはならない。

情報は一つの SSOT のみが保持する。

参照は自由に行ってよい。

複製は禁止する。

---

## SSOT Examples

| Information | SSOT |
|-------------|------|
| Equipment | MD-004 |
| Design Philosophy | OP-002 |
| Project Documentation | OP-008 |
| Project Status | DB-001 |

---

# 14. Cross References

文書間の関係は Reference によって表現する。

本文を複製してはならない。

必要な情報は、責任を持つ文書を参照する。

---

## Reference Rules

許可される例

```
See MD-004 Equipment Registry Object Reference.
```

禁止例

MD-004 の内容を別文書へコピーして保持すること。

---

# 15. Document Dependencies

文書間には依存関係が存在する。

依存関係は、各文書の References（Related Documents）にて個別に表現する。

一元的な依存関係台帳は持たない。

---

# 16. Document Ownership

各文書には一つの責任を持つ。

複数文書が同じ責任を持ってはならない。

責任が重複する場合、

新規文書ではなく既存文書を更新する。

---

# 17. Reserved Numbers

未使用番号は将来利用のため保持する。

欠番は原則として作らない。

不要になった番号も再利用しない。

Document ID は永続的な識別子とする。


# 18. Governance

すべての正式文書は、本章で定義する運用手順に従う。

---

## 18.1 Document Creation

新規文書を作成する前に、以下を確認する。

1. 既存文書で対応できないこと
2. DS・OP・記録（DB/MD/BR/CZ/KN）のいずれに属するか
3. 責任範囲が既存文書と重複しないこと
4. Document ID を採番すること
5. OP-008 §8 Document Series へ登録すること

これらを満たした場合のみ、新規文書を発行する。

---

## 18.2 Document Update

文書を更新した場合は、Version を更新する。

更新内容は Revision History に記録する。

---

## 18.3 Document Retirement

不要となった文書は削除しない。

Status を Archive または Deprecated に変更し、履歴として保持する。

---

# 19. Documentation Operating Rules

文書体系は以下の運用ルールに従う。

---

## Rule DOC-01

記録系列は、プロジェクト運用のみを対象とする。

設計思想・原典は保持しない。

---

## Rule DOC-02

DS・OP・記録 の責任範囲を侵害してはならない。

---

## Rule DOC-03

Project Ledger はプロジェクトの運用状況を管理する。

Documentation System は運用ルールを管理する。

両者の役割を混在させてはならない。

---

## Rule DOC-04

正式文書は必ず Documentation System に従う。

例外を設けない。

---

## Rule DOC-05

すべての文書は References を用いて相互参照する。

本文の複製は禁止する。

---

## Rule DOC-06

文書カタログ（文書一覧）は OP-008 §8 を唯一の正本とする。

Project Ledger は Current Focus・Conversation・Inbox 等の運用情報を管理し、文書一覧は OP-008 §8 を参照する。

---

## Rule DOC-07

Conversation は履歴として保持する。

チャットを削除した場合でも、

Project Ledger 上では履歴を残すことを推奨する。

---

## Rule DOC-08

Project Ledger は Living Document として運用する。

Documentation System は Standard Document として運用する。

---

## Rule DOC-09

文書の Revision History（Version History）が一定規模を超えた場合、直近の履歴のみを本文に残し、それ以前の履歴を `archive/{Document ID}_Version_History_Archive.md` へ移設できる。

移設した履歴は原文のまま保持し、要約・削除はしない。

本文側の Revision History冒頭に、移設先ファイルへの参照を明記する。

---

# 20. Quality Principles

文書体系は以下を品質基準とする。

- Readability
- Consistency
- Maintainability
- Traceability
- Scalability

これらを満たすことを優先し、

文書量を増やすことを目的としない。

---

# 21. Documentation Principles

記録系列は、

「読むため」ではなく、

「運用するため」の文書である。

したがって、

- 曖昧な表現
- 解釈が複数存在する表現
- 感想
- 思想
- コラム

は記載しない。

必要事項のみを定義する。

---

# 22. Project Management Principles

文書体系は、

プロジェクト全体の運用効率を向上させることを目的とする。

文書は増やすためではなく、

管理を簡潔にするために存在する。

そのため、

新規文書を追加する前に、

既存文書への統合を優先する。

---

# 23. Change Management

Project Structure を変更する場合は、

Documentation System を最初に更新する。

その後、

Project Ledger、

関連文書、

Reference を更新する。

Documentation System を更新せずに構造変更を行ってはならない。

# 24. References

## Primary Documents

文書一覧は OP-008 §8 Document Series を参照。

---

# 25. Compliance

すべての正式文書は、本書で定義する運用基準へ準拠する。

Documentation System は文書体系の基準文書であり、

Project 全体の Documentation Standard として位置付ける。

本書と矛盾する運用が存在する場合は、

Documentation System を優先する。

---

# 26. Future Expansion

文書体系は、

THE THIRD PLACE Project の運用状況に応じて拡張する。

将来的な文書は、

本書の構造および運用ルールへ従うこと。

Reserved IDs は必要時のみ使用する。

不要な文書は追加しない。

---

# 27. Drive Mirror Operation

## 27.1 Position

GitHubを扱わない協力者が正式文書を参照できるよう、GitHub Repositoryの内容をGoogle Driveへ一方向に複製する。Drive上のファイルは正式文書ではない（OP-001 §13.1）。

## 27.2 Structure

| Folder | Role | Rule |
|---|---|---|
| Mirror | GitHubの複製（参照用） | 協力者は編集しない。GitHubの内容で一方向に更新される |
| Contributions | 協力者の書き込み先 | ミラーは触れない。内容はDiscovery扱い（OP-001 §21.1） |

## 27.3 Direction

自動同期は GitHub → Drive のみとする。Drive → GitHub の自動反映は行わない。

## 27.4 Intake

Contributionsの内容は、オーナーのAIが読み取り、反映先を提案する。GitHubへの正式反映は、オーナーの承認後に行う（OP-001 §21.1）。

## 27.5 Scope

同期対象の種別は md・png・py とする。

## 27.6 Future Change

Drive → GitHub の自動化を導入する場合は、本節を先に改訂し（§23）、OP-001 §21.1に適合させる（mainへ直接書き込まない）。

## 27.7 Out of Scope

同期スクリプト（Google Apps Script）の実装、トリガー、フォルダIDは本書の対象外とする。

---

# 28. KN Publication Policy

## 28.1 Position

KN-001 Heritage Chronicle／KN-002 Cultural Pantheon／KN-003 Beyond Journey／KN-004 Atelier Discoveryの本文（発行物）は、GitHub Repositoryには置かない。

## 28.2 Rule

KN四系列の発行物は、Claude Artifactとしてのみ発行する。

## 28.3 Reason

KN四系列の発行物は、今後何百と増えていく見込みであるため、GitHub Repository上にmarkdownファイルとして蓄積する運用は行わない。

## 28.4 Publication Log

発行の記録（メタデータのみ。本文の複製ではない）は、DB-001 Project Ledger「KN Publication Log」に、Date・Series・Theme/Title・Artifact Linkの形式で記録する。Artifact Linkは、MARI様がご自身で共有設定にされた場合のみ記載する（共有を前提としない）。

## 28.5 Out of Scope

発行の頻度・タイミング・承認プロセスは本書の対象外とする。

---

# Appendix A — Series Summary

| Series | Purpose | Responsibility |
|---------|----------|----------------|
| DS | 設計（絶対不変） | 不変の思想原典を保持する |
| OP | 運用（定義） | 設計思想・規則・法則を定義する |
| DB / MD / BR / CZ / KN | 記録（可変） | プロジェクトを運用・記録する |

---

# Appendix B — Authority Summary

| Authority | Purpose |
|-----------|---------|
| SSOT | 唯一の正本 |
| Standard | プロジェクト標準 |
| Reference | 補足資料 |
| Archive | 履歴保存 |

---

# Appendix C — Status Summary

| Status | Description |
|---------|-------------|
| Draft | 作成中 |
| Review | レビュー中 |
| Active | 正式運用中 |
| Archive | 保存文書 |
| Deprecated | 廃止文書 |

---

# Appendix D — Document Lifecycle

```text
Draft
   │
   ▼
Review
   │
   ▼
Active
   │
   ├──────────────┐
   ▼              │
Archive           │
                  │
                  ▼
            Deprecated
```

---

# Appendix E — Documentation Philosophy

THE THIRD PLACE Documentation System は、

文書を増やすことを目的としない。

目的は、

- 情報を整理すること
- 情報を維持すること
- 情報を継続できること

である。

Documentation は資産であり、

Project を長期的に維持するための基盤である。

---

# Appendix F — Document Profiles

README.md から移設した、全文書のプロフィール文（日本語版・英語版）。README.md は本節および §8 へのリンクのみを保持する。

---

## Japanese (JA)

### 🏛 DS — Design（設計・絶対不変）

THE THIRD PLACEの不変の思想的原典を保持するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| DS-001 | Original | プロジェクトの原典。特定のギアやデザインではなく、著者が人生を通して辿り着いた「判断原理」そのものを記録した最上位文書。 |

---

### ⚙️ OP — Operation（運用・定義）

設計思想・規則・法則そのものを定義するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| OP-001 | Constitution | プロジェクト全体を支える最高位文書。Human Principles・Design Principles・文書体系（Document Architecture）・SSOT・ブランドとの向き合い方（Brand Philosophy）・意思決定の構造（Decision Philosophy）・AI／GitHub運用原則を定義する。 |
| OP-002 | Design Bible | 設計思想・評価基準・完成定義を定めるプロジェクトの根幹文書。空間を構成するDesign Domains（Furniture／Light／Aroma／Storage／Coffee／Fire）と、それを統一するDesign Language（Appearance／Industrial／Graphic／Harmony）の二層で設計体系を構成する。 |
| OP-003 | Affinity Lexicon | 「好き」を判断のための共通言語として体系化する嗜好辞典。ブランドや製品そのものを管理する文書ではない。 |
| OP-004 | Aesthetic Grammar | 比率・余白・光・素材・配置・所作など、美しさを成立させる法則を定義する美意識文法。Design Languageを補完する。 |
| OP-005 | Pursuit Strategy | Equipmentを「どのような判断基準で迎えるか」を定める調達戦略文書。月間予算の管理はCoffee Zoneのみ。 |
| OP-006 | Foundation Compass | Equipmentを最も美しく、効率的に、一貫性を持って運用するための基盤指針。収納マニュアルではなく「運用の基盤」を定義する。安全と素材別ケアの原則も定める。 |
| OP-007 | Habitat Architecture | Foundation Compassが定める基盤の上に築かれる、フィールドに完成する「暮らしの空間」そのものを設計する文書。 |
| OP-008 | Documentation System | DS・OP・記録（DB・MD・BR・CZ・KN）の各系列が長期にわたり一貫した構造で運用されるための、文書の役割・分類・管理方法を定める文書体系全体の基準文書。 |
| OP-009 | Search Doctrine | 情報をどのように発見・評価・解釈し、知識へ変換するかを定めるリサーチの哲学・方法論。パトロールの実行手順（§XVIII）も本書が管理する。監視対象（Watch List）自体はCZ-002が別途管理する。 |
| OP-010 | Qualification Charter | 記録系列台帳（MD-002 Field Atlas／MD-003 Galley Fare／MD-004 Equipment Registry）の登録規則・評価基準を定義する文書。データそのものは各台帳が保持する。 |

---

### 📊 DB — Dashboard

プロジェクトの現在の進行状況を記録するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| DB-001 | Project Ledger | プロジェクトの唯一の運用ダッシュボード。Current Focus・Active Conversationsに加え、目的のチャットを最短で探すConversation Ledger、番号を覚えていなくても文書を特定できるQuick Access（早見表）、未整理の相談を受け止めるProject Inbox、キャンプの計画と実施を記録するField Logを管理する「生きた文書（Living Document）」。 |

---

### 🗃 MD — Master Data

所有物・場所の台帳を管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| MD-001 | Storage Blueprint | 収納の配置、パッキング手順、設営・撤収の手順など、Storageを一つの運用システムとして定義する文書。 |
| MD-002 | Field Atlas Landscape Framework | フィールド・ロケーションなど、プロジェクトが展開される「舞台」そのものの選定基準を定義する。 |
| MD-003 | Galley Fare | キッチン機材（調理器具・刃物・調理小物）を、MD-004とは独立した実用性優先の基準で管理するMaster Document。 |
| MD-004 | Equipment Registry Object Reference | 所有物（Equipment）に関する唯一のマスターデータベース。Design Bibleとの美意識的整合を選定条件とし、7つのDomain（Furniture／Light／Aroma／Storage／Coffee／Fire／Shelter）のEquipment・Components・親子関係・Material・Color・Attribute・Ownership Statusを管理する。Coffee機材は購入した時点（到着を待たない）で初めて登録する。 |

---

### ☕ BR — Barista

コーヒー機材の意思決定・調達・お手入れと、コーヒー豆の記録を管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| BR-001 | Brew Care | コーヒー器具のお手入れ・メンテナンスに関する基準を定める文書。 |
| BR-002 | Barista Canon | Coffee System（コーヒー機材）に関する正式な意思決定・選定基準・ブランド判断を管理する仕様書。 |
| BR-003 | Procurement Handbook | BR-002で正式採用されたCoffee Equipmentについて、価格・購入先・輸送・関税など実際の調達情報を管理するハンドブック。 |
| BR-004 | Terroir Almanac | コーヒー豆に関する全ての記録を管理する文書。現在のローテーションと、豆の選定調査の記録、見直し前提の豆選びの暫定基準を収める。コーヒー機材は対象外（BR-002・BR-003が管理）。 |

---

### 🔭 CZ — Cross-Zone Ops

コーヒー以外のゾーンの検討・市場監視を管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| CZ-001 | Deliberation Dossier | Coffee Domain（BR系列管轄）を除く全ゾーン（Furniture／Light／Aroma／Storage／Fire／Shelter）における検討中ギアの評価哲学・比較検討・購入待ちリストを管理する文書。 |
| CZ-002 | Vigil Protocol | 欲しいギアの監視対象・調査キーワードを管理するWatch List。鮮度（Freshness）評価等のパトロール実行手順はOP-009 Search Doctrine §XVIIIが管理する。 |

---

### 📖 KN — Knowledge

知の蓄積・文化アーカイブを管理するシリーズ。

| ID | Document | どのような文書か |
| --- | --- | --- |
| KN-001 | Heritage Chronicle | プロジェクトの重要な意思決定・設計思想の変化・Equipment構成の変遷を時系列で記録する公式アーカイブ。「なぜその判断をしたのか」を未来の自分が理解するための知識資産。 |
| KN-002 | Cultural Pantheon（旧題: Cultural Reference） | ブランドそのものではなく、ブランドを生み出した思想・人物・コミュニティ・ショップ・系譜を記録する公式カルチャーリファレンス。 |
| KN-003 | Beyond Journey | キャンプという趣味に留まらず、建築・家具・照明・工業デザイン・自動車・写真・ライフスタイルなど分野横断でTHE THIRD PLACEの美意識を育てるカルチャーマガジン。 |
| KN-004 | Atelier Discovery | ガレージブランド・アウトドアブランド・市場動向をリサーチするメディア。ブランドの宣伝ではなく、動向の観察を目的とする。冒頭に、CZ-002 Watch Listの購入対象を継続監視するHorizonを常設する。 |

---

## English (EN)


### 🏛 DS — Design (Absolute, Immutable)

The series holding THE THIRD PLACE's immutable philosophical origin.

| ID | Document | What this document is |
| --- | --- | --- |
| DS-001 | Original | The project's founding text. Rather than any specific gear or design, it records the **judgment principles** the author arrived at over a lifetime — the highest-authority document in the project. |

---

### ⚙️ OP — Operation (Definitions)

The series defining THE THIRD PLACE's design philosophy, rules, and laws themselves.

| ID | Document | What this document is |
| --- | --- | --- |
| OP-001 | Constitution | The highest-authority document supporting the whole project. Defines the Human Principles, Design Principles, Document Architecture, SSOT, the relationship with brands (Brand Philosophy), the structure of decision-making (Decision Philosophy), and the AI / GitHub operating principles. |
| OP-002 | Design Bible | The project's foundational document, defining design philosophy, evaluation criteria, and the definition of completion. Its design framework has two layers: the Design Domains that compose the space (Furniture / Light / Aroma / Storage / Coffee / Fire) and the Design Language that unifies them (Appearance / Industrial / Graphic / Harmony). |
| OP-003 | Affinity Lexicon | A dictionary that systematizes "what is liked" as a shared vocabulary for judgment. It does not manage brands or products themselves. |
| OP-004 | Aesthetic Grammar | Defines the laws that constitute beauty — proportion, margin, light, material, composition, gesture — complementing the Design Language. |
| OP-005 | Pursuit Strategy | Defines the criteria by which Equipment is acquired. The monthly budget it manages applies to the Coffee Zone only. |
| OP-006 | Foundation Compass | The operational foundation for running Equipment as beautifully, efficiently, and consistently as possible. Not a storage manual — it defines the "foundation of operation" itself, including the principles for safety and material care. |
| OP-007 | Habitat Architecture | Building on the foundation defined by Foundation Compass, this document designs the completed living space itself as it appears in the field. |
| OP-008 | Documentation System | The foundational standard for the entire documentation system, defining the roles, classification, and management rules of documents so that the DS, OP, and Record (DB / MD / BR / CZ / KN) series remain structurally consistent over the long term. |
| OP-009 | Search Doctrine | Defines the philosophy and methodology of research — how information should be discovered, evaluated, interpreted, and turned into knowledge. Also governs the patrol operational procedure itself (§XVIII). The watch targets (Watch List) are separately managed by CZ-002. |
| OP-010 | Qualification Charter | Defines the registration rules and evaluation criteria for the record-series ledgers (MD-002 Field Atlas / MD-003 Galley Fare / MD-004 Equipment Registry). The data itself remains held by each ledger. |

---

### 📊 DB — Dashboard

The series recording the project's current state of progress.

| ID | Document | What this document is |
| --- | --- | --- |
| DB-001 | Project Ledger | The project's single operational dashboard. Alongside Current Focus and Active Conversations, it manages the Conversation Ledger (for finding the right chat fastest), Quick Access (a quick-reference table that identifies documents without memorizing their numbers), the Project Inbox for unsorted topics, and the Field Log recording planned and completed camps — a living document. |

---

### 🗃 MD — Master Data

The series managing the ledger of owned equipment and places.

| ID | Document | What this document is |
| --- | --- | --- |
| MD-001 | Storage Blueprint | Defines storage layout, packing sequence, and setup/teardown procedures, treating Storage as a complete operational system rather than mere packing. |
| MD-002 | Field Atlas Landscape Framework | Defines the selection criteria for the "stage" itself — campsites, locations, and terrain — on which the project is deployed. |
| MD-003 | Galley Fare | An independent Master Document for kitchen equipment (cookware, blades, cooking tools), governed by a function-first standard separate from MD-004. |
| MD-004 | Equipment Registry Object Reference | The single master database of owned Equipment. Aesthetic alignment with the Design Bible is a condition for inclusion. It manages Equipment, Components, Parent / Child relationships, Material, Color, Attributes, and Ownership Status across seven Domains (Furniture / Light / Aroma / Storage / Coffee / Fire / Shelter). Coffee equipment is registered only once purchased (not on arrival). |

---

### ☕ BR — Barista

The series managing decisions, procurement, and care for coffee equipment, as well as records of coffee beans.

| ID | Document | What this document is |
| --- | --- | --- |
| BR-001 | Brew Care | Defines the standards for cleaning and maintaining coffee equipment. |
| BR-002 | Barista Canon | The official specification governing decisions, selection criteria, and brand judgments for the Coffee System. |
| BR-003 | Procurement Handbook | Manages the actual procurement information — price, purchase source, shipping, import duties — for Coffee Equipment officially adopted in BR-002. |
| BR-004 | Terroir Almanac | Manages all records of coffee beans: the current rotation, the selection research record, and the provisional bean-selection criteria (subject to revision). Coffee equipment is out of scope (managed by BR-002 and BR-003). |

---

### 🔭 CZ — Cross-Zone Ops

The series managing deliberation and market monitoring for zones outside coffee.

| ID | Document | What this document is |
| --- | --- | --- |
| CZ-001 | Deliberation Dossier | Manages zone evaluation philosophy, in-progress equipment deliberation, and the purchase-pending list for all zones outside the Coffee Domain governed by the BR series (Furniture / Light / Aroma / Storage / Fire / Shelter). |
| CZ-002 | Vigil Protocol | A Watch List managing the acquisition targets and search keywords under watch. The patrol operational procedure, including freshness evaluation, is governed by OP-009 Search Doctrine §XVIII. |

---

### 📖 KN — Knowledge

The series managing accumulated knowledge and the cultural archive.

| ID | Document | What this document is |
| --- | --- | --- |
| KN-001 | Heritage Chronicle | The official archive recording, in chronological order, the project's key decisions, shifts in design philosophy, and the evolution of its Equipment configuration — a knowledge asset for understanding, in the future, why a given decision was made. |
| KN-002 | Cultural Pantheon (formerly titled Cultural Reference) | An official cultural reference recording not the brands themselves, but the philosophies, people, communities, shops, and lineages that gave rise to them. |
| KN-003 | Beyond Journey | A culture magazine that grows THE THIRD PLACE's aesthetic sense by crossing disciplines — architecture, furniture, lighting, industrial design, automobiles, photography, lifestyle — beyond camping as a single hobby. |
| KN-004 | Atelier Discovery | A research publication covering garage brands, outdoor brands, and market trends. Its aim is observation of trends, not brand promotion. It opens with a permanent Horizon dashboard that continuously monitors the acquisition targets on the CZ-002 Watch List. |

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編（Constitution OP-001 Ver.5.0 §26参照）により、PX-001からOP-008へ番号を変更した。本書が定義する文書体系そのものを、旧TP／PX／TM 3系列から、新DS／OP／記録（DB・MD・BR・CZ・KN）系列へ全面的に再構築した詳細は、Revision History（Version 2.0）を参照。Revision History内の過去の行（旧ID・過去バージョン時点の記述を含む）は歴史的記録として原文のまま保持した。旧ID: PX-001。

---

# End of Document

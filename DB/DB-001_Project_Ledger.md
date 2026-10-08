# DB-001 Project Ledger

**Document ID**: DB-001  
**Title**: Project Ledger  
**Series**: DB – Dashboard (Record)  
**Version**: 4.27
**Authority**: Standard  
**Status**: Active (Living Document)

---

# Dashboard

## Current Focus

現在進行中の案件を並べる。件数は3件に固定しない（増減に応じて行を追加・削除する）。

| Focus | Status |
|------|--------|
| Storage Carrying Case（STR-034） | Under Evaluation・適合品を継続探索中 |

---

## Active Conversations

| Active | Archived |
|:------:|:--------:|
| — | — |

---

## Health Check

- Change Management : GitHub Issues（Kanban）を参照。ステータスはIssue側が正であり、本表へは転記しない

---

# Conversation Ledger

この台帳は **「目的のチャットを最短で探すこと」** を唯一の目的とする。

新しいチャットを開始したら **1行追加**し、終了時に **Summary** を更新する。

---

| Conversation Title | Document | Search Words | Summary | Status | Last Updated |
|--------------------|----------|--------------|----------|--------|--------------|
| PX Documentation System 制作 | OP-008 | PX, Documentation, Standard | PXシリーズのDocumentation Systemを制作。 | Active | 2026-07-15 |
| PX Project Ledger 制作 | DB-001 | PX, Ledger, Conversation, Chat | Conversation管理を中心としたProject Ledgerを設計。 | Active | 2026-07-15 |
| Project Ledger 位置づけ整合 | OP-001, OP-008, DB-001, CZ-001 | Project Ledger, Decision, BR-002, CZ-001, 記録, 意思決定, 乖離, 不採用, ShellCon | OP-001 §9・§14とOP-008 §8のDB-001 Role記述の乖離を是正（OP-001 Ver.5.3、OP-008 Ver.3.4）。DB-001の空欄セクションを充填（Current Focus・Project Inbox運用ルール新設、KN Publication Logは未発行のため空欄が正と確認）。あわせてCZ-001に「不採用候補とその理由」を恒久保持する運用を新設（Ver.3.11）し、Wood Stove・ShellCon25 Bedding Module転用検討の2件を記録（Ver.3.12）。 | Active | 2026-09-27 |
| パートナー貢献の扱いとDrive⇄GitHub同期運用 | OP-001, OP-008 | パートナー, 協力者, Gemini, Drive, Mirror, Contributions, GAS, 一方向ミラー, External Contribution Protocol, rclone | OP-001 §21.1 External Contribution Protocolを新設（Ver.5.5）。OP-008 §27 Drive Mirror Operationを新設（Ver.3.7）。GitHub→Driveの一方向ミラー（GAS、15分ごと）を稼働し、協力者の書き込み先をContributionsとした（自動反映なし・正式化はオーナーとAIが判断）。旧ミラーのワークフロー（mirror-to-drive.yml）を削除し、Driveの親フォルダの旧ミラー残骸を整理。GASソースをscripts/MirrorSync.gsとして保管。 | Active | 2026-09-28 |
| 調達区分の整理（OP-005のCoffee限定化・Horizon改称） | OP-005, OP-008, KN-004, CZ-002, BR-003 | Pursuit Strategy, Acquisition Priority, Acquisition Status, Monthly Planning, Must Buy Dashboard, Horizon, Watch List, 買えるときに買う, Purchase Priority, Purchase Grouping, Monthly Acquisition Plan, 二重定義 | OP-005 Ver.2.0：Coffee以外は「買えるときに買う」と明記し、Coffeeの購入優先度・購入状態・月次計画の定義をBR-003へ一本化（Acquisition Priority／Acquisition Status／Monthly Planningの3章を削除）。KN-004のMust Buy DashboardをHorizonへ改称し、監視対象をCZ-002 Watch Listへ統一（CZ-002 Ver.3.3）。OP-008 Ver.3.8・3.9で同期。BR-003 Ver.3.3でPurposeへMonthly Acquisition Plan追加・未定義のRejected削除・表記訂正（Ver.3.5で転記誤りを訂正）。 | Active | 2026-09-28 |
| 全文書レビューと整備バックログの消化 | 全文書 | 整備バックログ, 矛盾, 重複, 未策定, Sonnet, Safety, 一酸化炭素, Material Care, Vehicle, Range Rover Sport, Field Log, Zone Evaluation Philosophy, Partner Value, Retirement, ID Freeze | 全25文書をレビューし、矛盾・重複・未策定事項を課題化（整備バックログArtifact）。Sonnetで大半を解消後、残りの未策定事項をClaudeの推奨案で暫定採用：OP-006 Safety／Material Care、MD-001 Vehicle・全体設営撤収手順、DB-001 Field Log、OP-002 Zone Evaluation Philosophy（5ゾーン）、OP-010 退役ルール・Coffee境界・Candidate方式・Field Atlas基準、MD-002 Partner Value正式化、OP-005 予算の性格・Coffee在庫確認、CZ-001 経由ルール、ヘッダー統一。文書数は減らさない方針（MARI様指示）。 | Active | 2026-09-28 |
| 暫定採用項目の個別確認 | OP-002, OP-005, OP-006, OP-010, MD-001, BR-002, CZ-001, CZ-002, DB-001 | 暫定採用, 正式採用, N-01, N-03, N-05, N-08, N-09, N-10, N-12, N-13, N-14, 一酸化炭素チェッカー, 設営順序, Partner Value, Coffee Watch Scope, 比較検討の必須化, FUR-036 | 整備バックログで暫定採用した15件をMARI様が個別に確認。14件を正式採用（N-01はチェッカー2個へ修正、N-03は設営順序を変更、N-06は収納・運搬をDeferredへ戻す、N-12は比較検討の必須化へ変更しFUR-036をさかのぼって比較、N-14はCoffee機材もCZ-002で監視へ変更）。N-05・N-16（Field Log）は初回キャンプの試行後に決定。 | Active | 2026-09-29 |
| 初回キャンプの計画（moss camp field） | DB-001, MD-002, MD-001, OP-006, OP-010 | 初回キャンプ, moss camp field, BOTANICAL, Field Log, Planned, 秋構成, SHL-001, SHL-004, Seasonal Slot A, アーリーチェックイン, 山中湖, Site Requirements | MD-002 Partner ValueとOP-010 Part C §Site Requirementsをもとに行き先を絞り込み、MARI様がmoss camp fieldのBOTANICALオートサイトを2026-10-17〜18に予約（アーリー12:00）。秋構成（Season Kitなし、Seasonal Slot A空け）、Shelter：SHL-001＋SHL-004、寒さ対策は寝具のみ。シェルター内では燃焼器具を使わない（OP-006 §Safety Principles）。§Field LogへPlanned行を追加。 | Active | 2026-09-30 |
| KN四誌の創刊号発行（Artifact） | KN-001, KN-002, KN-003, KN-004, OP-008, DB-001 | KN, Heritage Chronicle, Cultural Pantheon, Beyond Journey, Atelier Discovery, 創刊号, Artifact, ファッション誌, 参考図版, KN Publication Log | KN四誌の創刊号を、それぞれ別テイストのファッション誌デザインでArtifactとして発行（本文はOP-008 §28によりGitHubに置かない）。Atelier Discoveryの横スクロールを修正し、四誌のデザインを全面改訂、CC BY／CC BY-SA／パブリックドメインの実写写真を参考図版として追加（クレジットは各誌巻末）。誤って作成した重複Artifact 4件は削除。§KN Publication Logへ4誌の発行記録を追加。 | Active | 2026-10-01 |
| Field Atlas 訪問反映（KARUIZAWA CAMP GOLD）と橘ふれあい公園の採り直し | MD-002, DB-001 | Field Atlas, KARUIZAWA CAMP GOLD, 橘ふれあい公園, 訪問, Atlas Resonance, 10軸, Field Log, 採り直し, 同点, Partner, 軽井沢 | KARUIZAWA CAMP GOLD（2026-09-26〜27）の訪問をMARI様が報告し、10軸を採点して72点・訪問済みへ更新（MD-002 Ver.4.11）。橘ふれあい公園キャンプ場を実感で採り直し（72→66点）、同点の清里オーベルジュとはPartner軸で順位を決めた。順位13〜19位を並べ替え、Field Atlas Radar／Navigator／Ivoryは公開済みページのデータを書き換えて再公開。§Field LogへDone行を追加。 | Active | 2026-10-03 |
| Field Log過去分の追加（カレンダーから） | DB-001 | Field Log, 過去分, iCal, カレンダー, 天候, 気温 | MARI様がiPhoneカレンダーと気象データから確定した2024-05〜2026-09の過去キャンプ42件（Familyカレンダー由来・重複分の11件を除外）を、§Field LogへStatus = Doneで追加（GitHub Issue #121・#125）。FieldはMD-002の表記に合わせ（MD-002は変更せず）、Weather / Tempは「MARI様が調べて提供された値（出典未確認）」として運用ルールに明記した。Configurationはカレンダー記載のチェックイン予定時刻のみ。Went Well／Issues／Follow-upは未記入（—）。 | Active | 2026-10-05 |

---

# Quick Access

番号を覚える必要はない。会話の中で「これは何の話か」を伝えれば、担当文書はAI側で特定する。本表は、あとから見返して思い出すための早見表として使う。

各シリーズの一覧・一言要約は OP-008 Documentation System §8 Document Series（Summary列）を参照。

---

# Project Overview

文書一覧・文書数は OP-008 §8 Document Series を参照。

---

# Project Inbox

**用途**：CZ-001・BR-002・GitHub Issue等、正式な置き場所へ乗せるほどまだ固まっていない、雑多な相談・思いつき・気になった製品名・文書改善アイデアなどを、忘れないよう一時的に書き留める受け皿とする。「相談したこと自体を覚えていられない」ときの拾い網として使う。

検討が具体化したら、CZ-001のUnder Consideration等の正式な置き場所へ移し、本節からは削除する（他文書との情報重複は行わない）。

| Date | Topic |
|------|-------|
| 2026-09-28 | 冬用暖房コンテナ（湯たんぽ・電気毛布・シャンクヒーター用）の要否・定位置：優先度低、検討中 |
| 2026-09-28 | Beck #2の試し詰めと実測（MD-001 Coffee Module Layout §必要な実測）。Coffee Equipment購入後に実施 |
| 2026-09-29 | 一酸化炭素チェッカーの2個目を購入予定（OP-006 §Safety Principlesで2個設置を定めたため。現在1個所有）。2個そろうまで、シェルター内で燃焼器具を使わない |

---

# Field Log

キャンプの計画と実施の記録。MD-002 Field Atlasの再評価、OP-006 Foundation Compass・MD-001 Storage Blueprint・BR-001 Brew Careの改善の入力として使う（2026-09-28新設。N-05・N-16）。本表の運用は暫定であり、初回のキャンプを試しに記録した後、継続するかをMARI様が決定する（2026-09-29、MARI様のご決定）。

| Date | Status | Field | Weather / Temp | Configuration | Went Well | Issues | Follow-up |
|------|--------|-------|----------------|---------------|-----------|--------|-----------|
| 2024-05-11〜12 | Done | リキャンプ勝浦（千葉県勝浦市） | 曇り / 雨｜最高20.1 / 16.5℃・最低14.8 / 13.0℃ | — | — | — | — |
| 2024-06-21〜22 | Done | 無印良品 カンパーニャ嬬恋キャンプ場（群馬県吾妻郡嬬恋村） | 曇り時々雨 / 雨のち曇り｜最高21.5 / 19.8℃・最低14.2 / 15.0℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2024-07-13〜14 | Done | CREST northKaruizawa（群馬県吾妻郡長野原町） | 晴れ / 晴れ時々曇り｜最高31.0 / 30.5℃・最低19.8 / 20.2℃ | チェックイン予定 14:00（カレンダー記載） | — | — | — |
| 2024-08-11〜12 | Done | 那須プレリーオートキャンプ場（栃木県那須） | 曇り時々雨 / 晴れ｜最高26.5 / 28.2℃・最低20.1 / 21.0℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2024-09-14〜15 | Done | 清里オーベルジュ コート・ドゥ・ヴェール（緑の丘）（山梨県北杜市高根町清里） | 晴れ時々曇り / 晴れ｜最高28.4 / 27.9℃・最低18.2 / 17.5℃ | チェックイン予定 12:00（カレンダー記載） | — | — | — |
| 2024-10-12〜13 | Done | スノーピークヘッドクォーターズキャンプフィールド（新潟県三条市） | 晴れ / 晴れ｜最高24.1 / 22.8℃・最低13.2 / 12.5℃ | チェックイン予定 10:00（カレンダー記載） | — | — | — |
| 2024-11-03〜04 | Done | 伊豆キャンファーム（静岡県伊豆市小下田） | 晴れ時々曇り / 晴れ｜最高20.8 / 19.5℃・最低12.5 / 10.2℃ | チェックイン予定 12:00（カレンダー記載） | — | — | — |
| 2024-11-30〜12-01 | Done | 富士山オートキャンプ場GENSHIJIN（静岡県富士宮市） | 晴れ / 晴れ｜最高16.2 / 15.5℃・最低6.5 / 5.2℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2024-12-14〜15 | Done | 太陽と海 九十九里オートキャンプ場（千葉県旭市） | 晴れ時々曇り / 晴れ｜最高13.5 / 12.8℃・最低4.2 / 3.0℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2025-01-11〜12 | Done | RECAMP館山（千葉県館山市） | 晴れ / 晴れ｜最高12.5 / 13.2℃・最低3.5 / 4.1℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2025-01-25〜26 | Done | 橘ふれあい公園キャンプ場（千葉県香取市） | 晴れ時々曇り / 晴れ｜最高9.8 / 10.5℃・最低0.5 / -1.2℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2025-02-08〜09 | Done | ウェルキャンプ西丹沢（神奈川県足柄上郡山北町） | 雪のち曇り / 晴れ｜最高4.2 / 11.5℃・最低-1.5 / 0.8℃ | チェックイン予定 12:00（カレンダー記載） | — | — | — |
| 2025-02-23〜24 | Done | 秩父ファームステイ（埼玉県秩父市） | 晴れ / 晴れ｜最高14.5 / 15.2℃・最低1.0 / 2.5℃ | チェックイン予定 11:00（カレンダー記載） | — | — | — |
| 2025-03-08〜09 | Done | スノーピーク鹿沼キャンプフィールド&スパ（栃木県鹿沼市） | 晴れ時々曇り / 晴れ｜最高11.2 / 13.8℃・最低1.5 / 0.2℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2025-04-05〜06 | Done | ぼくらのミナノベース（埼玉県秩父郡皆野町） | 晴れ / 晴れ｜最高18.5 / 19.2℃・最低4.2 / 5.1℃ | チェックイン予定 11:30（カレンダー記載） | — | — | — |
| 2025-04-26〜27 | Done | 那珂アーバンキャンプフィールド（茨城県那珂市） | 晴れ / 晴れ｜最高22.1 / 23.5℃・最低8.2 / 9.5℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2025-05-24〜25 | Done | 朝霧キャンプベース そらいろ（静岡県富士宮市） | 晴れ / 晴れ｜最高26.5 / 27.8℃・最低14.2 / 15.0℃ | チェックイン予定 10:00（カレンダー記載） | — | — | — |
| 2025-06-07〜08 | Done | スノーピーク白河高原キャンプフィールド（福島県岩瀬郡天栄村） | 曇り / 晴れ時々曇り｜最高22.8 / 26.1℃・最低14.5 / 16.2℃ | — | — | — | — |
| 2025-06-21〜22 | Done | South One Village（千葉県館山市） | 曇りのち雨 / 晴れ｜最高24.2 / 26.5℃・最低20.1 / 21.0℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2025-07-19〜20 | Done | リキャンプ勝浦（千葉県勝浦市） | 晴れ時々曇り / 晴れ｜最高28.5 / 29.8℃・最低22.1 / 23.0℃ | チェックイン予定 11:30（カレンダー記載） | — | — | — |
| 2025-08-16〜17 | Done | シャトレーゼキャンプリゾート小海（長野県南佐久郡小海町） | 曇り時々雨 / 晴れ｜最高24.5 / 26.2℃・最低16.8 / 17.5℃ | チェックイン予定 11:00（カレンダー記載） | — | — | — |
| 2025-09-06〜07 | Done | 昭和の森フォレストビレッジ（千葉県千葉市緑区） | 晴れ / 晴れ｜最高32.5 / 33.1℃・最低25.1 / 25.8℃ | — | — | — | — |
| 2025-09-20〜21 | Done | プラネットキャンプフィールド（千葉県夷隅郡御宿町） | 晴れ時々曇り / 晴れ｜最高28.1 / 27.5℃・最低22.0 / 21.2℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2025-10-04〜05 | Done | 朝霧キャンプベース そらいろ（静岡県富士宮市） | 晴れ / 晴れ｜最高24.2 / 25.0℃・最低13.5 / 14.1℃ | チェックイン予定 10:00（カレンダー記載） | — | — | — |
| 2025-11-01〜02 | Done | Render Fika（千葉県山武市） | 晴れ / 晴れ｜最高20.8 / 21.5℃・最低11.2 / 12.0℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2025-11-29〜30 | Done | 神栖市営日川浜オートキャンプ場（茨城県神栖市） | 晴れ時々曇り / 晴れ｜最高15.2 / 14.8℃・最低7.5 / 6.2℃ | チェックイン予定 10:00（カレンダー記載） | — | — | — |
| 2025-12-13〜14 | Done | 大原上布施オートキャンプ場（千葉県いすみ市） | 晴れ / 晴れ｜最高14.1 / 13.5℃・最低5.2 / 4.5℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2025-12-27〜28 | Done | Render Fika（千葉県山武市） | 晴れ / 晴れ｜最高12.8 / 13.2℃・最低2.5 / 3.1℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2026-01-10〜11 | Done | RECAMP館山（千葉県館山市） | 晴れ / 晴れ｜最高11.5 / 12.1℃・最低2.2 / 3.0℃ | チェックイン予定 11:30（カレンダー記載） | — | — | — |
| 2026-01-24〜25 | Done | RECAMPしょうなん（千葉県柏市・手賀の丘公園内） | 晴れ / 晴れ時々曇り｜最高9.2 / 10.1℃・最低-1.5 / -0.8℃ | チェックイン予定 11:30（カレンダー記載） | — | — | — |
| 2026-02-14〜15 | Done | RECAMP館山（千葉県館山市） | 晴れ / 雨のち曇り｜最高13.2 / 11.8℃・最低4.5 / 6.2℃ | チェックイン予定 11:00（カレンダー記載） | — | — | — |
| 2026-02-28〜03-01 | Done | SHELTER BASE（千葉県鎌ヶ谷市） | 晴れ / 晴れ時々曇り｜最高11.8 / 12.5℃・最低2.1 / 3.0℃ | — | — | — | — |
| 2026-03-14〜15 | Done | Render Fika（千葉県山武市） | 晴れ / 晴れ｜最高14.5 / 15.2℃・最低3.2 / 4.0℃ | チェックイン予定 11:30（カレンダー記載） | — | — | — |
| 2026-04-04〜05 | Done | キャンプガーデン印西（千葉県印西市） | 晴れ / 晴れ｜最高16.5 / 17.2℃・最低4.8 / 5.5℃ | チェックイン予定 11:30（カレンダー記載） | — | — | — |
| 2026-04-18〜19 | Done | Bonfirebase 富津キャンプビレッジ（千葉県富津市） | 晴れ時々曇り / 晴れ｜最高19.8 / 21.0℃・最低10.5 / 11.2℃ | チェックイン予定 11:00（カレンダー記載） | — | — | — |
| 2026-05-02〜03 | Done | South One Village（千葉県館山市） | 晴れ / 晴れ｜最高22.5 / 23.1℃・最低13.2 / 14.0℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2026-05-23〜24 | Done | RECAMP 富士スピードウェイ（静岡県駿東郡小山町） | 晴れ時々曇り / 晴れ｜最高21.2 / 22.5℃・最低11.5 / 12.1℃ | チェックイン予定 11:30（カレンダー記載） | — | — | — |
| 2026-06-06〜07 | Done | Render Fika（千葉県山武市） | 曇り時々雨 / 晴れ｜最高23.1 / 25.8℃・最低17.5 / 18.2℃ | チェックイン予定 11:30（カレンダー記載） | — | — | — |
| 2026-07-11〜12 | Done | 昇仙峡オートキャンプ場（山梨県甲府市） | 晴れ時々雷雨 / 晴れ｜最高34.5 / 35.8℃・最低23.2 / 24.1℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2026-08-08〜09 | Done | スノーピーク赤城キャンプフィールド（群馬県前橋市） | 晴れ時々雷雨 / 晴れ｜最高36.2 / 35.5℃・最低25.8 / 25.1℃ | チェックイン予定 11:00（カレンダー記載） | — | — | — |
| 2026-08-29〜30 | Done | オートキャンプFUJICHU（山梨県富士吉田市） | 晴れ時々曇り / 晴れ｜最高27.2 / 28.0℃・最低17.5 / 18.1℃ | チェックイン予定 13:00（カレンダー記載） | — | — | — |
| 2026-09-12〜13 | Done | Render Fika（千葉県山武市） | 晴れ / 晴れ｜最高30.1 / 29.5℃・最低22.5 / 21.8℃ | チェックイン予定 11:30（カレンダー記載） | — | — | — |
| 2026-09-26〜27 | Done | KARUIZAWA CAMP GOLD（長野県北佐久郡軽井沢町） | — | 林間サイトに宿泊／11:00のアーリーチェックインを予約／使った構成（Season Kit・Shelter等）は未記入 | 薪が高品質／管理棟が綺麗／居心地が良かった／近隣に軽井沢らしい魅力的な買い物スポットがある | 近場のトイレ・炊事場は質が低く（トイレ4・炊事場4）、質の高い設備（トイレ8・お湯が出る炊事場6）は遠い | MD-002 Ver.4.11へ反映済み（72点・訪問済み） |
| 2026-10-17〜18 | Planned | moss camp field（山梨県南都留郡山中湖村） | — | BOTANICALオートサイト（予約済み）／アーリーチェックイン12:00／秋構成（Season Kitなし、Seasonal Slot A空け）／Shelter：SHL-001＋SHL-004／寒さ対策は寝具のみ／シェルター内で燃焼器具を使わない | — | — | — |

運用ルール：

- 行き先と日程が決まったら、Status = Plannedで1行追加する（Fieldの表記はMD-002に合わせる。予約状況・チェックイン時刻はConfiguration欄に記入する）
- 帰宅後、Status = Doneへ更新し、天候・気温、使った構成（Season Kit・Shelter等）、うまくいった点、困った点を記入する
- 困った点の対応先となる文書IDをFollow-upに記入し、対応したら当該文書へ反映する（本表は判断そのものを保持しない）
- 季節ごとのフィールドの向き不向きは、本表の記録が蓄積した時点でMD-002へ反映する
- 2024-05〜2026-09の過去分のWeather / Tempは、MARI様が調べて提供された値（出典未確認）を記録したものである。

---

# KN Publication Log

KN作品（Heritage Chronicle／Cultural Pantheon／Beyond Journey／Atelier Discovery）の発行記録。

本文はGitHubに置かず、Artifactとしてのみ発行する方針（OP-008 §28 KN Publication Policy参照）を維持したまま、**一覧性のための発行ログのみ**をここに記録する。本文の複製ではない。

| Date | Series | Theme / Title | Artifact Link |
|------|--------|----------------|----------------|
| 2026-09-30 | KN-001 | Heritage Chronicle Vol. I — The Wood Stove Dossier ほか | — |
| 2026-09-30 | KN-002 | Cultural Pantheon Issue No. 1 — Before Need | — |
| 2026-09-30 | KN-003 | Beyond Journey No. 01 — Beauty before Need | — |
| 2026-09-30 | KN-004 | Atelier Discovery Bulletin No. 01 — Horizon / Price Anatomy | — |
| 2026-10-08 | KN-001〜004 | 四誌それぞれに5つの別デザインを追加（原版＋5デザインの6種を同じArtifact内で切替。タイトルのクリックで巡回）。参考図版の写真を追加（CC BY／CC BY-SA／CC0／パブリックドメイン、クレジットは新デザイン側の巻末）。制作材料は`scripts/kn_pages/` | — |

運用ルール：

- 発行の都度、Date・Series（KN-001〜004）・Theme/Title・Artifact Linkを1行追加する
- Artifact Linkは、MARI様がご自身で共有設定にされた場合のみ記載する（共有を前提としない）

---

# Change Management（GitHub Issues Kanban）

大規模な変更（複数文書にまたがる修正・DB書き換え・PRを伴う作業）は、GitHub Issuesで管理する。軽微な一行修正はIssue化しない。

**列（ステータス）**

| カンバンの列 | 判定方法 |
|---|---|
| To Do | Issueがopenで、ラベルなし |
| In Progress | Issueがopen、`status:in-progress` ラベルあり |
| Done | Issueがclosed |

**任意ラベル（フィルタ用）**：`type:doc-update` / `type:db-update` / `type:rename`

可視化用のKanbanダッシュボードは別途Artifactとして発行する。本表はルールの定義のみを保持し、個々のIssueステータスは転記しない。

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 3.0 | 2026-07-15 | 長期運用向けに簡素化。会話検索と日次メンテナンスに最適化。 |
| 3.1 | 2026-09-07 | Project Overview（文書数）とQuick Accessを実際のRepository構成（TP12／TM5／PX6、全23文書）へ整合。 |
| 3.2 | 2026-09-19 | PX-007 Deliberation CodexをQuick AccessおよびProject Overviewへ反映漏れを修正（PX 6→7、全体23→24文書）。 |
| 3.3 | 2026-09-19 | MARI様のご要望に基づき、Quick Accessを番号とタイトルのみの一覧から、各文書の役割を一言で示す早見表へ拡張。TP／PX／TM系列ごとに区分し、番号を記憶していなくても内容から文書を特定できる構成へ変更。 |
| 4.0 | 2026-09-19 | プロジェクト全体の文書番号再編（OP-001 Constitution Ver.5.0 §26参照）に伴い、PX-002からDB-001へ番号を変更。Series表記をDB – Dashboard (Record)へ更新。Quick AccessおよびProject Overviewを、旧TP／PX／TM 3系列から新DS／OP／DB／MD／BR／CZ／KN 7系列（全24文書）へ全面的に再構成。Conversation Ledgerの Document 欄を新IDへ更新（Conversation Titleは当時のチャット名のため原文のまま保持）。 |
| 4.1 | 2026-09-24 | Volatility Restructure（追補）により、Quick Accessの各シリーズ表（ひとことで言うと列）をOP-008 Documentation System §8 Document Series（Summary列）へ逐語移設し、参照文へ置換。冒頭の説明文は残置。Minor Version。 |
| 4.2 | 2026-09-24 | OP-010新設がProject Overviewへ反映されていなかった漏れを修正（OP 9→10、合計24→25文書）。あわせてOP-005・OP-010・BR-002・BR-003・CZ-001の文書名重複解消による改名（OP-008 §11.1・OP-001 §12/Appendix B参照）を確認。本表は文書数のみを扱うためタイトル変更自体の反映事項はなし。Minor Version。 |
| 4.3 | 2026-09-25 | 「KN Publication Log」節（KN作品の発行記録ログ）と「Change Management（GitHub Issues Kanban）」節（変更管理の運用ルール定義）を新設。Health Checkへ Change Management 行を追加。MARI様承認済み。Minor Version。 |
| 4.4 | 2026-09-27 | 用途未定だったProject Inbox節に運用ルールを新設。CZ-001・BR-002・GitHub Issue等の正式な置き場所へ乗せる前の、雑多な相談・思いつきの一時受け皿として位置づけた（MARI様承認済み）。Conversation Ledgerへ本日の会話を追記。Minor Version。 |
| 4.5 | 2026-09-27 | OP-001 Constitution §27→§26への繰り上げ是正に伴い、Revision History 4.0行の相互参照をOP-001 §26参照へ更新。MARI様のご指摘に基づく。 |
| 4.6 | 2026-09-27 | Current Focusを空欄から充填。CZ-001 Under Considerationの現在進行中3件（Winter Sleeping Mat／Pad Sheet／Storage Carrying Case）を記載。あわせてMARI様のご指示により、Priority 1〜3固定の3行制を廃止し、件数を可変長のリストへ変更（増減に応じて行を追加・削除する運用へ）。Minor Version。 |
| 4.7 | 2026-09-27 | 「Conversation Complete」運用ルールに従い、本日の会話（Project Ledger 位置づけ整合）のConversation LedgerのSummaryを、CZ-001の不採用理由恒久保持ルール新設・Wood Stove/ShellCon記録の反映まで含めた最終形へ更新。Patch Version。 |
| 4.8 | 2026-09-28 | MARI様のご決定（GitHub Issue #44）に基づき、Winter Sleeping Mat（FUR-034）・Pad Sheet（FUR-035）がMD-004・CZ-001へ正式反映されたため、Current FocusからFUR-034・FUR-035の2行を削除。Health Check（Change Management）の記載はそのまま維持。Minor Version。 |
| 4.9 | 2026-09-28 | Project Inboxへ、Seasonal Configuration未定義（OP-006）に関する検討中案件を1行追加（MARI様ご指示）。Patch Version。 |
| 4.10 | 2026-09-28 | Conversation Ledgerへ、パートナー貢献の扱いとDrive⇄GitHub同期運用の会話を1行追加（MARI様ご指示）。Patch Version。 |
| 4.11 | 2026-09-28 | GitHub Issue #46に基づき、Project Inboxの該当行を、OP-006・MD-001へ正式反映された決定分を除いた未決定事項（冬用暖房コンテナの要否・定位置）のみへ書き直した。Patch Version。 |
| 4.12 | 2026-09-28 | Conversation Ledgerへ、調達区分の整理（OP-005のCoffee限定化・Horizon改称）の会話を1行追加（MARI様ご指示）。Patch Version。 |
| 4.13 | 2026-09-28 | KN Publication Logが参照していた「ways-of-working KN issuance rules」がリポジトリに実在しない不整合を是正し、OP-008 §28 KN Publication Policy（新設）への参照へ更新。MARI様のご決定に基づく（C-14）。Patch Version。 |
| 4.14 | 2026-09-28 | OP-008 Rule DOC-06・Principle 003に基づき、§Project Overviewの系列別文書数表（OP-008 §8から導出可能な重複情報）を「文書一覧・文書数は OP-008 §8 Document Series を参照。」の1行へ置換した。あわせて、検証プロセスを伴わず常に✓固定だったHealth CheckのSSOT／Conversation Ledger／Documentation行を削除し、Change Management行のみを残した。MARI様のご決定に基づく（S-08）。Patch Version。 |
| 4.15 | 2026-09-28 | §Field Log（キャンプの計画と実施の記録、N-05・N-16）を新設。Project Inboxへ、整備バックログで判明した要確認事項5件（一酸化炭素警報器、電気毛布の電源、車両の確認・実測、Beck②の試し詰め、MD-002の移動時間）を追加。Conversation Ledgerへ本日の会話を1行追加。Claude推奨案をMARI様の包括指示に基づき採用。Minor Version。 |
| 4.16 | 2026-09-28 | MARI様のご回答に基づき、Project Inboxのうち解決した2件（一酸化炭素警報器：所有済み、電気毛布の電源：電源サイト利用時のみ持参）を削除し、車両（パワートレイン確認済み）とBeck②試し詰め（Coffee Servicewareの定位置決定済み）の2件を残る未決事項のみへ更新。Patch Version。 |
| 4.17 | 2026-09-28 | MARI様のご回答に基づき、Project Inboxを更新。MD-002の移動時間（17件記載済み）を削除し、車両（座席数確認済み）とBeck②試し詰め（専用水ボトルの収納先決定済み）の行を残る未決事項のみへ書き直した。Patch Version。 |
| 4.18 | 2026-09-28 | MARI様のご回答に基づき、Project Inboxを更新。車両は荷室寸法の記載により試し積みのみを残し、Beck②の試し詰めはCoffee Equipment購入後に実施する旨を明記。Patch Version。 |
| 4.19 | 2026-09-28 | MARI様の試し積み結果をMD-001 §Loading Map（Ver.2.26）へ反映したため、Project Inboxの「車両への試し積み」を削除。Patch Version。 |
| 4.20 | 2026-09-29 | 暫定採用項目の個別確認（MARI様のご決定）を記録。Conversation Ledgerへ本会話を追加。Project Inboxへ一酸化炭素チェッカー2個目の購入予定を追加（OP-006 Ver.1.9と連動）。§Field Logへ、運用は暫定であり初回キャンプの試行後に継続を決定する旨を追記（N-05・N-16）。 |
| 4.21 | 2026-09-30 | 初回キャンプの計画（MARI様のご決定）を記録。§Field Logへ、moss camp field（2026-10-17〜18、BOTANICALオートサイト、アーリー12:00）のStatus = Planned行を追加。Conversation Ledgerへ本会話を追加。Field Logの運用は引き続き暫定であり、帰宅後にDoneへ更新した上で継続の可否を決定する。Patch Version。 |
| 4.22 | 2026-10-01 | §KN Publication Logへ、KN-001〜004創刊号（2026-09-30発行）の4行を追加。Artifact Linkは共有設定前のため「—」とした（運用ルールどおり）。Conversation Ledgerへ本会話を追加。MARI様のご指示に基づく。Patch Version。 |
| 4.23 | 2026-10-02 | MARI様のご指示（2026-10-02）に基づき、名称末尾の丸数字を改めた。Kermit Chair ①をChesterfield、②をSANDANBARA、Beck Container／Beck ①を#1、②を#2、ShellCon25 ①をHEXA、②をTCへ変更した（MD-004 Ver.7.80、MD-001 Ver.2.31、CZ-001 Ver.3.23、CZ-002 Ver.3.11、BR-002 Ver.4.12、DB-001 Ver.4.23と連動）。Version History内の過去の記述は歴史的記録として原文のまま保持した。ID・金額・その他の内容に変更はない。SOMA Chair ①・②など上記以外の丸数字は変更していない。Patch Version。 |
| 4.24 | 2026-10-03 | MARI様のご報告（KARUIZAWA CAMP GOLD、2026-09-26〜27）に基づき、§Field LogへStatus = Doneの行を追加した（天候・気温と、使った構成〈Season Kit・Shelter等〉は報告がないため記入していない）。Conversation Ledgerへ本会話を追加。MD-002 Ver.4.11（訪問済みへの更新と橘ふれあい公園の採り直し）と連動。Field Logの運用は引き続き暫定であり、継続の可否は初回キャンプ（moss camp field）の後に決定する。Patch Version。 |
| 4.25 | 2026-10-04 | MARI様のご依頼（GitHub Issue #121）に基づき、§Field Logへ過去キャンプ42件（2024-05〜2026-09、Status = Done）を追加した。Date昇順に並べ、既存のKARUIZAWA CAMP GOLD行を日付順の位置へ移動した（既存2行の内容は変更なし）。Weather / Tempは「MARI様が調べて提供された値（出典未確認）」である旨を運用ルールへ1行追記した。Conversation Ledgerへ本会話を追加。Patch Version。 |
| 4.26 | 2026-10-05 | MARI様のご依頼（GitHub Issue #125）に基づき、過去キャンプ42件をField Logへ追加した（Familyカレンダー由来・重複分を除外）。4.25で追加した53件のうち11件（Date：2024-05-25〜26、2024-06-08〜09、2024-07-06〜07、2024-08-03〜04、2024-10-26〜27、2024-11-16〜17、2025-03-22〜23、2025-05-03〜05、2025-08-09〜10、2025-10-18〜19、2026-03-20〜21）を行ごと削除し、他の行は変更していない。Conversation Ledgerの当該行を更新した。Patch Version。 |
| 4.27 | 2026-10-08 | MARI様のご依頼に基づき、KN四誌の6デザイン切替版の発行を§KN Publication Logへ追加した。あわせて、その制作材料（本文を含まないもの）を`scripts/kn_pages/`へ置き、公開済みArtifactから原版の骨格を復元して作り直す手順を同README・リポジトリREADMEに記録した。本文・埋め込み写真はOP-008 §28によりGitHubに置かない（`.gitignore`）。Patch Version。 |

---

# Operating Rules

## New Conversation

チャットを作成したら、その場で1行追加する。

入力する項目

- Conversation Title
- Document
- Search Words
- Status
- Last Updated

---

## Conversation Complete

チャット終了時に更新する項目

- Summary
- Status
- Last Updated

---

## Search Rules

Search Words には、**後から自分が検索しそうな単語を自由に登録する。**

登録例

- 日本語
- 英語
- ブランド名
- 製品名
- 略称
- テーマ

例

```text
収納
Storage
Bridge
Coffee
Beck
ShellCon
WANTKEY
RALBUDDY
Nodel
BOXTOP
Light
Habitat
```

---

## Document Renumbering Note

本文書は、2026-09-19付のプロジェクト全体の文書番号再編により、PX-002からDB-001へ番号を変更した。旧ID: PX-002。

---

# End of Document

# MD-004 Version History Archive

本ファイルは、MD-004 Equipment Registry Object Reference の Version History のうち、Version 7.0〜8.6（本文に残る直近の版〈Version 8.7〉より前の履歴）を保持する。

OP-008 §19 Rule DOC-09に基づき、S-10（改訂履歴の圧縮）により本文から移設した（Version 7.58〜7.82は、MD-004 Version 8.0のDomain別分割に伴い、Version 7.83〜8.6は、MD-004 Version 8.7に伴い、追加で移設した）。原文のまま保持し、要約・削除は行っていない。

本文側（MD-004）は Version 8.7 のみを保持する。

---

## Version 7.0  

旧・装備リストからの大規模リファクタリング。  

### Changes  

- 恒久的なEquipment IDを導入。  
- Parent / Child階層を導入。  
- Bible列を削除。  
- Priority列を削除。  
- 価格情報を削除。  
- 購入戦略を削除。  
- 装備レコードから設計思想を削除。  
- Status値を標準化。  
- Graphic Attributeを装備の同一性から分離。  
- Industrial Attributeを装備の同一性から分離。  
- TP-004を、全装備におけるSingle Source of Truthとして確立。  

---  

## Version 7.1〜7.13

（旧履歴は変更なし。詳細は本ファイルの過去バージョンを参照。）

---  

## Version 7.14  

プロジェクトオーナーの直接指示に基づき、PX-007 Deliberation Codexの新設と連動した、Candidate段階のデータ運用ルールの是正。目的は、Candidateの定義（「必要だが、具体的な製品はまだ決まっていない」）とTP-004上の実データを一致させること。既存のCandidate系比較情報を遡って移行した。  

### Changes  

- Purposeセクション：Candidate段階における具体的製品情報の扱いに関する新ルールを追加。具体的な候補比較情報はPX-007 Deliberation Codexでのみ管理し、TP-004には用途・IDのみを記録する旨を明記。  
- Registry Rules（Equipment ID）：今後の新規検討はBranch Variant形式を新設せず、単一の親IDのみで登録する運用注記を追加。既存のBranch Variant（LGT-028a/b）は今回の整理対象外として現状維持。  
- FUR-022：Brand/Productを「Unconfirmed（候補2社から選定予定）」から「Unconfirmed」に簡素化。Branch Variantsフィールドを削除。  
- FUR-022a・FUR-022b：削除。具体情報（Enlightened Equipment Accomplice、UGQ Outdoor Tango Duo）はPX-007 Deliberation Codexへ移管。  
- FUR-024：Brand/Productを「Unconfirmed（候補2案から選定予定）」から「Unconfirmed」に簡素化。Branch Variantsフィールドを削除。  
- FUR-024a〜FUR-024d：削除。具体情報（Therm-a-Rest、WAQ、HOTEL CAMPS、VISIONPEAKS×NANGAの4候補）はPX-007 Deliberation Codexへ移管。  
- FIR-019：Brand/Productを「MT.SUMI」「Aura FG」から「Unconfirmed」に変更。旧FIR-020と統合し、単一のFire Pit検討枠とした。  
- FIR-020：Retiredとして記録。旧登録情報はPX-007 Deliberation Codexへ移管。ID自体は欠番として保持。  
- LGT-041：Brand/Productを「wildingout」「LF1984」から「Unconfirmed」に変更。具体情報はPX-007 Deliberation Codexへ移管。  
- ARM-004：プロジェクトオーナーの判断により購入決定。StatusをCandidateからEssentialへ変更。Brand/Product（UNIT/04 × KUNST・BAUM SCENT TOWER）はTP-004に残置し、PX-007への移管対象から除外。  
- LGT-028グループ（親子構造、LGT-028a/028b）：今回の整理対象外として現状維持（別途整理を予定）。  
- Related Documents：PX-007 Deliberation Codexを追加。  
- Furniture Domainのアイテム数：30件（基本ID24件＋Branch Variant 6件）から24件（Branch Variant全廃止）に減少。Fire Domainの実登録数：20件から19件（FIR-020統合によりFire Pit枠が1件に）に減少（IDは欠番として20件分保持）。  

---  

## Version 7.15  

プロジェクトオーナーの指摘に基づく実態訂正。STR-001（Shellcon 01）は購入決定済みだが未所有であり、Status = Ownedは誤記であった。  

### Changes  

- STR-001：StatusをOwnedからEssentialへ訂正。  

---  

## Version 7.16  

プロジェクトオーナーの指摘に基づく実態訂正。LGT-022は「Hinoki」として登録されていたが、nodel design「38-kT miyabi Wood」シリーズに同名の製品は実在しないことが判明した。同シリーズは2024年3月の発売時点でWalnutとSugiの2色のみで展開されており、プロジェクトオーナーが所有する4色目（Walnut・Karin・African Woodに次ぐもの）は、発売時期および外観の特徴（明るい色味・縦方向の力強い木目）から、Sugiである可能性が高いと判断した。

### Changes  

- LGT-022：Product/Materialを「Hinoki」から「Sugi」へ訂正。StatusをUpgradeからOwnedへ訂正（プロジェクトオーナーが既に所有しているため）。  
- LGT-025（Pine）・LGT-026（Maple）：変更なし。引き続きUpgrade（購入希望）として維持する。  

---  

## Version 7.17  

プロジェクトオーナーの指摘に基づく実態訂正。LGT-028bのBrand表記が誤っていた。  

### Changes  

- LGT-028b：Brandを「CALMA STORE × neru design works」から「neru design works × CALMA STORE」へ訂正（neru design worksによるCALMA STORE別注品であり、ブランド順は制作元が先）。Productを「POCKET SHADE M（neru design works柄）」から「POCKET SHADE」へ簡素化。  

---  

## Version 7.18  

プロジェクトオーナーとの協議に基づき、TP-010 Duplicate Storage Exceptionの新設を受けて、ゴミ箱運用をANOBAへ切り替え。  

### Changes  

- STR-028：新規登録。ANOBA BLACK EDITION マルチダストバケット（Status: Essential, Quantity: 2）。TP-010 Duplicate Storage Exceptionに基づき、燃えるゴミ・缶ゴミ用／ビンゴミ用の役割分化を行った2台構成として採用。  
- 従来使用のSnow Peak ガビングスタンド（DB-030）は、TP-004へ未登録のまま運用されていたため、Retiredレコードの追加は行わない。  
- Related Documents：変更なし。  

---  

## Version 7.19  

MARI様のご購入報告に基づき、Essential段階だった3件のStatusをOwnedへ更新。

### Changes  

- STR-001：StatusをEssentialからOwnedへ更新（Snow Peak Shelf Container 25 雪峰祭 Black／Shellcon 01、本体を購入）。子部品（STR-002〜006）のStatusは個別に維持し、本更新の対象外とする。  
- LGT-015：StatusをEssentialからOwnedへ更新（neru design works × LampUp MIYABI RICH Alumi Frozen）。  
- STR-019：StatusをEssentialからOwnedへ更新（nodel design Container Bridge Frame、本体を購入）。子部品（STR-020・STR-021）のStatusは個別に維持し、本更新の対象外とする。  
- Related Documents：変更なし。  

---  

## Version 7.20  

Version 7.18時点で見送っていたSnow Peak ガビングスタンド（DB-030）のRetiredレコードを、プロジェクトオーナーの指示により追加。今後も同種の装備入れ替えが継続的に発生する見込みのため、記録形式を確立する目的も兼ねる。

### Changes  

- STR-029：新規登録（Retired）。Snow Peak ガビングスタンド（DB-030）。STR-028への置き換えに伴う廃止記録。サイズ・重量・分別仕様を事後的に記録。  
- Related Documents：変更なし。  

---  

## Version 7.21  

MARI様のご購入報告に基づき、STR-028（ANOBAダストバケット）のStatus更新と、2台目検討枠の新設。IDはSTR-029が直前のVersion 7.20で別用途（Retired記録）に確定していたため、新規枠にはSTR-030を採番した。

### Changes  

- STR-028：StatusをEssentialからOwnedへ更新（ANOBA BLACK EDITION マルチダストバケット、1台目を購入）。Quantityフィールドを削除（2台構成から単数運用へ変更のため）。Industrial Attributeの記述を、1台目を運用中である旨・2台目検討枠はSTR-030である旨に修正。  
- STR-030：新規登録。ダストバケット2台目の検討枠（Status: Candidate）。STR-028と同一のANOBA製品を追加購入するか、別ブランドを検討するかは未定。具体的な候補比較はPX-007 Deliberation Codexで管理する。  
- Related Documents：変更なし。  

---  

## Version 7.22  

プロジェクトオーナーとの協議の結果、ダストバケット2台目枠（STR-030）の検討が完了。単なる複製ではなく、役割の異なる2製品（ANOBA・KAZE_TO_MORI×WINDY AND RAINY T-box）による構成に確定した。これに伴い、TP-010のDuplicate Storage Exceptionは本件には適用されないこととなった（TP-010 Ver.2.4を参照）。

### Changes  

- STR-028：Industrial Attributeを、燃えないゴミ（缶・ビン）用・STR-031フォールディングサイドテーブルへ収納して運用する旨に修正。  
- STR-030：検討枠（Candidate）から正式決定（Status: Essential）へ更新。Brand/Productを「KAZE_TO_MORI × WINDY AND RAINY / Folding Wire T-box 全面コンプリートセット」に確定。燃えるゴミ用として単独運用する。本体単体のサイズ・重量・開閉方式は未確認のため、Industrial Attributeにその旨を明記。  
- STR-031：新規登録。ANOBA フォールディングサイドテーブル（Status: Essential）。STR-028の収納先として採用。  
- Related Documents：変更なし。  

---  

## Version 7.23  

プロジェクトオーナーの指示に基づき、STR-028とSTR-031をParent/Child関係として明示。あわせて、windyandrainy.tokyo公式ページの確認により、STR-030（T-box本体）のサイズ・重量・素材・耐荷重が判明したため反映。

### Changes  

- STR-028：**Parent** STR-031を追加。Industrial Attributeから、収納先を説明する記述（Parent/Childで自明になったため）を削除し簡素化。  
- STR-031：**Child Components** STR-028を追加。  
- STR-030：Color・Material・Industrial Attributeを、windyandrainy.tokyo公式ページ（商品コード war-037）の情報に基づき更新。本体サイズW395×H440×D195mm、重量約1420g、素材はスチールメッキ（ワイヤー部）／スチールメッキ+プラスチック（脚部）、耐荷重20kg、ワンアクション組み立てであることを確認・反映。KAZE_TO_MORI製COVER/FUTA部の生地構成（X-PAC）は引き続き未確認。  
- Parent / Child Rules セクションのExampleに STR-031└STR-028 を追加。  
- Related Documents：変更なし。  

---  

## Version 7.24  

プロジェクトオーナーの指摘に基づく実態訂正。X-PACは、KAZE_TO_MORI固有の未知の素材ではなく、Dimension-Polyant社（アメリカ、ヨット用セイルクロス世界最大手）が開発した業界標準のラミネート生地であり、多くのアウトドア・バッグブランドで採用されている汎用素材であることが判明した。

### Changes  

- STR-030：Material欄の記述を「詳細な生地構成は未確認」から、X-PACの一般的な構造（表地＋X-Ply補強層＋防水フィルムの3〜4層ラミネート、Dimension-Polyant社製）を明記する記述へ訂正。未確認として残すのは、本製品固有の表地デニールやグレード（X3/X4等）のみに限定。  
- Related Documents：変更なし。  

## Version 7.25  

MARI様がClaude導入以前に個人管理していたスプレッドシート（Numbersファイル）を精査し、GitHub未登録の既存所有ギアをTP-004へ統合。あわせて、7つ目のDomain「Shelter」を新設し、Price（価格）フィールドを任意項目として再導入した（Version 7.0で一度削除された項目の復活。既存登録済みアイテムへの遡及記載は別途対応予定）。

### Changes（構造）

- Registry Rules：Equipment Domainsを6→7に変更し、「Shelter」を追加。Equipment ID例に「SHL-001」を追加。  
- Attribute Policy：保存フィールドに「Price」を追加（任意項目）。  
- Domain運用ルール：装備専用のケース・バッグ類は、対象装備と同じDomainに属する（Storageへ分離しない）方針を確認。これに伴いSTR-022・STR-023をFireドメインへ移設。  

### Changes（Furniture、新規11件）

- FUR-025〜FUR-035：真聖衣（FUR-002子部品）、天板枠左右2種（FUR-013子部品）、シリコンマット黒白2種（FUR-013子部品）、シリコンシート（FUR-013子部品）、ハンガーフック（FUR-013子部品）、ABLE IGTユニットスタンド、Kermit CARRY TOTE、EXTENSIONTABLE CASE（FUR-013子部品）、SNIPE HANGER home.を新規登録。すべてOwned。  
- 備考：Kermit CARRY TOTEは、MARI様のご意向としては本来FUR-001直後への番号挿入・後続繰下げが望ましいが、今回の一括登録では既存ID体系への影響を避けるため末尾（FUR-034）に追加した。Furniture Domainの番号整理は別途の課題として保持する。  

### Changes（Storage、新規7件・移設2件）

- STR-032〜STR-033、STR-014、STR-017、STR-032aを新規登録（YETI ICE／Thin Ice／Rambler Half Gallon Jug／ユニバーサルスタンド／Beck Container用Black Stand×2／Jug Stand）。すべてOwned。  
- STR-022（rodan_no_kaban）・STR-023（table_no_kaban）：Fireドメインへ移設のためRetired化。移設先はFIR-036・FIR-037。  

### Changes（Fire、新規17件）

- FIR-021〜FIR-037：五徳、焚き火シート、ナイフ、フック、SomAbito焚き火side stand、斧カバー（FIR-004子）、鞘ケース（FIR-005子）、ガスストーブ＋バッグ、着火ケース、フォーク、フック、ヘラ、Rodanカスタムオプション2件（FIR-001子）、旧STR-022・STR-023（FIR-001／FIR-002子として移設）を新規登録。すべてOwned。  
- FIR-001・FIR-002：Child Componentsを追加。  

### Changes（Light、新規7件）

- LGT-054〜LGT-060：ガスランタン「ネルガス」一式4点（本体・ベース・横レール・下部ベース）、Vapourax M320用アクセサリー（LGT-002子）、お立ち台バー（LGT-032子）、FORKBASEset（LGT-036子）を新規登録。すべてOwned。  
- LGT-002・LGT-032・LGT-036：Child Componentsを追加。  

### Changes（Shelter、新設・4件）

- Domain新設。SHL-001（幕男、冬用ヘキサタープ）とその子SHL-002（ガイロープ）、SHL-003（DEVISE WORKS×HEIMPLANET CLOUDBREAK"D" White）、SHL-004（HELLOS factory Slug Shelter V2.0／国内名スネイルシェルター、Black）を新規登録。すべてOwned。  

### 既知の未確認事項

- STR-032（YETI Rambler Half Gallon Jug）・SHL-004（Slug Shelter V2.0）の価格が未確認。  
- Furniture Domainの番号整理（Kermit CARRY TOTEの適切な位置への挿入）が未対応。  
- 上記以外の新規登録アイテムの一部（ニッチなガレージブランド品）は、ウェブ上での公式情報が確認できず、購入記録上の名称をそのまま採用している。  

- Related Documents：変更なし。  

## Version 7.26  

MARI様がClaude導入以前に個人管理していたスプレッドシート（Numbersファイル）から、Price未記載だった既存登録済みアイテムの価格情報を抽出し反映した。

### Changes  

- 全65件の既存アイテム（Furniture 17件、Light 28件、Aroma 1件、Storage 17件、Fire 13件相当、重複ID含む）にPriceフィールドを追加。  
- STR-013・STR-016（Beck Container①②）：Numbers記載の合計価格（¥110,000／2台分）を折半して各¥55,000として記録。  
- FUR-011・FUR-012（SOMAチェア①②）：Numbers記載の合計価格（¥77,000／2脚分）を折半して各¥38,500として記録。  
- STR-007：Numbers上「シェルコン①」表記だったが、製品名（Black Label）に基づきSTR-007（Shellcon 02）へ割当（Version 7.25で確立した「矛盾時はTP側を正とする」原則の逆側、すなわちTP-004の製品名を基準にNumbers側のラベル誤りを解釈）。STR-001は該当データなしのまま。  
- LGT-037：Numbers上「RT-01/ECHO LAMP」関連の重複記載（タープC-1／タープC-1-2）のうち、rove troupe本体に一致する側を採用。LGT-027は該当データなしのまま。  
- LGT-036：Numbers記載額はQuantity 2（38-kT THE RICH classic100 ×2）の合計額であることをMARI様に確認済み。単価分割はせず、合計額のままPriceへ記録し、その旨を注記。  
- 引き続きPriceが空欄のアイテム（コンテナ本体・チェア本体等、Numbers上に取得当時の記録が残っていなかったもの）は、今後判明次第追記する。  

- Related Documents：変更なし。  

## Version 7.27  

Version 7.26時点でPrice未確認（要確認）のまま残っていた11件について、ウェブ調査およびプロジェクトオーナーへの確認により価格情報を確定・反映した。あわせて、調査過程で判明したFUR-020／FUR-021の登録構造の誤り、およびSTR-027の型番誤記をプロジェクトオーナーの指摘に基づき訂正した。

### Changes（Price確定、11件）

- LGT-001（KUROshidare）：¥95,000（プロジェクトオーナー確認）。  
- LGT-004（38-kT miyabi wood Joker）：¥69,000（プロジェクトオーナー確認）。  
- LGT-014（MIYABI RICH Amber）：¥29,700（neru design works × LampUp公式価格）。  
- LGT-026（38-kT miyabi Wood Maple）：¥25,000（プロジェクトオーナー確認）。  
- LGT-027（TARPtoTARP × LampUp Glass Shade & Wood Stand Set）：¥67,000（プロジェクトオーナー確認）。  
- ARM-004（UNIT/04 × KUNST・BAUM SCENT TOWER）：¥19,800（プロジェクトオーナー確認）。  
- STR-027（YETI Hopper Flip 12）：¥46,860（YETI Japan公式価格）。型番訂正は下記参照。  
- STR-030（KAZE_TO_MORI × WINDY AND RAINY Folding Wire T-box 全面コンプリートセット）：¥50,600（プロジェクトオーナー確認）。  
- FIR-014（neru design works copper250）：¥28,000（プロジェクトオーナー確認）。  
- FIR-018（武井バーナー Purple Stove 501A）：¥121,000（プロジェクトオーナー確認。生産終了品につき中古相場での記録）。  

### Changes（構造訂正）

- FUR-020／FUR-021：Snow Peak「ダウン システムオフトン スリムマットセット（BD-060）」は掛け布団+マットのセット販売であることが判明。単体マットとして別ID登録されていたFUR-021をFUR-020へ統合し、FUR-021は削除（Retiredではなく登録自体を撤回）。Price ¥44,000（セット価格）はFUR-020側に記録。FUR-022・FUR-023・FUR-024のIndustrial Attribute内のFUR-021参照、およびPX-007 Deliberation Codexの該当箇所を「FUR-020（マット部）」へ更新。  
- STR-027：Product表記を誤記の「Hopper Flip 16」から正しい「Hopper Flip 12」へ訂正（16はモデル名ではなく容量16qtを指す表記だった）。  

- Related Documents：PX-007 Deliberation Codex（FUR-020/021統合に伴う参照更新）。  

## Version 7.28

STR-011のPrice未記載を解消。また、プロジェクトオーナーの直接指示に基づき、Furniture Domainの番号整理を実施した。これはRegistry Rulesの「IDは変更されない」という原則に対する例外であり、Kermit Chair①②の専用収納ケース（旧FUR-034 Kermit CARRY TOTE）が、Kermit Chair②の子部品群（FUR-007〜FUR-010）の直後に位置すべきという実態に合わせるための、一回限りの意図的な再採番である。

### Changes（Price確定）

- STR-011（OMA FACTORY OMA.SC-PICATINNY RAIL-No.001G）：Price未記載だったため¥12,000を追記（プロジェクトオーナー確認）。

### Changes（Furniture番号整理）

- 旧FUR-034（Kermit CARRY TOTE）をFUR-011へ移動。Kermit Chair②の子部品群（FUR-007〜FUR-010）の直後に位置づけた。
- 上記に伴い、旧FUR-011〜FUR-020をFUR-012〜FUR-021へ、旧FUR-022〜FUR-033は番号据え置き、旧FUR-035・FUR-035をFUR-034・FUR-035へ、それぞれ1つずつ繰り下げ。旧FUR-021（削除済み・欠番）は詰められ、Furniture Domainの登録範囲はFUR-001〜FUR-035の連番となった。
- Parent参照（旧FUR-013→新FUR-014を親とする子部品群: 旧FUR-014・015・026〜031・034）、およびChild Componentsリスト（新FUR-006・新FUR-014）を、すべて新番号に更新。
- FUR-022・FUR-023・FUR-024のIndustrial Attribute内の「FUR-020（マット部）」参照を「FUR-021（マット部）」へ更新（Quilt & Sleeping Mat Set本体の新ID反映）。
- PX-007 Deliberation Codex（FUR-020参照2箇所）、PX-003 Vigil Protocol（FUR-017参照1箇所）を、新番号（FUR-021、FUR-018）へ更新。
- Version 7.0〜7.27の記述内にある旧FUR-ID表記は、当時の記録として遡及修正しない。

- Related Documents：PX-003 Vigil Protocol、PX-007 Deliberation Codex（Furniture番号整理に伴う参照更新）。  

## Version 7.29

Owned/EssentialアイテムのうちBrand／Color／Materialが「Unconfirmed」のまま残っていた項目について、ウェブ調査により公式ページ・販売元ページで確認できた範囲のみ反映した。同一製品で複数のカラーバリエーションが存在する等、購入した個体を特定できない項目は、推測を避けるため引き続きUnconfirmedのまま保持している。

なお、Brass／Walnutなど無垢素材のColorは、当該Materialが確認できた場合に本文書内の既存表記慣例（例：LGT-002・LGT-030・FUR-003＝Brass→Gold、FUR-001・FUR-016等＝Walnut→Brown）に基づき記録した。個別に塗装色が確認された場合を除く。

### Changes（確認・反映、13件）

- FUR-011（Kermit CARRY TOTE）：Materialを「500D Cordura Nylon」に確定（Ballistics.jp公式ページ）。Colorは公式に3配色（Coyote×Multicam等）が存在し所有個体を特定できないため、Unconfirmedのまま維持。
- FUR-035（SNIPE HANGER home. モク）：Colorを「Wood-grain Print（モク）」に確定（SINANO WORKS公式ページ、モクは同社の正式カラー名）。
- LGT-056（Futamata）：Brandを「neru design works」、Materialを「Brass」に確定（lifeoverground.com掲載、真鍮削り出しと明記）。Colorは上記慣例によりGoldとした。
- LGT-057（OD-CAN PLATE）：Materialを「Black Walnut」に確定（INOUT公式ページ）。Colorは無垢ウォールナットの実色としてBrownとした。
- LGT-059（WWW_LANTHANUMHOOK）：Brandを「WHAT WE WANT（WWW）」、Materialを「Brass」に確定（WHAT WE WANT公式ページ）。Colorは上記慣例によりGoldとした。
- LGT-060（FORKBASEset (BS)）：Brandを「38Explore」に確定（価格一致・製品ラインナップにより確認）。Color・Materialは情報未確認のまま維持。
- STR-032a（KRAKEN STAND）：Materialを「Oak / Stainless Steel」に確定（calma store公式ページ）。Brand・Colorは販売元と製造元の関係が不明確なため未確認のまま維持。
- STR-033（ユニバーサルスタンド）：Brandを「wanderout」、Materialを「Steel（Chrome-Plated）」に確定（wanderout公式ページ）。複数カラー展開があり所有個体を特定できないため、Colorは未確認のまま維持。
- FIR-021（LECTER Ver2）：Brandを「サンゾー工務店」に確定（同社公式サイトに一致製品あり）。
- FIR-027（WWW_SAYA）：Materialを「Walnut」に確定（WHAT WE WANT公式ページ）。Colorは無垢ウォールナットの実色としてBrownとした。
- FIR-028（shank heater 百式改）：Materialを「Brass（Black-Painted）」、Colorを「Black」に確定（lifeoverground.com掲載、黒塗装が真鍮地に馴染む旨明記）。Brandは制作元表記が複数説あり確定できないため未確認のまま維持。
- FIR-034（カスタムベロ）：Brandを「サンゾー工務店」に確定（同社RODANシリーズのキャラクター名オプションパーツと一致）。
- SHL-004（Slug Shelter V2.0）：Materialを「Nylon 40D Ripstop（Silicone Coating, PU Blackout）／AL7001 Aluminum（Poles）」に確定（HELLOS factory製品情報の複数ソース集約）。

### 引き続きUnconfirmedのまま残る項目

- 上記以外の項目（FUR-025〜027・031〜033、LGT-054・055・058、STR-014・015a・032（Color）、FIR-022〜024・026・029〜033・035、SHL-001・002）：公式ページが見つからない、販売元と製造元の帰属が不明確、または複数バリエーションが存在し所有個体を特定できないため、引き続きUnconfirmedのまま保持する。今後、プロジェクトオーナーによる現物確認または追加情報の提供を待つ。
- Related Documents：変更なし。

## Version 7.30

Version 7.29で保留としていたFIR-035のBrand訂正について、プロジェクトオーナーの確認が取れたため反映した。

### Changes

- FIR-035（半月セット）：Brandを誤記の「Blick」から「サンゾー工務店」へ訂正（プロジェクトオーナー確認。FIR-001 RODAN BRICKと同一メーカーによるオプションパーツ）。Materialを「Nitrided Iron（窒化処理）」に確定（RODANシリーズ共通仕様）。Colorは個体を特定できないため引き続きUnconfirmed。

- Related Documents：変更なし。

## Version 7.31

Version 7.29までの調査で残っていたUnconfirmed項目について、プロジェクトオーナーが現物・購入記録を確認し、まとめて情報提供を受けた。提供された内容をそのまま反映した。ウェブ調査による推測ではなく、すべてプロジェクトオーナー本人による現物確認に基づく一次情報である。

### Changes（Furniture）

- FUR-011（Kermit CARRY TOTE）：Colorを「Black」に確定。
- FUR-025（真聖衣）：Brandを「Release」、Colorを「Gold」、Materialを「Brass」に確定。
- FUR-026（2UNITFRAME NDW ver.）：Materialを「Iron」に確定。
- FUR-028（TSURAICHI KUROWAKU）：Brandを「DEVISE WORKS」、Materialを「Iron」に確定。
- FUR-029（CUTTING MAT BLACK）・FUR-030（CUTTING MAT White）：Brandを「DEVISE WORKS」に確定。
- FUR-032（WWW_EXTENSIONSIDEBAR NDWver）：Colorを「Gold」、Materialを「Brass」に確定。
- FUR-033（IGT 1ユニットスタンド）：Colorを「Dark Brown」、Materialを「Walnut」に確定。
- FUR-034（EXTENSIONTABLE CASE）：Colorを「Black」に確定（Materialは未確認のまま維持）。

### Changes（Light）

- LGT-054（BM Lanthan）：Colorを「Gold」、Materialを「Brass」に確定。Industrial Attributeから通称「ネルガス」の注記を削除。
- LGT-055（Vintage cover250）：Brandを「MOLDS Tokyo」から「neru design works」へ訂正（プロジェクトオーナー確認）。Colorを「Copper（Marbled Patina）」、Materialを「Copper（Chemically Patinated）」に確定。
- LGT-058（クラッシュアイス）：Colorを「Amber」、Materialを「Glass」に確定。
- LGT-060（FORKBASEset (BS)）：Colorを「Gold」、Materialを「Brass」に確定。

### Changes（Storage）

- STR-032（Rambler® Half Gallon Jug）：Colorを「Silver」に確定。
- STR-032a（KRAKEN STAND）：Brandを「calma store」、Colorを「Brown」に確定。
- STR-014・STR-017（Black Stand）：Materialを「Iron」に確定。
- STR-033（ユニバーサルスタンド）：Colorを「Black」に確定。

### Changes（Fire）

- FIR-021（LECTER Ver2）：Colorを「Black」、Materialを「Iron」に確定。
- FIR-022（TAKIBI SHEET）：Brandを「zen camp」、Colorを「Black」、Materialを「Silicone-Coated Fiberglass」に確定。
- FIR-023（MACKY DEVISE）：Brandを「DEVISE WORKS」から「asimocrafts × DEVISE WORKS」へ訂正（プロジェクトオーナー確認）。Colorを「Brown」に確定。Materialを「Steel」から「Steel / Oak」へ更新（柄部の素材を追加）。
- FIR-024（HONE HOOK）：Brandを「DAMNGOOD!!」、Colorを「Black」、Materialを「Iron」に確定。
- FIR-026（Ono kezuruカバー）：Brandを「neru design works」から「neru design works × calma store」へ訂正（プロジェクトオーナー確認）。Colorを「Gold」、Materialを「Brass」に確定。
- FIR-029（shank container）：Brandを「neru design works」、Colorを「Camouflage」、Materialを「Nylon」に確定。
- FIR-030（MACCHO CASE）：Brandを「DEVISE WORKS」から「DEVISE WORKS × WHAT WE WANT」へ訂正（プロジェクトオーナー確認）。Colorを「Dark Brown」、Materialを「Walnut」に確定。
- FIR-031（SOMA no Folk）：Colorを「Light Brown」、Materialを「Oak」に確定。
- **FIR-032／FIR-033：番号を入れ替え**。プロジェクトオーナーの指示により、SOMA no Hera（SOMABITO）をFIR-032へ、WWW_HANGER（WHAT WE WANT）をFIR-033へ番号変更。IDが変更されない原則に対する例外として、Version 7.28（Furniture番号整理）と同様の扱いとする。FIR-032（SOMA no Hera）：Colorを「Light Brown」、Materialを「Oak」に確定。FIR-033（WWW_HANGER）：Colorを「Brown / Dark Brown」、Materialを「Walnut / Oak」に確定（7個中、素材違いの2バリエーションが混在）。他ドキュメントにFIR-032／FIR-033への参照は存在しないため、相互参照の更新は不要と確認済み。
- FIR-034（カスタムベロ）・FIR-035（半月セット）：Colorを「Gray」に確定。FIR-034のMaterialを「Nitrided Iron（窒化処理）」に確定（FIR-035と同一仕様）。

### Changes（Shelter）

- SHL-001（幕男）：Brandを「The Arth」、Colorを「Black」に確定（プロジェクトオーナー確認、https://thearth.design/item-detail/1450017 ）。
- SHL-002（W3.8 ROPE（DEVISE ver.））：Brandを「DEVISE」から「DEVISE WORKS」へ表記統一。Colorを「Black」、Materialを「Polyester」に確定。

### 引き続きUnconfirmedのまま残る項目

- FUR-034（EXTENSIONTABLE CASE）：Material。
- FIR-028（shank heater 百式改）：Brand。
- SHL-001（幕男）：Material。

- Related Documents：変更なし。

## Version 7.32

Version 7.31で残っていた最後の3件のUnconfirmedについて、プロジェクトオーナーの現物確認が取れたため反映した。これにより、Coffee Domain（意図的に未入力のCOF-series）を除く、全DomainのOwned／EssentialアイテムのBrand・Color・Materialが確定した。

あわせて、Excelスプレッドシートのマージ時に混入した「通称」表記のような非公式な注記が他に残っていないか、Industrial Attribute欄を全件確認した。LGT-054の「ネルガス」（Version 7.31で削除済み）以外に同種の注記は見つからなかった。なお、SHL-004の「国内流通名：スネイルシェルター」は公式な国内代理店表記であり、ネルガスのような非公式なあだ名とは性質が異なるため、削除対象としない。

### Changes

- FIR-028（shank heater 百式改）：Brandを「neru design works × calma store」に確定（プロジェクトオーナー確認）。
- FUR-034（EXTENSIONTABLE CASE）：Materialを「Polyester」に確定（プロジェクトオーナー確認）。
- SHL-001（幕男）：Materialを「Polyester」に確定（プロジェクトオーナー確認）。

- Related Documents：変更なし。

## Version 7.33

MD-003 Galley Fare Version 2.8（ゴミ箱のストレージ移管に伴うKIT-070系の整理）との整合確認、および親子関係の記載点検の結果、親側のChild Componentsリストに抜けがあったため補完した。本文書のゴミ関連の登録（STR-028〜STR-031）の内容に変更はなく、引き続きゴミ箱・ダストバケット・サイドテーブルの正の登録先は本文書である。

### Changes

- FUR-002：Child Componentsとして FUR-025 を追記（FUR-025のParent記載に対応）。
- FUR-014：Child Componentsに FUR-026・FUR-028・FUR-029・FUR-030・FUR-031・FUR-032・FUR-034 を追記（各子部品のParent記載に対応。従来はFUR-015・FUR-016のみ記載）。
- FIR-004：Child Componentsとして FIR-026 を追記。
- FIR-005：Child Componentsとして FIR-027 を追記。
- STR-013：Child Componentsに STR-014 を追記（従来はSTR-015のみ記載）。
- STR-016：Child Componentsに STR-017 を追記（従来はSTR-018のみ記載）。
- 各子部品側のParent記載および登録内容に変更なし。

- Related Documents：MD-003 Galley Fare（Version 2.8。KIT-070系をSTR-028・027・029の移管記録へ整理）。

## Version 7.34

MARI様のご指示に基づき、Aroma Domainの2件のStatusおよび番号を整理した。ARM-003（Filoméla INCENSE CHAMBER Tokyo Limited）をEssentialからUpgradeへ変更し、購入決定済みのARM-004（UNIT/04 × KUNST・BAUM SCENT TOWER）と番号を入れ替えた。Essential（購入決定）を先に、Upgrade（「あれば良い」枠）を後に並べる整理である。これはRegistry Rulesの「IDは変更されない」という原則に対する例外であり、Version 7.28（Furniture番号整理）・Version 7.31（FIR-032／FIR-033入替）と同様の扱いとする。

### Changes

- ARM-003：旧ARM-004（UNIT/04 × KUNST・BAUM SCENT TOWER）を新ARM-003として配置。Status（Essential）を含む登録内容に変更なし。
- ARM-004：旧ARM-003（Filoméla INCENSE CHAMBER Tokyo Limited）を新ARM-004として配置。StatusをEssentialからUpgradeへ変更。その他の登録内容に変更なし。
- CZ-001 Deliberation Codex（Version 2.6）・CZ-002 Vigil Protocol（Version 2.5）内のARM-003／ARM-004参照を新番号へ更新。
- Version 7.14・Version 7.27の記述内にある旧ARM-004（SCENT TOWER）の表記は、当時の記録として遡及修正しない。

- Related Documents：CZ-001 Deliberation Codex、CZ-002 Vigil Protocol（Aroma番号入替に伴う参照更新）。

## Version 7.35

MARI様のご指示に基づき、SHL-004（HELLOS factory Slug Shelter V2.0）の専用オプション「ベスタビュールV2.0」をSHL-005として子部品登録した。

### Changes

- SHL-005：新規登録（Status: Owned、Parent: SHL-004）。Brand・Productは日本正規ディーラー（Burn Freely等）の商品表記「HELLOS FACTORY SNAIL SHELTER V2.0専用ベスタビュールV2.0(DAC POLE)」に基づく。Color・Materialはオーナーの指示により本体（SHL-004）と同一（Black／Nylon 40D Ripstop）とした。ポールのみ、商品名表記に基づきDAC Poleとして記録（本体のAL7001 Aluminumとは異なる可能性があるため、現物確認後に必要であれば訂正）。Price ¥90,200は販売店の税込価格で、オーナー申告（10万弱）と整合。実購入額が異なる場合は訂正する。  
- SHL-004：Child Componentsとして SHL-005 を追記。  

- Related Documents：変更なし。

## Version 7.36

プロジェクトオーナーの直接指示に基づき、Furniture Domainの番号整理を実施した。これはRegistry Rulesの「IDは変更されない」という原則に対する例外であり、Version 7.28（Kermit CARRY TOTEの位置整理）と同様の、実態（Kermit①→②→CARRY TOTE→SOMA→EXTENMON TABLE→Butterfly→Sofa／Quilt & Sleeping Mat Set系の順）に合わせるための一回限りの意図的な再採番である。

### Changes（Furniture番号整理）

- 下記の旧→新対応表に基づき、Furniture Domain全34件（FUR-001〜FUR-035）を同時に再採番した（プレースホルダ経由の一括置換により、途中の番号衝突は発生していない）。

| 旧ID | 新ID | 旧ID | 新ID | 旧ID | 新ID |
|---|---|---|---|---|---|
| FUR-001 | FUR-001 | FUR-013 | FUR-014 | FUR-025 | FUR-003 |
| FUR-002 | FUR-002 | FUR-014 | FUR-015 | FUR-026 | FUR-018 |
| FUR-003 | FUR-004 | FUR-015 | FUR-016 | FUR-028 | FUR-019 |
| FUR-004 | FUR-005 | FUR-016 | FUR-017 | FUR-029 | FUR-020 |
| FUR-005 | FUR-006 | FUR-017 | FUR-025 | FUR-030 | FUR-021 |
| FUR-006 | FUR-007 | FUR-018 | FUR-026 | FUR-031 | FUR-022 |
| FUR-007 | FUR-008 | FUR-019 | FUR-028 | FUR-032 | FUR-023 |
| FUR-008 | FUR-009 | FUR-020 | FUR-029 | FUR-033 | FUR-030 |
| FUR-009 | FUR-010 | FUR-021 | FUR-032 | FUR-034 | FUR-024 |
| FUR-010 | FUR-011 | FUR-022 | FUR-033 | FUR-035 | FUR-031 |
| FUR-011 | FUR-012 | FUR-023 | FUR-034 | | |
| FUR-012 | FUR-013 | FUR-024 | FUR-035 | | |

- Parent、Child Componentsリスト、Industrial Attribute内のFUR参照（子部品・関連部品への言及を含む）を、すべて上記対応表に基づき新番号へ更新した。
- Parent / Child Rules（親子関係ルール）章のExample（FUR-001とその子部品の例示）も、実際のデータに合わせて新番号へ更新した。
- FUR-032（旧FUR-021、Quilt & Sleeping Mat Set）のIndustrial Attribute内にある「旧FUR-021単体マット登録は本IDへ統合」という記述は、Version 7.28以前に削除・撤回された別ID（今回の対応表の対象外）を指す歴史的記述のため、遡及修正しない。
- Version 7.0〜7.35の記述内にある旧FUR-ID表記は、当時の記録として遡及修正しない。
- CZ-001 Deliberation Codex（Winter Top Quilt／Winter Sleeping Mat／Pad Sheet／Confirmed - Purchase PendingにおけるFUR参照）、CZ-002 Vigil Protocol（Butterfly Table M Black LookのMD-004 Reference）を、それぞれ新番号へ更新。

- Related Documents：CZ-001 Deliberation Codex、CZ-002 Vigil Protocol（Furniture番号整理に伴う参照更新）。

---  

## Version 7.37

プロジェクトオーナーの直接指示に基づき、Storage Domainの番号整理（並べ替えと欠番詰め）を実施した。これはRegistry Rulesの「IDは変更されない」という原則に対する例外であり、Version 7.28（Furniture Domain Kermit CARRY TOTEの位置整理）・Version 7.36（Furniture Domain全体の番号整理）と同様の、一回限りの意図的な再採番である。

### Changes（Storage番号整理）

- 下記の旧→新対応表に基づき、Storage DomainのSTR-022〜STR-033（STR-032a含む）を同時に再採番した（プレースホルダ経由の一括置換により、途中の番号衝突は発生していない）。STR-001〜STR-021・STR-014・STR-017は変更なし。

| 旧ID | 新ID | 製品 |
|---|---|---|
| STR-026 | STR-022 | YETI Roadie 24 |
| STR-032 | STR-023 | YETI ICE 4 lb |
| STR-027 | STR-024 | YETI Hopper Flip 12 |
| STR-031 | STR-025 | YETI Thin Ice - Large |
| STR-032 | STR-026 | YETI Rambler Half Gallon Jug |
| STR-032a | STR-026a | calma store KRAKEN STAND |
| STR-031 | STR-027 | ANOBA フォールディングサイドテーブル |
| STR-028 | STR-028 | ANOBA ダストバケット（番号変更なし） |
| STR-030 | STR-029 | KAZE_TO_MORI × WINDY AND RAINY Folding Wire T-box |
| STR-024 | STR-030 | Snow Peak Multi Container L |
| STR-025 | STR-031 | WHATNOT One Touch Bucket HD |
| STR-033 | STR-032 | wanderout ユニバーサルスタンド |

- 旧STR-022・STR-023（Fireドメインへ移設済みのRetiredレコード。Version 7.25）、および旧STR-029（Snow Peak ガビングスタンド、Retired。Version 7.20で事後的に登録）の計3件は、跡地に新IDが入るため本Versionで削除した。経緯はVersion 7.20（STR-029の事後登録）・Version 7.25（旧STR-022・STR-023のFireドメイン移設）を参照。
- Parent、Child Componentsリスト、Industrial Attribute内のSTR参照を、すべて上記対応表に基づき新番号へ更新した。FIR-036・FIR-037のIndustrial Attribute内にあった「旧STR-022／STR-023より移設」という記述は、削除された旧IDを指すため「Storageドメインより移設。Version 7.25」に改めた。
- Parent / Child Rules（親子関係ルール）章のExampleを `STR-031 └ STR-028` から `STR-027 └ STR-028` へ更新した。
- STR-022（YETI Roadie 24）とSTR-023（YETI ICE 4 lb）、STR-024（YETI Hopper Flip 12）とSTR-025（YETI Thin Ice - Large）について、実態に即してParent/Child関係を新設した（STR-022のChild ComponentsにSTR-023を追加、STR-023にParent: STR-022を追加。STR-024・STR-025も同様）。
- STR-027（旧STR-031、ANOBA フォールディングサイドテーブル）のStatusを、購入報告に基づきEssentialからOwnedへ更新した。
- STR-028（ANOBAダストバケット）のIndustrial Attribute内、旧STR-029（削除済み）への言及を、置き換え元の経緯（Version 7.20でRetired登録、Version 7.37の番号整理により当該レコードは削除）を説明する記述に改めた。
- Version 7.0〜7.36の記述内にある旧STR-ID表記は、当時の記録として遡及修正しない。

- Related Documents：MD-001 Storage Blueprint（Ver.2.6）、MD-003 Galley Fare（Ver.2.9）。

---  

## Version 7.38  

プロジェクトオーナーの直接指示に基づき、Fire Domainの番号整理（並べ替えと欠番詰め、新規1件の追加）を実施した。これはRegistry Rulesの「IDは変更されない」という原則に対する例外であり、Version 7.36（Furniture Domain全体の番号整理）・Version 7.37（Storage Domainの番号整理）と同様の、一回限りの意図的な再採番である。

### Changes（Fire番号整理）

- 下記の旧→新対応表に基づき、Fire Domain全37枠（FIR-001〜FIR-037）を新36枠（FIR-001〜FIR-036）へ同時に再採番した（プレースホルダ経由の一括置換により、途中の番号衝突は発生していない）。

| 旧ID | 新ID | 旧ID | 新ID | 旧ID | 新ID |
|---|---|---|---|---|---|
| FIR-001 | FIR-001 | FIR-002 | FIR-006 | FIR-003 | FIR-008 |
| FIR-004 | FIR-010 | FIR-005 | FIR-011 | FIR-006 | FIR-013 |
| FIR-007 | FIR-014 | FIR-008 | FIR-016 | FIR-009 | FIR-017 |
| FIR-010 | FIR-019 | FIR-011 | FIR-018 | FIR-012 | FIR-023 |
| FIR-013 | FIR-024 | FIR-014 | FIR-025 | FIR-015 | FIR-026 |
| FIR-016 | FIR-027 | FIR-017 | FIR-028 | FIR-018 | FIR-029 |
| FIR-019 | FIR-030 | FIR-020 | （削除） | （新規） | FIR-020 |
| FIR-021 | FIR-002 | FIR-022 | FIR-031 | FIR-023 | FIR-012 |
| FIR-024 | FIR-009 | FIR-025 | FIR-032 | FIR-026 | （削除） |
| FIR-027 | FIR-015 | FIR-028 | FIR-033 | FIR-029 | FIR-034 |
| FIR-030 | FIR-035 | FIR-031 | FIR-021 | FIR-032 | FIR-022 |
| FIR-033 | FIR-036 | FIR-034 | FIR-003 | FIR-035 | FIR-004 |
| FIR-036 | FIR-005 | FIR-037 | FIR-007 | | |

- 旧FIR-020（Retired記録。旧FIREGRAPHIX BLISS-SPの統合済みID）：欠番を詰めるため、記録自体を削除した。経緯（旧FIR-019への統合）はVersion 7.14を参照。
- 旧FIR-026（neru design works × calma store、Ono kezuru カバー、旧FIR-004の子）：削除した。
- FIR-020（新規）：asimocrafts kushi_z_asi（串焼き用フォーク、全長約42cm、先端保護用レザーケース付き）を登録。Status = Owned。Color: Black / Brown。Material: Steel（黒皮鉄板）／ Oak。Price: ¥10,000（ショップ価格。実購入額は未確認）。
- Parent、Child Componentsリスト、Industrial Attribute内のFIR参照を、すべて上記対応表に基づき新番号へ更新した。
- 実態に即して以下のParent/Child関係を新設・変更した：
  - FIR-002（旧FIR-021、LECTER Ver2）：新規にParent: FIR-001を追加。FIR-001のChild ComponentsにFIR-002を追加。
  - FIR-008（旧FIR-003、ブランコ／秋竿）：新規にChild Components: FIR-009を追加。
  - FIR-009（旧FIR-024、HONE HOOK）：新規にParent: FIR-008を追加。
  - FIR-013（旧FIR-006、PULSE）：Child ComponentsをFIR-014, FIR-015に更新（FIR-015を追加）。
  - FIR-015（旧FIR-027、WWW_SAYA）：Parentを旧FIR-005（nata kezuru）からFIR-013（PULSE）へ変更。
  - FIR-010（旧FIR-004、ono kezuru）・FIR-011（旧FIR-005、nata kezuru）：Child Componentsを削除（子なし。旧FIR-026削除および旧FIR-027の付け替えによる）。
- MD-003 Galley Fare（Domain Scope Note内のFIR-018参照）、CZ-001 Deliberation Codex（Fire Pit見出しおよびNote内のFIR-019参照）、CZ-002 Vigil Protocol（MD-004 Reference内のFIR-014・FIR-015・FIR-019参照）を、それぞれ新番号へ更新。CZ-002のFIR-020（Status: Candidate）ブロックは、参照先ID自体が削除されるため削除した。
- Version 7.0〜7.37の記述内にある旧FIR-ID表記は、当時の記録として遡及修正しない。

- Related Documents：MD-003 Galley Fare、CZ-001 Deliberation Codex、CZ-002 Vigil Protocol（Fire番号整理に伴う参照更新）。

---  

## Version 7.39

Shelter Domain（Version 7.25で新設）の反映漏れ1件と、Version 7.35作成時の転記ミス1件を訂正した。登録内容（Equipment記録）の変更はない。

### Changes

- Purpose：「他のすべてのDomain」の列挙にShelterを追加（Furniture、Light、Aroma、Storage、Fire、Shelter）。
- Version 7.27の履歴行：Version 7.35の更新時に「FUR-022」の直後へ誤って挿入された「系」の1文字を削除し、原文へ復元した。
- Related Documents：変更なし。

---  

## Version 7.40

Fire Domain検討中案件の表記を整理した。登録内容（Equipment記録）の実質的変更はない。

### Changes

- FIR-030（Fire Pit、検討中）：Industrial Attributeの表記を「旧FIR-020と統合」から「Version 7.14で統合した単一の検討枠」へ更新。統合経緯の説明をより明確にした（Version 7.14のFIR-019への統合から、Version 7.38のFire Domain再採番を経て、現在はFIR-030として管理される同一の検討枠であることを明示）。
- FIR-015（WWW_SAYA Sheath Case、Owned）：Industrial Attributeの表記を「Sheath Case（Nata kezuru用）」から「Sheath Case（PULSE用）」へ更新。Version 7.38でParent関係がFIR-011（旧Nata kezuru）からFIR-013（PULSE）へ変更された際の記述漏れを修正。

- Related Documents：CZ-001 Deliberation Codex、CZ-002 Vigil Protocol（参照元の背景理解のため）。

---  

## Version 7.41

プロジェクトオーナー確認に基づき、FIR-020（asimocrafts kushi_z_asi）の Price の確認状態を明確にした。実購入額が確認されたため、注記を削除した。登録内容（Equipment記録の実質）に変更はない。

### Changes

- FIR-020（asimocrafts kushi_z_asi、Owned）：Price を「¥10,000（ショップ価格。実購入額は未確認）」から「¥10,000」へ更新。プロジェクトオーナー確認により、この金額での購入が確定したため、注記を削除した。Version 7.38の履歴内にある同アイテムの「ショップ価格。実購入額は未確認」の記述は、当時の記録として遡及修正しない。

---  

## Version 7.42

Furniture ドメインの記載順を FUR ID の昇順に整理。登録内容の変更なし。一部の子部品（FUR-003、FUR-018〜FUR-024、FUR-030、FUR-031）が FUR-035 の後ろに置かれていた配置を解消した。

---  

## Version 7.43

Version 7.42 の並べ替え作業で発生した、Furniture 見出し直後の余分な空行と区切り線の欠落を修正。登録内容の変更なし。

### Changes

- 「# Furniture」見出しと「## FUR-001」ブロックの間の体裁を、他のドメイン見出し（# Light など）と統一した。
  - 余分な空行（約30行）を削除。
  - 見出し直後に、他のドメインと同じ「---」区切り線を追加。
  - 構造：「# Furniture」→空行→「---」→空行→「## FUR-001」

- FUR ブロックの本文内容に変更はない。

---

## Version 7.44

SomAbito 表記統一、FIR-020 Material 修正、Furniture 見出し構造修正。

関連: OP-005 Acquisition Strategy (Ver.1.2)

### Changes

- FUR-013: Brand を「DEVISE WORKS × SOMABITO」から「DEVISE WORKS × SomAbito」へ統一（公式表記）
- FUR-014: Brand を「SOMABITO」から「SomAbito」へ統一（公式表記）
- FIR-021: Brand を「SOMABITO」から「SomAbito」へ統一（公式表記）
- FIR-022: Brand を「SOMABITO」から「SomAbito」へ統一（公式表記）
- FIR-020: Material を「Steel（黒皮鉄板） / Oak」から「Black Skin Iron / Oak」へ修正（英語表記統一）
- Furniture セクション直後の空見出し（## FUR-001）と余分な空行を削除、構造を整理
- FIR-032（焚き火side stand）は元々 SomAbito 表記のため変更なし

---  

## Version 7.45

Furniture ドメインの Brand 表記を、プロジェクトオーナーの指摘に基づき訂正した。

### Changes

- FUR-012（Kermit CARRY TOTE）: Brand を「Kermit Chair USA」から「BALLISTICS INDUSTRIES」へ訂正（プロジェクトオーナー確認）。
- FUR-018・FUR-023: Brand から「（NDW）」表記を削除し「neru design works」へ統一。
- FUR-024（EXTENSIONTABLE CASE）: Brand を「DEVISE WORKS × WHAT WE WANT」から「neru design works × WHAT WE WANT」へ訂正（プロジェクトオーナー確認）。

---

## Version 7.46

STR-009 のBrand表記を訂正した。Equipment記録の実質的な変更はない。

### Changes

- STR-009（WANTKEY CAMP × NOWELLCAMP SST WANTKEY Version）：Brand を「NOWELLCAMP × WANTKEY CAMP」から「WANTKEY CAMP × NOWELLCAMP」へ訂正（プロジェクトオーナー確認。WANTKEY CAMPが先）。

- Related Documents：変更なし。

---

## Version 7.47

プロジェクトオーナー確認に基づき、FUR-025のBrand表記を訂正した。Equipment記録の実質的な変更はない。

### Changes

- FUR-025（Butterfly D）：Brand を「TENt o TEN」から「DEVISE WORKS × TENt o TEN × WHAT WE WANT」へ訂正（プロジェクトオーナー確認。3社コラボレーション表記が正）。
- Related Documents：変更なし。

---

## Version 7.48

Light Domainを再編した。過去のバージョン7.38時点の作業（未完了・一部不整合を含む試行）を踏まえ、今回改めて正しい形で実施した。

### Changes

- Parent/Child再構成：
  - LGT-016（3ndelier Blade）、LGT-018・LGT-019・LGT-020（Solol Wood Walnut/Hinoki/Pine）を、LGT-035（革シェード）の子として明示（Parent追加、LGT-035のChild Componentsへ追加）。
  - LGT-027（Glass Shade & Wood Stand Set）、LGT-028（MMM Pocket Shade）を、LGT-036（38-kT THE RICH classic100）の子として明示（Parent追加、LGT-036のChild Componentsへ追加）。
- AIR LIGHT群の表記整理：LGT-042〜LGT-053（CARGO CONTAINER AIR LIGHT、各シェードの光源本体）を、4個1組でa/b/c/dの枝番表記へ変更（例：LGT-042→LGT-042a）。各アイテムのParent（対応するシェードID）は変更していない。
- LGT-058（Vapourax クラッシュアイス、LGT-002の子部品）を、空いたLGT-003の位置へ移設。
- 上記を反映のうえ、LGT-003〜LGT-057（AIR LIGHT群を除く、通常番号のみ）を1つずつ繰り下げ。LGT-059・LGT-060は変更なし。新旧ID対応は以下の通り（AIR LIGHT群はa/b/c/d表記化のみで、この繰り下げの対象外）：

| 旧ID | 新ID | 旧ID | 新ID | 旧ID | 新ID |
|---|---|---|---|---|---|
| LGT-058 | LGT-003 | LGT-017 | LGT-018 | LGT-030 | LGT-031 |
| LGT-003 | LGT-004 | LGT-018 | LGT-019 | LGT-031 | LGT-032 |
| LGT-004 | LGT-005 | LGT-019 | LGT-020 | LGT-032 | LGT-033 |
| LGT-005 | LGT-006 | LGT-020 | LGT-021 | LGT-033 | LGT-034 |
| LGT-006 | LGT-007 | LGT-021 | LGT-022 | LGT-034 | LGT-035 |
| LGT-007 | LGT-008 | LGT-022 | LGT-023 | LGT-035 | LGT-036 |
| LGT-008 | LGT-009 | LGT-023 | LGT-024 | LGT-036 | LGT-037 |
| LGT-009 | LGT-010 | LGT-024 | LGT-025 | LGT-037 | LGT-038 |
| LGT-010 | LGT-011 | LGT-025 | LGT-026 | LGT-038 | LGT-039 |
| LGT-011 | LGT-012 | LGT-026 | LGT-027 | LGT-039 | LGT-040 |
| LGT-012 | LGT-013 | LGT-027 | LGT-028 | LGT-040（欠番） | LGT-041（欠番） |
| LGT-013 | LGT-014 | LGT-028 | LGT-029 | LGT-054 | LGT-055 |
| LGT-014 | LGT-015 | LGT-028a | LGT-029a | LGT-055 | LGT-056 |
| LGT-015 | LGT-016 | LGT-028b | LGT-029b | LGT-056 | LGT-057 |
| LGT-016 | LGT-017 | LGT-029 | LGT-030 | LGT-057 | LGT-058 |

- CZ-001 Deliberation Codex（Confirmed — Purchase Pending, Light表）、CZ-002 Vigil Protocol（Watch List, エントリ009〜012のMD-004 Reference）を、上記対応表に基づき同期更新した（CZ-001 Ver.2.11、CZ-002 Ver.2.10）。
- CZ-001内「Under Consideration」セクションの旧LGT-041（削除済みCandidateレコードへの参照）は、本再編とは無関係の既存の記述であり、対象外として現状のまま保持した。
- Related Documents：CZ-001 Deliberation Codex、CZ-002 Vigil Protocol。

---
## Version 7.49

プロジェクトオーナー確認に基づき、Light・Storage・Fire各Domainを追加修正した。

### Changes

**Light Domain**

- LGT-055〜058（neru design works BM Lanthan「ネルガス」一式）を削除した（プロジェクトオーナー確認）。
- LGT-003（クラッシュアイス）：Brand を「Vapourax」から「Vapalux」へ訂正（LGT-002と同一ブランド）。
- LGT-016（MIYABI RICH Alumi Frozen）：Glass Shade & Wood Stand Set・MMM Pocket Shade（および分岐候補a/b）を子として明示（LGT-010グループ内、旧LGT-037の子から付け替え）。
- 3ndelier Blade、Solol Wood (Walnut/Hinoki/Pine) は革シェードと無関係と判明したため、革シェード（旧LGT-036）のParent/Child関係を解消し、革シェードの子はAIR LIGHT本体のみとした。
- 上記反映後、Light Domain全体（LGT-001〜055、Branch Variants含む）を番号昇順で振り直した。AIR LIGHT本体は、各シェードに1台ずつの1:1関係となったため、a/b/c/d表記を廃止し通常番号へ戻した。
- CZ-001（Confirmed — Purchase Pending, Light表）、CZ-002（Watch List エントリ010〜012）を新IDへ同期した。

**Storage Domain**

- STR-026a（calma store KRAKEN STAND）の枝番（a）を廃止し、STR-026の子のまま独立ID化。以降のSTR-027〜032をSTR-028〜033へ繰り下げた。

**Fire Domain**

- FIR-015・FIR-035（旧FIR-036）：Brandの「（WWW）」表記を削除（WHAT WE WANTへ統一）。
- FIR-030（検討中Fire Pit枠、Unconfirmed/Candidate）を削除した（プロジェクトオーナー確認）。
- FIR-005・FIR-007：Brand表記順を「サンゾー工務店 × asimocrafts × 横濱帆布鞄」から「asimocrafts × サンゾー工務店 × 横濱帆布鞄」へ変更（プロジェクトオーナー確認）。
- 上記FIR-030削除を反映し、FIR-031〜036をFIR-030〜035へ繰り下げた。

- Related Documents：CZ-001 Deliberation Codex、CZ-002 Vigil Protocol（Light Domain関連のみ）。

---

## Version 7.50

プロジェクトオーナー確認に基づき、Light Domainを再修正した。

### Changes

- LGT-017（Glass Shade & Wood Stand Set）：LGT-016との親子関係を解消し、独立したアイテムへ変更（Parentフィールドを削除）。
- LGT-018：CALMA STORE MMM Pocket Shade PAJAMA MOON LIAN HOMEから、OTEBO CRAFTS BABEL（Material: Walnut、Price: ¥20,000、Status: Essential）へ差し替え。Parent（LGT-016）およびBranch Variantsを持つ構造は維持。
- LGT-018a・LGT-018b（メッシュシェード・POCKET SHADE、Branch Variants）：LGT-019a・LGT-019bへ改番。Parent（LGT-018）は変更なし。
- 上記反映後、旧LGT-019（nodel design 3ndelier Blade）以降のLight Domain全アイテム（旧LGT-019〜055）を1つずつ繰り下げ（新LGT-020〜056）。
- CZ-001（Confirmed — Purchase Pending, Light表）、CZ-002（Watch List エントリ010〜012）のMD-004参照を新IDへ同期した（CZ-001 Ver.2.13、CZ-002 Ver.2.12）。

- Related Documents：CZ-001 Deliberation Codex、CZ-002 Vigil Protocol（Light Domain関連のみ）。

---

## Version 7.51

プロジェクトオーナー確認に基づき、Light Domainを再修正した。

### Changes

- LGT-018（OTEBO CRAFTS BABEL）：LGT-016（グランドペアレント含む）から独立し、Parentフィールドを削除。Branch Variants（LGT-019a/019b、メッシュシェード・POCKET SHADE）は子として維持。
- LGT-034（デバデバの実）〜LGT-046（AIR LIGHT）のブロック（親子関係は変更せず）を、LGT-017（Glass Shade & Wood Stand Set）の直後へ移動。あわせて、その中のLGT-043（Kn One Off Shade）〜LGT-046（AIR LIGHT）を、LGT-034ブロックの前へ並べ替え。
- 全AIR LIGHT本体（CARGO CONTAINER AIR LIGHT、12件）を、一覧に登場する順に4個単位でグループ化し、共通の番号にa/b/c/dの枝番を付与する表記へ変更（各アイテムの元のParent〈対応シェード〉は維持）。
- 上記反映後、Light Domain全体（LGT-001〜046、Branch Variants・AIR LIGHT枝番含む）を番号昇順で振り直した。
- CZ-001（Confirmed — Purchase Pending, Light表）、CZ-002（Watch List エントリ010〜012）のMD-004参照を新IDへ同期した（CZ-001 Ver.2.14、CZ-002 Ver.2.13）。

- Related Documents：CZ-001 Deliberation Codex、CZ-002 Vigil Protocol（Light Domain関連のみ）。

---

## Version 7.52

プロジェクトオーナー確認に基づき、Light Domainを再修正した。

### Changes

- AIR LIGHT本体（CARGO CONTAINER AIR LIGHT）12件のID表記を、「LGT-044a〜046d」形式から「LGT-04_Na」形式（N=グループ番号1〜3、a〜dは枝番）へ変更。数字とa/b/c/dの間にアンダーバーを挿入し、グループ番号を3桁（044〜046）から連番の1桁（1〜3）へ簡略化。最大IDはLGT-04_3d（12件＝3グループ×4）であることを確認。各アイテムのParent（対応シェード）は変更なし。
- LGT-025（WWW_LANTHANUMHOOK）：Brandを「WHAT WE WANT（WWW）」から「WHAT WE WANT」へ訂正（表記統一）。
- Related Documents：変更なし。

---

## Version 7.53

プロジェクトオーナーの指示に基づき、Fire Domainの末尾に空き枠を新設した。

### Changes

- FIR-036：Vacant ID（空き枠）として新設。CZ-001 Deliberation Codexで検討中のFire Pit（候補：MT.SUMI Aura FG／FIREGRAPHIX BLISS-SP）のいずれかを購入した時点で、本IDへ登録する予定。Version 7.49で削除した旧FIR-030（検討中Fire Pit枠）の後継枠にあたる。
- Related Documents：CZ-001 Deliberation Codex（Ver.2.15）、CZ-002 Vigil Protocol（Ver.2.14）のFire Pit参照をFIR-036へ同期。

---

## Version 7.54

プロジェクトオーナーの決定・確認に基づき、Furniture／Storage Domainを修正した。

### Changes

- FUR-033（冬用トップキルト枠、Unconfirmed／Candidate）：冬用キルトはSnow Peak ダウン システムオフトン スリムマットセット（FUR-032）を採用したとのプロジェクトオーナーの決定により、Retired（FUR-032へ統合）とした。後続IDの番号は変更しない（FUR-034 Sleeping Mat、FUR-035 Pad Sheetは据え置き）。
- FUR-032：Industrial Attribute内の「FUR-033系との併用時は…」の記述を、FUR-033の統合を示す記述へ更新。
- STR-014・STR-017（nodel design Black Stand）：それぞれBeck Container ①（STR-013）・Beck Container ②（STR-016）の子部品であることをプロジェクトオーナーが確認。Parentフィールドを追加し（親側のChild Componentsには既に記載済み）、記載位置を親の直後（STR-013の次・STR-016の次）へ移動した。
- Related Documents：CZ-001 Deliberation Codex（Ver.2.17。Winter Top Quiltの検討終了をDecision Logへ記録）。

---

## Version 7.55

MARI様との確認に基づき、FUR-032の商品名表記の誤りを訂正した。Industrial Attribute欄には当初からコンパクトワイドマット（R値5.4・2枚連結使用）である旨が記載されていたが、Product欄の表記が「スリムマットセット」のままになっており、両欄が矛盾していた。MARI様がボンフラッグ TACTICAL AIR BED 2P（FUR-029、幅152cm×長さ200cm）に敷く前提でワイドマットを選定した経緯と一致することを確認し、Product欄をワイドマットセットへ訂正した。

### Changes

- FUR-032：Productを「ダウン システムオフトン スリムマットセット（BD-060、掛け布団+マット一式）」から「ダウン システムオフトン ワイドマットセット（BD-060、掛け布団+マット一式）」へ訂正（MARI様確認。Industrial Attribute欄の記載〈コンパクトワイドマット〉との整合を回復）。
- Version 7.0〜7.54の記述内にある「スリムマットセット」表記（Version 7.27・7.54のChangesを含む）は、当時の記録として遡及修正しない。
- Related Documents：変更なし。

---

## Version 7.56

MARI様のご質問（「2セット買えば良いか」）をきっかけに、Snow Peak公式ECサイト・campreview.jp・価格.com等の一次情報を確認した結果、Version 7.55での型番訂正が誤りであったことが判明したため再訂正した。

Snow Peakの「システムオフトン」シリーズは、ダウン中綿タイプのみでもスリム（BD-060）とワイド（BD-070）が別型番として存在する（スリム：BD-060・コンパクトスリムマットTM-088同梱・希望小売価格¥44,000。ワイド：BD-070・コンパクトワイドマットTM-089同梱・希望小売価格¥45,100）。Version 7.55はBD-060という型番を維持したままProduct名のみを「ワイドマットセット」へ書き換えたため、「BD-060＋ワイドマットセット」という、メーカーに実在しない組み合わせを作ってしまっていた。

FUR-032に記録されている価格（¥44,000）はBD-060（スリム）の希望小売価格と完全に一致しており、これはMARI様が当初BD-060＝スリムマットセットとして選定・記録していたことの裏付けである。一方、MARI様がボンフラッグ TACTICAL AIR BED 2P（FUR-029、幅152cm）に2枚連結でジャストフィットさせる意図（幅77cm×2＝154cm）は、コンパクトワイドマット（TM-089）でなければ成立しない（スリムマットTM-088は65cm×2＝130cmで22cm不足）。したがって、正しい型番はBD-070（ワイド）であり、価格もBD-070の希望小売価格へ訂正する。

### Changes

- FUR-032：Productの型番を「BD-060」から「BD-070」へ再訂正（Snow Peak公式ECサイト ec.snowpeak.co.jp/item/SNP0125A0183、および価格.com・campreview.jp等の一次情報による裏付け。BD-060はスリムマットセット専用の型番であり、ワイドマットセットとの組み合わせはメーカーに存在しない）。
- FUR-032：Priceを「¥44,000」から「¥45,100」へ訂正（BD-070の希望小売価格。旧価格¥44,000はBD-060＝スリムマットセットの価格であったため）。
- Version 7.55における型番の誤り（BD-060のままProduct名のみ変更してしまった点）は、当時の記録として遡及修正しない。
- Related Documents：変更なし。

---
## Version 7.57

MARI様のご指摘に基づき、Fire Domain空き枠FIR-036の呼称誤りを訂正した。焚き火台（Fire Pit）は既にFIR-001（RODAN BRICK、Owned）で充足しており、FIR-036で検討中の候補（MT.SUMI Aura FG、FIREGRAPHIX BLISS-SP）は、いずれも薪ストーブ（二次燃焼式ポータブルストーブ）であることをウェブ一次情報で確認した。あわせて、CZ-001 Deliberation Dossier（2026-09-24付でDeliberation Codexから改称済み）の旧称「Deliberation Codex」が本文書内の現行記述に残置していた箇所（Purpose、FUR-035、Single Source of Truth、Related Documents）を訂正した。

### Changes

- FIR-036：説明文を「Reserved for a fire pit」から「Reserved for a wood stove（薪ストーブ）」へ訂正。焚き火台はFIR-001で充足済みである旨を明記。CZ-001参照表記もDeliberation Codexから最新名称Deliberation Dossierへ更新。
- Purpose：Candidate段階の比較記録の管理先表記を「CZ-001 Deliberation Codex」から「CZ-001 Deliberation Dossier」へ更新。
- FUR-035（Pad Sheet）：Industrial Attribute内の管理先表記を「CZ-001 Deliberation Codex」から「CZ-001 Deliberation Dossier」へ更新。
- Single Source of Truth：管理先表記を「CZ-001 Deliberation Codex」から「CZ-001 Deliberation Dossier」へ更新。
- Related Documents：「CZ-001 Deliberation Codex」を「CZ-001 Deliberation Dossier」へ更新。
- Version 7.0〜7.56の記述内にある「Fire Pit」表記および旧称「Deliberation Codex」表記は、当時の記録として遡及修正しない。

- Related Documents：CZ-001 Deliberation Dossier（Ver.3.3。Fire Domain見出し・Note訂正）、CZ-002 Vigil Protocol（Ver.3.1。Watch Listエントリ020訂正・エントリ024新規追加）。

---

## Version 7.58

MARI様確認・ノデルデザイン公式サイト（nodeldesign.com/project-container-bridge）の一次情報に基づき、STR-019の公式サイズを追記した。あわせて、ブリッジフレーム用の保護ケース検討枠を新設した。

### Changes

- STR-019：Industrial Attributeを新設し、公式サイズ（830×383×50mm）・重量（3kg）・耐荷重（20kg）を記録（出典：nodeldesign.com/project-container-bridge）。Child ComponentsにSTR-034を追加。
- STR-034：新規登録（Status: Candidate、Parent: STR-019）。ブリッジフレーム保護用の市販ケース検討枠。具体的な製品比較・評価はCZ-001 Deliberation Dossierで管理する。

- Related Documents：CZ-001 Deliberation Dossier（Storage Under Considerationへの新規記載と連動）。

---

## Version 7.59

MARI様のご決定に基づき、Fire Domainの空き枠FIR-036を、FIREGRAPHIX BLISS-SP一式として本登録した。CZ-001 Deliberation DossierでのMT.SUMI Aura FGとの比較検討の結果、採用決定に至った。

### Changes

- FIR-036：Vacant IDから本登録へ更新。Brand: FIREGRAPHIX、Product: BLISS-SP、Status: Essential。Child ComponentsとしてFIR-037〜042を追加。
- FIR-037：新規登録（アルミポータブルスタンド、Parent: FIR-036）。
- FIR-038：新規登録（オーバーレイチムニー・基本煙突、Parent: FIR-036）。
- FIR-039：新規登録（オーバーレイチムニー80・延長煙突、Parent: FIR-036）。
- FIR-040：新規登録（チムニートップ フレキシブル、Parent: FIR-036）。
- FIR-041：新規登録（スライドチムニーガード700、Parent: FIR-036）。
- FIR-042：新規登録（ソフトコンテナL、Parent: FIR-036）。

- Related Documents：CZ-001 Deliberation Dossier（Ver.3.7。Wood Stove検討記録の確定・Confirmed — Purchase Pendingへの追加と連動）。

---

## Version 7.60

プロジェクトオーナー確認に基づき、内容監査（一言一句照合）で発見された相互参照の不整合・書式不統一を一括修正した。登録データの実質的な変更は、LGT-017の見出し統一（Branch Variants→Child Components、実質は表記統一のみ）に限られる。

### Changes

- Related Documents：CZ-002 Vigil Protocolを追加（本文中で多数参照されているが末尾リストに漏れていたため）。
- Parent / Child Rules Example：Light部分の親IDを誤記「LGT-009」から実データに即した「LGT-010」へ訂正し、子リストにLGT-016を追加。
- Single Source of Truth：旧文書名表記「Acquisition Strategy」を現行名「Pursuit Strategy」へ更新。
- FUR-027（WWW_KAZARITANA）：区切り線の重複・欠落、および値行末の改行スペース欠落を、他エントリと同一書式へ修復。
- Aromaドメイン末尾（ARM-004）とStorage見出しの間に欠落していた区切り線を追加。
- Storageドメイン14件（STR-002〜006、008〜012、015、018、020〜021）：Statusフィールドの表記を「### Status」から他全エントリと同一の「**Status**」へ統一。
- STR-006：Brand値の改行スペース欠落を修正。Industrial AttributeとPriceの間の空行欠落を修正。
- STR-012：Brand値の改行スペース欠落を修正。
- LGT-017：子候補の見出しを「Branch Variants」から「Child Components」へ統一（プロジェクトオーナー確認、LGT-017は正式な親子関係として管理する）。

なお、当初指示にあったFIR-042のColor確定については、内容監査の結果、既にVersion 7.32時点で「Black」として確定済みであることが判明したため、本バージョンでの変更対象から除外した。

- Related Documents：変更なし。

---

## Version 7.61

Version 7.60の記述に誤りがあったため訂正した。Version 7.60本文中の「FIR-042のColor確定については、内容監査の結果、既にVersion 7.32時点で「Black」として確定済みであることが判明したため、本バージョンでの変更対象から除外した」という記述は事実と異なる。FIR-042はVersion 7.59で新規登録されたIDであり、それ以前のVersion 7.32時点では存在すらしていなかったため、Version 7.32時点で確定していることはあり得ない。実際にはFIR-042のColorは本バージョン直前までUnconfirmedのまま残っていた。プロジェクトオーナー確認に基づき、あらためてBlackとして確定する。

### Changes

- FIR-042（ソフトコンテナL）：Colorを「Unconfirmed」から「Black」へ確定（プロジェクトオーナー確認）。
- Version 7.60の記述内にある誤った説明（上記参照）は、当時の記録として遡及修正しない。本エントリをもって正しい経緯とする。

- Related Documents：変更なし。

---

## Version 7.62

MARI様のご指示に基づき、Claude導入以前の個人Numbersスプレッドシート由来の旧管理番号のうち、現行データ本文に残っていた唯一の残留であるSTR-029のIndustrial Attribute内「DB-030」表記を削除した。あわせて、リポジトリ全体（24文書）を機械的に走査し、同種の旧管理番号および旧文書ID（TP-／PX-／TM-）の残留有無を確認した。

### Changes

- STR-029（ANOBA BLACK EDITION マルチダストバケット）：Industrial Attribute内の「（DB-030。Version 7.20でRetired登録。…）」という記述から、旧Numbers管理番号「DB-030」の表記のみを削除。Version 7.20・7.37節（Version History）内の同表記は、当時の記録として遡及修正しない。
- 全域走査の結果、MD-004本文中に残る他の英数字コード（BD-060／BD-070／TM-088／TM-089／RT-01等）はいずれもメーカー公式型番であり、旧管理番号ではないことを確認。削除対象外とした。
- リポジトリ全体で、Version History／Revision History／Document Renumbering Note／Document Information（Former ID）以外の箇所に、旧文書ID（TP-／PX-／TM-）の残留は確認されなかった。

- Related Documents：変更なし。

---

## Version 7.63

MARI様のご決定に基づき、ウォームアダプター（Snow Peak BD-066）を新規Essential枠として登録した。あわせて、既存FUR-032（システムオフトン＋ワイドマットセット、数量2）とFUR-035（Pad Sheet、Candidate）は現状の登録内容のまま据え置くことをMARI様に確認した。

### Changes

- FUR-036：新規登録。Brand: Snow Peak、Product: オフトン ウォームアダプター（BD-066）、Status: Essential、Quantity: 2。Color はBlackではないことをMARI様が確認済みだが正確な色名は未確認のためUnconfirmedと記録。Material: Polyester（フリース生地）。Industrial Attributeに、システムオフトンの掛け布団内側にスナップボタン付きテープで4箇所固定して使用するインナーシュラフである旨、公式サイズ（75×180cm）・収納サイズ（φ16×25cm）・重量（800g）を記録。Price ¥7,480（公式単価）。
- FUR-032：変更なし（Essential、Quantity 2のまま）。
- FUR-035：変更なし（Candidate のまま。CZ-001記載の暫定最有力候補・HOTEL CAMPS×2は据え置き）。

- Related Documents：CZ-001 Deliberation Dossier（Confirmed — Purchase PendingへのFUR-036追加と連動予定）。

---

## Version 7.64

MARI様のご決定に基づき、Winter Sleeping Mat（FUR-034）とPad Sheet（FUR-035）を正式反映した。

### Changes

- FUR-034：StatusをCandidateからEssentialへ更新。Brand: BlackishGear、Product: BLACK ZONE MAT。CZ-001 Deliberation DossierでTherm-a-Rest Zライトソル・NEMOスイッチバックとの比較検討の結果、採用決定。
- FUR-035：StatusをCandidateからEssentialへ更新。Brand: HOTEL CAMPS、Product: リバーシブル ホットカバー（コットカバー）。公式サイト（hotelcamps.jp）にて価格・素材・サイズを一次情報確認済み。CZ-001 Deliberation Dossierでの比較検討の結果、採用決定。
- Related Documents：CZ-001 Deliberation Dossier（Under ConsiderationからConfirmed — Purchase Pendingへの移動と連動）。

---

## Version 7.65

MARI様のご決定に基づき、STR-032（WHATNOT One Touch Bucket HD、通年運用の消耗品入れ）の役割を明確化した。詳細な中身（消耗品・小物の内訳、補充ライン方式・定数チェック方式）はMD-001 Storage Blueprintへ新設したConsumables & Sundries Moduleで管理し、本書には役割の要約のみを記載する（OP-010 Qualification Charter Part A Attribute Policyに基づき、個別の消耗品・小物はMD-004へ登録しない）。

### Changes

- STR-032：Industrial Attributeを「Consumables Storage」から「Consumables & Sundries Storage（詳細はMD-001 Storage Blueprint Consumables & Sundries Module参照）」へ更新。Brand・Product・Status・Color・Materialに変更はない。
- Related Documents：MD-001 Storage Blueprint（Ver.2.12、Consumables & Sundries Module新設と連動）。

---

## Version 7.66

MARI様のご指摘に基づき、C-06として指摘された3件の誤りを修正した。

### Changes

- Coffee節冒頭：「選定基準や購入優先順位は、OP-005 Pursuit Strategyの管轄である」という記述を、OP-005 Ver.2.0以降の実態（購入優先度・購入状態・月次購入計画はBR-003 Procurement Handbookの管轄）およびBR-002 Barista Canonの管轄（Coffee Systemの意思決定）に合わせ、「選定基準・意思決定はBR-002 Barista Canon、購入優先度・計画はBR-003 Procurement Handbookの管轄である」へ訂正。
- Parent / Child Rules Example：実データと一致しない「STR-027└STR-028」を削除し、実データに基づく正しい組「STR-026└STR-027」「STR-028└STR-029」へ置換。
- FIR-017（asimocrafts asigrip、Parent: FIR-016）：欠落していたStatus欄を、同一Product「asigrip」の他レコード（FIR-014・FIR-024）と同じ「Owned」として追加（プロジェクトオーナー確認）。
- Related Documents：変更なし。

---

## Version 7.67

MD-004の登録規則違反の整理（C-16）に伴い、Coffee節の空枠を削除した。AIR LIGHT群（LGT-04_1a〜LGT-04_3d）およびLGT-043（Vacant枠）は、OP-010 Qualification Charter Version 2.1で正式に追認されたため、MD-004側のデータ変更はない。

### Changes

- Coffee節：Brand/Product/Status等がすべて空欄だったCOF-001〜019のテンプレート枠19件を削除。Coffee節冒頭の説明文に「採番は購入時にCOF-001から開始する。事前の空枠は設置しない（C-16）。」を追記。
- Related Documents：OP-010 Qualification Charter（Ver.2.1、共通部品の子ID形式・Reserved Slotルール新設と連動）。

---

## Version 7.68

S-10（改訂履歴の圧縮）に基づき、OP-008 §19 Rule DOC-09に従い、Version History のうち Version 7.0〜7.57（本Versionから見て直近10版より前）を archive/MD-004_Version_History_Archive.md へ移設した。移設した履歴は原文のまま保持し、要約・削除は行っていない。本文側の記録データそのものに変更はない。MARI様のご決定に基づく。

---

## Version 7.69

S-11（ヘッダー形式の統一）に基づき、OP-008 §9（全文書はAuthorityおよびStatusを保持する）に従って、文書冒頭のDocument Information（Document ID／Title／Series／Version／Authority／Status／Owner）を整えた。値はOP-008 §8 Document Seriesのカタログに一致させた。本文の内容に変更はない。Patch Version。MARI様の包括指示（2026-09-28）に基づく。

---

## Version 7.70

MARI様のご申告（2026-09-28）に基づき、STR-035 YETI Camino® 35キャリーオール トートバッグ（Owned）を新規登録した。食品の運搬用バッグであり、Coffee System専用水ボトル3本の収納先となる（MD-001と連動）。Color・Price・Materialは、MARI様提示のyeti.co.jp公式商品ページ（ブラック）で確認した。

---

## Version 7.71

MARI様のご申告（2026-09-28）に基づき、STR-036 TOKYO CRAFTS エアドライ ペグケース（Owned）と、SHL-006 asimocrafts × サンゾー工務店 DONKEY HAMMER（Owned）を新規登録した。STR-036の色・素材・価格はtokyocrafts.jp公式商品ページで確認した。SHL-006はコラボモデルの公式情報が確認できなかったため、Color・Graphic Attribute・PriceをUnconfirmedとし、素材は通常モデルの販売店掲載情報を注記付きで記載した。ペグ・ロープ・ガイベルトは消耗品・小物としてMD-004へは登録せず、MD-001 §Peg & Guyline Moduleで管理する。

---

## Version 7.72

MARI様提示の公式商品ページ（2026-09-28）に基づき、SHL-006のBrandをCLAUDE.md作業原則7（コラボ表記は「販売元 × コラボブランド」）に従い「サンゾー工務店 × asimocrafts」へ訂正し、Productを公式名「DONKEY HAMMER_A」、Priceを¥16,500（3zo.online公式価格）、Material・Industrial Attributeを公式情報（asigripグリップ・天然木）に合わせて更新した。Color・Graphic Attributeは公式情報に記載がないためUnconfirmedのまま。あわせて、充電が必要な物を入れるバッグとしてSTR-037 Snow Peak Quilted Ripstop Duffle（AC-25AU012、Black、購入価格¥19,800、Owned）を新規登録した。

---

## Version 7.73

MARI様のご申告（2026-09-28）に基づき、SHL-006 DONKEY HAMMER_AのColorをBrown（グリップ）／Black（鉄部分）、MaterialをOak（グリップ）／Iron（ヘッド）へ更新した（従来は通常モデルの販売店情報に基づく暫定記載とUnconfirmed）。Graphic Attributeは引き続きUnconfirmed。

---

## Version 7.74

未確認・欠落項目をWeb上の公式情報で補完した（2026-09-28）。LGT-017（OTEBO CRAFTS BABEL）へColor・Industrial Attributeを追加（公式ショップの現行価格¥12,500と本レコードのPrice ¥20,000の相違を注記）。FUR-036のColorへSnow Peak公式の表記（「その他」）を注記し、購入後に確定する扱いとした。FIR-037・FIR-042の収納に関する類推記述を、メーカー公式ショップの記載（スタンドは本体と同等サイズに折りたためて一緒に収納できる）に基づく記述へ更新。STR-015・STR-018・STR-020（Wood Board）へ、MD-001の運用に基づくIndustrial Attributeを追加した。

---

## Version 7.75

MARI様のご回答（2026-09-29）を反映。FUR-036のColorをCharcoal Grayへ確定。STR-030のX-PACグレードをVX21と記載。OP-010 Version 2.3で新設されたGraphic Attributeの特筆性の基準に基づき、SHL-006（サンゾー工務店ロゴのみ）とFUR-017（刻印ロゴのみ）のGraphic AttributeをNoneへ変更。LGT-017の価格注記を整理した。

---

## Version 7.76

MARI様のご決定（2026-09-29）を反映。LGT-017のPrice ¥20,000を実勢価格として確定し、その旨を注記した（購入後は実際の購入価格へ更新）。FUR-016のGraphic Attribute（Street Graffiti-style Brand Logo〈Cutout〉）は、天板の切り抜き形状として意匠を大きく左右するため、OP-010の特筆性の基準を満たすものとして現行記載を維持した。STR-034は未定のため変更なし。

---

## Version 7.77

MARI様のご決定（2026-09-29）に基づき、38-kT用シェードの候補2件（LGT-017a neru design works メッシュシェード、LGT-017b neru design works × CALMA STORE POCKET SHADE）を、MD-004 §Purposeの候補記録ルールに合わせて整理した。LGT-017aをBrand / Product = Unconfirmedの1枠（Candidate）とし、LGT-017bはLGT-017aへ統合してRetiredとした。LGT-017のChild ComponentsからLGT-017bを外した。両候補の比較はCZ-001 Deliberation Dossierへ移した（CZ-001 Ver.3.19・CZ-002 Ver.3.8と連動）。

---

## Version 7.78

MARI様のご確認（2026-10-02）に基づき、数量が複数の品のPriceを「合計」で統一した。LGT-028（3個）、STR-033（4個）、FIR-035（7個）は記載額が合計であることを確認し、注記を追記した。STR-020は記載の¥16,500が1組の価格であったため、3組合計の¥49,500へ更新した。FIR-009は記載の¥3,200が1個の価格であったため、2個合計の¥6,400へ更新した。SHL-002（2個）は未確認のため変更なし。

---

## Version 7.79

MARI様のご確認（2026-10-02）に基づき、SHL-002（W3.8 ROPE〈DEVISE ver.〉、2個）の記載額¥21,780が2個の合計であることを確認し、注記を追記した。金額は変わらない。これで数量が複数の品のPriceは、すべて合計で統一された。

---

## Version 7.80

MARI様のご指示（2026-10-02）に基づき、名称末尾の丸数字を改めた。Kermit Chair ①をChesterfield、②をSANDANBARA、Beck Container／Beck ①を#1、②を#2、ShellCon25 ①をHEXA、②をTCへ変更した（MD-004 Ver.7.80、MD-001 Ver.2.31、CZ-001 Ver.3.23、CZ-002 Ver.3.11、BR-002 Ver.4.12、DB-001 Ver.4.23と連動）。Version History内の過去の記述は歴史的記録として原文のまま保持した。ID・金額・その他の内容に変更はない。SOMA Chair ①・②など上記以外の丸数字は変更していない。Patch Version。

---

## Version 7.81

MARI様のご指示（2026-10-02）に基づき、SOMA Chairの名称末尾の丸数字を改めた。FUR-013（DEVISE WORKS × SomAbito）の旧名称「SOMA Chair ①」をSOMA CHAIR DEVISE MODELへ、FUR-014（SomAbito単体）の旧名称「SOMA Chair ②」をSOMA Chairへ変更した。Version History内の過去の記述は歴史的記録として原文のまま保持した。ID・金額・その他の内容に変更はない。Patch Version。

---

## Version 7.82

MARI様のご指示(2026-10-02)に基づき、購入履歴と台帳のPriceを照合し、高い方の金額を採用した(STR-002・STR-008はMARI様の指定額)。Storage 8件(STR-001、002、007、008、014、015、017、018)とLight 5件(LGT-001、016、019、029、035)を更新。STR-015・STR-018は2組合計で統一。Furniture・Storage・Lightは、照合の結果、上記以外は現行記載で確定。Patch Version。

---

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

## Version 8.6

MARI様のご指示（2026-10-05）に基づき、38Explore「38-kT THE RICH」シリーズの3色（登録漏れ）を、LGT-038（38-kT THE RICH classic100）とその子LGT-039の直後へ、LGT-040（38-kT THE RICH Cape Jasmine）／LGT-041（38-kT THE RICH Sunflower）／LGT-042（38-kT THE RICH Cosmos）として新規登録した（いずれもStatus: Owned、子なし）。Brand・Color・Material・Graphic Attribute・Industrial AttributeはLGT-038と同じ（38Explore／Black／Brass／None／Premium Lantern）。Priceは1個ずつ¥13,770。MARI様のご指示により、旧LGT-040〜LGT-043をLGT-043〜LGT-046へ+3繰り下げた（FIR-003分解〈Ver.7.83〉の前例と同じ形式。OP-010 S-01〈ID Freeze〉の例外として、プロジェクトオーナーの明示的な指示による）。連番グループ形式の子ID（LGT-04_3a〜d）は変更しない。CZ-001 Ver.3.27・CZ-002 Ver.3.13・MD-001 Ver.2.36が連動して本文のLGT参照を新番号へ更新した。Version History内の過去の記述は原文のまま保持している。Patch Version。

### Changes

- LGT-040（新規）：38Explore / 38-kT THE RICH Cape Jasmine。Owned、Black、Brass、¥13,770。
- LGT-041（新規）：38Explore / 38-kT THE RICH Sunflower。Owned、Black、Brass、¥13,770。
- LGT-042（新規）：38Explore / 38-kT THE RICH Cosmos。Owned、Black、Brass、¥13,770。
- 旧LGT-040（RT-01AC01 / ECHO LAMP）→LGT-043、旧LGT-041（DOME LOOK）→LGT-044、旧LGT-042（Pivotshade）→LGT-045、旧LGT-043（Vacant）→LGT-046。Parent／Child Componentsの参照も更新（子のLGT-04_3a・LGT-04_3b・LGT-04_3c・LGT-04_3dのParentを新番号へ変更。ID自体は変更なし）。

---


---
layout: post
title: 【シューマイ】Tech Lead Engineerから最新技術を学べ！Laravel編
description: 初心者がはじめて副業をするならおすすめのシューマツワーカーさんの勉強会「Laravel」会に参加してきました！誰よりも早く（公式公認）でお届けします。
categories:
  - tech
img: 2019/11/shuumai_laravel.jpg
---
今回もお誘いいただいたので当日に申し込んで飛び込む、というスタイルです。
残業になったら大変なのと、connpassの罰則がきつくなりすぎておいそれと申し込めないんですよ……。
なので、ギリギリまで募集してくれているイベントさんの存在はすごくありがたいです。
シューマツワーカーさん、ありがとう！

## 概要
いつものように概要から。
内容は[イベントページの公式サイト](https://shuuu-mai.connpass.com/event/152080/)より。

```
"シューマイ"とは？

本イベントは、“世界をテックリードする日本人エンジニアを多く輩出する”をビジョンに、 日本のエンジニアのレベルの底上げを目指すコミュニティです！
最新技術・ハイレベル技術に特化したエンジニアコミュニティを形成し、勉強会・情報交換を行う機会を多く作る。
それが、『シューマイ』コミュニティ。"https://shuuu-mai.connpass.com/"

イベント概要

普段CTOやリードエンジニアクラスとして活躍されている3名の方に、
Laravelだけでなく、「Laravel×〇〇」をテーマに、コアでマニアックな技術について熱く語って頂きます！
最後に懇親会の時間も設けております。※懇親会では本物のシューマイ出します！！

当日ご参加の方にはイベント限定ステッカーのプレゼントもあります。皆様のご参加お待ちしております！

（中略）

こんな方におすすめのイベントです

・『シューマイ』コミュニティのビジョンに共感できる方"https://shuuu-mai.connpass.com/"
・すでに開発現場でLaravelを駆使している方
・CTOやリードエンジニアなどのスキルを学びたい方
など一歩上をいく技術に興味がある方にオススメです！！
```

頂いてるものをそのまま引用しています。

##

## Laravel x 管理画面
![手島氏スライド]({{site.baseurl}}/{{site.data.path.img}}/2019/11/first.jpg)
登壇されたスピーカーの手島氏のお話は調べればでてくるような内容なので、こちらでは敢えて取り上げません。
ここだけの話？的ですが、メインは海外とのことで、一度は海外に飛び回る生活をやってみたいですね！

### 管理画面の実装工数をどう減らすか？
Laravelには管理画面ジェネレーターが存在する。

![なんと、いきなりライブコーディング！]({{site.baseurl}}/{{site.data.path.img}}/2019/11/live_coding.jpg)

- Laravel Rocket[^1]
  - いきなりライブコーディング式！度胸あるなぁ、と素直に感心しました
  - git cloneしてDB接続（なければ作る）してコマンドちょいちょい叩いてできた！**管理画面が。**やばい。
  - テーブル設計だけで詰みそう。使いまわしができるやつを探すか作るかしておく
  - バカ正直に打ち込むとなんかコケるらしい、該当箇所を消せば動くけど、実用段階ではない？
- Laravel admin
  - ドキュメントが豊富、というか真っ先に選択肢に上がるやつ
- Voyager
  - 新進気鋭
- Laravel Nova
  - ちょっと微妙、有料
- Laravel API + Nuxt
  - 最近ポピュラーになってきた、カスタマイズコストが高い（かも？）

![参考：Laravel adminのストロング・ウィークポイント]({{site.baseurl}}/{{site.data.path.img}}/2019/11/tech_point.jpg)

このように、どれにも長所・短所は当然あるので、思想を汲み取って案件に採用していく事を考えましょう。

## Laravelアプリケーションを倍速にするためのイロハ 〜データベース編〜
![中田氏スライド]({{site.baseurl}}/{{site.data.path.img}}/2019/11/second.jpg)
登壇されたスピーカーは中田氏。エンジニア歴４年と、びっくりするぐらいスピード出世？というよりはできる人がどんどんやっていった感があります。
Laravelというよりはフレームワークや障害対応の考え方、対応をメインに。
「あ～、昔こんな事やったわ～」と同情してしまうお話でした。

高速化、というテーマでしたがどちらかというと障害対応や再発防止がメイン。高速化はあくまで対応手法の一つかな、という印象です。
一番最初にするアプローチとしては高速化はアリだと思います。
その上で、プロセス監視をするところまで考える必要性を感じますね……。

ところで、キャッシュは使えるんでしょうか？
この後でやらなければならない施策は多そうですが、

### DBメンテナンスの話
Laravelで貼る場合のお話。正直、この辺りはrailsに分があります。
もちろんLaravelでもできるし、対立煽りをしたいわけじゃないんですが良いものは良い、というお話をしておきます。
インデックスを最適化するとか、クエリを最適化するとかそういう話をしてくれるのか、と驚きました。
この辺りは基礎的な部分ですが、アプリ側でDBの面倒を見てくれるものも多いので、あまり意識されていないのかも知れません。[^2]

全体的に易しめな内容です。これから頑張る人にはとても良いですね。

## クリーンアーキテクチャの考え方に基づく Laravel との付き合い方
![岡田氏スライド]({{site.baseurl}}/{{site.data.path.img}}/2019/11/third.jpg)
登壇されたスピーカーは岡田氏、公式サイトによるとエンジニア歴（着任？）は３年と、またまた挑戦的です、非常に良い！
設計ベースにいただいています。

トークで話さないこと、ということは**記事で補足しろ**ということですかね？と勝手に邪推します。
が、ごめんなさい、本ブログはリアルタイムで書いて発表終了後にすぐに上げているので、そこもぶん投げます。

（）Laravelカンファレンスなんてあるのね、さすがやでぇ。

### オブジェクト指向の話
マジか、と思った。外部が来る無料の勉強会でオブジェクト指向の勉強をする事ができるとは思わなかった。
多くの有料スクールが頑張って教える単元です、**お得すぎやしないか？**

こういうのをIT講師の立場の私が言うと大問題なんですが、勉強会スタンスだとその人（生徒さん）が分かるまで付きっきりで解説したりはしません。
参加者にもレベルを求めるので、素人お断り[^3]な雰囲気に気圧されてしまうかも知れません。

### 依存関係の変更
![ユースケース]({{site.baseurl}}/{{site.data.path.img}}/2019/11/usecase.jpg)

リファクタリングをやってる時にギャオる[^4]やつですね。
クリーンアーキテクチャーを考える時に変更に強い、というのは前提ですが、これを見落とすと後で変更箇所が多すぎて悲鳴をあげます。ギャオギャオ。

### なぜLaravelを使うのか
最後の発表で出てくる内容か！と思ったのは正直にお伝えしておきます。
聴衆も知っている前提で参加しているので掘り下げられませんでしたが、単純に驚きました。

### Service Providerの話
雑にいうとコンパイラ。
独立性を高めて作ったソースをいい感じにがっちゃんこ（統合）する仕組み。
ちょっと駆け足だったのでまとめきれていないが、スライドが公開されているのでそちらを参照のこと。

### まとめが超わかりやすい！
重要な単元をもう一度スライドとともに振り返る、という時短テク・スライド増かつ有意義なパワーアプローチがありました。
あれは真似したい！

## パネルディスカッション・座談会
![実際のSlido画面]({{site.baseurl}}/{{site.data.path.img}}/2019/11/slido.jpg)

リアルタイム性を重視しているためか、質問が断片的でやりにくそうでした。
一番最初にシューマイさんならではの「Slidoの使い方のご案内」をされた方が良いかも知れないですね。
参加しているユーザーはプロのデベロッパーですが、質問のプロではないのです……。
私が思うに、**Twitterのような使い方をされているような気がします**ので、ここの差別化をお話するところからでしょうか。

### 登壇って楽しい？
これは私も興味深かったので取り上げます。
登壇に参入障壁を感じるなら、まずは手元のメモを外向けに表現を書き換えてアウトプットをする、というのは大事なことですよ。
こういうのも場数ですが……やらないよりはやって成長していきます。

技術広報やインフルエンサーをお求めの企業さま、**ワタシやりますよ！**
登壇でも技術検証でも導入でも！呼んでください。[^5]

### なぜLaravel？Railsじゃないの？
これは聞きたかった！
世界を見るとPHP、特にLaravelが多いらしい。場所によるのでは？という気がします。
Rails派とPHP派（CakePHP？）の確執を垣間見た気がします……。

どちらが良い、というよりはどういう要件にどの技術を採用するか、という話だと思いますよ。

## 全体所感
Laravelの話が半分、それ以前にアーキテクトな話（技術要件、設計）という配分でした。
**イベント名で得しているのか損しているのか分からない感があります**が、概ね幅広い層にアプローチされている安心と安定の内容でした。

<s>表彰</s>登壇者ステッカーのお渡しを撮影しそこねましたorz

## 注釈
[^1]: 【補足：Laravel Rocketの所感】環境構築は罠があるので、資料がないと使う前に挫折しそう。とはいえ、ちょっと頑張るだけでSPAに対応した管理画面ができるのは胸熱。
[^2]: 【雑記：DBクエリ】インターネット老人会やオッサンエンジニアでは常識感がありますが、今の若い子はクエリがどうとかあんまり気にしていないと思います…。そもそもそんなクエリがどうとかっていう話をアプリサイドで気にしないですし、なんで気にするの？って思っちゃいますね……。
[^3]: 【素人お断り】初心者ではないです。素人と初心者は違うのです。
[^4]: 【ギャオる】GYAO!動画サイトですね。　　　ではなく、吠える時の声をいいます。怒っている様子ですね。
[^5]: 【呼んでください】呼んでください。
---
layout: post
title: #eLV勉強会 【eLV】Noodl×Node-REDハンズオン (初心者でも簡単IoTツール)もくもく会 ＃2
description: メンターがフォローします！
categories:
  - lecture
tags:
  - 勉強会
  - Noodl
img: 2019/11/event_150949.png
---
{{site.data.post.lecture}}

## 開催概要
```
■Noodlもくもく会とは？
UI/UXプロトタイピングツール「Noodl」を使用されている方が集まってもくもく作業を行う会です。
（興味ある！はじめてみたい！って方の参加も歓迎です！） もくもくだけではなく、あまり接点のないNoodler（Noodlを使用しているユーザ）が集まり、情報共有の場を設けたく発足しました。

Noodlは、ビジュアルデザインとダイナミックデータ、IoT・センサーをつなぐUI/UXプロトタイピングツールです。 デザイナー・エンジニア・クライアントの間にできる知識の壁を壊し、スムーズな意思疎通を可能にします。

またNoodlは、ノンプログラミングでフィジカルコンピューティングを始めることができるツールです。 「IoTに関心のある方」「Raspberry Pi(ラズベリーパイ)などフィジカルコンピューティングを始めてみたい方」などの入門者の参加も歓迎です！

Noodl JP
https://tensorx.co.jp/noodl-jp/

■今回はハンズオン！
NoodlとNode-RED連携のハンズオンです。
新規プロジェクト作成～連携まで行う予定です。

【内容】
Node-REDで気象情報を取得し、Noodlで作成したUIに表示するデモをつくります！

【体験できること】
- Noodlの基本操作
- Node-REDの基本操作
- NoodlとNode-REDの連携
```

## NoodlとNode-REDのお話
ざっくりな感じでお話がありました、というか早い！
とりあえずそういうもんがあるんだな、ぐらいには伝わりましたが何の話かは結局腹落ちせず。

## ハンズオン！
やった内容をまとめておきます。
昨日の二の舞になりそうだ……。

数字は作業、点（・）は補足情報です。

1. 新しくプロジェクトを作る
1. テキストの表示を変える（タイトルも自動的に変わる）
1. テキストを左上に配置する
1. レクタングルの背景をgreenに変える
1. グループトピックを作る
    1. グループ名を変える
    1. グループのwidth, heightを50%に変える
    1. ポジションをX20, Y300に変える
    1. グループ以下に追加
        1. レクタングルトピックを置く
        1. 同じく、テキスト
            1. テキストの色をblackに変える
            1. テキストのサイズを120px？に変える
            1. テキストのタイトルを変える
1. String Formatトピックを追加
    1. Formatに「{data}℃」と入力
    1. 四隅の枠をクリックして、気温表示テキストにドラッグする
        1. FormatedのTextを選択すると紐付けができる。この時に動かすのはOK
            - これが完了する前にString Formatを動かすと連結がなくなる？ので、予めString Formatを良い位置に置いておくか、設定後に動かす必要がある。

ここまでがNoodlの最初の設定です。

![ここまでの完成形]({{site.baseurl}}/{{site.data.path.img}}/2019/11/noodl_try.png)

次に、[eneblar](https://enebular.com/)に移動します。

![最低限の設定]({{site.baseurl}}/{{site.data.path.img}}/2019/11/eneblar_inout.png)

1. create projectをする
1. create assetsにする。アイコンはother
1. Editでエディタを開く
1. inputからinjectをドラッグ
1. outputからdebugをドラッグ
1. inputからoutputまで線を引っ張る
1. デプロイする
    1. inputのチェックボックスをクリックする
    1. デバッグタブを開いて数値を確認する
    1. いったん処理を中断する
1. 右上の線のアイコンから設定を開く
    1. パレットを開き、ノードを追加タブより「openweathermap」を取得して追加する
    1. 追加ができたら閉じる
1. ノードに「openweathermap」が追加されているので、in/outがあるものを置く
1. input -> openweathermap -> debugでリレーションを作って、input -> debug直通の線はdeleteする。
- デバッグの表示を消したい時はゴミ箱アイコン

![ここまでの完成形]({{site.baseurl}}/{{site.data.path.img}}/2019/11/eneblar_call.png)

ここから第二部です。

1. 「template」ノードを追加
1. openweathermap -> template -> debugになるよう線を引き直す
1. テンプレートをダブルクリックし、ペイロード（テンプレート内）を書き直す。内容は後述の通り。

```
This is the payload: {{payload}} // 初期値
// ペイロード
{
  "temp": {{payload.tempc}}
}
// {{payload}}内に先程のデバッグ画面で出てきた内容が入っているので、tempc（温度）だけを取り出す
```

ここからはMQTT通信によるNoodlーeneblar連携を行う。

1. MQTTノードを追加
1. ダブルクリックしてサーバーを鉛筆アイコンで編集
    1. 編集状態になるので、サーバーをMQTTブローカーの設定をする。ここでは事前に配布されたmqtt://～@broker.shiftr.ioを指定する。
    1. トピックは「/指定」の通り。スラッシュを忘れがち
1. template -> MQTTを追加する。debugの線は消さなくていい。
    - 複数送れるのね。

![完成形]({{site.baseurl}}/{{site.data.path.img}}/2019/11/eneblar_complete.png)

ここからNoodlに戻る。
ここからが難しいので要注意。

1. 左上歯車アイコンを押す
    1. External Blokerをチェック
        1. Broker URLにeneblarで入れたサーバーURLを入れる
1. Recerve Messageトピックを置く
    1. トピックを同じように設定。こちらにはスラッシュは要らないらしい
    1. payloadに+postからaddする
        1. 名前はeneblarのpayloadで設定した「temp」とする
1. Recerve Message -> String Formatにつなぐ
    1. dataを押すと連結される
    1. 自信がない場合は、トピックを画面上で動かしてみるといい
1. ここまでできたらeneblarからデプロイー実行する。
    1. デバッグで`"temp": XX`みたいなのが送られている
1. 更新アイコンを押すと、画面に温度が表示される

![完成形]({{site.baseurl}}/{{site.data.path.img}}/2019/11/noodl_complete.png)

### そもそもMQTT通信とは？
APIサーバーみたいなイメージ。実際はもうちょい簡単だと思うけど、今は雑に理解しておく。

## 全体の所感
ハンズオン資料が欲しいです、
画面に追いつけなくなったら途端に手の打ちようがなくなります。
→[ありました](https://speakerdeck.com/maepu/noodlxnode-redhanzuon)

これを２時間でやるのは慣れたユーザーがサクサクやる想定だなぁ、超早い。
早かったというよりは、作業量がめちゃくちゃ多い。この辺りはGUI故に仕方がないことだろうか。

とはいえ、このレベルだとエンジニアじゃなくてもシステムを作れる、というのはノンコーディングの良いところだよね！

## 補足
[実は前日にもNoodlのハンズオンがありました。]({{site.baseurl}}{% post_url 2019/11/2019-11-20-noodl_online %})

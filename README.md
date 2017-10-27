# 10/26の社内LT用リポジトリ

## 説明
webpack + babel + jQueryでとりあえず作ってNowにデプロイするまでやるサンプル。  
目的は簡単なものを簡単に作りつつ、実務に応用可能な知識を展開したい。  
Node初心者向けに詳細ログをREADMEに追記する方針。

GitとNode6.11はインストール済みを想定している。

いろいろ書き換えて遊んでください。

## クローンしたら

#### 1. 依存するパッケージをダウンロードする
`npm install`

#### 2. buildする
`npm run build`

#### 3. サーバを起動し、ブラウザで確認する
`npm run start`

#### 4. Nowのサービスを使ってみる
```
npm install -g now
now
```
初回のみ登録が必要でメールアドレスを登録する必要がある。
nowを実行して`> Ready!`に繋がるアドレスにアクセスするとNowのサービス上にデプロイされたアプリにアクセスできる。

## ソースを書き換えたら
ビルドし直す。`npm run build`

## webpackとは
プロジェクトに必要なファイルを一つのファイルにまとめてくれるツール。
プラグインなどを利用することで、ファイルを圧縮したり、難読化したり、コンパイルしてくれたりする。
非常にとっつきにくいけど（一人でいろいろ作りたいなら）絶対必要になる。
属人化しないように気をつけよう！でもできるようになると有難がれると思うぞ！

ちなみに`Gulp`や`Grunt`といったタスクランナは最近使わないらしい。
タスクランナとはビルド時の諸々の作業を時系列的に走らせるツール。
でも最近だとビルド周りはwebpackにまかせて、時系列的に走らせたい奴は`npm scripts`を使うかんじ。
`npm scripts`とは`npm run test`とコマンドを叩いた時に`package.json`のscriptsに書かれたコマンドを叩いてくれる機能。
`npm run build`と叩くと`npm run prebuild` => `npm run build` => `npm run postbuild`の順番で実行してくれる（登録されていれば）。

## babelとは
JSのコンパイラツール。
開発者は新しい言語仕様を使って、ストレスなくコーディングして、実際に動くJSはbabelで作成する。
IEの古いバージョンに対応したい場合など別途対策は必要になる。

**確認方法**
buildディレクトリに`bundle.js`が作成されている。
ファイルを開くといろいろ書いてあるが10373行目あたりにコンパイルされたGreeterクラスが確認できる。

```js
// ES2015：class構文
var Greeter = function () {
  function Greeter(name) {
    _classCallCheck(this, Greeter);

    this.name = name;
  }

  _createClass(Greeter, [{
    key: "hello",
    value: function hello() {
      return "Hello! " + this.name + "!";
    }
  }]);

  return Greeter;
}();
```

## jQueryとは
言わずとしれたショートハンド？ライブラリ
必ずしもいらないものではないと思っているけども依存しないように現場を変えていく必要はあると思っている。


## Nowとは
[ZEIT社が提供するマイクロホスティングサービス。](https://zeit.co/now#frequently-asked-questions)  
しかし彼らの考え方として代表的なクラウドサービスは結局のところ、使用するにあたり知識や準備を必要とし、それにロックインされる問題がある。それの解決を目指し、必要知識はNode.jsのみ。  
Herokuなどと同一でよりミニマム。  
今回利用したい理由はとりあえずデプロイまで行き、自分が作ったものがどう見えるか確認してほしい。

## 以下ログ

* make folder
* npm init -y
  * 空のpackage.jsonを作るコマンドです
  * デフォルトでは公開できません。修正しましょう
* touch README.md
  * ここにログを書き出すことに決めました

### git commit -m "first commit"
___

* gitignoreを追加
  * touch .gitignore
  * `node_modules/` をかいた
* READMEに目的とか書きました
* npm install
  * npm install -D webpack babel-core babel-loader babel-preset-env
  * `-D`の意味はdevDependenciesに追加するという意味
    * 開発ツールパッケージなんかはこっちに追加するお約束がある
  * npm install -S jquery
    * `-S`の意味はdependenciesに追加するという意味
    * プロジェクトがそのパッケージに依存するときこちらに追加する
  * package-lock.jsonが追加される
    * 依存性解決を早くするためにnpm5から導入された機能

### git commit -m "gitignore追加"
### git commit -m "webpack, babel, jqueryをnpm install"
### git commit -m "説明追記、Now追記"

* src/app.jsをエントリポイントにします
  * ES2015の機能を使うためにGreeterクラスを分割しました
* index.htmlを書きます
  * 読み込むファイルはbundle.jsです
* server.jsを書きます
  * サーバアプリケーションとして動くJSです。
* package.jsonにnpm scriptsを記述します
  * buildスクリプトでbundle.jsをwebpackから生成して
  * startスクリプトで実際に動かすJSを指定します
* webpack.config.jsonを書きます
* READMEを整備しました



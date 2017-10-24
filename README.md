# 10/26の社内LT用リポジトリ

## 説明
webpack + babel + jQueryでとりあえず作ってNowにデプロイするまでやるサンプル。  
目的は簡単なものを簡単に作りつつ、実務に応用可能な知識を展開したい。  
Node初心者向けに詳細ログをREADMEに追記する方針。

GitとNode6.11以降はインストール済みを想定している。

## webpackとは

## babelとは

## jQueryとは

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
  * Q:ライセンスはどうしたらいいのでしょうか？
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
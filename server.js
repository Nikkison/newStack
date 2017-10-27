// express よく知られているサーバフレームワーク
var express = require('express');
var app = express();

// Nowで動作することを想定して環境でポートが指定されていればそちらを参照する
// ローカルで動かすならlocalhost:3000にアクセス
var port = process.env.PORT || 3000;

// リダイレクトの書き方
// 今回であればbuild/index.htmlを見に行くようにした
app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.get('/index.html', function (req, res) {
  res.sendFile('./index.html', { root: __dirname });
});

// publicルート（公開されるところを指定する）
app.use(express.static('build'));

// 実際にサーバを動かす
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`http://localhost:${port}`);
});
// ES2015新機能：ES Module
import jQuery from 'jquery';
import Greeter from './Greeter.js';

// ES2015新機能：const
const $ = jQuery;
const $yourname = $('#yourname');

// おなじみｊQuery
// ES2015新機能：allowファンクション
$yourname.keyup((e) => {
  // jQueryで値取得
  const val = $yourname[0].value;
  console.log(val);
  // ClassはNewできるよ！
  const greeter = new Greeter(val);
  // 
  $('#output').text(greeter.hello());
});

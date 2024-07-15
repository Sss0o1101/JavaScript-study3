//変数について見ていきます。

// 変数
let price;
// 定数
const rate = 1.1;

price = 150;
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);

price = 151;
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);

//変数に値を再代入するときによく使われる演算子
price = price + 1;
price += 1;
price++;


//-----------------------------------------------


//・文字列
//JavaScriptで文字列を表現するための方法について見ていきます。
console.log("it is a pen");
console.log("it's a pen");


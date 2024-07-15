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


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//・文字列1

//JavaScriptで文字列を表現するための方法について見ていきます。
console.log("it is a pen");
console.log("it's a pen");
console.log("It's \na \npen.");//改行


// My name is Taro Yamada, call me Taro!　の場合

const fname = 'Taro';
const lname = 'Yamada';

console.log('My name is ' + fname + ' ' + lname + ', call me ' + fname + '!');  //文字列の連結(でも、ごちゃごちゃしてる為、あまり使わない)
console.log(`My name is ${fname} ${lname}, call me ${fname}!`); //テンプレートリテラル(これが見やすいので、よく使う)


//・文字列2
//文字列と数値に対して+記号を使ったときの挙動について見ていきます。
const n = prompt("Any number");

console.log(Number(n) + 10);


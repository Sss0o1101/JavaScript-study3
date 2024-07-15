/*
条件分岐 ifの構文
関係演算子 ブロック
*/

 //90点以上だったらA判定だと表示
if (score >= 90) {
    console.log("A!");
}

//90点以上だったら”A”だと表示、以下であれば”Not A”と表示
const score = Number(prompt("score?"));

if (score >= 90) {
    console.log("A!");
} else {
    console.log("Not A!");
}
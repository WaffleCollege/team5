'use strict'
// Please don't delete the 'use strict' line above

//テスト関数
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.group("Result:");
      console.log("  actual:", actual);
      console.log("expected:", expected);
      console.trace();
      console.groupEnd();
    }
  }

//問題1
   /**
    * @param {Array<any>} ??? - 配列
    * @returns {boolean} 与えられた配列の要素が重複を含んでいないかを表すブーリアン
    */

   function haveMultipleElements(array) {
    let a = new Set(array);//arrayをSet型にする。setは重複する値を保持できない。よって重複があった場合長さが変わる。
    return a.size=== array.length;//arrayをset型にしたものと元の長さを比べることで重複がないかを確認できる。
  }// ここにコードを書きましょう。

   // テストを実行
  test(haveMultipleElements([1, 2, 3, 4]), true);
  test(haveMultipleElements([1, 3, 3, 4]), false);

//問題2
function gcd(a,b){
  if(b==0){
  return a;
  } else {
  return gcd(b, a%b);
  }
}
//ユークリッド互除法を活用
//最大公約数は、the greatest common divisorなので関数名をgcdにした。

//問題2　テストを実行
test(gcd(56,98),14)
test(gcd(100,200),100)
test(gcd(32,24),8)

//問題3
const hands = new Array("パー", "グー", "チョキ");
const player = "パー"

/**
    * @param {int} min - ランダムで出したい値の最小値
    * @param {int} max - ランダムで出したい値の最大値より1つ大きい値
    *
    * @returns {int}} min 以上 max 未満 の整数値を「ランダムで」出力
    */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// 1つめの引数を0, 2つ目の引数を3とすると, 0から2の整数がランダムで出力される
console.log(getRandomInt(0, 3))

// 上記のgetRandomInt関数と、配列 hands を生かしてジャンケンゲームを作成してみましょう！

function janken(player){
  const computer1 = getRandomInt(0,3);
  const computer=hands[computer1];
  console.log("コンピューターは"+computer+"を出しました。");
  if(player===computer){
    console.log("引き分けです")
}else if(player=("グー")&&computer==("チョキ")||player==("チョキ")&&computer==("パー")||player==("パー")&&computer==("グー")){console.log("あなたの勝ちです");
}else{console.log("あなたの負けです")}

}
janken("グー")

//問題4
function flatten(array){
  const lastarray = [].concat(...array);//concatは文字列や配列の結合で使用。//...はスプレット構文で0個以上の引数(関数の呼び出し)などを可能にする。
  return lastarray;
}
// ここに関数を作成しましょう。
//問題4　テストを実行
console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [1, 2, 3, 4, 5, 6]

console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]

console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
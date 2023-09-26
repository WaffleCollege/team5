'use strict'
// Please don't delete the 'use strict' line above


//上に上がるボタン
const scroll_to_top_btn = document.querySelector("#scroll-to-top-btn")

// ↓ この関数を、ボタンクリック時に実行したい
function scroll_to_top() {
    window.scroll({ top: 0, behavior: "smooth" })
}

//スクロール時のイベントを追加
window.addEventListener("scroll", scroll_event)

function scroll_event() {
    if (window.pageYOffset > 200) { /* もしページ下の方に行ったら */
        // ボタンを表示
        scroll_to_top_btn.style.opacity = "1"
    } 
    else if (window.pageYOffset < 200) { /* もしまだページ下の方ではなかったら */
        // ボタンを非表示
        scroll_to_top_btn.style.opacity = "0" 
    }
}


//スライドショー
const newImgList = [
    "PJweek.jpg",
    "PJweek2.jpg",
    "PJweek3.jpg",
];

let previousNum = -1; // 前回のランダム選択を記録する変数

function slide_time() {
    let num;
    do {
        num = Math.floor(Math.random() * newImgList.length);
    } while (num === previousNum); // 前回と同じ画像を選ばないようにする

    previousNum = num; // 現在の選択を前回の選択として記録

    const slideImg = document.getElementById("slide-show");
    slideImg.setAttribute("src", newImgList[num]);
}

// 初回の呼び出し
slide_time();

// 関数を呼び出す
setInterval(slide_time, 3000);


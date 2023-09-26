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

  // スライドショーに表示する画像のURLリスト
var imageList = ["PJweek.jpg", "PJweek2.jpg", "PJweek3.jpg"];
var currentImageIndex = 0; // 現在の画像のインデックス

// 画像要素を取得
var slideshowImage = document.getElementById("slide-show");

// 次の画像を表示する関数
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageList.length;
  var imageUrl = imageList[currentImageIndex];
  slideshowImage.src = imageUrl;
}

// 5秒ごとに次の画像を表示
setInterval(showNextImage, 3000); // 5000ミリ秒（5秒）ごとに実行











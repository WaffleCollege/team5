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












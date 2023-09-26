// DOMを使用してページ内のリンクをクリックしたときに背景画像を切り替える
document.querySelectorAll('h2 a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // リンクのhref属性を取得
        const targetSection = document.getElementById(targetId);

        // 背景画像を切り替える
        const backgroundImage = {
            "yosshi": "sweden-flag.png",
            "tsutsumi": "switzerland-flag.png",
            "mana": "switzerland-flag.png",
            "kinari": "french-flag.png",
            // 他の行先に対する背景画像も追加
        };

        // 選択された行先に対応する背景画像を設定
        targetSection.style.backgroundImage = `url(${backgroundImage[targetId]})`;

        // 他のセクションの背景画像をクリア
        document.querySelectorAll('section').forEach(section => {
            if (section.id !== targetId) {
                section.style.backgroundImage = 'none';
            }
        });

        // スクロール
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');

    // 一番上の項目を右からスライドイン
    sections[0].style.transform = 'translateX(0)';
    sections[0].style.opacity = 1;

    // 2番目の項目を左からスライドイン
    setTimeout(() => {
        sections[1].style.transform = 'translateX(0)';
        sections[1].style.opacity = 1;
    }, 500); // 0.5秒後に2番目の項目をスライドイン

    // 三番目の項目を右からスライドイン
    setTimeout(() => {
        sections[2].style.transform = 'translateX(0)';
        sections[2].style.opacity = 1;
    }, 1000); // 1秒後に3番目の項目をスライドイン

    // 4番目の項目を左からスライドイン
    setTimeout(() => {
        sections[3].style.transform = 'translateX(0)';
        sections[3].style.opacity = 1;
    }, 1500); // 1.5秒後に4番目の項目をスライドイン
});
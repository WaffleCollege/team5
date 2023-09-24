// DOMを使用してページ内のリンクをクリックしたときにスクロールする機能を追加
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


// DOMを使用してページ内のリンクをクリックしたときに背景画像を切り替える
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // 背景画像を切り替える
        const backgroundImage = {
            "yosshi": "sweden-flag.png",
            "tsutsumi": "switzerland-flag.png",
            "mana": "switzerland-flag.png",
            "kinari":"french-flag.png"
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

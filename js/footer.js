const initFooter = () => {
    resetElement("footer");
    let f = document.getElementById("footer");
    let pjP = document.createElement("p");
    pjP.appendChild(getSpan("プロジェクトセカイ関連ページ: "));
    let pjArr = [];
    pjArr.push(getFooterA("収録楽曲一覧", "https://bmyds1.github.io/pj_sekai/musics/"));
    pjArr.push(getFooterA("掛け合い一覧(作成中)", "https://bmyds1.github.io/pj_sekai/interactions/"));
    pjArr.push(getFooterA("各種企画・投稿一覧", "https://bmyds1.github.io/pj_sekai/posts/"));
    pjP.appendChild(concatElms(pjArr, getSpan(" / ")));
    f.appendChild(pjP);
    f.appendChild(getP("不備等ございましたら、お手数ですが下記連絡先のいずれかまでご連絡ください。"));
    let u = document.createElement("ul");
    u.appendChild(getLi("Mail: bmyds1[at]gmail.com"));
    u.appendChild(getLi("Twiter: @bmyds1"));
    f.appendChild(u);
}
const getFooterA = (title, link) => {
    if (link == location.href) {
        return getSpan(title);
    }
    else {
        return getA(title, link);
    }
}
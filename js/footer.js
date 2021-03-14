const initFooter = () => {
    resetElement("footer");
    let f = document.getElementById("footer");
    let fTable = document.createElement("table");
    fTable.className = "footerTable";
    let pjArr = [];
    pjArr.push(getFooterA("収録楽曲一覧", "https://bmyds1.github.io/pj_sekai/musics/"));
    pjArr.push(getFooterA("掛け合い一覧", "https://bmyds1.github.io/pj_sekai/interactions/"));
    pjArr.push(getFooterA("各種企画・投稿一覧", "https://bmyds1.github.io/pj_sekai/posts/"));
    fTable.appendChild(getFooterTr("プロセカ関連ページ", pjArr));
    let ofArr = [];
    ofArr.push(getFooterA("Webサイト", "https://pjsekai.sega.jp/"));
    ofArr.push(getFooterA("Twitter", "https://twitter.com/pj_sekai"));
    ofArr.push(getFooterA("YouTube", "https://www.youtube.com/channel/UCdMGYXL38w6htx6Yf9YJa-w"));
    fTable.appendChild(getFooterTr("公式サイト/アカウント", ofArr));
    fTable.appendChild(getFooterTr("ソースコード", [getFooterA("GitHub", "https://github.com/bmyds1/bmyds1.github.io")]));
    f.appendChild(fTable);
    f.appendChild(getP("不備等ございましたら、お手数ですが下記連絡先のいずれかまでご連絡ください。"));
    let u = document.createElement("ul");
    u.appendChild(getLi("Mail: bmyds1[at]gmail.com"));
    u.appendChild(getLi("Twiter: @bmyds1"));
    f.appendChild(u);
}
const getFooterTr = (thText, arr) => {
    let tr = document.createElement("tr");
    tr.appendChild(getTh(thText));
    let td = document.createElement("td");
    td.appendChild(concatElms(arr, getSpan(" / ")));
    tr.appendChild(td);
    return tr;
}
const getFooterA = (title, link) => {
    if (link == location.href) {
        return getSpan(title);
    }
    else {
        return getA(title, link);
    }
}
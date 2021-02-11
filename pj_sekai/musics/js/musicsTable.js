const initMusicsTable = () => {
    resetElement("table");
    let table = document.getElementById("table");
    const headTexts = ["No.", "曲名", "ボーカル", "投稿日", "収録日", "URL"];
    let trHead = document.createElement("tr");
    for (let i = 0; i < headTexts.length; ++i) {
        let thHead = getTh(headTexts[i]);
        trHead.appendChild(thHead);
    }
    table.appendChild(trHead);
    let curNo = 0;
    let newMusics = [];
    for (let m of musics) {
        newMusics.push(m);
    }
    newMusics.sort(getSortMusicFunc(document.getElementById("select_sort").value))
    for (let m of newMusics) {
        table.appendChild(m.getTr(++curNo));
    }
    console.log("created!");
}
const getSortMusicFunc = (opt) => {
    switch (opt) {
        case "implemented_asc":
            return (a, b) => {
                return a.id - b.id;
            }
        case "implemented_desc":
            return (a, b) => {
                return -(a.id - b.id);
            }
        case "posted_asc":
            return (a, b) => {
                let ta = a.date_posted.getTime();
                let tb = b.date_posted.getTime();
                if (ta == tb) {
                    return a.id - b.id;
                }
                else {
                    return ta - tb;
                }
            }
        case "posted_desc":
            return (a, b) => {
                let ta = a.date_posted.getTime();
                let tb = b.date_posted.getTime();
                if (ta == tb) {
                    return -(a.id - b.id);
                }
                else {
                    return -(ta - tb);
                }
            }
    }
}
const initMusicsTable = () => {
    resetElement("table");
    let table = document.getElementById("table");
    const headTexts = ["No.", "曲名", "作詞/作曲/編曲", "ボーカル", "投稿日", "収録日", "URL"];
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
    newMusics.sort(getSortMusicFunc(document.getElementById("select_sort").value));
    for (let m of newMusics) {
        table.appendChild(getTrFromMusic(m, ++curNo));
    }
    console.log("created!");
}
const getTrFromMusic = (m, no) => {
    let tr = document.createElement("tr");
    tr.appendChild(getTh(no));
    tr.appendChild(getTd(m.title));
    let vocalsStr = [];
    for (let v of m.vocals) {
        vocalsStr.push(getMembersFromVocal(v));
    }
    let tdCreators = getTd("");
    let flagCreators = false;
    for (let c of m.creators) {
        if (flagCreators) {
            tdCreators.appendChild(getBr());
        }
        else {
            flagCreators = true;
        }
        if (typeof creatorLinks[c.name] != "undefined") {
            tdCreators.appendChild(getAFromURL(mURL(c.name, creatorLinks[c.name])));
        }
        else {
            tdCreators.appendChild(getSpan(c.name));
        }
        tdCreators.appendChild(getSpan("(" + getCreatorRole(c) + ")"));
    }
    tr.appendChild(tdCreators);
    tr.appendChild(getTd(vocalsStr.join("\n")));
    tr.appendChild(getTd(m.date_posted.toLocaleDateString()));
    tr.appendChild(getTd(m.date_implemented.toLocaleDateString()));
    let urlArr = [];
    for (let u of m.urls) {
        urlArr.push(getAFromURL(u));
    }
    let tdUrl = getTd("");
    tdUrl.appendChild(concatElms(urlArr, getBr()));
    tr.appendChild(tdUrl);
    return tr;
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
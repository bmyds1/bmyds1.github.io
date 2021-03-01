const initOptions = () => {
    let span_showVocals = document.getElementById("span_options_showVocals");
    for (let vt in vocalTypes) {
        span_showVocals.appendChild(getCheckboxLabel("option_showVocals", vt, vocalTypes[vt].fullName, true));
    }
    let span_others = document.getElementById("span_options_others");
    span_others.appendChild(getCheckboxLabel("option_others", "showFutureMusics", "収録予定の楽曲も表示する", true));
    span_others.appendChild(getCheckboxLabel("option_others", "numberedFutureMusics", "収録予定の楽曲にも仮の番号を付ける", false));
}
const initMusicsTable = () => {
    resetElement("table");
    let table = document.getElementById("table");
    const headTexts = ["No.", "曲名", "作詞/作曲/編曲", "ボーカル", "投稿日", "収録日", "URL"];
    let options = {};
    options.showVocals = {};
    for (let vt of document.getElementById("form")["option_showVocals"]) {
        options.showVocals[vt.value] = vt.checked;
    }
    for (let oo of document.getElementById("form")["option_others"]) {
        options[oo.value] = oo.checked;
    }
    let trHead = document.createElement("tr");
    for (let i = 0; i < headTexts.length; ++i) {
        let thHead = getTh(headTexts[i]);
        trHead.appendChild(thHead);
    }
    table.appendChild(trHead);
    let curNo = 1;
    let newMusics = [];
    for (let m of musics) {
        newMusics.push(m);
    }
    newMusics.sort(getSortMusicFunc(document.getElementById("select_sort").value));
    for (let m of newMusics) {
        let tr = getTrFromMusic(m, curNo, options);
        if (tr != null) {
            table.appendChild(tr);
            curNo += 1;
        }
    }
    if (options.showFutureMusics) {
        let tr_border = document.createElement("tr");
        let td_border = getTd("収録が予定されている楽曲(ソート/フィルタ対象外)", "border");
        td_border.colSpan = headTexts.length;
        tr_border.appendChild(td_border);
        table.appendChild(tr_border);
        for (let mf of futureMusics) {
            let fNo = options.numberedFutureMusics ? mf.id : "--";
            let tr = getTrFromMusic(mf, fNo, options, true);
            if (tr != null) {
                table.appendChild(tr);
            }
        }
    }
    console.log("created!");
}
const getTrFromMusic = (m, no, options, forceDisp = false) => {
    let vocalsStr = [];
    for (let v of m.vocals) {
        if (options.showVocals[v.type]) {
            vocalsStr.push(getMembersFromVocal(v));
        }
    }
    if (vocalsStr.length <= 0) {
        if (!forceDisp) {
            return null;
        }
    }
    let tr = document.createElement("tr");
    tr.appendChild(getTh(no));
    tr.appendChild(getTd(m.title));
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
        tdCreators.appendChild(getSpan(getCreatorRole(c)));
    }
    tr.appendChild(tdCreators);
    tr.appendChild(getTd(vocalsStr.join("\n")));
    tr.appendChild(getTd(getStrFromDate(m.date_posted)));
    tr.appendChild(getTd(getStrFromDate(m.date_implemented)));
    let urlArr = [];
    for (let u of m.urls) {
        urlArr.push(getAFromURL(u));
    }
    let tdUrl = getTd("");
    tdUrl.appendChild(concatElms(urlArr, getBr()));
    tr.appendChild(tdUrl);
    return tr;
    /*
    table.appendChild(tr);
    curNo += 1;
    */
}
const getSortMusicFunc = (opt) => {
    switch (opt) {
        case "implemented_asc":
            return (a, b) => {
                return sortByImplemented(a, b, true);
            }
        case "implemented_desc":
            return (a, b) => {
                return sortByImplemented(a, b, false);
            }
        case "posted_asc":
            return (a, b) => {
                return sortByPosted(a, b, true);
            }
        case "posted_desc":
            return (a, b) => {
                return sortByPosted(a, b, false);
            }
        case "unit_asc":
            return (a, b) => {
                return sortByUnit(a, b, true);
            }
    }
}
const sortByImplemented = (a, b, isAsc) => {
    const dig = isAsc ? 1 : -1;
    return dig * (a.id - b.id);
}
const sortByPosted = (a, b, isAsc) => {
    const dig = isAsc ? 1 : -1;
    let da = a.date_posted;
    let db = b.date_posted;
    if (da == null) {
        if (db == null) {
            return sortByImplemented(a, b, isAsc);
        }
        else {
            return 1;
        }
    }
    else {
        if (db == null) {
            return -1;
        }
        else {
            let ta = da.getTime();
            let tb = db.getTime();
            if (ta == tb) {
                return sortByImplemented(a, b, isAsc);
            }
            else {
                return dig * (ta - tb);
            }
        }
    }
}
const sortByUnit = (a, b, isAsc) => {
    const dig = isAsc ? 1 : -1;
    let ua = getMainUnitFromUnits(a.units);
    let ub = getMainUnitFromUnits(b.units);
    let ia = unitIds.indexOf(ua);
    let ib = unitIds.indexOf(ub);
    if (ua == "other") {
        ia = 100;
    }
    if (ub == "other") {
        ib = 100;
    }
    if (ia == ib) {
        return sortByImplemented(a, b, isAsc);
    }
    else {
        return dig * (ia - ib);
    }
}
const initSelect = () => {
    resetElement("div_from");
    let div_from = document.getElementById("div_from");
    resetElement("div_to");
    let div_to = document.getElementById("div_to");
    for (let i in units) {
        div_from.appendChild(getCheckboxLabel("from", i, units[i].fullName, true));
        div_to.appendChild(getCheckboxLabel("to", i, units[i].fullName, true));
    }
    resetElement("div_option");
    let div_option = document.getElementById("div_option");
    div_option.appendChild(getCheckboxLabel("option", "distFromTo", "どちらから話しかけたかを区別して表を作成する", true));
    div_option.appendChild(getCheckboxLabel("option", "distMiku", "各セカイのミクを区別して表を作成する", true));
}
const initResponcesTable = () => {
    resetElement("table");
    const form = document.getElementById("form");
    let table = document.getElementById("table");
    let units_from = {};
    for (let c of form["from"]) {
        units_from[c.value] = c.checked;
    }
    let units_to = {};
    for (let c of form["to"]) {
        units_to[c.value] = c.checked;
    }
    let options = {};
    for (let c of form["option"]) {
        options[c.value] = c.checked;
    }
    let characters_from = getCharactersByUnits(units_from, options);
    let characters_to = getCharactersByUnits(units_to, options);
    let trHead = document.createElement("tr");
    let th00 = document.createElement("th");
    th00.innerText = "From ＼ To";
    trHead.appendChild(th00);
    for (let i in characters_to) {
        let thTo = document.createElement("th");
        thTo.classList.add("vertical");
        let verticalText = document.createElement("span");
        verticalText.classList.add("verticalText");
        verticalText.innerText = characters_to[i].shortName;
        thTo.style.backgroundColor = units[characters_to[i].unit].color;
        thTo.appendChild(verticalText);
        trHead.appendChild(thTo);
    }
    table.appendChild(trHead);
    for (let i in characters_from) {
        let trRow = document.createElement("tr");
        let thFrom = document.createElement("th");
        thFrom.innerText = characters_from[i].shortName;
        thFrom.style.backgroundColor = units[characters_from[i].unit].color;
        trRow.appendChild(thFrom);
        let cNumTmp = 0;
        for (let j in characters_to) {
            let tdEach = document.createElement("td");
            if (isIntersection(i, j)) {
                tdEach.classList.add("intersection");
            }
            else {
                let responceTexts = getResponceTexts(i, j, options);
                if (responceTexts != null) {
                    tdEach.innerText = "*";
                    tdEach.classList.add("hasResponce");
                    let spanResponce = document.createElement("span");
                    spanResponce.innerText = responceTexts;
                    spanResponce.classList.add("responceText");
                    if (cNumTmp < 12) {
                        spanResponce.classList.add("responceTextLeft");
                    }
                    else {
                        spanResponce.classList.add("responceTextRight");
                    }
                    tdEach.appendChild(spanResponce);
                }
                else {
                    tdEach.classList.add("noResponce");
                }
            }
            trRow.appendChild(tdEach);
            ++cNumTmp;
        }
        table.appendChild(trRow);
    }
    console.log("created!");
}
const getCharactersByUnits = (units, options) => {
    let arr = {};
    let baseArr = JSON.parse(JSON.stringify(options.distMiku ? characters_responce : characters));
    for (let i in baseArr) {
        if (units[baseArr[i].unit]) {
            arr[i] = baseArr[i];
        }
    }
    return arr;
}
const getResponceTexts = (from, to, options) => {
    let arr = [];
    for (let r of responces) {
        let rFrom = r.from;
        let rTo = r.to;
        if (!options.distMiku) {
            rFrom = convMiku(rFrom);
            rTo = convMiku(rTo);
        }
        if (rFrom == from && rTo == to) {
            arr.push(r.text);
        }
        else if (!options.distFromTo && rFrom == to && rTo == from) {
            arr.push(r.text);
        }
    }
    if (arr.length == 0) {
        return null;
    }
    return arr.join("\n---\n");
}
const isIntersection = (from, to) => {
    return (from == to) || (from.match(/^miku/) && to.match(/^miku/));
}
const convMiku = (name) => {
    if (name.match(/^miku_/)) {
        return "miku";
    }
    else {
        return name;
    }
}
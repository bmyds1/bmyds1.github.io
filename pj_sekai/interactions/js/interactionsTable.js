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
    div_option.appendChild(getCheckboxLabel("option", "distMiku", "各セカイのミクを区別して表を作成する", false));
    div_option.appendChild(getCheckboxLabel("option", "dispName", "各キャラクターの一人称も表示する", true));
    div_option.appendChild(getCheckboxLabel("option", "dispDefaultInteractions", "特殊な関係性が無い場合のセリフも表示する", true));
}
const initInteractionsTable = () => {
    resetElement("table");
    resetElement("hoverTable");
    const form = document.getElementById("form");
    let table = document.getElementById("table");
    let hoverTable = document.getElementById("hoverTable");
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
    th00.style.backgroundColor = "white";
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
    hoverTable.appendChild(trHead.cloneNode(true));
    for (let i in characters_from) {
        let trRow = document.createElement("tr");
        let hoverTrRow = document.createElement("tr");
        let thFrom = document.createElement("th");
        thFrom.innerText = characters_from[i].shortName;
        thFrom.style.backgroundColor = units[characters_from[i].unit].color;
        trRow.appendChild(thFrom);
        let hoverThFrom = thFrom.cloneNode(true);
        hoverThFrom.style.backgroundColor = "rgba(255,255,255,0)";
        hoverTrRow.appendChild(hoverThFrom);
        let cNumTmp = 0;
        for (let j in characters_to) {
            let tdEach = document.createElement("td");
            let hoverTdEach = document.createElement("td");
            hoverTdEach.className = "tdInteraction hoverTd";
            let interactionTexts = getInteractionTexts(i, j, options);
            if (interactionTexts != null) {
                tdEach.innerText = "*";
                tdEach.className = "tdInteraction hasInteraction";
                let spanInteraction = getSpan(interactionTexts);
                if (cNumTmp < 12) {
                    spanInteraction.className = "interactionText interactionTextLeft";
                }
                else {
                    spanInteraction.className = "interactionText interactionTextRight";
                }
                hoverTdEach.appendChild(spanInteraction);
            }
            else {
                tdEach.className = "tdInteraction noInteraction";
            }
            if (isIntersection(i, j)) {
                tdEach.className = "tdInteraction intersection";
            }
            trRow.appendChild(tdEach)
            hoverTrRow.appendChild(hoverTdEach);
            ++cNumTmp;
        }
        table.appendChild(trRow);
        hoverTable.appendChild(hoverTrRow);
    }
    /*
    resetElement("hoverTable");
    document.getElementById("hoverTable").appendChild(table.cloneNode(true));
    */
    console.log("created!");
}
const getCharactersByUnits = (units, options) => {
    let arr = {};
    let baseArr = JSON.parse(JSON.stringify(options.distMiku ? characters_interaction : characters));
    for (let i in baseArr) {
        if (units[baseArr[i].unit]) {
            arr[i] = baseArr[i];
        }
    }
    return arr;
}
const getInteractionTexts = (from, to, options) => {
    let arr = [];
    if (options.dispName) {
        for (let n of names) {
            let nFrom = n.from;
            let nTo = n.to;
            if (nFrom == from && nTo == to) {
                arr.push(n.text);
                break;
            }
        }
    }
    if (from == to && options.dispDefaultInteractions) {
        let defArr0 = [];
        let defArr1 = [];
        for (let r of interactions) {
            let rFrom = options.distMiku ? r.from : r.fromC;
            let rTo = options.distMiku ? r.to : r.toC;
            if (rFrom == from && rTo == null) {
                defArr0.push(r.text);
            }
            if (rFrom == null && rTo == to) {
                defArr1.push(r.text);
            }
        }
        if (defArr0.length > 0) {
            arr.push("デフォルト(From)\n" + defArr0.join("\n"));
        }
        if (defArr1.length > 0) {
            arr.push("デフォルト(To)\n" + defArr1.join("\n"));
        }
    }
    else {
        for (let r of interactions) {
            let rFrom = options.distMiku ? r.from : r.fromC;
            let rTo = options.distMiku ? r.to : r.toC;
            if (rFrom == from && rTo == to) {
                arr.push(r.text);
            }
            else if (!options.distFromTo && rFrom == to && rTo == from) {
                arr.push(r.text);
            }
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
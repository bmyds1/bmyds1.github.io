const initSelect = () => {
    resetElement("select_from");
    resetElement("select_to");
    let select_from = document.getElementById("select_from");
    let select_to = document.getElementById("select_to");
    let option_all = document.createElement("option");
    option_all.value = "all";
    option_all.innerText = "すべて";
    select_from.appendChild(option_all);
    select_to.appendChild(option_all.cloneNode(true));
    for (let i in units) {
        let option_unit = document.createElement("option");
        option_unit.value = i;
        option_unit.innerText = units[i].fullName;
        select_from.appendChild(option_unit);
        select_to.appendChild(option_unit.cloneNode(true));
    }
}
const initResponcesTable = () => {
    resetElement("table");
    let table = document.getElementById("table");
    const unit_from = document.getElementById("select_from").value;
    const unit_to = document.getElementById("select_to").value;
    let characters_from = getCharactersByUnit(unit_from);
    let characters_to = getCharactersByUnit(unit_to);
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
    const cNum = Object.keys(characters_to).length;
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
                let responceTexts = getResponceTexts(i, j);
                if (responceTexts != null) {
                    tdEach.innerText = "*";
                    tdEach.classList.add("hasResponce");
                    let spanResponce = document.createElement("span");
                    spanResponce.innerText = responceTexts;
                    spanResponce.classList.add("responceText");
                    if (cNumTmp < cNum / 2) {
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
const getResponceTexts = (from, to) => {
    let arr = [];
    for (let r of responces) {
        if (r.from == from && r.to == to) {
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
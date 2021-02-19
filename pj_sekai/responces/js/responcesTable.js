const initSelect = () => {
    resetElement("div_from");
    let div_from = document.getElementById("div_from");
    resetElement("div_to");
    let div_to = document.getElementById("div_to");
    for (let i in units) {
        let label_from = document.createElement("label");
        let checkbox_from = document.createElement("input");
        checkbox_from.type = "checkbox";
        checkbox_from.name = "from";
        checkbox_from.id = "from_" + i;
        checkbox_from.value = i;
        checkbox_from.checked = true;
        label_from.appendChild(checkbox_from);
        let spanText_from = document.createElement("span");
        spanText_from.innerText = units[i].fullName;
        spanText_from.style.userSelect = "none";
        label_from.appendChild(spanText_from);
        div_from.appendChild(label_from);
        let label_to = document.createElement("label");
        let checkbox_to = checkbox_from.cloneNode(true);
        checkbox_to.name = "to";
        checkbox_to.id = "to_" + i;
        label_to.appendChild(checkbox_to);
        label_to.appendChild(spanText_from.cloneNode(true));
        div_to.appendChild(label_to);
    }
}
const initResponcesTable = () => {
    resetElement("table");
    let table = document.getElementById("table");
    let units_from = {};
    for (let c of document.getElementById("form").from) {
        units_from[c.value] = c.checked;
    }
    let units_to = {};
    for (let c of document.getElementById("form").to) {
        units_to[c.value] = c.checked;
    }
    let characters_from = getCharactersByUnits(units_from);
    let characters_to = getCharactersByUnits(units_to);
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
                let responceTexts = getResponceTexts(i, j);
                if (responceTexts != null) {
                    tdEach.innerText = "*";
                    tdEach.classList.add("hasResponce");
                    let spanResponce = document.createElement("span");
                    spanResponce.innerText = responceTexts;
                    spanResponce.classList.add("responceText");
                    if (cNumTmp < 18) {
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
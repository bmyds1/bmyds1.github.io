const resetElement = (id) => {
    let d = document.getElementById(id);
    let newD = d.cloneNode(false);
    d.parentNode.replaceChild(newD, d);
    d.id = id;
}
const getTd = (text, className = null) => {
    let td = document.createElement("td");
    td.innerText = text;
    if (className != null) {
        td.className = className;
    }
    return td;
}
const getTh = (text, className = null) => {
    let th = document.createElement("th");
    th.innerText = text;
    if (className != null) {
        th.className = className;
    }
    return th;
}
const getCharactersByUnit = (unit) => {
    if (unit == "all") {
        return characters;
    }
    let arr = {};
    for (let i in characters) {
        if (characters[i].unit == unit) {
            arr[i] = characters[i];
        }
    }
    return arr;
}
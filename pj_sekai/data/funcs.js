const resetElement = (id) => {
    let d = document.getElementById(id);
    let newD = d.cloneNode(false);
    d.parentNode.replaceChild(newD, d);
    d.id = id;
}
const getTd = (text, className = null) => {
    return getElm("td", text, className);
}
const getTh = (text, className = null) => {
    return getElm("th", text, className);
}
const getSpan = (text, className = null) => {
    return getElm("span", text, className);
}
const getBr = () => {
    return document.createElement("br");
}
const getElm = (elm, text, className = null) => {
    let d = document.createElement(elm);
    d.innerText = text;
    if (className != null) {
        d.className = className;
    }
    return d;
}
const concatElms = (elms, joint) => {
    let span = getSpan("");
    let flag = false;
    for (let e of elms) {
        if (flag) {
            span.appendChild(joint.cloneNode(true));
        }
        else {
            flag = true;
        }
        span.appendChild(e);
    }
    return span;
}
const getCharactersByUnits = (units) => {
    let arr = {};
    for (let i in characters) {
        if (units[characters[i].unit]) {
            arr[i] = characters[i];
        }
    }
    return arr;
}
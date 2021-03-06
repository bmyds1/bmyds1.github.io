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
const getP = (text, className = null) => {
    return getElm("p", text, className);
}
const getLi = (text, className = null) => {
    return getElm("li", text, className);
}
const getElm = (elm, text, className = null) => {
    let d = document.createElement(elm);
    d.innerText = text;
    if (className != null) {
        d.className = className;
    }
    return d;
}
const getBr = () => {
    return document.createElement("br");
}
const getImg = (link, className = null) => {
    let img = document.createElement("img");
    img.src = link;
    if (className != null) {
        img.className = className;
    }
    return img;
}
const getA = (text, link, className = null) => {
    let a = getElm("a", text, className);
    a.href = link;
    a.target = "_blank";
    return a;
}
const getDomain = (link) => {
    return link.replace(/^https*:\/\//, "").split("/")[0];
}
const getCheckboxLabel = (name, value, text, isChecked = false) => {
    let label = document.createElement("label");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.value = value;
    checkbox.checked = isChecked;
    label.appendChild(checkbox);
    let spanText = document.createElement("span");
    spanText.innerText = text;
    label.appendChild(spanText);
    label.className = "unselectable";
    return label;
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

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
    spanText.style.userSelect = "none";
    label.appendChild(spanText);
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
const initFooter = () => {
    resetElement("footer");
    let f = document.getElementById("footer");
    f.appendChild(getP("不備等ございましたら、お手数ですが下記連絡先のいずれかまでご連絡ください。"));
    let u = document.createElement("ul");
    u.appendChild(getLi("Mail: bmyds1[at]gmail.com"));
    u.appendChild(getLi("Twiter: @bmyds1"));
    f.appendChild(u);
}
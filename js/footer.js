const initFooter = () => {
    resetElement("footer");
    let f = document.getElementById("footer");
    f.appendChild(getP("不備等ございましたら、お手数ですが下記連絡先のいずれかまでご連絡ください。"));
    let u = document.createElement("ul");
    u.appendChild(getLi("Mail: bmyds1[at]gmail.com"));
    u.appendChild(getLi("Twiter: @bmyds1"));
    f.appendChild(u);
}
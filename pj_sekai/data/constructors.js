const Unit = (fullName, shortName, color) => {
    return {
        fullName, shortName, color
    };
};
const Character = (fullName, shortName, unit) => {
    return {
        fullName, shortName, unit
    };
};
const Responce = (from, to, fromStr, toStr, option = null) => {
    return {
        from, to, fromStr, toStr, option,
        getText: () => {
            let strArr = [];
            strArr.push(characters[from].shortName + "「" + fromStr + "」");
            strArr.push(characters[to].shortName + "「" + toStr + "」");
            if (option != null) {
                strArr.push("※" + option);
            }
            return strArr.join("\n");
        }
    };
};
const Music = (id, title, vocals, date_posted, date_implemented, urls) => {
    return {
        id, title, vocals, date_posted, date_implemented, urls,
        getTr: (no) => {
            let tr = document.createElement("tr");
            tr.appendChild(getTh(no));
            tr.appendChild(getTd(title));
            let vocalsStr = [];
            for (let v of vocals) {
                vocalsStr.push(v.getMembersStr());
            }
            tr.appendChild(getTd(vocalsStr.join("\n")));
            tr.appendChild(getTd(date_posted.toLocaleDateString()));
            tr.appendChild(getTd(date_implemented.toLocaleDateString()));
            let tdUrl = document.createElement("td");
            let flagUrl = false;
            for (let u of urls) {
                if (flagUrl) {
                    let brUrl = document.createElement("br");
                    tdUrl.appendChild(brUrl);
                }
                else {
                    flagUrl = true;
                }
                tdUrl.appendChild(u.getA());
            }
            tr.appendChild(tdUrl);
            return tr;
        }
    };
};
const Vocal = (type, members) => {
    return {
        type, members,
        getMembersStr: () => {
            let header;
            switch (type) {
                case "virtual":
                    header = "(V)";
                    break;
                case "sekai":
                    header = "(S)";
                    break;
                case "another":
                    header = "(A)";
                    break;
            }
            let names = [];
            for (let m of members) {
                if (typeof characters[m] != "undefined") {
                    names.push(characters[m].fullName);
                }
                else {
                    names.push(characters_other[m].fullName);
                }
            }
            return header + names.join("、");
        }
    };
};
const mDate = (y, m, d) => {
    return new Date(y, m - 1, d);
}
const mURL = (title, link) => {
    return {
        title, link,
        getA: () => {
            let span = document.createElement("span");
            let a = document.createElement("a");
            a.innerText = title;
            a.href = link;
            a.target = "_blank";
            span.appendChild(a);
            let img = document.createElement("img");
            let domain = link.replace(/^https*:\/\//, "").split("/")[0];
            img.src = "https://www.google.com/s2/favicons?domain=" + domain;
            span.appendChild(img);
            return span;
        }
    }
}
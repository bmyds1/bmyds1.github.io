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
const Responce = (from, to, fromStr, toStr) => {
    return {
        from, to, fromStr, toStr,
        text: characters[from].shortName + "「" + fromStr + "」\n" + characters[to].shortName + "「" + toStr + "」"
    };
};
const Music = (id, title, creators, vocals, date_posted, date_implemented, urls) => {
    return {
        id, title, creators, vocals, date_posted, date_implemented, urls,
    };
};
const Vocal = (type, members) => {
    return {
        type, members
    };
};
const getMembersFromVocal = (v) => {
    let header;
    switch (v.type) {
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
    for (let m of v.members) {
        if (typeof characters[m] != "undefined") {
            names.push(characters[m].fullName);
        }
        else {
            names.push(characters_other[m].fullName);
        }
    }
    return header + names.join("、");
}
const mDate = (y, m, d) => {
    return new Date(y, m - 1, d);
}
const mURL = (title, link) => {
    return {
        title, link
    }
};
const getAFromURL = (u) => {
    let span = document.createElement("span");
    let a = document.createElement("a");
    a.innerText = u.title;
    a.href = u.link;
    a.target = "_blank";
    span.appendChild(a);
    let img = document.createElement("img");
    let domain = u.link.replace(/^https*:\/\//, "").split("/")[0];
    img.src = "https://www.google.com/s2/favicons?domain=" + domain;
    span.appendChild(img);
    return span;
}
const Creator = (name, part) => {
    return {
        name,
        isLyricist: part[0] == "t",
        isComposer: part[1] == "t",
        isArranger: part[2] == "t",
    };
};
const getCreatorRole = (c) => {
    let arr = [];
    if (c.isLyricist) {
        arr.push("作詞");
    }
    if (c.isComposer) {
        arr.push("作曲");
    }
    if (c.isArranger) {
        arr.push("編曲");
    }
    return arr.join(", ");
}
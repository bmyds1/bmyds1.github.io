const initPostLen = 5;
const setPosts = () => {
    setPostSpan("leo_everyday", leoEverydayList, "twitterLeo");
    setPostSpan("more_voice", moreVoiceList, "youtube");
    setPostSpan("wonder_channel", wonderChannelList, "youtube");
    setPostSpan("night_radio", nightRadioList, "youtube");
    setPostSpan("after_talk", afterTalkList, "youtube");
    setPostSpan("story_theater", storyTheaterList, "youtube");
    setPostSpan("four_frame", fourFrameList, "twitter4Frame");
    setPostSpan("rage", rageList, "youtube");
    setPostSpan("birthday_img", birthdayImgList, "twitter");
    document.getElementById("span_countdown_img").appendChild(getAFromURL(mURL("公式モーメント", "https://twitter.com/i/events/1297344743932747776")));
    setPostSpan("anniversary_img", anniversaryImgList, "twitter");
    /*
    let script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);
    */
};
const setPostSpan = (id, list, className) => {
    let pSpan = document.getElementById("span_" + id);
    for (let l of list.slice(0, Math.min(list.length, initPostLen))) {
        pSpan.appendChild(getSpanFromThumbnail(l, className));
    }
    if (list.length > initPostLen) {
        let rSpan = document.createElement("span");
        rSpan.className = "showRemainBlock";
        rSpan.id = getShowRemainId(id);
        rSpan.innerText = "残り" + (list.length - initPostLen) + "件を表示する";
        rSpan.onclick = function () {
            setRemainPostSpan(id, list, className);
        };
        pSpan.appendChild(rSpan);
    }
    pSpan.appendChild(getClearDiv(id));
};
const setRemainPostSpan = (id, list, className) => {
    let pSpan = document.getElementById("span_" + id);
    let clearDiv = document.getElementById(getClearDivId(id));
    //pSpan.removeChild(document.getElementById(id + "_showRemain"));
    //pSpan.removeChild(document.getElementById(id + "_clear"));
    for (let l of list.slice(initPostLen)) {
        pSpan.insertBefore(getSpanFromThumbnail(l, className), clearDiv);
    }
    document.getElementById(getShowRemainId(id)).style.display = "none";
}
const getSpanFromThumbnail = (t, className) => {
    let span = document.createElement("span");
    span.className = "thumbBlock";
    let b = document.createElement("b");
    b.innerText = t.title;
    span.appendChild(b);
    span.appendChild(getBr());
    let src = "";
    switch (getDomain(t.link)) {
        case "twitter.com":
            src = t.src;
            break;
        /*
        let spanTweet = document.createElement("span");
        spanTweet.style.maxWidth = "300px";
        let block = document.createElement("blockquote");
        block.className = "twitter-tweet";
        let aTweet = document.createElement("a");
        aTweet.href = t.link;
        aTweet.dataset.width = "200";
        aTweet.innerText = "(Twitter)";
        block.appendChild(aTweet);
        spanTweet.appendChild(block);
        span.appendChild(spanTweet);
        */
        case "www.youtube.com":
            let vId = t.link.split("?")[1].split("=")[1];
            src = "https://img.youtube.com/vi/" + vId + "/sddefault.jpg";
            break;
        default:
            break;
    }
    let a = document.createElement("a");
    a.href = t.link;
    a.target = "_blank";
    a.appendChild(getImg(src, className));
    span.appendChild(a);
    return span;
}
const getClearDiv = (id = null) => {
    let div = document.createElement("div");
    div.className = "clear";
    if (id != null) {
        div.id = getClearDivId(id);
    }
    return div;
}
const getShowRemainId = (id) => {
    return id + "_showRemain";
}
const getClearDivId = (id) => {
    return id + "_clear";
}

const setCorners = () => {
    setCornerSpan("span_leo_everyday", leoEverydayList, "tweet-leo");
    setCornerSpan("span_more_voice", moreVoiceList, "youtube");
    setCornerSpan("span_wonder_channel", wonderChannelList, "youtube");
    setCornerSpan("span_night_radio", nightRadioList, "youtube");
    setCornerSpan("span_rage", rageList, "youtube");
    /*
    let script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);
    */
};
const setCornerSpan = (id, list, className) => {
    let cSpan = document.getElementById(id);
    for (let l of list) {
        cSpan.appendChild(getSpanFromThumbnail(l, className));
    }
    cSpan.appendChild(getClearDiv());
};
const getSpanFromThumbnail = (t, className) => {
    let span = document.createElement("span");
    span.className = "thumbBlock";
    let b = document.createElement("b");
    b.innerText = t.title;
    span.appendChild(b);
    span.appendChild(getBr());
    let href = "";
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
const getClearDiv = () => {
    let div = document.createElement("div");
    div.className = "clear";
    return div;
}
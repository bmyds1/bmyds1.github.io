window.addEventListener("load", () => {
    try {
        let d = new Date(document.lastModified);
        let ds = d.toLocaleDateString();
        let str = " (" + ds + "更新)";
        document.getElementById("lastModified").innerText = str;
        document.title += str;
    } catch (e) {
        console.log(e);
    }
    initOptions();
    initMusicsTable();
    document.getElementById("form").addEventListener("change", initMusicsTable);
});
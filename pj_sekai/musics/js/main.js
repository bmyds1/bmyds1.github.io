window.addEventListener("load", () => {
    document.getElementById("h1").innerText = document.title;
    initOptions();
    initMusicsTable();
    document.getElementById("form").addEventListener("change", initMusicsTable);
});
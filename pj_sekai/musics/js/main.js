window.addEventListener("load", () => {
    document.getElementById("h1").innerText = document.title;
    initMusicsTable();
    document.getElementById("form").addEventListener("change", initMusicsTable);
});
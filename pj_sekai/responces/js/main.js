window.addEventListener("load", () => {
    document.getElementById("h1").innerText = document.title;
    initSelect();
    initResponcesTable();
    initFooter();
    document.getElementById("form").addEventListener("change", initResponcesTable);
});
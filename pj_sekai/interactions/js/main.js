window.addEventListener("load", () => {
    document.getElementById("h1").innerText = document.title;
    initSelect();
    initInteractionsTable();
    initFooter();
    document.getElementById("form").addEventListener("change", initInteractionsTable);
});
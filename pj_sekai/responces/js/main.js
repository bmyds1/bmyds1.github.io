window.addEventListener("load", () => {
    initSelect();
    initResponcesTable();
    document.getElementById("form").addEventListener("change", initResponcesTable);
});
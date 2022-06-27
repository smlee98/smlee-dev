export const searchHighlight = () => {
    const searchBar = document.getElementById("searchBar");
    const btnClear = document.getElementById("searchClear");

    const searchList = [];
    document.querySelectorAll("#searchList .list-group-item").forEach((x) => {
        const pair = { dom: "", text: "" };
        pair.dom = x;
        pair.text = x.innerHTML;
        searchList.push(pair);
    });

    const highlighter = () => {
        const searchValue = searchBar.value;
        searchList.forEach((element) => {
            const regex = new RegExp(searchValue, "g");
            element.dom.innerHTML = element.text.replace(
                regex,
                `<span class="text-kyobo-blue">${searchValue}</span>`
            );
        });
    };

    searchBar.addEventListener("keyup", highlighter);
    btnClear.addEventListener("click", () => {
        btnClear.parentNode.querySelector("input").value = "";
        highlighter();
    });
};

import Choices from "choices.js";

export const selectItems = () => {
    const searchSelectList = document.querySelectorAll(
        ".js-choice[data-search='on']"
    );
    searchSelectList.forEach((el) => {
        const choices = new Choices(el, {
            noResultsText: "검색결과 없음",
            itemSelectText: "선택",
            searchEnabled: true,
        });
        return choices;
    });

    const noSearchSelectList = document.querySelectorAll(
        ".js-choice[data-search='off']"
    );
    noSearchSelectList.forEach((el) => {
        const choices = new Choices(el, {
            noResultsText: "검색결과 없음",
            itemSelectText: "선택",
            searchEnabled: false,
        });
        return choices;
    });
};

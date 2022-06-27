export const editorController = () => {
    window.ClassicEditor.create(document.querySelector("#editor"), {
        language: "ko",
    }).catch((error) => {
        console.error(error);
    });
};

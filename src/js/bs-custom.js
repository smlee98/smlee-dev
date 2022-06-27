export const modalController = () => {
    const noticeNewModal = new window.bootstrap.Modal("#noticeNewModal", {
        keyboard: false,
        backdrop: "static",
    });

    return noticeNewModal;
};

export const tooltipController = () => {
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    );

    [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );
};

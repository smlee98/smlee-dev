const navItem = [].slice.call(
    document.querySelectorAll(
        `#topnav-main .nav-link[data-bs-toggle='collapse']`
    )
);

export const navbarEventBinder = () => {
    navItem.forEach((el) => {
        el.addEventListener("click", navbarToggle);
    });
};

const navbarToggle = (e) => {
    const hideFunc = (el) => {
        const collapseEl = new window.bootstrap.Collapse(el, {
            toggle: false,
        });
        collapseEl.hide();
    };

    navItem
        .filter((x) => x !== e.target)
        .map((el) => {
            const targetId = el.getAttribute("data-bs-target");
            const targetItem = document.querySelector(targetId);
            return hideFunc(targetItem);
        });
};

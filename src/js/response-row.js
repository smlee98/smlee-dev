const PARENT_CLASS = ".response-row-list";
const CHILD_CLASS = ".response-row";
const REMOVE_BUTTON_CLASS = ".row-remove-button";
const ADD_BUTTON_CLASS = ".row-add-button";
const IDX_INPUT_CLASS = ".idx-input";
const CONTROL_TYPE = "input, select";
const LABEL_TYPE = "label";
const EVENT_CLASS = "focus";
const DROPBOX_ID = "dropbox";
const DROPBOX_INFO_ID = "dropboxInfo";

const responseRowController = () => {
    const elementLists = document.querySelectorAll(PARENT_CLASS);
    for (const elementList of elementLists) {
        if (!elementList.classList.contains("response-row-style-only")) {
            const firstElement = elementList.querySelector(
                ".response-row:first-child"
            );
            const template = firstElement.cloneNode(true);
            const templateControls = template.querySelectorAll(CONTROL_TYPE);
            const templateLabels = template.querySelectorAll(LABEL_TYPE);
            const dropbox = document.getElementById(DROPBOX_ID);
            const totalLabels = document.getElementById(DROPBOX_INFO_ID);

            const checkChange = (e) => {
                const total = {
                    size: 0,
                    count: 0,
                };
                let fileSize = "0B";

                const inputList =
                    elementList.querySelectorAll(".input-response");

                Array.from(inputList).forEach((el) => {
                    if (el.value.length) {
                        const fileSizeByte = el.files[0].size;
                        total.size += fileSizeByte;

                        if (total.size < 1024) {
                            fileSize = total.size + "B";
                        } else if (total.size < 1048576) {
                            fileSize = (total.size / 1024).toFixed(2) + "KB";
                        } else {
                            fileSize =
                                (total.size / 1024 / 1024).toFixed(2) + "MB";
                        }
                        total.count++;
                    }
                });
                totalLabels.innerHTML = `${fileSize} / ${total.count}개`;
            };

            if (dropbox) {
                const templateInput =
                    firstElement.querySelector(".input-response");
                templateInput.addEventListener("change", checkChange);
            }

            // set index & append

            const addRow = () => {
                const newRow = template.cloneNode(true);
                const newRemoveButton =
                    newRow.querySelector(REMOVE_BUTTON_CLASS);
                newRemoveButton.addEventListener("click", removeRow);
                elementList.appendChild(newRow);

                if (dropbox) {
                    const newInput = newRow.querySelector(".input-response");
                    newInput.addEventListener("change", checkChange);
                }

                setIdx();
            };

            const removeRow = (e) => {
                const currentRow = e.target.parentNode;
                elementList.removeChild(currentRow);
                if (dropbox) {
                    checkChange();
                }
                setIdx();
            };

            const setIdx = () => {
                const elements = elementList.querySelectorAll(CHILD_CLASS);
                if (elements.length > 1) {
                    elementList.classList.remove("single");
                } else {
                    elementList.classList.add("single");
                }
                let row = 1;
                for (const element of elements) {
                    const enableEvent = () =>
                        element.classList.add(EVENT_CLASS);
                    const disableEvent = () =>
                        element.classList.remove(EVENT_CLASS);

                    element.addEventListener("mouseenter", enableEvent);
                    element.addEventListener("mouseleave", disableEvent);
                    let iteration;
                    const labels = element.querySelectorAll("label");

                    iteration = 0;
                    for (const label of labels) {
                        label.setAttribute(
                            "for",
                            `${templateLabels[iteration++].getAttribute(
                                "for"
                            )}-${row}`
                        );
                    }

                    iteration = 0;
                    const controls = element.querySelectorAll(CONTROL_TYPE);
                    for (const control of controls) {
                        control.id = `${templateControls[iteration].id}-${row}`;
                        control.name = `${
                            templateControls[iteration++].name
                        }-${row}`;
                    }

                    const idx = element.querySelector(IDX_INPUT_CLASS);
                    idx.value = row++;
                }
            };

            const addButton =
                elementList.parentNode.parentNode.querySelector(
                    ADD_BUTTON_CLASS
                );
            const removeButton = elementList.querySelector(REMOVE_BUTTON_CLASS);
            addButton.addEventListener("click", addRow);
            removeButton.addEventListener("click", removeRow);
            setIdx();
        }
    }
};

export default responseRowController;

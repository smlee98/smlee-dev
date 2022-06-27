const dtOption = {
    language: "ko",
    todayhighlight: true,
    format: "yyyy년 mm월 dd일",
    buttonClass: "btn",
    autohide: true,
    pickLevel: 0,
};

export const timepickerController = () => {
    // const hourDropDown = document.getElementById("hourPicker");
    const hourDropDown = document.querySelectorAll('[name="hourPicker"]');
    hourDropDown.forEach((el) => {
        const maxHour = 24;
        let minHour = 1;

        while (maxHour >= minHour) {
            const hourOption = document.createElement("option");
            hourOption.text = String(minHour).padStart(2, "0");
            hourOption.value = String(minHour).padStart(2, "0");
            el.add(hourOption);
            minHour += 1;
        }
    });

    // const minuteDropDown = document.getElementById("minutePicker");
    const minuteDropDown = document.querySelectorAll('[name="minutePicker"]');
    minuteDropDown.forEach((el) => {
        const maxMinute = 59;
        let minMinute = 0;

        while (maxMinute >= minMinute) {
            const minuteOption = document.createElement("option");
            minuteOption.text = String(minMinute).padStart(2, "0");
            minuteOption.value = String(minMinute).padStart(2, "0");
            el.add(minuteOption);
            minMinute += 1;
        }
    });
};

export const datepickerController = () => {
    const targetRange = document.getElementsByName("daterange");
    const radioTarget = document.getElementsByName("datePickerRadio");

    targetRange.forEach((el) => {
        const targetStart = document.getElementsByName("start");
        const targetEnd = document.getElementsByName("end");

        const getToday = new Date();
        const years = getToday.getFullYear();
        const months = String(getToday.getMonth() + 1).padStart(2, "0");
        const dates = String(getToday.getDate()).padStart(2, "0");

        targetStart.forEach((el) => {
            el.value = years + "년 " + months + "월 " + dates + "일";
        });
        targetEnd.forEach((el) => {
            el.value = years + "년 " + months + "월 " + dates + "일";
        });

        const datepickerRange = new window.DateRangePicker(el, dtOption);

        if (radioTarget) {
            radioTarget.forEach((el) => {
                el.addEventListener("change", radioCheck);
            });

            function radioCheck(e) {
                const targetId = e.target.id;

                if (targetId === "dateDay") {
                    dtOption.format = "yyyy년 mm월 dd일";
                    dtOption.pickLevel = 0;
                } else if (targetId === "dateMonth") {
                    dtOption.format = "yyyy년 mm월";
                    dtOption.pickLevel = 1;
                } else if (targetId === "dateYear") {
                    dtOption.format = "yyyy년";
                    dtOption.pickLevel = 2;
                } else {
                    dtOption.format = "yyyy년 mm월 dd일";
                    dtOption.pickLevel = 0;
                }
                datepickerRange.setOptions(dtOption);
            }
        }
    });

    const targetSingle = document.querySelectorAll('[name="datesingle"]');
    targetSingle.forEach((el) => {
        const datepickerSingle = new window.Datepicker(el, dtOption);
        return datepickerSingle;
    });
};

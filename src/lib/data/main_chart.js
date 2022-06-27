function commaify(value) {
    var result = ("" + value).replace(/^(-?\d+)(\d{3})/, "$1,$2");
    return value == result ? result : commaify(result);
}

Chart.register(ChartDataLabels);

window.charts = [];

// window.chartTheme = window.themeChoice === "dark" ? "#ffffff" : "#212529";

const mainEl = document.getElementById("mainChart");
const setMainChart = () => {
    mainEl.getContext("2d");
    const mainChart = new Chart(mainEl, {
        type: "bar",
        data: {
            labels: ["계획", "실적"],
            datasets: [
                {
                    label: "부서 업무 절감시간 (연간)",
                    data: [80000, 67000],
                    backgroundColor: ["rgb(54, 162, 235)", "rgb(75, 192, 192)"],
                    borderColor: ["rgb(54, 162, 235)", "rgb(75, 192, 192)"],
                    borderRadius: 4,
                    borderWidth: 1,
                },
            ],
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 10000,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                datalabels: {
                    display: function (context) {
                        return context.dataset.data[context.dataIndex] !== 0;
                    },
                    color: "#ffffff",
                    font: {
                        weight: "bold",
                        size: 14,
                    },
                    formatter: function (value) {
                        return commaify(value);
                    },
                },
            },
        },
    });
};

const saveTimeEl = document.getElementById("saveTimeChart");
const setSaveTimeChart = () => {
    saveTimeEl.getContext("2d");
    const saveTimeChart = new Chart(saveTimeEl, {
        type: "bar",
        data: {
            labels: ["일간", "주간", "월간", "연간"],
            datasets: [
                {
                    label: "계획",
                    data: [100, 500, 2000, 2400],
                    backgroundColor: "rgb(54, 162, 235)",
                    borderColor: "rgb(54, 162, 235)",
                    borderRadius: 4,
                    borderWidth: 1,
                },
                {
                    label: "실적",
                    data: [135, 520, 1150, 715],
                    backgroundColor: "rgb(75, 192, 192)",
                    borderColor: "rgb(75, 192, 192)",
                    borderRadius: 4,
                    borderWidth: 1,
                },
            ],
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        display: false,
                    },
                },
            },
            layout: {
                padding: {
                    top: 4,
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        boxWidth: 16,
                        boxHeight: 16,
                    },
                },
                tooltip: {
                    enabled: false,
                },
                datalabels: {
                    display: function (context) {
                        return context.dataset.data[context.dataIndex] !== 0;
                    },
                    anchor: "end",
                    align: "center",
                    color: () => {
                        return window.themeChoice === "dark"
                            ? "#ffffff"
                            : "#212529";
                    },
                    font: {
                        weight: "bold",
                        size: 14,
                    },
                    formatter: function (value) {
                        return commaify(value);
                    },
                },
            },
        },
    });

    window.charts.push(saveTimeChart);
};

const taskCountEl = document.getElementById("taskCountChart");
const setTaskCountChart = () => {
    taskCountEl.getContext("2d");
    const taskCountChart = new Chart(taskCountEl, {
        type: "bar",
        type: "bar",
        data: {
            labels: ["일간", "주간", "월간", "연간"],
            datasets: [
                {
                    label: "계획",
                    data: [3, 11, 40, 48],
                    backgroundColor: "rgb(54, 162, 235)",
                    borderColor: "rgb(54, 162, 235)",
                    borderRadius: 4,
                    borderWidth: 1,
                },
                {
                    label: "실적",
                    data: [2, 9, 21, 14],
                    backgroundColor: "rgb(75, 192, 192)",
                    borderColor: "rgb(75, 192, 192)",
                    borderRadius: 4,
                    borderWidth: 1,
                },
            ],
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        display: false,
                    },
                },
            },
            layout: {
                padding: {
                    top: 4,
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        boxWidth: 16,
                        boxHeight: 16,
                    },
                },
                tooltip: {
                    enabled: false,
                },
                datalabels: {
                    display: function (context) {
                        return context.dataset.data[context.dataIndex] !== 0;
                    },
                    anchor: "end",
                    align: "center",
                    color: () => {
                        return window.themeChoice === "dark"
                            ? "#ffffff"
                            : "#212529";
                    },
                    font: {
                        weight: "bold",
                        size: 14,
                    },
                    formatter: function (value) {
                        return commaify(value);
                    },
                },
            },
        },
    });
    window.charts.push(taskCountChart);
};

const weekEl = document.getElementById("weekChart");
const setWeekChart = () => {
    weekEl.getContext("2d");
    const weekElChart = new Chart(weekEl, {
        type: "bar",
        data: {
            labels: ["계획", "실적"],
            datasets: [
                {
                    label: "부서 업무 절감시간 (주간)",
                    data: [4000, 3700],
                    backgroundColor: ["rgb(54, 162, 235)", "rgb(75, 192, 192)"],
                    borderColor: ["rgb(54, 162, 235)", "rgb(75, 192, 192)"],
                    borderRadius: 4,
                    borderWidth: 1,
                },
            ],
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        display: false,
                    },
                },
            },
            layout: {
                padding: {
                    top: 4,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                title: {
                    display: true,
                    text: "주간",
                    font: {
                        size: 16,
                    },
                },
                datalabels: {
                    display: function (context) {
                        return context.dataset.data[context.dataIndex] !== 0;
                    },
                    anchor: "end",
                    align: "center",
                    color: () => {
                        return window.themeChoice === "dark"
                            ? "#ffffff"
                            : "#212529";
                    },
                    font: {
                        weight: "bold",
                        size: 14,
                    },
                    formatter: function (value) {
                        return commaify(value);
                    },
                },
            },
        },
    });
    window.charts.push(weekElChart);
};

const monthEl = document.getElementById("monthChart");
const setMonthChart = () => {
    monthEl.getContext("2d");
    const monthElChart = new Chart(monthEl, {
        type: "bar",
        data: {
            labels: ["계획", "실적"],
            datasets: [
                {
                    label: "부서 업무 절감시간 (월간)",
                    data: [30000, 27000],
                    backgroundColor: ["rgb(54, 162, 235)", "rgb(75, 192, 192)"],
                    borderColor: ["rgb(54, 162, 235)", "rgb(75, 192, 192)"],
                    borderRadius: 4,
                    borderWidth: 1,
                },
            ],
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        display: false,
                    },
                },
            },
            layout: {
                padding: {
                    top: 4,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                title: {
                    display: true,
                    text: "월간",
                    font: {
                        size: 16,
                    },
                },
                datalabels: {
                    display: function (context) {
                        return context.dataset.data[context.dataIndex] !== 0;
                    },
                    anchor: "end",
                    align: "center",
                    color: () => {
                        return window.themeChoice === "dark"
                            ? "#ffffff"
                            : "#212529";
                    },
                    font: {
                        weight: "bold",
                        size: 14,
                    },
                    formatter: function (value) {
                        return commaify(value);
                    },
                },
            },
        },
    });
    window.charts.push(monthElChart);
};

const yearEl = document.getElementById("yearChart");
const setYearChart = () => {
    yearEl.getContext("2d");
    const yearElChart = new Chart(yearEl, {
        type: "bar",
        data: {
            labels: ["계획", "실적"],
            datasets: [
                {
                    label: "부서 업무 절감시간 (주간)",
                    data: [80000, 67000],
                    backgroundColor: ["rgb(54, 162, 235)", "rgb(75, 192, 192)"],
                    borderColor: ["rgb(54, 162, 235)", "rgb(75, 192, 192)"],
                    borderRadius: 4,
                    borderWidth: 1,
                },
            ],
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        display: false,
                    },
                },
            },
            layout: {
                padding: {
                    top: 4,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                title: {
                    display: true,
                    text: "연간",
                    font: {
                        size: 16,
                    },
                },
                datalabels: {
                    display: function (context) {
                        return context.dataset.data[context.dataIndex] !== 0;
                    },
                    anchor: "end",
                    align: "center",
                    color: () => {
                        return window.themeChoice === "dark"
                            ? "#ffffff"
                            : "#212529";
                    },
                    font: {
                        weight: "bold",
                        size: 14,
                    },
                    formatter: function (value) {
                        return commaify(value);
                    },
                },
            },
        },
    });
    window.charts.push(yearElChart);
};

mainEl && setMainChart();
saveTimeEl && setSaveTimeChart();
taskCountEl && setTaskCountChart();
weekEl && setWeekChart();
monthEl && setMonthChart();
yearEl && setYearChart();

// 오늘 시간 범위 00:00 ~ 23:59
var todayBegin = new Date();
var todayEnd = new Date();
todayBegin.setHours(0);
todayBegin.setMinutes(0);
todayBegin.setSeconds(0);
// todayEnd.setDate(todayEnd.getDate() + 1);
// todayEnd.setHours(0);
// todayEnd.setMinutes(0);
// todayEnd.setSeconds(0);
todayEnd.setHours(23);
todayEnd.setMinutes(59);
todayEnd.setSeconds(59);
// 시간 데이터 생성 (기본날짜는 new Date(), daysToSum 인수로 날짜 더하기)
// time : 시간, ex) 00:00 -> yyyy-MM-dd(오늘 날짜) 00:00 return
// daysToSum : 날짜 더하기, ex) 1 -> yyyy-MM-dd + 1(오늘 날짜 + 1) HH:mm return
function createDate(time, daysToSum) {
    var split = time.split(":");
    var ret = new Date();
    ret.setHours(split[0]);
    ret.setMinutes(split[1]);
    if (daysToSum) ret.setDate(ret.getDate() + daysToSum);
    return ret;
}
// 정각 시간 데이터 생성
function getAClock(time) {
    var ret = new Date(time);
    ret.setMinutes(0);
    ret.setSeconds(0);
    return ret;
}
// 현재 시간 범위, ex) 13:25 -> 13:00 ~ 14:00
var nowHours = [
    {
        begin: getAClock(new Date()),
        end: getAClock(new Date().setHours(new Date().getHours() + 1)),
        color: "#88C4F4",
    },
];
// gantt 표시 데이터
/*
{
description: '프로세스명(좌측 타이틀)',
activities: [
{
code: '상태값 (각 활동 당 색상 차이 두기 위함) // FAIL, ERROR, SUCCESS, RUNNING, RESERVE',
begin: 스케쥴 시작 시간,
end: 스케쥴 종료 시간,
description: '스케쥴 설명 -> 상태값이 들어가도 되고 프로세스명이 들어가도 될듯함'
}
]
}
*/
var jobdata = [
    {
        description: "d",
        activities: [
            {
                code: "SUCCESS",
                begin: createDate("06:00"),
                end: createDate("10:40"),
            },
            {
                code: "WAIT",
                begin: createDate("14:10"),
                end: createDate("16:40"),
            },
        ],
    },
    {
        description: "</p>",
        activities: [
            {
                code: "FAIL",
                begin: createDate("03:40"),
                end: createDate("20:30"),
            },
        ],
    },
    {
        description: "d",
        activities: [
            {
                code: "ERROR",
                begin: createDate("02:20"),
                end: createDate("07:30"),
            },
            {
                code: "ERROR",
                begin: createDate("09:15"),
                end: createDate("19:50"),
            },
        ],
    },
    {
        description: "d",
        activities: [
            {
                code: "SUCCESS",
                begin: createDate("06:00"),
                end: createDate("10:40"),
            },
            {
                code: "WAIT",
                begin: createDate("14:10"),
                end: createDate("16:40"),
            },
        ],
    },
];
var generalMarkers = [
    {
        description: "now",
        when: new Date(),
        color: "#212529",
        width: "2px",
    },
];
// gantt 생성 옵션
var joboptions = {
    data: jobdata, // 위에서 생성한 스케쥴 데이터
    generalMarkers: generalMarkers,
    // generalHighlights: nowHours, // 현재 시간 하이라이트 있어도 되고 없어도 되고, 테스트 해본 결과 한 화면에 모든 시간이 다 출력되면 따로 하이라이트 표시되지 않음
    style: {
        // gantt 스타일
        activityStyle: {
            // 활동 스타일
            // 이미지 넣으려면 image속성에 해당 image경로 넣어줘야함
            WAIT: { color: "#23b8bc", height: "30px" }, // 상태값 선언
            RUNNING: { color: "#28a745", height: "30px" },
            FAIL: { color: "#ffb81c", height: "30px" },
            ERROR: { color: "#dc3545", height: "30px" },
            STOP: { color: "#6c757d", height: "30px" },
            SUCCESS: { color: "#0066b3", height: "30px" },
        },
        showDateOnHeader: true, // 필수
        hourWidth: 44, // 각 시간 별 너비
        formatDate: function (date) {
            return (
                ("0" + (date.getMonth() + 1)).substr(-2) +
                "-" +
                ("0" + date.getDate()).substr(-2)
            );
        }, // 각 활동 마우스 over 시 출력되는 시간 포맷
        // dateHeaderFormat: function (date) {
        //     return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).substr(-2) + '-' + ('0' + date.getDate()).substr(-2);
        // }, // 상단 header에 표시되는 날짜 형식
        descriptionContainerWidth: "0", // 좌측 타이틀 너비
        beginDate: todayBegin, // gantt 기본 시작 시간
        endDate: todayEnd, // gantt 기본 종료 시간
        rowHeight: "50px",
    },
};

$(document).ready(function () {
    const ganttChart = $("#gantt").stackedGantt(joboptions);
});

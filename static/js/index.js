$(function () {
    $(".btn-lan")[0].click();
    $("#left-box").css("height", $(window).height())
    $("#left-box-mask").css("height", $(window).height())
    $("#update-log").css("height", $(window).height() - 150);
    //InitUpdateLog();
})

var urlList = [
    "http://www.baidu.com",
    "http://www.baidu.com",
    "http://www.baidu.com",
    "http://www.baidu.com",
];

$(".icon-box").click(function () {
    $(this).css("color", "#FF4A1AFF");
    $(this).siblings().css("color", "white");
    var index = parseInt($(this).attr("data-index"));
    window.open(urlList[index]);
})

$(".btn-lan").click(function () {
    $(this).css("background-color", "#FF4A1AFF");
    $(this).siblings().css("background-color", "rgba(0,0,0,0)");
})


function InitUpdateLog() {
    var updatelog = [
        {
            "time": "2021-12-01",
            "title": "这是一个标题",
            "content": "-xxxx<br>-xxxxxxxxxx<br>",
        },
        {
            "time": "2021-12-01",
            "title": "这是一个标题",
            "content": "-xxxx<br>-xxxxxxxxxx<br>",
        },
        {
            "time": "2021-12-01",
            "title": "这是一个标题",
            "content": "-xxxx<br>-xxxxxxxxxx<br>",
        },
        {
            "time": "2021-12-01",
            "title": "这是一个标题",
            "content": "-xxxx<br>-xxxxxxxxxx<br>",
        },
        {
            "time": "2021-12-01",
            "title": "这是一个标题",
            "content": "-xxxx<br>-xxxxxxxxxx<br>",
        },
    ];

    $("#update-log-content").empty();
    for (var x = 0; x < updatelog.length; x++) {
        var str = "                                   <div class='timeline2-entry'>\n" +
            "                                        <div class='timeline2-entry-inner'>\n" +
            "                                            <div class='timeline2-icon bg-success'>\n" +
            "                                                <i class='fa fa-bolt'></i>\n" +
            "                                            </div>\n" +
            "                                            <div class='timeline2-label'>\n" +
            "                                                <h2>\n" +
            "                                                    <strong>" + updatelog[x].time + "</strong>\n" +
            "                                                    <span>" + updatelog[x].title + "</span>\n" +
            "                                                </h2>\n" +
            "                                                <p>" + updatelog[x].content + "</p>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>";
        $("#update-log-content").append(str);
    }
}

function SetLan(data) {
    $(".lan").each(function () {
        var html = $(this).attr("data-lan-" + data);
        $(this).html(html);
    });
}


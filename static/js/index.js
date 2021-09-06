function SetLan(data) {
    $(".lan").each(function () {
        var html = $(this).attr("data-lan-" + data);
        $(this).html(html);
    });
}


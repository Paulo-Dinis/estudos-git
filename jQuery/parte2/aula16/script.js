$(function(){
    $("a").button({
        icons: {primary: "ui-icon-tag"},
        text: false
    });

    $("#checks").buttonset();
    $("#radios").buttonset();
});
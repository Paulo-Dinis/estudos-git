$(document).ready(function(){
    $("span").click(function(){
        let img = $("<img/>", {
        src:"paulo.jpg",
        title:"Paulo Dinis",
        click:function(){alert("tmj!!")}
    });

    var ul = $("<ul/>").append($("<li/>").append("Programador de interface WEB"));

    $("body").append(ul).append(img);
    });
});
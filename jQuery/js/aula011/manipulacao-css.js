$(document).ready(function(){
    $("div").click(function(){
        //alert($("img").css("width"));
        //alert($("img").css("height"));
        /*$("img").css({
            width: "300px",
            background: "#00ff00",
            border: "30px solid black"
        });*/

        alert($("img").offset().top);
    });
});
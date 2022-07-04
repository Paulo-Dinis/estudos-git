$(document).ready(function(){
    $(":input + span").css({
        display: "none",
        border: "none",
        borderRadius: "5px",
        padding: "2px 4px",
        background: "#DDD",
        marginLeft: "10px"
    });

    $(":input").focus(function(){
        $(this).next().fadeIn(500);
    })
    .blur(function(){
        $(this).next().fadeOut(500);
    });
});
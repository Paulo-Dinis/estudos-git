$(document).ready(function()
    {$('a').css("color", "red")
    $("a").click(function(){
        
        $("#titulo")
        .css("color", "#0000ff")
        .text("Curso e jQuery")
        .hide()
        .fadeToggle();
    });
});
$(document).ready(function(){
    //descendentes
    $("div span").css("background-color", "yellow");
    //filhos do elemento
    $("li > ul").css("color", "red");
    //irmaos
    $("#item1_1 ~ li").css("color", "blue");
});
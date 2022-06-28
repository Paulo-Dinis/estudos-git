$(document).ready(function(){

    function msg(){
    $("#msg").text($(this).val());
    }
    $(":text").bind("keyup focus blur", msg);
    $("#botao").bind("click", function(){
        $(":text").unbind("keyup", msg);
    });
});
$(document).ready(function(){

    function msg(){
    $("#msg").text($(this).val());
    }
    $(":text").bind("keyup", msg);
});
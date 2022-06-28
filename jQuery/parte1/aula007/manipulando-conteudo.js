$(document).ready(function(){
    $("span").click(function(){

        //alert($("p").html());

        //$("p").html("Conheça o Brasil")

        //alert($("div").text());

        //$("div").text($("p").html());

        //$("p").html($("textarea").val ());

        $("div").replaceWith("<p>Hello, world!</p>");
    });
});
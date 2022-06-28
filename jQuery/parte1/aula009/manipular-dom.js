$(document).ready(function(){
    $("span").click(function(){
        //$("ul").append("<li>Dentro da ultima posição</li>");
        //$("ul").prepend("<li>Dentro da ultima posição</li>");
        //$("ul").before("<h1>Dentro da ultima posição</h1>");
        //$("span").after("<h1>Dentro da ultima posição</h1>");

        //$("ul").wrap("<p></p>");
        $("span").append($("li").clone());
    });
});
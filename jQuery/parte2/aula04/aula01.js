$(document).ready(function(){

    $("#filmes tbody tr:odd").addClass("impar");

    $("#filmes thead tr td").hover()
    .css("cursor", "pointer")

    $("#filmes thead tr td").each(function(i){
        let n = i;
        $(this).click(function(){
            $(this).hover(function(){})
            $("td").removeClass("destaque")
            $(this)
            .parents("thead")
            .siblings("tbody")
            .children("tr").each(function(){
                $(this)
                .children("td:eq("+n+")")
                .addClass("destaque")
            });
        });
    });
});
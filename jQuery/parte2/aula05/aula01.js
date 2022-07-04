$(document).ready(function(){

    $("#filmes tbody tr:odd").addClass("impar");

    $("#filmes thead tr td").each(function(i){
        let n = i + 1;
        let nomeColuna = $(this).text();

        $("tr td:nth-child("+n+")").hover(function(){
            let nomeCelula = $(this).text()
            $(this).addClass("destaque")
            .prepend("<div class='tooltip'>"+nomeColuna+"<br/>"+nomeCelula+"</div>")
            $(this).click(function(){
                $("tbody tr").removeClass("destaque");
                $(".tooltop").remove();
                $("tbody tr:contains("+ nomeCelula+")")
                .addClass("destaque")
            });
        }, function(){
            $(this).removeClass("destaque");
            $(".tooltip").remove();
        });
    });
});
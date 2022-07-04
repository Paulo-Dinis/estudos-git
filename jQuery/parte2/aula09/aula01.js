$(document).ready(function(){
    $("textarea").bind("input keyup paste", function(){
        let maximo = 100;
        let disponivel = maximo - $(this).val().length;
        if(disponivel < 0){
            let texto = $(this).val().substr(0,maximo)
            $(this).val(texto);
            disponivel = 0;
        }

        $(".contagem").text(disponivel);
        
    });
});
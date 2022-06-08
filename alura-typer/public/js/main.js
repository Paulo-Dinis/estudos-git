let tempoInicial = $("#tempo").text();
let campo = $(".campo-digitacao");
let reiniciarButton = $("#reiniciar");


$(function(){
    atualizaFrase();
    iniciaContadores();
    iniciarCronometro();
    comparaFrase();
    $("#reiniciar").click(reinicializar);
});

function atualizaFrase(){
    let frase = $('.frase').text();
    let numPalavras = frase.split(" ").length;
    let tamanhoFrase = $("#tamaho-frase");
    tamanhoFrase.text(numPalavras);
};

function iniciaContadores(){
    campo.on("input",function(){
        let conteudo = campo.val();
        
        let qtdPalavras = conteudo.split(/\S+/).length -1;
        let caracteres = $('#contador-palavras').text(qtdPalavras);

        let qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
};

function iniciarCronometro(){
        var tempoRestante = $("#tempo").text();
        campo.one("focus", function(){
            let cronometroId = setInterval(function(){
            tempoRestante --;
            $("#tempo").text(tempoRestante);
            if(tempoRestante < 1){
                campo.attr("disabled", true);
                clearInterval(cronometroId);
                campo.toggleClass("campo-desativado");
            }
            if(tempoRestante > 0){
                reiniciarButton.attr("disabled", true);
            };
            if(tempoRestante == 0){
                reiniciarButton.addClass("animacao-botao");
                reiniciarButton.attr("disabled", false);
            };
            
        },1000);
    });
};

function comparaFrase(){
    let frase = $(".frase").text();
    campo.on("input", function(){
        let digitado = campo.val();
        let comparavel = frase.substr(0,digitado.length);
        if(digitado == comparavel){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}


function reinicializar(){  
    campo.attr("disabled", false);
    campo.val("");
    $('#contador-palavras').text("0");
    $('#contador-caracteres').text("0");
    $("#tempo").text(tempoInicial);
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
    reiniciarButton.removeClass("animacao-botao");
    iniciarCronometro();
};







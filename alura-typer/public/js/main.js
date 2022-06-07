let frase = $('.frase').text();
let numPalavras = frase.split(" ").length;
let tamanhoFrase = $("#tamaho-frase");
tamanhoFrase.text(numPalavras);

let campo = $(".campo-digitacao");
campo.on("input",function(){
    let conteudo = campo.val();
    
    let qtdPalavras = conteudo.split(/\S+/).length -1;
    let caracteres = $('#contador-palavras').text(qtdPalavras);

    let qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
});

var tempoRestante = $("#tempo").text();
campo.one("focus", function(){
    let cronometroId = setInterval(function(){
        tempoRestante --;
        $("#tempo").text(tempoRestante);
        if(tempoRestante == 0){
            campo.attr("disabled", true);
            clearInterval(cronometroId);
        }
    },1000);
});





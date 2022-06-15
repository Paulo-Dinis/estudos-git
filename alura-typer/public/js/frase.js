$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $("#spinner").show();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        }, 2000);
    })
    .always(function(){
        $("#spinner").toggle();
    })
}

function trocaFraseAleatoria(data){
    let frase = $(".frase");
    let numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}


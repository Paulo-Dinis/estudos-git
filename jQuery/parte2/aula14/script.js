$(function(){

    let dados = [
        "Java",
        "ActionScript",
        "C"
    ]
    
    $("#tags").autocomplete({
        source: dados
    });
});
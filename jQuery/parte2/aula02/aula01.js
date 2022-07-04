$(document).ready(function(){

    //$("#filmes tbody tr:odd").addClass("impar")
    $("#filmes tbody tr:nth-child(4n)").addClass("impar")  
    $("#filmes tbody tr:nth-child(4n-1)").addClass("impar")

});
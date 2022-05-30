function solution(inputString) {
    
    //Todas strings em letras minusculas
    let textoOriginal = inputString.toLowerCase();
    
    //inverter a string, se igual, retornar true, se não retorna false
    let textoInvertido = textoOriginal.split("").reverse().join("");
    if(textoOriginal == textoInvertido)
        return true;
    else;
        return false;
    };
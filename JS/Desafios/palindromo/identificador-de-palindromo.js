function solution(inputString) {
    
    let textoOriginal = inputString.toLowerCase();
    let textoInvertido = textoOriginal.split("").reverse().join("")
    if(textoOriginal == textoInvertido)
        return true;
    else
        return false;
    }
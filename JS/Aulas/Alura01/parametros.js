// parâmetros de função

function soma(num1, num2){
    return num1 + num2;
}

//console.log(soma(50, 30))

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeIdade('Paulo', 25))

function mutiplicacao(numero1, numero2){
    return numero1 * numero2
}

console.log(mutiplicacao(soma(5, 10), soma(4, 7)))
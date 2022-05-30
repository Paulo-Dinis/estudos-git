function apresentar(nome){
    return `Meu nome é ${nome}`;
}

//Arrow function
let apresentarArrow = nome => `Meu nome é ${nome}`;
let soma = (num1, num2) => num1 + num2;

//Arrow functio com + de uma linha

let somaNumerosPequenos = (numero1, numero2) => {
    if(numero1 || numero2 > 10) {
        return "Somente numeros de 1 a 9"
    } else {
        return numero1 + numero2
    }
}
console.log(somaNumerosPequenos(1, 2))
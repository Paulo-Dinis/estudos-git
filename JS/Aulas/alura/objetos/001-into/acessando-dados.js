const cliente = {
    nome: "Jorge",
    idade: "41",
    cpf: "65478219825",
    email: "jorge@email.com",
}

console.log(`Cliente: ${cliente.nome}, ${cliente.idade} anos.`)
console.log(`CPF: ${cliente.cpf.substring(0,3)}.***.***-${cliente.cpf.substring(9,11)}`)
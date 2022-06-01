const cliente = {
    nome: "Jorge",
    idade: "41",
    cpf: "65478219825",
    email: "jorge@email.com",
    telefone: ["16998764257", "11987456574"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2002"},
    ]
};

cliente.dependentes.push({
    nome: "Samela Maria",
    parentesco: "filha",
    dataNasc: "15/04/1995"
})

//console.log(cliente.dependentes[1])

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "20/03/2002")

console.log(filhaMaisNova[0].nome)
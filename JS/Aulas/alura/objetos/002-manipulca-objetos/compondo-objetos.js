const cliente = {
    nome: "Jorge",
    idade: "41",
    cpf: "65478219825",
    email: "jorge@email.com",
    telefone: ["16998764257", "11987456574"]
};

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2002"
}

cliente.dependentes.nome += " Silva"

console.log(cliente)
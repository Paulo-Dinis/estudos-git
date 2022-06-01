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
        {
            nome: "Samela Maria",
            parentesco: "filha",
            dataNasc: "15/04/1995"
        }
    ],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    }
};

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

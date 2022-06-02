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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

console.log(Object.entries(cliente))
oferecerSeguro(cliente)

const cliente = {
    nome: "Jorge",
    idade: "41",
    cpf: "65478219825",
    email: "jorge@email.com",
}

const chaves = ["nome", "idade", "cpf", "email"]

//for(let i= 0; i < chaves.length; i++){
//    console.log(cliente[chaves[i]])
//}

chaves.forEach(info => console.log(cliente[info]))
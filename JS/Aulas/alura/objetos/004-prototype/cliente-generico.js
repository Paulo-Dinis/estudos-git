function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email 
    this.saldo = saldo 
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const andre = new cliente("André", "14578945615", "andre@email.com.br", "100")

console.log(andre )
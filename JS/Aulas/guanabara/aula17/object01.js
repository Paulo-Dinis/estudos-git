let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log(`José engordou ${p}Kg`)
    this.peso += p
}}

amigo.engordar(2)
console.log(`Peso atual ${amigo.peso}Kg`)
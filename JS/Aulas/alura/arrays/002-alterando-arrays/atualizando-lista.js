const listaDeChamada = ["João", " Juliana", " Ana", " Caio", " Lara", " Marjorie", " Leo"];

//removendo e adicionando
listaDeChamada.splice(1,3," Rodrigo");
//Adicionando
listaDeChamada.splice(2,0," Rodrigo");

console.log(`Lista de chamada: ${listaDeChamada}`);
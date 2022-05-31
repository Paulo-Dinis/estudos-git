const nomes = [" João", " Juliana", " Ana", " Caio", " Lara", " Marjorie", " Guilherme", " Aline", " Fabiana", " Andrea", " Carlos", " Paulo", " Bia", " Vivian", " Isabela", " Vinicius", " Renan", " Renata", " Daisy", " Camilo"];

//corte do inicio ao meio
const sala1 = nomes.slice(0,nomes.length/2)
//corte do meio ao fim
const sala2 = nomes.slice(nomes.length/2)

console.log("Tamanho da array:", nomes.length)
console.log(`Alunos da sala 1:${sala1}.`)
console.log(`Alunos da sala 1:${sala2}.`)
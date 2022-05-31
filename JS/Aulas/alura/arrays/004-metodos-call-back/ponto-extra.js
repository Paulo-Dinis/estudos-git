const notas = [10, 9, 8, 7, 6]

const notasAtualiadas = notas.map( nota => nota == 10 ? nota : ++nota)

let notaSomadas = 0

for(let i = 0; i < notasAtualiadas.length; i++){
    notaSomadas += notasAtualiadas[i]
}
let media = notaSomadas/notasAtualiadas.length

console.log(notasAtualiadas)
console.log(`A média final é ${media}`)
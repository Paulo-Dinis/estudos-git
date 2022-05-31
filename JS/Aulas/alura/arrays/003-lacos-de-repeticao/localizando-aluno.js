const alunos = ["João", " Juliana", " Caio", " Ana"];
const medias = [10, 7, 9, 6];

//includes -> booleano
//indexOf -> numero do indice

let listaDeNotasEAlunos = [alunos, medias]

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + " a sua média é " + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota(" Ana"))
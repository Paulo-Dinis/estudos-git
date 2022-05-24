function contar() {
    var ini = Number(document.getElementById('in').value)
    var f = Number(document.getElementById('fim').value)
    var ps = Number(document.getElementById('ps').value)
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value. length == 0 || ps.value.length == 0) {
        window.alert ('[ERRO] Faltam dados!')
    }

    if (ps <=0){
        window.alert('Numero de passo invalido')
    }

    do {
        res.innerHTML += `${ini} `   
        ini += ps 
    } while (ini < f)
    
    
}
 

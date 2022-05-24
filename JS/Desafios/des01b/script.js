function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var boa = document.getElementById('boa')
    msg.innerHTML = `AGORA SÃO ${hora} HORAS.`

    if (hora >= 0 && hora < 12) {
        boa.innerHTML = ('BOM DIA!')
        img.src = 'manha.png'
        document.body.style.background = '#e4e4a8'
    } else if (hora > 12 && hora <= 18) {
        boa.innerHTML = ('BOA TARDE!')
        img.src = 'tarde.png'
        document.body.style.background = '#548ee0'
    } else {
        boa.innerHTML = ('BOA NOITE!')
        img.src = 'noite.png'
        document.body.style.background = '#3d3f4c'
    }
}


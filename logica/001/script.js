let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');
let x = 20;
let y = 20;
let raio = 5;
let xAleatorio = sorteiaPosicao(600);
let yAleatorio = sorteiaPosicao(400);


function desenhaCirculo(x, y, raio, cor){
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0,2*Math.PI);
    pincel.fill();
}

function limpaTela(){
    pincel.clearRect(0,0,600,400);
}

function desenhaAlvo(x, y){
    desenhaCirculo(x,y,raio+10,'red');
    desenhaCirculo(x,y,raio+5,'white');
    desenhaCirculo(x,y,raio,'red');
}

function sorteiaPosicao(maximo){
    return Math.floor(Math.random() * maximo);
}

function atualizaTela(){
    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400);
    limpaTela();
    desenhaAlvo(xAleatorio, yAleatorio);
}

function dispara(evento){
    let x = evento.pageX - tela.offsetLeft;
    let y = evento.pageY - tela.offsetTop;

    if((x > xAleatorio - (raio+10)) 
        && (x < xAleatorio + (raio+10)) 
        && (y > yAleatorio - (raio+10)) 
        && (y < yAleatorio + (raio+10))) {
            alert('acertou');
    }
}

setInterval(atualizaTela, 1000);
tela.onclick = dispara;
//Var bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2

//var vel bolinha
let velxBol = 2;
let velyBol = 2;

//var raquete
let xRaq = 0
let yRaq = 150
let largRaq = 10
let altRaq = 90
let colidir = false

//var oponente
let xOpoRaq = 590
let yOpoRaq = 150
let largOpoRaq = 10
let altOpoRaq = 90
let velyOpo;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  bolinha()
  movimentoBol()
  colisaoBorda()
  raquete(xRaq, yRaq)
  raqueteOpo(xOpoRaq, yOpoRaq)
  moviRaq()
  limiteRaq()
  moviRaqOpo()
  colidirRaq()
}

function bolinha() {
  circle(xBolinha, yBolinha, diametro);
}
function movimentoBol() {
  xBolinha += velxBol;
  yBolinha += velyBol;
}

function colisaoBorda() {
  if (xBolinha + raio > width  || xBolinha - raio < 0) {
    velxBol *= -1
  } 
  if (yBolinha + raio > height  || yBolinha - raio < 0) {
    velyBol *= -1 
  }
}

function raquete(x, y) {
  rect(x, y, largRaq, altRaq)
}

function raqueteOpo(x, y) {
  rect(x, y, largOpoRaq, altOpoRaq)
}

function moviRaq() {
  if (keyIsDown(UP_ARROW)) {
    yRaq -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaq += 10;
  }
}

function moviRaqOpo() {
    velyOpo = yBolinha - yOpoRaq - largRaq / 2 - 30;
    yOpoRaq += velyOpo
}

function colidirRaq() {
  colidir =
  collideRectCircle(xRaq, yRaq, largRaq, altRaq, xBolinha, yBolinha, raio);
  if (colidir) {
    velxBol *= -1
    velyBol *= -1
  }
      
}

function limiteRaq() {
  if (yRaq + altRaq > height) {
      yRaq = height - altRaq
  }
  if (yRaq  < 0) {
      yRaq = 0 
  }
}
  
let xBolinha = 300;//Posicao da bolinha na tela horizontal
let yBolinha = 200;//Posicao da bolinha na tela vertical 
let diametro = 25;
let raio = diametro / 2; 

let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let raqueteX = 5;
let raqueteY = 150;

let raquetexOponente = 585;
let raqueteyOponente = 150;
let velocidadeYoponente;

let meusPontos = 0;
let pontosOponente = 0;

let colidiu = false;



function setup() {
  createCanvas(600 , 400); // dimensao da tela
  
 
}
let img;




function draw() {
  background(img); // cora da tela
  mostraBolinha();
  movimentaBolinha();
  bordasXeY();
  mostraRaquete(raqueteX, raqueteY);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(raqueteX, raqueteY);
  mostraRaquete(raquetexOponente, raqueteyOponente);
  movimentaraqueteOponente();
  verificaColisaoRaquete(raquetexOponente, raqueteyOponente);
  incluiPlacar();
  marcaPonto();
  

}

function mostraBolinha(){
 circle (xBolinha, yBolinha , diametro); // bolinha do jogo baseado na vareavel acima comentada 
  
}
function movimentaBolinha(){
   xBolinha += velocidadexBolinha;// velocidade da bolinha concatenada
  yBolinha += velocidadeyBolinha;// velocidade da bolinha concatenada
}

function bordasXeY(){
  if (xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadexBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }   
}
function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
} 

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    raqueteY -= 10;
  } if(keyIsDown(DOWN_ARROW)){
    raqueteY += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < raqueteX + raqueteComprimento && yBolinha - raio < raqueteY + raqueteAltura && yBolinha + raio > raqueteY){
    velocidadexBolinha *= -1
  }
}
function verificaColisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadexBolinha *= -1
  }
}


function movimentaraqueteOponente(){
   if(keyIsDown(87)){
    raqueteyOponente -= 10;
  } if(keyIsDown(83)){
    raqueteyOponente += 10;
  }
}

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER)
  textSize(22)
  fill(0,128,0)
  rect(130, 11, 40, 30)
  fill (255)
  text(meusPontos, 150, 33);
  fill(0,128,0)
  rect(430, 11, 40, 30)
  fill (255)
  text(pontosOponente, 450, 33)
}
function marcaPonto(){
  if(xBolinha > 586){
    meusPontos += 1;
  }
  if(xBolinha < 12){
    pontosOponente += 1;
  }
}

function preload() {
  img = loadImage('campo.jpeg');
}
  





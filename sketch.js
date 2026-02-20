var tela = 0;

function preload(){
  prlx_bg = loadImage('/assets/woods-bg.png');
  prlx_1 = loadImage('/assets/woods-far.png');
  prlx_2 = loadImage('/assets/woods-mid.png');
  prlx_3 = loadImage('/assets/woods-close.png');
}

function setup() {
  createCanvas(480, 272);
  tela == 0?setupMenu():setupGame();
}

function draw() {
    tela == 0?showMenu():showGame();
}
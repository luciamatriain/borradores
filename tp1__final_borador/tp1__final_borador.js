let pantalla;
let imagenes = [];
let total= 5;
let sigue;

function preload() {
  for (let i=0; i< total; i++) {
    imagenes[i] = loadImage("data/imagen"+i+".png");
  }
}

function setup() {
  createCanvas(640, 480);
  pantalla = 0;
  sigue = pantalla;
}

function draw() {
  background(255);
  textSize(30);
  fill(0, 255, 255);

  image(imagenes[pantalla], 0, 0);

  if (pantalla === 0) {
    text("UNO", width/2, height/2);
  } else if (pantalla === 1) {
    text("DOS", width/2, height/2);
  } else if (pantalla === 2) {
    text("TRES", width/2, height/2);
    dibujarBoton(130, 250, "cuatro");
    dibujarBoton(460, 250, "cinco");
  } else if (pantalla === 3) {
    text("CUATRO", width/2, height/2);
  } else if (pantalla === 4) {
    text("CINCO", width/2, height/2);
  }
  print(mouseX + '/' + mouseY);
}


function mousePressed() {

  if (pantalla < 2) {
    pantalla++;
  }
  if (pantalla === 2) {
    if (mouseX > 130 && mouseX < 130+ancho && mouseY > 250 && mouseY < 250+alto) {
      pantalla= 3;
    } else   if (mouseX > 460 && mouseX < 460+ancho && mouseY > 250 && mouseY < 250+alto) {
      pantalla = 4;
    }
  }
}

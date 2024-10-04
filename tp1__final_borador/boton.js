let ancho= 100, alto=50;
function dibujarBoton(posX, posY, texto) {
  noStroke();
  fill(255);
  rect(posX, posY, ancho, alto);
  fill(0);
  textAlign(CENTER);
  text(texto, posX+50, posY+25);
}

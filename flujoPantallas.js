function flujoDePantallas() {
  image(imagenes[pantalla], 0, 0);//secuencia de imagenes por pantalla

  if (pantalla === 0) {
    guionCSV(325, 90, 0, 0, pantallasIDs[pantalla]);//texto en pantalla
  } else if (pantalla === 1) {
    image(marco2, 60, 80, 530, 320);// Dibuja marco de introducción
    guionCSV(300, 90, 120, 120, pantallasIDs[pantalla]);
  } else if (pantalla === 2) {
    image(marco1, 70, 295); // Dibuja boton A
    image(marco1, 370, 295); // Dibuja boton B
    guionCSV(306, 90, 98, 345, pantallasIDs[pantalla]);
    dibujarBoton(70, 295);
    dibujarBoton(370, 295);
  } else if (pantalla === 3) {
    guionCSV(300, 90, 0, 0, pantallasIDs[pantalla]);
  } else if (pantalla === 4) {
    guionCSV(300, 90, 0, 0, pantallasIDs[pantalla]);
  } else if (pantalla === 5) {
    guionCSV(300, 90, 0, 0, pantallasIDs[pantalla]);
  } else if (pantalla === 6) {
    image(marco1, 70, 295);
    image(marco1, 370, 295);
    guionCSV(310, 90, 98, 345, pantallasIDs[pantalla]);
    dibujarBoton(70, 295);
    dibujarBoton(370, 295);
  } else if (pantalla === 7) {
    guionCSV(310, 90, 98, 345, pantallasIDs[pantalla]);
  } else if (pantalla === 8) {
    guionCSV(310, 90, 98, 345, pantallasIDs[pantalla]);
  } else if (pantalla === 9) {
    image(marco1, 70, 295);
    image(marco1, 370, 295);
    guionCSV(310, 90, 98, 345, pantallasIDs[pantalla]);
    dibujarBoton(70, 295);
    dibujarBoton(370, 295);
  } else if (pantalla === 10) {
    image(marco1, 70, 295);
    image(marco1, 370, 295);
    guionCSV(310, 90, 98, 345, pantallasIDs[pantalla]);
    dibujarBoton(70, 295);
    dibujarBoton(370, 295);
  } else if ( pantalla ===11) {
    guionCSV(300, 90, 0, 0, pantallasIDs[pantalla]);
  } else if ( pantalla ===12) {
    guionCSV(300, 90, 0, 0, pantallasIDs[pantalla]);
  } else if ( pantalla ===13) {
    guionCSV(300, 90, 0, 0, pantallasIDs[pantalla]);
  } else if ( pantalla ===14) {
    guionCSV(300, 90, 0, 0, pantallasIDs[pantalla]);
  } else if ( pantalla ===15) {
    guionCSV(300, 90, 0, 0, pantallasIDs[pantalla]);
  } else if ( pantalla ===16) {
    guionCSV(300, 90, 0, 0, pantallasIDs[pantalla]);
  } else if ( pantalla ===17) {
    guionCSV(300, 90, 0, 0, pantallasIDs[pantalla]);
  } else if ( pantalla ===18) {
    image(marco2, 60, 80, 530, 320);
    guionCSV(300, 90, 120, 120, pantallasIDs[pantalla]);
  }
}

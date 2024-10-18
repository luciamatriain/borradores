function guionCSV(posXescena, posYescena, posXopcionA, posYopcionA, _id) {
  push();

  // Burbuja de diálogo
  fill(255);
  text(buscarTextoCSV(_id, 'escena'), posXescena, posYescena);

  fill(200);
  text(buscarTextoCSV(_id, 'opcionA'), posXopcionA, posYopcionA);
  
  pop();
}

//Búsqueda de diálogo
function buscarTextoCSV(_id, _columna) {
  let IDColumna = nuestroDialogoCSV.getColumn('id');

  for (let fila=0; fila < IDColumna.length; fila++) {
    if (IDColumna[fila] === _id)
      return nuestroDialogoCSV.getColumn(_columna)[fila];
  }
  return "NO SE ENCONTRO EL ID: " + _id;
}

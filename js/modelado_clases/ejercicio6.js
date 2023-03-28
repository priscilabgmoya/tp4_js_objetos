/**
 * 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
 *   ISBN
 *   Título
 *   Autor
 *   Número de páginas
 * Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro()
 * para mostrar la información relativa al libro con el siguiente formato:
 *    “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
 * Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
 * Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro {
  constructor(ISBN, titulo, autor, nro_pagina) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._nro_pagina = nro_pagina;
  }
  set ingresarISBN(ISBN) {
    this._ISBN = ISBN;
  }
  set ingresarTitulo(titulo) {
    this._titulo = titulo;
  }
  set ingresarAutor(autor) {
    this._autor = autor;
  }
  set ingresarNroPaginas(nroPaginas) {
    this._nro_pagina = nroPaginas;
  }
  get obtenerISBN() {
    return this._ISBN;
  }
  get obtenerTitulo() {
    return this._titulo;
  }
  get obtenerAutor() {
    return this._autor;
  }
  get obtenerNroPaginas() {
    return this._nro_pagina;
  }
  mostarLibro(){
    return `El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene páginas ${this._nro_pagina}`;
  }
}

let libro_psicoanalisis = new Libro(9789504955139,"Encuentros: El lado B del Amor", "Gabriel Rolon",328); 
let libro_cienciaFiccion = new Libro(9781416955078,"City of Bones", "Cassandra Clare", 485);

document.write('<h2>Libros Creados </h2>');
document.write(`<p>${libro_psicoanalisis.mostarLibro()}</p>`);
document.write(`<p>${libro_cienciaFiccion.mostarLibro()}</p>`);
document.write('<hr>');
document.write('<h2>Libros con mayor Cantidad de Hojas </h2>');
if(libro_psicoanalisis.obtenerNroPaginas>=libro_cienciaFiccion.obtenerNroPaginas){
    document.write(`<p>${libro_psicoanalisis.mostarLibro()}</p>`);
}else{
    document.write(`<p>${libro_cienciaFiccion.mostarLibro()}</p>`);
}
document.write('<hr>');
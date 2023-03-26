/**
 * 3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
 * con las propiedades de alto y ancho, mas los métodos necesarios para modificar 
 * y mostrar sus propiedades, calcular el perímetro y el área
 */

class Rectangulo{
    constructor(altura=0, base=0){
        this._altura = altura;
        this._base = base; 
    }
    set ingresarAltura(altura){
        this._altura = altura;
    }
    set ingresarBase(base){
        this._base = base;
    }
    get obtenerAltura(){
        return this._altura;
    }
    get obtenerBase(){
        return this._base;
    }
    get calcularArea(){
        return (this._altura * this._base);
    }
    get calcularPerimetro(){
        return (2*(this._altura + this._base));
    }
}

let rectangulo_1 = new Rectangulo();

rectangulo_1.ingresarAltura = 15;
rectangulo_1.ingresarBase = 78;

let areaRectangulo_1 = rectangulo_1.calcularArea;
let perimetroRectangulo_1 = rectangulo_1.calcularPerimetro;

document.write(`La Altura del rectangulo es: ${rectangulo_1.obtenerAltura} y la Base del rectangulo es: ${rectangulo_1.obtenerBase}`);
document.write('<br>');
document.write(`El area del rectangulo es: ${areaRectangulo_1}`);
document.write('<br>');
document.write(`El perimetro del rectangulo es: ${perimetroRectangulo_1}`);
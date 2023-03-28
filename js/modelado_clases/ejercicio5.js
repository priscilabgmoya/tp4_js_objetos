/**
 * 5- Crea una clase llamada Persona que siga las siguientes condiciones:
 * Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
 * Si quieres añadir alguna propiedad extra puedes hacerlo.
 * Los métodos que se debe poder utilizar  son:
 * mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada 
 * y cual es el rasgo característico de esta generación.
 * esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
 * mostrarDatos: devuelve toda la información del objeto.
 * generaDNI(): genera un número aleatorio de 8 cifras.
 */

class Personas{
    constructor(nombre, apellido, edad, sexo, peso, altura, añoNacimiento){
        this._dni= parseInt(this.#generaDNI());
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._sexo = sexo;
        this._peso = peso; 
        this._altura = altura;
        this._añoNacimiento = añoNacimiento;
    }

    #generaDNI() {
        let min = Math.ceil(1);
        let max = Math.floor(99999999);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    esMayorDeEdad(){
        if(this._edad >= 18){
            return `${this._nombre} ${this._apellido} es Mayor de Edad`;
        }else{
            return `${this._nombre} ${this._apellido} es Menor de Edad`;
        }
    }
    mostrarGeneracion(){
        if(this._añoNacimiento >= 1930 && this._añoNacimiento <= 1948){
            document.write('<h3>Nombre De Generacíon: Silent Generation</h3>');
            this.#visualizarRasgo("Silent Generation");
        }
        if(this._añoNacimiento >= 1949 && this._añoNacimiento <= 1968){
            document.write('<h3>Nombre De Generacíon: Baby Boom</h3>');
            this.#visualizarRasgo("Baby Boom");
        }
        if(this._añoNacimiento >= 1969 && this._añoNacimiento <= 1980){
            document.write('<h3>Nombre De Generacíon: Generacíon X</h3>');
            this.#visualizarRasgo("Generacion X");
        }
        if(this._añoNacimiento >= 1981 && this._añoNacimiento <= 1993){
            document.write('<h3>Nombre De Generacíon: Generacíon Y</h3>');
            this.#visualizarRasgo("Generacion Y");
        }
        if(this._añoNacimiento >= 1994 && this._añoNacimiento <= 2010){
            document.write('<h3>Nombre De Generacíon: Generacíon Z</h3>');
            this.#visualizarRasgo("Generacion Z");
        }
    }
    mostrarDatos(){
        return `${this._nombre} ${this._apellido} es una persona nacida en el año ${this._añoNacimiento} , de ${this._edad} años y del sexo ${this._sexo} \n con una altura ${this._altura} , un peso ${this._peso} y su dni es ${this._dni}`;  
    }
    #visualizarRasgo(generacion){
        switch (generacion) {
            case "Generacion Z":
                document.write('<h4>Rasgo Característico</h4>');
                document.write(`<div><img src="/img/irreverencia.png"></div>`);
            break;
            case "Generacion Y":
                document.write('<h4>Rasgo Característico</h4>');
                document.write(`<div><img src="/img/frustacion.png"></div>`);
            break;
            case "Generacion X":
                document.write('<h4>Rasgo Característico</h4>');
                document.write(`<div><img src="/img/exito.png"></div>`);
            break;
            case "Baby Boom":
                document.write('<h4>Rasgo Característico</h4>');
                 document.write(`<div><img src="/img/ambicion.png"></div>`);
            break;
            default:
                document.write('<h4>Rasgo Característico</h4>');
                document.write(`<div><img src="/img/austeridad.png"></div>`);
            break;
        }
    }
}

let personaNueva = new Personas("priscila belen","garcia moya",24, "F", "100 Kg", "180 cm", 1998);

personaNueva.mostrarGeneracion();
document.write('<hr>');
document.write('<h2>Verificamos si una persona es mayor de edad</h2>');
document.write(`<p>${personaNueva.esMayorDeEdad()}</p>`);
document.write('<hr>');
document.write('<h2>Datos de la persona</h2>');
document.write(`<p>${personaNueva.mostrarDatos()}</p>`);
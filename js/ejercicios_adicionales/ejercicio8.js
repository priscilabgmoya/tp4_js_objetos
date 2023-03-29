/**
 * 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión",
 *  y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes 
 * valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
 */

class Persona{
    #_nombre;
    #_edad; 
    #_profesion; 
    constructor(nombre, edad, profesion){
        this.#_nombre = nombre;
        this.#_edad = edad;
        this.#_profesion = profesion;
    }
    // metodos stter
    set setNombre(nombre){
        this.#_nombre = nombre;
    }
    set setEdad(edad){
        this.#_edad = edad;
    }
    set setProfesion(profesion){
        this.#_profesion = profesion;
    }
    // metodos getter
    get getNombre(){
        return this.#_nombre;
    }
    get getEdad(){
        return this.#_edad;
    }
    get getProfesion(){
        return this.#_profesion;
    }
    // metodos
    saludar(){
        document.write(`Hola ${this.getNombre}. ¿Como estas?....`);
    }
    despedirse(){
        document.write(`Adios ${this.getNombre}. Hasta la Proxima!`);
    }
}

let persona_1 = new Persona("Priscila", 24, "Estudiante");

let persona_2 = new Persona("Pablo", 15, "Estudiante"); 

persona_1.saludar();
document.write("<br>");
persona_2.saludar();

persona_1.setNombre= "Priscila Belen"; 
persona_2.setNombre = "Pablo Benjamin"; 
document.write("<br>");
persona_1.despedirse();
document.write("<br>");
persona_2.despedirse();
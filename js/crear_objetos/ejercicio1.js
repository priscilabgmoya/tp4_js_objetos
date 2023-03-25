/**
 * 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, 
 * modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
 */
class Auto{
    constructor(color, modelo, arranque, año){
        this._color = color;
        this._modelo = modelo; 
        this._arranque = arranque;
        this._año = año;
    }
    set apagarAuto(arranque){
        this._arranque = arranque;
    }
    set encenderAuto(arranque){
        this._arranque = arranque;
    }
    get estadoArranqueAuto(){
         return `El auto se encuentra ${this._arranque}`;
    }
}

let auto = new Auto("rojo","fiat","encendido",2009);
console.log(auto);
console.log(auto.estadoArranqueAuto);
auto.apagarAuto="apagado";
console.log(auto.estadoArranqueAuto);
console.log(auto);

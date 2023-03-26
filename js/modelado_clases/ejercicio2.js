/**
 * 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción
 del estado de la cuenta.
 */

class Cuenta{
    constructor(titular="Alex" , saldo =0){
        this._titular = titular;
        this._saldo = saldo;
    }
    set ingresar(monto){
        this._saldo = this._saldo + monto; 
    }
    set extraer(monto){
        if (this._saldo >0){
            this._saldo = this._saldo - monto; 
        }
    }
    get informar(){
        return `El estado de su cuenta es: ${this._saldo}`;
    }
}

let ingresarDinero = new Cuenta();

console.log(ingresarDinero);
ingresarDinero.ingresar = 7000;
console.log(ingresarDinero.informar);
ingresarDinero.extraer= 1200;
console.log(ingresarDinero.informar);
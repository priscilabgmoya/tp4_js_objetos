/**
 * 7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando 
sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, 
indicando nosotros el tamaño o con un tamaño por defecto (10).
Los métodos de la agenda serán los siguientes:
aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, 
las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
 */

class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }
  get getNombre() {
    return this.#nombre;
  }
  get getTelefono() {
    return this.#telefono;
  }
}

class AgendaTelefonica {
  #agenda = [];

  aniadirContacto(contacto) {
    let buscarContacto = this.#agenda.find(
      (contactos) => contactos.getNombre === contacto.getNombre
    );
    if (!buscarContacto) {
      if (this.#agenda.length <= 10) {
        this.#agenda.push(contacto);
        console.log("Contacto Agregado!");
      } else {
        console.log("Agenda Llena!");
      }
    } else {
        console.log( "Error: Ya existe el contacto!");
    }
  }
  existeContacto(contactos) {
    let contactoEncontrado = this.#agenda.find(
      (contacto) => contacto === contactos
    );
    if (contactoEncontrado) {
        console.log( `Si existe el contacto!. Sus datos son: Nombre: ${contactoEncontrado.getNombre} - Telefono: ${contactoEncontrado.getTelefono}`);
    } else {
        console.log("No se encontro Contacto!");
    }
  }
  listarContacto() {
    console.log(`Listado de Contactos: `);
    this.#agenda.forEach((contacto) => {
      console.log(
        ` * Nombre: ${contacto.getNombre} - Telefono: ${contacto.getTelefono}`
      );
    });
  }
  buscarContacto(nombre) {
    let contactoEncontrado = this.#agenda.find(
      (contacto) => contacto.getNombre === nombre
    );
    if (contactoEncontrado) {
        console.log( `Si existe el contacto!. Su Telefono es: ${contactoEncontrado.getTelefono}`);
    } else {
        console.log("No se encontro Contacto!");
    }
  }
  eliminarContacto(contacto) {
    let nuevoArray = this.#agenda.filter((contactos) => contactos !== contacto);
    if (this.#agenda.length > nuevoArray.length) {
      this.#agenda = nuevoArray;
      console.log("Se elimino el contacto");
    } else {
        console.log( "No se elimino el contacto");
    }
  }
  agendaLlena() {
    if (this.#agenda.length === 10) {
        console.log("Agenda Llena!");
    } else {
        console.log( "Todavia queda espacio para guardar contactos!");
    }
  }
  huecosLibres() {
    console.log(`La cantidad de huecos libres para agregar es ${10 - this.#agenda.length}`);
  }
}


let agenda = new AgendaTelefonica();


const texto =
  "Seleccione Una opcion:\n[1]- Añadir Contacto\n[2]- Buscar Contacto\n" +
  "[3]- Listar Contactos\n[4]- Buscar Telefono Contacto\n[5]- Eliminar Contacto\n" +
  "[6]-Comprobar si la Agenda esta llena \n[7]- Comprobar si queda espacio para agregar mas contactos \n";
let nroSeleccionado = 0;
do {
  nroSeleccionado = parseInt(prompt(texto));
      if (!isNaN(nroSeleccionado)) {
          switch (nroSeleccionado) {
      case 1:
        let nombre = prompt("ingrese nombre del contacto nuevo");
        let telefono = prompt("ingrese telefono del contacto nuevo");
        if (nombre !== null && telefono !== null) {
          agenda.aniadirContacto(new Contacto(nombre, telefono));
        } else {
          alert("Ingrese un nombre y/o telefono correcto!.");
        }
        break;
      case 2:
          let nombreBuscar = prompt("ingrese nombre del contacto a buscar");
          let telefonoBuscar = prompt("ingrese telefono del contacto a buscar");
          if (nombreBuscar !== null && telefonoBuscar !== null) {
            agenda.existeContacto(new Contacto(nombreBuscar, telefonoBuscar));
          } else {
            alert("Ingrese un nombre y/o telefono correcto!.");
          }
        break;
      case 3:
        agenda.listarContacto();
        break;
      case 4:
          let contactoBuscar = prompt("ingrese nombre del contacto");
        if (contactoBuscar !== null) {
          agenda.existeContacto(nombreBuscar);
        } else {
          alert("Ingrese un nombre  correcto!.");
        }
        break;
      case 5:
          agenda.
        break;
      case 6:
          agenda.agendaLlena();
        break;
      default:
          agenda.huecosLibres();
        break;
    }
      } else {
        alert("Ingrese una opcion valida");
      }
    } while (!isNaN(nroSeleccionado));





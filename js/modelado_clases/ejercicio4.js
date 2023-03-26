/**
 * 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, 
 * además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
 * Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
 * Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */
let listado_producto = [];
class Producto{
    constructor(codigo=0, nombre="", precio=0.00){
        this._codigo = codigo;
        this._nombre = nombre; 
        this._precio = precio;                                                                                                          
    }
    get obtenerPrecio(){
        return this._precio;
    }
    get imprimirInformacionProducto(){
        return `Codigo: ${this._codigo} - Nombre: ${this._nombre} - Precio: ${this._precio}`;
    }
}

let cantidadProducto = parseInt(prompt("¿Cuantos Productos desea Ingresar?"));

if(!isNaN(cantidadProducto)){
    crearProductos(listado_producto,cantidadProducto);
}else{
    alert('ingrese una cantidad valida');
}

function crearProductos(array, cantidad){
    for (let i = 0; i < cantidad; i++) {
        let codigo = parseInt(prompt("Ingrese Codigo de Producto"));
        let nombre = prompt("Ingrese Nombre del Producto"); 
        let precio = parseInt(prompt("Ingrese Precio de Producto"));
         if(!isNaN(precio)&&!isNaN(codigo)&& nombre !== null){
            array[i] = new Producto(codigo, nombre, precio);
         }else{
            alert('ingrese un codigo y/o nombre y/o precio valido');
         }
    }
    mostarListadoProducto(listado_producto);
}
function mostarListadoProducto(array){
    let suma =0 ;
    document.write('<h1 >listado de productos </h1>'); 
    document.write('<ul>'); 
    array.forEach(producto => {
        document.write(`<li>${producto.imprimirInformacionProducto}</li>`);
        suma = suma + producto.obtenerPrecio;
    })
    document.write('</ul>'); 
    document.write('-------------------------------------------------------------------------'); 
    document.write(`<h2 style= "text-aling: left; ">TOTAL: $ ${suma}  </h2>`); 
}
console.log(listado_producto)
/**
 * crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) 
 * la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si 
 * queremos jugar otra vez.
*/

const movimiento = ["piedra","papel","tijera"];


document.write('<main>');
document.write('<section class="container">');
do {
let movimiento_pc = numeroRandom(0,2);
let movimiento_usuario = prompt('ingrese Movimiento: \n -piedra  \n -papel \n -tijera');
if(movimiento_usuario != null){
    piedraPapelTijera(movimiento_usuario,movimiento[movimiento_pc]);   
}else{
    alert('ingrese un movimiento valido!');
}
} while (confirm("¿Desea Jugar de Nuevo?"));
document.write('</section>');
document.write('</main>');

function piedraPapelTijera(movimientoUsurio, movimientoPC){
document.write('<p class="h1 text-center"> Piedra , Papel , Tijera </p>');
document.write('<article class= "row">');
document.write('<span class="col-xl-6 d" id="panel_pTp_usuario">');
document.write('<p class="h2 text-center"> Usuario </p>');
dibujarMovimiento(movimientoUsurio);
document.write('</span>');
document.write('<span class="col-xl-6 d-flex flex-column" id="panel_pTp_pc">');
document.write('<p class="h2 text-center"> PC </p>');
dibujarMovimiento(movimientoPC);
document.write('</span>');
document.write('</article>');
document.write('<article class= "row my-2">');
let ganador = verGanador(movimientoUsurio, movimientoPC);
document.write(`<p class="h2 text-center">Ganador: ${ganador} </p>`)
document.write('</article>');
}

function numeroRandom(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function dibujarMovimiento(movimiento){
    switch (movimiento) {
        case "piedra":
            document.write(`<div class="d-flex  justify-content-center"  id= "imagen_piedra"><img src="../img/piedra.png"></div>`);
            break;
            case "papel":
                document.write(`<div class="d-flex  justify-content-center" id= "imagen_papel"><img src="../img/papel.png"></div>`);
            break;
        default:
            document.write(`<div class="d-flex  justify-content-center"  id= "imagen_tijera"><img src="../img/tijera.png"></div>`);
            break;
    }
}
function verGanador(movimiento1 , movimiento2){
    if(movimiento1 === movimiento2){
        return "Empate entre el Usuario y la PC";
    }
    if(movimiento1 === "piedra" && movimiento2 === "tijera" || movimiento1 === "tijera" && movimiento2 === "papel" || movimiento1 === "papel" && movimiento2 === "piedra") {
        return "Gana el Usuario";
    }else{
        return "Gana PC";
    }
}
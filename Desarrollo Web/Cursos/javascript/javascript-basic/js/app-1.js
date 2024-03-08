/* comentario 
múltiples 
líneas  */

// comentario 1 línea

//el punto y como no es obligatorio pero es buena practica

//Arroja una alerta al navegador.
alert('Hola mundo');

//Aca se esta definicnedo una constante, el pront pide una vaeriable pero es unicamente del navegador.
const nombre = prompt('¿nombre?');

//document es el DOOM del sistema, el query es para seleccional algo, en este caso una clase .disp que es un p y insertando un texto

//Tener en cuenta que los get es del HTML y query son de CSS
document.getElementsByClassName('disp').innerHTML = `hola ${nombre}!!!`;

//Lanza una alerta al navegador con un texto
alert('console log');


// Imprime algo en la consola, en este caso un array
console.log([1,2,3,4,5]);

//Alerta en el navegador
alert('console table');

//Pasa el array tambien como el log pero de otra forma mas legible.
console.table([1,2,3,4,5]);

alert('console error');

//simplemente marca un error en la consola del navegador
console.error("un error");

//Solo marca un warm en consola
alert('console warning');

console.warn("una advertencia");

alert('console clear');

//para limpiar la consola
console.clear();

alert('console time');

//Es para activar un temporizador hasta que acaba el timeEnd
console.time("time");

console.warn("contando...");
console.warn("contando...");
console.warn("contando...");
console.warn("contando...");
console.warn("contando...");
console.warn("contando...");
console.warn("contando...");
console.warn("contando...");
console.warn("contando...");
console.warn("contando...");

console.timeEnd("time");
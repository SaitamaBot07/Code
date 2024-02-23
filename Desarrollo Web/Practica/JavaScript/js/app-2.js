"use strict"; //Restringie la sintaxys a la nuvea apartir de la 16

console.log('# Variables');

var oldVariable = 'esta es una variable vieja'; //esta es la vieja forma y las variables dependen del contexto y almacenado

console.log('oldVariable => '+ oldVariable);

oldVariable = 20;
console.log('oldVariable => '+ oldVariable);

oldVariable = true;
console.log('oldVariable => '+ oldVariable);

var oldPrototype = 123, name = 'old', lastname = "varible";

console.log(name);

//-------------------------------------------------------------------------

let vnueva = 'esta es una variable nueva';
console.log(vnueva);

const cnueva = 'esta es una constante u operador de referencia';
console.log(cnueva);

const object = {
    nombre: "pepe",
    apellido: "perez",
};
//se pueden anidar objetos en objetos

console.log(`${object.nombre} ${object.apellido}`); // es como la funcion f de python

let variable = 123;
console.log(variable);
variable = 'abc';
console.log(variable);
variable = "cadenas";
console.log(variable);
variable = true;
console.log(variable);
variable = false;
console.log(variable);

const constante = 'esto es constante';
// constante = 123;
console.log(constante);

object.nombre = "juan";
console.log(object);
//Se pueden cambiar los valores de un objeto

function hola() {
    console.log("ok");
    console.log("Hola");
    console.log("Mundo");
}

//Este es para usar la nomenclatura obligatoria despues de 2016, es recomendable.
"use strict";

//Variables 
console.log('# Variables');

var oldVariable = 'esta es una variable vieja';
console.log(`oldVariable => ${oldVariable}`);
//Var ya no se usa, solo se una let.


oldVariable = 20;
console.log('oldVariable => '+ oldVariable);

oldVariable = 20.2;
console.log('oldVariable => '+ oldVariable);


//Valor boleano
oldVariable = true;
console.log('oldVariable => '+ oldVariable);

oldVariable = false;
console.log('oldVariable => '+ oldVariable);


//Esto es que asignamos var a todas
var oldPrototype = 123, name = 'old', lastname = "varible";

console.log(name);


let vnueva = 'esta es una variable nueva';
console.log(vnueva);

const cnueva = 'esta es una constante u operador de referencia';
console.log(cnueva);


//Este es un objeto, lo que hace es que contiene variable o funciones.
const object = {
    nombre: "pepe",
    apellido: "perez",
};

// Creación de un objeto vacío utilizando el constructor Object
const persona = new Object();

// Añadir propiedades al objeto
persona.nombre = 'Juan';
persona.edad = 30;
persona.ciudad = 'Madrid';

// Acceder a las propiedades del objeto
console.log(persona.nombre); // Output: Juan
console.log(persona.edad);   // Output: 30
console.log(persona.ciudad); // Output: Madrid


console.log(`${object.nombre} ${object.apellido}`);

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

//redefinir el valor de una variable de un objeto
object.nombre = "juan";
console.log(object);


//Asi es como se puede escribir diferentes funciones
function hola() {
    console.log("ok");
    console.log("Hola");
    console.log("Mundo");
}

let a = 2;
let b = 4;
let c = 0;

function suma(a,b){
    return a + b;
}

const resta = function(a,b) {
    return a - b;
}

//Funciones flecha
const multi = (a,b) => {
    return a * b;
}

const div = (a,b) => a / b;

//Esto es con constructor de funcion pero no es recomendable
const suma1 = new Function('a', 'b', 'return a + b');

const operacion = {
    a: 'samir',
    suma: (a,b) => a + b,
};



console.log(suma(a,b))
console.log(resta(a,b))
console.log(multi(a,b))
console.log(div(a,b))
console.log(suma1(a,b))
console.log(operacion.suma(a,b))

console.log('# Numbers');

const numero1 = 20;
const numero2 = "20"; //cuando es string en la consola sale blanco y si es number sale morado

console.log(numero1 === numero2) // el = no existe, es == o ===
//si es == solo mira el valor, pero === mira el tipo de variable
console.log('---');

console.log(numero1);
console.log(numero2);

const numero3 = 20.20;
const numero4 = .102030;
const numero5 = Number(-20);
console.log(numero3);
console.log(numero4);
console.log(numero5);
console.log(typeof numero5);

const numero6 = new Number(80); //Solo acepta un valor
console.log(numero6);
console.log(typeof numero6);
console.log('---');

const n1 = 30;
const n2 = 20;

let resultado;
console.log(typeof resultado)

resultado = n1 + n2;
console.log(resultado);
resultado = n1 - n2;
console.log(resultado);
resultado = n1 * n2;
console.log(resultado);
resultado = n1 / n2;
console.log(resultado);
resultado = n1 % n2;
console.log(resultado);
console.log('---');


resultado = Math.PI; // * Math es una libreria que tiene otras funciones matematicas
console.log(resultado)

resultado = Math.round(2.8); // * Redonde el numero a entero mas cercano
console.log(resultado);
resultado = Math.round(2.2);
console.log(resultado);
resultado = Math.round(2.6);
console.log(resultado);
resultado = Math.round(2.5); // * e 0.5 en adelante redondea
console.log(resultado);
resultado = Math.round(2.4);
console.log(resultado);
console.log('---');

resultado = Math.ceil(2.1); // * redondea el número asi sea por un 0.1
console.log(resultado);
resultado = Math.floor(2.9); //* este redondea hacia abaja asi sea por un 0.9
console.log(resultado);
resultado = Math.sqrt(144); // * raiz
console.log(resultado);
resultado = Math.abs(-500); //* valor absoluto
console.log(resultado);
resultado = Math.pow(8, 3); //* potencia
console.log(resultado);
resultado = Math.min(3, 5, 12, -1); //* numero pequeño
console.log(typeof resultado)
console.log(resultado);
resultado = Math.max(3, 5, 12, -1);
console.log(resultado);


resultado = Math.random();  //* este solo da un rsultado entre 0 y  1
console.log(resultado);
resultado = Math.min(3,5,12,-1);
console.log(resultado);
resultado = Math.floor( Math.random() * 10 ) + 1;
console.log(resultado);
console.log('---');

let res; //*Operadores combinados
res = 20 + 30 * 2;
console.log(res);
res = (20 + 30) * 2;
console.log(res);
res = (20 + 30 + 40 + 50 +60) * 0.2;
console.log(res);
res = (20 + 30) * 1.16;
console.log(res);
console.log('---');

res = 5;
console.log(res);
res++; //* suma 1
console.log(res);
++res; //* suma 1
console.log(res);
res--; //*resta 1
console.log(res);
--res;
console.log(res);
res += 3; //* esto es igual a res = res + 3
console.log(res);
res -= 3;
console.log(res);
console.log('---');
//---------------------------------------
const n61 = [5.2,2]; //*No hay arrays como tal, se clasifican como objetos de tipo array
console.log(typeof n61)
const n62 = "20.2";
const n63 = "Uno";
const n64 = 20;

console.log(n61);
console.log(typeof n61);
console.log(parseInt(n61)); // ! Si es un array este metodo solo parsea el primero
console.log(typeof n61)
console.log(Number.parseFloat(n62)); //! en los parseos no es necesario invocar el number
console.log(Number.parseInt(n63)); // * da como resultado NaN Not a Number
console.log(Number.isInteger(n64)); //* este es un boolean
console.log(Number.isInteger(n63));
console.log('---');
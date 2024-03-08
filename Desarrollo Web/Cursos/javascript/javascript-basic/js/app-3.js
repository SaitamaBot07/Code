console.log('# Strings');
//Vale, string es una funcion que crea objetos string, mas no es necesario para definir una variable que contiene un string, pero solo lo hara si se agrega el new
const string1 = "Esto es una cadena\"";
const string2 = String('Esto es una cadena"');
const string3 = new String("Esto es una cadena de caracteres"); //Esta si es un objeto.
console.log(typeof string1);
console.log(typeof string2);
console.log(typeof string3);

const samir = (a,b) => a + b + 1
console.log(typeof samir)

console.log('##############');

const string4 = 'Esto es otra cadena';
console.log(string4);
console.log(string4.length); // cuenta el numero de caracteres
console.log(string4.indexOf('tra'));  //Esta funcion se puede usar en String, Array y Typearray, si no encuentra sera -1, si son varias letras es el indice de la primera
console.log(string4.indexOf('o', 4))
console.log(string4.includes('cadena')); //es para saber si incluye esta palabra

console.log('##############');

const stringa = 'cadena a';
const stringb = 'cadena b';
console.log(stringa.concat(stringb)); //concatena los strings
console.log(stringa.concat(' más otra candena c'));
console.log('cadena c ' + stringa + ' ' +  stringb);
console.log('cadena c', stringa, stringb);
console.log(`cadena c ${stringa} ${stringb}`);

console.log('##############');

let bigstring = '                        Cadena con muchos espacios   ';

console.log(bigstring);
console.log(bigstring.length);

console.log(bigstring.trimStart());//Elimina espacios en blanco de una cadena al inicio
console.log(bigstring.trimEnd()); //Elimina los espacios en blanco de una cadena al final

const bigstring2 = '                        Cadena con muchos espacios   ';
console.log(bigstring2.trimStart().trimEnd()); // se pueden agregar los dos metodos a la vez
console.log(bigstring2.trimStart().trimEnd().length);

const bigstring3 = '                        Cadena con muchos espacios   ';
console.log(bigstring3.trim());
console.log(bigstring3.trim().length); //Si se usa trim aplica las dos

console.log('##############');

const string5 = 'JavaScript is the world\'s most popular programming language'; //eso es para agregar comillas en el string el \

console.log(string5);

console.log(string5.replace("JavaScript", 'JavaPRO')); //Reemplaza una palabra por otra
console.log(string5.replace("is", 'JavaPRO')); 

console.log(string5.slice(0, 10));  //Extrae una cadena concreta de la cadena segun los el numero de caracteres, en este caso de 0 a 10
console.log(string5.slice(8)); // aca sera de 8 en adelante
console.log(string5.slice(-5)); //extraerlos al revez

console.log(string5.substring(0, 10)); // es parecido pero es mejor slice, no permite valores negativos

const usuraio = "Cadena 12345";
console.log(usuraio.substring(7,9));
console.log(usuraio.charAt(0)); //Accede al primer caracter de la cadena pero depende del argumento
console.log(usuraio.charAt(5)); //que hay en el indice
console.log(usuraio.indexOf('a',2)); // para buscar el indice

console.log('##############');

const string6 = 'is the world\'s most popular programming language ';

const text = ' JavaScript'.repeat(3); //Concatena el texto 3 veces
console.log(text);
console.log(`${text} ${string6}`);

console.log('##############');

const string7 = 'JavaScript is the world\'s most popular programming language';
console.log(string7.split(" "));

const string8 = 'Leer, caminar, escribir, caminar, aprender a programar';
console.log(string8.split(", "));

const string9 = "Javascript #JSModerno";
console.log(string9.split('a'));

//lo que hace es separa una cadena dependiendo de un caracter y la convierte en un array

console.log('##############');

const string10 = 'JavaScript is the world\'s most popular programming language ';

console.log(string10.toUpperCase()); //Pone todo en mayuscula
console.log(string10.toLowerCase()); //todo en minuscula


const numtostr = 300;
console.log(numtostr);
console.log(typeof numtostr);
console.log(numtostr.toString()); //combierte a string
console.log(typeof numtostr);

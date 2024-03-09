console.log('# Spread Operator');

const meses = ['Enero', 'Febrero', 'Marzo', 'abril', 'mayo'];
console.log(typeof meses)

console.table(meses);
console.table(meses.length);

for (let index = 0; index < meses.length; index++) {
    console.log(index);
    console.log(meses[index]);
}

// Spread Operator

console.log(...meses); //! este operador recorre cada argumento del array

const suma = (a,b) => a + b;
let numbers = [1,2]

console.log(suma(...numbers)) //* tambien le pondemos pasar argumentos a una función de una manera mas facil.

const bag  = [];
console.log(typeof bag)

// todo: Otro ejemplo uniendo arreglos

const semana1 = ['lunes', 'martes', 'miercoles']
const semana2 = ['jueves', 'viernes']

console.log(semana1.concat(semana2))
//* esto concatena los arreglos pero tambien los podemos hacer con el operador agregandolo al mismo areglo

const semana3 = [...semana1, ...semana2];

console.log(semana3)

//* Ahora con objetos


const producto1 = {
    name: "Moinitor Asus",
    precio: 200,
}

const producto2 = {
    name: "Celular",
    precio: 800,
}

const producto3 = {
    name: "Teclado",
    precio: 50,
}

//* esto es para agregar objetos a un array
let resultado = [...bag, producto1];
console.table(resultado);

resultado = [...resultado, producto2];
console.table(resultado);
resultado = [producto3, ...resultado];

console.table(resultado);

//* otro objeto en vez de un array

const samir = {
    sam: 'sam',
    jo: 'joseph',
}

const london = {
    london: 'london',
}

const shamir = {
    ...samir,
    ...london,
}

console.table(shamir)


//* esto es un array que contiene objetos
const shopcar = [
    { nombre: 'Monitor HP', precio: 700},
    { nombre: 'Televisión LG', precio: 1200},
    { nombre: 'Tablet Samsung', precio: 2000},
    { nombre: 'Audifonos Buen sonido', precio: 300},
    { nombre: 'teclado gammer', precio: 400},
    { nombre: 'Celular Iphone', precio: 18000},
];

console.log(shopcar.length + 'pai')


//* Manera clasica
for (let i = 0; i < shopcar.length; i++) {
    console.log(shopcar[i]);
}
console.log('--------------------')
//*aca se le asigna el valor del iterable a la variable, por eso se imprime i
for (const i of shopcar) {
    console.log(i); 
}

for (const i of shopcar) {
    console.log(i.nombre); 
}

//! solo funciona en arrays, mapas, conjuntos, pero no objetos
console.log('--------------------')
//* 
for (const itemcar in shopcar) {
    const shopcar1 = shopcar[itemcar]
    console.log(shopcar1)
    console.log(shopcar1.nombre + ' '+ shopcar1.precio);
}

const objeto = { a: 1, b: 2, c: 3 };
for (const key in objeto) {
    console.log(`${key}: ${objeto[key]}`);
}

//! Lo que pasa es que en un array el in itera sobre los indices, en un obejto itera sobre sus propiedades
console.log('--------------------')
shopcar.forEach((producto) => {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

//* El .map lo ue hace es crear un nuevo array, tal cual como un slice
console.log('--------------------')
const nmap = shopcar.map((producto) => {
    return (`${producto.nombre} - Precio: ${producto.precio}`);
});
console.log('--------------------')

console.log(nmap);
console.log(typeof nmap)


//* Objeto dentro de otro objeto

const item = {
    nombre: "Monitor lg 27'",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '2Kg',
            medida: '1m',
        },
        fabricacion: {
            pais: 'Colombia'
        }
    }
}

console.log(item);

const { nombre, informacion, informacion: { fabricacion: { pais } } } = item;

console.log(nombre);
console.log(informacion);
console.log(pais);

console.log(item.fabricacion.pais);



const fun = function fn(a,b) {
    return a + b;
}

fn(1,3);

fun(1, 3);

const fun2 = (a, b) => a + b;


fun2(1, 3);

const fun3 = (un) => {
    console.log("hace cosas");
    console.log("hace cosas");
    console.log("hace cosas");
    console.log("hace cosas");
    console.log("hace cosas");
    return "cosas";   

};
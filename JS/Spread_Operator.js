// Expande elementos de un array u objeto. 
// Util para copiar, combinar o pasar multiples argumentos

//Copiar arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log("Arr1: ", arr1);
console.log("Arr2: ", arr2);

//Combinar arrays
const combinado = [...arr1, 4, 5];
console.log("Array combinado: ", combinado);

//Copiar Objetos 
const obj1 = { a: 1};
const obj2 = { ...obj1, b: 2};
console.log("Objeto 1: ", obj1);
console.log("Objeto 2: ", obj2);

//Ejercicios
//1

const frutas1 = ['Banano', 'Manzana', 'Pinapple', 'Pera'];
const frutas2 = ['Lulo', 'Maracuya', 'Pinapple', 'Fresas'];

//const frutas3 = [...frutas1, ...frutas2];

const frutas3 = new Set();

for(let i = 0; i < frutas1.length; i++){
    frutas3.add(frutas1[i]);
}

for(let i = 0; i < frutas2.length; i++){
    frutas3.add(frutas2[i]);
}

console.log(frutas3);

//2

const producto = {
    nombre: 'liquido verde radioactivo',
    precio: 500000,
    stock: 10
}

console.log(producto);
const producto2 = {...producto, stock: 5};
console.log(producto2);

//3

const propiedades1 = {
    margin_top: 90,
    margin_rigth: 90,
    margin_bottom: 90,
    margin_left: 90,
};

const propiedades2 = {
    font_family: 'Times New Roman',
    margin_rigth: 10,
    color: 'Mlue',
    margin_left: 10,
};

let propiedadesFinal = {
    ...propiedades1,
    ...propiedades2
}


console.log(propiedadesFinal);
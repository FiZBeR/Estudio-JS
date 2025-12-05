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
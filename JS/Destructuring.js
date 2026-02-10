//Permite extraer valores de arrays u objetos y asignarlos
// a variables de forma consisa.

//Arrays
const colores = ['rojo', 'verde', 'azul'];
const [primero, segundo] = colores;
console.log(primero);

//Objetos
const persona = { nombre: 'Cristian', edad: 25};
const {nombre, edad} = persona;
console.log(nombre);

//Con valores por defecto
const { ciudad = 'Bogota' } = persona;
console.log(persona);

//Ejercicios

//1
let valor1 = 'StarWars';
let valor2 = 'The legend of Zelda';

let estructura = [ valor2, valor1];
console.log(estructura);
[valor1, valor2 ] = estructura;
console.log(valor1 + " " + valor2);

//2
const Datos = {
    nombre2: 'Santiago',
    apellido: 'Fernandez',
    email: 'mjhg@gmail.com',
    edad: 19,
    ciudad2: 'Desconocida'
}

const { nombre2, email} = Datos;
console.log(nombre2 + " " + email + " " + Datos.ciudad2);

//3

const numeros = [ 1, 2, 3, 4, 5, 6];

const [inicial, ...resto] = numeros;
const ultimo = resto[resto.length - 1];
console.log(numeros)
console.log("Primero: " + inicial + " Ultimo: " + ultimo);

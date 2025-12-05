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
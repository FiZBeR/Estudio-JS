// Stringd con interpolacion de variables y multiples lineas
//usando backticks (`)

const nombre = 'Carlos';
const edad = 25;
const saludo = `Hola, soy ${nombre} y tengo ${edad}`;
console.log(saludo);

//Multiples lineas
const texto = `
    Primera linea
    Segunda Linea
`;

console.log(texto);

//Ejercicios
//1

const texto1 = {
    nombre: 'Cristian',
    edad: 25,
    profesion: 'Ing de Software'
}

function generarTexto(texto) {
    const { nombre, edad, profesion} = texto;
    return `${nombre} es un ${profesion} de ${edad} años`
}

console.log(generarTexto(texto1));
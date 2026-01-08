//MAP
//Se usa para transformar cada elemento de un arreglo en algo nuevo

const datos = [{nombre: 'Cristian', id: 10}, {nombre: 'Santiago', id: 11}, {nombre: 'Maria', id: 12}]

datos.map((u) => console.log('Usuario numero: ' + u.id + " y su nombre es: " + u.nombre));

//FILTER
//Crea un nuevo arreglo con los elementos que cumplen una condición.

const primer_usuario = datos.filter((u) => u.id == 10);
console.log(primer_usuario);

//REDUCE
//


//EJERCICIOS
console.log('EJERCICIOS');

// 1. Transformación de IDs (Map)

// Tienes un arreglo de objetos que vienen de una base de datos con el campo _id. React prefiere id. Crea un nuevo arreglo donde el campo se llame id.

//     Dato: [{ _id: 'a1', name: 'Product 1' }]


const data = [{ _id: 'a1', name: 'Product 1' }];

const data_transformada = data.map(item => ({
    id: item._id,
    nombre: item.name
}))

console.log('1) ' , data_transformada);

// 2. Buscador Simple (Filter)

// Crea una función que reciba un arreglo de nombres y un "string" de búsqueda. Debe devolver solo los nombres que incluyan ese string, sin importar mayúsculas o minúsculas.

const nombres = ['Cristian', 'Mariana', 'Santiago', 'Mireya', 'Antonio'];
const filtro = 'Mariana';

const nombres_filtrados = nombres.filter(item => item === filtro);

console.log('2) ' + nombres_filtrados);


// 3. El "Total" del Carrito (Reduce)

// Tienes un carrito: [{ name: 'Pan', price: 1.5, qty: 2 }, { name: 'Leche', price: 2, qty: 1 }]. Calcula el precio total a pagar considerando las cantidades.

const carrito = [
    { name: 'Pan', price: 1.5, qty: 2 },
    { name: 'Leche', price: 2, qty: 1 },
    { name: 'Huevos', price: 3.5, qty: 3 },
    { name: 'Arroz', price: 2.8, qty: 1 },
    { name: 'Pasta', price: 1.2, qty: 4 },
    { name: 'Tomate', price: 0.8, qty: 5 },
    { name: 'Queso', price: 4.5, qty: 1 },
    { name: 'Pollo', price: 6.0, qty: 2 },
    { name: 'Manzanas', price: 2.5, qty: 3 },
    { name: 'Café', price: 5.2, qty: 1 }
  ];

const total_compras = carrito.reduce((acc, item) => {
    return item.price += acc;
}, 0);

console.log('3) ' + total_compras);

// 4. Destructuring de Props

// Imagina que recibes un objeto props. Extrae name, email y city (que está dentro de address), pero si email no existe, debe ser por defecto "No provisto".

const props = { name: 'Luis', address: { city: 'Madrid' } }
const { name, address: {city}, email = 'No Provisto'} = props;

// 5. Actualización Inmutable (Spread)

// Tienes un estado de usuario: const user = { name: 'Ana', gold: 10, items: ['espada'] }. Crea un nuevo objeto updatedUser que tenga 20 de gold y agregue 'escudo' a la lista de items sin modificar el original.

const userOld = { name: 'Ana', gold: 10, items: ['espada'] };
const updatedUser = {...userOld, gold: 20, items: [...userOld.items, 'escudo']};

console.log('5) ', updatedUser);

// 6. Eliminación de un elemento (Filter)

// Tienes una lista de tareas: [{ id: 1, text: 'A' }, { id: 2, text: 'B' }]. Crea una función que reciba un id y devuelva una nueva lista sin esa tarea. (Así es como se borra en React).

const tareas = [
    { id: 1, text: 'Comprar víveres para la semana' },
    { id: 2, text: 'Terminar el proyecto de React' },
    { id: 3, text: 'Llamar al dentista para cita' },
    { id: 4, text: 'Estudiar JavaScript avanzado' },
    { id: 5, text: 'Hacer ejercicio por 30 minutos' },
    { id: 6, text: 'Revisar correos pendientes' },
    { id: 7, text: 'Preparar presentación para el lunes' },
    { id: 8, text: 'Leer capítulo del libro de programación' },
    { id: 9, text: 'Organizar escritorio de trabajo' },
    { id: 10, text: 'Practicar algoritmos en LeetCode' }
  ];

const filtro_dos = 4;

const tareas_filtradas = tareas.filter(item => item.id !== filtro_dos);

console.log('6) ', tareas_filtradas);

// 7. Extracción de datos únicos (Set + Map)

// Tienes una lista de productos con categorías repetidas. Devuelve un arreglo que solo tenga las categorías únicas (ideal para crear filtros de navegación).


const lista_duplicada = [1, 2, 3, 2, 4, 5, 3, 6, 1, 7, 4, 8, 2, 9, 5];
let set = new Set(lista_duplicada);

console.log('7) ', set);

// 8. El "Toggle" de estado (Map + Spread)

// Tienes una lista de notificaciones: [{ id: 1, read: false }, { id: 2, read: false }]. Crea una función que reciba un id y devuelva la lista donde solo esa notificación tenga read: true.

const notificaciones = [
    { id: 1, read: false },
    { id: 2, read: true },
    { id: 3, read: false },
    { id: 4, read: false },
    { id: 5, read: true },
    { id: 6, read: false },
    { id: 7, read: true },
    { id: 8, read: false },
    { id: 9, read: false },
    { id: 10, read: true }
  ];

  const filtro_tres = 5;

const notificaciones_leidas = notificaciones.map(item => item.id === filtro_tres ? {...item, read: true} : item);

console.log('8) ', notificaciones_leidas);

// 9. Merge de Configuración (Spread)

// Tienes una configuración por defecto y una configuración de usuario. Crea un objeto final que combine ambas, donde la del usuario gane si hay repetidas.

const default_settings =  { theme: 'light', lang: 'es', fontSize: 16 };

const user_settings = { theme: 'dark' };

const all_settings = {...default_settings, ...user_settings};

console.log('9) ', all_settings);


// 10. Agrupador de tipos (Reduce avanzado)

// Tienes una lista de animales: [{ name: 'Rex', type: 'dog' }, { name: 'Misi', type: 'cat' }, { name: 'Firulais', type: 'dog' }]. Devuelve un objeto que diga cuántos hay de cada tipo: { dog: 2, cat: 1 }.

const animales = [
    { name: 'Rex', type: 'dog' },
    { name: 'Misi', type: 'cat' },
    { name: 'Firulais', type: 'dog' },
    { name: 'Luna', type: 'cat' },
    { name: 'Max', type: 'dog' },
    { name: 'Pelusa', type: 'cat' },
    { name: 'Rocky', type: 'dog' },
    { name: 'Nieve', type: 'cat' },
    { name: 'Toby', type: 'dog' },
    { name: 'Garfield', type: 'cat' },
    { name: 'Bruno', type: 'dog' },
    { name: 'Whiskers', type: 'cat' }
];

const lista_tipos_animales = animales.reduce((acc, animal) => {
  const raza = animal.type;
  if(!acc[raza]){
    acc[raza] = 0;
  }

  acc[raza]++;
  return acc;
}, {});

console.log('10) ', lista_tipos_animales);

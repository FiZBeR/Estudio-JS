// DataSet
const productos = [
  { id: 1, nombre: "Laptop", precio: 1000, categoria: "Tecnología", stock: 5 },
  { id: 2, nombre: "Teclado", precio: 50, categoria: "Tecnología", stock: 0 },
  { id: 3, nombre: "Mesa", precio: 150, categoria: "Muebles", stock: 10 },
  { id: 4, nombre: "Silla", precio: 80, categoria: "Muebles", stock: 4 },
  {
    id: 5,
    nombre: "Auriculares",
    precio: 200,
    categoria: "Tecnología",
    stock: 3,
  },
  { id: 6, nombre: "Monitor", precio: 300, categoria: "Tecnología", stock: 2 },
];

const usuarios = [
  { id: 1, nombre: "Ana", carrito: [1, 2] },
  { id: 2, nombre: "Beto", carrito: [3] },
];

//Nivel 1
console.log("Ejercicios Nivel 1");

//Imprime solo los nombres de los productos
const nombres_productos = productos.map(produc => console.log(`${produc.nombre}`));

//Productos que cuestan mas de 100
const productos_mayores_100 = productos.filter(product => product.precio > 100);
console.log(productos_mayores_100);

//Busca el producto con el ID 3
const producto_id_3 = productos.find(product => product.id === 3);
console.log(producto_id_3)

//Productos sin stock
const sin_stock = productos.some(product => product.stock === 0);
console.log(sin_stock)

//Todos los productos tienen un precio mayor a 0
const precio_mayor_0 = productos.every(product => product.precio > 0);
console.log(precio_mayor_0);


//Nivel 2
console.log("Ejercicios Nivel 2");

//Obtén los nombres de los productos de "Tecnología" que cuesten menos de 500
const productos_tech = productos.filter(products => products.categoria == 'Tecnología');
const nombre_productos_tech = productos_tech.map(product => console.log(product.nombre));

//Crea un array de frases tipo: "El producto [Nombre] cuesta $[Precio]".
const template = productos.map(product => console.log(`El producto ${product.nombre} cuesta ${product.precio}`));

//Recorre el array con .forEach y usa destructuring directamente en los parámetros para imprimir nombre y precio.
const desestructuracion = productos.forEach(product => {
    const { nombre, precio} = product;
    console.log(nombre + ' ' + precio); 
})

//Ordena los productos por precio de menor a mayor
const mayor_menor = [...productos].sort((a, b) => {
    return a.precio - b.precio
})
console.log(mayor_menor);

//Sube el precio de todos los productos un 10% y devuelve el nuevo array de objetos.
const precios_10 = [...productos].map((product) => {
    precio = product.precio
    product.precio = precio + (precio * 0.10)
    return product
});

console.log(precios_10);

//Nivel 3
console.log("Ejercicios Nivel 3");

//Calcula el valor total de todo el inventario
const valor_total = productos.reduce((acc, producto) => {
    let producto_valor = producto.precio * producto.stock
    return acc += producto_valor
}, 0);

console.log(valor_total);

//agrupar productos por categoría
const categorias = productos.reduce((acc, producto) => {
    
    return acc
}, []);

console.log(categorias);

//Dado el usuario "Ana" (id 1), muestra los objetos completos de los productos que tiene en su carrito. (Combina usuarios y productos).
const carrito_compras = productos.reduce((acc, producto) => {

    const id = 1;
    const carrito_usurario = usuarios.find(user => user.id == id);

    const { carrito } = carrito_usurario;

    if(carrito.includes(producto.id)){
        acc.push(producto)
    }

    return acc;
}, []);

console.log(carrito_compras);


//Nivel 4
console.log("Ejercicios Nivel 4");

//Crea una función fakeFetch que reciba un ID y devuelva una Promesa. 
//Si el ID es menor a 10, resuelve con el producto; si no, rechaza con error.

const fakeFecth = (id) => {

    return new Promise((resolve, reject) => {
        if(id <= 10){
            const productos_elegido = productos.find(product => product.id == id);
            resolve(productos_elegido);
        } else {
            reject('Id no encontrado');
        }
    })

}

//Usa async/await para llamar a fakeFetch(1) y muestra el nombre del producto usando destructuring.

const fake_Fetch = async () => {
    try {
        const respuesta = await fakeFecth(89);
        const { nombre } = respuesta;
        console.log(nombre);

    } catch (error) {
        console.log(error)
    }
}

fake_Fetch()
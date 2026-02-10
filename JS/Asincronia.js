// La asincronía es el arte de esperar sin bloquear.
// Si bloqueas el hilo principal, la web se congela y el usuario se va.

//1. Promesas (.then / .catch)

// Una promesa es un objeto que representa un valor que estará disponible ahora, en el futuro o nunca.
// despues de hacer nuestro llamado a nuestra promesa asincronica usamos las palabras reservadas then y catch, estas nos
// ayudaran a decirle a nuestro programa que hacer si nuestra promesa es resuekta satisfactoriamente o no, cuando nuestra promesa se cumple 
// el codigo a seguir lo escribiremos dentro de nuestro .then() siguiendo asi con el proceso que deba suceder.

// Pero si no, usamos el .catch() que funciona para capturar los errores y evitar que nuestro programa colapce, crache o se bloquee

// fetch('https://rickandmortyapi.com/api/character')
//     .then(res => res.json())
//     .then(data => console.log('Respuesta .then: ',data))
//     .catch(error => console.log('Error: ' + error))

//2. Async / Await

// Hace que el código asíncrono parezca síncrono.
//En este caso tenemos las palabras reservadas async / await, con la primera le decimos a JS que lo siguiente es una funcion asincronica asi
// que no tendremos una respuesta inmediata, y con la segunda palabra reservada lo que hacemos es decirle exactamente al programana cual es
// la variable que debera esperar 

// De esta forma es importanticimo manejar el try/catch con el cual manejaremos los errores y evitaremos que nuestra aplicacion colapce 

const getPost = async () => {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();

        
        const final_data = data.results.filter((item) => item.id <= 5);
        console.log('Respuesta Async/Await: ', final_data);
        return final_data;
    } catch (error) {
        console.error('Error: ', error);
    }
}

getPost();

//Promise.all
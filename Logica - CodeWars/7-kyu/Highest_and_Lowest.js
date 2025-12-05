const prueba= "1 9 3 4 -5"; // return "5 1"
const cadena = prueba.split(" ");
const cadena_entera = cadena.map(str => +str);

console.log(cadena_entera);

let mayor = cadena_entera[0];
let menor = cadena_entera[0];

for(let i = 0; i < cadena_entera.length; i++){
    if(mayor < cadena_entera[i]){
        mayor = cadena_entera[i]
    }
}

for(let i = 0; i < cadena_entera.length; i++){
    if(menor > cadena_entera[i]){
        menor = cadena_entera[i]
    }
}

console.log(mayor + " " + menor);
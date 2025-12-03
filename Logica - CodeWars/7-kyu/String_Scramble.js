const cadena_inicio = 'abcd';
const orden_inicio = [0,3,1,2];

const nueva_cadena = cadena_inicio.split("");

console.log("-------------------------------------------------");
console.log(orden_inicio[0] + " " + orden_inicio[1] + " " + orden_inicio[2] + " " + orden_inicio[3])
console.log("-------------------------------------------------");

let output = [];
let str = '';

//--------------------------------------------------------

for(let i = 0; i < nueva_cadena.length; i++){
    output[orden_inicio[i]] = nueva_cadena[i]
}


for(let i = 0; i < output.length; i++){
    str += output[i]
}
//--------------------------------------------------------
console.log("salida: " + str);
console.log("Salida: acdb");
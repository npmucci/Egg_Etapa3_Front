var arrayA = [];
var arrayB = [];

for (let i = 0; i < 50; i++) {
    arrayA[i] = Math.floor(Math.random() * 100); // Genera un número entero entre 0 y 99
}

arrayA.sort((a, b) => a - b); // ordenamos el array usando una funcion flecha que resta dos valores y en
//funcion a esa resta los ordena de menor a mayor

for (let i = 0; i < 10; i++) {
  arrayB[i] = arrayA[i]
}
for (let i = 10; i < 20; i++) {
  arrayB[i] = 0.5
}


alert(`Arrays completos
Array 1: [${arrayA}]
Array 2:  [${ arrayB}]`);

var array1 = [];
var array2 = [];

for (let i = 0; i < 5; i++) {
    array1[i] = Math.floor(Math.random() * 100); // Genera un número entero entre 0 y 99
    array2[i] = Math.floor(Math.random() * 100); // Genera un número entero entre 0 y 99
}

alert(`Array 1: [${array1}]`);
alert(`Array 2:  [${ array2}]`);
var array1 = [];
var array2 = [];

for (let i = 0; i < 5; i++) {
    array1[i] = Math.floor(Math.random() * 100); // Genera un número entero entre 0 y 99
    array2[i] = Math.floor(Math.random() * 100); // Genera un número entero entre 0 y 99
}

alert(`Arrays completos
Array 1: [${array1}]
Array 2:  [${ array2}]`);

//eliminar elementos
var ultimoElemento1= array1.pop();
var ultimoElemento2= array2.pop();
alert(`El elemento eliminado del array 1 es ${ultimoElemento1}
El elemento eliminado del array 2 es ${ultimoElemento2}`)

alert(`Arrays nuevos\n
Array 1: [${array1}]
Array 2:  [${ array2}]`);


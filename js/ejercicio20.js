// Matriz original
var matriz = [[3], [6], [9], [12], [15]];

// Crear el array resultante con map, map reccore cada elemento del array y le aplica la
//funcion que nosotros definimos, en este caso que multiplique a cada elemeto por 2
//subarray es un parámetro que representa cada elemento del array y como la matriz esta compuesta
//por arrays de un solo elemento, cada subarray es unicamente la posicion 0
var arrayNuevo= matriz.map(function(subarray) {
    return subarray[0] * 2;
});

// Mostrar el array resultante
alert(`El array original es ${matriz}`)
alert(`El array multiplicado por dos es : ${arrayNuevo}`);

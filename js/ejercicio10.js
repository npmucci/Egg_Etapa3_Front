var frase = prompt("Ingrese una frase");

// verifico que no ingrese un número
while (!isNaN(frase)) {
  frase = prompt("Los datos ingresados son incorrectos, ingrese una frase");
}

// con el split lo que hago es separar cada caracter y convertilo en un array
//con el reverse invierto el array
//con el join junto los elementos del array(los caracteres de la plabra) en un string
var fraseAlReves = palabra=>palabra.split("").reverse().join("");

alert(`La palabra ingresada al reves = ${fraseAlReves(frase)}`)



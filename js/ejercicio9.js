var frase = prompt("Ingrese una frase");
// verifico que no ingrese un número
while (!isNaN(frase)) {
  frase = prompt("Los datos ingresados son incorrectos, ingrese una frase");
}

var fraseNueva = "";  // Crear una variable para acumular los caracteres

for (i = 0; i < frase.length; i++) {
  fraseNueva += frase[i] + " ";  // Acumular los caracteres y agregar un espacio
}


alert(`La frase nueva es ${fraseNueva}`);
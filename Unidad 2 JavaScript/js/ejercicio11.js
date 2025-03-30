var frase = prompt("Ingrese una frase:");

// verifico que no ingrese un número
while (!isNaN(frase)) {
  frase = prompt("Los datos ingresados son incorrectos, ingrese una frase");
}


function palabraMasLarga(frase) {
  //primero divido la frase y la convierto en un array de palabras (separo por espacio entre palabras)
  let palabras = frase.split(' ');
  let palabraMasLarga = '';

 //recorro con un for of todo el array de palabras y en cada iteración
//comparo la longitud de la palabra con la anterior y veo cual es mas larga, la palabra 
 //mas larga la guardo en la variable palabraMasLarga y asi con todas las palabras del array
 for (let palabra of palabras) {   
 if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  }

  return palabraMasLarga;
}




alert(`La palabra más larga es: ${palabraMasLarga(frase)}`);

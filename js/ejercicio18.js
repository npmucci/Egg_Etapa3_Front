var valores = [true, 5, false, "hola", "adios", 2];

var bolean1, bolean2, numero1, numero2, string1, string2;

// recorro con un bucle for el array y verifico el tipo de dato y guardo
//cada dato en una variable para despues usarlo en las funciones
//undefined lo utilizo para verificar si la variable tiene o no un valor asignado
for (let i = 0; i < valores.length; i++) {
  if (typeof valores[i]== "string") {
    if (string1 === undefined) {
      string1 = valores[i];
    } else {
      string2 = valores[i];
    }
  }
   if (typeof valores[i] == "number") {
    if (numero1 === undefined) {
      numero1 = valores[i];
    } else {
      numero2 = valores[i];
    }
  }
  if (typeof valores[i] == "boolean") {
    if (bolean1 === undefined) {
      bolean1 = valores[i];
    } else {
      bolean2 = valores[i];
    }
  }

}


//a) determinar cual de las dos cadenas es mas larga

function cadenaMasLarga(cadena1, cadena2) {
  if (cadena1.length == cadena2.length) {
    alert(`La palabra ${cadena1} y ${cadena2} tienen el mismo largo`);
  } else if (cadena1.length > cadena2.length) {
    alert(`La palabra ${cadena1} es mas larga que ${cadena2}`);
  } else {
    alert(`La palabra ${cadena2} es mas larga que ${cadena1}`);
  }
}

//b) Utilizando  exclusivamente  los  dos  valores  booleanos  del  array,  determinar  los
//operadores necesarios para obtener un resultado true y otro resultado false

function valoresBoleanos(bolean1, bolean2) {
  var resultado1 = bolean1 || bolean2; // el resultado es verdadero si alguno de los valores es veradero
  var resultado2 = bolean1 && bolean2; // el resultado es veradero solo si ambos son veraderos, por lo tanto da falto

  alert(`Los tipos de datos booleanos son:
  ${resultado1} y ${resultado2}`);
}

//c) Determinar  el  resultado  de  las  cinco  operaciones  matemáticas  realizadas  con  los
//dos elementos numéricos

function operacionesMatematicas(numero1, numero2) {
  var suma = numero1 + numero2;
  var resta = numero1 - numero2;
  var multiplicacion = numero1 * numero2;
  var division = numero1 / numero2;
  var modulo = numero1 % numero2;
  alert(`La suma de los números ${numero1} y ${numero2} es : ${suma}
La resta de los números ${numero1} y ${numero2} es : ${resta}
La multiplicación de los números ${numero1} y ${numero2} es : ${multiplicacion}
La división de los número ${numero1} y ${numero2} es : ${division}
El módulo de los números ${numero1} y ${numero2} es : ${modulo}
`);
}

cadenaMasLarga(string1, string2);
valoresBoleanos(bolean1, bolean2);
operacionesMatematicas(numero1, numero2);

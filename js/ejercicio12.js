/*var tipoDato = dato => alert(`El tipo de dato es = ${typeof(dato)}`)

var imput = prompt("Ingrese un dato")

tipoDato(imput)
*/


//version con diferentes tipos de datos
var entrada = prompt("Ingrese un dato:");

var VertipoDeDato = valor => {
  if (!isNaN(valor)) {
      return "number";
  } else if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
    return "boolean";
  } else if (valor === "null") {
    return "null";
  } else {
    return "string";
  }
};


alert(`El dato ingresado es de tipo: ${VertipoDeDato(entrada)}`);

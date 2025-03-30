//pedimos el valor limite y verificamos que sea válido
var valorInicial = parseInt(prompt("Ingrese un número positivo"));

while(isNaN(valorInicial) || valorInicial < 0){
  valorInicial = parseInt(prompt("La información ingresada no es válida, por favor ingrese un número positivo"))
}

//aramamos la funcion con un sumador para que vaya sumando los números ingresados
function valorLimite(limite) {
let sumador = 0
do{
  //pedimos un nuevo número y verificamos que sea un número válido
 let numero = parseInt(prompt("Ingrese otro número positivo"))
 while(isNaN(numero) || numero<0){
  numero = parseInt(prompt("La información ingresada no es válida, por favor ingrese un número positivo"))
}
 sumador +=numero //sumamos el numero ingresado
}while(sumador <= valorInicial)
alert(`La suma de los números ingresados es ${sumador}`)
}
//llamamos la función
valorLimite(valorInicial)
  
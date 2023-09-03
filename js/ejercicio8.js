
//armamos la funcion con un sumador, una variable para el número máximo, una variable para 
//el número mínimo y un contador para saber cuantos número se ingresaron
function calculos() {
let sumador  = 0;
let contador = 0;
let numeroMaximo = -Infinity;
let numeroMinimo = +Infinity;
do{
  //pedimos un nuevo número y verificamos que sea un número válido
  var numero = parseInt(prompt("Ingrese un número positivo y si quiere salir ingrese 0"));
  while (isNaN(numero)) {
    numero = parseInt(prompt("La información ingresada no es válida, por favor ingrese un número valido"));
  }

// comparamos el numero ingresado con el anterior para ver cual es mas grande
if (numero > numeroMaximo) {
      numeroMaximo = numero;
    }

// comparamos el numero ingresado con el anterior para ver cual es mas chico y descartamos y cero
if (numero < numeroMinimo && numero !==0) {
  numeroMinimo = numero;
}

 sumador +=numero //sumamos el numero ingresado
 contador +=1  //contamos cuantos numeros se van ingresando

}while(numero !==0)

let promedio = sumador/(contador-1) // para no contar el cero
alert(`El número  Máximo ingresado es = ${numeroMaximo}\n
       El número Mínimo ingresado es = ${numeroMinimo} \n
       El promedio de los números ingresados es  = ${promedio}`)
}
//llamamos la función
calculos();
  
alert("Hola soy tu calculadora personal")
//validar que ingrese bien el número 1

var numero1= parseFloat( prompt("Ingresa el primer número"))

while(isNaN(numero1)){
  numero1 = parseFloat( prompt(`Los datos ingresados son incorrectos.\n
  Por favor ingresa un número válido`))
}

//validar que ingrese bien el número 2
var numero2= parseFloat( prompt("Ingresa el segundo número"))
while(isNaN(numero2)){
  numero2 = parseFloat(prompt(`Los datos ingresados son incorrectos.\n
  Por favor ingresa un número válido`))
}

// funciones para las distintas operaciones
function suma(numero1,numero2){
  return (numero1 + numero2)
  }
  function resta(numero1,numero2){
    return (numero1 - numero2)
    }
  function multiplicacion(numero1,numero2){
      return (numero1 * numero2)
      }
  function division(numero1,numero2){
        return (numero1 / numero2)
        }

//validar que ingrese bien el caracter
var operacion = prompt(`Ingrese la operación a realizar(S,R,M,D) \n
      - SUMA \n
      - RESTA\n
      - MULTIPLICACION\n
      - DIVISION`
);

while(operacion!="s" && operacion!="S" && operacion!="r" && operacion!="R" && operacion!="m" && operacion!="M" && operacion!="d" && operacion!="D"){
  operacion =prompt(`La opciónn ingresada es incorrecta.\n
  Ingrse una opción válida: S,R,M,D`)
}

//de acuerdo a la opcion ingresada llamo a la funcion correspondiente
switch(operacion){
  case "s": 
  case "S": alert(`La suma de los número es = ${suma(numero1,numero2)}`);
  break
  case "r": 
  case "R": alert(`La resta de los números es = ${resta(numero1,numero2)}`);
  break
  case "m": 
  case "M": alert(`La multiplicación de los números es = ${multiplicacion(numero1,numero2)}`);
  break
  case "d": 
  case "D":
    if(numero1==0){
      numero1= parseFloat(prompt("No se puede dividir por cero, ingrese otro número"));
    }
    else if(numero2==0){
      numero2 = parseFloat(prompt("No se puede dividir por cero, ingrese otro número"));
    }
      alert(`La división de los números es = ${division(numero1,numero2)}`);
    
      

}
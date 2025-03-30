var input = parseInt(prompt("Ingrese un número"));

while(isNaN(input)){
  input = parseInt(prompt("La información ingresada no es válida, por favor ingrese un número"))
}


function parOImpar(numero) {
  if(numero == 0){
    alert(`El número ingresado es cero`)
  } else if(numero % 2 == 0 ){
    alert(`El número ingresado ${numero} es par`)
  } else{
    alert(`El número ingresao ${numero} es impar`)
  }
}

parOImpar(input)
  
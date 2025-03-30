  // Solicitar input al usuario
  var imput = prompt('Por favor ingresa un caracter (S/N):');
   // Convertir input a mayúsculas para ser case-insensitive
   imput = imput.toUpperCase();

// Función para validar el input
function validar(caracter) {
    if (caracter == 'S' || caracter == 'N') {
      alert('CORRECTO');
    } else {
      alert('INCORRECTO');
    }
  }
  
window.onload = function(){
    validar(imput);
}
  
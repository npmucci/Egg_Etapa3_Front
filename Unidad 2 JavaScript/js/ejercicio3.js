//verificamos que el dato ingresado sea correcto
do{
    var edad = parseInt(prompt ("Ingrese su edad"));
}while(isNaN(edad) || (edad<0))

//armamos la funcion para verificar la edad
function verificarEdad(edad){
    if(edad >= 18){
        alert('Es mayor de edad')
    } else{
        alert('Es menor de edad')
    }

}

// Definimos una función que se ejecutará cuando la ventana haya cargado
window.onload = function() {
    verificarEdad(edad); // Llamamos a la funcion
};
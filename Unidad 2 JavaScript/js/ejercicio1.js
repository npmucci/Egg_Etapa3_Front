do{    
    var estadoDelDia = prompt("¿Como esta el dia de hoy (soleado, nublado, lloviendo)?");
   
}while(estadoDelDia != "soleado" && estadoDelDia != "nublado" && estadoDelDia != "lloviendo");

window.onload = function(){
alert("El clima esta " + estadoDelDia);
}
//primero verificamos que cargue un dato numerico
do{
    var radio = parseInt(prompt ("Ingrese el radio de la circunferencia"));
}while(isNaN(radio))

function area(radio){
    return Math.PI*(Math.pow(radio,2))   
 }

 function perimetro(radio){
   return 2*Math.PI*radio
   
 }

    window.onload = function(){
        var calculoArea = (area(radio)).toFixed(2);
        var calculoPerimetro = (perimetro(radio)).toFixed(2);
        alert(`El area de la circunferencia es = ${calculoArea} \n El perimetro de la circunferencia es = ${calculoPerimetro}`);
     } 
 

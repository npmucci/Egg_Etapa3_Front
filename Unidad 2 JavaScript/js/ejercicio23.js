function parrafoAmarillo(){
var parrafo = document.getElementById("parrafo");// primero obtengo el parrafo y lo guardo en una variable
var palabras= parrafo.textContent.split(" ") // despues con el textContent traigo solo el texto del parrafo y lo separo por palabras

// Si la palabra es más larga que 8 caracteres, rodeas la palabra con una etiqueta span y le das la clase
 //"resaltar",para aplicar el estilo CSS que hace que la palabra tenga fondo amarillo.
for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length > 8) {
    palabras[i] = '<span class="resaltar">' + palabras[i] + '</span>';
  }
}

//con el join vuelvo a unir las palabras en un solo texto y lo establezco como nuevo contenido el parrafo
//el innerHTML me permite escribir en el html desde el js y remplazo lo que tome en al linea 4
parrafo.innerHTML = palabras.join(" "); 
}

function despintar(){
  var parrafo = document.getElementById("parrafo");
  var palabras= parrafo.textContent.split(" ") 
  for (let i = 0; i < palabras.length; i++) {
   
      palabras[i] = palabras[i] ;
      parrafo.innerHTML = palabras.join(" "); 
    
  }
}

document.getElementById("pintar").onclick = parrafoAmarillo;
document.getElementById("despintar").onclick = despintar;
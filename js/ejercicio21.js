var persona = {
  nombre : "Natalia",
  edad: 38,
  sexo : "M",
  altura:  1.65,
  peso : 50
} 


var array=[]
//uso el bucle for in para recorrer cada propiedad en el objeto persona. 
//En cada iteración, "propiedades" toma el nombre de la propiedad actual y 
//accedo al valor de la propiedad con "persona[propiedades]"
for (let propiedades in persona) {
  array.push(persona[propiedades])
}

alert(array)
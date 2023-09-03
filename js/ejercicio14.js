function Libro (ISBN,titulo,autor,paginas){
  this.ISBN = ISBN;
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;

}

function CargarDatos (){
  var ISBN = prompt("Ingrese el ISBN del libro");
  var titulo = prompt("Ingrese el Título del libro");
  var autor = prompt("Ingrese el Autor del libro");
  var paginas = parseInt(prompt("Ingrese la cantidad de páginas del libro"));
  return new Libro(ISBN,titulo,autor,paginas)
}

function MostrarDatos(libro){
alert(`ISBN: ${libro.ISBN}\n
Título ${libro.titulo}\n
Autor ${libro.autor} \n
N° de páginas ${libro.paginas}`);
}


var nuevoLibro = CargarDatos()
MostrarDatos(nuevoLibro)


/*
con la funcion como parametro del objeto
function Libro(ISBN, titulo, autor, nPaginas){
    this.ISBN= ISBN;
    this.titulo=titulo;
    this.autor= autor;
    this.nPaginas=nPaginas;
    this.MostrarLibro= MostrarLibro();
}

function CrearLibro(){
    ISBN=parseInt(prompt("Ingrese el número de ISBN:"))
    titulo=prompt("Ingrese el titulo del libro:")
    autor=prompt("Ingrese el autor del libro")
    nPaginas=parseInt(prompt("ingrese el número de paginas"))
    new Libro(ISBN, titulo, autor, nPaginas)
    return Libro;
    
}

function MostrarLibro(){
    resultado = `El ISBN es: ${this.ISBN}, el titulo es: ${this.titulo}, el autor es: ${this.autor} y el N° de páginas es: ${this.nPaginas}`;
    alert(resultado);
}

Libro1=CrearLibro()
Libro1.MostrarLibro
*/
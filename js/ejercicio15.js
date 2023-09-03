// Definición de la clase Círculo
function Circulo(radio) {
  this.radio = radio;
  this.area = calcularArea()
  this.perimetro = calcularPerimetro()
}

// Método para calcular el área del círculo
function calcularArea() {
  return Math.PI * Math.pow(this.radio,2);
};

// Método para calcular el perímetro del círculo
function calcularPerimetro () {
  return 2 * Math.PI * this.radio;
};

// Pedir el dato del radio
var radio= parseFloat(prompt("Ingrese el radio del círculo:"));

// Crear una instancia de la clase Círculo
var miCirculo = new Circulo(radio);

// Calcular el área y el perímetro
var area = miCirculo.area;
var perimetro = miCirculo.perimetro;

// Mostrar los resultados
alert(`El área del círculo es: ${area.toFixed(2)}
El perímetro del círculo es: ${perimetro.toFixed(2)}`);




var formulario = document.getElementById("formulario");
var borrarButton = document.getElementById("botonBorrar");
var calculo = document.getElementById("resultado");


// para calcular el radio
document.getElementById("botonCalculo").onclick = calcularValores;

//boton para borrar el formulario
//uso addEventlistener que como parametros recibe el evento y despues la funcion a ejecutar cuando se produce el event
borrarButton.addEventListener("click", function() {
  formulario.reset();  //restablece los campos del formulario
  calculo.textContent = "";  // Elimina el resultado anterior
  })


  function calcularValores() {
    var area = parseFloat(document.getElementById("area").value);
    var perimetro = parseFloat(document.getElementById("perimetro").value);
    var diametro = parseFloat(document.getElementById("diametro").value);
    var circunferencia = parseFloat(document.getElementById("circunferencia").value);
    var radio = parseFloat(document.getElementById("radio").value);
    var areaCalculada = 0;
    var perimetroCalculado = 0;
    var diametroCalculado = 0;
    var circunferenciaCalculada = 0;
    var radioCalculado = 0;

    if (!isNaN(radio)) {
        radioCalculado = radio;
        diametroCalculado = radio * 2;
        circunferenciaCalculada = diametroCalculado * Math.PI;
        perimetroCalculado = circunferenciaCalculada;
        areaCalculada = Math.PI * radio ** 2;
    } else if (!isNaN(area)) {
        radioCalculado = Math.sqrt(area / Math.PI);
        diametroCalculado = radioCalculado * 2;
        circunferenciaCalculada = diametroCalculado * Math.PI;
        perimetroCalculado = 2 * Math.PI * radioCalculado; // Perímetro = 2 * pi * radio
        areaCalculada = area;
    } else if (!isNaN(perimetro)) {
        radioCalculado = perimetro / (2 * Math.PI);
        diametroCalculado = radioCalculado * 2;
        circunferenciaCalculada = diametroCalculado * Math.PI;
        perimetroCalculado = perimetro;
        areaCalculada = Math.PI * radioCalculado ** 2;
    } else if (!isNaN(diametro)) {
        radioCalculado = diametro / 2;
        diametroCalculado = diametro;
        circunferenciaCalculada = diametroCalculado * Math.PI;
        perimetroCalculado = Math.PI * diametroCalculado; // Perímetro = pi * diámetro
        areaCalculada = Math.PI * radioCalculado ** 2;
    } else if (!isNaN(circunferencia)) {
        radioCalculado = circunferencia / (2 * Math.PI);
        diametroCalculado = radioCalculado * 2;
        circunferenciaCalculada = circunferencia;
        perimetroCalculado = circunferenciaCalculada;
        areaCalculada = (circunferencia / (2 * Math.PI)) ** 2 * Math.PI; // Área = (circunferencia / (2 * pi)) ^ 2 * pi
    } else {
        resultado.textContent = "Ingrese al menos un dato válido.";
        return;
    }

    document.getElementById("radio").value = radioCalculado.toFixed(2);
    document.getElementById("area").value = areaCalculada.toFixed(2);
    document.getElementById("perimetro").value = perimetroCalculado.toFixed(2);
    document.getElementById("diametro").value = diametroCalculado.toFixed(2);
    document.getElementById("circunferencia").value = circunferenciaCalculada.toFixed(2);
}



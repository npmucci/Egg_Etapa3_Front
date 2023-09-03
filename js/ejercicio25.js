function getFormValores(){
  var nombre = document.getElementsByName("nombre")[0].value;
  var apellido = document.getElementsByName("apellido")[0].value;
  
  alert(`Usted está por enviar un formulario con los siguientes valores:
    Nombre = ${nombre}
    Apellido = ${apellido}
  `);
}


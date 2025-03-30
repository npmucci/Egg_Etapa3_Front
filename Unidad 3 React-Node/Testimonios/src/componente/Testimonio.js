import React from "react";
import "../hojas-de-estilos/Testimonio.css"

// componente funcional que se escribre como una función de js
function Testimonio(props) {
  // dentro del return se escribe todo el contenido de "html" en lenguaje JSX
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        // eslint-disable-next-line no-template-curly-in-string
        alt={`Foto de ${props.imagen}`}
      ></img>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"> <strong> {props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio"> "{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;
//sin esta linea, el componente no puede ser importado desde otro archivo, tiene que exitir la exportacion y la importacion

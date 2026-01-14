import React from 'react';

function Bienvenida(props) {
  return (
    <div>
      <h1>¡Hola, {props.nombre}!</h1>
      <h2>Esta es mi primera práctica con componentes</h2>
    </div>
  );
}

export default Bienvenida;
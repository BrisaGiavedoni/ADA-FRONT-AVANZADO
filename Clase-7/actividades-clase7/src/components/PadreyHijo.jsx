import React, { useState } from 'react'

const PadreyHijo = () => {
  const [mensajeHijo, setMensajeHijo] = useState('')

  // 1. El Padre define LA FUNCIÓN
  const funcionDelPadre = (texto) => {
    console.log("Ejecutando lógica en el Padre...");
    setMensajeHijo(texto);
  }

  return (
    <div>
      <h1>Padre</h1>
      <p>Mensaje recibido: {mensajeHijo}</p>
      
      {/* 2. El Padre PASA la función al Hijo a través de una prop */}
      <Hijo enviarHaciaArriba={funcionDelPadre} />
    </div>
  )
}

const Hijo = ({ enviarHaciaArriba }) => {
  return (
    <div>
      <h2>Hijo</h2>
      {/* 3. El Hijo EJECUTA la función que le pasó el padre */}
      <button onClick={() => enviarHaciaArriba('¡Hola desde el hijo!')}>
        Ejecutar función del padre
      </button>
    </div>
  )
}

export default PadreyHijo
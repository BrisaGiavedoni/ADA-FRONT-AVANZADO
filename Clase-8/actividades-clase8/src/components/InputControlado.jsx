import React, { useState } from 'react';

const InputControlado = () => {

  const [texto, setTexto] = useState("");


  const manejarCambio = (evento) => {

    setTexto(evento.target.value);
  };

  return (
    <div>
      <h2>Actividad 1: Mi primer input controlado</h2>
      

      <input 
        type="text" 
        placeholder="Escribe algo aquí..."
        value={texto} 
        onChange={manejarCambio} 
      />


      <p>
        <strong>Lo que estás escribiendo:</strong> {texto}
      </p>


      <button onClick={() => setTexto("")}>Limpiar</button>
    </div>
  );
};

export default InputControlado;
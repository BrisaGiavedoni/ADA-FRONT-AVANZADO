import React, { useState } from 'react';

const SoloNumeros = () => {
  const [error, setError] = useState(false);

  const manejarTecla = (event) => {

    const esNumero = (event.key >= '0' && event.key <= '9');
    const esBorrar = event.key === 'Backspace';

    if (esNumero || esBorrar) {

      setError(false);
    } else {

      event.preventDefault();

      setError(true);
    }
  };

  return (
    <div>
      <h2>Actividad 2: Validación de Teclado</h2>
      <label>Escribe solo números: </label>
      <input 
        type="text" 
        onKeyDown={manejarTecla} 
        placeholder="Intenta poner una letra..."
      />


      {error && (
        <p >
          ⚠️ Solo números permitidos
        </p>
      )}
    </div>
  );
};

export default SoloNumeros;
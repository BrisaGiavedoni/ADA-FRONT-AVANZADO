import React, { useRef, useState } from 'react';

const InputNoControlado = () => {

  const inputRef = useRef(null);
  
  const [valorMostrado, setValorMostrado] = useState("");

  const manejarMostrarValor = () => {

    const valorActual = inputRef.current.value;
    
    alert(`Valor del input: ${valorActual}`);
    
    setValorMostrado(valorActual);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Actividad 3: Input No Controlado</h2>
      
      <input 
        type="text" 
        ref={inputRef} 
        placeholder="Escribe algo aquí..." 
      />

      <button onClick={manejarMostrarValor}>
        Mostrar valor
      </button>

      {valorMostrado && (
        <p>Último valor capturado: <strong>{valorMostrado}</strong></p>
      )}
    </div>
  );
};

export default InputNoControlado;
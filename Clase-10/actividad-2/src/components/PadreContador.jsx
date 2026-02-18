import React, { useState } from 'react'
import BotonRestar from './BotonRestar'
import BotonSumar from './BotonSumar'
import MostrarContador from './MostrarContador'

const PadreContador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: 'center', border: '1px solid gray', padding: '20px' }}>
      <MostrarContador contador={contador} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <BotonSumar setContador={setContador} />
        <BotonRestar setContador={setContador} />
      </div>
    </div>
  );
}

export default PadreContador;
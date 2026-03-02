import { CheckCircle2, XCircle } from 'lucide-react';

const Resultado = ({ seleccion, respuestaCorrecta }) => {
  if (!seleccion) return null;

  const esCorrecto = seleccion === respuestaCorrecta;

  return (
    <div className={`alerta ${esCorrecto ? 'correcto' : 'incorrecto'}`} 
         style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      
      {esCorrecto ? (
        <>
          <CheckCircle2 size={24} />
          <span>¡Respuesta Correcta!</span>
        </>
      ) : (
        <>
          <XCircle size={24} />
          <span>¡D'oh! Era: {respuestaCorrecta}</span>
        </>
      )}
    </div>
  );
}

export default Resultado;
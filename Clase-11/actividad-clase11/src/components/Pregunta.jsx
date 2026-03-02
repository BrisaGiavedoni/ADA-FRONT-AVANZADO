import { useState, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';

const Pregunta = ({ datos, alSeleccionar, bloqueado }) => {
  const [opcionesMezcladas, setOpcionesMezcladas] = useState([]);

  useEffect(() => {
    if (datos) {
      // Creamos una copia de las opciones y las mezclamos aleatoriamente
      const mezcladas = [...datos.opciones].sort(() => Math.random() - 0.5);
      setOpcionesMezcladas(mezcladas);
    }
  }, [datos]); // Solo se ejecuta cuando cambia la pregunta (el índice)

  if (!datos) return null;

  return (
    <div className="card-pregunta">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
        <HelpCircle color="#4D73FF" size={28} />
        <h3>{datos.enunciado}</h3>
      </div>
      
      <div className="grid-opciones">
        {opcionesMezcladas.map((opcion) => (
          <button 
            key={opcion} 
            disabled={bloqueado} 
            onClick={() => alSeleccionar(opcion)}
            className="boton-opcion"
          >
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pregunta;
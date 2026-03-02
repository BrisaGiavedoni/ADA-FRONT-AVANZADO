import { useState } from 'react';
import './App.css';
import { Trophy, ChevronRight, RotateCcw, Tv } from 'lucide-react';
import Encuesta from './db/Encuesta'; 
import Pregunta from './components/Pregunta';
import Resultado from './components/Resultado';


function App() {
  const [indice, setIndice] = useState(0);
  const [eleccion, setEleccion] = useState(null);

 
  if (!Encuesta || Encuesta.length === 0) {
    return <div className="container">Cargando Springfield...</div>;
  }

  const preguntaActual = Encuesta[indice];

  
  const manejarSiguiente = () => {
    setIndice(indice + 1);
    setEleccion(null);
  };


  const reiniciar = () => {
    setIndice(0);
    setEleccion(null);
  };

  return (
    <div className="container">
      
      <header style={{ marginBottom: '20px' }}>
        <h1 className="titulo">
          <Tv size={40} style={{ marginRight: '10px' }} />
          The Simpsons 
        </h1>
        <div className="progreso">
          Pregunta {indice + 1} de {Encuesta.length}
        </div>
      </header>

      
      <Pregunta 
        datos={preguntaActual} 
        alSeleccionar={setEleccion} 
        bloqueado={eleccion !== null} 
      />

      
      <Resultado 
        seleccion={eleccion} 
        respuestaCorrecta={preguntaActual.correcta} 
      />

      
      {eleccion === preguntaActual.correcta && indice < Encuesta.length - 1 && (
        <button className="boton-siguiente" onClick={manejarSiguiente}>
          Siguiente <ChevronRight size={20} />
        </button>
      )}

      
      {eleccion === preguntaActual.correcta && indice === Encuesta.length - 1 && (
        <div className="victoria-seccion">
          <h2 className="victoria">
            <Trophy color="#FFD90F" size={48} />
            ¡ERES UN EXPERTO!
          </h2>
          <button className="boton-siguiente" onClick={reiniciar}>
            <RotateCcw size={20} /> Jugar de nuevo
          </button>
        </div>
      )}

      
      {eleccion && eleccion !== preguntaActual.correcta && (
        <button 
          className="boton-siguiente" 
          style={{ backgroundColor: '#e74c3c', color: 'white' }} 
          onClick={reiniciar}
        >
          <RotateCcw size={20} /> Reintentar
        </button>
      )}
    </div>
  );
}

export default App;
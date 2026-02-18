import { useState } from "react";

const AgregarTarea = ({ setTareas }) => {
  const [input, setInput] = useState("");

  const enviar = () => {
    if (!input.trim()) return;
    setTareas((prev) => [...prev, { id: Date.now(), texto: input }]);
    setInput(""); // Limpia el input tras agregar
  };

  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Nueva tarea..." 
      />
      <button onClick={enviar}>Agregar</button>
    </div>
  );
};

export default AgregarTarea;
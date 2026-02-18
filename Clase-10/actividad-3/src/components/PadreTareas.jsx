import { useState } from "react";
import ListaTareas from "./ListaTareas";
import AgregarTarea from "./AgregarTarea";

const PadreTareas = () => {
  const [tareas, setTareas] = useState([]);

  const eliminarTarea = (id) => {
    setTareas((prev) => prev.filter((tarea) => tarea.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Mis Tareas</h1>

      <AgregarTarea setTareas={setTareas} />

      <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />
    </div>
  );
};

export default PadreTareas;
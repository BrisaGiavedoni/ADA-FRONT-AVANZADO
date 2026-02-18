import Tarea from "./Tarea";

const ListaTareas = ({ tareas, eliminarTarea }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {tareas.map((t) => (
        <Tarea key={t.id} tarea={t} onEliminar={eliminarTarea} />
      ))}
    </div>
  );
};

export default ListaTareas;
const Tarea = ({ tarea, onEliminar }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
      <span>{tarea.texto}</span>
      <button onClick={() => onEliminar(tarea.id)}>x</button>
    </div>
  );
};

export default Tarea;
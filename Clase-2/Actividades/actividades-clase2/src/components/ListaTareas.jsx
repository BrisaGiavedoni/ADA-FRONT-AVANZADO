const ListaTareas = ({ tareas }) => {
  // Condicional para el caso de lista vacía
  if (tareas.length === 0) {
    return <p>No hay tareas pendientes</p>;
  }

  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index}>{tarea}</li>
      ))}
    </ul>
  );
};

export default ListaTareas;

function App() {
  const tareas = [
    { id: 1, texto: 'Comprar pan' , completada: false},
    { id: 2, texto: 'Comprar leche', completada: false },
    { id: 3, texto: 'Comprar huevos', completada: false },
    { id: 4, texto: 'Comprar frutas', completada: false },
    { id: 5, texto: 'Comprar verduras', completada: false },
  ]

  const incompletas = tareas.filter(tarea => !tarea.completada)

  return (
    <>
      <h1>Tareas incompletas</h1>
      {incompletas.length > 0 ? (
        <ul>
          {incompletas.map(tarea => (
            <li key={tarea.id}>{tarea.texto}</li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas incompletas. 🎉</p>
      )}
    </>
  )
}

export default App

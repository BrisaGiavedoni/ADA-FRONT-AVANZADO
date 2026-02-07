import React from 'react'

const ListaTareas = () => {
  const [tareas, setTareas] = React.useState([])
  const [nuevaTarea, setNuevaTarea] = React.useState('')

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea])
      setNuevaTarea('')
    }
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input type="text" placeholder='Nueva tarea' value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTareas
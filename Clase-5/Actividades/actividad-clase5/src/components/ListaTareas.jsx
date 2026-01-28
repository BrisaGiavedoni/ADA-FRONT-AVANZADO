// 📝 Actividad 2:
// 🛠 Consigna:
// Renderizar una lista de tareas pendientes.
// • Si la tarea está completada → mostrar en verde.
// • Si no está completada → mostrar en rojo.
// • Usar key correctamente.

const ListaTareas = () => {
    const tareas = [    
        { id: 1, nombre: 'Hacer la compra', completada: true },
        { id: 2, nombre: 'Lavar el auto', completada: false },
        { id: 3, nombre: 'Estudiar React', completada: true },
        { id: 4, nombre: 'Ir al gimnasio', completada: false },
        { id: 5, nombre: 'Leer un libro', completada: true }
    ];
    return (
        <div>   
            <h2>Lista de Tareas</h2>
            <ul>
                {tareas.map((tarea) => (
                    <li
                        key={tarea.id}
                        style={{ color: tarea.completada ? 'green' : 'red' }}
                    >   
                        {tarea.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTareas;
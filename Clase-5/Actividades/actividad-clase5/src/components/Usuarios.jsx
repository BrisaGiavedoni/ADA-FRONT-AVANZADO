// 📝 Actividad 4:
// 🛠 Consigna:
// Crear una app simple que:
// • Muestre una lista de usuarios con nombre y edad.
// • Permita eliminar un usuario al hacer click en un botón.
// • Use key correctamente.

import React, { useState } from 'react';


const Usuarios = () => {
    const [listaUsuarios, setListaUsuarios] = useState([
        { id: 1, nombre: 'Ana', edad: 28 },
        { id: 2, nombre: 'Luis', edad: 34 },
        { id: 3, nombre: 'María', edad: 22 },
        { id: 4, nombre: 'Carlos', edad: 45 },
        { id: 5, nombre: 'Sofía', edad: 30 }
    ]);

    const eliminarUsuario = (id) => {

        const nuevaLista = listaUsuarios.filter(usuario => usuario.id !== id);
        

        setListaUsuarios(nuevaLista);
    };

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {listaUsuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.nombre} ({usuario.edad} años)
                        <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Usuarios;
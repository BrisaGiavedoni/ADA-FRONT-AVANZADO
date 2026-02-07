import React from 'react'
const Formulario = () => {
  const [nombre, setNombre] = React.useState('')
  const [apellido, setApellido] = React.useState('')

  return (
//     Crear un componente formulario que guarde nombre y apellido en el
// estado y los muestre en pantalla.
    <div>
      <h1>Formulario</h1>
      <input type="text" placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" placeholder='Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <p>{nombre} {apellido}</p>
    </div>
  )
}

export default Formulario
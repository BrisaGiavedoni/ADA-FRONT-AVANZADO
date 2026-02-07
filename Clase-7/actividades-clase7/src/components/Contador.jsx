import React from 'react'

const Contador = () => {
 const [contador, setContador] = React.useState(0)

  return (
    // Crear un componente contador con botones de + y -.
    <div>
      <h1>Contador</h1>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <span>{contador}</span>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  )
}

export default Contador
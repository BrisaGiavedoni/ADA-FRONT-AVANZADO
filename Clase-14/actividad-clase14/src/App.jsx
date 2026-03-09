import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import ItemList from './components/ItemList'

function App() {
  const itemsDePrueba = [
    { nombre: 'Revisar la documentación', tipo: 'normal' },
    { nombre: 'Configurar variables de entorno', tipo: 'success' },
    { nombre: 'Solucionar error en la base de datos', tipo: 'error' },
    { nombre: 'Actualizar dependencias', tipo: 'success' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Botones</h2>
      <Button>Botón Base</Button>{' '}
      <Button tipo="error">Botón Error</Button>{' '}
      <Button tipo="success">Botón Success</Button>

      <h2 style={{ marginTop: '30px' }}>Tarjetas</h2>
      
      <Card>
        <h3>Tarjeta Normal</h3>
        <p>Esta es una tarjeta simple sin props extra.</p>
      </Card>
      
      <Card destacado={true}>
        <h3>Tarjeta Destacada</h3>
        <p>Esta tarjeta tiene la prop destacado={`{true}`}.</p>
      </Card>

      <Card tipo="alert">
        <h3>Tarjeta de Alerta</h3>
        <p>Esta tarjeta tiene la prop tipo="alert".</p>
      </Card>

      <Card tipo="alert" destacado={true}>
        <h3>Alerta Destacada</h3>
        <p>Combinación de ambas props: tipo="alert" y destacado={`{true}`}.</p>
      </Card>

      <h2 style={{ marginTop: '30px' }}>Lista de Tareas (ItemList)</h2>
      <ItemList items={itemsDePrueba} />
    </div>
  )
}

export default App

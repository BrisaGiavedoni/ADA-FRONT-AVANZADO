import Tarjeta from "./components/Tarjeta";
import Button from "./components/Button";
import CardProducto from "./components/CardProducto";
import imagenProducto from "./assets/buzo.png";

function App() {
  return (
    <>
    <h1>Actividad 1</h1>
     <Tarjeta />
     <h1>Actividad 2</h1>
     <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
       <Button variant="primary">Botón Primario</Button>
       <Button variant="secondary">Botón Secundario</Button>
       <Button variant="danger">Botón Peligro</Button>
     </div>
     <h1>Actividad 3</h1>
     <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <CardProducto 
          titulo="Buzo de Gatito" 
          imagen={imagenProducto} 
        />
     </div>
    </>
  )
}

export default App  

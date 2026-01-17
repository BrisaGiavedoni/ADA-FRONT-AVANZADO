import { Saludo } from './components/Saludo.jsx';
import Despedida from './components/Despedida.jsx';
import Productos from './components/Productos.jsx';
import ListaTareas from './components/Listatareas.jsx';
import './App.css';

function App() {
  const misProductos = [
    { id: 1, nombre: "Teclado Mecánico", precio: 150 },
    { id: 2, nombre: "Mouse Pad", precio: 20 },
    { id: 3, nombre: "Monitor 4K", precio: 400 },
    { id: 4, nombre: "Cable HDMI", precio: 15 },
  ];


  const misTareas = ["Aprender React", "Configurar Vite", "Completar Desafíos"];
  const mostrarSeccion = true;

  return (

    <>
      <main className="app">

        <Saludo />

        {mostrarSeccion && (
          <section>
            <h2>Mis Tareas</h2>

            <ListaTareas tareas={misTareas} />
          </section>
        )}

        <section>
          <h2>Catálogo</h2>
          <Productos lista={misProductos} />
          
          <p>
            {misProductos.length > 0 
              ? `Hay ${misProductos.length} productos disponibles` 
              : "No hay stock"}
          </p>
        </section>

        <Despedida />
      </main>
    </>
  );
}

export default App;
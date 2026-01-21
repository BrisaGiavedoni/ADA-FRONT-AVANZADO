import Layout from "./components/Layout";
import Boton from "./components/Boton";
import Saludo from "./components/Saludo";
import Caja from "./components/Caja";
import './index.css'
import './App.css'


function App() {
  function handleClick() {
    alert("¡Botón clickeado!");
  }
 return (
    <Layout
      header={<h1>Encabezado</h1>}
      footer={<p>Pie de página</p>}
      content={
        <>
          <Saludo nombre="Brisa" />
          <hr />
          <Caja>
            <h2>Este es un título dentro de la caja</h2>
            <p>Este párrafo es el "children" que recibe el componente Caja.</p>
          </Caja>
          <hr />
          <Boton texto="Click me" onClick={handleClick} />
        </>
      }
    />
  );

}

export default App;

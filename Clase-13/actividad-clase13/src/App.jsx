import "./index.css";
import Tarjeta from "./components/Tarjeta";
import Button from "./components/Button";
import CardProducto from "./components/CardProducto";
import { FaAlignCenter } from "react-icons/fa";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Actividad 1</h1>
      <Tarjeta />

      <h1 style={{ textAlign: "center" }}>Actividad 2</h1>

      <div style={{ display: "flex", gap: "10px", padding: "20px"}}>
        <Button>Aceptar</Button>

        <Button variant="secondary">Cancelar</Button>

        <Button variant="ghost">Enviar</Button>
      </div>

      <h1 style={{ textAlign: "center" }}>Actividad 3</h1>

      <div
        style={{ padding: "40px", display: "flex", justifyContent: "center" }}
      >
        <CardProducto titulo="Celular Samsung Galaxy S24" precio="15000" />
      </div>
    </>
  );
}

export default App;

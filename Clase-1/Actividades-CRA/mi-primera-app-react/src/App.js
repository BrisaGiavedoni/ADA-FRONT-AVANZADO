import "./App.css";
import Perfil from "./components/Perfil";
import Bienvenida from "./Bienvenida";

function App() {
  return (
    <div className="container">
      <Bienvenida nombre="Usuario" />
      <Perfil />
    </div>
  );
}

export default App;

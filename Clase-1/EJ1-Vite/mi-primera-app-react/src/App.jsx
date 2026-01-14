import Bienvenida from './Bienvenida';
import Perfil from './components/Perfil';
import './App.css';

function App() {
  return (
    <div className="container">
      <Bienvenida nombre="Usuario" />
      <Perfil />
    </div>
  );
}

export default App;
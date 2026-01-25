import './App.css';
import LoginStatus from './components/LoginStatus';
import Notificaciones from './components/Notificaciones';
import EstadoCarga from './components/EstadoCarga';
import Mensajes from './components/Mensajes';

function App() {  
  return (
    <>
    <div className="container">
      <h1>Panel de Control de Actividades</h1>

      <section className="card">
        <h2>Actividad 1: Estado de Login</h2>
        <p>estado true</p>
        <LoginStatus isLogged={true} />
        <p>estado false</p>
        <LoginStatus isLogged={false} />
      </section>
      
      <section className="card">
        <h2>Actividad 2: Notificaciones</h2>
        <p>estado true</p>
        <Notificaciones cantidad={8} />
        <p>estado false</p>
        <Notificaciones cantidad={0} />
      </section>

      <section className="card">
        <h2>Actividad 3: Estado de Carga</h2>
        <p>estado true</p>
        <EstadoCarga isLoading={true} />
        <p>estado false</p>
        <EstadoCarga isLoading={false} />
      </section>

      <section className="card">
        <h2>Actividad 4: Mensajes</h2>
        <p>estado true</p>
        <Mensajes tieneMensajes={true} />
        <p>estado false</p>
        <Mensajes tieneMensajes={false} />
      </section>
    </div>
    </>
  )
}

export default App

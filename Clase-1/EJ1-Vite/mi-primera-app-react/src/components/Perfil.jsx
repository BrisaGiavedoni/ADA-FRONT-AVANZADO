import Titulo from "./Titulo";
import Descripcion from "./Descripcion";
import Boton from "./Boton";

function Perfil() {
  return (
    <div className="perfil-card">
      <Titulo />
      <Descripcion />
      <Boton />
    </div>
  );
}

export default Perfil;

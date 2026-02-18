import { useState } from "react";
import InputMensaje from "./InputMensaje";
import MostrarMensaje from "./MostrarMensaje";

export const Padre = () => {

  const [mensaje, setMensaje] = useState("");

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Actividad 1: Estado Compartido</h2>
      
      <InputMensaje mensaje={mensaje} setMensaje={setMensaje} />
      <MostrarMensaje mensaje={mensaje} />
    </div>
  );
};
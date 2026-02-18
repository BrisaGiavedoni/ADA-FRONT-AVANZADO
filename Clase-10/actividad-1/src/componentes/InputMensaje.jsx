const InputMensaje = ({ mensaje, setMensaje }) => {
  return (
    <div>
      <label>Escribe aquí: </label>
      <input 
        type="text"
        value={mensaje} 
        onChange={(e) => setMensaje(e.target.value)} 
      />
    </div>
  );
};

export default InputMensaje;
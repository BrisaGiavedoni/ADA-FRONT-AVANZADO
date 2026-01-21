
function Boton({ texto, onClick }) {
  return (
    <button 
      onClick={onClick} 
      style={{ padding: '10px 20px', cursor: 'pointer', margin: '5px' }}
    >
      {texto}
    </button>
  );
}

export default Boton;
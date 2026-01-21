function Caja({ children }) {
 
  const estiloCaja = {
    border: '2px solid #646cff',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px 0',
    backgroundColor: '#f9f9f9',
    color: '#333'
  };

  return (
    <div style={estiloCaja}>
      {children}
    </div>
  );
}

export default Caja;
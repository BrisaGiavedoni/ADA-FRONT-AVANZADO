

const Tarjeta = () => {
  const estilosContenedor = {
    border: "1px solid #ccc",
    padding: "20px",
    backgroundColor: "#f0f0f0", 
    borderRadius: "10px",
    maxWidth: "350px",
    margin: "20px auto",
    fontFamily: "sans-serif"
  };

  const estilosTitulo = {
    color: "blue",
    fontSize: "24px",
    marginTop: 0
  };

  const estilosParrafo = {
    color: "#333333", 
    lineHeight: "1.5"
  };

  return (
    <div style={estilosContenedor}>
      <h2 style={estilosTitulo}>Título de la Tarjeta</h2>
      <p style={estilosParrafo}>
        Este componente utiliza estilos en línea mediante objetos de JavaScript. 
        Es una forma rápida de aplicar estilos específicos sin necesidad de archivos CSS externos.
      </p>
    </div>
  );
};



export default Tarjeta
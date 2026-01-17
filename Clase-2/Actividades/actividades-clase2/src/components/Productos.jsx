const Productos = ({ lista }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Productos</h2>
      <table
        border="1"
        style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>
                {/* Lógica condicional: Si es > 100 muestra "Premium" */}
                {producto.precio > 100 ? (
                  <strong style={{ color: "gold" }}>⭐ Premium</strong>
                ) : (
                  "Estándar"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;

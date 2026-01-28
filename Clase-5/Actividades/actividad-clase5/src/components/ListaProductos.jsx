// 📝 Actividad 3:
// 🛠 Consigna:
// Crear una lista de productos con id, nombre y precio.
// • Renderizar un componente <Producto /> para cada uno.
// • Usar key en el map.

const ListaProductos = () => {  
    const productos = [
        { id: 1, nombre: 'Camiseta', precio: 20 },
        { id: 2, nombre: 'Pantalones', precio: 40 },
        { id: 3, nombre: 'Zapatillas', precio: 60 },
        { id: 4, nombre: 'Gorra', precio: 15 },
        { id: 5, nombre: 'Chaqueta', precio: 80 }
    ];  
    return (
        <div>   
            <h2>Lista de Productos</h2>
            <ul>

                {productos.map((producto) => (
                    <Producto 
                        key={producto.id}       
                        nombre={producto.nombre}

                        precio={producto.precio}    
                    />          
                ))}

            </ul>           
        </div>  

    );      
}       

const Producto = ({ nombre, precio }) => {  
    return (     
        <li>    
            {nombre} - ${precio}
        </li>

    );
}   

export default ListaProductos;
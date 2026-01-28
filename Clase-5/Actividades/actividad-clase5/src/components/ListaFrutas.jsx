// 📝 Actividad 1:
// 🛠 Consigna:
// Crear una lista de frutas y renderizarla en React.
// • Cada fruta debe tener un id y un nombre.
// • Mostrar el nombre en pantalla usando map().

const ListaFrutas = () => { 
    const frutas = [    
        { id: 1, nombre: 'Manzana' },   
        { id: 2, nombre: 'Banana' },
        { id: 3, nombre: 'Naranja' },
        { id: 4, nombre: 'Pera' },
        { id: 5, nombre: 'Uva' }
    ];  

    return ( 
        <div>     
            <h2>Lista de Frutas</h2>        

            <ul>         
                {frutas.map((fruta) => (           
                    <li key={fruta.id}>{fruta.nombre}</li>  
                ))}     
            </ul>   
        </div> 
    ); 
}

export default ListaFrutas;
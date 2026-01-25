// Si true → mostrar "Cargando...“
// • Si false → mostrar "Datos listos“
// • Usar operador ternario.

const EstadoCarga = ({ isLoading }) => {   
    return (
        isLoading ? <h1>Cargando...</h1> : <h1>Datos listos</h1>
    );   
};

export default EstadoCarga;
// • Si es true → mostrar "Tienes nuevos mensajes".
// • Si es false → no mostrar nada.
// • Usar &&.

const Mensajes = ({ tieneMensajes }) => {   
    return (
        tieneMensajes && <h2>Tienes nuevos mensajes</h2>
    );   
};

export default Mensajes;
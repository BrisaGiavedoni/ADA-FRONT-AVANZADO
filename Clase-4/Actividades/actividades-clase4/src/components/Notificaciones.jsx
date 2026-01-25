// Si cantidad > 0 → mostrar "Tienes X notificaciones".
// • Si no → no mostrar nada.
// • Usar null.

const Notificaciones = ({ cantidad }) => {   
    if (cantidad > 0) {
        return <h2>Tienes {cantidad} notificaciones</h2>;
    } else {
        return null;
    }   

};

export default Notificaciones;
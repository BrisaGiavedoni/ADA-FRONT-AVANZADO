// Si está logueado → mostrar "Bienvenido".
// • Si no → mostrar "Debes iniciar sesión".
// • Usar if/else.

const LoginStatus = ({ isLogged }) => {   
    if (isLogged) {
        return <h1>Bienvenido</h1>;
    } else {
        return <h1>Debes iniciar sesión</h1>;
    }       

};

export default LoginStatus;

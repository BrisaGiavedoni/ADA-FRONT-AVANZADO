# 📝 Explicación: Estructura del Proyecto y ReactDOM (CRA)

## 1. El archivo `public/index.html`

### ¿Qué hace el `<div id="root"></div>`?
Es un contenedor vacío que sirve como **punto de anclaje**. Es el único lugar en todo el archivo HTML donde React tiene permiso para "dibujar" la aplicación. Básicamente, es una caja vacía esperando a ser llenada con nuestros componentes.

### ¿Por qué es importante para React?
React no genera archivos HTML por cada página; genera código JavaScript que manipula el navegador. Por eso, necesita un elemento real en el documento (el DOM) para poder colgar toda la interfaz que nosotros programamos.

### ¿Qué pasa si lo eliminás o cambiás su ID?
La aplicación **deja de funcionar**. Al cargar la página verás una pantalla en blanco. Esto sucede porque el código de React buscará un elemento con el ID "root" para empezar a trabajar; si no lo encuentra, no tiene dónde mostrar nada.

### ¿Dónde en el proyecto se usa ese ID?
Se utiliza en el archivo **`src/index.js`**. Allí se encuentra la instrucción `document.getElementById('root')`, que es la que vincula el mundo HTML con el mundo de JavaScript.

---

## 2. El archivo `src/index.js`

### ¿Qué hace `ReactDOM.createRoot()`?
Esta función toma el elemento del DOM (`#root`) y crea una **raíz de React**. Es como encender el motor de la aplicación: prepara ese espacio del HTML para que React pueda manejarlo de forma inteligente y rápida.

### ¿Qué significa `root.render()`?
Es la orden final de ejecución. Le dice a React: *"Toma estos componentes que programé (como `<App />` o `<Perfil />`) y transfórmalos en HTML real dentro de la raíz"*. Es el momento en que nuestro código se vuelve visible para el usuario.

### ¿Qué pasa si cambiás el componente que se renderiza?
React reemplaza instantáneamente todo el contenido del `div #root`. Por ejemplo, si cambio `<App />` por `<Perfil />`, la bienvenida y los demás elementos de App desaparecerán y solo se mostrará la tarjeta de perfil. Esto permite cambiar vistas completas de forma muy dinámica.

---
**Autora:** Brisa Giavedoni

**Proyecto:** Mi primera práctica con componentes en React.
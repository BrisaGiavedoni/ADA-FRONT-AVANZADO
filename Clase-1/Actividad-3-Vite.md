# ⚡ Explicación: Estructura del Proyecto y ReactDOM (Vite)

## 1. El archivo `index.html`

### ¿Qué hace el `<div id="root"></div>`?
Es el **contenedor raíz**. En Vite, este archivo no está en la carpeta `public`, sino en la raíz del proyecto. El `div` con `id="root"` es el espacio físico donde React "montará" toda la interfaz dinámica.

### ¿Por qué es importante para React?
Porque React funciona mediante un **DOM Virtual**. Necesita un punto de conexión en el HTML real para inyectar todo el árbol de componentes que creamos en JavaScript. Sin este `div`, el navegador no tendría nada que mostrar.

### ¿Qué pasa si lo eliminás o cambiás su ID?
La aplicación se rompe completamente. Verás un error en la consola del navegador indicando que no se puede encontrar el elemento. Al no haber un ID que coincida con el que busca el script principal, React no puede inicializarse.

### ¿Dónde en el proyecto se usa ese ID?
Se usa en el archivo **`src/main.jsx`**. Allí, la función `document.getElementById('root')` busca este elemento para entregárselo a React.

---

## 2. El archivo `src/main.jsx`

### ¿Qué hace `ReactDOM.createRoot()`?
Es el método moderno de React 18 que crea la raíz de renderizado. Vite lo utiliza para conectar el elemento del DOM real con el sistema de React, permitiendo que la aplicación sea extremadamente rápida gracias al renderizado concurrente.

### ¿Qué significa `root.render()`?
Es la instrucción que le dice a React: *"Dibuja este componente dentro del contenedor"*. En nuestro caso, recibe el componente `<App />` (o `<Perfil />`) y lo transforma en elementos que el navegador entiende.

### ¿Qué pasa si cambiás el componente que se renderiza?
Se cambia la "raíz" de la aplicación. Si reemplazás `<App />` por `<Perfil />`, React descartará todo lo que estaba en App y renderizará únicamente la tarjeta de perfil. Es lo que hicimos para probar la Actividad 3.

---
**Autora:** Brisa Giavedoni

**Entorno:** Vite + React 
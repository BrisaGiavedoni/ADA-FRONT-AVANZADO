import { useState } from 'react';
import { FaShoppingCart, FaCheck } from 'react-icons/fa'; 
import styles from './CardProducto.module.css';
import imgProducto from '../assets/producto.png'; 

const CardProducto = ({ titulo, precio }) => {
  const [inCart, setInCart] = useState(false);

  const toggleCarrito = () => {
    setInCart(!inCart);
  };


  const botonClase = `${styles.btn} ${inCart ? styles.agregado : styles.agregar}`;

  return (
    <div className={styles.card}>
      <img src={imgProducto} alt={titulo} className={styles.imagen} />
      <h3>{titulo}</h3>
      <p>${precio}</p>
      
      <button className={botonClase} onClick={toggleCarrito}>
        {inCart ? <FaCheck /> : <FaShoppingCart />}
        {inCart ? "Agregado" : "Agregar al carrito"}
      </button>
    </div>
  );
};

export default CardProducto;
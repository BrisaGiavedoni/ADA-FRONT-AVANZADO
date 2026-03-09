import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './CardProducto.module.css';

const CardProducto = ({ titulo, imagen }) => {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <div className={styles.card}>
      <img src={imagen} alt={titulo} className={styles.image} />
      <h3 className={styles.title}>{titulo}</h3>
      <button 
        className={`${styles.boton} ${inCart ? styles.agregado : styles.noAgregado}`}
        onClick={toggleCart}
      >
        <FaShoppingCart />
        {inCart ? 'Agregado al Carrito' : 'Agregar al Carrito'}
      </button>
    </div>
  );
};

export default CardProducto;

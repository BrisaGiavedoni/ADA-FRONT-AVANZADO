import React from 'react';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {/* 2. Iterar sobre el array usando map() */}
      {items.map((item, index) => {
        // 3. Aplicar clases dinámicas según la propiedad tipo
        const tipoClass = item.tipo === 'error' 
          ? styles.error 
          : item.tipo === 'success' 
            ? styles.success 
            : '';

        return (
          // Como los items no tienen ID único usamos index, pero lo ideal es usar ID reales
          <li key={index} className={`${styles.item} ${tipoClass}`.trim()}>
            {item.nombre}
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;

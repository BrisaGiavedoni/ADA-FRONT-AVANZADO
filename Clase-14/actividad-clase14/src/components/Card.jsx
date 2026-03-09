import React from 'react';
import styles from './Card.module.css';

const Card = ({ tipo, destacado, children }) => {
  // Aplicamos siempre la clase base .card
  // Si tipo es 'alert', aplicamos la clase .alert
  // Si destacado es true, aplicamos la clase .destacado
  
  const tipoClass = tipo === 'alert' ? styles.alert : '';
  const destacadoClass = destacado ? styles.destacado : '';

  return (
    <div className={`${styles.card} ${tipoClass} ${destacadoClass}`.trim()}>
      {children}
    </div>
  );
};

export default Card;

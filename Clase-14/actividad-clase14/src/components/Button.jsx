import styles from './Button.module.css';

const Button = ({ tipo, children }) => {
  return (
    <button className={`${styles.btn} ${tipo ? styles[tipo] : ''}`.trim()}>
      {children || 'Botón'}
    </button>
  );
};

export default Button;
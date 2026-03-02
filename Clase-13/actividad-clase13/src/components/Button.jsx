import styles from './Button.module.css';

const Button = ({ children, variant = "primary" }) => {

  const classNameProp = `${styles.btn} ${styles[variant] || styles.primary}`;

  return (
    <button className={classNameProp}>
      {children}
    </button>
  );
};

export default Button;
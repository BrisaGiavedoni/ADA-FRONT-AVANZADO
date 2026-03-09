import styles from './Button.module.css';

const Button = ({ variant = 'primary', children }) => {
    return (
        <button className={`${styles.btn} ${styles[variant]}`}>
            {children}
        </button>
    )
}

export default Button;
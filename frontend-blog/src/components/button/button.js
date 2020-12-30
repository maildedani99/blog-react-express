import React from 'react';
import styles from './button.module.css';

const Button = (props) => {

    const { value, disabled, onClick, type } = props;

    return (
        
            <input type={type} onClick={onClick} disabled={disabled} className={styles._button} value={value} />

    )
}
export default Button;
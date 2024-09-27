import React from 'react';
import styles from './radio.module.scss';

interface RadioProps {
    id: string;
    name: string;
    value: string;
    size?: number;
    color?: string;
    checked?: boolean;
    label?: string;
    labelClass?: string;
    onChange?: (value: string) => void;
}

const RadioButton: React.FC<RadioProps> = ({ 
    name,
    id,
    value,
    size = 20, 
    color = '#2F62CB', 
    checked = false, 
    label = '',
    labelClass = '',
    onChange 
}) => {
    const style = {
        '--radio-size': `${size}px`,
        '--radio-color': color
    } as React.CSSProperties;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className={styles.radioContainer}>
            <input 
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked} 
                onChange={handleChange}
                className={styles.radioInput}
            />
            <label htmlFor={id} className={`${styles.radio} ${styles.radioLabel}`} style={style}>
                <span className={styles.radioButton}></span>
                {label && <span className={labelClass}>{label}</span>}
            </label>
        </div>
    );
};

export default RadioButton;
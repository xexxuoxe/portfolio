import React, {ReactNode} from 'react';
import styles from './checkbox.module.scss';

interface CheckboxProps {
    id: string;
    name?: string;
    size?: number;
    color?: string;
    checked?: boolean;
    label?: string | ((checked: boolean) => ReactNode);
    labelClass?: string;
    onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ 
    name = '',
    id,
    size = 20, 
    color = '#2F62CB', 
    checked = false, 
    label = '',
    labelClass = '',
    onChange 
}) => {
    const style = {
        '--checkbox-size': `${size}px`,
        '--checkbox-color': color
    } as React.CSSProperties;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.checked);
        }
    };

    const renderLabel = () => {
        if (typeof label === 'function') {
            return label(checked);
        }
        return label;
    };
    
    return (
        <div className={styles.checkboxContainer}>
            <input 
                type="checkbox" 
                id={id}
                name={name}
                checked={checked} 
                onChange={handleChange}
                className={styles.checkboxInput}
            />
            <label htmlFor={id} className={`${styles.checkbox} ${styles.checkboxLabel}`} style={style}>
                <span className={styles.checkmark}></span>
                {label && (
                    <span className={`${labelClass} ${checked ? 'checked' : ''}`}>
                        {renderLabel()}
                    </span>
                )}
            </label>
        </div>
    );
};

export default Checkbox;
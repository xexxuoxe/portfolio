import styles from './input.module.scss'

const Input = ({
    name,
    type,
    id,
    className,
    variant,
    value,
    onChange,
    placeholder
}: {
    id: string;
    name: string;
    type: string;
    className: string;
    variant: keyof typeof styles;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}) => {
    return (
        <div className={`${styles[variant]} ${className}`}>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;
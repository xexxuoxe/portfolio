// scr/components/_utiles/input/input.component.tsx
// input component
import styles from './input.module.scss'

const Input = ({ id, name, type, variant, className , defaultValue, onChange, placeholder }: {
	id: string
	name: string
	type: string
	variant: keyof typeof styles;
	className : string
	defaultValue?: string
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
	}) => {
	return (
		<div className={`${styles[variant]} ${className}`}>
			<input
				id={id}
				name={name}
				type={type}
				defaultValue={defaultValue}
				onChange={onChange}
				placeholder={placeholder}
			></input>
		</div>
	)
}

export default Input;

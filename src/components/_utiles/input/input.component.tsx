/*
	input component
	src/component/_utiles/input/input.component.tsx
*/
import styles from './input.module.scss'

const Input = ({ name, type, id, className, variant, defaultValue, value, onChange, placeholder }: {
	name: string;
	type: string;
	id: string;
	className : string;
	variant: keyof typeof styles;
	defaultValue?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
	}) => {
	return (
		<div className={`${styles[variant]} ${className}`}>
			<input
				id={id}
				name={name}
				type={type}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				placeholder={placeholder}
			></input>
		</div>
	)
}

export default Input;

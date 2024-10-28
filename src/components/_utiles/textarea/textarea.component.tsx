/*
	textarea component
	src/component/_utiles/textarea/textarea.component.tsx
*/
import styles from './textarea.module.scss'

const TextArea = ({ name, id, className, variant, defaultValue , onChange, placeholder, rows }: {
	name: string;
	id: string;
	className : string;
	variant: keyof typeof styles;
	defaultValue : string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder: string;
	rows: number;
  }) => {
	return (
		<div className={`${styles[variant]} ${className}`}>
			<textarea
				id={id}
				name={name}
				defaultValue ={defaultValue}
				onChange={onChange}
				placeholder={placeholder}
				rows={rows}
			></textarea>
		</div>
	)
}
export default TextArea

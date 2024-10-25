/*
	textarea component
	src/component/_utiles/textarea/textarea.component.tsx
*/
import styles from './textarea.module.scss'

const TextArea = ({ name, id, className, variant, defaultValue, value, onChange, placeholder }: {
	name: string;
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
			<textarea
				id={id}
				name={name}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				placeholder={placeholder}
				rows={5}
			></textarea>
		</div>
	)
}
export default TextArea

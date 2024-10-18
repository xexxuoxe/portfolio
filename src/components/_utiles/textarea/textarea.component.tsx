// scr/components/_utiles/textarea/textarea.component.tsx
// textarea component
import styles from './textarea.module.scss'

const TextArea = ({ id, name, variant, className, defaultValue , onChange, placeholder }: {
	id: string;
	name: string;
	variant: keyof typeof styles;
	className : string;
	defaultValue?: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
  }) => {
	return (
		<div className={`${styles[variant]} ${className}`}>
			<textarea
				id={id}
				name={name}
				defaultValue={defaultValue}
				onChange={onChange}
				placeholder={placeholder}
				rows={5}
			></textarea>
		</div>
	)
}
export default TextArea

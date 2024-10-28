/*
	button component
	src/component/_utiles/button/button.component.tsx
*/
import styles from './button.module.scss'

const Button = ({ text, type, className, variant,  onClick }: {
		text: string;
		type: string;
		className : string;
		variant: keyof typeof styles;
		onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
	}) => {
  return (
    <button
		type={type}
		onClick={onClick}
		className={`${styles[variant]} ${className}`}
	>
      <span>{text}</span>
    </button>
  )
}

export default Button;

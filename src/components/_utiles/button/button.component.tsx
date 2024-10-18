import styles from './button.module.scss'

const Button = ({ onClick, text, type, variant, className }: {
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
	text: string;
	type: string;
	variant: keyof typeof styles;
	className : string;
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

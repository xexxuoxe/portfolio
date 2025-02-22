import styles from './button.module.scss';

const Button = ({ text, type, className, variant, onClick }: {
	text: string;
	type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	className: string;
	variant: keyof typeof styles;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${styles[variant]} ${className}`}
		>
			<span>{text}</span>
		</button>
	);
}

export default Button;

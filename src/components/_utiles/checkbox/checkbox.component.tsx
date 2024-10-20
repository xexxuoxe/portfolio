/* 
	checkbox component
	src/component/_utiles/checkbox/checkbox.component.tsx
*/
import { useState, ChangeEvent } from 'react';
import styles from './checkbox.module.scss';

const Checkbox = ({ name, id, className, variant, checked, defaultValue, onChange }: {
	name: string;
	id: string;
	className: string;
	variant: keyof typeof styles;
	defaultValue: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	checked: boolean;
}) => {


	return (
		<div className={`${styles[variant]} ${className}`}>
			<input
				type="checkbox"
				name={name}
				id={id}
				defaultValue={defaultValue}
				onChange={onChange}
				checked={checked}
			/>
		</div>
	);
};

export default Checkbox;
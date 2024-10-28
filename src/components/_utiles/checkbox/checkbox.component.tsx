/*
	checkbox component
	src/component/_utiles/checkbox/checkbox.component.tsx
*/
import { useState, ChangeEvent } from 'react';
import styles from './checkbox.module.scss';

const Checkbox = ({ name, id, className, variant, checked, onChange }: {
		id: string;
		name: string;
		variant: keyof typeof styles;
		className: string;
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
		checked: boolean;
	}) => {

	return (
		<div className={`${styles[variant]} ${className}`}>
			<input
				id={id}
				type="checkbox"
				name={name}
				onChange={onChange}
				checked={checked}
			/>
		</div>
	);
};

export default Checkbox;

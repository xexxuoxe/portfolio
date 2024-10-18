// scr/components/_utiles/checkbox/checkbox.component.tsx
import { useState, ChangeEvent } from 'react';
import styles from './checkbox.module.scss';

const Checkbox = ({ id, name, className, checked, defaultValue, onChange }: {
	id: string;
	name: string;
	className: string;
	checked: boolean;
	defaultValue: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {


	return (
		<div className={`${styles.checkbox} ${className}`}>
			<input
				id={id}
				type="checkbox"
				name={name}
				checked={checked}
				defaultValue={defaultValue}
				onChange={onChange}
			/>
		</div>
	);
};

export default Checkbox;
// const [checkList, setCheckList] = useState<string[]>([]);

	// const checkAll = (event: ChangeEvent<HTMLInputElement>) => {
	// 	if (event.target.checked) {
	// 		setCheckList([defaultValue]);
	// 	} else {
	// 		setCheckList([]);
	// 	}
	// };

	// const check = (event: ChangeEvent<HTMLInputElement>) => {
	// 	if (event.target.checked) {
	// 		setCheckList((prev) => [...prev, event.target.name]);
	// 	} else {
	// 		setCheckLis	t((prev) => prev.filter((choice) => choice !== event.target.name));
	// 	}
	// };


// onChange={check}
// checked={checkList.includes(defaultValue)}

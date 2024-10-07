// scr/components/sementic/select.component.tsx
// select box component
import React, { useState, useRef, useEffect } from 'react';
import styles from './select.module.scss';

// 옵션 타입 정의
type Option = {
	label?: string;
	value?: string;
};

// Props 타입 정의
interface CustomSelectProps {
	options: { label: string; options: Option[] }[];
	selectedOption: Option;
	setSelectedOption: (option: Option) => void;
	id: string;
}

const ComponentSelect = (props: CustomSelectProps) => {
	const {
		options,
		selectedOption,
		setSelectedOption,
		id
	} = props;

	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => {
	  setIsOpen((prev) => !prev);
	};

	const handleOptionClick = (option: Option) => {
	  setSelectedOption(option);
	  setIsOpen(false);
	};

	useEffect(() => {
	  const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
		  setIsOpen(false);
		}
	  };

	  document.addEventListener('mousedown', handleClickOutside);
	  return () => {
		document.removeEventListener('mousedown', handleClickOutside);
	  };
	}, []);

	return (
	  <div className={styles[id]} ref={dropdownRef}>
		<div className={styles.select} onClick={toggleDropdown}>
		  	{selectedOption.label}
		  	<span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
		</div>
		{isOpen && (
			<div className={styles.select_list}>
				{options.map((group, groupIndex) => (
				<ul key={groupIndex} className={styles.optgroup}>
					{group.options.map((option) => (
					<li
						key={option.value}
						className={styles.option}
						onClick={() => handleOptionClick(option)}
					>
						<a href={option.value} target='_blank' rel='noopener noreferrer'>{option.label}</a>
					</li>
					))}
				</ul>
				))}
		  </div>
		)}
	  </div>
	);
};

export default ComponentSelect;

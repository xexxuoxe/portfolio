// scr/components/_utiles/select/select.component.tsx
// select component
import React, { useState, useRef, useEffect } from 'react';
import styles from './select.module.scss';

// 옵션 타입 정의
type Option = {
	label?: string;
	value?: string;
};

// Props 타입 정의
interface CustomSelectProps {
	className?: string;
	options: { label: string; options: Option[] }[];
	selectedOption: Option;
	setSelectedOption: (option: Option) => void;
}

const Select = ({ className, options, selectedOption, setSelectedOption }: CustomSelectProps) => {

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
	  <div ref={dropdownRef} className={`${styles.select} ${className}`}>
		<div className={styles.select_current} onClick={toggleDropdown}>
		  	{selectedOption.label}
		  	<span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
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
	  </div>
	);
};

export default Select;

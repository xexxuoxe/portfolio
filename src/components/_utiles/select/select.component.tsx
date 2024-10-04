// components/CustomSelect.js
import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.css'; // CSS Module import

const CustomSelect = ({ options, selectedOption, setSelectedOption, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // 클릭 외부 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
				{group.options.map((option, optionIndex) => (
					<li key={optionIndex} className={styles.option} onClick={() => handleOptionClick(option)}>
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

export default CustomSelect;

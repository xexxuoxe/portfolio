/*
	select component
	src/components/_utiles/select/select.component.tsx
*/
import React, { useState, useRef, useEffect } from 'react';
import styles from './select.module.scss';

type Option = {
	label?: string;
	value?: string;
};
interface CustomSelectProps {
	options: { label: string; options: Option[] }[];
	variant: string;
	className?: string;
	selectedOption: Option;
	setSelectedOption: (option: Option) => void;
}

const Select = ({ options, variant, className, selectedOption, setSelectedOption }: CustomSelectProps) => {

	const [ isOpen, setIsOpen ] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => {
	  setIsOpen(( prev ) => !prev );
	};

	const handleOptionClick = ( option: Option ) => {
	  setSelectedOption(option);
	  setIsOpen(false);
	};

	useEffect(() => {
	  const handleClickOutside = ( event: MouseEvent ) => {
		if ( dropdownRef.current && !dropdownRef.current.contains( event.target as Node )) {
		  setIsOpen(false);
		}
	  };

	  document.addEventListener( 'mousedown', handleClickOutside );
	  return () => {
		document.removeEventListener( 'mousedown', handleClickOutside );
	  };
	}, []);

	return (
	  <div ref={ dropdownRef } className={ `${ styles.select } ${ styles[variant] } ${ className }` }>
		<div className={ styles.select_current } onClick={ toggleDropdown }>
		  	{ selectedOption.label }
		  	<span className={ styles.arrow }>{ isOpen ? '▲' : '▼' }</span>
			{ isOpen && (
				<div className={ styles.select_list }>
					{ options.map((group, groupIndex) => (
					<ul key={ groupIndex } className={ styles.optgroup }>
						{ group.options.map(( option ) => (
						<li
							key={ option.value }
							className={ styles.option }
							onClick={ () => handleOptionClick(option) }
						>
							<a href={ option.value } target='_blank' rel='noopener noreferrer'>{ option.label }</a>
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

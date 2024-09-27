import React, { useState } from 'react';
import styles from './toggleArrow.module.scss';

interface ToggleArrowButtonProps {
  initialState?: boolean;
  onChange?: (isExpanded: boolean) => void;
}

const ToggleArrowButton: React.FC<ToggleArrowButtonProps> = ({
  initialState = false,
  onChange
}) => {
  const [isExpanded, setIsExpanded] = useState(initialState);

  const handleClick = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <button
      className={`${styles.button} ${isExpanded ? styles.expanded : ''}`}
      onClick={handleClick}
      aria-expanded={isExpanded}
    >
      <span className={styles.visuallyHidden}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </span>
    </button>
  );
};

export default ToggleArrowButton;
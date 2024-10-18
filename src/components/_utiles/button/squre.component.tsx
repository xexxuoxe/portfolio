import React from 'react';
import styles from './squre.module.scss';

// 버튼 컴포넌트의 props 타입 정의
interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    disabled?: boolean;
    backgroundColor?: string;
    textColor?: string;
    className?: string;
    style?: React.CSSProperties;
}

// Button 컴포넌트 정의
const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    disabled = false,
    backgroundColor,
    textColor,
    className = '',
    style = {},
    ...rest
}) => {
    // 기본 스타일과 전달받은 스타일을 병합
    const buttonStyle: React.CSSProperties = {
        backgroundColor,
        color: textColor,
        ...style
    };

    // 이벤트 핸들러 래퍼 함수
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={disabled}
            className={`${styles.button} ${className}`}
            style={buttonStyle}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;

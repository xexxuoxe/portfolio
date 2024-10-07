import React from 'react';
import Button from '@components/_utiles/button/squre.component'; // 버튼 컴포넌트의 위치에 따라 경로 조정이 필요할 수 있습니다.
import styles from './Popup.module.scss';
import { PopupProps } from './popup.hook';

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, message, buttons }) => {
    if (!isOpen) return null;

    // 기본 확인 버튼
    const defaultButton = {
        text: '확인',
        onClick: onClose,
        backgroundColor: '#4285F4'
    };

    // buttons prop이 제공되지 않았을 경우 기본 버튼 사용
    const buttonOptions = buttons && buttons.length > 0 ? buttons : [defaultButton];

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <div className={styles.message}>{message}</div>
                <div className={styles.buttonContainer}>
                    {buttonOptions.map((button, index) => (
                        <Button
                            key={index}
                            onClick={button.onClick}
                            backgroundColor={button.backgroundColor}
                            className={styles.button}
                        >
                            {button.text}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Popup;

// components/ContainerLoading.tsx

import React from 'react';
import styles from './loading.module.scss';

interface ContainerLoadingProps {
    text?: string;
}

const ContainerLoading: React.FC<ContainerLoadingProps> = ({ text = 'Loading...' }) => {
    return (
        <div 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: 100
            }}
        >
            <div className={styles.loadingWrapper}>
                <div className={styles.spinner}></div>
                {text && <p className={styles.loadingText}>{text}</p>}
            </div>
        </div>
    );
};

export default ContainerLoading;
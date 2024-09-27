'use client'

import React from 'react';
import styles from './page.module.scss';

import FormComponent from '@components/signup/step2/form.component'

const Step2: React.FC = () => {
    
    return (
        <div className={`${styles.join_step2} ${styles.join_step}`}>
            <FormComponent />
        </div>
    )
}

export default Step2;
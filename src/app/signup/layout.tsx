'use client'

import React from 'react';
import styles from './page.module.scss';

interface RootLayoutProps{
    children: React.ReactNode
}

const Signup: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <div className={ styles.sub_section } id={ styles.siwon_container }>
            <div className={ `${styles.inner_container} ${styles.member}` } >
                <div className={ styles.top_wrap }>
                    <h2 className={ styles.tit }>통합회원 가입</h2>
                </div>
                
                <div className={ styles.contents }>
                    {children}
                </div>

            </div>
        </div>
    )
}

export default Signup;
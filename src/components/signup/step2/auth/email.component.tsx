import React, { useEffect, useRef } from 'react';
import styles from './../form.module.scss';
import SqureButton from '@components/_utiles/button/squre.component';
import { useAuthHook } from './auth.hook';


interface AuthComponentProps {
    handleAuthChange: (type: 'phone' | 'email', receiver: string, result : boolean) => void;
}

const AuthEmail: React.FC<AuthComponentProps> = ( { handleAuthChange } ) => {


    const {
        email,
        verify,
        receiver,
        handleSendVerify,
    } = useAuthHook('email');
    
    const prevVerifyResultRef = useRef(verify.state.verifyResult);

    useEffect(() => {
        // 현재 verifyResult 값과 이전 값을 비교
        if (verify.state.verifyResult !== prevVerifyResultRef.current && verify.state.verifyResult === true) {
            console.log('verifyResult changed to true');
            handleAuthChange('phone', receiver, true);
        }

        // 현재 값을 이전 값으로 업데이트
        prevVerifyResultRef.current = verify.state.verifyResult;

    }, [verify.state.verifyResult, handleAuthChange, receiver]);

    return (
        <>
            <div className={styles.formGroup}>
                <label htmlFor="email1">이메일*</label>
                
                <p className={styles.discwaring}>
                    ※ 다음,핫메일을 이용시 해당 업체의 정책에 따라 미수신 될 수 있습니다.<br />
                    인증 번호 메일 미수신 시 스팸메일함을 확인하시기 바랍니다.
                </p>

                <div className={ `${styles.InputGroupMulti}` } >
                    <input
                        type="text"
                        ref={email.ref.email1}
                        id="email1"
                        name="email1"
                        value={email.state.email1}
                        onChange={ email.handleInputChange }
                        placeholder="이메일"
                        required
                    />
                    <span className={styles.separator}>@</span>
                    <input
                        type="text"
                        ref={email.ref.email2}
                        id="email2"
                        name="email2"
                        value={email.state.email2}
                        onChange={ email.handleInputChange }
                        readOnly= { email.ref.emailDomain.current?.value != "" }
                        placeholder="직접입력"
                        required
                    />
                    <select 
                        ref= { email.ref.emailDomain}
                        onChange={ email.handleDomainChange}
                        >
                        <option value="">직접입력</option>
                        <option value="naver.com">네이버</option>
                        <option value="gmail.com">구글</option>
                        <option value="nate.com">네이트</option>
                        <option value="daum.net">다음</option>
                    </select>
                </div>
                <SqureButton 
                    className={styles.verifyButton}
                    onClick={ handleSendVerify }
                    >인증번호 발송
                </SqureButton>
            </div>
            
            <div className={styles.formGroup}>
                <div className={ `${styles.InputGroupVerifyConfirm}` } >
                    <input
                        type="input"
                        ref={ verify.ref }
                        id="verifyInput"
                        name="verifyInput"
                        maxLength={ 6 }
                        value={ verify.state.verifyCode }
                        className={ styles.inputDefault }
                        onChange={ verify.handleInputChange }
                        placeholder="인증번호를 입력해주세요."
                        readOnly={ verify.state.verifyResult }
                        required
                    />

                    <SqureButton 
                        className={ `${styles.ConfirmButton} ${ (verify.state.verifyResult === true) && styles.disabled }`} 
                        onClick={ verify.confirmButton }
                        >인증확인
                    </SqureButton>
                </div>
            </div>
        </>
    );
};

export default AuthEmail;
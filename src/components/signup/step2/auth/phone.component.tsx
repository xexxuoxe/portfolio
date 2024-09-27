import React, { useEffect, useRef } from 'react';
import styles from './../form.module.scss';
import SqureButton from '@components/_utiles/button/squre.component';
import { useAuthHook } from './auth.hook';

interface AuthComponentProps {
    handleAuthChange: (type: 'phone' | 'email', receiver: string, result : boolean) => void;
}

const AuthPhone: React.FC<AuthComponentProps> = ( { handleAuthChange } ) => {

    const {
        phone,
        verify,
        receiver,
        handleSendVerify,
    } = useAuthHook('phone');

    
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
                <label htmlFor="phoneNumber1">휴대전화*</label>
                <div className={ `${styles.InputGroupMulti}` } >
                    <input
                        type="text"
                        ref={phone.ref.phone1}
                        id="phoneNumber1"
                        name="phoneNumber1"
                        value={phone.state.phoneNumber1}
                        onChange={ phone.handleInputChange }
                        placeholder="010"
                        maxLength={3}
                        className={ styles.center }
                        required
                    />
                    <span className={styles.separator}>-</span>
                    <input
                        type="text"
                        ref={phone.ref.phone2}
                        id="phoneNumber2"
                        name="phoneNumber2"
                        value={phone.state.phoneNumber2}
                        onChange={ phone.handleInputChange }
                        placeholder="0000"
                        maxLength={4}
                        className={ styles.center }
                        required
                    />
                    <span className={styles.separator}>-</span>
                    <input
                        type="text"
                        ref={phone.ref.phone3}
                        id="phoneNumber3"
                        name="phoneNumber3"
                        value={phone.state.phoneNumber3}
                        onChange={ phone.handleInputChange }
                        placeholder="0000"
                        maxLength={4}
                        className={ styles.center }
                        required
                    />
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

            <div className={styles.formGroup}>
                <p className={styles.disclaimer}>※ 선택사항에서 나이를 선택하지 않으면 만 14세 이상 회원가입 됩니다.</p>
            </div>
            
        </>
    );
};

export default AuthPhone;
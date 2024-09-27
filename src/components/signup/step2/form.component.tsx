import React from 'react';
import styles from './form.module.scss';
import { useFormHook } from '@hooks/signup/form.hook';
import SqureButton from '@components/_utiles/button/squre.component';
import { AuthEmail, AuthPhone } from './auth'

const FormComponent: React.FC = () => {

    const {
        formData,
        validity,
        authMethod,
        handleInputChange,
        handleSubmit,
        handleAuthMethodChange,
        handleAuthChange,
        inputRefs
    } = useFormHook();

    const renderValidityMessage = (value: string, message: string) => {
        const isValid = message === '사용 가능합니다.' || message === '비밀번호가 일치합니다.';
        if( !value ) return ;
        
        return (
            <p className={isValid ? styles.validMessage : styles.invalidMessage}>
                {message}
            </p>
        );
    };

    return (
        <form onSubmit={ handleSubmit } >
            <div className={ styles.join_form }>
                <div className={ styles.tit_area }>
                    <h3>기본정보</h3>
                    <strong className={ styles.txt_mark }>* 필수입력항목</strong>
                </div>

                <div className={ styles.form_wrap }>
                    <div className={ styles.form }>
                        <div className={styles.formGroup}>
                            <label htmlFor="id">아이디*</label>
                            <input
                                ref={inputRefs.id}
                                type="text"
                                id="id"
                                name="id"
                                className={ styles.inputDefault }
                                value={formData.id}
                                onChange={handleInputChange}
                                placeholder="5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능"
                                required
                            />
                            { renderValidityMessage(formData.id, validity.id) }
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="password">비밀번호*</label>
                            <input                            
                                ref={inputRefs.password}
                                type="password"
                                id="password"
                                name="password"
                                className={ styles.inputDefault }
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="8~20자 영문 숫자 특수문자(제외) 조합"
                                required
                            />
                            { renderValidityMessage(formData.password, validity.password) }
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="passwordConfirm">비밀번호 확인*</label>
                            <input
                                ref={inputRefs.passwordConfirm}
                                type="password"
                                id="passwordConfirm"
                                name="passwordConfirm"
                                className={ styles.inputDefault }
                                value={formData.passwordConfirm}
                                onChange={handleInputChange}
                                placeholder="위의 비밀번호를 다시 한번 기입하세요."
                                required
                            />
                            { renderValidityMessage(formData.passwordConfirm, validity.passwordConfirm) }
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="name">이름*</label>
                            <input
                                ref={inputRefs.name}
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                className={ styles.inputDefault }
                                onChange={handleInputChange}
                                placeholder="이름을 입력해주세요."
                                required
                            />
                            { renderValidityMessage(formData.name, validity.name) }
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor='auth'>본인인증*(본인인증 방식 선택)</label>
                            <div className={styles.authMethodContainer}>
                                <SqureButton
                                    className={`${styles.authMethodButton} ${authMethod === 'phone' ? styles.active : ''}`}
                                    onClick={() => handleAuthMethodChange('phone')}
                                >
                                    휴대폰 인증
                                </SqureButton>
                                <SqureButton
                                    className={`${styles.authMethodButton} ${authMethod === 'email' ? styles.active : ''}`}
                                    onClick={() => handleAuthMethodChange('email')}
                                >
                                    이메일 인증
                                </SqureButton>
                            </div>
                        </div>

                        {authMethod === 'phone' && <AuthPhone handleAuthChange={handleAuthChange} ></AuthPhone>}
                        {authMethod === 'email' && <AuthEmail handleAuthChange={handleAuthChange}></AuthEmail>}
                    </div>
                </div>
            </div>
            
            <div className={ styles.join_form }>
                <div className={ styles.tit_area }>
                    <h3>선택정보</h3>
                </div>

                <div className={ styles.form_wrap }>
                    <div className={ styles.form }>
                        {authMethod === 'phone' && (
                            <div className={styles.formGroup}>
                                <label htmlFor="email1">이메일</label>
                                <div className={ `${styles.InputGroupMulti}` } >
                                    <input
                                        type="text"
                                        id="email1"
                                        name="email1"
                                        placeholder="이메일"
                                        required
                                    />
                                    <span className={styles.separator}>@</span>
                                    <input
                                        type="text"
                                        id="email2"
                                        name="email2"
                                        placeholder="직접입력"
                                        required
                                    />
                                    <select 
                                        >
                                        <option value="">직접입력</option>
                                        <option value="naver.com">네이버</option>
                                        <option value="gmail.com">구글</option>
                                        <option value="nate.com">네이트</option>
                                        <option value="daum.net">다음</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {authMethod === 'email' && (
                            <div className={styles.formGroup}>
                                <label htmlFor="phoneNumber1">휴대전화</label>
                                <div className={ `${styles.InputGroupMulti}` } >
                                    <input
                                        type="text"
                                        id="phoneNumber1"
                                        name="phoneNumber1"
                                        placeholder="010"
                                        maxLength={3}
                                        className={ styles.center }
                                        required
                                    />
                                    <span className={styles.separator}>-</span>
                                    <input
                                        type="text"
                                        id="phoneNumber2"
                                        name="phoneNumber2"
                                        placeholder="0000"
                                        maxLength={4}
                                        className={ styles.center }
                                        required
                                    />
                                    <span className={styles.separator}>-</span>
                                    <input
                                        type="text"
                                        id="phoneNumber3"
                                        name="phoneNumber3"
                                        placeholder="0000"
                                        maxLength={4}
                                        className={ styles.center }
                                        required
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <SqureButton
                style={{
                    height: '70px'
                }}
                backgroundColor="#2f62cb"
                onClick={ (e) => handleSubmit(e) }
            >
                가입하기
            </SqureButton>
        </form>
    );
};

export default FormComponent;
'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import CheckBox from '@components/_utiles/form/checkbox.component';
import SqureButton from '@components/_utiles/button/squre.component';
import BanSlide from './banner';
import api from '@lib/api/fetch.client'; 
import { useAlert } from '@lib/alert/alert.context'
import { useCookies } from 'react-cookie';

const LoginForm: React.FC = () => {
    const { showAlert } = useAlert();
    const [cookies, setCookie, removeCookie] = useCookies(['rememberId']);

    const [userid, setUserid] = useState('');
    const useridRef = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState('');
    const passwordRef = useRef<HTMLInputElement>(null);
    const [rememberId, setRememberId] = useState(false);

    useEffect( () => {
        if( cookies.rememberId ){
            setUserid(cookies.rememberId);
        }
    },[cookies.rememberId])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // 여기에 로그인 로직을 구현합니다

        if( !userid.trim() ){
            showAlert('아이디를 입력해 주세요.');
            useridRef.current?.focus();
            return false;
        }
        
        if( !password.trim() ){
            showAlert('비밀번호를 입력해 주세요.');
            passwordRef.current?.focus();
            return false;
        }

        const formData = {
            userid: userid,
            password: password
        }
        try {
            const response = await api.post<{ message: string }>('/api/signin', formData);
            if( response.status == 1 ){
                if( rememberId === true ){
                    setCookie('rememberId', userid, { path: '/', maxAge: 86400 });
                }else{
                    removeCookie('rememberId', { path: '/'})
                }

                alert('로그인 성공');
            }else{
                showAlert('로그인 도중 오류가 발생했습니다.');
            }

            
        } catch ( error ) {
            showAlert('로그인 도중 오류가 발생했습니다.');            
        }


        return true;
    };

	return (
        <div className={ styles.login_section } id="">
            <div className={ `${styles.contents}` }>
                <h2 className={ styles.login_tit }>지금 시원스쿨과 함께<br />세계 언어를 마스터하세요!</h2>
                <p className={ styles.notice }>한 아이디로 전 사이트를 이용하실 수 있습니다.</p>

                <div className={ styles.login_area }>
                    
                    <form className={styles.loginForm} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <div className={styles.iconInput}>
                                <Image 
                                    src="https://siwon-cdn.siwonschool.com/member/login/ico_userid.png" 
                                    alt="User Icon"
                                    width={25}
                                    height={25}
                                    className={styles.icon}
                                />
                                <input
                                    type="text"
                                    ref={ useridRef }
                                    value={userid}
                                    onChange={(e) => setUserid(e.target.value)}
                                    placeholder="아이디"
                                    className={styles.input}
                                />
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <div className={styles.iconInput}>
                                <Image 
                                    src="https://siwon-cdn.siwonschool.com/member/login/ico_password.png"
                                    width={25}
                                    height={25}
                                    alt="Password Icon"
                                    className={styles.icon}
                                />
                                <input
                                    type="password"
                                    ref={ passwordRef }
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="비밀번호"
                                    className={styles.input}
                                />
                            </div>
                        </div>
                        <div className={styles.rememberId}>
                            <CheckBox 
                                size={16}
                                id="rememberId"
                                checked={rememberId}
                                onChange={(checked) => setRememberId(checked)}
                                label="아이디저장"
                                labelClass={ styles.rememberIdCheckBox }
                            />
                        </div>

                        <SqureButton
                            style={{
                                height: '60px'
                            }}
                            backgroundColor="#2f62cb"
                            onClick={ handleSubmit }
                        >
                            로그인
                        </SqureButton>
                        <div className={styles.links}>
                            <Link href="#">아이디 · 비밀번호 찾기</Link>
                        </div>
                    </form>

                    
                    <div className={ styles.wrap_sns }>
                        <ul className={ styles.sns_list }>
                            <li>
                                <Link href="/?s=sns&mode=join&sns_type=kakao" >
                                    <Image 
                                        src="https://siwon-cdn.siwonschool.com/member/login/kakao.png"
                                        width={65}
                                        height={65}
                                        alt="카카오 로그인"
                                        className={ styles.icon }
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/?s=sns&mode=join&sns_type=naver" >
                                    <Image 
                                        src="https://siwon-cdn.siwonschool.com/member/login/naver.png"
                                        width={65}
                                        height={65}
                                        alt="네이버 로그인"
                                        className={ styles.icon }
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/?s=sns&mode=join&sns_type=google" >
                                    <Image 
                                        src="https://siwon-cdn.siwonschool.com/member/login/google.png"
                                        width={65}
                                        height={65}
                                        alt="구글 로그인"
                                        className={ styles.icon }
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <BanSlide />
            </div>
        </div>
	)
}

export default LoginForm;
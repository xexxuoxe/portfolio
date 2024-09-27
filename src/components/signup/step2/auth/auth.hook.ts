import { useState, useRef, ChangeEvent } from 'react';
import api from '@lib/api/fetch.client'; 
import { useAlert } from '@lib/alert/alert.context'
import { useLoading } from '@lib/loading/loading.context';

interface PhoneState {
    phoneNumber1: string;
    phoneNumber2: string;
    phoneNumber3: string;
}

interface EmailState {
    email1: string;
    email2: string;
}

interface VerifyState {
    verifyCode: string;
    verifyResult: boolean;
}

type AuthMethod = 'phone' | 'email';

export const useAuthHook = (type: AuthMethod) => {
    const authMethod = type;

    const { showAlert } = useAlert();
    const { setLoading } = useLoading();
    const [receiver, setReceiver] = useState<string>('');

    const [verifyState, setVerifyState] = useState<VerifyState>({
        verifyCode: "",
        verifyResult: false
    });
    const verifyCodeRef = useRef<HTMLInputElement>(null);
    
    const phoneNumberRef = {
        phone1 : useRef<HTMLInputElement>(null),
        phone2 : useRef<HTMLInputElement>(null),
        phone3 : useRef<HTMLInputElement>(null),
    }
    
    const [phoneState, setPhoneState] = useState<PhoneState>({
        phoneNumber1: '',
        phoneNumber2: '',
        phoneNumber3: '',
    });

    
    const emailRef = {
        email1 : useRef<HTMLInputElement>(null),
        email2 : useRef<HTMLInputElement>(null),
        emailDomain: useRef<HTMLSelectElement>(null),
    }
    const [emailState, setEmailState] = useState<EmailState>({
        email1: '',
        email2: ''
    });

    const phoneHandlers = {

        handleInputChange : (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            const maxLength = e.target.maxLength;
    
            setPhoneState(prev => ({ ...prev, [name]: value }));
    
            if (value.length === maxLength) {
                if (name === 'phoneNumber1' && phoneNumberRef.phone2.current) {
                    phoneNumberRef.phone2.current.focus();
                } else if (name === 'phoneNumber2' && phoneNumberRef.phone3.current) {
                    phoneNumberRef.phone3.current.focus();
                }
            }
        },

        setForm : () => {
            return {
                type : 'phone',
                receiver: `${phoneState.phoneNumber1}-${phoneState.phoneNumber2}-${phoneState.phoneNumber3}`,
            };
        },

        validator: () => {
            if( !phoneState.phoneNumber1.trim() ){
                showAlert('휴대전화번호 첫번째자리를 입력해 주세요');
                return false;
            }
            if( !phoneState.phoneNumber2.trim() ){
                showAlert('휴대전화번호 두번째자리를 입력해 주세요');
                return false;
            }
            if( !phoneState.phoneNumber3.trim() ){
                showAlert('휴대전화번호 세번째자리를 입력해 주세요');
                return false;
            }

        }
    }

    const emailHandlers = {

        handleDomainChange : ( e: ChangeEvent<HTMLSelectElement>) => {
            const domain = e.target.value;
            setEmailState( prev => ({ ...prev, email2: domain}) );
        },

        handleInputChange : (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
    
            setEmailState(prev => ({ ...prev, [name]: value }));    
        },

        setForm : () => {
            return {
                type : 'email',
                receiver: `${emailState.email1}@${emailState.email2}`,
            };
        },

        validator: () => {
            if( !emailState.email1.trim() ){
                showAlert('이메일 주소를 입력해 주세요.');
                return false;
            }
            if( !emailState.email2.trim() ){
                showAlert('이메일 주소 도메일을 입력해 주세요.');
                return false;
            }
        }
    }

    const handleSendVerify = async () => {
        let formData : {
            type : string,
            receiver: string
        } = { type: "", receiver: ""};

        switch( authMethod ){
            case 'email' :
                if( emailHandlers.validator() === false ) return ;
                formData = emailHandlers.setForm()
                break;
            case 'phone' :
                if( phoneHandlers.validator() === false ) return ;
                formData = phoneHandlers.setForm()
                break;
            default : 
                break;
        }

        setLoading(true);        
        try {
            const response = await api.post<{ message: string }>('/api/signup/auth', formData);

            if( response.status == 1 ){
                setReceiver(formData.receiver);
                showAlert(`${response.message}`);
            }

            if (verifyCodeRef.current) {
                verifyCodeRef.current.focus();
            }
        } catch (error) {
            if (error instanceof Error) {
                showAlert(`인증번호 발송 중 오류가 발생했습니다.`);
            } else {
                showAlert(`알 수 없는 이류로 오류가 발생했습니다.`);
            }
            console.error('Verification send error:', error);
        } finally {
            setLoading(false);
        }
    };
    

    const verifyHandlers = {
        handleInputChange : (e: ChangeEvent<HTMLInputElement>) => {
            setVerifyState( prev => ( { ...prev, verifyCode: e.target.value }));
        },
        confirmButton : async () => {
            if( !verifyState.verifyCode.trim() ){
                showAlert(`인증번호를 입력해 주세요.`);
                return ;
            }

            if( verifyState.verifyResult === true ){
                showAlert(`이미 인증되었습니다.`);
                return ;
            }

            setLoading(true);
            const formData = {
                type: authMethod,
                verifyCode : verifyState.verifyCode
            };
    

            setLoading(true);        
            try {
                const response = await api.post<{ message: string }>('/api/signup/authverify', formData);
    
                if( response.status == 1 ){
                    showAlert(`${response.message}`);
                    setVerifyState( prev => ( { ...prev, verifyResult: true }));
                }
            } catch (error) {
                if (error instanceof Error) {
                    showAlert(`인증도중 오류가 발생했습니다.`);
                } else {
                    showAlert(`알 수 없는 이류로 오류가 발생했습니다.`);
                }
                console.error('Verification send error:', error);
            } finally {
                setLoading(false);
            }
        }
    }

    return {
        phone : {
            state: phoneState,
            ref: phoneNumberRef,
            ...phoneHandlers
        },
        email : {
            state: emailState,
            ref: emailRef,
            ...emailHandlers
        },
        verify : {
            ref : verifyCodeRef,
            state : verifyState,
            ...verifyHandlers
        },
        receiver,
        handleSendVerify,
    };
};
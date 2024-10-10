import { useState, useEffect, useRef } from 'react';
import api from '@lib/api/fetch.client';
import { useAlert } from '@lib/alert/alert.context'

interface FormData {
    id: string;
    password: string;
    passwordConfirm: string;
    name: string;
    phone: string;
    email: string;
    authType: 'phone' | 'email',
    authConfirm: boolean,
}

interface Validity {
    id: string;
    password: string;
    passwordConfirm: string;
    name: string;
}

export const useFormHook = () => {
    const { showAlert } = useAlert();

    const [formData, setFormData] = useState<FormData>({
        id: '',
        password: '',
        passwordConfirm: '',
        name: '',
        phone: '',
        email: '',
        authType: 'phone',
        authConfirm: false,
    });

    const [validity, setValidity] = useState<Validity>({
        id: '',
        password: '',
        passwordConfirm: '',
        name: '',
    });

    const [authMethod, setAuthMethod] = useState<'phone' | 'email'>('phone');

    // 각 입력 필드에 대한 ref 생성
    const inputRefs = {
        id: useRef<HTMLInputElement>(null),
        password: useRef<HTMLInputElement>(null),
        passwordConfirm: useRef<HTMLInputElement>(null),
        name: useRef<HTMLInputElement>(null),
        phone: useRef<HTMLInputElement>(null),
    };

    const validateId = (id: string) => {
        const regex = /^[a-z0-9_-]{5,20}$/;
        return regex.test(id) ? '사용 가능합니다.' : '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.';
    };

    const validatePassword = (password: string) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
        return regex.test(password) ? '사용 가능합니다.' : '8~20자 영문, 숫자 조합으로 입력해주세요.';
    };

    const validatePasswordConfirm = (password: string, passwordConfirm: string) => {
        return password === passwordConfirm ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.';
    };

    const validateName = (name: string) => {
        return name.length > 0 ? '사용 가능합니다.' : '이름을 입력해주세요.';
    };

    useEffect(() => {
        // validate 체크
        setValidity({
            id: validateId(formData.id),
            password: validatePassword(formData.password),
            passwordConfirm: validatePasswordConfirm(formData.password, formData.passwordConfirm),
            name: validateName(formData.name),
        });
    }, [formData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAuthChange = ( type: 'phone' | 'email', receiver: string, result : boolean) => {
        setFormData(prev => ({ ...prev, [type]: receiver, authConfirm: true, authType: type }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 각 필드의 유효성 검사
        const newValidity = {
            id: validateId(formData.id),
            password: validatePassword(formData.password),
            passwordConfirm: validatePasswordConfirm(formData.password, formData.passwordConfirm),
            name: validateName(formData.name),
        };

        setValidity(newValidity);

        // 유효하지 않은 첫 번째 필드 찾기
        const invalidField = Object.entries(newValidity).find(([_, value]) => value !== '사용 가능합니다.' && value !== '비밀번호가 일치합니다.');

        if (invalidField) {
            // 유효하지 않은 필드가 있으면 해당 필드로 포커스 이동
            const [fieldName] = invalidField;
            inputRefs[fieldName as keyof typeof inputRefs]?.current?.focus();
            return false; // 폼 제출 중단
        }

        // 모든 필드가 유효하면 폼 데이터 처리
        console.log('Form submitted:', formData);

        const response = await api.post<{ message: string }>('/api/signup', formData);

        if( response.status == 1 ){
            showAlert(`${response.message}`);
        }

        return true; // 폼 제출 성공
    };

    const handleAuthMethodChange = (method: 'phone' | 'email') => {
        setAuthMethod(method);
    };

    return {
        formData,
        validity,
        authMethod,
        handleInputChange,
        handleSubmit,
        handleAuthMethodChange,
        handleAuthChange,
        inputRefs, // ref 객체 반환
    };
};

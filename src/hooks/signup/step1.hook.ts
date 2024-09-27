'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAgreeState, setAgreeState, AgreeState } from '@store/slices/signup/agree.slice';

const useSignupStep1 = () => {
    const dispatch = useDispatch();
    const agreeState = useSelector(selectAgreeState);

    // 로컬 상태로 관리
    const [isDetail, setIsDetail] = useState<AgreeState>({
        all: false,
        util: false,
        essential: false,
        personal: false,
        marketing: false,
    });
    const [isAgo, setIsAgo] = useState<string | null>(null);

    const toggleDetail = (type: keyof AgreeState) => {
        setIsDetail(prevState => ({
            ...prevState,
            [type]: !prevState[type]
        }));
    };

    const checkAgree = (type: keyof AgreeState, checked: boolean) => {
        if (type === 'all') {
            dispatch(setAgreeState({
                all: checked,
                util: checked,
                essential: checked,
                personal: checked,
                marketing: checked,
            }));
        } else {
            const newState = {
                ...agreeState,
                [type]: checked,
            };
            newState.all = Object.entries(newState).every(([key, value]) => key === 'all' || value);
            dispatch(setAgreeState(newState));
        }
    };

    return { 
        isChecked: agreeState, 
        isDetail, 
        isAgo, 
        toggleDetail, 
        checkAgree, 
        setIsAgo 
    };
};

export default useSignupStep1;
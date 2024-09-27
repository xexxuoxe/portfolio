'use client';

import { useState, useCallback } from 'react';

export interface ButtonOption {
    text: string;
    onClick: () => void;
    backgroundColor?: string;
}

export interface PopupState {
    isOpen: boolean;
    message: string;
    buttons?: ButtonOption[];
}

export interface PopupProps extends PopupState {
    onClose: () => void;
}

const usePopup = () => {
    const [popupState, setPopupState] = useState<PopupState>({
        isOpen: false,
        message: '',
    });

    const openPopup = useCallback((message: string, buttons?: ButtonOption[]) => {
        setPopupState({
            isOpen: true,
            message,
            buttons,
        });
    }, []);

    const closePopup = useCallback(() => {
        setPopupState(prev => ({ ...prev, isOpen: false }));
    }, []);

    return {
        popupState,
        openPopup,
        closePopup,
    };
};

export default usePopup;
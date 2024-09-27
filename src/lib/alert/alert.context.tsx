'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Popup, usePopup } from '@components/_utiles/popup/default';

interface AlertContextType {
    showAlert: (message: string) => void;
    alertMessage: string | null;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { popupState, openPopup, closePopup } = usePopup();   
    const [alertMessage, setAlertMessage] = useState<string | null>(null);

    const showAlert = (message: string) => {
        openPopup(message);
        setAlertMessage(message);
    };

    return (
        <AlertContext.Provider value={{ showAlert, alertMessage }}>
            {children}
            <Popup
                isOpen={popupState.isOpen}
                onClose={() => {
                    closePopup();
                //setErrorMessage(null);
                }}
                message={popupState.message}
                buttons={popupState.buttons}
            />
        </AlertContext.Provider>
    );
};

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (context === undefined) {
        throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
};
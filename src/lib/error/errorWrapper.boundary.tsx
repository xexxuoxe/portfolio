// ErrorBoundaryWrapper.tsx
'use client';

import React from 'react';
import ErrorBoundary from './error.boundary';
import { ErrorProvider, useError } from '@lib/context/error.context';
import { Popup, usePopup } from '@components/_utiles/popup/default';
import { AppError, handleAppError } from './error.handler';

const ErrorBoundaryWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { errorMessage, setErrorMessage } = useError();
    const { popupState, openPopup, closePopup } = usePopup();

    const handleError = (error: Error) => {
        if (error instanceof AppError) {
            openPopup(error.message);
        } else {
            handleAppError(error);
        }
    };

    React.useEffect(() => {
        if (errorMessage) {
            console.log(errorMessage)
            openPopup(errorMessage);
        }
    }, [errorMessage, openPopup]);

    return (
        <ErrorBoundary onError={(error) => handleError(error)}>
            {children}
            <Popup
                isOpen={popupState.isOpen}
                onClose={() => {
                    closePopup();
                    setErrorMessage(null);
                }}
                message={popupState.message}
                buttons={popupState.buttons}
            />
        </ErrorBoundary>
    );
};

const ErrorWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ErrorProvider>
            <ErrorBoundaryWrapper>
                {children}
            </ErrorBoundaryWrapper>
        </ErrorProvider>
    );
};

export default ErrorWrapper;
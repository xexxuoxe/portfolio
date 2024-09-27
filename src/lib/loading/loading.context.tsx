'use client'
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import FullPageLoading from './full.component';

interface LoadingContextType {
    isLoading: boolean;
    loadingText: string;
    setLoading: (show: boolean, text?: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingText, setLoadingText] = useState('Loading...');

    const setLoading = useCallback((show: boolean, text?: string) => {
        setIsLoading(show);
        if (text !== undefined) {
            setLoadingText(text);
        }
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading, loadingText, setLoading }}>
            {children}
            {isLoading && <FullPageLoading text={loadingText} />}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};
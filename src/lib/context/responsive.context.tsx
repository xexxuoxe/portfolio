'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Breakpoint = {
    name: string;
    minWidth: number;
};

interface ResponsiveContextType {
    currentBreakpoint: string;
    isBreakpoint: (name: string) => boolean;
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined);

interface ResponsiveProviderProps {
    children: ReactNode;
    breakpoints?: Breakpoint[];
}

// 기본 브레이크포인트 정의
const defaultBreakpoints: Breakpoint[] = [
    { name: 'mobile', minWidth: 0 },
    { name: 'desktop', minWidth: 768 },
];

export const ResponsiveProvider: React.FC<ResponsiveProviderProps> = ({ children, breakpoints }) => {
    // 사용자 정의 브레이크포인트가 없으면 기본값 사용
    const activeBreakpoints = breakpoints && breakpoints.length > 0 ? breakpoints : defaultBreakpoints;

    const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newBreakpoint = activeBreakpoints
                .slice()
                .reverse()
                .find(bp => width >= bp.minWidth);

            if (newBreakpoint) {
                setCurrentBreakpoint(newBreakpoint.name);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [activeBreakpoints]);

    const isBreakpoint = (name: string): boolean => {
        return currentBreakpoint === name;
    };

    return (
        <ResponsiveContext.Provider value={{ currentBreakpoint, isBreakpoint }}>
        {children}
        </ResponsiveContext.Provider>
    );
};

export const useResponsive = (): ResponsiveContextType => {
    const context = useContext(ResponsiveContext);
    if (context === undefined) {
        throw new Error('useResponsive must be used within a ResponsiveProvider');
    }

    return context;
};
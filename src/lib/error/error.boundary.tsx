'use client'
import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    onError: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.props.onError(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return null; // 에러 발생 시 아무것도 렌더링하지 않음 (팝업으로 처리할 것이므로)
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
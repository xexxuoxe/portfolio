// utils/errorHandler.ts
import { useError } from '@lib/context/error.context';

export class AppError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AppError';
    }
}

export const throwAppError = (message: string) => {
    throw new AppError(message);
};

export const handleAppError = (error: unknown) => {
    if (error instanceof AppError) {
        const { setErrorMessage } = useError();
        setErrorMessage(error.message);
    } else if (error instanceof Error) {
        console.error('Unexpected error:', error);
        const { setErrorMessage } = useError();
        setErrorMessage('예상치 못한 오류가 발생했습니다.');
    } else {
        console.error('Unknown error:', error);
        const { setErrorMessage } = useError();
        setErrorMessage('알 수 없는 오류가 발생했습니다.');
    }
};

export const withErrorHandling = <T extends (...args: any[]) => any>(
    fn: T
): ((...args: Parameters<T>) => ReturnType<T>) => {
    return (...args: Parameters<T>): ReturnType<T> => {
        try {
            const result = fn(...args);
            if (result instanceof Promise) {
                return result.catch(handleAppError) as ReturnType<T>;
            }
            return result;
        } catch (error) {
            handleAppError(error);
            throw error;
        }
    };
};
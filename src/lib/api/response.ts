// utils/apiResponses.ts

import { NextResponse } from 'next/server';

interface ApiResponse<T = any> {
    status: number;
    error_code: string;
    message: string;
    data: T | null;
}

/**
 * 성공 응답을 생성합니다.
 * @param data 응답에 포함될 데이터
 * @returns NextResponse 객체
 */
export function successResponse<T>(
    data: T | null = null,
    message : string = ""
): NextResponse {
    const response: ApiResponse<T> = {
        status: 1,
        error_code: "",
        message: message,
        data: data
    };
    return NextResponse.json(response);
}

/**
 * 오류 응답을 생성합니다.
 * @param error 오류 객체 또는 문자열
 * @param errorCode 오류 코드 (선택적)
 * @returns NextResponse 객체
 */
export function errorResponse(error: any, errorCode: string = "UNKNOWN_ERROR"): NextResponse {
    let errorMsg = "An unknown error occurred";

    if (error instanceof Error) {
        errorMsg = error.message;
        errorCode = error.name || errorCode;
    } else if (typeof error === "string") {
        errorMsg = error;
    }

    const response: ApiResponse = {
        status: 0,
        error_code: errorCode,
        message: errorMsg,
        data: null
    };
    return NextResponse.json(response);
}

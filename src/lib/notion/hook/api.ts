// lib/notion/api.ts
import { NotionPage } from '../types';

/**
 * API 응답 타입
 */
interface ApiResponse<T> {
    data?: T;
    error?: string;
}

/**
 * API 요청 설정
 */
const API_BASE_URL = '/api/notion';

/**
 * API 요청 시 사용할 기본 헤더
 */
const getHeaders = () => ({
    'Content-Type': 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
});

/**
 * API 요청 처리 유틸리티 함수
 */
const handleApiResponse = async <T>(response: Response): Promise<T> => {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
    return response.json();
};

/**
 * Notion API 클라이언트
 */
export const notionApi = {
    /**
     * 모든 페이지 목록 조회
     */
    getPages: async (): Promise<NotionPage[]> => {
        try {
            const response = await fetch(API_BASE_URL, {
                method: 'GET',
                headers: getHeaders(),
            });
            return handleApiResponse<NotionPage[]>(response);
        } catch (error) {
            console.error('Failed to fetch pages:', error);
            throw error;
        }
    },

    /**
     * 특정 페이지 조회
     */
    getPage: async (pageId: string): Promise<NotionPage> => {
        try {
            const response = await fetch(`${API_BASE_URL}/${pageId}`, {
                method: 'GET',
                headers: getHeaders(),
            });
            return handleApiResponse<NotionPage>(response);
        } catch (error) {
            console.error(`Failed to fetch page ${pageId}:`, error);
            throw error;
        }
    },

    /**
     * 새 페이지 생성
     */
    createPage: async (title: string, content: string): Promise<NotionPage> => {
        try {
            const response = await fetch(API_BASE_URL, {
                method: 'POST',
                headers: getHeaders(),
                body: JSON.stringify({ title, content }),
            });
            return handleApiResponse<NotionPage>(response);
        } catch (error) {
            console.error('Failed to create page:', error);
            throw error;
        }
    },

    /**
     * 페이지 수정
     */
    updatePage: async (
        pageId: string, 
        title: string, 
        content: string
    ): Promise<NotionPage> => {
        try {
            const response = await fetch(`${API_BASE_URL}/${pageId}`, {
                method: 'PUT',
                headers: getHeaders(),
                body: JSON.stringify({ title, content }),
            });
            return handleApiResponse<NotionPage>(response);
        } catch (error) {
            console.error(`Failed to update page ${pageId}:`, error);
            throw error;
        }
    },

    /**
     * 페이지 삭제
     */
    deletePage: async (pageId: string): Promise<boolean> => {
        try {
            const response = await fetch(`${API_BASE_URL}/${pageId}`, {
                method: 'DELETE',
                headers: getHeaders(),
            });
            
            if (response.status === 204) {
                return true;
            }
            
            await handleApiResponse(response);
            return false;
        } catch (error) {
            console.error(`Failed to delete page ${pageId}:`, error);
            throw error;
        }
    },

    /**
     * 여러 페이지 일괄 삭제
     */
    deletePages: async (pageIds: string[]): Promise<boolean> => {
        try {
            const results = await Promise.all(
                pageIds.map(id => notionApi.deletePage(id))
            );
            return results.every(result => result === true);
        } catch (error) {
            console.error('Failed to delete pages:', error);
            throw error;
        }
    }
};
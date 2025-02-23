
import { useState, useCallback, useEffect } from 'react';
import * as action from '../action';
import { NotionPage } from '../types'

/**
 * Notion 훅 반환 타입
 */
interface UseNotionReturn {
    // 상태
    pages: NotionPage[];
    currentPage: NotionPage | null;
    loading: boolean;
    error: string | null;

    // 메서드
    fetchPages: () => Promise<void>;
    fetchPage: (pageId: string) => Promise<void>;
    createPage: (title: string, content: string) => Promise<void>;
    updatePage: (pageId: string, title: string, content: string) => Promise<void>;
    deletePage: (pageId: string) => Promise<void>;
    
    // 상태 초기화
    resetError: () => void;
    resetCurrentPage: () => void;
}

/**
 * Notion API를 사용하기 위한 커스텀 훅
 */
export const useNotion = (): UseNotionReturn => {
    // 상태 관리
    const [pages, setPages] = useState<NotionPage[]>([]);
    const [currentPage, setCurrentPage] = useState<NotionPage | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    /**
     * 에러 처리 유틸리티 함수
     */
    const handleError = (error: any, message: string) => {
        console.error(message, error);
        setError(message);
        setLoading(false);
    };

    /**
     * 모든 페이지 조회
     */
    const fetchPages = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await action.getPages();

            setPages(response);
        } catch (error) {
            handleError(error, 'Failed to fetch pages');
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * 특정 페이지 조회
     */
    const fetchPage = useCallback(async (pageId: string) => {
        try {
            setLoading(true);
            setError(null);
            const response = await action.getPage(pageId);
            setCurrentPage(response);
        } catch (error) {
            handleError(error, `Failed to fetch page ${pageId}`);
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * 새 페이지 생성
     */
    const createPage = useCallback(async (title: string, content: string) => {
        try {
            setLoading(true);
            setError(null);
            const newPage = await action.createPage(title, content);
            setPages(prev => [...prev, newPage]);
            setCurrentPage(newPage);
        } catch (error) {
            handleError(error, 'Failed to create page');
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * 페이지 수정
     */
    const updatePage = useCallback(async (pageId: string, title: string, content: string) => {
        try {
            setLoading(true);
            setError(null);
            const updatedPage = await action.updatePage(pageId, title, content);
            setPages(prev => prev.map(page => 
                page.id === pageId ? updatedPage : page
            ));
            setCurrentPage(updatedPage);
        } catch (error) {
            handleError(error, `Failed to update page ${pageId}`);
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * 페이지 삭제
     */
    const deletePage = useCallback(async (pageId: string) => {
        try {
            setLoading(true);
            setError(null);
            await action.deletePage(pageId);
            setPages(prev => prev.filter(page => page.id !== pageId));
            if (currentPage?.id === pageId) {
                setCurrentPage(null);
            }
        } catch (error) {
            handleError(error, `Failed to delete page ${pageId}`);
        } finally {
            setLoading(false);
        }
    }, [currentPage]);

    /**
     * 상태 초기화 함수들
     */
    const resetError = useCallback(() => {
        setError(null);
    }, []);

    const resetCurrentPage = useCallback(() => {
        setCurrentPage(null);
    }, []);

    // 컴포넌트 마운트시 페이지 목록 자동 로드
    useEffect(() => {
        fetchPages();
    }, [fetchPages]);

    return {
        // 상태
        pages,
        currentPage,
        loading,
        error,
        
        // 메서드
        fetchPages,
        fetchPage,
        createPage,
        updatePage,
        deletePage,
        
        // 상태 초기화
        resetError,
        resetCurrentPage,
    };
};
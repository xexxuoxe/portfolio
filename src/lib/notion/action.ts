'use server';

import { revalidatePath } from 'next/cache';
import { createNotionService } from './helper';
import { NotionPage } from './types';

/**
 * 모든 페이지 조회 액션
*/
export async function getPages(): Promise<NotionPage[]> {
  const notionService = createNotionService();

  try {
    const pages = await notionService.getPages();
    return pages;
  } catch (error) {
    console.error('Failed to fetch pages:', error);
    throw new Error('Failed to fetch pages');
  }
}

/**
 * 단일 페이지 조회 액션
*/
export async function getPage(pageId: string): Promise<NotionPage> {
  const notionService = createNotionService();
  try {
    const page = await notionService.getPage(pageId);
    return page;
  } catch (error) {
    console.error(`Failed to fetch page ${pageId}:`, error);
    throw new Error('Failed to fetch page');
  }
}

/**
 * 페이지 생성 액션
*/
export async function createPage(title: string, contents: string, tags: string[]): Promise<NotionPage> {
  const notionService = createNotionService();
  try {
    const newPage = await notionService.createPage(title, contents, tags);
    revalidatePath('/notion'); // 페이지 목록 갱신
    return newPage;
  } catch (error) {
    console.error('Failed to create page:', error);
    throw new Error('Failed to create page');
  }
}

/**
 * 페이지 수정 액션
*/
export async function updatePage(
  pageId: string,
  title: string,
  content: string
): Promise<NotionPage> {
  const notionService = createNotionService();
  try {
    const updatedPage = await notionService.updatePage(pageId, title, content);
    revalidatePath(`/notion/${pageId}`); // 해당 페이지 갱신
    revalidatePath('/notion'); // 목록도 갱신
    return updatedPage;
  } catch (error) {
    console.error(`Failed to update page ${pageId}:`, error);
    throw new Error('Failed to update page');
  }
}

/**
 * 페이지 삭제 액션
*/
export async function deletePage(pageId: string): Promise<void> {
  const notionService = createNotionService();
  try {
    await notionService.deletePage(pageId);
    revalidatePath('/notion'); // 페이지 목록 갱신
  } catch (error) {
    console.error(`Failed to delete page ${pageId}:`, error);
    throw new Error('Failed to delete page');
  }
}
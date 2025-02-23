import { NotionService } from './service';
import { NotionConfig } from './types';

/**
 * Notion 서비스 인스턴스 생성 헬퍼 함수
 */
export const createNotionService = (): NotionService => {
    const config: NotionConfig = {
        apiKey: process.env.NOTION_AUTH_TOKEN || '',
        databaseId: process.env.NOTION_DATABASE_ID || '',
    };
    return new NotionService(config);
};
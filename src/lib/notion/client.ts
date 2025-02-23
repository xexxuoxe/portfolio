import { Client } from '@notionhq/client';
import { NotionConfig } from './types';

/**
 * Notion 클라이언트 싱글톤 클래스
 */
export class NotionClient {
    private static instance: NotionClient;
    private client: Client;
    private databaseId: string;

    private constructor(config: NotionConfig) {
        this.client = new Client({
            auth: config.apiKey,
        });
        this.databaseId = config.databaseId;
    }

    /**
     * Notion 클라이언트 인스턴스 가져오기
    */
    public static getInstance(config: NotionConfig): NotionClient {
        if (!NotionClient.instance) {
            NotionClient.instance = new NotionClient(config);
        }
        return NotionClient.instance;
    }

    /**
     * Notion API 클라이언트 반환
     */
    public getClient(): Client {
        return this.client;
    }

    /**
     * 데이터베이스 ID 반환
     */
    public getDatabaseId(): string {
        return this.databaseId;
    }
}
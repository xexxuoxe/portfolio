/**
 * Notion 페이지 기본 인터페이스
 */
export interface NotionPage {
    id: string;
    title: string;
    link: string;
    writer: string;
}

/**
 * Notion 데이터베이스 설정 인터페이스 
 */
export interface NotionConfig {
    databaseId: string;
    apiKey: string;
}

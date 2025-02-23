import { Client } from '@notionhq/client';
import { NotionClient } from './client';
import { NotionConfig, NotionPage } from './types';
import { QueryDatabaseResponse, PageObjectResponse, UserObjectResponse, PartialUserObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export class NotionService {
    private client: Client;
    private databaseId: string;

    constructor(config: NotionConfig) {
        const notionClient = NotionClient.getInstance(config);
        this.client = notionClient.getClient();
        this.databaseId = notionClient.getDatabaseId();
        this.convertToNotionPage = this.convertToNotionPage.bind(this);
    }

    /**
     * people 프로퍼티에서 사용자 이름을 추출하는 유틸리티 함수
     */
    private extractUserName(people: (UserObjectResponse | PartialUserObjectResponse)[]): string {
        if (!Array.isArray(people) || people.length === 0) return '';
        const user = people[0];
        // UserObjectResponse 타입인 경우만 name 속성에 접근
        if ('name' in user) {
            return user.name || '';
        }
        return '';
    }

    /**
     * 페이지 데이터를 NotionPage 형식으로 변환
     */
    private convertToNotionPage(page: PageObjectResponse): NotionPage {
        console.log(page)
        const properties = page.properties;
        
        // writer 프로퍼티 처리
        let writerName = '';
        if ('writer' in properties && 
            properties.writer && 
            properties.writer.type === 'people') {
            writerName = this.extractUserName(properties.writer.people);
        }

     

        return {
            id: page.id,
            title: 'title' in properties && properties.title?.type === 'title' 
                ? properties.title.title[0]?.plain_text || ''
                : '',
                link: 'link' in properties && properties.link?.type === 'url'
                ? properties.link.url?.plain_text || ''
                : '',
            writer: writerName
        };
    }

    /**
     * 페이지 목록 조회
     */
    async getPages(): Promise<NotionPage[]> {
        try {
            const response = await this.client.databases.query({
                database_id: this.databaseId,
            });

            return response.results
                .filter((page): page is PageObjectResponse => 'properties' in page)
                .map(this.convertToNotionPage);
        } catch (error) {
            console.error('Failed to fetch Notion pages:', error);
            throw error;
        }
    }

    /**
     * 단일 페이지 조회
     */
    async getPage(pageId: string): Promise<NotionPage> {
        try {
            const response = await this.client.pages.retrieve({
                page_id: pageId,
            });

            if (!('properties' in response)) {
                throw new Error('Invalid page response');
            }

            return this.convertToNotionPage(response as PageObjectResponse);
        } catch (error) {
            console.error(`Failed to fetch Notion page ${pageId}:`, error);
            throw error;
        }
    }

    /**
     * 새 페이지 생성
     */
    async createPage(title: string, content: string, writer: string = ''): Promise<NotionPage> {
        try {
            const response = await this.client.pages.create({
                parent: {
                    database_id: this.databaseId,
                },
                properties: {
                    title: {
                        title: [
                            {
                                text: {
                                    content: title,
                                },
                            },
                        ],
                    },
                    content: {
                        rich_text: [
                            {
                                text: {
                                    content: content,
                                },
                            },
                        ],
                    },
                    hit: {
                        number: 0
                    },
                    writer: {
                        type: 'people',
                        people: []  // 필요한 경우 실제 유저 ID로 설정
                    }
                },
            });

            if (!('properties' in response)) {
                throw new Error('Invalid page response');
            }

            return this.convertToNotionPage(response as PageObjectResponse);
        } catch (error) {
            console.error('Failed to create Notion page:', error);
            throw error;
        }
    }

    /**
     * 페이지 수정
     */
    async updatePage(pageId: string, title: string, content: string): Promise<NotionPage> {
        try {
            const response = await this.client.pages.update({
                page_id: pageId,
                properties: {
                    Name: {
                        title: [
                            {
                                text: {
                                    content: title,
                                },
                            },
                        ],
                    },
                },
            });

            if (!('properties' in response)) {
                throw new Error('Invalid page response');
            }

            // 페이지 내용 업데이트
            await this.client.blocks.children.append({
                block_id: pageId,
                children: [
                    {
                        object: 'block',
                        type: 'paragraph',
                        paragraph: {
                            rich_text: [
                                {
                                    type: 'text',
                                    text: {
                                        content: content,
                                    },
                                },
                            ],
                        },
                    },
                ],
            });

            return this.convertToNotionPage(response as PageObjectResponse);
        } catch (error) {
            console.error(`Failed to update Notion page ${pageId}:`, error);
            throw error;
        }
    }

    /**
     * 페이지 삭제
     */
    async deletePage(pageId: string): Promise<void> {
        try {
            await this.client.pages.update({
                page_id: pageId,
                archived: true,
            });
        } catch (error) {
            console.error(`Failed to delete Notion page ${pageId}:`, error);
            throw error;
        }
    }
}
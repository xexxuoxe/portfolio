import { Client } from "@notionhq/client";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";
import { TOKEN, DATABASE_ID } from "@/app/config";

// 빌드 타임에 호출. 데이터 가져온 다음에 화면에 렌더링
export const notionClient = new Client({
  auth: TOKEN,
});

// 페이지 가져오기 (이번 글에선 사용X)
export const getPages = cache(() => {
  return notionClient.databases.query({
    filter: {
      property: "Status",
      select: {
        equals: "Published",
      },
    },
    database_id: DATABASE_ID!,
  });
});

// 페이지 콘텐츠(block) 가져오기 (이번 글에선 사용X)
export const getPageContent = cache((pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});

// Slug 값으로 페이지 가져오기(현재 사용할 함수)
export const getPageBySlug = cache((slug: string) => {
  return notionClient.databases
    .query({
      database_id: DATABASE_ID!, // 또는 database_id: process.env.NOTION_DATABASE_ID as string,
      filter: {
        property: "Slug", // property명 일치하는지 확인
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});
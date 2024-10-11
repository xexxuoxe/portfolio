import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import api from '@lib/api/fetch.client';

export interface Post {
	id: number;
	title: string;
	author: string;
	date: string;
	satisfaction: number;
	views: number;
}

export interface Column {
	key: string;
    header: string;
    render?: (post: Post) => React.ReactNode;
}

export const usePostHook = () => {

    const [postData, setPostData] = useState<Post[]>([]);

	useEffect(() => {
		getData();
   }, []);

	const getData = async () => {
		const posts = await api.get('http://localhost:3002/postList');
		setPostData(posts);
	}

	//  const columns: Column[] = [
    //     { key: 'id', header: '번호' },
    //     {
    //         key: 'title',
    //         header: '제목',
    //         render: (post: Post) => (
    //             <Link href={`/posts/${post.id}`}>
    //                 {post.title}
    //             </Link>
    //         )
    //     },
    //     { key: 'author', header: '작성자' },
    //     { key: 'date', header: '작성일' },
    //     { key: 'satisfaction', header: '강의만족도' },
    //     { key: 'views', header: '조회수' },
    // ];

    return {
		getData,
        postData,
		// colums
    };
};


// 첨부파일 받기
// const formData = new FormData();
// formData.append("file", selectedFile); // selectedFile은 사용자가 선택한 파일

// fetch('/api/upload', {
//     method: 'POST',
//     body: formData
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data.filePath); // 업로드된 파일 경로
// })
// .catch(error => console.error('Error:', error));

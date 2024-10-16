import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import api from '@lib/api/fetch.client';

export interface Post {
	id: number;
	title: string;
	author: string;
	date: string;
	satisfaction: string;
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
		const posts = await api.get('http://localhost:3002/postView')
		setPostData(posts);

		posts.findOne();
	}
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

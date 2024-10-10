import { useState, useEffect, useRef } from 'react';
import api from '@lib/api/fetch.client';

export interface Post {
	id: number;
	title: string;
	author: string;
	date: string;
	satisfaction: number;
	views: number;
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
	// const columns = [
	// 	{ key: 'id', header: '번호' },
	// 	{
	// 		key: 'title',
	// 		header: '제목',
	// 		render: (posts: Post) => (
	// 			<Link href={`/posts/${posts.id}`}>
	// 				{posts.title}
	// 			</Link>
	// 		)
	// 	},
	// 	{ key: 'author', header: '작성자' },
	// 	{ key: 'date', header: '작성일' },
	// 	{ key: 'satisfaction', header: '강의만족도' },
	// 	{ key: 'views', header: '조회수' },
	// ];



    return {
		getData,
        postData
    };
};

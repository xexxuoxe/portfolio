/*
	scr/components/main/post/list/postList.hook.ts
*/
import { useState, useEffect } from 'react';
import api from '@lib/api/fetch.client';
export interface Post {
	id: number;
	title: string;
	author: string;
	date: string;
}
export interface Column {
	key: string;
    header: string;
    render?: ( post: Post ) => React.ReactNode;
}

export const usePostHook = () => {

    const [ postData, setPostData ] = useState<Post[]>([]);

	useEffect(() => {
		getData();
   }, []);

	const getData = async () => {
		const posts = await api.get('http://localhost:3002/postReview');
		setPostData(posts);
	}

    return {
		getData,
        postData,
    };
};

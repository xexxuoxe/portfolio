import { useState, useEffect, useRef } from 'react';
import api from '@lib/api/fetch.client';

export interface Post {
	id: number;
	title: string;
	author: string;
	createdAt: string;
	satisfaction: number;
	views: number;
}

export const usePostHook = () => {

    const [postData, setPostData] = useState<Post[]>([]);

	useEffect(() => {
        // validate 체크
		getData();

    }, []);

	const getData = async () => {
		const posts = await api.get('http://localhost:3002/postList');
		setPostData(posts);
	}

    return {
		getData,
        postData
    };
};

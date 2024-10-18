import { useState, useEffect } from 'react';
import api from '@lib/api/fetch.client';

export interface PostCont {
	id: number;
	title: string;
	author: string;
	date: string;
	file: string;
	teacher: string;
	contents: string;
	satisfaction: string;
	views: string;
}

export const usePostHook = (postId: number) => {

	const [postData, setPostData] = useState<PostCont[]>([]);

	useEffect(() => {
		getData();
	}, [postId]);

	const getData = async () => {
			const ports = await api.get(`http://localhost:3002/postReview/${postId}`);
			setPostData(ports);
	};

	return (
		postData
	);
};

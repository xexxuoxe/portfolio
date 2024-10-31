/*
	src/components/main/post/view/postView.hook.tsx
*/
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

export const usePostView = ( postId: number ) => {

	const [ postData, setPostData ] = useState<PostCont | null>(null);

	useEffect(() => {
		getData();
	}, [postId]);

	//  가져오기
	const getData = async () => {
		const ports = await api.get(`http://localhost:3002/postReview/${postId}`);
		setPostData(ports);
	};

	// 삭제하기
	const deleteData = async ( postId: number ) => {
		await api.delete(`http://localhost:3002/postReview/${postId}`);
		window.location.href = '/post/list';
	};

	const handleDelete = () => {
		if (window.confirm("정말로 삭제하시겠습니까?")) {
			if ( postData ) {
                deleteData( postData.id );
            }
		}
	};

	return {
		postData,
		handleDelete,
	}
};

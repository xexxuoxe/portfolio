import { useState, useEffect } from 'react';
import api from '@lib/api/fetch.client';

// Type declaration
export interface PostCont {
	id: string;
	title: string;
	author: string;
	date: string;
	teacher: string;
	content: string;
}

export const usePostView = (postId: string) => {
	const [postData, setPostData] = useState<PostCont | null>(null);

	const getData = async (postId: string) => {
		try {
			
			const posts = await api.get(`http://localhost:3002/postReview/${postId}`);

			if (posts && posts.data) {
				// setPostData(posts.data);
			}
		} catch (error) {
			console.error('데이터 로딩 중 오류:', error);
		}
	};

	useEffect(() => {
		getData(postId);
	}, [postId]);

	// Delete function
	const deleteData = async (postId: string) => {
		console.log(postId);
		await api.delete(`http://localhost:3002/postReview/${postId}`);
		window.location.href = '/post/list';
	};

	const handleDelete = () => {
		if (window.confirm("정말로 삭제하시겠습니까?")) {
			if (postData) {
				deleteData(postData.id);
			}
		}
	};

	// Data export
	return {
		postData,
		getData,
		handleDelete,
	};
};

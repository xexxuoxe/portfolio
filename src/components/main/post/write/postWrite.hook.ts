/*
	scr/components/main/post/write/postWrite.hook.ts
*/
'use client'
import { useEffect , useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@lib/api/fetch.client';
interface FormData {
	id: number,
  	title: string;
	author: string,
	date: string,
	teacher: string,
  	content: string;
  	collect: boolean;
    satisfaction: string,
    views: string
}

export const usePostWrite = ( postId: number ) => {

	const [postData, setPostData] = useState<FormData>({
		id: 0,
		title: '',
		author: '',
		date: '',
		teacher: '',
		content: '',
		collect: false,
		satisfaction: '',
		views: ''
	});

	const router = useRouter();

	useEffect(() => {
		if(postId) {
			const getData = async () => {
				const ports = await api.get(`http://localhost:3002/postReview/${postId}`);
				setPostData(ports);
			};
			getData();
		}
	}, [postId]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value, type, checked } = e.target;
		setPostData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
		e.preventDefault();

		const response = postId
		? await api.put(`http://localhost:3002/postReview/${postId}` , postData)
		: await api.post(`http://localhost:3002/postReview` , postData)

		if (response) {
			// alert(response.message);
			alert('등록되었습니다.');
			router.push('/post/list');
		} else {
			alert(response.message || 'error');
		}
	};

	return {
		postData,
		handleChange,
		handleSubmit,
	};
};

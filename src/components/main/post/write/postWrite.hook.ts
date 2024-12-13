/*
	scr/components/main/post/write/postWrite.hook.ts
*/
'use client'
import { useEffect , useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@lib/api/fetch.client';
// Type 선언
interface FormData {
	id?: string,
  	title: string;
	author: string,
	date: string,
	teacher: string,
  	content: string,
  	collect: boolean,
}

export const usePostWrite = ( postId: string ) => {

	const [postData, setPostData] = useState<FormData>({
		title: '',
		author: '',
		date: '',
		teacher: '',
		content: '',
		collect: false,
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

	const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) =>  {
		e.preventDefault();

		// 유효성 검사
		const isAllFieldsFilled = 
		postData.title.trim() !== '' &&
		postData.author.trim() !== '' &&
		postData.date.trim() !== '' &&
		postData.teacher.trim() !== '' &&
		postData.content.trim() !== '' &&
		postData.collect === true; 

		if (!isAllFieldsFilled) {
			alert('모든 항목을 입력하고 개인정보 수집 동의에 체크해주세요.');
			return;
		}

		const response = postId
		? await api.put(`http://localhost:3002/postReview/${postId}` , postData)
		: await api.post(`http://localhost:3002/postReview` , postData)

		if (response) {
			alert('등록되었습니다.');
			router.push('/post/list');
		} else {
			alert(response.message || 'error');
			alert('실패하였습니다.');
		}
	};

	return {
		postData,
		handleChange,
		handleSubmit,
	};
};
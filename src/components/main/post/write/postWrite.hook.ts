// scr/hooks/postWrite.hook.ts
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@lib/api/fetch.client';

// 상태의 타입 정의
interface FormData {
	id: '',
  	title: string;
	author: string,
	date: string,
	file: string;
	teacher: string,
  	content: string;
  	collect: boolean;
    satisfaction: string,
    views: string
}

// 훅 정의
export const usePostWrite = () => {
	const [formData, setFormData] = useState<FormData>({
		id: '',
		title: '',
		author: '',
		date: '',
		file: '',
		teacher: '',
		content: '',
		collect: false,
		satisfaction: '',
		views: ''
	});

	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
		...prev,
		[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// API에 데이터 POST 전송
		const response = await api.post('http://localhost:3002/postReview', formData);

		if (response.ok) {
			const result = await response.json();
			alert(result.message);
			router.push('/post/list');
		} else {
			const errorData = await response.json();
			alert(errorData.message || 'Error submitting the post');
		}
	};

	return {
		formData,
		handleChange,
		handleSubmit,
	};
};


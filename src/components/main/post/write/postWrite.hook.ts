// scr/hooks/postWrite.hook.ts
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@lib/api/fetch.client';
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
			[name]: type === '' ? checked : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

		e.preventDefault();

		const response : {
			status : number,
			message : string
		} = await api.post('/api/post', formData);

		if (response.status == 1) {
			alert(response.message);
			router.push('/post/list');
		} else {
			alert(response.message || 'Error submitting the post');
		}
	};

	return {
		formData,
		handleChange,
		handleSubmit,
	};
};


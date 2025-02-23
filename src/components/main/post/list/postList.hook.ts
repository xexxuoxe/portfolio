import { useState, useEffect } from 'react';
import api from '@lib/api/fetch.client';
export interface Post {
	id: number;
	title: string;
	author: string;
	date: string;
    [key: string]: string | number;
}
export interface Column<T> {
	key: keyof T;
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

        if (Array.isArray(posts)) {
            setPostData(posts as Post[]);
        } else {
            console.error('Invalid API response', posts);
            setPostData([]); 
        }
    };

    return {
		getData,
        postData,
    };
};

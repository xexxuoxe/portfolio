'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useNotion } from '@lib/notion/hook/useNotion.hook';

export interface PostData {
    id?: string;
    title: string;
    contents: string;
    tags: string[];
}

export function usePost(initialPost?: PostData | null) {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(initialPost?.title || '');
    const [contents, setContents] = useState(initialPost?.contents || '');
    const [tags, setTags] = useState<string[]>(initialPost?.tags || []);
    const { createPage, updatePage } = useNotion();

    const handleSubmit = async () => {
        setLoading(true);
        try {
            if (initialPost?.id) {
                await updatePage(initialPost.id, title, contents, tags);

                console.log('수정되었습니다.')
            } else {
                await createPage(title, contents, tags);

                console.log('작성되었습니다.')
            }
            router.push('/post/list');

        } catch (error) {
            console.error('Failed to save post', error);

        } finally {
            setLoading(false);
        }
    }; 

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value);
    };

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTags(e.target.value.split(',').map(tag => tag.trim()));
    };

    return {
        title,
        contents,
        tags,
        loading,
        handleSubmit,
        handleTitleChange,
        handleContentsChange,
        handleTagsChange
    };
}
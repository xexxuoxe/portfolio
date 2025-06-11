'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useNotion } from '@lib/notion/hook/useNotion.hook';
import { useSession } from 'next-auth/react';

export interface PostData {
    id?: string;
    title: string;
    contents: string;
    tags: string[];
}

export function usePost(initialPost?: PostData | null) {
    const { data: session } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(initialPost?.title || '');
    const [contents, setContents] = useState(initialPost?.contents || '');
    const [tags, setTags] = useState<string[]>(initialPost?.tags || []);
    const { createPage, updatePage } = useNotion();

    useEffect(() => {
        if (!initialPost && session?.user?.name) {
            setTitle(session.user.name);
        } else if (!initialPost && !session?.user?.name) {
            setTitle('알 수 없는 사용자');
        }
    }, [session, initialPost]);


    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value);
    };

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTags(e.target.value.split(',').map(tag => tag.trim()));
    };

    const handleSubmit = async () => {

        setLoading(true);
        try {
            if (!initialPost?.id) {
                await createPage(title, contents, tags);
                alert('글이 작성되었습니다.');

                window.location.reload();
            }
            else {
                await createPage(title, contents, tags);
                alert('글이 작성되었습니다.')
                router.push('/');
            }



        } catch (error) {
            console.error('Failed to save post', error);

        } finally {
            setLoading(false);
        }
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
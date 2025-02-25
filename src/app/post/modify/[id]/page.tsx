'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useNotion } from '@lib/notion/hook/useNotion.hook';
import PostWritePage from '@components/main/post/write/postWrite.component';

export default function Main() {
  const { id } = useParams();
  const { fetchPage, currentPage, loading, error } = useNotion();

  useEffect(() => {
    if (id) fetchPage(id as string);
  }, [id, fetchPage]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return currentPage ? <PostWritePage post={currentPage} /> : null;
}

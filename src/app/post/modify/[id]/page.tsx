/*
	post modify page
	src/app/post/modify/[id]/page.tsx
*/
'use client';
import { useParams } from 'next/navigation';
import PostWritePage from '@components/main/post/write/postWrite.component';

export default function Main() {
  const params = useParams();
  const postId = params.id;

  return (
    <div className='review_section'>
      	<PostWritePage post={postId} />
    </div>
  );
}

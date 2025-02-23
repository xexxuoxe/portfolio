'use client';
import { useParams } from 'next/navigation';
import PostWritePage from '@components/main/post/write/postWrite.component';

export default function Main() {
  const params = useParams();
  const postId = Array.isArray(params.id) ? params.id[0] : params.id;

  return (
    <div className='review_section'>
      	<PostWritePage post={postId} />
    </div>
  );
}

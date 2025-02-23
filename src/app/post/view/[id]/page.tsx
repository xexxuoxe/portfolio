'use client';
import { useParams } from 'next/navigation';
import PostViewItem from '@components/main/post/view/postView.component';

export default function Main() {
  const params = useParams();
  const postId = Array.isArray(params.id) ? params.id[0] : params.id;

  return (
    <div className='review_section'>
      <PostViewItem post={postId} /> 
    </div>
  );
}

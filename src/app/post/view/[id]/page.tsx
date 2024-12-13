/*
	post view page
	src/app/post/view/[id]/page.tsx
*/
'use client';
import { useParams } from 'next/navigation';
import PostViewItem from '@components/main/post/view/postView.component';

export default function Main() {
	const params = useParams();
	const postId = params.id;
	console.log(postId)
	
	return (
		<div className='review_section' id='siwon_container'>
			<PostViewItem post={postId} />
		</div>
	);
}

/*
	post view page
	src/app/post/view/[id]/page.tsx
*/
'use client';
import PostViewItem from '@components/main/post/view/postView.component';

interface PostViewProps {
	params: {
		id: number;
	}
}

export default function Main({ params }: PostViewProps) {
	return (
		<div className='review_section' id='siwon_container'>
			<PostViewItem post={params.id} />
		</div>
	);
}

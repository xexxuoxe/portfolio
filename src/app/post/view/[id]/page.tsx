/*
	post view page
	src/app/post/view/[id]/page.tsx
*/
'use client';
import { useParams } from 'next/navigation';
import NavComponent from '@components/sementic/nav.component'
import GnbComponent from '@components/sementic/gnb.component'
import FooterComponent from '@components/sementic/footer.component'
import PostViewItem from '@components/main/post/view/postView.component';

export default function Main() {
	const params = useParams();
	const postId = params.id;
	
	return (
		<div className='review_section' id='siwon_container'>
			<NavComponent></NavComponent>
			<GnbComponent></GnbComponent>
			<PostViewItem post={postId} />
			<FooterComponent />
		</div>
	);
}

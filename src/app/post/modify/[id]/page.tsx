/*
	post modify page
	src/app/post/modify/[id]/page.tsx
*/
'use client';
import PostWritePage from '@components/main/post/write/postWrite.component';

interface PostModifyProps {
	params : {
        id: number;
	}
}

export default function Main({ params }  : PostModifyProps) {
   return (
		<div className='review_section' id='siwon_container'>
			<PostWritePage post={params.id}/>
			{params.id}
		</div>
   );
}

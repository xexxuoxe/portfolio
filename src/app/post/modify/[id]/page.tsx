/*
	post modify page
	src/app/post/modify/[id]/page.tsx
*/
'use client';
import { useParams } from 'next/navigation';
import NavComponent from '@components/sementic/siwon/nav.component'
import GnbComponent from '@components/sementic/siwon/gnb.component'
import FooterComponent from '@components/sementic/siwon/footer.component'
import PostWritePage from '@components/main/post/write/postWrite.component';

export default function Main() {
  const params = useParams();
  const postId = params.id;

  return (
    <div className='review_section' id='siwon_container'>
      	<PostWritePage post={postId} />
    </div>
  );
}

/*
	post modify page
	src/app/post/modify/page.tsx
*/
'use client';
import PostWritePage from '@components/main/post/write/postWrite.component';
import { usePostWrite } from '@components/main/post/write/postWrite.hook';

interface PostModifyProps {
	params : {
		id : number;
	}
}

export default function Main({params}  : PostModifyProps) {

	const postData = usePostWrite(params.id);

	console.log(params)

  return (
    <div className='event_section' id='siwon_container'>
		<PostWritePage post={postData}/>
    </div>
  );
}

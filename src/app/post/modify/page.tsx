/*
	post modify page
	src/app/post/modify/page.tsx
*/
import PostWritePage from '@components/main/post/write/postWrite.component';
import { usePostHook } from '@components/main/post/write/postWrite.hook';

interface PostModifyProps {
	params : {
		id : number;
	}
}

export default function Main({params}  : PostModifyProps) {

	const postData = usePostHook(params.id);

  return (
    <div className='event_section' id='siwon_container'>
		<PostWritePage post={postData}/>
    </div>
  );
}

/* 
	post edit page
	src/app/post/edit/[id]/page.tsx
*/
import PostEditPage from '@components/main/post/edit/postEdit.component'

export default function event() {
  return (
    <div className='event_section' id='siwon_container'>
		<PostEditPage></PostEditPage>
    </div>
  );
}

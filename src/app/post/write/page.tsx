/* 
	post write page
	src/app/post/write/[id]/page.tsx
*/
import PostWritePage from '@components/main/post/write/postWrite.component'

export default function event() {
  return (
    <div className='event_section' id='siwon_container'>
		<PostWritePage></PostWritePage>
    </div>
  );
}

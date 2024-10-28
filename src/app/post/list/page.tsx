/*
	post list page
	src/app/post/list/[id]/page.tsx
*/
import PostListItem from '@components/main/post/list/postList.component'

export default function Main() {
  return (
    <div className='review_section' id='siwon_container'>
		<PostListItem></PostListItem>
    </div>
  );
}

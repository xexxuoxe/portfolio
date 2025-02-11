/*
	post list page
	src/app/post/list/[id]/page.tsx
*/
import NavComponent from '@components/sementic/siwon/nav.component'
import GnbComponent from '@components/sementic/siwon/gnb.component'
import FooterComponent from '@components/sementic/siwon/footer.component'
import PostListItem from '@components/main/post/list/postList.component'

export default function Main() {
  return (
    <div className='review_section' id='siwon_container'>
		<PostListItem></PostListItem>
    </div>
  );
}

/*
	post list page
	src/app/post/list/[id]/page.tsx
*/
import NavComponent from '@components/sementic/nav.component'
import GnbComponent from '@components/sementic/gnb.component'
import FooterComponent from '@components/sementic/footer.component'
import PostListItem from '@components/main/post/list/postList.component'

export default function Main() {
  return (
    <div className='review_section' id='siwon_container'>
    <NavComponent></NavComponent>
    <GnbComponent></GnbComponent>
		<PostListItem></PostListItem>
    <FooterComponent />
    </div>
  );
}

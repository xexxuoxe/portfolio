/*
	post write page
	src/app/post/write/page.tsx
*/
import NavComponent from '@components/sementic/nav.component'
import GnbComponent from '@components/sementic/gnb.component'
import FooterComponent from '@components/sementic/footer.component'
import PostWritePage from '@components/main/post/write/postWrite.component'

export default function event() {
  return (
    <div className='review_section' id='siwon_container'>
      <NavComponent></NavComponent>
      <GnbComponent></GnbComponent>
      <PostWritePage></PostWritePage>
      <FooterComponent />
    </div>
  );
}

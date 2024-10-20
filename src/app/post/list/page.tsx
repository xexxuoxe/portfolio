/* 
	post list page
	src/app/post/list/[id]/page.tsx
*/
import Image from 'next/image'
import PostListItem from '@components/main/post/list/postList.component'

export default function Main() {

  return (
    <div className='review_section' id='siwon_container'>
		<div className="section_sub">
			<Image
				src="https://siwon-cdn.siwonschool.com/vietnam/banner/imghead_review.jpg"
				width={1100}
				height={170}
				alt="수강후기"
			/>
		</div>
		<PostListItem></PostListItem>
    </div>
  );
}

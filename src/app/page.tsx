
import ListItem from '@components/main/board/board.component'
import Image from 'next/image';
import './globals.scss'

export default function Main() {


  return (
    <div className='main_section' id='siwon_container'>
		<div className='inner_container'>
			<Image
				src="https://siwon-cdn.siwonschool.com/vietnam/banner/imghead_review.jpg"
				width={1100}
				height={170}
				alt="수강후기"
            />
		</div>
		<ListItem></ListItem>
    </div>
  );
}

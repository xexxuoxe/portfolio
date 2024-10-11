//'use client';
import { useRouter } from 'next/router'

export default function Board({ params } : { params:{ boardtype: string}}) {
	const router = useRouter();
	// const {slug} = router.query;

	const findEventHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	};

  return (
    <div className='main_section' id='siwon_container'>
		{params.boardtype} 슬래그 페이지
    </div>
  );
}
,

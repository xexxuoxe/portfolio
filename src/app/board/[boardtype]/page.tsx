//'use client';

export default function Board({ params } : { params:{ boardtype: string}}) {
	//const { slug } = router;
	const slug = 1;
  return (
    <div className='main_section' id='siwon_container'>
		{params.boardtype} 슬래그 페이지
    </div>
  );
}

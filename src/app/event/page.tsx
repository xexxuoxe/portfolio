/*
	event page
	src/app/event/page.tsx
*/
// import { useMetaContext } from '@components/sementic/meta.component';
// import { useMetaContext } from '@components/sementic/meta.component';
// import EventItem from '@components/main/event/event.component'

// export default function event() {

// 	const { setMeta } = useMetaContext();
// 	// 동적 meta 태그 활용법
//     setMeta({
//         title: '이벤트페이지',
//         description: '이번달 이벤트는 무엇일까요?',
//         image: '/home-image.png',
//     })

//   return (
//     <div className='event_section' id='siwon_container'>
// 		<EventItem></EventItem>
//     </div>
//   );
// }

'use client'
import { useEffect } from 'react';
import { useMetaContext } from '@components/sementic/meta.component';
import EventItem from '@components/main/event/event.component';

export default function Event() {
    const { setMeta } = useMetaContext();

    useEffect(() => {
        setMeta({
            title: '이벤트페이지',
            description: '이번달 이벤트는 무엇일까요?',
            image: '/home-image.png',
        });
    }, [setMeta]);

    return (
        <div className='event_section' id='siwon_container'>
            <EventItem />
        </div>
    );
}

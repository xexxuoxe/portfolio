'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useResponsive } from '@lib/context/responsive.context';
import parse from 'html-react-parser';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import styles from './emblem.module.scss';

import 'swiper/scss';
import 'swiper/scss/autoplay';

interface Emblem {
    id: number,
    img : string,
    desc: string
}
const emblems: Emblem[] = [
    {
        id: 1,
        img : 'https://siwon-cdn.siwonschool.com/member/main/v3/emblem_2020b.jpg',
        desc: '2020<br />외국어교육 부문<br />소비자선정 최고의<br />브랜드대상 4년 연속'
    },
    {
        id: 2,
        img : 'https://siwon-cdn.siwonschool.com/member/main/v3/emblem_2019_japan.png',
        desc: '2019<br />한국브랜드 선호 1위<br />온라인교육(일본어) 2년 연속'
    },
    {
        id: 3,
        img : 'https://siwon-cdn.siwonschool.com/member/main/v3/emblem_2019goodcontents.png',
        desc: '2019<br />13개 브랜드 사이트<br />굿콘텐츠서비스 인증 획득'
    },
];

const EmblemComponent: React.FC = () => {
    const { currentBreakpoint, isBreakpoint } = useResponsive();
    const swiperRef = useRef<SwiperType | null>(null);

    const isMobile = isBreakpoint('mobile');

    const swiperParams = {
        className: styles.sl_emblem,
        modules: [Autoplay],
        slidesPerView: 9,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5555
    };

    return (
		<div className={ `${styles.award_area} ${styles[currentBreakpoint]}` }>
            <Swiper
                {...swiperParams}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
            >
            
            { emblems.map((emblem: Emblem) => (
                <SwiperSlide key={ emblem.id } >
                    <div className={ styles.swiper_slide }>
                        <Image 
                            src={ emblem.img } 
                            width={64}
                            height={64}
                            alt="앰플럼"
                        />
                        <p className={ styles.emblem_desc }>{ parse(emblem.desc) }</p>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
}

export default EmblemComponent;
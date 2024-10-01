'use client';

import React, { useRef } from 'react';
import { renderToStaticMarkup } from "react-dom/server";
import Image from 'next/image';
import { useResponsive } from '@lib/context/responsive.context';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Banner } from './siteslide.types';
import SlideContent from './slidecontent.component';
import styles from './siteslide.module.scss';

import 'swiper/scss';
import 'swiper/scss/autoplay';

const siteBanners: Banner[] = [
    {
        id: 'www',
        name : '기초영어',
        img : 'https://siwon-cdn.siwonschool.com/member/main/v3/main_sl01.png',
        fullname : '시원스쿨 기초영어',
        tit01 : '대한민국 최대 기초영어 사이트',
        tit02 : '180만 회원의 선택',
        desc : '1년 동안 기초영어 전 강의를 부담없이 무제한 수강!',
        link : 'https://www.siwonschool.com/'
    },
    {
        id: 'native',
        name : '네이티브',
        img : 'https://siwon-cdn.siwonschool.com/member/main/v3/main_sl02.png',
        fullname : '시원스쿨 네이티브',
        tit01 : '원어민이쓰는 \'진짜영어\'의 종착점!',
        tit02 : '시원스쿨 네이티브',
        desc : '어디서나 배우는 영어가 아닌 원어민과 진짜통하는 영어',
        link : 'https://native.siwonschool.com/'
    },
    {
        id: 'superkids',
        name : '초등',
        img : 'https://siwon-cdn.siwonschool.com/member/main/v3/main_sl03_2.png',
        fullname : '시원스쿨 초등',
        tit01 : '전에 없던 특별한 어린이 영어',
        tit02 : '시원스쿨 초등',
        desc : '억지로 하는 영어학습은 그만! 재미없던 영어 고민 해결!',
        link : 'https://superkids.siwonschool.com/'
    },
];

export default function SiteSlide() {
    const { currentBreakpoint, isBreakpoint } = useResponsive();
    const swiperRef = useRef<SwiperType | null>(null);

    const isMobile = isBreakpoint('mobile');

    const swiperParams = {
        modules: [Autoplay, Navigation, Pagination],
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '#site_tab ul',
            type: 'bullets' as const,
            clickable: true,
            bulletClass: 'bullet',
            bulletActiveClass: styles.on,
            renderBullet: (index: number, className: string) => {
                return renderToStaticMarkup(
                    <li className={className}><span>{siteBanners[index].name}</span></li>
                );
            },
        },
    };

    return (
        <div className={`${styles.slider_block} ${styles[currentBreakpoint]}`}>
            <div className={styles.slider_tabs} id="site_tab">
                <div className={styles.nav}>
                    <ul></ul>
                </div>
            </div>
            <div className={`${styles.container} container`}>
                <div className={styles.slider_inner_block}>
                    <Swiper
                        {...swiperParams}
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    >
                        {siteBanners.map((banner) => (
                            <SwiperSlide key={banner.id}>
                                <SlideContent banner={banner} isMobile={isMobile} />
                            </SwiperSlide>
                        ))}
                        {!isMobile && (
                            <div className={styles.swiper_navigation}>
                                <button
                                    type='button'
                                    className={`${styles.prev} ${styles.arrows}`}
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                <Image 
                                    src="https://siwon-cdn.siwonschool.com/www/siwonschool/curriculum/prev.png" 
                                    alt="Prev"
                                    width={40}
                                    height={40}
                                />
                                </button>
                                <button
                                    type='button'
                                    className={`${styles.next} ${styles.arrows}`}
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                <Image 
                                    src="https://siwon-cdn.siwonschool.com/www/siwonschool/curriculum/next.png" 
                                    alt="next"
                                    width={40}
                                    height={40}
                                />
                                </button>
                            </div>
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
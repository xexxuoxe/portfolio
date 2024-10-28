/*
	slider component
	src/component/_utiles/slider/slider.component.tsx
*/
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './slider.module.scss';

interface Slide {
	title: string;
	img: string;
	link: string;
	id : string;
}

interface SliderProps {
	className: string;
  	variant: keyof typeof styles;
  	slides: Slide[];
	spaceBetween?: number;
	slidesPerView?: number;
	loop?: boolean;
	pagination?: boolean;
	navigation?: boolean;
	scrollbar?: boolean;
	autoplay?: {delay?: number; disableOnInteraction?: boolean;}
}

const Slider = ({className, variant, slides, spaceBetween, slidesPerView, loop, pagination, navigation, scrollbar, autoplay}: SliderProps) => {

	return (
		<Swiper
			className={ `${ styles[variant] } ${ className } ${styles.swiper}` }
			modules={ [Navigation, Pagination, Scrollbar, Autoplay] }
			loop={ loop }
			spaceBetween={ spaceBetween }
			slidesPerView={ slidesPerView }
			// navigation={{
			// 	navigation,
			// 	nextEl: `.${styles['swiper-button-next']}`,
			// 	prevEl: `.${styles['swiper-buttonprev-']}`,
			// }}
			navigation={navigation}
			pagination={ pagination ? {  clickable: true  } : false }
			scrollbar={ scrollbar ? {  draggable: true  } : false }
			autoplay={ autoplay }
			// onSwiper={ (swiper) =>  }
			// onSlideChange={ () =>  }
		>
		{ slides.map(( slide ) => (
			<SwiperSlide key={ slide.id } className={styles.swiper_slide}>
				<a href={ slide.link }>
					<Image
						src={ slide.img }
						width={ 50 }
						height={ 50 }
						alt={ slide.title }
					/>
				</a>
			</SwiperSlide>
		))}
		</Swiper>
	);
}
export default Slider;



// scr/components/sementic/slider.component.tsx
// slider box component
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.component.scss';

interface Slide {
  id: string;
  title: string;
  img: string;
  link: string;
}

// Props type definition
interface ComponentSliderProps {
  	slides: Slide[];
	spaceBetween?: number;
	slidesPerView?: number;
	loop?: boolean;
	pagination?: boolean;
	navigation?: boolean;
	scrollbar?: boolean;
	autoplay?: {delay?: number; disableOnInteraction?: boolean;}
	id: string;
}

const ComponentSlider = (props: ComponentSliderProps) => {
  	const {
		slides,
		spaceBetween,
		slidesPerView,
		loop,
		pagination,
		navigation,
		scrollbar,
		autoplay,
		id
	} = props;

  return (
    <Swiper
		className={id}
		modules={[Navigation, Pagination, Scrollbar, Autoplay]}
		loop={loop}
		spaceBetween={spaceBetween}
		slidesPerView={slidesPerView}
		navigation={navigation}
		pagination={pagination ? { clickable: true } : false}
		scrollbar={scrollbar ? { draggable: true } : false}
		autoplay={autoplay}
		// onSwiper={(swiper) => }
		// onSlideChange={() => }
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <a href={slide.link}>
            <Image
              src={slide.img}
              width={50}
              height={50}
              alt={slide.title}
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default ComponentSlider;



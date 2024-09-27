
import React from 'react';
import styles from './page.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link';
import Image from 'next/image';

export default function BanSlide() {
	return (
		<div className={ styles.log_ban }>
			<Swiper
				className=".sl_login_ban"
				modules={[Autoplay, Pagination]}
				slidesPerView={1.2}
				spaceBetween={20}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					el: '.pagination',
					type: 'bullets',
					clickable : true,
					bulletClass: 'bullet',
					bulletActiveClass: 'on',
				}}
				breakpoints={{
					'470': {
						slidesPerView: 1,
						spaceBetween: 0,
					}
				}}
			>
				<SwiperSlide>
					<Link href="" target="_blank">
						<Image 
                            src="https://data.siwonschool.com/banner/img/www/2024/02/06/bimg_src_1707185377.png" 
                            width={ 390 }
                            height={ 195 }
                            alt="" 
                            />
					</Link>
				</SwiperSlide>

				<SwiperSlide>
					<Link href="" target="_blank">
						<Image 
                            src="https://data.siwonschool.com/banner/img/www/2023/10/11/bimg_src_1697000334.png" 
                            width={ 390 }
                            height={ 195 }
                            alt="" 
                            />
					</Link>
				</SwiperSlide>
			</Swiper>

			<div className="pagination"></div>
		</div>
	)
}

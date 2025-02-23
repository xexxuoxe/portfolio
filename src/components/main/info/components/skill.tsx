import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import "swiper/css/effect-fade";
import "swiper/css";
import Image from 'next/image';
import { SKILL_LOGOS } from '../constants/skillLogs';
import styles from './skill.module.scss';



export const Skill = () => {

  return (
    <div className={styles.info_slide}>
      <Swiper
        className={styles.skill_swiper}
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={500}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {[...SKILL_LOGOS, ...SKILL_LOGOS].map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            {slide.options.map((list, idx) => (
              <div className={`${styles.slide_wrapper}`} key={idx}>
                <Image
                  src={list.img}
                  width={130}
                  height={130}
                  alt={list.title || 'Logo'}
                />
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

import { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { SKILL_LOGOS } from '../constants/skillLogs';
import styles from './skill.module.scss';

export const Skill = () => {
  const [animating, setAnimating] = useState(false);

  const handleSlideChange = useCallback(() => {
    setAnimating(false);
    const timer = setTimeout(() => setAnimating(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.info_slide}>
      <Swiper
        className={styles.skill_swiper}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={500}
        slidesPerView={1}
        slidesPerGroup={1}
        onSlideChange={handleSlideChange}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {SKILL_LOGOS.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            {slide.options.map((list, idx) => (
              <div
                className={`${styles.slide_wrapper}`} key={idx}
              >
                <Image
                  className={animating ? styles.fadeIn : ''}
                  src={list.img}
                  width={130}
                  height={130}
                  alt={list.title || 'Logo'}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                />
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
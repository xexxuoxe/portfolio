import Image from 'next/image';
import { SKILL_LOGOS } from '../constants/skillLogs';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import styles from './skill.module.scss';

export const Skill = () => {

  return (
    <div className={styles.info_items}>
      <FadeInMotion delay={0} initialX={0} initialY={100}>
        <div className={styles.items_box}>
          {SKILL_LOGOS.map((list, idx) => (
            <div className={`${styles.slide_wrapper}`} key={idx}>
              <Image
                src={list.img}
                width={130}
                height={130}
                alt={list.title || 'Logo'}
              />
            </div>
          ))}
        </div>
      </FadeInMotion>
    </div>
  );
};

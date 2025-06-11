import Image from 'next/image';
import styles from './archiving.module.scss';
import { archiveData } from './constants/archiveList';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';

export const ArchivingSection = () => {
  return (
    <section className={styles.archivingSection} id='ARCHIVING'>
      <h2 className={styles.sub_title}>ARCHIVING</h2>
      <h1 className={styles.title}>저의 <span> 작업물을 </span> 확인해보세요</h1>
      <div className={styles.archiveGrid}>
        {archiveData.map((item, index) => (
          <FadeInMotion key={index} delay={index * 0.4} initialX={0} initialY={100}>
            <div className={styles.archiveCard}>
              <div className={`${styles.iconTitle} ${styles[item.class]}`}>
                <Image 
                  src={item.img} 
                  fill
                  alt={item.alt} 
                  />
              </div>
              <a
                className={styles.link}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.url}
              </a>
              <p className={styles.description}>{item.description}</p>
            </div>
          </FadeInMotion>
        ))}
      </div>
    </section>
  );
};

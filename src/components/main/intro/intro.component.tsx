import styles from './intro.module.scss';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';

export const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.textWrapper}>
        <FadeInMotion delay={.2} initialX={0} initialY={-100}>
          <h1 className={`${styles.text} ${styles.delay1}`}>안녕하세요.</h1>
          <h1 className={`${styles.text} ${styles.delay2}`}>프론트엔드 개발자 </h1>
          <h1 className={`${styles.text} ${styles.delay2}`}><span>이은서</span>입니다.</h1>
        </FadeInMotion>
        {/* <h1 className={`${styles.text} ${styles.delay3}`}></h1> */}
      </div>
      <a className={styles.roundTextWrapper} href="#ABOUT">
        <svg viewBox="0 0 200 200" className={styles.roundText}>
          <defs>
            <path
              id="circlePath"
              d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
            />
          </defs>
          <circle cx="100" cy="100" r="3" className={styles.dot} />
          <text>
            <textPath href="#circlePath" startOffset="0%">
              • Scroll down • Scroll down • Scroll down • Scroll down • Scroll down
            </textPath>
          </text>
        </svg>
      </a>
    </section>
  );
};



// components/IntroSection.tsx
import styles from './intro.module.scss';

export const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.textWrapper}>
        <h1 className={`${styles.text} ${styles.delay1}`}>HELLO!</h1>
        <h1 className={`${styles.text} ${styles.delay2}`}>FRONTEND DEVELOPER</h1>
        <h1 className={`${styles.text} ${styles.delay3}`}>LEE EUN SEO</h1>
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
              • Scroll down • Scroll down • Scroll down
            </textPath>
          </text>
        </svg>
      </a>
    </section>
  );
};

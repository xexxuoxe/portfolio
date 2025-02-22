import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import styles from './aboutSection.module.scss';


export const AboutSection = () => {
  return (
    <div className={`${styles.work_detail} ${styles.work_container}`}>
      <FadeInMotion delay={0} initialX={-100} initialY={0}>
        <h1 className={styles.work_title}>Projects</h1>
      </FadeInMotion>
      <div className={styles.sub_title}>
        <FadeInMotion delay={0.2} initialX={0} initialY={100}>
          <div className={styles.work_cont}>
            <h3>사용자 경력 27년,</h3>
            <h5>바탕으로 쉽게 간과할 수 있는 디테일까지 스스로 문제를 정의하고 해결하는 서비스를 하나하나 다시 사용해보며 사용자 입장에서 생각합니다</h5>
          </div>
        </FadeInMotion>
      </div>
    </div>
  );
};
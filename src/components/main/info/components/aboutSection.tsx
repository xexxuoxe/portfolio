import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import styles from './aboutSection.module.scss';

export const AboutSection = () => {
  return (
    <section className={`${styles.info_detail} ${styles.info_container}`} id='ABOUT'>
      <div className={styles.sub_title}>
        <FadeInMotion delay={0.2} initialX={-100} initialY={0}>
          <h2>ABOUT ME</h2>
        </FadeInMotion>
        <FadeInMotion delay={0.4} initialX={0} initialY={100}>
          <div className={styles.info_cont}>
            <p>전체적인 기획, 사용자입장이 되어 고뇌하는 습관,</p>
            <p>디자이너와 개발자의 협업을 유연하게 조율해주는 역할,</p>
            <p>고객과 회사의 징검다리 역할하는 전문 인력</p>
            <div className={styles.contact_cont}>
              <span className={styles.title}>CONTACT</span>
              <div className={styles.list}>
                <b className={styles.ico_mail}><i></i></b>
                <span>dlwltn1283@naver.com  / ieunseo802@gmail.com</span>
              </div>
              <div className={styles.list}>
                <b className={styles.ico_call}><i></i></b>
                <span>010.7512.1283</span>
              </div>
            </div>
          </div>
        </FadeInMotion>
      </div>
    </section>
  );
};
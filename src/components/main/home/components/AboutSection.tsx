import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import styles from '../home.module.scss';

export const AboutSection = () => {
  return (
    <div className={`${styles.info_detail} ${styles.home_container}`}>
      <div className={styles.sub_title}>
        <FadeInMotion delay={0.2} initialX={-100} initialY={0}>
          <h2>ABOUT</h2>
        </FadeInMotion>
        <div className={styles.info_cont}>
          <FadeInMotion delay={0.4} initialX={0} initialY={100}>
            <h3>UI/UX Interactive 전문 개발자</h3>
            <h5>트렌드를 빠르게 캐치하여 그에 맞는 기술을 활용하는 능력</h5>
            <p>단순히 생계를 유지하기 위한 수단이 아닌 노력을 통해 가치를 높혀 발전할 수 있어야 회사가 발전할 수 있고...</p>
          </FadeInMotion>
          <FadeInMotion delay={0.7} initialX={0} initialY={100}>
            <p>프론트를 개발한다는것은 중간에서 디자이너와 개발자의 협업을 유연하게 조율해주는 역할이라고 생각합니다...</p>
          </FadeInMotion>
        </div>
      </div>
    </div>
  );
};
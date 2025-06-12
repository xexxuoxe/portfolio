import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import styles from './skillInfo.module.scss';


export const SkillInfo = () => {

  return (
    <article className={`${styles.info_skill} ${styles.info_container}`}>
      <FadeInMotion delay={0} initialX={0} initialY={100}>
        <div className={styles.skill_title}>
          <h2>My Skill</h2>
          <h3>WHAT I CAN DO FOR YOUR</h3>
        </div>
      </FadeInMotion>
      <FadeInMotion delay={0.2} initialX={0} initialY={100}>
        <div className={styles.skill_cont}>
          <div className={styles.sub_title}>
            <p>비즈니스의 발전, 사용자의 아이디어를 현실로 바꾸는 창의적인 기술 및 스타일을 받아들일 자세가 준비가 되어있고, 저의 기술에 자부심을 가지고 있으며, 기술뿐만 아니라 기획 디자인 개발 등 마지막까지 충실하며 사용자 경험과 사용성을 중심으로 웹사이트를 구축할 수 있습니다.<br /> <br />
            항상 높은 퀄리티를 위해 고뇌하며 여러 사람들과 어울리며 협업하고 실무에서 업무를 진행하는 데 있어 필요한 기본 역량을 갖추었음을 자부합니다. <br /> <br />
            저의 목표는 성과가 아닌, 사용자 중심의 경험을 만들고 고객의 목표달성이며, 고객이 보는 모든 것을 개발하는 직무, 고객이 가장 먼저 보는 부분을 담당하므로 회사의 첫인상을 만드는 것이라고 생각합니다.
            <br />이러한 업무가 매력적이다고 생각하며 고객의 반응을 보며 즉각 반영하는 핵심 구성원이 되고 싶습니다.</p>
          </div>
          <ul className={styles.skill_list}>
            <li>JavaScript</li>
            <li>React & Next.js</li>
            <li>Typescript</li>
            <li>Node.js</li>
            <li>JQuery</li>
            <li>UI / UX</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Tailwind CSS</li>
            <li>Git / GitHub</li>
            <li>Figma / Zeplin</li>
          </ul>
        </div>
      </FadeInMotion>
    </article>
  );
};
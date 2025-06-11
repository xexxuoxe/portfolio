import Image from 'next/image';
import styles from './skill.module.scss';
import { skillsData } from '../constants/skillLogs';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';

export const SkillsSection = () => {
  return (
    <section className={styles.skillsSection} id='SKILLS'>
      <h2 className={styles.sub_title}>SKILLS</h2>
      <h1 className={styles.title}>아래의 <span>기술을</span> 사용할 수 있어요</h1>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <FadeInMotion
            key={index}
            delay={index * 0.4}
            initialX={0}
            initialY={100}
          >
            <div className={styles.skillCard}>
              <div className={styles.iconTitle}>
                <Image
                  src={skill.icon}
                  width={18}
                  height={18}
                  alt={`${skill.title} icon`}
                />
                <h3>{skill.title}</h3>
              </div>
              <ul>
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeInMotion>
        ))}
      </div>
    </section>
  );
};

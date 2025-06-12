import styles from './subProject.module.scss';
import { subProjectList } from '../constants/subProjectList';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';

export const SubProject = () => {
  return (
    <ul className={styles.projectListWrapper}>
      {subProjectList.map((project, index) => (
        <FadeInMotion delay={index * 0.1} initialX={0} initialY={100} key={index}>
        <li className={styles.projectItem} key={index}>
          <div className={styles.leftArea}>
            <div className={styles.badgeContainer}>
              {project.skills.map((skill, idx) => (
                <span className={styles.badge} key={idx}>{skill}</span>
              ))}
            </div>
            <div className={styles.projectTitle}>{project.title}</div>
            <div className={styles.projectCompany}>{project.company}</div>
          </div>
          <div className={styles.projectMeta}>@{project.year}</div>
          <ul className={styles.rightArea}>
            {project.descriptions.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </li>
        </FadeInMotion>
      ))}
    </ul>
  );
};

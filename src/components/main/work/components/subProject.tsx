import styles from './subProject.module.scss';
import { subProjectList } from '../constants/subProjectList';

export const SubProject = () => {
  return (
    <ul className={styles.projectListWrapper}>
      {subProjectList.map((project, index) => (
        <li className={styles.projectItem} key={index}>
          <div className={styles.leftArea}>
            <div className={styles.badgeContainer}>
              {project.skills.map((skill, idx) => (
                <span className={styles.badge} key={idx}>{skill}</span>
              ))}
            </div>
            <div className={styles.projectTitle}>{project.title}</div>
          </div>
          <div className={styles.projectMeta}>@{project.year}</div>
          <ul className={styles.rightArea}>
            {project.descriptions.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

import styles from './project.module.scss';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import { projectData } from '../constants/projectList';

export const Project = () => {
  return (
    <section className={styles.projectSection}>
      <ul className={styles.projectGrid}>
        {projectData.map((project, index) => (
          <FadeInMotion delay={index * 0.1} initialX={0} initialY={100} key={index}>
            <li className={styles.projectCard}>
              <div className={styles.websiteBtn}>WEBSITE</div>
              <div className={styles.badgeContainer}>
                {project.skills.map((skill, idx) => (
                  <span className={styles.badge} key={idx}>{skill}</span>
                ))}
              </div>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.subtitle}>@{project.year} / {project.role}</p>
              <p className={styles.company}>회사 : {project.company}</p>
              <ul className={styles.descriptionList}>
                {project.descriptions.map((desc, idx) => (
                  <li key={idx}>• {desc}</li>
                ))}
              </ul>
              <div className={styles.linkButtons}>
                {project.links.github && <a href={project.links.github} target="_blank">🟣 GITHUB</a>}
                {project.links.demo && <a href={project.links.demo} target="_blank">🌐 Live Demo</a>}
                {project.links.readme && <a href={project.links.readme} target="_blank">📄 Readme</a>}
                {project.links.figma && <a href={project.links.figma} target="_blank">🎨 Figma</a>}
              </div>
            </li>
          </FadeInMotion>
        ))}
      </ul>
    </section>
  );
};

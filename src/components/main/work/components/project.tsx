import Image from 'next/image';
import styles from './project.module.scss';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import { projectData } from '../constants/projectList';

export const Project = () => {
  return (
    <section className={styles.projectSection} id='PROJECTS'>
      <h2 className={styles.sub_title}>SKILLS</h2>
      <h1 className={styles.title}>아래의 기술을 사용할 수 있습니다.</h1>
      <ul className={styles.projectGrid}>
        {projectData.map((project, index) => (
          <FadeInMotion delay={index * 0.1} initialX={0} initialY={100} key={index}>
            <li className={styles.projectCard}>
              <div className={styles.image}>
                <Image
                  src={project.img}
                  fill
                  alt='이미지'
                />
                <div className={styles.websiteBtn}>WEBSITE</div>
              </div>
              <div className={styles.CardContents}>
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
                  {project.links.github && <a href={project.links.github} target="_blank"><i className={styles.ico_git}></i>GITHUB</a>}
                  {project.links.demo && <a href={project.links.demo} target="_blank"><i className={styles.ico_web}></i>Live Demo</a>}
                  {project.links.readme && <a href={project.links.readme} target="_blank"><i className={styles.ico_read}></i>ReadMe</a>}
                  {project.links.figma && <a href={project.links.figma} target="_blank"><i className={styles.ico_figma}></i>Figma</a>}
                </div>
              </div>
            </li>
          </FadeInMotion>
        ))}
      </ul>
    </section>
  );
};

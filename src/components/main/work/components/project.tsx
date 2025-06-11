import Image from 'next/image';
import Link from 'next/link';
import styles from './project.module.scss';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import { SubProject } from '@components/main/work/components/subProject'
import { projectData } from '../constants/projectList';

export const ProjectSection = () => {
  return (
    <div className={styles.fakeFrame}>
      <section id='PROJECTS' className={styles.fake}></section>
      <section className={styles.projectSection}>
        <h2 className={styles.sub_title}>PROJECTS</h2>
        <h1 className={styles.title}>저의 <span>프로젝트를</span> 확인해보세요</h1>
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
                  <div className={styles.badgeContainer}>
                    {project.skills.map((skill, idx) => (
                      <span className={styles.badge} key={idx}>{skill}</span>
                    ))}
                  </div>
                  <div className={styles.websiteBtn}>{project.type}</div>
                </div>
                <div className={styles.CardContents}>
                  <div className={styles.CardContentsTop}>
                    <h2 className={styles.title}>{project.title}</h2>
                    <p className={styles.subtitle}>@{project.year} / {project.role}</p>
                    <p className={styles.company}>회사 : {project.company}</p>
                    <ul className={styles.descriptionList}>
                      {project.descriptions.map((desc, idx) => (
                        <li key={idx}>• {desc}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.linkButtons}>
                    {project.links.github && <Link href={project.links.github} target="_blank"><i className={styles.ico_git}></i>GITHUB</Link>}

                    {project.links.demo && <Link href={project.links.demo} target="_blank"><i className={styles.ico_web}></i>Live Demo</Link>}

                    {project.links.readme && <Link href={project.links.readme} scroll={false}><i className={styles.ico_read}></i>ReadMe</Link>}

                    {project.links.figma && <Link href={project.links.figma} target="_blank"><i className={styles.ico_figma}></i>Figma</Link>}
                  </div>
                </div>
              </li>
            </FadeInMotion>
          ))}
        </ul>
        <SubProject />
      </section>
      <section id='PROJECTS' className={styles.fake}></section>
    </div>
  );
};

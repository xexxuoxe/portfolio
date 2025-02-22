import Link from 'next/link';
import Image from 'next/image';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import { PROJECTS_LIST } from '../constants/projectList';
import styles from './project.module.scss';


export const Project = () => {
  return (
    <div className={styles.main_content}>
      <ul className={styles.main_grid}>
        {PROJECTS_LIST.map((project, index) => (
          <li className={styles.main_list_box} key={index}>
            <FadeInMotion delay={index * 0.1} initialX={0} initialY={150}>
              <Link href={project.link}>
                <picture className={styles.box_img}>
                  <Image 
                    src={project.img}
                    fill={true}
                    alt={project.company}
                  />
                </picture>
                <div className={styles.box_text}>
                  <p>{project.area}</p>
                  <p>{project.company}</p> 
                  <p>{project.year}</p>
                </div>
              </Link>
            </FadeInMotion>
          </li>
        ))}
      </ul>
    </div>
  );
};
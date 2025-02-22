import Link from 'next/link';
import Image from 'next/image';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import { SUB_PROJECTS_LIST } from '../constants/subProjectList';
import styles from './subProject.module.scss';


export const SubProject = () => {
  return (
    <div className={styles.sub_content}>
      
        <FadeInMotion delay={0} initialX={-100} initialY={0}>
          <h1 className={styles.sub_content_title}>Other Experience</h1>
        </FadeInMotion>
        {SUB_PROJECTS_LIST.map((value, index) => (
          <div key={index}>
            <FadeInMotion delay={index * 0.1} initialX={150} initialY={0}>
              <div className={styles.sub_list_box}>
                <div className={styles.box_left}>
                  <h4>{value.company}</h4>
                  <h3>{value.title}</h3>
                  <p className={styles.date}>{value.date}</p>
                </div>
                <div className={styles.box_right}>
                  <p>{value.content}</p>
                </div>
              </div>
            </FadeInMotion>
          </div>
        ))}
    </div>
  );
};
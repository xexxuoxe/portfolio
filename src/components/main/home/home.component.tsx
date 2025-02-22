'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLoader } from './hooks/useLoader';

import BackgroundMotion from '@components/_utiles/parallax/backgroundMotion.component';
import FooterComponent from '@components/sementic/footer.component';
import Loader from '@components/_utiles/loader/loader.component';
import { Project } from '@components/main/work/components/'
import { AboutSection, Skill, Work } from '@components/main/info/components/'

import styles from './home.module.scss';

// start
export default function HomeItemPage() {
  const { showContent, handleLoaderComplete } = useLoader();
  const [isBackgroundInView01, setIsBackgroundInView01] = useState(false);
  const [isBackgroundInView02, setIsBackgroundInView02] = useState(false);

  return (
    <>
      {/* loader */}
      <Loader variant="blind_base" onComplete={handleLoaderComplete} className={''} />
      <motion.div
        className={`${styles.home_detail} ${isBackgroundInView01 ? styles.active01 : ''} ${isBackgroundInView02 ? styles.active02 : ''}`}
        initial={{ display: 'none', y: '100%' }}
        animate={{ display: 'block', y: showContent ? 0 : '100%', transition: { duration: 0.6, ease: 'easeOut' } }}
      >
        {/* about */}
        <AboutSection />
        {/* skill*/}
        <Skill />
        {/* project*/}
        <BackgroundMotion onInView={setIsBackgroundInView01}>
          <div className={styles.main_content}>
            <Project />
          </div>
        </BackgroundMotion>
        {/* work button */}
        <BackgroundMotion onInView={setIsBackgroundInView02}>
          <Work />
        </BackgroundMotion>
        {/* footer */}
        <FooterComponent />
      </motion.div>
    </>
  );
}
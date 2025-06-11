'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLoader } from './hooks/useLoader';

import BackgroundMotion from '@components/_utiles/parallax/backgroundMotion.component';
import Loader from '@components/_utiles/loader/loader.component';
import NavComponent from '@components/sementic/navigation/nav.component';
import { IntroSection } from '@components/main/intro/intro.component'
import { ProjectSection } from '@components/main/work/components/project'
import { ArchivingSection } from '@components/main/archiving/archiving.component'
import { GuestSection } from '@components/main/guestbook/guestbook.component'
import { AboutSection, SkillsSection, Work } from '@components/main/info/components/'
import styles from './home.module.scss';

// start
export default function HomeItemPage() {
  const { showContent, handleLoaderComplete } = useLoader();
  const [isBackgroundInView01, setIsBackgroundInView01] = useState(false);
  const [isBackgroundInView02, setIsBackgroundInView02] = useState(false);
  {/* <BackgroundMotion onInView={setIsBackgroundInView01}>
  </BackgroundMotion> */}

  return (
    <>
      {/* loader */}
      <Loader variant="blind_pastel_blue" onComplete={handleLoaderComplete} className={''} />
      <motion.div
        className={`${styles.home_detail} ${isBackgroundInView01 ? styles.active01 : ''} ${isBackgroundInView02 ? styles.active02 : ''}`}
        initial={{ display: 'none', y: '100%' }}
        animate={{ display: 'block', y: showContent ? 0 : '100%', transition: { duration: 0.6, ease: 'easeOut' } }}
      >
        <NavComponent />
        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ArchivingSection />
        <GuestSection />
      </motion.div>

    </>
  );
}
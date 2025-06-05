'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLoader } from './hooks/useLoader';

import BackgroundMotion from '@components/_utiles/parallax/backgroundMotion.component';
// import FooterComponent from '@components/sementic/footer/footer.component';
import Loader from '@components/_utiles/loader/loader.component';
import NavComponent from '@components/sementic/navigation/nav.component';
import { IntroSection } from '@components/main/intro/intro.component'
import { Project, SubProject } from '@components/main/work/components'
import { ArchivingSection } from '@components/main/archiving/archiving.component'
import { GuestSection } from '@components/main/guestbook/guestbook.component'
import { AboutSection, SkillsSection, Work } from '@components/main/info/components/'

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
        <NavComponent />
        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <ArchivingSection />
        <Project />
        <SubProject />
        <GuestSection />
        {/* <BackgroundMotion onInView={setIsBackgroundInView01}>
        </BackgroundMotion> */}
      </motion.div>

    </>
  );
}
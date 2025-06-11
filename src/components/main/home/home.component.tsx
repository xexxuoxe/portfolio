'use client'

import { useState } from 'react';
import NavComponent from '@components/sementic/navigation/nav.component';
import { IntroSection } from '@components/main/intro/intro.component'
import { ProjectSection } from '@components/main/work/components/project'
import { ArchivingSection } from '@components/main/archiving/archiving.component'
import { GuestSection } from '@components/main/guestbook/guestbook.component'
import { AboutSection, SkillsSection, Work } from '@components/main/info/components/'
import styles from './home.module.scss';

// start
export default function HomeItemPage() {
  return (
    <>
      <NavComponent />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ArchivingSection />
      <GuestSection />
    </>
  );
}
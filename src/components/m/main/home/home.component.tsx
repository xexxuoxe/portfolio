'use client'

import { useLoader } from './hooks/useLoader';
import Loader from '@components/_utiles/loader/loader.component';
import NavComponent from '@components/sementic/navigation/nav.component';
import { IntroSection } from '@components/main/intro/intro.component'
import { ProjectSection } from '@components/main/work/components/project'
import { ArchivingSection } from '@components/main/archiving/archiving.component'
import { GuestSection } from '@components/main/guestbook/guestbook.component'
import { AboutSection, SkillsSection, Work } from '@components/main/info/components/'

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
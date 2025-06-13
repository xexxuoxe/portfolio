'use client'

import NavComponent from '@components/m/sementic/navigation/nav.component';
import { IntroSection } from '@components/m/main/intro/intro.component'
import { AboutSection, SkillsSection } from '@components/m/main/info/components/'
import { ProjectSection } from '@components/m/main/work/components/project'
import { ArchivingSection } from '@components/m/main/archiving/archiving.component'
import { GuestSection } from '@components/m/main/guestbook/guestbook.component'

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
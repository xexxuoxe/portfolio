'use client';

import { useResponsive } from '@lib/context/responsive.context';

import TitleComponent from '@components/main/title.component';
import SiteSlideComponent from '@components/main/siteslide/siteslide.component';
import EmblemComponent from '@components/main/emblem/emblem.component';

export default function Main() {
	const { currentBreakpoint, isBreakpoint } = useResponsive();

  return (
    <div className='main_section' id='siwon_container'>
      { isBreakpoint('desktop') && <TitleComponent /> }
      <SiteSlideComponent />
      <EmblemComponent />
    </div>
  );
}

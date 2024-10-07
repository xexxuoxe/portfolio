'use client';

import { useResponsive } from '@lib/context/responsive.context';

export default function Main() {
	const { currentBreakpoint, isBreakpoint } = useResponsive();

  return (
    <div className='main_section' id='siwon_container'>

    </div>
  );
}

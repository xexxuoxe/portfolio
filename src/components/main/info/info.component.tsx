'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLoader } from './hooks/useLoader';

import BackgroundMotion from '@components/_utiles/parallax/backgroundMotion.component';
import NavComponent from '@components/sementic/navigation/nav.component';
import Loader from'@components/_utiles/loader/loader.component';
import { AboutSection, SkillsSection, SkillInfo, Work } from './components/'

import styles from './info.module.scss';

// start
export default function InfoItemPage() {

	const { showContent, handleLoaderComplete } = useLoader();
	const [isBackgroundInView, setIsBackgroundInView] = useState(false);

	return (
		<>
			{/* loader */}
			<Loader variant="blind_base" onComplete={handleLoaderComplete} className={''} />
			<motion.div
				className={`${styles.info_view} ${ isBackgroundInView ? styles.active : ''}`}
				initial={{ display: 'none', y: '100%' }}
				animate={{ display: 'block', y: showContent ? 0 : '100%', transition: { duration: 0.6, ease: 'easeOut' } }}
			>
				<NavComponent />
				<AboutSection />
				<SkillsSection />
				<SkillInfo />
				<BackgroundMotion onInView={setIsBackgroundInView}>
					<Work/>
				</BackgroundMotion>
			</motion.div>
		</>
    )
}

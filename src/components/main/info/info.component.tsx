'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLoader } from './hooks/useLoader';

import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import FooterComponent from '@components/sementic/footer/footer.component';
import BackgroundMotion from '@components/_utiles/parallax/backgroundMotion.component';
import Loader from'@components/_utiles/loader/loader.component';
import { AboutSection, Skill, SkillInfo, Work } from './components/'

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
				 <FadeInMotion delay={0} initialX={-100} initialY={0}>
					<h1 className={styles.info_title}>About me</h1>
				</FadeInMotion>
				{/* about */}
				<AboutSection />
				{/* skill*/}
				<Skill />
				{/* skill info */}
				<SkillInfo />
				{/* work button */}
				<BackgroundMotion onInView={setIsBackgroundInView}>
					<Work/>
				</BackgroundMotion>
				{/* footer */}
				<FooterComponent />
			</motion.div>
		</>
    )
}

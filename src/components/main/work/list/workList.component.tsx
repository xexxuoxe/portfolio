'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLoader } from '../hooks/useLoader';

import BackgroundMotion from '@components/_utiles/parallax/backgroundMotion.component';
import NavComponent from '@components/sementic/navigation/nav.component';
import Loader from '@components/_utiles/loader/loader.component';
import { AboutSection, ProjectSection, SubProject } from '../components/'

import styles from './workList.module.scss';


export default function WorkListPage() {

	const { showContent, handleLoaderComplete } = useLoader();
	const [isBackgroundInView, setIsBackgroundInView] = useState(false);

	// HTML
	return (
		<>
			{/* loader */}
			<Loader className='' variant="blind_base" onComplete={handleLoaderComplete} />
			<motion.div
				className={`${styles.work_view} ${isBackgroundInView ? styles.active : ''}`}
				initial={{ display: 'none', y: '100%' }}
				animate={{ display: 'block', y: showContent ? 0 : '100%', transition: { duration: 0.6, ease: 'easeOut' } }}
			>
				<NavComponent />
				<AboutSection />
				<ProjectSection />
				<BackgroundMotion onInView={setIsBackgroundInView}>
					<SubProject />
				</BackgroundMotion>
			</motion.div>
		</>
	)
}

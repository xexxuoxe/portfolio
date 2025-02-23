'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLoader } from '../hooks/useLoader';

import Loader from'@components/_utiles/loader/loader.component';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import BackgroundMotion from '@components/_utiles/parallax/backgroundMotion.component';

import styles from './workView.module.scss';


export default function WorkViewPage() {

	const { showContent, handleLoaderComplete } = useLoader();
	const [isBackgroundInView, setIsBackgroundInView] = useState(false);

	// HTML
	return (
		<>
			{/* loader */}
			<Loader
				className='' variant="blind_dark_blue" onComplete={ handleLoaderComplete }/>
			<motion.div 
				className={` ${styles.work_view} ${ isBackgroundInView ? styles.active : ''}`}
				initial={{ display: "none",	y: "100%" }}
				animate={{ display: "block", y: showContent ? 0 : "100%", transition: { duration: .3, ease: "easeOut"}}}
			>
				{/* view */}
				<div className={`${styles.work_detail_veiw} ${styles.work_container}`}>
					<header>
						<FadeInMotion delay={.2} initialX={-100} initialY={0}>
							<h1 className={styles.work_detail_title}>MSLINK&SOLUTION</h1>
						</FadeInMotion>
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.2} initialX={-100} initialY={0}>
								<h2>HOME PAGE</h2>
							</FadeInMotion>
							<div className={styles.sub_title_cont}>
								<FadeInMotion delay={0.4} initialX={0} initialY={100}>
									<h3>MSLINK&SOLUTION 홈페이지 구축</h3>
								</FadeInMotion>
							</div>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<div className={`${styles.link_page}`} style={{background: '#ffffff'}}>
							<div className= {`${styles.grid_50}`}>
								<Image 
									src="/images/mslk_img01.png"
									fill={true}
									alt=""
								/>
							</div>
							<div className= {`${styles.grid_50}`}>
								<Image 
									src="/images/mslk_img02.png"
									fill={true}
									alt=""
								/>
							</div>
						</div>
						</FadeInMotion>

						{/* detail text */}
						<article style={{padding: '10rem 0 20rem 0'}}>
							<FadeInMotion delay={.2} initialX={-100} initialY={0}>
							<div className={styles.grid_40}>
								<ul>
									<li>
										<h4>Type</h4>
										<p>Web</p>
									</li>
									<li>
										<h4>Project</h4>
										<p>홈페이지</p>
									</li>
									<li>
										<h4>Participation</h4>
										<p>Front : 100%</p>
									</li>
									<li>
										<h4>Technology</h4>
										<p>
											<span>Html,</span>
											<span>CSS,</span>
											<span>Vanilla,</span>
											<span>Jquery,</span>
											<span>Figma,</span>
											<span>Zeplin</span>
										</p>
									</li>
									<li>
										<h4>Period</h4>
										<p>1개월</p>
									</li>
								</ul>
								<ul>
									<li>
										<h4>Description</h4>
										<p>
											MSLINK&SOLUTION의 홈페이지를 구축하여 회사의 서비스와 솔루션을 효과적으로 소개할 수 있는 온라인 플랫폼을 마련하였습니다.<br /><br />
											해당 홈페이지는 사용자 친화적인 인터페이스와 최적화된 디자인을 통해 방문자들에게 회사의 핵심 가치와 솔루션을 명확하고 직관적으로 전달할 수 있도록 설계되었습니다.
										</p>
									</li>
									<li>
										<div className={styles.project_btn}>
											<Link href="https://xexxuoxe.mycafe24.com" target='_blanck'>
												<span>VIEW PROJECT</span>
											</Link>
										</div>
									</li>
								</ul>
							</div>
							</FadeInMotion>
						</article>
					</main>
					{/* work list button */}
					<BackgroundMotion onInView={setIsBackgroundInView}>
						<div className={styles.next_project_btn}>
							<h2>
								<Link href="/work/view/nh">
									NEXT<br />PROJECT
								</Link>
							</h2>
						</div>
					</BackgroundMotion>
					{/* all work list button */}
					<div className={` ${styles.work_view_btn} ${styles.all_project_btn}`}>
						<Link href="/work/list">
							<span>VIEW ALL PROJECTS</span>
						</Link>
					</div>
				</div>
			</motion.div>
		</>
    )
}

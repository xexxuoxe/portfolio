'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLoader } from '../hooks/useLoader';
import Loader from '@components/_utiles/loader/loader.component';
import NavComponent from '@components/sementic/navigation/nav.component';
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
				className='' variant="blind_dark_blue" onComplete={handleLoaderComplete} />
			<motion.div
				className={` ${styles.work_view} ${isBackgroundInView ? styles.active : ''}`}
				initial={{ display: "none", y: "100%" }}
				animate={{ display: "block", y: showContent ? 0 : "100%", transition: { duration: .3, ease: "easeOut" } }}
			>
				<NavComponent />
				{/* view */}
				<div className={`${styles.work_detail_veiw} ${styles.work_container}`}>
					<header>
						<FadeInMotion delay={.2} initialX={-100} initialY={0}>
							<h1 className={styles.work_detail_title}>DW Partners</h1>
						</FadeInMotion>
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.2} initialX={-100} initialY={0}>
								<h2>HOME PAGE</h2>
							</FadeInMotion>
							<div className={styles.sub_title_cont}>
								<FadeInMotion delay={0.4} initialX={0} initialY={100}>
									<h3>법무법인 두우 홈페이지 구축</h3>
								</FadeInMotion>
							</div>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
							<div className={`${styles.link_page}`} style={{ background: '#dcdcdc' }}>
								<div className={`${styles.grid_50}`}>
									<Image
										src="/images/dw_img01.png"
										fill={true}
										alt=""
									/>
								</div>
								<div className={`${styles.grid_50}`}>
									<Image
										src="/images/dw_img02.png"
										fill={true}
										alt=""
									/>
								</div>
							</div>
						</FadeInMotion>

						{/* detail text */}
						<article style={{ padding: '10rem 0 20rem 0' }}>
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
												<span>Php,</span>
												<span>CSS,</span>
												<span>Vanilla,</span>
												<span>Jquery,</span>
												<span>Figma,</span>
												<span>Zeplin,</span>
											</p>
										</li>
										<li>
											<h4>Period</h4>
											<p>14일</p>
										</li>
									</ul>
									<ul>
										<li>
											<h4>Description</h4>
											<p>
												법무법인 두우는 변호사 회사로, 해당 홈페이지를 구축하여 법률 서비스와 솔루션을 효과적으로 소개하는 온라인 플랫폼을 마련하였습니다.<br /><br />
												홈페이지는 사용자 친화적인 인터페이스와 최적화된 디자인을 통해 방문자들에게 법무법인의 핵심 가치와 법률 서비스를 명확하고 직관적으로 전달할 수 있도록 설계되었습니다.
											</p>
										</li>
										<li>
											<div className={styles.project_btn}>
												<Link href="http://www.lawdw.com/" target='_blanck'>
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
						<div className={` ${styles.work_view_btn} ${styles.all_project_btn}`}>
							<Link href="/work/list">
								<span>VIEW ALL PROJECTS</span>
							</Link>
						</div>
					</BackgroundMotion>
				</div>
			</motion.div>
		</>
	)
}

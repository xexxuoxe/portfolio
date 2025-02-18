/*
	nh view component
	src/component/main/work/view/nh.component.tsx
*/
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// animation
import { motion } from 'framer-motion';
// component
import Loader from'@components/_utiles/loader/loader.component';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import BackgroundMotion from '@components/_utiles/parallax/backgroundMotion.component';
// style
import styles from './workView.module.scss';


export default function WorkViewPage() {

	const [isLoaderDone, setIsLoaderDone] = useState<boolean>(false);
	const [showContent, setShowContent] = useState<boolean>(false);
	const [animating, setAnimating] = useState<boolean>(false);
	const [isBackgroundInView, setIsBackgroundInView] = useState(false);

	// loader
	const handleLoaderComplete = (): void => {
		setIsLoaderDone(true);
	  	setShowContent(true);
	}

	// HTML
	return (
		<>
			{/* loader */}
			<Loader
				className=''
				variant="blind_mint"
				onComplete={ handleLoaderComplete }
			/>
			{/* work_view container */}
			<motion.div 
				className={` ${styles.work_view} ${ isBackgroundInView ? styles.active : ''}`}
				initial={{ 
					display: "none",  
					y: "100%" 
				}}
				animate={{ 
					display: "block", 
					y: showContent ? 0 : "100%",
					transition: { 
						duration: .3,
						ease: "easeOut"
					}
				}}
			>
				{/* view */}
				<div className={`${styles.work_detail_veiw} ${styles.work_container}`}>
					<header>
						<FadeInMotion delay={.2} initialX={-150} initialY={0}>
							<h1 className={styles.work_detail_title}>
							Nonghyup</h1>
						</FadeInMotion>
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.2} initialX={-150} initialY={0}>
								<h2>ADMIN SYSTEM</h2>
							</FadeInMotion>
							<div className={styles.sub_title_cont}>
								<FadeInMotion delay={0.4} initialX={0} initialY={200}>
									<h3>Nonghyup 정보 IT 자산 관리 고도화 프로젝트</h3>
								</FadeInMotion>
							</div>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<div className={styles.row}>
							<div className= {`${styles.grid_100} ${styles.img_bg}`}>
								<Image 
									src="/images/nh_img1.png"
									fill={true}
									alt=""
								/>
							</div>
						</div>
						</FadeInMotion>

						{/* detail text */}
						<article>
							<FadeInMotion delay={.2} initialX={-150} initialY={0}>
							<div className={styles.grid_40}>
							<ul>
									<li>
										<h4>Type</h4>
										<p>Web</p>
									</li>
									<li>
										<h4>Project</h4>
										<p>Admin System</p>
									</li>
									<li>
										<h4>Participation</h4>
										<p>Front : 100%</p>
									</li>
									<li>
										<h4>Technology</h4>
										<p>
											<span>AdminLTE,</span>
											<span>Html,</span>
											<span>CSS,</span>
											<span>Vanilla,</span>
											<span>Jquery,</span>
											<span>Zeplin</span>
										</p>
									</li>
								</ul>
								<ul>
									<li>
										<h4>Description</h4>
										<p>
										Pioneer Platform을 기반으로 한 IT 자산 관리 프로그램을 개발하였으며, WEB과 Eg Manager를 활용한 대시보드를 구현하여 효율적인 자산 관리와 모니터링을 지원하는 시스템을 구축하였습니다.<br /><br />
										IT 자산 관리의 효율성을 극대화하고, 실시간 데이터 분석 및 관리 기능을 제공하는 프로젝트입니다.
										</p>
									</li>
									<li>
										<h4>Year</h4>
										<p>2023</p>
									</li>
								</ul>
							</div>
							</FadeInMotion>
						</article>
						
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<div className={styles.row}>
							<div className= {`${styles.grid_80} ${styles.img_bg}`}>
								<Image 
									src="/images/nh_img2.png"
									fill={true}
									alt=""
								/>
							</div>
						</div>
						</FadeInMotion>

						{/* notice */}
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<em className={styles.notice_txt}>※ 회사 시스템 소스유출 방지로 이미지로만 표시됩니다.</em>
						</FadeInMotion>

						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<div className={styles.row}>
							<ul className={styles.grid_40}>
								<li className={styles.img_bg}>
									<Image 
										src="/images/nh_img3.png"
										fill={true}
										alt=""
									/>
								</li>
								<li className={styles.img_bg}>
									<Image 
										src="/images/nh_img4.png"
										fill={true}
										alt=""
									/>
								</li>
							</ul>
						</div>
						</FadeInMotion>
						
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<div className={styles.row}>
							<div className= {`${styles.grid_80} ${styles.img_bg}`}>
								<Image 
									src="/images/nh_img5.png"
									fill={true}
									alt=""
								/>
							</div>
						</div>
						</FadeInMotion>
					</main>
					{/* work list button */}
					<BackgroundMotion onInView={setIsBackgroundInView}>
						<div className={styles.next_project_btn}>
							<h2>
								<Link href="/work/view/dw">
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

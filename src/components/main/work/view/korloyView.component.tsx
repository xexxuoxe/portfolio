/*
	korloy view component
	src/component/main/work/view/korloy.component.tsx
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
				variant="blind_pastel_blue"
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
						<FadeInMotion delay={.2} initialX={-100} initialY={0}>
							<h1 className={styles.work_detail_title}>KORLOY</h1>
						</FadeInMotion>
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.2} initialX={-100} initialY={0}>
								<h2>ADMIN SYSTEM</h2>
							</FadeInMotion>
							<div className={styles.sub_title_cont}>
								<FadeInMotion delay={0.4} initialX={0} initialY={100}>
									<h3>KORLOY Quotation System KQS-2023 시스템 구축</h3>
								</FadeInMotion>
							</div>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<div className={styles.row}>
							<div className= {`${styles.grid_100} ${styles.img_bg}`}>
								<Image 
									src="/images/korloy_img1.png"
									fill={true}
									alt=""
								/>
							</div>
						</div>
						</FadeInMotion>

						{/* detail text */}
						<article>
							<FadeInMotion delay={.2} initialX={-100} initialY={0}>
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
											<span>Html,</span>
											<span>CSS,</span>
											<span>Chart.Js,</span>
											<span>Jquery,</span>
											<span>Zeplin</span>
										</p>
									</li>
								</ul>
								<ul>
									<li>
										<h4>Description</h4>
										<p>견적시스템을 구축하여 견적 신뢰성 확보 및 매출원가 분석 자료 축적 내부 관리자 시스템입니다.<br /><br />
										견적가 대비 수주, 매출, 원가 분석 자료의 시각화 및 담당자간 커뮤니케이션을 위한 대화창, 견적현황 알림 및 공유 기능 등 신속한 견적업무를 위한 다양한 기능 구현하였습니다.
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
						
						<FadeInMotion delay={.2} initialX={0} initialY={100}>
						<div className={styles.row}>
							<div className= {`${styles.grid_80} ${styles.img_bg}`}>
								<Image 
									src="/images/korloy_img2.png"
									fill={true}
									alt=""
								/>
							</div>
						</div>
						</FadeInMotion>

						{/* notice */}
						<FadeInMotion delay={.2} initialX={0} initialY={100}>
						<em className={styles.notice_txt}>※ 회사 시스템 소스유출 방지로 이미지로만 표시됩니다.</em>
						</FadeInMotion>
						
						<FadeInMotion delay={.2} initialX={0} initialY={100}>
						<div className={styles.row}>
							<div className= {`${styles.grid_80} ${styles.lo_left} ${styles.img_bg}`}>
								<Image 
									src="/images/korloy_img3.png"
									fill={true}
									alt=""
								/>
							</div>
						</div>
						</FadeInMotion>

						<FadeInMotion delay={.2} initialX={0} initialY={100}>
						<div className={styles.row}>
							<div className= {`${styles.grid_80} ${styles.lo_right} ${styles.img_bg}`} style={{height : '62rem'}}>
								<Image 
									src="/images/korloy_img4.png"
									fill={true}
									alt=""
								/>
							</div>
						</div>
						</FadeInMotion>
						{/* <div className={styles.row}>
							<ul className={styles.grid_40}>
								<li className={styles.img_bg}>
									<Image 
										src="/images/korloy_img3.png"
										fill={true}
										alt=""
									/>
								</li>
								<li className={styles.img_bg}>
									<Image 
										src="/images/korloy_img4.png"
										fill={true}
										alt=""
									/>
								</li>
							</ul>
						</div> */}
					</main>
					{/* work list button */}
					<BackgroundMotion onInView={setIsBackgroundInView}>
						<div className={styles.next_project_btn}>
							<h2>
								<Link href="/work/view/mslk">
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

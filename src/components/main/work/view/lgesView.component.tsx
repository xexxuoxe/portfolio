/*
	lges view component
	src/component/main/work/view/lges.component.tsx
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
				variant="blind_base"
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
							<h1 className={styles.work_detail_title}>Energy Solution</h1>
						</FadeInMotion>
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.2} initialX={-150} initialY={0}>
								<h2>ADMIN SYSTEM</h2>
							</FadeInMotion>
							<div className={styles.sub_title_cont}>
								<FadeInMotion delay={0.4} initialX={0} initialY={200}>
									<h3>시험영어 인터넷 강의 전문 사이트, 토익/토스/오픽/지텔프/아이엘츠/토플/텝스/SPA 시험영어 전문으로 이루어진 사이트이다.</h3>
								</FadeInMotion>
							</div>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<div className={styles.row}>
							<div className= {`${styles.grid_100} ${styles.img_bg}`}>
								<Image 
									src="/images/lges_img1.png"
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
										<h4>유형</h4>
										<p>Mobile</p>
									</li>
									<li>
										<h4>프로젝트트</h4>
										<p>사내 서비스</p>
									</li>
									<li>
										<h4>참여도</h4>
										<p>프론트 100%</p>
									</li>
									<li>
										<h4>라이브러리</h4>
										<p></p>
									</li>
									<li>
										<h4>제작년도</h4>
										<p>2024년 09월</p>
									</li>
								</ul>
								<ul>
									<li>
										<h4>설명</h4>
										<p>설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다</p>
									</li>
								</ul>
							</div>
							</FadeInMotion>
						</article>
						
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<div className={styles.row}>
							<div className= {`${styles.grid_80} ${styles.img_bg}`}>
								<Image 
									src="/images/lges_img2.png"
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
										src="/images/lges_img3.png"
										fill={true}
										alt=""
									/>
								</li>
								<li className={styles.img_bg}>
									<Image 
										src="/images/lges_img4.png"
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
									src="/images/lges_img5.png"
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
								<Link href="/work/list">
									NEXT<br />PROJECT
								</Link>
							</h2>
						</div>
					</BackgroundMotion>
					{/* all work list button */}
					<div className={` ${styles.work_view_btn} ${styles.all_project_btn}`}>
						<Link href="">
							<span>VIEW ALL PROJECTS</span>
						</Link>
					</div>
				</div>
			</motion.div>
		</>
    )
}

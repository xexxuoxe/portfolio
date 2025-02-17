/*
	japan view component
	src/component/main/work/view/japan.component.tsx
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
						<FadeInMotion delay={.2} initialX={-100} initialY={0}>
							<h1 className={styles.work_detail_title}>SIWONSCHOOL</h1>
						</FadeInMotion>
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.2} initialX={-100} initialY={0}>
								<h2>EDUCATION WEBSITE</h2>
							</FadeInMotion>
							<div className={styles.sub_title_cont}>
								<FadeInMotion delay={0.4} initialX={0} initialY={100}>
									<h3>시원스쿨 일본어 인터넷 강의 전문 사이트로로 일본어인강 | 기초일본어, 일본어회화, 일본어탭, JLPT N1/N2/N3, JPT, 일본어문법등 이루어진 사이트</h3>
								</FadeInMotion>
							</div>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<div className={`${styles.link_page}`} style={{background: '#ef8d83'}}>
							<div className= {`${styles.grid_50}`}>
								<Image 
									src="/images/japan_img01.png"
									fill={true}
									alt=""
								/>
							</div>
							<div className= {`${styles.grid_50}`}>
								<Image 
									src="/images/japan_img02.png"
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
										<p>Web / Mobile</p>
									</li>
									<li>
										<h4>Project</h4>
										<p>사내 서비스</p>
									</li>
									<li>
										<h4>Participation</h4>
										<p>Front : 100%</p>
									</li>
									<li>
										<h4>Technology</h4>
										<p>
											<span>React,</span>
											<span>SCSS,</span>
											<span>Zustand,</span>
											<span>Figma</span>
										</p>
									</li>
									<li>
										<h4>Year</h4>
										<p>2024</p>
									</li>
								</ul>
								<ul>
									<li>
										<h4>Description</h4>
										<p>
											시원스쿨 일본어는 일본어 학습을 위한 전문 플랫폼으로, 기초 일본어, 일본어 회화, 일본어탭, JLPT N1/N2/N3, JPT, 일본어 문법 등 다양한 학습 콘텐츠를 제공합니다.<br /><br />
											본 프로젝트에서는 상품 유형, 강사, 학습 기간, 가격 등 4가지 필터 조건을 적용하여, 사용자가 원하는 강좌를 효율적으로 찾아볼 수 있는 맞춤 강좌 검색 페이지를 개발하였습니다.<br /><br />
											이를 통해 사용자 경험(UX)을 향상시키고, 보다 직관적인 학습 과정 설계를 지원하도록 최적화하였습니다.
										</p>
									</li>
									<li>
										<div className={styles.project_btn}>
											<Link href="https://japan.siwonschool.com/?s=products&cate=3" target='_blanck'>
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
								<Link href="/work/view/ggbaro">
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

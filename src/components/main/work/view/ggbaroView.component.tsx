/*
	ggbaro view component
	src/component/main/work/view/ggbaro.component.tsx
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
									<h3>소상공인 생애주기(창업,성장,재도전기)별 맞춤형 지원서비스 골목상권 활성화 지원사업 우리마을가게 상권분석서비스 운영 사이트</h3>
								</FadeInMotion>
							</div>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<div className={`${styles.link_page}`} style={{background: '#3d7df4'}}>
							<div className= {`${styles.grid_50}`}>
								<Image 
									src="/images/ggbaro_img01.png"
									fill={true}
									alt=""
								/>
							</div>
							<div className= {`${styles.grid_50}`}>
								<Image 
									src="/images/ggbaro_img02.png"
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
										<p>공공 서비스</p>
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
										<h4>Year</h4>
										<p>2023</p>
									</li>
								</ul>
								<ul>
									<li>
										<h4>Description</h4>
										<p>
											경기도 소상공인을 위한 온라인 종합지원 플랫폼으로, 다양한 정책 지원 사업 정보를 제공하고 신청 서류 간소화를 통한 원스톱 접수 시스템을 구축하였습니다.<br /><br />
											SI 공공 프로젝트의 특성을 반영하여 데이터 중심의 UI/UX를 설계하였으며, CSS Module을 활용한 모듈화된 스타일링을 적용하여 유지보수성과 확장성을 극대화하였습니다.<br /><br />
											이를 통해 소상공인이 보다 편리하게 지원 사업을 검색하고 신속하게 신청할 수 있도록 최적화된 환경을 제공하였습니다.
										</p>
									</li>
									<li>
										<div className={styles.project_btn}>
											<Link href="https://ggbaro.kr/web/index.do" target='_blanck'>
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
								<Link href="/work/view/lgchem">
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

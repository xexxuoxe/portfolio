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
							<h1 className={styles.work_detail_title}>SIWONSCHOOL</h1>
						</FadeInMotion>
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.2} initialX={-100} initialY={0}>
								<h2>EDUCATION WEBSITE</h2>
							</FadeInMotion>
							<div className={styles.sub_title_cont}>
								<FadeInMotion delay={0.4} initialX={0} initialY={100}>
									<h3>시원스쿨 시험영어 인터넷 강의 전문 사이트로로 토익 / 토스 / 오픽 / 지텔프 / 아이엘츠 / 토플 / 텝스 / SPA 시험영어 전문으로 이루어진 사이트</h3>
								</FadeInMotion>
							</div>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
						<div className={`${styles.link_page}`} style={{background: '#a3b9dc'}}>
							<div className= {`${styles.grid_30}`}>
								<Image 
									src="/images/lab_img01.png"
									fill={true}
									alt=""
								/>
							</div>
							<div className= {`${styles.grid_30}`}>
								<Image 
									src="/images/lab_img02.png"
									fill={true}
									alt=""
								/>
							</div>
							<div className= {`${styles.grid_30}`}>
								<Image 
									src="/images/lab_img03.png"
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
										<p>Mobile</p>
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
										<h4>Period</h4>
										<p>14일</p>
									</li>
								</ul>
								<ul>
									<li>
										<h4>Description</h4>
										<p>
											시원스쿨 LAB은 시험 영어 학습을 위한 전문 플랫폼으로, 토익, 토익스피킹, 오픽, 텝스, 지텔프, 아이엘츠, 토플, 듀오링고, 영문법, 비즈니스/취업영어 등 총 10개 과목의 학습 콘텐츠를 제공합니다.<br />
											<br />
											본 프로젝트에서는 수강 신청, 교재 및 MP3 제공, 강의 및 교재 상세 페이지 개발을 수행하였으며, 단일 코드베이스 내에서 각 과목별 API를 동적으로 적용할 수 있도록 유연한 구조로 설계하였습니다. <br />
											<br />이를 통해 동일한 시스템 내에서 과목별 맞춤형 콘텐츠를 효과적으로 제공할 수 있도록 최적화하였습니다
										</p>
									</li>
									<li>
										<div className={styles.project_btn}>
											<Link href="https://lab.siwonschool.com/m/?s=products" target='_blanck'>
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
								<Link href="/work/view/japan">
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

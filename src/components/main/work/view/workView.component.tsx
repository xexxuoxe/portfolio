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
						<FadeInMotion delay={0} initialX={-100} initialY={0}>
							<h1 className={styles.work_detail_title}>SIWONSCHOOL</h1>
						</FadeInMotion>
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.2} initialX={-100} initialY={0}>
								<h2>EDUCATION WEBSITE</h2>
							</FadeInMotion>
							<div className={styles.sub_title_cont}>
								<FadeInMotion delay={0.4} initialX={0} initialY={100}>
									<h3>시험영어 인터넷 강의 전문 사이트, 토익/토스/오픽/지텔프/아이엘츠/토플/텝스/SPA 시험영어 전문으로 이루어진 사이트이다.</h3>
								</FadeInMotion>
							</div>
						</div>
					</header>
					<main>
						<div className={styles.row}>
							<div className= {`${styles.grid_100} ${styles.img_bg}`}>
								<Image 
									src="/images/korloy_img1.png"
									fill={true}
									alt=""
								/>
							</div>
						</div>
						{/* detail text */}
						<article>
							<div className={styles.grid_50}>
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
									<li>
										<div className={styles.project_btn}>
											<Link href="">
												<span>VIEW PROJECT</span>
											</Link>
										</div>
									</li>
								</ul>
							</div>
						</article>
						<div className={styles.row}>
							<div className= {`${styles.grid_80} ${styles.img_bg}`}>
								<Image 
									src="/images/korloy_img2.png"
									fill={true}
									alt=""
								/>
							</div>
						</div>
						<div className={styles.row}>
							<ul className={styles.grid_40}>
								<li className={styles.img_bg}>
									<Image 
										src="/images/korloy_img3.png"
										width={600}
										height={200}
										alt=""
									/>
								</li>
								<li className={styles.img_bg}>
									<Image 
										src="/images/korloy_img4.png"
										width={600}
										height={200}
										alt=""
									/>
								</li>
							</ul>
						</div>
					</main>
					{/* work button */}
					<BackgroundMotion onInView={setIsBackgroundInView}>
						<div className={styles.info_work}>
							<div className={styles.link_container}>
								<Link href="/work/list">
									NEXT PROJECT
								</Link>
							</div>
						</div>
					</BackgroundMotion>
					{/* link button */}
					<div className={styles.work_view_btn}>
						<Link href="">
							<span>VIEW ALL PROJECTS</span>
						</Link>
					</div>
				</div>
			</motion.div>
		</>
    )
}

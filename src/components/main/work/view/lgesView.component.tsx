'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLoader } from '../hooks/useLoader';

import Loader from'@components/_utiles/loader/loader.component';
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
				className='' variant="blind_orange" onComplete={ handleLoaderComplete }/>
			<motion.div 
				className={` ${styles.work_view} ${ isBackgroundInView ? styles.active : ''}`}
				initial={{ display: "none",	y: "100%" }}
				animate={{ display: "block", y: showContent ? 0 : "100%", transition: { duration: .3, ease: "easeOut"}}}
			>
				<NavComponent />
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
									<h3>LG Chem 내부 IT 관리 시스템 'ITM 업무혁신 Portal' LG Energy Solution 으로 이관</h3>
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
											<span>DevOn Frame,</span>
											<span>JSP,</span>
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
										<p>LG Chem의 내부 IT 관리 시스템 'ITM 업무혁신 Portal'을 LG Energy Solution으로 이관하는 작업입니다.<br /><br />
										DevOnFrame을 기반으로 Enterprise 시스템 개발을 위한 아키텍처, 공통 컴포넌트, 템플릿 프로젝트을 활용하여 신속한 설계 및 개발이 가능하도록 구현하였으며, 이를 통해 유지보수의 효율성을 극대화하였습니다.
										</p>
									</li>
									<li>
										<h4>Period</h4>
										<p>1개월</p>
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
								<Link href="/work/view/korloy">
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

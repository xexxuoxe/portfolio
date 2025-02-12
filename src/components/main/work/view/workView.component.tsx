/*
	Work component
	src/component/main/work/work.component.tsx
*/
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSpring, animated } from '@react-spring/web'
import { motion } from 'framer-motion';
import FooterComponent from '@components/sementic/footer.component'
import Loader from'@components/_utiles/loader/loader.component';
import styles from './workView.module.scss';


export default function WorkViewPage() {

	const [isLoaderDone, setIsLoaderDone] = useState<boolean>(false);
	const [showContent, setShowContent] = useState<boolean>(false);
	const [animating, setAnimating] = useState<boolean>(false);

	// loader
	const handleLoaderComplete = (): void => {
		setIsLoaderDone(true);
	  	setShowContent(true);
	}

	const springs = useSpring({
		from: { x: 0 },
		to: { x: 100 },
	})

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
				className={styles.work_view}
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
						<h1 className={styles.work_detail_title}>
							<em>SIWONSCHOOL LAB</em>
							<p>EDUCATION WEBSITE</p>
						</h1>
						<h2 className={styles.detail_sub_title}>
							시험영어 인터넷 강의 전문 사이트, 토익/토스/오픽/지텔프/아이엘츠/토플/텝스/SPA 시험영어 전문으로 이루어진 사이트이다.
						</h2>
					</header>
					<main>
						<div>
							<ul className={styles.grid_mb2}>
								<li>
									<Image 
										src="/images/lab_class.png"
										width={600}
										height={200}
										alt="Siwonschool Lab"
									/>
								</li>
								<li>
									<Image 
										src="/images/lab_class_detail.png"
										width={600}
										height={200}
										alt="Siwonschool Lab"
									/>
								</li>
							</ul>
						</div>

						<article>
							<div className={styles.grid_mb2}>
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
									<li>
										<div className={styles.work_view_btn}>
											<Link href="">
												<span>VISIT WEBSITE</span>
											</Link>
										</div>
									</li>
								</ul>
								<ul>
									<li>
										<h4>설명</h4>
										<p>설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다</p>
									</li>
								</ul>
							</div>
						</article>



					</main>
					{/* link button */}
					<div className={styles.work_view_btn}>
						<Link href="">
							<span>VIEW ALL PROJECTS</span>
						</Link>
					</div>
				</div>
				{/* footer */}
				<FooterComponent />
			</motion.div>
		</>
    )
}

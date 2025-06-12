'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLoader } from '../hooks/useLoader';
import Loader from '@components/_utiles/loader/loader.component';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import styles from './workView.module.scss';

export default function WorkViewPage() {

	const { showContent, handleLoaderComplete } = useLoader();
	return (
		<>
			<Loader
				className='' variant="blind_blue" onComplete={handleLoaderComplete} />
			<motion.div
				className={styles.work_view}
				initial={{ display: "none", y: "100%" }}
				animate={{ display: "block", y: showContent ? 0 : "100%", transition: { duration: .3, ease: "easeOut" } }}
			>
				{/* view */}
				<div className={`${styles.work_detail_veiw} ${styles.work_container}`}>
					<header>
						<FadeInMotion delay={.2} initialX={-150} initialY={0}>
							<div className={styles.work_detail_title}>
								<h1>LG에너지솔루션 ITMS 업무Portal 이관</h1>
								<h2>ADMIN SYSTEM</h2>
							</div>
						</FadeInMotion>
						{/* 여기바꿈 */}
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.4} initialX={0} initialY={200}>
							<div className={styles.sub_title_cont}>
									<h2><i className={styles.ico_summary}></i>개요</h2>
									<h3>G화학의 기존 IT 관리 시스템인 ‘ITM 업무혁신 Portal’을 LG에너지솔루션으로 이관하는 프로젝트로, 기업 내부 IT 서비스 운영 효율화를 목표로 총 10개월간 진행되었습니다. 본 프로젝트에서는 DevOnFrame 기반의 아키텍처 및 공통 템플릿을 활용하여 설계 및 개발 효율성을 극대화하였으며, 신규 디자인 가이드를 반영한 정밀한 퍼블리싱 작업을 통해 일관된 사용자 경험을 제공하였습니다. 프론트엔드 전반을 100% 책임지고 수행하였으며, 유지보수성과 확장성을 고려한 구조 설계에 중점을 두었습니다.</h3>
							</div>
							</FadeInMotion>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
							<div className={styles.row}>
								<div className={`${styles.grid_100} ${styles.img_bg}`}>
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
								<div className={styles.grid}>
									<ul>
										<li>
											<h2><i className={styles.ico_company}></i>회사</h2>
											<p>엠에스링크앤솔루션</p>
										</li>
										<li>
											<h2><i className={styles.ico_participation}></i>기여도</h2>
											<p>Front  100%</p>
										</li>
										<li className={styles.skill_cnt}>
											<h2><i className={styles.ico_code}></i>기술 스택</h2>
											<div className={styles.badge_container}>
												<span>DevOn NCD</span>
												<span>Chart.js</span>
												<span>JSP</span>
												<span>CSS</span>
												<span>Vanilla</span>
												<span>Zeplin</span>
											</div>
										</li>
									</ul>
									<ul>
										<li>
											<h2 className={styles.left_bar}>상세내용</h2>
											<p>엠에스링크앤솔루션에서 LG화학의 기존 IT 관리 시스템 구조를 기반으로, LG에너지솔루션에 맞춘 신규 업무 포털 이관 프로젝트를 수행하였습니다.<br />
											DevOnFrame 아키텍처를 활용하여 공통 템플릿 및 컴포넌트 중심으로 설계·구현하였으며, 시스템의 확장성과 유지보수성을 고려해 모듈 단위 개발을 진행하였습니다.<br />
											신규 디자인 가이드에 맞춰 정밀한 퍼블리싱 작업을 수행했으며, 기존 JSP 기반 시스템을 효율적으로 개선하기 위해 UI 구조 전반을 재설계했습니다.
											</p>
										</li>
										<li>
											<h2 className={styles.left_bar}>주요기능</h2>
											<p>DevOnFrame 기반 템플릿을 활용한 통합 관리 시스템 구성<br />
											JSP 및 기존 시스템과의 연동을 고려한 프론트엔드 로직 처리
											</p>
										</li>
									</ul>
								</div>
							</FadeInMotion>
						</article>

						<FadeInMotion delay={.2} initialX={0} initialY={200}>
							<div className={styles.row}>
								<div className={`${styles.grid_80} ${styles.img_bg}`}>
									<Image
										src="/images/lges_img2.png"
										fill={true}
										alt=""
									/>
								</div>
							</div>
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
								</ul>
							</div>
						</FadeInMotion>

						<FadeInMotion delay={.2} initialX={0} initialY={200}>
							<div className={styles.row}>
								<ul className={styles.grid_40}>
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

						{/* notice */}
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
							<em className={styles.notice_txt}>※ 회사 시스템 소스유출 방지로 이미지로만 표시됩니다.</em>
						</FadeInMotion>
						
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
							<div className={styles.row}>
								<ul className={styles.grid_40}>
									<li className={styles.img_bg}>
										<Image
											src="/images/lges_img5.png"
											fill={true}
											alt=""
										/>
									</li>
								</ul>
							</div>
						</FadeInMotion>
					</main>
					<div className={` ${styles.work_view_btn} ${styles.all_project_btn}`}>
						<Link href="/#PROJECTS">
							<span>모든 프로젝트 보러가기</span>
						</Link>
					</div>
				</div>
			</motion.div>
		</>
	)
}

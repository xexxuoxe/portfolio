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
								<h1>LG 화학 ITMS 업무 Portal 재구축</h1>
								<h2>ADMIN SYSTEM</h2>
							</div>
						</FadeInMotion>
						{/* 여기바꿈 */}
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.4} initialX={0} initialY={200}>
							<div className={styles.sub_title_cont}>
									<h2><i className={styles.ico_summary}></i>개요</h2>
									<h3>엠에스링크앤솔루션에서 LG화학 내부의 IT 업무 시스템인 ‘ITMS Task Portal’을 재구축하는 프로젝트로, 총 1년간 진행되었습니다. JSP 기반의 화면 설계를 통해 대기업 업무 프로세스에 적합한 UI를 구성하고, Devonframe 기반의 공통 컴포넌트 및 템플릿을 적극 활용하여 일관된 UI/UX와 재사용성을 확보했습니다. IT 투자 계획 수립 및 Rolling Plan 관리 등 복잡한 관리자 기능을 구현하였으며, Chart.js를 활용해 실시간 데이터를 시각화하는 대시보드 화면도 제작하여 관리자 편의성을 향상시켰습니다. 프론트엔드 전체를 담당하며 설계부터 구현까지 수행했습니다.</h3>
							</div>
							</FadeInMotion>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
							<div className={styles.row}>
								<div className={`${styles.grid_100} ${styles.img_bg}`}>
									<Image
										src="/images/lgcns_img1.png"
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
											<p>
												본 프로젝트는 LG화학의 기존 ITMS(IT Management System) 업무 포털을 재구축 및 IT투자 시스템 추가하는 작업으로, 엔터프라이즈 환경에 최적화된 내부 관리자 시스템을 개발하는 것이 주요 목표였습니다.<br />
												DevOnFrame 기반으로 프로젝트를 설계하고, 공통 컴포넌트 및 템플릿 구조를 적극 활용하여 일관된 UI/UX를 구현하고 코드 재사용성을 높였습니다.<br />
												또한 JSP 기반의 화면 설계를 통해 기업 내 복잡한 업무 흐름에 적합한 사용자 인터페이스를 구성하였으며, Zeplin을 활용하여 디자인 가이드에 따라 정밀한 작업을 수행하였습니다.
											</p>
										</li>
										<li>
											<h2 className={styles.left_bar}>주요기능</h2>
												<p>IT 투자 사업 계획 수립, Rolling Plan 관리 등의 고도화된 기능을 포함하고 있으며, 다양한 관리자 업무구현<br />
												Chart.js를 활용하여 실시간 데이터를 시각화할 수 있는 그래프 기반 대시보드를 구현
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
										src="/images/lgcns_img2.png"
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
											src="/images/lgcns_img3.png"
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
											src="/images/lgcns_img4.png"
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
											src="/images/lgcns_img4.png"
											fill={true}
											alt=""
										/>
									</li>
								</ul>
							</div>
						</FadeInMotion>

						<FadeInMotion delay={.2} initialX={0} initialY={200}>
							<div className={styles.row}>
								<div className={`${styles.grid_80} ${styles.lo_left} ${styles.img_bg}`}>
									<Image
										src="/images/lgcns_img5.png"
										fill={true}
										alt=""
									/>
								</div>
							</div>
						</FadeInMotion>

						<FadeInMotion delay={.2} initialX={0} initialY={200}>
							<div className={styles.row}>
								<div className={`${styles.grid_80} ${styles.lo_right} ${styles.img_bg}`}>
									<Image
										src="/images/lgcns_img6.png"
										fill={true}
										alt=""
									/>
								</div>
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
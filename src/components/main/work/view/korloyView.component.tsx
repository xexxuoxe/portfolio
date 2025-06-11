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
				className='' variant="blind_base" onComplete={handleLoaderComplete} />
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
								<h1>KORLOY Quotation System KQS-2023 시스템 구축</h1>
								<h2>ADMIN SYSTEM</h2>
							</div>
						</FadeInMotion>
						{/* 여기바꿈 */}
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.4} initialX={0} initialY={200}>
							<div className={styles.sub_title_cont}>
									<h2><i className={styles.ico_summary}></i>개요</h2>
									<h3>MSLINK&SOLUTION 근무때 실행한 프로젝트로 견적시스템을 구축하여 견적 신뢰성 확보 및 매출원가 분석 자료 축적 내부 관리자 시스템입니다.<br />
									견적가 대비 수주, 매출, 원가 분석 자료의 시각화 및 담당자간 커뮤니케이션을 위한 대화창, 견적현황 알림 및 공유 기능 등 신속한 견적업무를 위한 다양한 기능 구현하였습니다.</h3>
									{/* LG Chem 내부 IT 관리 시스템 'ITM 업무혁신 Portal' 효율적인 IT투자 사업계획 수립 및 Rolling Plan 관리 체계 기준으로 종합지원 시스템 구축 */}
							</div>
							</FadeInMotion>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
							<div className={styles.row}>
								<div className={`${styles.grid_100} ${styles.img_bg}`}>
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
							<FadeInMotion delay={.2} initialX={-150} initialY={0}>
								<div className={styles.grid}>
									<ul>
										<li>
											<h2><i className={styles.ico_company}></i>회사</h2>
											<p>MSLINK&SOLUTION</p>
										</li>
										<li>
											<h2><i className={styles.ico_participation}></i>기여도</h2>
											<p>Front  100%</p>
										</li>
										<li className={styles.skill_cnt}>
											<h2><i className={styles.ico_code}></i>기술 스택</h2>
											<div className={styles.badge_container}>
												<span>Html</span>
												<span>CSS</span>
												<span>Chart.Js</span>
												<span>Jquery</span>
												<span>Zeplin</span>
											</div>
										</li>
									</ul>
									<ul>
										<li>
											<h2 className={styles.left_bar}>상세내용</h2>
											<p>기업 내부 IT 관리 시스템을 고객 중심의 서비스 관점으로 전환하여, 보다 효율적인 IT 서비스 운영을 지원하는 내부 관리자 시스템입니다.<br />
												DevOnFrame을 기반으로 Enterprise 시스템 개발을 위한 아키텍처, 공통 컴포넌트, 템플릿 프로젝트을 활용하여 신속한 설계 및 개발이 가능하도록 구현하였으며, 이를 통해 유지보수의 효율성을 극대화하였습니다.
											</p>
										</li>
										<li>
											<h2 className={styles.left_bar}>주요기능</h2>
											<p>기업 내부 IT 관리 시스템을 고객 중심의 서비스 관점으로 전환하여, 보다 효율적인 IT 서비스 운영을 지원하는 내부 관리자 시스템입니다.<br />
												DevOnFrame을 기반으로 Enterprise 시스템 개발을 위한 아키텍처, 공통 컴포넌트, 템플릿 프로젝트을 활용하여 신속한 설계 및 개발이 가능하도록 구현하였으며, 이를 통해 유지보수의 효율성을 극대화하였습니다.
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
										src="/images/korloy_img2.png"
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
											src="/images/korloy_img3.png"
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
											src="/images/korloy_img4.png"
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
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
								<h1>KORLOY Quotation System KQS-2023 시스템 구축</h1>
								<h2>ADMIN SYSTEM</h2>
							</div>
						</FadeInMotion>
						{/* 여기바꿈 */}
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.4} initialX={0} initialY={200}>
							<div className={styles.sub_title_cont}>
								<h2><i className={styles.ico_summary}></i>개요</h2>
								<h3>엠에스링크앤솔루션에서 2023년 3개월간 진행한 KORLOY 견적 시스템 구축 프로젝트입니다.
								프로젝트 초기 기획부터 프론트엔드 개발까지 전체 개발 생명주기에 참여했으며, 견적 신뢰성 확보와 매출 원가 분석 자료 축적을 목표로 한 내부 관리자 시스템입니다.
								견적가 대비 수주, 매출, 원가 데이터를 시각화한 대시보드 UI를 구현하고, 담당자 간 신속한 커뮤니케이션과 업무 효율성을 지원하는 다양한 기능을 포함하였습니다.
								</h3>
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
											<p>엠에스링크앤솔루션</p>
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
											<p>본 시스템은 견적 업무를 지원하는 내부 관리자 플랫폼으로, 견적 현황 알림, 대화창 기능, 견적 공유 등 실시간 커뮤니케이션 기능을 탑재하여 업무 프로세스의 신속함과 투명성을 확보하였습니다.<br />
											디자인 시스템 구축부터 기능 구현까지 종합적으로 개발하였으며, Chart.js와 Jquery를 활용한 데이터 시각화 대시보드를 통해 관리자들이 직관적으로 견적 현황과 매출 분석 자료를 확인할 수 있도록 하였습니다.<br />
											Zeplin을 사용해 디자인 가이드에 따른 정밀한 UI 퍼블리싱을 진행했고, CSS를 통한 스타일링으로 일관된 사용자 경험을 제공하였습니다.
											</p>
										</li>
										<li>
											<h2 className={styles.left_bar}>주요기능</h2>
											<p>활용 견적, 수주, 원가 데이터의 시각화 대시보드 구현
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
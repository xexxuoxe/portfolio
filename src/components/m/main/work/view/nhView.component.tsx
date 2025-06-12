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
								<h1>농협 고객행복센터 방화벽 교체 및 IT자산관리시스템 고도화</h1>
								<h2>ADMIN SYSTEM</h2>
							</div>
						</FadeInMotion>
						{/* 여기바꿈 */}
						<div className={styles.detail_sub_title}>
							<FadeInMotion delay={0.4} initialX={0} initialY={200}>
							<div className={styles.sub_title_cont}>
									<h2><i className={styles.ico_summary}></i>개요</h2>
									<h3>엠에스링크앤솔루션에서 농협 사내 Pioneer Platform을 기반으로 한 IT 자산 관리 프로그램을 개발하였으며, WEB과 Eg Manager와 연동된 대시보드를 구현하여 효율적인 자산 관리와 모니터링을 지원하는 시스템을 구축하였습니다.<br />IT 자산 관리의 효율성을 극대화하고, 실시간 데이터 분석 및 관리 기능을 제공하는 프로젝트입니다.</h3>
							</div>
							</FadeInMotion>
						</div>
					</header>
					<main>
						<FadeInMotion delay={.2} initialX={0} initialY={200}>
							<div className={styles.row}>
								<div className={`${styles.grid_100} ${styles.img_bg}`}>
									<Image
										src="/images/nh_img1.png"
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
												<span>AdminLTE</span>
												<span>Html</span>
												<span>CSS</span>
												<span>Vanilla</span>
												<span>Jquery</span>
												<span>Zeplin</span>
											</div>
										</li>
									</ul>
									<ul>
										<li>
											<h2 className={styles.left_bar}>상세내용</h2>
											<p>프로젝트 초기 단계부터 참여하여 요구사항 분석, 화면 설계, UI 구현 등 프론트엔드 전반을 담당하였습니다.
											기업 내부 자산을 체계적으로 등록·수정·조회할 수 있는 기능과 함께, 사용자 편의성을 고려한 인터페이스를 제공하기 위해 AdminLTE 템플릿을 커스터마이징하였습니다.
											또한 자산의 상태 정보를 시각화하고, 관리자의 효율적인 의사결정을 지원하는 대시보드 화면을 구현하였습니다.
											</p>
										</li>
										<li>
											<h2 className={styles.left_bar}>주요기능</h2>
											<p>AdminLTE 기반의 반응형 관리자 UI 구성
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
										src="/images/nh_img2.png"
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
											src="/images/nh_img3.png"
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
											src="/images/nh_img4.png"
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
											src="/images/nh_img5.png"
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
/*
	Work component
	src/component/main/work/work.component.tsx
*/
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FooterComponent from '@components/sementic/footer.component'
import Loader from'@components/_utiles/loader/loader.component';
import styles from './work.module.scss';


export default function InfoItemPage() {

	const [isLoaderDone, setIsLoaderDone] = useState<boolean>(false);
	const [showContent, setShowContent] = useState<boolean>(false);
	const [animating, setAnimating] = useState<boolean>(false);

	// loader
	const handleLoaderComplete = (): void => {
		setIsLoaderDone(true);
	  	setShowContent(true);
	}

	//slide list array
	const logos = [
		{
			company: "현대해상",
			date: "2021.04",
			name: "현대해상 정보계 BI포탈 시스템구축",
		},
		{
			company: "한국무역보험공사",
			date: "",
			name: "",
		},
		{
			company: "",
			date: "",
			name: "",
		},
		{
			company: "",
			date: "",
			name: "",
		},
		{
			company: "",
			date: "",
			name: "",
		},
	];

	// HTML
	return (
		<>
			{/* loader */}
			<Loader
				variant="blind_base"
				onComplete={ handleLoaderComplete }
			/>
			{/* info_view container */}
			<motion.div 
				className={styles.info_view}
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
				{/* work */}
				<div className={`${styles.info_detail} ${styles.info_container}`}>
					<h1 className={styles.info_title}>Work</h1>
					<div className={styles.sub_title}>
						<h2>ABOUT</h2>
						<div className={styles.info_cont}>
							<h3>UI/UX Interactive 전문 개발자</h3>
							<h5>트렌드를 빠르게 캐치하여 그에 맞는 기술을 활용하는 능력</h5>
							<p>단순히 생계를 유지하기 위한 수단이 아닌 노력을 통해 가치를 높혀 발전할 수 있어야 회사가 발전할 수 있고<br />회사가 발전해야 자신이 발전할 수 있다고 생각합니다. <br />
							현재에 안주하는 삶이 아닌 계속해서 공부하고 발전하는, 끊임없이 발전하는 기술과 디자인에 대응합니다.<br />업무에 있어 주어진 업무만 보는것이 아닌 전체적인 기획, 사용자입장이 되어 고뇌하는 습관이 있어 많은 의견을 주저하지않고 적극적으로 제시하여 프로젝트의 완성도를 높히는 역할을 해왔습니다.<br /> 프론트를 개발한다는것은 중간에서 디자이너와 개발자의 협업을 유연하게 조율해주는 역할이라고 생각합니다.<br /> 주어진 디자인만 그대로 개발하는 것이 아니라 에너지와 커뮤니케이션을 최소화하고, 코드의 가독성을 극대화하여 프로젝트가 완성도를 높힐 수 있게끔 그만큼의 실력이 갖춰야한다고 생각하며, 고객과 회사의 징검다리 역할하는 전문 인력으로 성장하겠습니다.</p>
						</div>
					</div>
				</div>
				{/* A representative list */}
				<div className="si-career">
					<div className="si-career-tit"><p>Other Experience</p></div>
					<div className="si-career-table">
						<div className="si-list-item back-to-position to-left delay-0">
							<div className="item-name">
								<h4>현대해상</h4>
								<h3>정보계 BI Portal</h3>
								<p className="date txt-bg">2021.04</p>
							</div>
							<div className="description-text">
								<div><p>현대해상 정보계 BI포탈 시스템구축</p></div>
							</div>
						</div>
					</div>
				</div>
				{/* footer */}
				<FooterComponent />
			</motion.div>
		</>
    )
}

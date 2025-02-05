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
import styles from './workList.module.scss';


export default function WorkListPage() {

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

	//main list array
	const mainList = [
		{
			link: "https://lab.siwonschool.com/m/?s=products",
			img: "/images/bg_siwonlab.png",
			area: "WEBSITE",
			company: "시원스쿨 LAB",
			year: "©2024",
		},
		{
			link: "https://japan.siwonschool.com/?s=products&cate=3",
			img: "/images/bg_siwonjapan.png",
			area: "WEBSITE",
			company: "시원스쿨 일본어 맞춤강좌찾기",
			year: "©2024",
		},
		{
			link: "https://ggbaro.kr/web/index.do",
			img: "/images/bg_ggbaro.jpg",
			area: "WEBSITE",
			company: "경기도상권분석서비스",
			year: "©2023",
		},
		{
			link: "",
			img: "/images/bg_lgcns.jpg",
			area: "ADMIN SYSTEM",
			company: "LG 화학 ITMS 업무Portal 재구축",
			year: "©2022",
		},
		{
			link: "",
			img: "/images/bg_lges.png",
			area: "ADMIN SYSTEM",
			company: "LG에너지솔루션 ITMS 업무Portal 이관",
			year: "©2022",
		},
		{
			link: "",
			img: "/images/bg_korloy.png",
			area: "ADMIN SYSTEM",
			company: "KORLOY 견적 시스템 'KQS-2023 Project' ",
			year: "©2023",
		},
		{
			link: "",
			img: "/images/bg_mslk.jpg",
			area: "WEBSITE",
			company: "MSLINK&SOLUTION",
			year: "©2023",
		},
		{
			link: "",
			img: "/images/bg_nh.png",
			area: "ADMIN SYSTEM",
			company: "농협 고객행복센터 방화벽 교체 및 IT자산관리시스템 고도화",
			year: "©2023",
		},
		{
			link: "http://www.lawdw.com/",
			img: "/images/bg_lawdw.jpg",
			area: "WEBSITE",
			company: "법무법인 두우",
			year: "©2021",
		},
		
	];

	//sub list array
	const subList = [
		{
			company: "현대해상",
			title: "정보계 BI Portal",
			date: "2021.04",
			content: "현대해상 정보계 BI포탈 시스템구축",
		},
		{
			company: "한국무역보험공사",
			title: "정보계시스템",
			date: "2021.10",
			content: "네오키스 경영정보시스템 고도화를 위한 시스템 재구축"
		},
		{
			company: "롯데슈퍼",
			title: "경영정보시스템",
			date: "2021.10",
			content: "경영정보시스템 보고서 시각화 대시보드 구축"
		},
		{
			company: "한수테크니컬서비스",
			title: "HTS 한수인사화면",
			date: "2021.12 ~ 2022.03",
			content: "AdminLTE내 javascript 라이브러리 사용하여 대시보드 인사화면 구축"
		},
		{
			company: "경기도시장상권진흥원",
			title: "ETL 솔루션 Chamomile",
			date: "2021.12",
			content: "ETL 솔루션 제품 Chamomile, 리눅스 기반 배치 작업 스케줄링 및 모니터링 시스템 구축"
		},
		{
			company: "서울신용보증재단",
			title: "서울신용보증재단 CAN자영업백신",
			date: "2021.01 ~2022.04",
			content: "CAN자영업백신 소상공인지원포털 구축"
		},
		{
			company: "LG CNS",
			title: "지급계좌인증서비스 개발",
			date: "2022.07",
			content: "DevOn BizActor 활용한 지급계좌인증시스템 리뉴얼"
		}
	];

	// HTML
	return (
		<>
			{/* loader */}
			<Loader
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
				{/* work */}
				<div className={`${styles.work_detail} ${styles.work_container}`}>
					<h1 className={styles.work_title}>Work</h1>
					<div className={styles.sub_title}>
						<div className={styles.work_cont}>
							<h3>사용자 경력 27년,</h3>
							<h5>바탕으로 쉽게 간과할 수 있는 디테일까지 스스로 문제를 정의하고 해결하는 서비스를 하나하나 다시 사용해보며 사용자 입장에서 생각합니다</h5>
						</div>
					</div>
				</div>

				{/* A representative list */}
				<div className={styles.main_content}>
					<ul className={styles.main_grid}>
						{mainList.map((value , index) => (
							<li className={styles.main_list_box} key={index}>
								<Link
									href={value.link}
								>
									<Image 
										src={value.img}
										fill="true"
										alt=""
									/>
									<div className={styles.box_text}>
										<p>{value.area}</p>
										<p>{value.company}</p> 
										<p>{value.year}</p>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* sub other list */}
				<div className={styles.sub_content}>
					{subList.map((value , index) => (
						<div className={styles.sub_list_box} key={index}>
							<div className={styles.box_left}>
								<h4>{value.company}</h4> 
								<h3>{value.title}</h3>
								<p className={styles.date}>{value.date}</p>
							</div>
							<div className={styles.box_right}>
								<p>{value.content}</p>
							</div>
						</div>
					))}
				</div>
				{/* footer */}
				<FooterComponent />
			</motion.div>
		</>
    )
}

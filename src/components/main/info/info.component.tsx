/*
	info component
	src/component/main/info/info.component.tsx
*/
'use client'
import gsap from "gsap";
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './info.module.scss';
import Slider from'@components/_utiles/slider/slider.component';
import Loader from'@components/_utiles/loader/loader.component';

export default function InfoItemPage() {

	const [isLoaded, setIsLoaded] = useState(false);

	console.log(isLoaded)
	
	// HTML
	return (
		<>
		{/* loader */}
		<Loader
			variant="blind_base"
			onComplete={() => setIsLoaded(true)}
    	/>
		{/* about */}
		<div className={`${styles.info_view} ${isLoaded ? styles.visible : ""}`}>
			<div className={`${styles.info_detail} ${styles.info_container}`}>
				<h1 className={styles.info_title}>저를 소개합니다.</h1>
				<div className={styles.sub_title}>
					<h2>ABOUT</h2>
					<div className={styles.info_cont}>
						<h3>전 세계의 래프팅 디지털 경험</h3>
						<p>Lab21은 그리스 아테네에 본사를 둔 독립 웹 개발 스튜디오로, 전 세계적인 프로젝트를 진행하고 있습니다. 저희는 UX 기반 맞춤형 웹사이트, 포털, 블로그 및 웹 개발의 모든 측면을 전문으로 하고 있습니다.</p>
					</div>
				</div>
			</div>
			{/* skill*/}
			<article className={`${styles.info_skill} ${styles.info_container}`}>
				<div className={styles.skill_title}>
					<h2>My Skill</h2>
					<h3>WHAT I CAN DO FOR YOUR</h3>
				</div>
				<div className={styles.skill_cont}>
					<div className={styles.sub_title}>
						<p>비즈니스의 발전, 사용자의 아이디어를 현실로 바꾸는 창의적인 기술 및 스타일을 받아들일 자세와 지식이 준비되어있습니다.</p>
						<p>저의 기술에 자부심을 가지고 있으며, 기술뿐만 아니라 기획 디자인 개발 등 마지막까지 충실하며사용자 경험과 사용성을 중심으로 웹사이트를 구축합니다.</p>
						<p>저의 목표는 성과가 아닌, 사용자 중심의 경험을 만들고 고객의 목표달성입니다.</p>
					</div>
					<ul className={styles.skill_list}>
						<li>JavaScript</li>                 
						<li>React & Next.js</li>
						<li>Typescript</li>
						<li>Node.js</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>SASS</li>
						<li>JQuery</li>
						<li>Git / GitHub</li>
						<li>Figma / Zeplin</li>                      
					</ul>
				</div>
			</article>
		</div>
		</>
    )
}
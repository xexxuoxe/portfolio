/*
	info component
	src/component/main/info/info.component.tsx
*/
'use client'
import gsap from "gsap";
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import Link from 'next/link';
import Image from 'next/image';
import styles from './info.module.scss';
import Slider from'@components/_utiles/slider/slider.component';

export default function InfoItemPage() {
	//slide list array
	const slides = [
		{
			id: "slide01",
			title: "2022 국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_nba2023.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide02",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_customer2021.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide03",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_customer2020.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide04",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_goodtowork.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide05",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_brand2020.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide06",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_yearbrand2017.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide07",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_yearbrand2022.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide08",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_consumer.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide09",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_nba2019.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide10",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_brand2018.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide11",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem01.png",
			link: "//www.siwonschool.com/?s=press"
		},
	]

	// HTML
	return (
		<div className={styles.info_view}>
			{/* about*/}
			<h1 className={styles.info_title}>ABOUT</h1>
			<div className={styles.sub_title}>
				<h2>CRAFTING DIGITAL EXPERIENCES ALL AROUND THE GLOB</h2>
				<h3>Lab21 is an independent web development studio based in Athens, Greece with worldwide projects. We specialize in UX driven custom websites, portals, blogs and all aspects of web development.</h3>
			</div>
			{/* skill*/}
			<article className={styles.info_skill}>
				<div className={styles.skill_title}>
					<h2>My Skill</h2>
					<h3>WHAT I CAN DO FOR YOUR</h3>
					<p>비즈니스의 발전, 사용자의 아이디어를 현실로 바꾸는 창의적인 기술 및 스타일을 받아들일 자세와 지식이 준비되어있습니다.</p>
					<p>저의 기술에 자부심을 가지고 있으며, 기술뿐만 아니라 기획 디자인 개발 등 마지막까지 충실하며사용자 경험과 사용성을 중심으로 웹사이트를 구축합니다.</p>
					<p>저의 목표는 성과가 아닌, 사용자 중심의 경험을 만들고 고객의 목표달성입니다.</p>
				</div>
				<div className={styles.skill_list}>
					<ul>
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
			{/* slide*/}
			<div className={styles.skill_slide}>
				<Slider
					slides={slides}
					spaceBetween={30}
					slidesPerView={8}
					loop={true}
					pagination={false}
					scrollbar={false}
					autoplay={{ delay: 2000, disableOnInteraction: false }}
				/>
			</div>
		</div>
		
    )
}

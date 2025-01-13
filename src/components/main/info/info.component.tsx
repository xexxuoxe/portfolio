/*
	info component
	src/component/main/info/info.component.tsx
*/
'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import FooterComponent from '@components/sementic/footer.component'
import Loader from'@components/_utiles/loader/loader.component';
import styles from './info.module.scss';
import 'swiper/css';


export default function InfoItemPage() {

	const [isLoaderDone, setIsLoaderDone] = useState<boolean>(false);
	const [showContent, setShowContent] = useState<boolean>(false);

	const handleLoaderComplete = (): void => {
		setIsLoaderDone(true);
	  	setShowContent(true);
	}
	
	//slide list array
	const logos = [
		'https://cdn.sanity.io/images/s1rnfuvk/production/8b742b3fdf7836c37e6f2a3f9fd8b2be00bce631-230x134.svg',
		'https://cdn.sanity.io/images/s1rnfuvk/production/ad8e52ab8e0ba241a98149aee74b55b7ad4e41b5-230x135.svg',
		'https://cdn.sanity.io/images/s1rnfuvk/production/ff1482b1746270c7ea744ca83b06a32aba4c6de8-230x134.svg',
		'https://cdn.sanity.io/images/s1rnfuvk/production/b8ef747b771e363e333fb7ecf4e77aee78ff15fd-230x135.svg',
		'https://cdn.sanity.io/images/s1rnfuvk/production/092d595077a46cf214a670e7b10ee221779f2a6c-230x134.svg',
		'https://cdn.sanity.io/images/s1rnfuvk/production/c6b5645f66f6db4d59ff31c1da3e26c1b91f9e58-230x134.svg',
		'https://cdn.sanity.io/images/s1rnfuvk/production/94e279fa8c37360d7cefae8d022963954ad7b7ed-230x134.svg',
		'https://cdn.sanity.io/images/s1rnfuvk/production/3bf709743aacf6a7b2c6b55aa6564ccfe0e2748c-230x134.svg',
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
				{/* about */}
				<div className={`${styles.info_detail} ${styles.info_container}`}>
					<h1 className={styles.info_title}>About me</h1>
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
				{/* slide */}
				<Swiper
					modules={[ Autoplay ]}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 2000 }}
					spaceBetween={30}
					slidesPerView={6}
					breakpoints={{
						1024: { slidesPerView: 4 },
						768: { slidesPerView: 2 },
						480: { slidesPerView: 1 },
					}}
				>
					{logos.map((logo, index) => (
					<SwiperSlide key={index}>
						<div className={styles.slideWrapper}>
						<Image
							//src={logo}
							alt={`Logo ${index + 1}`}
							className={styles.logo}
							style={{ animationDelay: `${index * 0.2}s` }}
						/>
						</div>
					</SwiperSlide>
					))}
				</Swiper>
				{/* skill*/}
				<article className={`${styles.info_skill} ${styles.info_container}`}>
					<div className={styles.skill_title}>
						<h2>My Skill</h2>
						<h3>WHAT I CAN DO FOR YOUR</h3>
					</div>
					<div className={styles.skill_cont}>
						<div className={styles.sub_title}>
							<p>비즈니스의 발전, 사용자의 아이디어를 현실로 바꾸는 창의적인 기술 및 스타일을 받아들일 자세가 준비가 되어있고, 저의 기술에 자부심을 가지고 있으며, 기술뿐만 아니라 기획 디자인 개발 등 마지막까지 충실하며 사용자 경험과 사용성을 중심으로 웹사이트를 구축할 수 있습니다.<br />
							항상 높은 퀄리티를 위해 고뇌하며 여러 사람들과 어울리며 협업하고 실무에서 업무를 진행하는 데 있어 필요한 기본 역량을 갖추었음을 자부합니다. <br />
							저의 목표는 성과가 아닌, 사용자 중심의 경험을 만들고 고객의 목표달성이며, 고객이 보는 모든 것을 개발하는 직무, 고객이 가장 먼저 보는 부분을 담당하므로 회사의 첫인상을 만드는 것이라고 생각합니다.
							<br />이러한 업무가 매력적이다고 생각하며 고객의 반응을 보며 즉각 반영하는 핵심 구성원이 되고 싶습니다.</p>
						</div>
						<ul className={styles.skill_list}>
							<li>JavaScript</li>                 
							<li>React & Next.js</li>
							<li>Typescript</li>
							<li>Node.js</li>
							<li>UI / UX</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>SASS</li>
							<li>JQuery</li>
							<li>Git / GitHub</li>
							<li>Figma / Zeplin</li>                      
						</ul>
					</div>
				</article>
				{/* footer */}
				<FooterComponent />
			</motion.div>
		</>
    )
}

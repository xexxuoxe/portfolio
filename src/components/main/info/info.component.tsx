/*
	Info component
	src/component/main/info/info.component.tsx
*/
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import FooterComponent from '@components/sementic/footer.component'
import Loader from'@components/_utiles/loader/loader.component';
import styles from './info.module.scss';
import 'swiper/css/effect-fade';
import 'swiper/css';


export default function InfoItemPage() {

	const [isLoaderDone, setIsLoaderDone] = useState<boolean>(false);
	const [showContent, setShowContent] = useState<boolean>(false);
	const [animating, setAnimating] = useState<boolean>(false);

	// loader
	const handleLoaderComplete = (): void => {
		setIsLoaderDone(true);
	  	setShowContent(true);
	}
	// slide
	const handleSlideChange = () => {
		setAnimating(true);
	
		setTimeout(() => {
		  	setAnimating(false);
		}, 6000);
	};

	//slide list array
	const logos = [
		{
			index: "1",
			options: [
				{ img: "/images/ico_css.png", title: "css logo"},
				{ img: "/images/ico_figma.png", title: "figma logo"},
				{ img: "/images/ico_git.png", title: "git logo"},
				{ img: "/images/ico_github.png", title: "github logo"},
				{ img: "/images/ico_html.png", title: "html logo"},
				{ img: "/images/ico_javascript.png", title: "javascript logo"},
			],
		},
		{
			index: "2",
			options: [
				{ img: "/images/ico_node.png", title: "node logo"},
				{ img: "/images/ico_zeplin.png", title: "zeplin logo"},
				{ img: "/images/ico_react.png", title: "react logo"},
				{ img: "/images/ico_sass.png", title: "sass logo"},
				{ img: "/images/ico_typescript.png", title: "typescript logo"},
				{ img: "/images/ico_jquery.png", title: "jquery logo"},
			],
		},
	];
	
	// work link
	const texts = (
		<div className={styles.text_list}>
			<span>Let's work together</span>
			<svg fill="transparent" height="72" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg">
				<path d="M33.8992 45.6573C33.8992 44.8613 33.4314 44.1417 32.7067 43.8201C31.9812 43.4984 31.1357 43.636 30.5496 44.1716C23.2788 50.8129 6.70007 65.9535 6.70007 65.9535C5.52786 67.0247 3.83602 67.3 2.38576 66.6566C0.935497 66.0148 0 64.5741 0 62.9837V8.0167C0 6.42634 0.935497 4.98559 2.38576 4.34226C3.83602 3.70043 5.52786 3.97572 6.70007 5.04693C6.70007 5.04693 23.2788 20.1875 30.5496 26.8288C31.1357 27.3644 31.9812 27.502 32.7067 27.1803C33.4314 26.8587 33.8992 26.1391 33.8992 25.3431C33.8992 18.9353 33.8992 8.0167 33.8992 8.0167C33.8992 6.42634 34.8347 4.98559 36.2849 4.34226C37.7352 3.70043 39.427 3.97572 40.6001 5.04693L70.6916 32.5304C71.5249 33.2919 72 34.3691 72 35.5002C72 36.6313 71.5249 37.7085 70.6916 38.47L40.6001 65.9535C39.427 67.0247 37.7352 67.3 36.2849 66.6566C34.8347 66.0148 33.8992 64.5741 33.8992 62.9837C33.8992 62.9837 33.8992 52.0651 33.8992 45.6573Z" fill="#fc6454" stroke-width="0">
				</path>
			</svg>
		</div>
	)

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
				{/* slider */}
				<div className={styles.info_slide}>
					<Swiper
						className={styles.skill_swiper}
						modules={[ Autoplay, EffectFade ]}
						effect={"fade"}
						fadeEffect= {{crossFade: true}}
						loop={true}
						speed={1000}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
						}}
						slidesPerView={1}
						onSlideChange={handleSlideChange}
					>
						{logos.map((slide, index) => (
							<SwiperSlide key={index} className={styles.swiper_slide}>
								{slide.options.map((list, idx) => (
									<div 
										className={`${styles.slide_wrapper}`} key={idx}
									>
										<Image
											className={animating ? styles.fadeIn : ''}
											src={list.img}
											width={100}
											height={100}
											alt={list.title || 'Logo'}
											style={{ animationDelay: `${idx * 0.2}s` }}
										/>
									</div>
								))}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
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
				{/* work button */}
				<div className={styles.info_work}>
					<div className={styles.link_container}>
						<Link href="/work">
							{[...Array(6)].map((idx) => (
								<div key={idx}>{texts}</div>
							))}
						</Link>
					</div>
				</div>
				{/* footer */}
				<FooterComponent />
			</motion.div>
		</>
    )
}

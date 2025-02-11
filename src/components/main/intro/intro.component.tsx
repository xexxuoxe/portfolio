/*
	intro component
	src/component/main/intro/intro.component.tsx
*/
'use client'
import gsap from "gsap";
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import styles from './intro.module.scss';

export default function IntroItemPage() {
	
	const followRef = useRef<HTMLDivElement | null>(null);
	const contentRefs = useRef<HTMLDivElement | null>([]);
	const loaderRef = useRef<HTMLDivElement | null>(null);

	useGSAP (() => {
		// 마우스 이동 이벤트
		const handleMouseMove = (e : MouseEvent) => {
			gsap.to( followRef.current, {
				left: e.pageX - 32,
				top: e.pageY - 32,
				duration : 0.3
			})
		};
		
		document.addEventListener( 'mousemove' , handleMouseMove );

		// 초기 세팅
		gsap.set([ contentRefs.current[1], contentRefs.current[2], loaderRef.current], {
			display: 'none',
			opacity: 0
		});

		return () => document.removeEventListener('mousemove', handleMouseMove);
	}, []);
	
	// timeline 출력
	const handleIndexEffect = () => {
		const timeline = gsap.timeline();
	
		const steps = [
			{ target: contentRefs.current[0], props: { opacity: 0, display: 'none' }, duration: 0.6 },
			{ target: contentRefs.current[1], props: { opacity: 1, display: 'block' }, duration: 1 },
			{ target: contentRefs.current[1], props: { opacity: 0, display: 'none' }, duration: 0.6 },
			{ target: contentRefs.current[2], props: { opacity: 1, display: 'block' }, duration: 1 },
			{ target: loaderRef.current, props: { opacity: 1, display: 'block', top: '0' }, duration: 0.6 },
			{ target: contentRefs.current[2], props: { opacity: 0, display: 'none' }, duration: 0 },
			{ target: loaderRef.current, props: { opacity: 1, display: 'none', top: '-100%' }, duration: 0.6 },
		];
	
		steps.forEach(step => {
			timeline.to(step.target, { ...step.props, duration: step.duration });
		});
	};

	// HTML
	return (
		<>
			<div className={styles.main_view} onClick={handleIndexEffect}>
				<div className={styles.intro_txt}>
					<div ref={ (el) => el && (contentRefs.current[0] = el) } className={`${styles.intro_content} ${styles.intro_content01}`}>
						<h1 className={styles.title}>Portfolio</h1>
					</div>
					<div ref={ (el) => el && (contentRefs.current[1] = el) } className={`${styles.intro_content} ${styles.intro_content02}`}>
						<h1 className={styles.title}>Lee Eun Seo</h1>
					</div>
					<div ref={(el) => el && (contentRefs.current[2] = el) } className={`${styles.intro_content} ${styles.intro_content03}`}>
						<h1 className={styles.title}>Projects</h1>
					</div>
				</div>
				<div className={styles.follow} ref={followRef} />
			</div>
			<div className={styles.loader_window} ref={loaderRef}></div>
		</>
    )
}

'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface AnimationStep {
	target: HTMLDivElement | null;
	props: gsap.TweenVars;
	duration: number;
}

export function useIntroAnimation() {
	const followRef = useRef<HTMLDivElement | null>(null);
	const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
	const loaderRef = useRef<HTMLDivElement | null>(null);
	const mainViewRef = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		
		const handleMouseMove = (e: MouseEvent) => {
			if (followRef.current) {
				gsap.to(followRef.current, {
					left: e.pageX - 32,
					top: e.pageY - 32,
					duration: 0.3,
				});
			}
		};

		document.addEventListener('mousemove', handleMouseMove);

		gsap.set([contentRefs.current[1], contentRefs.current[2], loaderRef.current], {
			display: 'none',
			opacity: 0,
		});

		return () => document.removeEventListener('mousemove', handleMouseMove);
	}, []);

	// animation
	const handleIndexEffect = () => {
		const timeline = gsap.timeline();

		const steps: AnimationStep[] = [
			{
				target: contentRefs.current[0],
				props: { opacity: 0, display: 'none' },
				duration: 0.6
			},
			{
				target: contentRefs.current[1],
				props: { opacity: 1, display: 'block' },
				duration: 1
			},
			{
				target: contentRefs.current[1],
				props: { opacity: 0, display: 'none' },
				duration: 0.6
			},
			{
				target: contentRefs.current[2],
				props: { opacity: 1, display: 'block' },
				duration: 1
			},
			{
				target: loaderRef.current,
				props: { opacity: 1, display: 'block', top: '0' },
				duration: 0.6
			},
			{
				target: contentRefs.current[2],
				props: { opacity: 0, display: 'none' },
				duration: 0
			},
			{
				target: mainViewRef.current,
				props: { opacity: 0, display: 'none' },
				duration: 0
			},
			{
				target: loaderRef.current,
				props: { opacity: 1, display: 'none', top: '-100vh' },
				duration: 0.6
			}
		];

		steps.forEach((step) => {
			if (step.target) {
				timeline.to(step.target, {
					...step.props,
					duration: step.duration
				});
			}
		});
	};

	return {
		followRef,
		contentRefs,
		loaderRef,
		mainViewRef,
		handleIndexEffect
	};
}
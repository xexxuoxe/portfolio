/*
	loader component
	src/component/_utiles/loader/loader.component.tsx
*/

import React, { useEffect, useRef } from "react";
import styles from "./loader.module.scss";

const Loader = ({ className, variant, onComplete }: {  		
	className: string; 		
	variant: keyof typeof styles;  		
	onComplete: () => void }) => {
		 
	const loaderRef = useRef<HTMLDivElement | null>(null);
  
	useEffect(() => {
		const loader = loaderRef.current;
	  
		if (loader) {
			// 초기 상태 설정
			loader.style.opacity = "0"; 
			loader.style.height = "100%"; 
			loader.style.transition = "top 2s ease";
		
			// 브라우저가 초기 상태를 렌더링하도록 강제
			setTimeout(() => {
				loader.style.opacity = "1";
				loader.style.top = "0";
			}, 50);
		}
	  }, [onComplete]);
	
	return (
		<div
			ref={loaderRef}
			className={`${styles[variant]} ${className}`}
		></div>
	);
};

export default Loader;
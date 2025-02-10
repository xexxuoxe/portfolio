/*
	loader component
	src/component/_utiles/loader/loader.component.tsx
*/
import { motion } from 'framer-motion';
import styles from "./loader.module.scss";


const Loader = ({ className, variant, onComplete }: {  		
		className: string; 		
		variant: keyof typeof styles;  		
		onComplete: () => void 
	}) => {
		 
	return (
		<motion.div
			className={`${styles[variant]} ${className}`}
			initial={{ 
				display: "none",  
				y: "100%" 
			}}
			animate={{
				display: "block", 
				y: 0,
				transition: {
					duration: .4,
					ease: "easeOut"
				}
			}}
			onAnimationComplete={onComplete}
		/>
	);
};

export default Loader;
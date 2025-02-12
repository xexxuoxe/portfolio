/*
	fadeIn Motion component
	src/component/_utiles/parallax/fadeInMotion.component.tsx
*/
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInMotion = ({ children, delay = 0, initialX = 100, initialY = 100, initialClip = 0}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY}} 
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : initialX,
        y: inView ? 0 : initialY, 
      }}
      transition={{
        delay: delay,
        duration: 0.6,
        ease: "easeOut", 
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInMotion;
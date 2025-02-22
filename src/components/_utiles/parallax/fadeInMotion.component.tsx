import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react'; // Add this import

interface FadeInMotionProps {
  children: ReactNode;
  delay?: number;
  initialX?: number;
  initialY?: number;
  initialClip?: number;
}

const FadeInMotion = ({
  children,
  delay = 0,
  initialX = 100,
  initialY = 100,
  initialClip = 0
}: FadeInMotionProps) => {
  const { ref, inView } = useInView({
    //triggerOnce: true,
    threshold: 0,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
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
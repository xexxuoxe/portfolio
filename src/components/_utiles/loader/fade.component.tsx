// src/component/_utiles/loader/loader.component.tsx
import { motion } from 'framer-motion';
import styles from "./loader.module.scss";

const Loader = ({
  className,
  variant,
  onComplete,
}: {
  className: string;
  variant: keyof typeof styles;
  onComplete: () => void;
}) => {
  return (
    <motion.div
      className={`${styles[variant]} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: [1, 0] }}
      transition={{
        duration: 2, 
        times: [0, 1], 
        ease: "easeInOut",
      }}
      onAnimationComplete={onComplete}
    />
  );
};

export default Loader;

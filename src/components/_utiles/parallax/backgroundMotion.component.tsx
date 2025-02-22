/*
	backgroun Motion component
	src/component/_utiles/parallax/backgrounMotion.component.tsx
*/
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface BackgroundMotionProps {
  children: React.ReactNode;
  onInView: (inView: boolean) => void;
}

const BackgroundMotion = ({ children, onInView }: BackgroundMotionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    onInView(inView);
  }, [inView, onInView]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default BackgroundMotion;
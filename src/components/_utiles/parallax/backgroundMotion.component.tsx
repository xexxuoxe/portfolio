/*
	backgroun Motion component
	src/component/_utiles/parallax/backgrounMotion.component.tsx
*/
import { useInView } from 'react-intersection-observer';

const backgroundMotion = ({ children , onInView }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  onInView(inView);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default backgroundMotion;
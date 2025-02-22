'use client';

import { useEffect, useRef, FC } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<any>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // 동적 임포트
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current!,
        smooth: true,
        multiplier: 1,
        lerp: 0.1
      });
    })();

    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
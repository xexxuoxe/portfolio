// lib/scroll/smooth.componen.tsx
'use client';

import { useEffect, useRef, FC } from 'react';
import Scrollbar from 'smooth-scrollbar';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollbarInstance = useRef<Scrollbar | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollbarInstance.current = Scrollbar.init(scrollRef.current, {
        damping: 0.1,
        thumbMinSize: 20,
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true
      });
    }

    return () => {
      if (scrollbarInstance.current) {
        scrollbarInstance.current.destroy();
        scrollbarInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={scrollRef} style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SmoothScroll;
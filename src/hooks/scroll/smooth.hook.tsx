// hooks/smooth.hook.ts
'use client';

import { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      Scrollbar.init(scrollRef.current, {
        damping: 0.1,
        thumbMinSize: 20,
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true
      });

      return () => {
        if (scrollRef.current) {
          Scrollbar.destroy(scrollRef.current);
        }
      };
    }
  }, []);

  return (
    <div ref={scrollRef} style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SmoothScroll;
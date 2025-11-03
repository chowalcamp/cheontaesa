'use client';

import { useState, useEffect, useRef } from 'react';

interface UseScrollReturn {
  scrollY: number;
  isScrolled: boolean;
  isVisible: boolean;
}

export function useScroll(threshold: number = 100): UseScrollReturn {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.pageYOffset;
          setScrollY(currentScroll);
          setIsScrolled(currentScroll > threshold);
          setIsVisible(currentScroll > 300);
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 초기 상태 설정
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { scrollY, isScrolled, isVisible };
}


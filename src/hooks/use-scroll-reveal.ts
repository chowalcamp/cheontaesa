'use client';

import { useState, useEffect, RefObject } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal(
  ref: RefObject<HTMLElement>,
  options: UseScrollRevealOptions = {}
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -100px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options.threshold, options.rootMargin]);

  return isVisible;
}


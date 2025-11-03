'use client';

import { useScroll } from '@/hooks';

export function ScrollToTop() {
  const { isVisible } = useScroll();

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 right-8 bg-amber-700 hover:bg-amber-800 text-white w-12 h-12 rounded-full shadow-lg transition-opacity duration-300 z-40 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="상단으로 스크롤"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}


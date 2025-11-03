'use client';

import { useState, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function useNavigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    // 홈 페이지가 아니면 홈으로 이동 후 스크롤
    if (pathname !== '/') {
      router.push(`/${sectionId}`);
      closeMobileMenu();
      return;
    }

    // 홈 페이지에서는 스크롤
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(sectionId.replace('#', ''));
      closeMobileMenu();
    }
  }, [pathname, router, closeMobileMenu]);

  return {
    activeSection,
    setActiveSection,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    scrollToSection,
    isHomePage: pathname === '/',
  };
}


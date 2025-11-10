'use client';

import Link from 'next/link';
import { useNavigation, useScroll } from '@/hooks';

const navItems = [
  { href: '#home', label: '홈' },
  { href: '#about', label: '소개' },
  { href: '#services', label: '서비스' },
  { href: '#gallery', label: '갤러리' },
  { href: '#blog', label: '소식' },
  { href: '#contact', label: '오시는 길' },
];

export function Navbar() {
  const { activeSection, isMobileMenuOpen, toggleMobileMenu, scrollToSection, isHomePage } = useNavigation();
  const { isScrolled } = useScroll();

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/98 backdrop-blur-sm shadow-sm' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
      role="navigation"
      aria-label="메인 네비게이션"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            {isHomePage ? (
              <button
                onClick={() => scrollToSection('#home')}
                className="text-2xl font-bold text-gray-900 font-serif tracking-wider hover:text-amber-700 transition-colors"
                aria-label="천태사 홈으로 이동"
              >
                천태사
              </button>
            ) : (
              <Link
                href="/"
                className="text-2xl font-bold text-gray-900 font-serif tracking-wider hover:text-amber-700 transition-colors"
                aria-label="천태사 홈으로 이동"
              >
                천태사
              </Link>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8" role="menubar">
            {navItems.map((item) =>
              isHomePage ? (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link text-gray-700 hover:text-amber-700 transition-colors duration-300 ${
                    activeSection === item.href.replace('#', '') ? 'active' : ''
                  }`}
                  role="menuitem"
                  aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                  aria-label={`${item.label} 섹션으로 이동`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  href={`/${item.href}`}
                  className="nav-link text-gray-700 hover:text-amber-700 transition-colors duration-300"
                  role="menuitem"
                  aria-label={`${item.label} 페이지로 이동`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-lg p-2"
              aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200"
          role="menu"
          aria-label="모바일 메뉴"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-2 pb-4 space-y-2">
              {navItems.map((item) =>
                isHomePage ? (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                    role="menuitem"
                    aria-label={`${item.label} 섹션으로 이동`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={`/${item.href}`}
                    className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                    role="menuitem"
                    aria-label={`${item.label} 페이지로 이동`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


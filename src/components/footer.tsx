'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-2xl font-bold font-serif mb-4">천태사</h3>
            <p className="text-gray-400 mb-4">마음의 평화를 찾는 곳</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="Kakao"
              >
                <i className="fab fa-kakao text-2xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-amber-500 transition-colors">
                  소개
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  서비스 안내
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-500 transition-colors">
                  갤러리
                </a>
              </li>
              <li>
                <Link href="/news" className="hover:text-amber-500 transition-colors">
                  소식
                </Link>
              </li>
              <li>
                <Link href="/notice" className="hover:text-amber-500 transition-colors">
                  공지사항
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition-colors">
                  오시는 길
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <i className="fas fa-map-marker-alt mr-2 text-amber-700"></i>
                경기 광주시 초월읍 도평길 241-2
              </li>
              <li>
                <a href="tel:0507-1366-8392" className="hover:text-amber-500 transition-colors">
                  <i className="fas fa-phone mr-2 text-amber-700"></i>
                  0507-1366-8392
                </a>

              </li>
              <li>
                <i className="fas fa-clock mr-2 text-amber-700"></i>
                09:00 ~ 17:00 (점심 11:30~12:30)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} CHEONTAESA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}


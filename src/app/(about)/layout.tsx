"use client"

import React from "react";
import Link from "next/link";
import SwiperComponent from "../../component/aboutLayoutHeader/slideComponet";
import { usePathname } from "next/navigation";
import "@/styles/about/layout.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "공지사항", path: "/notice" },
    { name: "주요소식", path: "/news" },
  ];

  return (
    <div className="about-layout">
      {/* 상단베너레이아웃 */}
      <SwiperComponent />

      {/* 메뉴 */}
      <nav className="about-nav">
        {/* PC 메뉴 */}
        <ul className="about-nav-pc">
          {menuItems.map((item) => (
            <li key={item.path} className="about-nav-item">
              <Link
                href={item.path}
                className={`about-nav-link ${
                  pathname === item.path ? 'about-nav-link-active' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 메뉴 */}
        <div className="about-nav-mobile">
          <ul className="about-nav-mobile-list">
            {menuItems.map((item) => (
              <li key={item.path} className="about-nav-mobile-item">
                <Link
                  href={item.path}
                  className={`about-nav-mobile-link ${
                    pathname === item.path ? 'about-nav-mobile-link-active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 페이지 제목 및 설명 */}
      <header className="about-header">
        {pathname === '/notice' ? (
          <>
            <h1 className="about-title">
              공지사항
            </h1>
            <p className="about-description">
              천태사의 다양한 공지사항을 전해드립니다.
            </p>
          </>
        ) : pathname === '/news' ? (
          <>
            <h1 className="about-title">
              주요소식
            </h1>
            <p className="about-description">
              천태사의 다양한 소식을 전해드립니다.
            </p>
          </>
        ) : null}
      </header>

      {/* 메인 콘텐츠 */}
      <main className="about-main">{children}</main>
    </div>
  );
}
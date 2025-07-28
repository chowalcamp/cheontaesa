"use client";

import React from "react";
import Link from "next/link";
import SwiperComponent from "../../component/aboutLayoutHeader/slideComponet";
import { usePathname } from "next/navigation";
import "@/styles/event/layout.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "정기법회", path: "/regular" },
    { name: "주요행사", path: "/event" },
  ];

  return (
    <div className="event-layout">
      {/* 상단베너레이아웃 */}
      <SwiperComponent />

      {/* 메뉴 */}
      <nav className="event-nav">
        {/* PC 메뉴 */}
        <ul className="event-nav-pc">
          {menuItems.map((item) => (
            <li key={item.path} className="event-nav-item">
              <Link
                href={item.path}
                className={`event-nav-link ${
                  pathname === item.path ? 'event-nav-link-active' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 메뉴 */}
        <div className="event-nav-mobile">
          <ul className="event-nav-mobile-list">
            {menuItems.map((item) => (
              <li key={item.path} className="event-nav-mobile-item">
                <Link
                  href={item.path}
                  className={`event-nav-mobile-link ${
                    pathname === item.path ? 'event-nav-mobile-link-active' : ''
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
      <header className="event-header">
        {pathname === '/event' ? (
          <>
            <h1 className="event-title">
              주요행사
            </h1>
            <p className="event-description">
              천태사의 다양한 행사 소식을 전해드립니다. 함께 참여하여 마음의 평안을 찾으세요.
            </p>
          </>
        ) : pathname === '/regular' ? (
          <>
            <h1 className="event-title">
              정기법회
            </h1>
            <p className="event-description">
              천태사의 다양한 뉴스를 전해드립니다.
            </p>
          </>
        ) : null}
      </header>

      {/* 메인 콘텐츠 */}
      <main className="event-main">{children}</main>
    </div>
  );
}
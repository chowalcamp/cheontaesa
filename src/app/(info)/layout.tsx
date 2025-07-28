"use client";

import React from "react";
import Link from "next/link";
import SwiperComponent from "../../component/aboutLayoutHeader/slideComponet";
import { usePathname } from "next/navigation";
import "@/styles/info/layout.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "주지스님인사말", path: "/salutation" },
    { name: "사찰안내", path: "/info" },
    { name: "오시는길", path: "/directions" },
  ];

  return (
    <div className="info-layout">
      {/* 상단베너레이아웃 */}
      <SwiperComponent />

      {/* 메뉴 */}
      <nav className="info-nav">
        {/* PC 메뉴 */}
        <ul className="info-nav-pc">
          {menuItems.map((item) => (
            <li key={item.path} className="info-nav-item">
              <Link
                href={item.path}
                className={`info-nav-link ${
                  pathname === item.path ? 'info-nav-link-active' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 메뉴 */}
        <div className="info-nav-mobile">
          <ul className="info-nav-mobile-list">
            {menuItems.map((item) => (
              <li key={item.path} className="info-nav-mobile-item">
                <Link
                  href={item.path}
                  className={`info-nav-mobile-link ${
                    pathname === item.path ? 'info-nav-mobile-link-active' : ''
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
      <header className="info-header">
        {pathname === '/salutation' ? (
          <>
            <h1 className="info-title">
              주지스님인사말
            </h1>
            <p className="info-description">
              천태사의 주지스님 인사말을 전해드립니다.
            </p>
          </>
        ) : pathname === '/directions' ? (
          <>
            <h1 className="info-title">
              오시는길
            </h1>
            <p className="info-description">
              천태사의 오시는길을 전해드립니다.
            </p>
          </>
        ) : pathname === '/info' ? (
          <>
            <h1 className="info-title">
              사찰안내
            </h1>
            <p className="info-description">
              천태사의 사찰안내입니다.
            </p>
          </>
        ) : null}
      </header>

      {/* 메인 콘텐츠 */}
      <main className="info-main">{children}</main>
    </div>
  );
}
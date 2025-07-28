"use client";

import React from "react";
import Link from "next/link";
import SwiperComponent from "../../component/aboutLayoutHeader/slideComponet";
import { usePathname } from "next/navigation";
import "@/styles/pray/layout.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "특별 기도", path: "/pray" },
    { name: "재(齋)제사(祭祀)", path: "/sacrifice" },
    { name: "공양", path: "/offering" },
  ];

  return (
    <div className="pray-layout">
      {/* 상단베너레이아웃 */}
      <SwiperComponent />

      {/* 메뉴 */}
      <nav className="pray-nav">
        {/* PC 메뉴 */}
        <ul className="pray-nav-pc">
          {menuItems.map((item) => (
            <li key={item.path} className="pray-nav-item">
              <Link
                href={item.path}
                className={`pray-nav-link ${
                  pathname === item.path ? 'pray-nav-link-active' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 메뉴 */}
        <div className="pray-nav-mobile">
          <ul className="pray-nav-mobile-list">
            {menuItems.map((item) => (
              <li key={item.path} className="pray-nav-mobile-item">
                <Link
                  href={item.path}
                  className={`pray-nav-mobile-link ${
                    pathname === item.path ? 'pray-nav-mobile-link-active' : ''
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
      <header className="pray-header">
        {pathname === '/pray' ? (
          <>
            <h1 className="pray-title">
              특별 기도
            </h1>
            <p className="pray-description">
              천태사의 기도 함께 참여하여 마음의 평안을 찾으세요.
            </p>
          </>
        ) : pathname === '/sacrifice' ? (
          <>
            <h1 className="pray-title">
              재(齋)제사(祭祀)
            </h1>
            <p className="pray-description">
              제 밑 제사 공양.
            </p>
          </>
        ) : pathname === '/offering' ? (
          <>
            <h1 className="pray-title">
              공양
            </h1>
            <p className="pray-description">
              불교에서 공양(供養)은 시주할 물건을 올리는 의식을 의미합니다.
            </p>
          </>
        ) : null}
      </header>

      {/* 메인 콘텐츠 */}
      <main className="pray-main">{children}</main>
    </div>
  );
}
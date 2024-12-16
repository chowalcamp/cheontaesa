"use client";

import React from "react";
import Link from "next/link";
import SwiperComponent from "../../component/aboutLayoutHeader/sideComponet";
import { usePathname } from "next/navigation"; // 경로 가져오기

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // 현재 경로 가져오기

  const menuItems = [
    { name: "기도", path: "/pray" },
    { name: "불공", path: "/sacrifice" },
  ];

  return (
    <div className="w-full">
      {/* 상단베너레이아웃 */}
      <SwiperComponent />

      {/* 메뉴 */}
      <nav className="w-full bg-white shadow-md">
        {/* PC 메뉴 */}
        <ul className="hidden md:flex justify-center space-x-8 py-4 text-gray-700">
          {menuItems.map((item) => (
            <li key={item.path} className="relative">
              <Link
                href={item.path}
                className={`text-lg font-medium ${
                  pathname === item.path
                    ? "text-black after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 메뉴 */}
        <div className="block md:hidden">
          <ul className="grid grid-cols-2 border-t">
            {menuItems.map((item) => (
              <li key={item.path} className="text-center">
                <Link
                  href={item.path}
                  className={`block py-3 font-medium text-lg ${
                    pathname === item.path
                      ? "bg-[#634239] text-white"
                      : "bg-white text-gray-700"
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
      <header className="text-center mt-12">
        {pathname === '/pray' ? (
          <>
            <h1 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "NanumMyeongjo" }}>
              기도
            </h1>
            <p className="text-gray-600 text-lg">
              천태사의 기도 함께 참여하여 마음의 평안을 찾으세요.
            </p>
          </>
        ) : pathname === '/sacrifice' ? (
          <>
            <h1 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "NanumMyeongjo" }}>
              불공
            </h1>
            <p className="text-gray-600 text-lg">
              제 밑 제사 공양.
            </p>
          </>
        ) : null}
      </header>

      {/* 메인 콘텐츠 */}
      <main className="mt-4">{children}</main>
    </div>
  );
}

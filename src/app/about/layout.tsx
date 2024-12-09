"use client"

import React from "react";
import Link from "next/link";
import SwiperComponent from "../../component/aboutLayoutHeader/sideComponet";
import { usePathname } from "next/navigation"; // 경로 가져오기

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // 현재 경로 가져오기

  const menuItems = [
    { name: "공지사항", path: "/about/notice" },
    { name: "주요소식", path: "/about/news" },
    { name: "일정안내", path: "/about/todo" },
  ];

  return (
    <div className="w-full">
    {/* 상단베너레이아웃 */}
    <SwiperComponent />
    <nav className="w-full bg-white shadow-md">
        <ul className="flex justify-center space-x-8 py-4 text-gray-700">
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
    </nav>
    {/* 메인 콘텐츠 */}
    <main className="mt-4">{children}</main>
    </div>
);
}

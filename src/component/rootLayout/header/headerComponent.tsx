"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderComponent = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    {
      name: "천태사 소개",
      submenu: ["주지스님 인사말", "전각 안내", "오시는 길"],
    },
    { name: "기도·불공", submenu: ["기도 안내", "불공 프로그램"] },
    { name: "법회·행사", submenu: ["정기 법회", "행사 일정"] },
    {
      name: "천태사 소식",
      submenu: [
        { title: "공지사항", link: "/about/notice" },
        { title: "주요소식", link: "/about/news" },
      ],
    },
  ];

  const handleMenuClick = (menuName: string) => {
    setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
      <nav className="w-full ">
        <div className="flex items-center justify-between max-w-6xl mx-auto py-4">
          {/* 로고 */}
          <div className="text-lg font-bold">
            <Link href="/" className="text-black text-2xl">
              <Image src="/images/logo.png" width={200} height={100} alt="천태사 로고" />
            </Link>
          </div>

          {/* 메뉴 */}
          <ul className="flex items-center space-x-8 mr-40">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <button
                  className={`text-base font-medium ${
                    activeMenu === item.name ? "text-gray-800" : "text-gray-600"
                  } hover:text-black`}
                  onClick={() => handleMenuClick(item.name)}
                >
                  {item.name}
                </button>
                {activeMenu === item.name && item.submenu && (
                  <ul
                    className="absolute left-0 bg-white text-black shadow-lg mt-2"
                    onMouseLeave={() => setActiveMenu(null)} // 서브메뉴 밖으로 나가면 닫힘
                    style={{ zIndex: 50 }} // z-index 설정
                  >
                    {item.submenu.map((submenuItem, subIdx) => (
                      <li
                        key={subIdx}
                        className="px-4 py-4 w-32 hover:bg-gray-100 text-sm border-b"
                      >
                        {typeof submenuItem === "string" ? (
                          <Link href={`/${submenuItem}`} className="block text-ellipsis overflow-hidden whitespace-normal">
                            {submenuItem}
                          </Link>
                        ) : (
                          <Link href={submenuItem.link} className="block text-ellipsis overflow-hidden whitespace-normal">
                            {submenuItem.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* 유틸리티 버튼 */}
          <div className="flex items-center space-x-4 mr-10">
            <button className="hover:text-gray-500">
              <i className="fas fa-user"></i>
              로그인
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
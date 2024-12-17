"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderComponent = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    {
      name: "천태사 소개",
      submenu: [
        { title: "주지스님인사말", link: "/salutation" },
        { title: "전각 안내", link: "/info" },
        { title: "오시는 길", link: "/directions" },
      ],
    },
    { name: "기도·불공", 
      submenu: [
        { title: "특별 기도", link: "/pray" },
        { title: "재(齋)제사(祭祀)", link: "/sacrifice" },
        { title: "공양", link: "/offering" },
      ] 
    },
    {
      name: "법회·행사",
      submenu: [
        { title: "정기 법회", link: "/regular" },
        { title: "행사 일정", link: "/event" },
      ],
    },
    {
      name: "천태사 소식",
      submenu: [
        { title: "공지사항", link: "/notice" },
        { title: "주요소식", link: "/news" },
      ],
    },
  ];

  const handleMenuClick = (menuName: string) => {
    setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  return (
    <header
      className={`bg-transparent ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
      style={{
        fontFamily: "NanumMyeongjo",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "50",
      }}
    >
      <nav className="w-full">
        <div className="flex items-center justify-between max-w-6xl mx-auto py-4">
          {/* 로고 */}
          <div className="text-lg font-bold">
            <Link href="/" className="text-black text-2xl">
              <Image
                src={isScrolled ? "/images/logo.png" : "/images/logoWhite.png"}
                width={200}
                height={100}
                alt="천태사 로고"
              />
            </Link>
          </div>

          {/* 메뉴 */}
          <ul
            className="flex items-center space-x-8"
            style={{ marginRight: "4.5rem" }}
            onMouseLeave={() => setActiveMenu(null)} // 메뉴 영역 벗어났을 때 전체 닫기
          >
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <button
                  className="text-base font-medium py-2"
                  style={{
                    color: isScrolled ? "#965745" : "white",
                    fontSize: "1.3rem",
                    fontFamily: "NanumMyeongjo",
                    fontWeight: "500",
                  }}
                  onMouseEnter={() => handleMenuClick(item.name)}
                >
                  {item.name}
                </button>
                {activeMenu === item.name && item.submenu && (
              <ul
                className="absolute left-0 bg-white text-black shadow-lg"
                style={{
                  minWidth: "130px",
                  zIndex: "50",
                }}
              >
                  {item.submenu.map((submenuItem, subIdx) => (
                  <li
                    key={subIdx}
                    className="px-4 py-4 text-sm border-b"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#634239"; // 호버 시 배경색 변경
                      e.currentTarget.style.color = "#FFFFFF"; // 호버 시 폰트 색상 변경
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"; // 원래 배경색으로 복원
                      e.currentTarget.style.color = "black"; // 원래 폰트 색상으로 복원
                    }}
                  >
                    {typeof submenuItem === "string" ? (
                      <Link
                        href={`/${submenuItem}`}
                        className="block text-ellipsis overflow-hidden whitespace-nowrap"
                      >
                        {submenuItem}
                      </Link>
                    ) : (
                      <Link
                        href={submenuItem.link}
                        className="block text-ellipsis overflow-hidden whitespace-nowrap"
                      >
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
            <button
              className="hover:text-gray-500"
              style={{
                color: isScrolled ? "#965745" : "white",
              }}
            >
              <Link href="/login">
              로그인
            </Link>
            </button>
            <button
              className="hover:text-gray-500"
              style={{ color: isScrolled ? "#965745" : "white" }}
            >
              회원가입
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;

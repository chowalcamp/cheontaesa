"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
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

  const menu1Items = [
    { name: ["천태사 소개"], 
      submenu: [
        { title: "주지스님 인사말", link: "/salutation" },
        { title: "전각 안내", link: "/info" },
        { title: "오시는 길", link: "/directions" },
      ] 
    },
    { name: "기도·불공", 
      submenu: [
        { title: "기도 안내", link: "/pray" },
        { title: "불공 프로그램", link: "/sacrifice" },
      ] 
    },
    { name: "법회·행사", 
        link: "/regular", 
        submenu: [
            { title: "정기 법회", link: "/regular" },
            { title: "행사 일정", link: "/event" },
        ] },
    {
      name: "천태사 소식",
      link: "/news",
      submenu: [
        { title: "공지사항", link: "/notice" },
        { title: "주요소식", link: "/news" },
      ],
    },
    { name: "로그인", submenu: [{ title: "로그인", link: "/login" }] },
  ];

  const menu2Items = [
    { name: ["천태사 소개"] },
    { name: "기도·불공" },
    { name: "법회·행사", link: "/regular" },
    { name: "천태사 소식", link: "/news" },
  ];

  const toggleSubmenu = (menuName: string) => {
    setActiveSubmenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <div
      className={`w-full bg-transparent ${
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
      {/* 상단 헤더 */}
      <div className="flex items-center justify-between px-6 py-4 border-b shadow-lg">
        {/* 로고 */}
        <Link href="/">
          <Image src="/images/logo.png" width={100} height={40} alt="천태사 로고" />
        </Link>
        {/* 햄버거 메뉴 버튼 */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-3xl text-gray-800"
          style={{ marginBottom: "4px", color: isScrolled ? "black" : "white" }}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 슬라이드 메뉴 */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            height: "100%",
            backgroundColor: "#ffffff",
            width: "20rem", // w-80 == 20rem
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // shadow-lg
            transform: isMenuOpen ? "translateX(0)" : "translateX(100%)", // translate-x-full / translate-x-0
            transition: "transform 0.3s ease-in-out", // transition-transform duration-300 ease-in-out
            zIndex: "50",
          }}
        >
          {/* 메뉴 헤더 */}
          <div className="flex justify-between items-center px-6 py-4 border-b shadow-md">
            <h2 className="text-lg font-semibold">메뉴</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-gray-800"
            >
              ✕
            </button>
          </div>

          {/* 메뉴 리스트 */}
          <nav className="px-6 py-4 overflow-auto h-full">
            <ul className="space-y-4">
              {menu1Items.map((item, index) => (
                <li key={index}>
                  <div className="flex justify-between items-center">
                    <span
                      onClick={() => {
                        if (item.link) window.location.href = item.link;
                      }}
                      className="text-lg font-medium text-gray-800 cursor-pointer hover:text-black"
                    >
                      {Array.isArray(item.name) ? item.name[0] : item.name}
                    </span>
                    {item.submenu && (
                      <button
                        className="text-lg text-gray-500"
                        onClick={() => toggleSubmenu(item.name as string)}
                      >
                        {activeSubmenu === item.name ? <DownOutlined /> : <UpOutlined />}
                      </button>
                    )}
                  </div>
                  {item.submenu && activeSubmenu === item.name && (
                    <ul className="mt-2 space-y-2 pl-4">
                      {item.submenu.map((submenuItem, subIdx) => (
                        <li key={subIdx}>
                          {typeof submenuItem === "string" ? (
                            <Link
                              href={`/${submenuItem}`}
                              className="block text-gray-600 hover:text-black"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {submenuItem}
                            </Link>
                          ) : (
                            <Link
                              href={submenuItem.link}
                              className="block text-gray-600 hover:text-black"
                              onClick={() => setIsMenuOpen(false)}
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
          </nav>
        </div>
      )}

      {/* 메뉴 바 */}
      <nav
        className={`w-full bg-transparent ${
          isScrolled ? "bg-white" : "bg-transparent"
        } px-4 py-2 shadow-lg border-b`}
      >
        <ul className="flex flex-row justify-between items-center">
          {menu2Items.map((item, index) => (
            <li key={index}>
              <div className="flex flex-row justify-between items-center">
                <span
                  onClick={() => {
                    if (item.link) window.location.href = item.link;
                  }}
                  className="text-sm text-gray-800 cursor-pointer hover:text-black"
                  style={{
                    marginBottom: "4px",
                    color: isScrolled ? "black" : "white",
                  }}
                >
                  {item.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    const menuItems = [
    {
    name: "천태사 소개",
    submenu: ["주지스님 인사말", "전각 안내", "오시는 길"],
    },
    {
    name: "기도·불공",
    submenu: ["기도 안내", "불공 프로그램"],
    },
    {
    name: "법회·행사",
    submenu: ["정기 법회", "행사 일정"],
    },
    {
    name: "천태사 소식",
    submenu: [
        { title: "공지사항", link: "/about/notice" },
        { title: "주요소식", link: "/about/news" },
    ],
    },
    {
        name: "로그인",
        submenu: [{ title: "로그인", link: "/login" }],
    }
    ];

    const toggleSubmenu = (menuName: string) => {
        setActiveSubmenu((prev) => (prev === menuName ? null : menuName));
    };

    return (
    <div className="bg-#634239 fixed top-0 right-0 w-full h-full z-50">
        <div className="flex items-center justify-between px-6 py-4 border-b shadow-lg">
        {/* 로고 */}
        <Link href="/">
        <Image src="/images/logo.png" width={150} height={50} alt="천태사 로고" />
        </Link>

        {/* 닫기 버튼 */}
        <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="text-3xl text-gray-800"
        >
        {isMenuOpen ? "✕" : "☰"}
        </button>
        </div>

        {/* 메뉴 */}
        {isMenuOpen && (
        <nav className="bg-white h-full px-6 py-4 shadow-lg">
            <ul className="space-y-4">
            {menuItems.map((item, index) => (
            <li key={index}>
                <div className="flex justify-between items-center">
                <span
                    onClick={() => item.submenu && toggleSubmenu(item.name)}
                    className="text-lg text-gray-800 cursor-pointer hover:text-black"
                >
                    {item.name}
                </span>
                {item.submenu && (
                    <button
                    className="text-lg text-gray-500"
                    onClick={() => toggleSubmenu(item.name)}
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
        )}
    </div>
    );
};

export default MobileHeader;
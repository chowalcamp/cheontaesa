'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/styles/headerComponent.css'

const HeaderComponent = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuItems = [
    {
      name: '천태사 소개',
      submenu: [
        { title: '주지스님인사말', link: '/salutation' },
        { title: '전각 안내', link: '/info' },
        { title: '오시는 길', link: '/directions' },
      ],
    },
    {
      name: '기도·불공',
      submenu: [
        { title: '특별 기도', link: '/pray' },
        { title: '재(齋)제사(祭祀)', link: '/sacrifice' },
        { title: '공양', link: '/offering' },
      ],
    },
    {
      name: '법회·행사',
      submenu: [
        { title: '정기 법회', link: '/regular' },
        { title: '행사 일정', link: '/event' },
      ],
    },
    {
      name: '천태사 소식',
      submenu: [
        { title: '공지사항', link: '/notice' },
        { title: '주요소식', link: '/news' },
      ],
    },
  ]

  const handleMenuClick = (menuName: string) => {
    setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName))
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="header-nav">
        <div className="header-container">
          {/* 로고 */}
          <div className="header-logo">
            <Link href="/" className="logo-link">
              <Image
                src={
                  isScrolled
                    ? 'https://cheontaesa.s3.eu-north-1.amazonaws.com/images/logo.png'
                    : 'https://cheontaesa.s3.eu-north-1.amazonaws.com/images/logoWhite.png'
                }
                width={200}
                height={100}
                style={{ width: "150", height: "auto" }}
                alt="천태사 로고"
              />
            </Link>
          </div>

          {/* 메뉴 */}
          <ul
            className="header-menu"
            onMouseLeave={() => setActiveMenu(null)}
          >
            {menuItems.map((item) => (
              <li key={item.name} className="menu-item">
                <button
                  className={`menu-button ${isScrolled ? 'menu-button-scrolled' : ''}`}
                  onMouseEnter={() => handleMenuClick(item.name)}
                >
                  {item.name}
                </button>
                {activeMenu === item.name && item.submenu && (
                  <ul className="submenu">
                    {item.submenu.map((submenuItem, subIdx) => (
                      <li
                        key={subIdx}
                        className="submenu-item"
                      >
                        {typeof submenuItem === 'string' ? (
                          <Link
                            href={`/${submenuItem}`}
                            className="submenu-link"
                          >
                            {submenuItem}
                          </Link>
                        ) : (
                          <Link
                            href={submenuItem.link}
                            className="submenu-link"
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
          <div className="header-utility">
            <button className="contact-button">
              <Link href="/">문의하기</Link>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderComponent
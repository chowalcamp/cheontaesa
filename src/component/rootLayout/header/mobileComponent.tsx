'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import '@/styles/mobileComponent.css'

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
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

  const menu1Items = [
    {
      name: '천태사 소개',
      link: '/info',
      submenu: [
        { title: '주지스님 인사말', link: '/salutation' },
        { title: '전각 안내', link: '/info' },
        { title: '오시는 길', link: '/directions' },
      ],
    },
    {
      name: '기도·불공',
      link: '/pray',
      submenu: [
        { title: '기도 안내', link: '/pray' },
        { title: '불공 프로그램', link: '/sacrifice' },
        { title: '공양', link: '/offering' },
      ],
    },
    {
      name: '법회·행사',
      link: '/regular',
      submenu: [
        { title: '정기 법회', link: '/regular' },
        { title: '행사 일정', link: '/event' },
      ],
    },
    {
      name: '천태사 소식',
      link: '/news',
      submenu: [
        { title: '공지사항', link: '/notice' },
        { title: '주요소식', link: '/news' },
      ],
    },
  ]

  const menu2Items = [
    { name: ['천태사 소개'], link: '/info' },
    { name: '기도·불공', link: '/pray' },
    { name: '법회·행사', link: '/regular' },
    { name: '천태사 소식', link: '/news' },
  ]

  const toggleSubmenu = (menuName: string) => {
    setActiveSubmenu((prev) => (prev === menuName ? null : menuName))
  }

  return (
    <div className={`mobile-header ${isScrolled ? 'mobile-header-scrolled' : ''}`}>
      {/* 상단 헤더 */}
      <div className="mobile-header-top">
        {/* 로고 */}
        <Link href="/" className="mobile-logo">
          <Image
            src={
              isScrolled
                ? 'https://cheontaesa.s3.eu-north-1.amazonaws.com/images/logo.png'
                : 'https://cheontaesa.s3.eu-north-1.amazonaws.com/images/logoWhite.png'
            }
            width={100}
            height={100}
            alt="천태사 로고"
            style={{
              width: "100",
              height: "auto",
              marginLeft: "0px",
              paddingTop: "10px",
            }}
          />
        </Link>
        {/* 햄버거 메뉴 버튼 */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`mobile-menu-button ${isScrolled ? 'mobile-menu-button-scrolled' : ''}`}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* 슬라이드 메뉴 */}
      {isMenuOpen && (
        <div className="mobile-slide-menu">
          {/* 메뉴 헤더 */}
          <div className="mobile-menu-header">
            <h2 className="mobile-menu-title">메뉴</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mobile-menu-close"
            >
              ✕
            </button>
          </div>

          {/* 메뉴 리스트 */}
          <nav className="mobile-menu-nav">
            <ul className="mobile-menu-list">
              {menu1Items.map((item, index) => (
                <li key={index} className="mobile-menu-item">
                  <div className="mobile-menu-item-header">
                    {/* 상위 메뉴 클릭 */}
                    <span
                      onClick={() => {
                        if (item.link) {
                          window.location.href = item.link
                        } else {
                          toggleSubmenu(item.name as string)
                        }
                      }}
                      className="mobile-menu-link"
                    >
                      {Array.isArray(item.name) ? item.name[0] : item.name}
                    </span>

                    {/* 토글 버튼 */}
                    {item.submenu && (
                      <button
                        className="mobile-menu-toggle"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleSubmenu(item.name as string)
                        }}
                      >
                        {activeSubmenu === item.name ? (
                          <DownOutlined />
                        ) : (
                          <UpOutlined />
                        )}
                      </button>
                    )}
                  </div>
                  {item.submenu && activeSubmenu === item.name && (
                    <ul className="mobile-submenu">
                      {item.submenu.map((submenuItem, subIdx) => (
                        <li key={subIdx} className="mobile-submenu-item">
                          {typeof submenuItem === 'string' ? (
                            <Link
                              href={`/${submenuItem}`}
                              className="mobile-submenu-link"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {submenuItem}
                            </Link>
                          ) : (
                            <Link
                              href={submenuItem.link}
                              className="mobile-submenu-link"
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
      <nav className={`mobile-nav-bar ${isScrolled ? 'mobile-nav-bar-scrolled' : ''}`}>
        <ul className="mobile-nav-list">
          {menu2Items.map((item, index) => (
            <li key={index} className="mobile-nav-item">
              <div className="mobile-nav-item-content">
                <span
                  onClick={() => {
                    if (item.link) window.location.href = item.link
                  }}
                  className={`mobile-nav-link ${isScrolled ? 'mobile-nav-link-scrolled' : ''}`}
                >
                  {item.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MobileHeader
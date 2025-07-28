'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/styles/footerComponent.css'

const FooterComponent = () => {
  const footerMenu = [
    {
      title: '천태사 소개',
      submenu: [
        { title: '주지스님 인사말', link: '/salutation' },
        { title: '전각 안내', link: '/info' },
        { title: '오시는 길', link: '/directions' },
      ],
    },
    {
      title: '기도·불공',
      submenu: [
        { title: '특별기도', link: '/pray' },
        { title: '재(齋) 및 제사(祭祀)', link: '/sacrifice' },
        { title: '공양', link: '/offering' },
      ],
    },
    {
      title: '법회·행사',
      submenu: [
        { title: '정기법회', link: '/regular' },
        { title: '주요행사', link: '/event' },
      ],
    },
    {
      title: '천태사 소식',
      submenu: [
        { title: '공지사항', link: '/notice' },
        { title: '주요소식', link: '/news' },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 메뉴 */}
        <div className="footer-menu">
          {footerMenu.map((menu, idx) => (
            <div key={idx} className="footer-menu-section">
              <h4 className="footer-menu-title">
                {menu.title}
              </h4>
              <ul className="footer-submenu">
                {menu.submenu.map((submenuItem, subIdx) => (
                  <li key={subIdx} className="footer-submenu-item">
                    <Link
                      href={submenuItem.link}
                      className="footer-submenu-link"
                    >
                      {submenuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-info-section">
            <div className="footer-info-content">
              {/* 로고 및 주소 */}
              <div className="footer-logo-address">
                <Image
                  src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/logo.png"
                  alt="천태사 로고"
                  width={150}
                  height={150}
                  className="footer-logo"
                />
                <div className="footer-address">
                  <p className="footer-temple-name">대한불교미타종 천태사</p>
                  <p className="footer-address-text">경기광주시 초월읍 쌍동리 241-1</p>
                </div>
              </div>
            </div>
            <div className="footer-contact-info">
              <div className="footer-contact-details">
                <p>문의전화: (접수 문의) 02-000-0000 | 대표자 010-0000-0000</p>
                <p>운영시간: 09:00 ~ 17:00 (점심시간 11:30 ~ 12:30)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-contact">
            문의전화: (접수 문의) 02-000-0000 | 대표자 010-0000-0000 | kakao | instagram
          </p>
          <p className="footer-copyright">
            Copyright © CHEONTAESA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
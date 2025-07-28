'use client'

import React from 'react'
import Image from 'next/image'
import '@/styles/mobileFooterComponent.css'

const MobileFooterComponent = () => {
  return (
    <footer className="mobile-footer">
      {/* 연락처 및 저작권 */}
      <div className="mobile-footer-content">
        <p className="mobile-footer-contact">
          문의전화: (접수 문의) 02-000-0000 <br /> 대표자 010-0000-0000
        </p>
        <p className="mobile-footer-hours">
          운영시간: 09:00 ~ 17:00 <br /> (점심시간 11:30 ~ 12:30)
        </p>
        <div className="mobile-footer-logo-section">
          <div className="mobile-footer-logo-container">
            <Image
              src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/logo.png"
              alt="천대사 로고"
              width={150}
              height={150}
              className="mobile-footer-logo"
            />
            <p className="mobile-footer-address">경기광주시 초월읍 쌍동리 241-1</p>
          </div>
        </div>
        <div className="mobile-footer-social">
          <span className="mobile-social-link">Kakao</span> | <span className="mobile-social-link">Instagram</span>
        </div>
        <p className="mobile-footer-copyright">Copyright © CHEONTAESA. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default MobileFooterComponent
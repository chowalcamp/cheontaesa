"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterComponent = () => {
  const footerMenu = [
    {
      title: "천태사 소개",
      links: ["주지스님 인사말", "전각 안내", "오시는 길"],
    },
    {
      title: "기도·불공",
      links: ["상시기도", "월정기기도", "특별기도", "재(齋) 및 제사(祭祀)", "공양"],
    },
    {
      title: "법회·행사",
      links: ["정기법회", "주요행사"],
    },
    {
      title: "천태사 소식",
      links: ["공지사항", "주요소식", "천태사 갤러리"],
    },
  ];

  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat py-4"
      style={{ 
        backgroundImage: `url('/images/footer.jpg')`, 
        color: '#FFFFFF',
        fontFamily: 'NanumMyeongjo',
        marginTop: '100px',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-8">
        {/* 메뉴 */}
        <div className="flex flex-wrap justify-between mb-8 py-8">
          {footerMenu.map((menu, idx) => (
            <div key={idx} className="flex flex-col space-y-2">
              <h4 className="text-lg text-white-f text-base mb-6 py-4">{menu.title}</h4>
              <ul className="text-gray-200 text-white-f space-y-1 text-sm">
                {menu.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={`/${link}`} className="hover:text-gray-300">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        <div className="border-gray-200 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 로고 및 주소 */}
            <div className="flex flex-col md:flex-row items-center space-x-4">
              <Image
                src="/images/logo.png"
                alt="천대사로고"
                width={150}
                height={150}
                />
              <div className="text-sm text-gray-200  px-4 mb-4">
                <p className="font-light">대한불교미타종 천태사</p>
                <p>경기광주시 초월읍 쌍동리 241-1</p>

              </div>
            </div>
            </div>
          <div>
            <div className="text-sm text-gray-200 text-left md:text-center py-4 mb-4">
              <p>문의전화: (접수 문의) 02-000-0000 | 대표자 010-0000-0000</p>
              <p>운영시간:  09:00 ~ 17:00 (점심시간 11:30 ~ 12:30)</p>

            </div>
        </div>

          </div>
          </div>
            <div className="flex flex-col md:flex-row items-center space-x-4">
              <p>문의전화: (접수 문의) 02-000-0000 | 대표자 010-0000-0000 | kakao | instagram</p>
              <p>Copyright © CHEONTAESA. All Rights Reserved.</p>
            </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

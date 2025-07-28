"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css";

type MenuPageLayoutProps = {
  data: {
    image: string;
    title: string;
    date?: string;
    place?: string;
    description: string;
  }[];
};

export default function MenuPageLayoutComponent({ data }: MenuPageLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);

  // 윈도우 크기에 따라 모바일 여부 판별
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 모바일 기준: 768px 이하
    };

    handleResize(); // 초기 크기 설정
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="menu-page-container">
      {/* 데이터 리스트 */}
      <section className="menu-page-section">
        {data.map((item, index) => (
          <div
            key={index}
            className={`menu-layout-item ${isMobile ? 'menu-layout-item-mobile' : ''}`}
          >
            {/* 이미지 */}
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              className="menu-item-image"
            />

            {/* 내용 */}
            <div className="menu-item-content">
              <h2 className="menu-item-title">
                {item.title}
              </h2>
              {item.date && <p className="menu-item-date">{item.date}</p>}
              {item.place && <p className="menu-item-place">{item.place}</p>}
              <p className="menu-item-description">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
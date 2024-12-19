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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 데이터 리스트 */}
      <section className="space-y-8">
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row", // 모바일일 때 column, PC일 때 row
              maxHeight: isMobile ? "none" : "400px",
              marginBottom: isMobile ? "1rem" : "2rem",
              gap: "1rem",
              borderTop: "1px solid #e0e0e0",
              paddingTop: isMobile ? "1rem" : "2rem",
            }}
          >
            {/* 이미지 */}
            <Image
              src={item.image}
              alt={item.title}
              className="w-full lg:w-1/2 object-cover"
              width={400}
              height={400}
            />

            {/* 내용 */}
            <div className="p-6 w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: "NanumMyeongjo" }}>
                {item.title}
              </h2>
              {item.date && <p className="text-gray-500 mb-2">{item.date}</p>}
              {item.place && <p className="text-gray-500 mb-2">{item.place}</p>}
              <p
                className="text-gray-700"
                style={{
                  fontFamily: "NanumMyeongjo",
                  textAlign: "justify",
                  wordBreak: "break-word",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

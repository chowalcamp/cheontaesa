"use client";

import React, { useEffect, useState } from "react";
import { Providers } from "../app/(auth)/providers";
import { Nanum_Myeongjo } from "next/font/google";
import HeaderComponent from "@/component/rootLayout/header/headerComponent";
import MobileHeader from "@/component/rootLayout/header/mobileComponent";
import FooterComponent from "@/component/rootLayout/footer/footerComponet";
import MobileFooterComponent from "@/component/rootLayout/footer/mobileFooterComponent";
import "@/styles/globals.css";
const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-nanum-myeongjo",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 브라우저의 창 크기를 기준으로 모바일 여부 확인
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px 기준으로 모바일과 데스크톱을 구분
    };

    // 초기 렌더링 시 크기 확인
    handleResize();

    // 창 크기 변경 이벤트에 핸들러 추가
    window.addEventListener("resize", handleResize);

    // 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="ko" className={`${nanumMyeongjo.variable}`}>
      <body className="mb-0 flex flex-col min-h-screen">
        {/* 조건부 렌더링 */}
        {isMobile ? <MobileHeader /> : <HeaderComponent />}
        <Providers>
          <main className="flex-grow">{children}</main>
        </Providers>
        {isMobile ? <MobileFooterComponent /> : <FooterComponent />}
      </body>
    </html>
  );
}

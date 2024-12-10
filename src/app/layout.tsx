"use client";

import React, { useEffect, useState } from "react";
import { Providers } from "../app/(auth)/providers";
import { Noto_Sans_KR } from "next/font/google";
import HeaderComponent from "@/component/rootLayout/header/headerComponent";
import MobileHeader from "@/component/rootLayout/header/mobileComponent";
import FooterComponent from "@/component/rootLayout/footer/footerComponet";
import "@/styles/globals.css";
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
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
    <html lang="ko" className={`${notoSansKr.variable}`}>
      <body className="mb-0 flex flex-col min-h-screen">
        {/* 조건부 렌더링 */}
        {isMobile ? <MobileHeader /> : <HeaderComponent />}
        <Providers>
          <main className="flex-grow">{children}</main>
        </Providers>
        <FooterComponent />
      </body>
    </html>
  );
}

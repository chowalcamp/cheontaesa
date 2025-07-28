// components/ClientWrapper.tsx (클라이언트 컴포넌트로 상태 관리 분리)
"use client";

import React, { useState, useEffect } from "react";
import HeaderComponent from "@/component/rootLayout/header/HeaderComponent";
import MobileHeader from "@/component/rootLayout/header/mobileComponent";
import FooterComponent from "@/component/rootLayout/footer/footerComponet";
import MobileFooterComponent from "@/component/rootLayout/footer/mobileFooterComponent";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileHeader /> : <HeaderComponent />}
      {children}
      {isMobile ? <MobileFooterComponent /> : <FooterComponent />}
    </>
  );
}

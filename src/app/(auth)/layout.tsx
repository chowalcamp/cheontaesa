"use client";

import React from "react";
import Link from "next/link";
import SwiperComponent from "../../component/aboutLayoutHeader/sideComponet";

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <div className="w-full">
      {/* 상단베너레이아웃 */}
      <SwiperComponent />
      {/* 메인 콘텐츠 */}
      <main className="mt-4">{children}</main>
    </div>
  );
}

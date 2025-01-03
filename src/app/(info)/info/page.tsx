import { Metadata } from "next";


import React from "react";
import info from "./data";
import MenuPageLayoutComponent from "@/component/menuPageLayout/menePageLayoutComponent";

export const metadata: Metadata = {
  title: "천태사 사찰안내",
  description: "태천사 대웅전, 칠성각, 산신각, 황후당, 천태사 사찰안내, 천태사 사찰안내 정보, 천태사 사찰안내 예약"
};

export default function InfoPage() {
  return <MenuPageLayoutComponent data={info} />;
}

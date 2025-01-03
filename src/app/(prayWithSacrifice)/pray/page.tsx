import { Metadata } from "next";


import React from "react";
import pray from "./data";
import MenuPageLayoutComponent from "@/component/menuPageLayout/menePageLayoutComponent";

export const metadata: Metadata = {
  title: "특별기도",
  description: "천태사 특별기도 정보 및 예약 안내, 생일기도, 백일기도, 천일기도",
};

export default function PrayPage() {
  return <MenuPageLayoutComponent data={pray}/>;
}

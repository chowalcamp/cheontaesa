import { Metadata } from "next";

import React from "react";
import offering from "./data";
import MenuPageLayoutComponent from "@/component/menuPageLayout/menePageLayoutComponent";

export const metadata: Metadata = {
  title: "공양",
  description: "천태사 공양 정보 및 예약 안내, 공양 예약, 초 공양, 등 공양, 경전공양, 떡공양"
};

export default function OfferingPage() {
  return <MenuPageLayoutComponent data={offering} />;
}

import { Metadata } from "next";

import React from "react";
import sacrifice from "./data";
import MenuPageLayoutComponent from "@/component/menuPageLayout/menePageLayoutComponent";

export const metadata: Metadata = {
  title: "재(齋)제사(祭祀)",
  description: "천태사 재, 제사 정보 및 예약 안내, 천도제, 산신제, 백중제 예약",
};

export default function SacrificePage() {
  return <MenuPageLayoutComponent data={sacrifice} />;
}

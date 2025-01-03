import { Metadata } from "next";

import React from "react";
import regular from "./data";
import MenuPageLayoutComponent from "@/component/menuPageLayout/menePageLayoutComponent";

export const metadata: Metadata = {
  title: "천태사 정기법회",
  description: "천태사 정기법회 정보 및 예약 안내, 천태사 정기법회, 천태사 정기법회 정보, 천태사 정기법회 예약, 초하루 법회, 일요법회"
}

export default function RegularPage() {
  return <MenuPageLayoutComponent data={regular} />;
}

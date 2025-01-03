import { Metadata } from "next";

import React from "react";
import event from "./data";
import MenuPageLayoutComponent from "@/component/menuPageLayout/menePageLayoutComponent";

export const metadata: Metadata = {
  title: "천태사 주요행사",
  description: "천태사 주요행사 정보 및 예약 안내, 천태사 주요행사, 천태사 주요행사 정보, 천태사 주요행사 예약, 부처님오신날, 정월 대 보름, 동지 맞이"
}

export default function EventPage() {
  return <MenuPageLayoutComponent data={event} />;
}

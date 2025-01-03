import { Metadata } from "next";
import React from "react";
import salutation from "./data";
import MenuPageLayoutComponent from "@/component/menuPageLayout/menePageLayoutComponent";

export const metadata: Metadata = {
  title: "천태사 인사말",
  description: "천태사 인사말"
}


export default function salutatainPage() {
  return <MenuPageLayoutComponent data={salutation} />;
}

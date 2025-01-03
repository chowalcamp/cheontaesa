import React from "react";
import NewsListComponent from "./listComponent";
import { Metadata } from "next";


// 페이지 메타데이터 설정
export const metadata: Metadata = {
  title: "천태사 주요소식",
  description: "천태사 주요소식 정보 및 예약 안내, 천태사 주요소식, 천태사 주요소식 정보, 천태사 주요소식 예약",
};

export default async function NewsPage() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news`);
    const data = await res.json();
    return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <NewsListComponent initialData={data} />
    </div>
  );
} catch (error) {
  return <div>주요소식을 불러오는 데 실패했습니다.</div>;
}
}
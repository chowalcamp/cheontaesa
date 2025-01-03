import NewsDetailComponent from "./detailComponent";
import type { NewsItem } from "@/app/(about)/news/types";
import { Metadata } from "next";

// 페이지 메타데이터 설정
export const metadata: Metadata = {
  title: "주요소식",
  description: "천태사 주요소식 정보 및 예약 안내, 천태사 주요소식, 천태사 주요소식 정보",
};



export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/news/${params.id}`
  );

  if (!res.ok) {
    throw new Error("주요소식 데이터를 가져오는 데 실패했습니다.");
  }

  const news: NewsItem = await res.json();
  return (
    <NewsDetailComponent news={news}/>
  );
}
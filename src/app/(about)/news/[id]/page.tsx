"use client";

import React from "react";
import Image from "next/image";
import newsData from "../data";

export default function NewsDetailPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* 제목 섹션 */}
      <h1 className="text-3xl font-bold mb-4">{newsData.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{newsData.date}</p>

      {/* 본문 섹션 */}
      {newsData.sections.map((section, index) => (
        <div key={index} className="mb-8">
          {/* 이미지 */}
          <div className="relative w-full h-[400px] mb-4 rounded-md overflow-hidden shadow-md">
            <Image
              src={section.image}
              alt={`뉴스 이미지 ${index + 1}`}
              layout="fill"
              className="object-cover"
              priority={index === 0} // 첫 번째 이미지를 우선 로드
            />
          </div>
          {/* 텍스트 */}
          <p className="prose max-w-none text-gray-700">{section.content}</p>
        </div>
      ))}

      {/* 뒤로가기 버튼 */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          목록으로 돌아가기
        </button>
      </div>
    </div>
  );
}

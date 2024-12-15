"use client";

import React from "react";
import Image from "next/image";

// 가짜 데이터 예제. 실제 데이터는 API 또는 서버에서 받아올 수 있도록 구현해야 합니다.
const newsData = {
  id: 1,
  title: "불기 2568(2024)년 달마사 정초합동 천도재 봉행",
  date: "2024-02-24",
  sections: [
    {
      image: "/images/news/news1.jpeg",
      content:
        "천도재는 불교 전통의 중요한 의식으로, 돌아가신 분의 명복을 빌고 업장을 소멸시키기 위해 봉행됩니다. " +
        "이번 천도재에는 많은 신도들이 동참하여, 불기 2568년의 희망과 평화를 기원하였습니다.",
    },
    {
      image: "/images/news/news2.jpeg",
      content:
        "기도를 통해 얻은 마음의 안정과 성취는 모든 이들에게 커다란 기쁨을 가져다줍니다. " +
        "정초합동 천도재의 현장에는 신도와 가족들이 함께하여 뜻깊은 시간을 보냈습니다.",
    },
    {
      image: "/images/news/news3.jpeg",
      content:
        "이날 행사는 오전 예불로 시작하여 다양한 불교의식과 법문이 이어졌습니다. " +
        "모든 참가자들은 진심으로 축복받는 경험을 했습니다.",
    },
    {
      image: "/images/news/news4.jpeg",
      content:
        "다양한 불교 의식을 통해 참가자들은 불법의 가르침을 배우고, 자신의 삶에 대해 되돌아보는 시간을 가졌습니다.",
    },
  ],
};

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

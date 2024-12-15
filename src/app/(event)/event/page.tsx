"use client";

import React from "react";
import Image from "next/image";

const events = [
  {
    title: "부처님 오신날",
    date: "음력 4월 1일 ~ 4월 8일",
    place: "천태사 전각",
    description:
      "부처님 오신 날은 부처님의 탄생을 기념하며 자비와 지혜를 실천하는 뜻깊은 날입니다. 이 날은 부처님의 가르침을 되새기고, 세상의 평화와 행복을 기원하는 다양한 행사가 열립니다.",
    image: "/images/fullshot.jpeg",
  },
  {
    title: "정월 대 보름",
    date: "음력 1월 1일 ~ 1월 21일",
    place: "천태사 전각",
    description:
      "정월대보름은 음력 1월 15일로, 새해 첫 보름달을 맞이하며 건강과 풍요를 기원하는 전통 명절입니다. 달맞이 행사, 지신밟기 등을 통해 공동체의 화합을 도모합니다.",
    image: "/images/fullshot.jpeg",
  },
  {
    title: "동지 맞이",
    date: "음력 11월 1일 ~ 11월 11일",
    place: "천태사 전각",
    description:
      "동지는 일 년 중 밤이 가장 길고 낮이 가장 짧은 날로, 동지팥죽을 나누며 나쁜 기운을 물리치고 새해의 복을 기원합니다. 새해를 준비하는 중요한 의미를 담고 있습니다.",
    image: "/images/fullshot.jpeg",
  },
];

export default function EventPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 페이지 제목 및 설명 */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "NanumMyeongjo" }}>
          주요 행사
        </h1>
        <p className="text-gray-600 text-lg">
          천태사의 다양한 행사 소식을 전해드립니다. 함께 참여하여 마음의 평안을 찾으세요.
        </p>
      </header>

      {/* 주요 행사 리스트 */}
      <section className="space-y-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row overflow-hidden bg-white border-t border-gray-200 pt-4"
          >
            {/* 이미지 */}
            <Image
              src={event.image}
              alt={event.title}
              className="w-full lg:w-1/2 object-cover"
              width={400}
              height={400}
            />

            {/* 내용 */}
            <div className="p-6 w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: "NanumMyeongjo" }}>
                {event.title}
              </h2>
              <p className="text-gray-500 mb-4">{event.date}</p>
              <p className="text-gray-500 mb-4">{event.place}</p>
              <p
                className="text-gray-700"
                style={{
                  fontFamily: "NanumMyeongjo",
                  textAlign: "justify",
                  wordBreak: "break-word",
                }}
              >
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

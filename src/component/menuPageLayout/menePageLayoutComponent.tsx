"use client";

import React from "react";
import Image from "next/image";

type MenuPageLayoutProps = {
  data: {
    image: string;
    title: string;
    date?: string;
    place?: string;
    description: string;
  }[];
};

export default function MenuPageLayoutComponent({ data }: MenuPageLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 데이터 리스트 */}
      <section className="space-y-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row overflow-hidden bg-white border-t border-gray-200 pt-4"
          >
            {/* 이미지 */}
            <Image
              src={item.image}
              alt={item.title}
              className="w-full lg:w-1/2 object-cover"
              width={400}
              height={400}
            />

            {/* 내용 */}
            <div className="p-6 w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: "NanumMyeongjo" }}>
                {item.title}
              </h2>
              {item.date && <p className="text-gray-500 mb-2">{item.date}</p>}
              {item.place && <p className="text-gray-500 mb-2">{item.place}</p>}
              <p
                className="text-gray-700"
                style={{
                  fontFamily: "NanumMyeongjo",
                  textAlign: "justify",
                  wordBreak: "break-word",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

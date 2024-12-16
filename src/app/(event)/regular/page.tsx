"use client";

import React from "react";
import Image from "next/image";
import regular from "./data";
export default function RegularPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* 주요 행사 리스트 */}
      <section className="space-y-8">
        {regular.map((regular, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row overflow-hidden bg-white border-t border-gray-200 pt-4"
          >
            {/* 이미지 */}
            <Image
              src={regular.image}
              alt={regular.title}
              className="w-full lg:w-1/2 object-cover"
              width={400}
              height={400}
            />

            {/* 내용 */}
            <div className="p-6 w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: "NanumMyeongjo" }}>
                {regular.title}
              </h2>
              <p className="text-gray-500 mb-4">{regular.date}</p>
              <p className="text-gray-500 mb-4">{regular.place}</p>
              <p
                className="text-gray-700"
                style={{
                  fontFamily: "NanumMyeongjo",
                  textAlign: "justify",
                  wordBreak: "break-word",
                }}
              >
                {regular.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

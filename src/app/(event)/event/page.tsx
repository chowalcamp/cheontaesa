"use client";

import React from "react";
import Image from "next/image";
import events from "./data";
export default function EventPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

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

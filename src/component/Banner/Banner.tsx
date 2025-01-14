"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function MainWebBannerComponent() {
  return (
    <>
      {/* 인라인 CSS 스타일 */}
      <style jsx>{`
        .banner-container {
          height: 500px; /* 기본 높이 (PC) */
        }

        @media (max-width: 768px) {
          .banner-container {
            height: 450px; /* 모바일 높이 */
          }
        }
      `}</style>

      <section className="relative w-full banner-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          {/* 슬라이드 1 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/buddhas-birthday1280.jpg"
                alt="천태사 전경 1"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex justify-center items-center text-white">
                <h1 className="text-3xl font-bold">첫 번째 슬라이드</h1>
              </div>
            </div>
          </SwiperSlide>

          {/* 슬라이드 2 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/pray/firePray.jpeg"
                alt="천태사 전경 2"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex justify-center items-center text-white">
                <h1 className="text-3xl font-bold">두 번째 슬라이드</h1>
              </div>
            </div>
          </SwiperSlide>

          {/* 슬라이드 3 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/regular/pray.jpeg"
                alt="천태사 전경 3"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex justify-center items-center text-white">
                <h1 className="text-3xl font-bold">세 번째 슬라이드</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

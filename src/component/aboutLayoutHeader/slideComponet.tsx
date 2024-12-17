"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <section className="relative w-full" style={{ height: "350px" }}> {/* 부모 높이 명시 */}
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
              src="/images/pray/firePray.jpeg"
              alt="촛불"
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
              src="/images/regular/buta.jpeg"
              alt="부처"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center text-white">
              <h1 className="text-3xl font-bold">두 번째 슬라이드</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/images/buddhas-birthday1280.jpg"
              alt="천태사 전경 2"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center text-white">
              <h1 className="text-3xl font-bold">세 번째 슬라이드</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/images/regular/pray.jpeg"
              alt="기도"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center text-white">
              <h1 className="text-3xl font-bold">네 번째 슬라이드</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

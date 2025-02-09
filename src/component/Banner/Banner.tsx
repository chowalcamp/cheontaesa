'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

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
                src=" https://cheontaesa.s3.eu-north-1.amazonaws.com/images/buddhas-birthday1280.jpg"
                alt="천태사 전경 1"
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>


          {/* 슬라이드 3 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/pray.jpeg"
                alt="천태사 전경 3"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex justify-center items-center text-white">
                <h1 className="text-3xl font-bold"></h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

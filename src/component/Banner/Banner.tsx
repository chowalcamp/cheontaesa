'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import '@/styles/home/banner.css'

export default function MainWebBannerComponent() {
  return (
    <section className="banner-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="banner-swiper"
      >
        {/* 슬라이드 1 */}
        <SwiperSlide>
          <div className="banner-slide">
            <Image
              src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/buddhas-birthday1280.jpg"
              alt="천태사 전경 1"
              fill
              className="banner-image"
              priority
            />
          </div>
        </SwiperSlide>

        {/* 슬라이드 3 */}
        <SwiperSlide>
          <div className="banner-slide">
            <Image
              src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/pray.jpeg"
              alt="천태사 전경 3"
              fill
              className="banner-image"
              priority
            />
            <div className="banner-overlay">
              <h1 className="banner-title"></h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
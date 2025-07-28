'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import '@/styles/info/infoBanner.css'

export default function SwiperComponent() {
  return (
    <section className="slide-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="slide-swiper"
      >
        {/* 슬라이드 2 */}
        <SwiperSlide>
          <div className="slide-item">
            <Image
              src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/buta.jpeg"
              alt="부처"
              fill
              className="slide-image"
              priority
            />
            <div className="slide-overlay">
              <h1 className="slide-title"></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">
            <Image
              src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/buddhas-birthday1280.jpg"
              alt="천태사 전경 2"
              fill
              className="slide-image"
              priority
            />
            <div className="slide-overlay">
              <h1 className="slide-title"></h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
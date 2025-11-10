'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { GalleryItem } from '@/types';

const allGalleryItems: GalleryItem[] = [
  {
    id: '1',
    title: '대웅전',
    description: '천태사의 중심 법당',
    icon: 'fa-temple',
    gradient: 'from-gray-200 to-gray-300',
    imageUrl: '/images/temp.jpeg',
  },
  {
    id: '2',
    title: '예불 시간',
    description: '정성을 다하는 예불',
    icon: 'fa-praying-hands',
    gradient: 'from-amber-200 to-amber-300',
    imageUrl: '/images/temp2.jpeg',
  },
  {
    id: '3',
    title: '정원',
    description: '평화로운 사찰 정원',
    icon: 'fa-spa',
    gradient: 'from-gray-300 to-gray-400',
    imageUrl: '/images/temp3.jpeg',
  },
  {
    id: '4',
    title: '법회',
    description: '정기 법회 모습',
    icon: 'fa-om',
    gradient: 'from-amber-300 to-amber-400',
    imageUrl: '/images/temp4.jpeg',
  },
  {
    id: '5',
    title: '일주문',
    description: '천태사 입구',
    icon: 'fa-torii-gate',
    gradient: 'from-gray-400 to-gray-500',
    imageUrl: '/images/temp5.jpeg',
  },
  {
    id: '6',
    title: '특별 행사',
    description: '불교 문화 행사',
    icon: 'fa-yin-yang',
    gradient: 'from-amber-400 to-amber-500',
    imageUrl: '/images/temp6.jpeg',
  },
  {
    id: '7',
    title: '사찰 전경',
    description: '천태사의 아름다운 전경',
    icon: 'fa-mountain',
    gradient: 'from-gray-200 to-gray-300',
    imageUrl: '/images/fullshot.jpeg',
  },
  {
    id: '8',
    title: '오시는 길',
    description: '천태사 가는 길',
    icon: 'fa-road',
    gradient: 'from-amber-200 to-amber-300',
    imageUrl: '/images/road.jpeg',
  },
  {
    id: '9',
    title: '부처님 오신 날',
    description: '부처님 오신 날 행사',
    icon: 'fa-lotus',
    gradient: 'from-gray-300 to-gray-400',
    imageUrl: '/images/buddhas-birthday1280.jpg',
  },
  {
    id: '10',
    title: '동지 행사',
    description: '동지를 맞이하는 특별한 날',
    icon: 'fa-snowflake',
    gradient: 'from-amber-300 to-amber-400',
    imageUrl: '/images/event/dongzi.jpeg',
  },
  {
    id: '11',
    title: '보름달 기도',
    description: '달맞이 기도 행사',
    icon: 'fa-moon',
    gradient: 'from-gray-400 to-gray-500',
    imageUrl: '/images/event/moon.jpeg',
  },
  {
    id: '12',
    title: '경전',
    description: '불교 경전과 가르침',
    icon: 'fa-book',
    gradient: 'from-amber-400 to-amber-500',
    imageUrl: '/images/offering/book.jpeg',
  },
  {
    id: '13',
    title: '호마 의식',
    description: '정성을 다하는 호마 의식',
    icon: 'fa-fire',
    gradient: 'from-gray-200 to-gray-300',
    imageUrl: '/images/offering/fire.jpeg',
  },
  {
    id: '14',
    title: '떡 공양',
    description: '전통 떡으로 올리는 공양',
    icon: 'fa-gift',
    gradient: 'from-amber-200 to-amber-300',
    imageUrl: '/images/offering/ricecake.jpeg',
  },
  {
    id: '15',
    title: '부처님',
    description: '자비로운 부처님의 모습',
    icon: 'fa-buddha',
    gradient: 'from-gray-300 to-gray-400',
    imageUrl: '/images/regular/buta.jpeg',
  },
  {
    id: '16',
    title: '백중제',
    description: '백중날 천도재',
    icon: 'fa-praying-hands',
    gradient: 'from-amber-300 to-amber-400',
    imageUrl: '/images/sacrifice/baekjuongze.jpeg',
  },
  {
    id: '17',
    title: '산신제',
    description: '산신님께 올리는 제례',
    icon: 'fa-mountain',
    gradient: 'from-gray-400 to-gray-500',
    imageUrl: '/images/sacrifice/shansinze.jpeg',
  },
  {
    id: '18',
    title: '천태사 마당',
    description: '평화로운 사찰 마당',
    icon: 'fa-spa',
    gradient: 'from-amber-400 to-amber-500',
    imageUrl: '/images/humen.jpg',
  },
];

// 각 이미지마다 다른 높이 설정 (masonry 효과)
const heightClasses = [
  'h-64',  // 1
  'h-80',  // 2
  'h-72',  // 3
  'h-96',  // 4
  'h-64',  // 5
  'h-88',  // 6
  'h-80',  // 7
  'h-72',  // 8
  'h-96',  // 9
  'h-72',  // 10
  'h-80',  // 11
  'h-64',  // 12
  'h-96',  // 13
  'h-72',  // 14
  'h-80',  // 15
  'h-64',  // 16
  'h-88',  // 17
  'h-96',  // 18
];

export function Gallery() {
  const INITIAL_COUNT = 7;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const displayedItems = allGalleryItems.slice(0, visibleCount);
  const hasMore = visibleCount < allGalleryItems.length;
  const canCollapse = visibleCount > INITIAL_COUNT;

  function handleLoadMore() {
    setVisibleCount((prev) => Math.min(prev + 3, allGalleryItems.length));
  }

  function handleCollapse() {
    setVisibleCount(INITIAL_COUNT);
    // 스크롤을 갤러리 섹션 상단으로 부드럽게 이동
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section 
      id="gallery" 
      className="py-20 bg-white"
      aria-labelledby="gallery-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 
            id="gallery-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif"
          >
            갤러리
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4" aria-hidden="true"></div>
          <p className="text-gray-600 text-lg">천태사의 아름다운 순간들</p>
        </header>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid-column mb-6 inline-block w-full"
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                {/* 이미지 */}
                <div className={`relative ${heightClasses[index % heightClasses.length]} w-full`}>
                  <Image
                    src={item.imageUrl}
                    alt={`${item.title} - ${item.description}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index < 6 ? "eager" : "lazy"}
                    quality={75}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* 텍스트 - 호버 시 나타남 */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold mb-3 text-center">{item.title}</h3>
                    <p className="text-sm text-gray-200 text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 더보기/접기 버튼 */}
        {(hasMore || canCollapse) && (
          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-4">
              {hasMore && (
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  aria-label="갤러리 이미지 더 보기"
                >
                  <span>더보기</span>
                  <i className="fas fa-chevron-down" aria-hidden="true"></i>
                </button>
              )}
              {canCollapse && (
                <button
                  onClick={handleCollapse}
                  className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  aria-label="갤러리 접기"
                >
                  <span>접기</span>
                  <i className="fas fa-chevron-up" aria-hidden="true"></i>
                </button>
              )}
            </div>
          </div>
        )}

        {/* 모두 로드됨 메시지 */}
        {!hasMore && allGalleryItems.length > INITIAL_COUNT && !canCollapse && (
          <div className="text-center mt-12">
            <p className="text-gray-500">모든 갤러리를 확인하셨습니다</p>
          </div>
        )}
      </div>
    </section>
  );
}




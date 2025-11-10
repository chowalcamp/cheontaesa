'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center"
      aria-label="메인 히어로 섹션"
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0" role="img" aria-label="천태사 전경 배경 이미지">
        <Image
          src="/images/main.jpeg"
          alt="천태사 전경 - 전통 사찰의 아름다운 모습"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          quality={60}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmX/9k="
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">천태사</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          마음의 평화를 찾는 곳
        </p>
        <nav aria-label="주요 행동 버튼" className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            aria-label="천태사에 대해 더 알아보기"
          >
            더 알아보기
          </a>
          <a
            href="#contact"
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg transition-all duration-300 opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            aria-label="천태사 오시는 길 안내"
          >
            오시는 길
          </a>
        </nav>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        role="img"
        aria-label="아래로 스크롤"
      >
        <i className="fas fa-chevron-down text-white text-2xl" aria-hidden="true"></i>
      </div>
    </section>
  );
}



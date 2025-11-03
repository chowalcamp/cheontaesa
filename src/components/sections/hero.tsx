'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/main.jpeg"
          alt="천태사 전경"
          fill
          priority
          className="object-cover"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmX/9k="
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 animate-fade-in">천태사</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">마음의 평화를 찾는 곳</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            더 알아보기
          </a>
          <a
            href="#contact"
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg transition-all duration-300 opacity-90"
          >
            오시는 길
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
}



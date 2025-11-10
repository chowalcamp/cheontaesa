'use client';

import Link from 'next/link';
import type { BlogPost } from '@/types';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '2025년 새해 특별기도 안내',
    content: '새해를 맞아 특별기도를 진행합니다. 가족의 건강과 사업의 번창을 기원하는 시간에 함께 하세요.',
    category: '공지사항',
    date: '2025.01.15',
    icon: 'fa-bullhorn',
  },
  {
    id: '2',
    title: '정월 대보름 행사 개최',
    content: '정월 대보름을 맞아 전통 풍속 행사와 특별 법회를 진행합니다. 많은 참여 바랍니다.',
    category: '행사',
    date: '2025.01.10',
    icon: 'fa-lotus',
  },
  {
    id: '3',
    title: '스님의 법문: 마음의 평화 찾기',
    content: '복잡한 현대 사회에서 마음의 평화를 찾는 방법에 대한 주지 스님의 법문을 나눕니다.',
    category: '법문',
    date: '2025.01.05',
    icon: 'fa-book-open',
  },
  {
    id: '4',
    title: '템플스테이 프로그램 안내',
    content: '사찰에서의 하루를 경험하는 템플스테이 프로그램에 참여하세요. 예약 접수 중입니다.',
    category: '모집',
    date: '2024.12.28',
    icon: 'fa-users',
  },
  {
    id: '5',
    title: '동지 법회 현장 스케치',
    content: '동지를 맞아 진행된 특별 법회의 따뜻한 현장을 사진으로 담았습니다.',
    category: '갤러리',
    date: '2024.12.20',
    icon: 'fa-camera',
  },
  {
    id: '6',
    title: '동절기 방문 시간 변경 안내',
    content: '겨울철 일몰 시간에 맞춰 사찰 방문 시간이 일부 변경되었습니다. 참고하시기 바랍니다.',
    category: '안내',
    date: '2024.12.15',
    icon: 'fa-bell',
  },
];

const gradients = [
  'from-amber-700 to-amber-900',
  'from-gray-700 to-gray-900',
  'from-amber-600 to-amber-800',
  'from-gray-600 to-gray-800',
  'from-amber-500 to-amber-700',
  'from-gray-700 to-gray-900',
];

export function Blog() {
  return (
    <section 
      id="blog" 
      className="py-20 bg-gray-50"
      aria-labelledby="blog-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 
            id="blog-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif"
          >
            소식 & 공지사항
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4" aria-hidden="true"></div>
          <p className="text-gray-600 text-lg">천태사의 최신 소식을 확인하세요</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`h-48 bg-gradient-to-br ${gradients[index]} flex items-center justify-center`}
                aria-hidden="true"
              >
                <i className={`fas ${post.icon} text-white text-5xl`} aria-hidden="true"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="fas fa-calendar mr-2" aria-hidden="true"></i>
                  <time dateTime={post.date.replace(/\./g, '-')}>{post.date}</time>
                  <span className="mx-2" aria-hidden="true">|</span>
                  <span className="text-amber-700 font-semibold">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-700 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                <Link
                  href={`/news/${post.id}`}
                  className="text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center py-2 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
                  aria-label={`${post.title} 자세히 보기`}
                >
                  자세히 보기 <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-wrap gap-4 justify-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px]"
            aria-label="천태사 소식 더보기"
          >
            소식 더보기
          </Link>
          <Link
            href="/notice"
            className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px]"
            aria-label="천태사 공지사항 보기"
          >
            공지사항
          </Link>
        </div>
      </div>
    </section>
  );
}


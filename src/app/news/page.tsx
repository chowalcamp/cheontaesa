import { Suspense } from 'react';
import Link from 'next/link';
import { getNewsList } from '@/lib/api';

async function NewsListContent() {
  const newsList = await getNewsList();

  const gradients = [
    'from-amber-700 to-amber-900',
    'from-gray-700 to-gray-900',
    'from-amber-600 to-amber-800',
    'from-gray-600 to-gray-800',
    'from-amber-500 to-amber-700',
    'from-gray-700 to-gray-900',
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsList.map((news, index) => (
        <article
          key={news.id}
          className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 shadow-lg group"
        >
          <div className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center relative overflow-hidden`}>
            <i className={`fas ${news.icon} text-white text-5xl transition-transform duration-500 group-hover:scale-110`}></i>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
          </div>
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <i className="fas fa-calendar mr-2"></i>
              <span>{news.date}</span>
              <span className="mx-2">|</span>
              <span className="text-amber-700 font-semibold">{news.category}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-700 transition-colors">
              {news.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{news.content}</p>
            <Link
              href={`/news/${news.id}`}
              className="text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center"
            >
              자세히 보기 <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse shadow-lg">
          <div className="h-48 bg-gray-300"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
            <div className="h-6 bg-gray-300 rounded mb-3"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">소식</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">천태사의 최신 소식을 확인하세요</p>
          </div>

          {/* 컨텐츠 */}
          <Suspense fallback={<LoadingSkeleton />}>
            <NewsListContent />
          </Suspense>

          {/* 홈으로 버튼 */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




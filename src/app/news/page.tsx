'use client';

import Link from 'next/link';
import { useNewsList } from '@/hooks';

export default function NewsPage() {
  const { data: newsList, isLoading, error } = useNewsList();

  const gradients = [
    'from-amber-700 to-amber-900',
    'from-gray-700 to-gray-900',
    'from-amber-600 to-amber-800',
    'from-gray-600 to-gray-800',
    'from-amber-500 to-amber-700',
    'from-gray-700 to-gray-900',
  ];

  return (
    <div className=" bg-gray-50">
      {/* 헤더 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">소식</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">천태사의 최신 소식을 확인하세요</p>
          </div>

          {/* 컨텐츠 */}
          {isLoading && (
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
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">소식을 불러오는데 실패했습니다.</p>
              <p className="text-gray-600 mt-2">잠시 후 다시 시도해주세요.</p>
            </div>
          )}

          {newsList && newsList.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsList.map((news, index) => (
                <article
                  key={news.id}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 shadow-lg group"
                >
                  <div className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center relative overflow-hidden`}>
                    <i className="fas fa-newspaper text-white text-5xl transition-transform duration-500 group-hover:scale-110" aria-hidden="true"></i>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" aria-hidden="true"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <i className="fas fa-calendar mr-2" aria-hidden="true"></i>
                      <time dateTime={news.createdAt?.replace(/ /g, '-')}>{news.createdAt}</time>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-700 transition-colors">
                      {news.title}
                    </h3>
                    {news.content && (
                      <p className="text-gray-600 mb-4 line-clamp-3">{news.content}</p>
                    )}
                    <Link
                      href={`/news/${news.id}`}
                      className="text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded px-2 py-1"
                      aria-label={`${news.title} 자세히 보기`}
                    >
                      자세히 보기 <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {newsList && newsList.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">등록된 소식이 없습니다.</p>
            </div>
          )}

          {/* 홈으로 버튼 */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="홈으로 돌아가기"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

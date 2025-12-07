'use client';

import Link from 'next/link';
import { useRecentNews } from '@/hooks';

const gradients = [
  'from-amber-700 to-amber-900',
  'from-gray-700 to-gray-900',
  'from-amber-600 to-amber-800',
  'from-gray-600 to-gray-800',
  'from-amber-500 to-amber-700',
  'from-gray-700 to-gray-900',
];

export function News() {
  const { data: newsPosts, isLoading, error } = useRecentNews(6);

  return (
    <section 
      id="news" 
      className="py-20 bg-gray-50"
      aria-labelledby="news-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 
            id="news-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif"
          >
            소식 & 공지사항
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4" aria-hidden="true"></div>
          <p className="text-gray-600 text-lg">천태사의 최신 소식을 확인하세요</p>
        </header>

        {/* 로딩 상태 */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
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
        ) : error ? (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <i className="fas fa-exclamation-circle text-red-500 text-3xl mb-3" aria-hidden="true"></i>
              <p className="text-red-600 text-lg font-semibold mb-2">소식을 불러오는데 실패했습니다</p>
              <p className="text-gray-600">잠시 후 다시 시도해주세요.</p>
            </div>
        </div>
        ) : newsPosts && newsPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div
                  className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}
                  aria-hidden="true"
              >
                  <i className="fas fa-newspaper text-white text-5xl" aria-hidden="true"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="fas fa-calendar mr-2" aria-hidden="true"></i>
                    <time dateTime={post.createdAt?.replace(/ /g, '-')}>{post.createdAt}</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-700 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                  {post.content && (
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                  )}
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
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto">
              <i className="fas fa-info-circle text-gray-400 text-3xl mb-3" aria-hidden="true"></i>
              <p className="text-gray-600 text-lg">등록된 소식이 없습니다.</p>
            </div>
          </div>
        )}

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


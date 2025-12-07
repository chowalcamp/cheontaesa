'use client';

import Link from 'next/link';
import { useNoticeList } from '@/hooks';

export default function NoticePage() {
  const { data: noticeList, isLoading, error } = useNoticeList();

  return (
    <div className="bg-gray-50">
      {/* 헤더 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mt-10">공지사항</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">천태사의 중요한 공지사항을 확인하세요</p>
          </div>

          {/* 컨텐츠 */}
          {isLoading && (
            <div className="bg-white rounded-2xl overflow-hidden animate-pulse shadow-lg">
              <div className="divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="h-6 bg-gray-300 rounded w-1/4 mb-3"></div>
                        <div className="h-5 bg-gray-300 rounded mb-3"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">공지사항을 불러오는데 실패했습니다.</p>
              <p className="text-gray-600 mt-2">잠시 후 다시 시도해주세요.</p>
            </div>
          )}

          {noticeList && noticeList.length > 0 && (
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg p-8">
              <div className="divide-y divide-gray-200">
                {noticeList.map((notice) => (
                  <Link
                    key={notice.id}
                    href={`/notice/${notice.id}`}
                    className="block p-6 hover:bg-gray-50 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset rounded-lg"
                    aria-label={`${notice.title} 자세히 보기`}
                  >
                    <div className="flex items-start gap-4">

                      {/* 컨텐츠 */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                          {notice.title}
                        </h3>

                        {notice.content && (
                          <p className="text-gray-600 mb-3 line-clamp-2">{notice.content}</p>
                        )}

                        <div className="flex items-center text-sm text-gray-500">
                          <i className="fas fa-calendar mr-2" aria-hidden="true"></i>
                          <time dateTime={notice.createdAt?.replace(/ /g, '-')}>{notice.createdAt}</time>
                        </div>
                      </div>

                      {/* 화살표 아이콘 */}
                      <div className="flex-shrink-0 text-gray-400 group-hover:text-amber-700 transition-colors" aria-hidden="true">
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </article>
          )}

          {noticeList && noticeList.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">등록된 공지사항이 없습니다.</p>
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

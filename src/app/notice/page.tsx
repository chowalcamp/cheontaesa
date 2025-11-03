import { Suspense } from 'react';
import Link from 'next/link';
import { getNoticeList } from '@/lib/api';

async function NoticeListContent() {
  const noticeList = await getNoticeList();

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg p-8">
      <div className="divide-y divide-gray-200">
        {noticeList.map((notice) => (
          <Link
            key={notice.id}
            href={`/notice/${notice.id}`}
            className="block p-6 hover:bg-gray-50 transition-all duration-200 group"
          >
            <div className="flex items-start gap-4">
              {/* 중요 표시 */}
              {notice.isImportant && (
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-red-100 text-red-600 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                    <i className="fas fa-exclamation"></i>
                  </span>
                </div>
              )}

              {/* 컨텐츠 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  {notice.category && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-amber-100 text-amber-800">
                      {notice.category}
                    </span>
                  )}
                  {notice.isImportant && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-600">
                      중요
                    </span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {notice.title}
                </h3>

                <p className="text-gray-600 mb-3 line-clamp-2">{notice.content}</p>

                <div className="flex items-center text-sm text-gray-500">
                  <i className="fas fa-calendar mr-2"></i>
                  <span>{notice.date}</span>
                </div>
              </div>

              {/* 화살표 아이콘 */}
              <div className="flex-shrink-0 text-gray-400 group-hover:text-amber-700 transition-colors">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}

function LoadingSkeleton() {
  return (
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
  );
}

export default function NoticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mt-10">공지사항</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">천태사의 중요한 공지사항을 확인하세요</p>
          </div>

          {/* 컨텐츠 */}
          <Suspense fallback={<LoadingSkeleton />}>
            <NoticeListContent />
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




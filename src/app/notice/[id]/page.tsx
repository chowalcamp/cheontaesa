'use client';

import { Suspense, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useNoticeDetail, useRecentNotices } from '@/hooks';
import type { Notice } from '@/types';

function NoticeDetailContent({ id }: { id: string }) {
  const { data: notice, isLoading, isError } = useNoticeDetail(id);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (isError || !notice) {
    notFound();
  }

  return (
    <>
      {/* 메인 컨텐츠 */}
      <article className="bg-white mx-auto rounded-2xl overflow-hidden shadow-lg">
        <div className="py-12 px-4 md:px-12">

          {/* 제목 */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
            {notice.title}
          </h1>

          {/* 메타 정보 */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center mr-6 mb-2">
              <i className="fas fa-calendar mr-2"></i>
              <span>{notice.createdAt}</span>
            </div>
            {notice.author && (
              <div className="flex items-center mr-6 mb-2">
                <i className="fas fa-user mr-2"></i>
                <span>{notice.author}</span>
              </div>
            )}
            {notice.views && (
              <div className="flex items-center mb-2">
                <i className="fas fa-eye mr-2"></i>
                <span>조회 {notice.views}</span>
              </div>
            )}
          </div>

          {/* 본문 */}
          <div className="prose prose-lg max-w-none mb-8">
            {notice.content ? (
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {notice.content}
            </div>
            ) : (
              <div className="text-gray-500 italic py-8">
                내용이 없습니다.
              </div>
            )}
          </div>

          {/* 첨부파일 */}
          {notice.attachments && notice.attachments.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">첨부파일</h3>
              <div className="space-y-2">
                {notice.attachments.map((file, index) => (
                  <a
                    key={index}
                    href={file.url}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md"
                  >
                    <i className="fas fa-file-download text-amber-700"></i>
                    <span className="text-gray-700">{file.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* 목록으로 버튼 */}
      <div className="text-center flex gap-4 justify-center">
        <Link
          href="/notice"
          className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <i className="fas fa-arrow-left"></i>
          <span>목록으로</span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <i className="fas fa-home"></i>
          <span>홈으로</span>
        </Link>
      </div>
    </>
  );
}

function RelatedNotices({ currentId }: { currentId: string }) {
  const { data: recentNotices, isLoading, isError } = useRecentNotices(4);

  if (isLoading || isError || !recentNotices) return null;

  const filtered = recentNotices.filter((n: Notice) => n.id !== currentId).slice(0, 3);

  if (filtered.length === 0) return null;

  return (
    <div className="mt-12 bg-gray-50 rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 font-serif">최근 공지사항</h2>
      <div className="space-y-4">
        {filtered.map((notice) => (
          <Link
            key={notice.id}
            href={`/notice/${notice.id}`}
            className="block bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 shadow-md"
          >
            <div className="flex items-start gap-3 mb-2">
              <span className="text-sm text-gray-500">{notice.createdAt}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 hover:text-amber-700 transition-colors">
              {notice.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden animate-pulse shadow-lg">
      <div className="p-8 md:p-12">
        <div className="h-8 bg-gray-300 rounded w-1/4 mb-6"></div>
        <div className="h-12 bg-gray-300 rounded mb-6"></div>
        <div className="h-6 bg-gray-300 rounded w-1/3 mb-8"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

export default function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 컨텐츠 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<LoadingSkeleton />}>
            <NoticeDetailContent id={id} />
            <RelatedNotices currentId={id} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}




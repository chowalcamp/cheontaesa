'use client';

import { Suspense, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useNewsDetail, useRecentNews } from '@/hooks';
import type { BlogPost } from '@/types';

function NewsDetailContent({ id }: { id: string }) {
  const { data: news, isLoading, isError } = useNewsDetail(id);

  console.log('NewsDetailContent - news:', news); // 디버깅용

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (isError || !news) {
    notFound();
  }

  return (
    <>
      {/* 메인 컨텐츠 */}
      <article className="bg-white rounded-2xl overflow-hidden mb-12 shadow-lg">
        {/* 헤더 이미지 */}
        <div className="h-96 bg-gradient-to-br from-gray-800 to-amber-800 flex items-center justify-center relative overflow-hidden group">
          <i className="fas fa-newspaper text-white text-8xl transition-transform duration-500 group-hover:scale-110"></i>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="p-8 md:p-12">
          {/* 날짜 */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <i className="fas fa-calendar mr-2"></i>
            <span>{news.createdAt}</span>
            {news.author && (
              <>
                <span className="mx-3">|</span>
                <i className="fas fa-user mr-2"></i>
                <span>{news.author}</span>
              </>
            )}
            {news.views && (
              <>
                <span className="mx-3">|</span>
                <i className="fas fa-eye mr-2"></i>
                <span>{news.views}</span>
              </>
            )}
          </div>

          {/* 제목 */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-serif">
            {news.title}
          </h1>

          {/* 본문 */}
          <div className="prose prose-lg max-w-none">
            {news.content ? (
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {news.content}
              </div>
            ) : (
              <div className="text-gray-500 italic py-8">
                내용이 없습니다.
              </div>
            )}
          </div>
        </div>
      </article>

      {/* 목록으로 버튼 */}
      <div className="text-center flex gap-4 justify-center">
        <Link
          href="/news"
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

function RelatedNews({ currentId }: { currentId: string }) {
  const { data: recentNews, isLoading, isError } = useRecentNews(4);

  if (isLoading || isError || !recentNews) return null;

  const filtered = recentNews.filter((n: BlogPost) => n.id !== currentId).slice(0, 3);

  if (filtered.length === 0) return null;

  return (
    <div className="mt-12 bg-gray-50 rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">관련 소식</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((news) => (
          <Link
            key={news.id}
            href={`/news/${news.id}`}
            className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 shadow-md"
          >
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>{news.createdAt}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-amber-700 transition-colors">
              {news.title}
            </h3>
            {news.content && (
              <p className="text-gray-600 text-sm line-clamp-2">{news.content}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden animate-pulse shadow-lg">
      <div className="h-96 bg-gray-300"></div>
      <div className="p-8 md:p-12">
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-6"></div>
        <div className="h-10 bg-gray-300 rounded mb-8"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

export default function NewsDetailPage({
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
            <NewsDetailContent id={id} />
            <RelatedNews currentId={id} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}




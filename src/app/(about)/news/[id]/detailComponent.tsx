'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import type { NewsItem } from '@/app/(about)/news/types'
import '@/styles/about/newsDetail.css'

export default function NewsDetailComponent({ news }: { news: NewsItem }) {
  const router = useRouter()

  return (
    <div className="news-detail-container">
      {/* Header Section */}
      <div className="news-detail-header">
        <h1 className="news-detail-title">{news.title}</h1>
        <div className="news-detail-meta">
          <div className="news-detail-info">
            <span>작성자: 관리자</span>
            <span>작성일: {news.createdAt}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="news-detail-content"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />

      {/* Footer Section */}
      <div className="news-detail-footer">
        <button
          className="news-back-button"
          onClick={() => router.back()}
        >
          목록으로 돌아가기
        </button>
      </div>
    </div>
  )
}
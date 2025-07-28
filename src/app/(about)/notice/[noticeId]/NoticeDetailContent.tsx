'use client'

import { useRouter } from 'next/navigation'
import type { INoticeItem } from '@/app/(about)/notice/types'
import '@/styles/about/noticeDetailContent.css'

export function NoticeDetailContent({ notice }: { notice: INoticeItem }) {
  const router = useRouter()

  return (
    <div className="notice-detail-content-container">
      {/* Header Section */}
      <div className="notice-detail-content-header">
        <h1 className="notice-detail-content-title">{notice.title}</h1>
        <div className="notice-detail-content-meta">
          <div className="notice-detail-content-info">
            <span>작성자: 관리자</span>
            <span>작성일: {notice.createdAt}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="notice-detail-content-body"
        dangerouslySetInnerHTML={{ __html: notice.content }}
      />

      {/* Footer Section */}
      <div className="notice-detail-content-footer">
        <button
          className="notice-detail-content-back-button"
          onClick={() => router.back()}
        >
          목록으로 돌아가기
        </button>
      </div>
    </div>
  )
}
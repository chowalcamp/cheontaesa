'use client' // 클라이언트 컴포넌트 지시어

import { useRouter } from 'next/navigation'
import type { INoticeItem } from '@/app/(about)/notice/types'

export function NoticeDetailContent({ notice }: { notice: INoticeItem }) {
  const router = useRouter()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative min-h-[500px] shadow-md">
      {/* Header Section */}
      <div className="border-b-2 border-gray-200 pb-6">
        <h1 className="text-2xl font-bold mb-4">{notice.title}</h1>
        <div className="flex justify-between text-gray-600 text-sm">
          <div className="space-x-4">
            <span>작성자: 관리자</span>
            <span>작성일: {notice.createdAt}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="py-8 whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: notice.content }}
      />

      {/* Footer Section */}
      <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2">
        <button
          className="px-6 py-2 bg-[#965745] text-white rounded-lg font-nanum"
          onClick={() => router.back()}
        >
          목록으로 돌아가기
        </button>
      </div>
    </div>
  )
}

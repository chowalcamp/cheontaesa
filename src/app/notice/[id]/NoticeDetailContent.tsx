"use client"; // 클라이언트 컴포넌트 지시어

import { useRouter } from "next/navigation";
import type { Notice } from "./types";

export function NoticeDetailContent({ notice }: { notice: Notice }) {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="border-b-2 border-gray-200 pb-6">
        <h1 className="text-2xl font-bold mb-4">{notice.title}</h1>
        <div className="flex justify-between text-gray-600 text-sm">
          <div className="space-x-4">
            <span>작성자: {notice.author}</span>
            <span>작성일: {notice.createdAt}</span>
          </div>
          <div>
            <span>조회수: {notice.views}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8">
        <div className="whitespace-pre-line">{notice.content}</div>
      </div>

      {/* Footer Section */}
      <div className="mt-8 flex justify-center space-x-4">
        <button
          className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          onClick={() => router.back()}
        >
          목록
        </button>
      </div>
    </div>
  );
}

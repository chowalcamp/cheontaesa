"use client"; // 클라이언트 컴포넌트 지시어

import { useRouter } from "next/navigation";
import type { Notice } from "./types";

export function NoticeDetailContent({ notice }: { notice: Notice }) {
  const router = useRouter();

  return (
    <div
      className="max-w-4xl mx-auto px-4 py-8 relative"
      style={{
        height: "100%",
        minHeight: "500px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        padding: "50px",
      }}
    >
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
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button
          className="px-6 py-2"
          style={{
            background: '#965745',
            color: '#FFFFFF',
            borderRadius: '10px',
            fontFamily: 'NanumMyeongjo',
          }}
          onClick={() => router.back()}
        >
          목록으로 돌아가기
        </button>
      </div>
    </div>
  );
}

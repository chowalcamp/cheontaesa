"use client";

import React, { useState } from "react";
import Pagination from "../../../component/pagination/Pagination";
import notices from "./data";


export default function NoticePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 한 페이지에 표시할 항목 수
  const totalPages = Math.ceil(notices.length / itemsPerPage); // 총 페이지 수

  // 현재 페이지의 데이터 가져오기
  const currentData = notices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <table className="w-full border-t border-b text-left text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 w-16">No</th>
            <th className="py-2 px-4">제목</th>
            <th className="py-2 px-4 w-32">작성시간</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((notice) => (
            <tr key={notice.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 text-center">{notice.id}</td>
              <td className="py-2 px-4">
                <a href={`/notice/${notice.id}`} className="text-blue-600 hover:underline">
                  {notice.title}
                </a>
                {notice.isNew && <span className="ml-2 text-red-500 font-bold text-xs">N</span>}
              </td>
              <td className="py-2 px-4 text-center">{notice.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 컴포넌트 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

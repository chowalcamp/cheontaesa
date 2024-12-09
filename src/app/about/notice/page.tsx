"use client";

import React, { useState } from "react";
import Pagination from "../../../component/pagination/Pagination";

const notices = [
    { id: 400, title: "불기 2568(2024)년 승구영신기도 동참안내", createdAt: "2024-12-03", isNew: true },
    { id: 401, title: "불기 2568(2024)년 동지기도 동참안내", createdAt: "2024-12-03", isNew: true },
    { id: 402, title: "불기 2568(2024)년 제2차 수능·학업성취 백일기도", createdAt: "2024-10-27", isNew: false },
    { id: 403, title: "불기 2568(2024)년 동안거기도 동참안내", createdAt: "2024-10-27", isNew: false },
    { id: 404, title: "불기 2568(2024)년 달마사 노을빛 음악산책", createdAt: "2024-10-06", isNew: false },
    { id: 405, title: "불기 2568(2024)년 수능·학업성취 성지순례 동참안내", createdAt: "2024-10-06", isNew: false },
    { id: 406, title: "불기 2568(2024)년 중앙절합동천도재 동참안내", createdAt: "2024-09-19", isNew: false },
    { id: 407, title: "불기 2569(2025)년 달마사 불학원 경전반 개강 안내", createdAt: "2024-09-09", isNew: false },
    { id: 408, title: "불기 2568(2024)년 저녁예불시간 변경 안내", createdAt: "2024-09-08", isNew: false },
    { id: 409, title: "불기 2568(2024)년 추석합동차례 동참 안내", createdAt: "2024-08-14", isNew: false },
    { id: 410, title: "불기 2568(2024)년 승구영신기도 동참안내", createdAt: "2024-12-03", isNew: true },
    { id: 411, title: "불기 2568(2024)년 동지기도 동참안내", createdAt: "2024-12-03", isNew: true },
    { id: 412, title: "불기 2568(2024)년 제2차 수능·학업성취 백일기도", createdAt: "2024-10-27", isNew: false },
    { id: 413, title: "불기 2568(2024)년 동안거기도 동참안내", createdAt: "2024-10-27", isNew: false },
    { id: 414, title: "불기 2568(2024)년 달마사 노을빛 음악산책", createdAt: "2024-10-06", isNew: false },
    { id: 415, title: "불기 2568(2024)년 수능·학업성취 성지순례 동참안내", createdAt: "2024-10-06", isNew: false },
    { id: 416, title: "불기 2568(2024)년 중앙절합동천도재 동참안내", createdAt: "2024-09-19", isNew: false },
    { id: 417, title: "불기 2569(2025)년 달마사 불학원 경전반 개강 안내", createdAt: "2024-09-09", isNew: false },
    { id: 418, title: "불기 2568(2024)년 저녁예불시간 변경 안내", createdAt: "2024-09-08", isNew: false },
    { id: 419, title: "불기 2568(2024)년 추석합동차례 동참 안내", createdAt: "2024-08-14", isNew: false },
    { id: 420, title: "불기 2568(2024)년 승구영신기도 동참안내", createdAt: "2024-12-03", isNew: true },
    { id: 421, title: "불기 2568(2024)년 동지기도 동참안내", createdAt: "2024-12-03", isNew: true },
    { id: 422, title: "불기 2568(2024)년 제2차 수능·학업성취 백일기도", createdAt: "2024-10-27", isNew: false },
    { id: 423, title: "불기 2568(2024)년 동안거기도 동참안내", createdAt: "2024-10-27", isNew: false }
];

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
      <h1 className="text-2xl font-bold mb-6">공지사항</h1>
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
                <a href={`/about/notice/${notice.id}`} className="text-blue-600 hover:underline">
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

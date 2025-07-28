"use client";

import React, { useState } from "react";
import Pagination from "../../../component/pagination/Pagination";
import type { INoticeItem } from "./types";
import "@/styles/about/noticeList.css";

type NoticeListProps = {
  notices: INoticeItem[];
};

export default function NoticeListComponent({ notices }: NoticeListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (!notices || notices.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        공지사항이 없습니다.
      </div>
    );
  }

  const totalPages = Math.ceil(notices.length / itemsPerPage);

  const currentData = notices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="notice-list-container">
      <table className="notice-table">
        <thead>
          <tr className="notice-table-header">
            <th className="notice-th-no">No</th>
            <th className="notice-th-title">제목</th>
            <th className="notice-th-date">작성시간</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((notice, index) => (
            <tr key={notice.id} className="notice-table-row">
              <td className="notice-td-no">
                {index + 1 + (currentPage - 1) * itemsPerPage}
              </td>
              <td className="notice-td-title">
                <a href={`/notice/${notice.id}`} className="notice-link">
                  {notice.title}
                </a>
              </td>
              <td className="notice-td-date">{notice.createdAt}</td>
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
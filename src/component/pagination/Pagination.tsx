"use client";

import React from "react";
import "@/styles/pagination.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // 현재 페이지를 기준으로 표시할 페이지 범위를 계산
  const getDisplayedPages = () => {
    const pages = [];
    const maxVisiblePages = 5; // 한 번에 표시할 최대 페이지 수
    const start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2)); // 시작 페이지
    const end = Math.min(totalPages, start + maxVisiblePages - 1); // 종료 페이지

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const displayedPages = getDisplayedPages();

  return (
    <div className="pagination-container">
      {/* Previous 버튼 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`pagination-nav-button ${
          currentPage === 1 ? "pagination-nav-button-disabled" : ""
        }`}
      >
        Previous
      </button>

      {/* 페이지 번호 버튼들 */}
      <div className="pagination-pages">
        {/* 첫 번째 페이지로 이동 */}
        {displayedPages[0] > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="pagination-page-button"
            >
              1
            </button>
            <span className="pagination-ellipsis">...</span>
          </>
        )}

        {/* 현재 범위의 페이지 번호 */}
        {displayedPages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`pagination-page-button ${
              currentPage === page ? "pagination-page-button-active" : ""
            }`}
          >
            {page}
          </button>
        ))}

        {/* 마지막 페이지로 이동 */}
        {displayedPages[displayedPages.length - 1] < totalPages && (
          <>
            <span className="pagination-ellipsis">...</span>
            <button
              onClick={() => onPageChange(totalPages)}
              className="pagination-page-button"
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      {/* Next 버튼 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`pagination-nav-button ${
          currentPage === totalPages ? "pagination-nav-button-disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
}
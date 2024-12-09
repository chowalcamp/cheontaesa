"use client";

import React from "react";

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
    <div className="flex sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
      {/* Previous 버튼 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-gray-600 border rounded hover:bg-gray-100 ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </button>

      {/* 페이지 번호 버튼들 */}
      <div className="flex flex-wrap justify-center gap-2">
        {/* 첫 번째 페이지로 이동 */}
        {displayedPages[0] > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
            >
              1
            </button>
            <span className="px-2 text-gray-500">...</span>
          </>
        )}

        {/* 현재 범위의 페이지 번호 */}
        {displayedPages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded ${
              currentPage === page
                ? "bg-gray-800 text-white"
                : "border text-gray-600 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* 마지막 페이지로 이동 */}
        {displayedPages[displayedPages.length - 1] < totalPages && (
          <>
            <span className="px-2 text-gray-500">...</span>
            <button
              onClick={() => onPageChange(totalPages)}
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
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
        className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-gray-600 border rounded hover:bg-gray-100 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
}

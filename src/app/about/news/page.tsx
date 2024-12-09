"use client";

import React, { useState } from "react";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link"; // Link 컴포넌트 import

// 초기 더미 데이터
const initialData = [
  {
    id: 1,
    title: "불기 2568(2024)년 달마사 정초합동 천도재 봉행",
    date: "2024-02-24",
    image: "/images/news/news1.jpeg",
  },
  {
    id: 2,
    title: "불기 2568(2024)년 2월 선지식초청 일요법회 - 원통스님",
    date: "2024-02-18",
    image: "/images/news/news2.jpeg",
  },
  {
    id: 3,
    title: "[신중기도] 불기2566년 음력2월 신중기도 봉행",
    date: "2023-12-14",
    image: "/images/news/news3.jpeg",
  },
  {
    id: 4,
    title: "[신중기도] 불기2566년 음력2월 신중기도 봉행",
    date: "2023-12-14",
    image: "/images/news/news4.jpeg",
  },
  {
    id: 5,
    title: "[신중기도] 불기2566년 음력2월 신중기도 봉행",
    date: "2023-12-14",
    image: "/images/news/news4.jpeg",
  },
  {
    id: 6,
    title: "[신중기도] 불기2566년 음력2월 신중기도 봉행",
    date: "2023-12-14",
    image: "/images/news/news4.jpeg",
  },
];

export default function NewsPage() {
  const [data, setData] = useState(initialData); // 초기 데이터
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터 여부

  const fetchMoreData = () => {
    // 불러올 데이터가 없으면 종료
    if (data.length >= initialData.length) {
      setHasMore(false); // 더 이상 불러올 데이터가 없음을 설정
      return;
    }

    // 새로운 데이터를 추가하는 로직
    const newData = initialData.slice(data.length, data.length + 6); // 6개씩 추가
    setTimeout(() => {
      setData((prevData) => [...prevData, ...newData]);
    }, 1500); // 데이터를 불러오는 데 약간의 지연 시간 추가
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">주요소식</h1>
      <InfiniteScroll
        dataLength={data.length} // 현재 데이터 길이
        next={fetchMoreData} // 데이터를 더 불러오는 함수
        hasMore={hasMore} // 더 불러올 데이터가 있는지 여부
        loader={<h4>Loading...</h4>} // 로딩 메시지
        endMessage={
          <p className="text-center mt-4">
            <b>더 이상 불러올 데이터가 없습니다.</b>
          </p>
        }
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {data.map((item) => (
          <Link key={item.id} href={`/about/news/${item.id}`} passHref>
            <div className="border rounded-lg overflow-hidden shadow-md cursor-pointer">
              <Image
                src={item.image}
                alt={item.title}
                width={400} // 기본 width 지정
                height={300} // 기본 height 지정
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500 mt-2">{item.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </InfiniteScroll>
    </div>
  );
}

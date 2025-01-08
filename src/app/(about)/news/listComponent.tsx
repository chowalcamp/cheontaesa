'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroll-component'
import Link from 'next/link'
import { getNews } from '@/apis/news'

export type NewsItem = {
  id: number
  title: string
  date: string
  content: string
  images: string[] | null
  createdAt: string
  updatedAt: string | null
  deletedAt: string | null
}

export default function NewsListComponent({
  initialData,
}: {
  initialData: NewsItem[]
}) {
  const [data, setData] = useState(initialData) // 초기 데이터
  const [hasMore, setHasMore] = useState(true) // 더 불러올 데이터 여부

  const fetchMoreData = async () => {
    try {
      const response = await getNews() // 데이터 추가 요청

      // 더 이상 불러올 데이터가 없으면 hasMore를 false로 설정
      if (response.length === 0) {
        setHasMore(false)
        return
      }

      // 중복 데이터 제거 및 새로운 데이터 추가
      const uniqueData = response.filter(
        (item: NewsItem) =>
          !data.some((existing: NewsItem) => existing.id === item.id),
      )
      if (uniqueData.length === 0) {
        setHasMore(false) // 새로운 데이터가 없으면 더 불러오지 않음
      } else {
        setData((prevData) => [...prevData, ...uniqueData])
      }
    } catch (error) {
    }
  }

  const extractImageUrl = (content: string) => {
    const imgTagMatch = content?.match(/<img[^>]+src="([^">]+)"/)
    return imgTagMatch ? imgTagMatch[1] : '' // 이미지 URL 추출
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <div className="max-w-4xl text-center mt-6 justify-center">
          <p>더 이상 불러올 데이터가 없습니다.</p>
        </div>
      }
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      {data.map((item) => (
        <Link key={item.id} href={`/news/${item.id}`} passHref>
          <div className="border overflow-hidden shadow-md cursor-pointer">
            <Image
              src={extractImageUrl(item.content)}
              alt={item.title}
              width={300}
              height={300}
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
  )
}

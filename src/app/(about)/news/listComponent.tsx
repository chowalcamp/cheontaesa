'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroll-component'
import Link from 'next/link'
import { getNews } from '@/apis/news'
import '@/styles/about/newsList.css'

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
  const [data, setData] = useState(initialData)
  const [hasMore, setHasMore] = useState(true)

  const fetchMoreData = async () => {
    try {
      const response = await getNews()

      if (response.length === 0) {
        setHasMore(false)
        return
      }

      const uniqueData = response.filter(
        (item: NewsItem) =>
          !data.some((existing: NewsItem) => existing.id === item.id),
      )
      if (uniqueData.length === 0) {
        setHasMore(false)
      } else {
        setData((prevData) => [...prevData, ...uniqueData])
      }
    } catch (error) {
    }
  }

  const extractImageUrl = (content: string) => {
    const imgTagMatch = content?.match(/<img[^>]+src="([^">]+)"/)
    return imgTagMatch ? imgTagMatch[1] : ''
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4 className="loading-text">Loading...</h4>}
      endMessage={
        <div className="end-message">
          <p>더 이상 불러올 데이터가 없습니다.</p>
        </div>
      }
      className="news-grid"
    >
      {data.map((item) => (
        <Link key={item.id} href={`/news/${item.id}`} passHref>
          <div className="news-card">
            <Image
              src={extractImageUrl(item.content)}
              alt={item.title}
              width={300}
              height={300}
              className="news-image"
            />
            <div className="news-content">
              <h2 className="news-title">{item.title}</h2>
              <p className="news-date">{item.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </InfiniteScroll>
  )
}
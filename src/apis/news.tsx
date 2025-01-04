import type { NewsItem } from '@/app/(about)/news/types'
import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getNewsDetail = async (id: number): Promise<NewsItem> => {
  const response = await axios.get<NewsItem>(`${BASE_URL}/news/${id}`)
  return response.data
}

export const getNews = async () => {
  const response = await axios.get(`${BASE_URL}/news`)
  return response.data
}

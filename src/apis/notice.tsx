import type { INoticeItem } from '@/app/(about)/notice/types'
import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getNoticeList = async (): Promise<INoticeItem[]> => {
  try {
    const response = await axios.get<INoticeItem[]>(`${BASE_URL}/notice`)
    return response.data
  } catch (error) {
    throw new Error('공지사항 목록을 가져오는 데 실패했습니다.')
  }
}

export const getNoticeDetail = async (id: number): Promise<INoticeItem> => {
  const response = await axios.get<INoticeItem>(`${BASE_URL}/notice/${id}`)
  return response.data
}

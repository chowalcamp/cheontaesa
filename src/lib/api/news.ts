import axiosInstance from '@/lib/axios';
import type { NewsDetail, BlogPost } from '@/types';

// 뉴스 목록 조회
export async function getNewsList(): Promise<BlogPost[]> {
  try {
    const response = await axiosInstance.get<BlogPost[]>('/news');
    return response.data;
  } catch (error) {
    console.error('뉴스 목록 조회 실패:', error);
    throw error;
  }
}

// 뉴스 상세 조회
export async function getNewsDetail(id: string): Promise<NewsDetail | null> {
  try {
    const response = await axiosInstance.get<BlogPost>(`/news/${id}`);
    return response.data as NewsDetail;
  } catch (error) {
    console.error('뉴스 상세 조회 실패:', error);
    return null;
  }
}

// 최근 뉴스 조회
export async function getRecentNews(limit: number = 6): Promise<BlogPost[]> {
  try {
    const response = await axiosInstance.get<BlogPost[]>('/news');
    return response.data.slice(0, limit);
  } catch (error) {
    console.error('최근 뉴스 조회 실패:', error);
    throw error;
  }
}

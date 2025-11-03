import axiosInstance from '@/lib/axios';
import type { BlogPost } from '@/types';

// 블로그 포스트 목록 조회
export async function getBlogPosts(limit?: number) {
  try {
    const response = await axiosInstance.get<BlogPost[]>('/blog', {
      params: { limit },
    });
    return response.data;
  } catch (error) {
    console.error('블로그 포스트 조회 실패:', error);
    throw error;
  }
}

// 블로그 포스트 상세 조회
export async function getBlogPost(id: string) {
  try {
    const response = await axiosInstance.get<BlogPost>(`/blog/${id}`);
    return response.data;
  } catch (error) {
    console.error('블로그 포스트 상세 조회 실패:', error);
    throw error;
  }
}


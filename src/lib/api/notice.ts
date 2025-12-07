import axiosInstance from '@/lib/axios';
import type { Notice, NoticeDetail } from '@/types';

// 공지사항 목록 조회
export async function getNoticeList(): Promise<Notice[]> {
  try {
    const response = await axiosInstance.get<Notice[]>('/notice');
    return response.data;
  } catch (error) {
    console.error('공지사항 목록 조회 실패:', error);
    throw error;
  }
}

// 공지사항 상세 조회
export async function getNoticeDetail(id: string): Promise<NoticeDetail | null> {
  try {
    const response = await axiosInstance.get<Notice>(`/notice/${id}`);
    return response.data as NoticeDetail;
  } catch (error) {
    console.error('공지사항 상세 조회 실패:', error);
    return null;
  }
}

// 최근 공지사항 조회
export async function getRecentNotices(limit: number = 5): Promise<Notice[]> {
  try {
    const response = await axiosInstance.get<Notice[]>('/notice', {
      params: { recent: 'true' },
    });
    return response.data.slice(0, limit);
  } catch (error) {
    console.error('최근 공지사항 조회 실패:', error);
    throw error;
  }
}

// 중요 공지사항 조회
export async function getImportantNotices(): Promise<Notice[]> {
  try {
    const response = await axiosInstance.get<Notice[]>('/notice');
    return response.data;
  } catch (error) {
    console.error('중요 공지사항 조회 실패:', error);
    throw error;
  }
}

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as newsApi from '@/lib/api/news';
import * as noticeApi from '@/lib/api/notice';

// ============================================
// News Hooks
// ============================================

// 뉴스 목록 조회
export function useNewsList() {
  return useQuery({
    queryKey: ['news', 'list'],
    queryFn: newsApi.getNewsList,
  });
}

// 뉴스 상세 조회
export function useNewsDetail(id: string) {
  return useQuery({
    queryKey: ['news', 'detail', id],
    queryFn: () => newsApi.getNewsDetail(id),
    enabled: !!id,
  });
}

// 최근 뉴스 조회
export function useRecentNews(limit: number = 6) {
  return useQuery({
    queryKey: ['news', 'recent', limit],
    queryFn: () => newsApi.getRecentNews(limit),
  });
}

// ============================================
// Notice Hooks
// ============================================

// 공지사항 목록 조회
export function useNoticeList() {
  return useQuery({
    queryKey: ['notices', 'list'],
    queryFn: noticeApi.getNoticeList,
  });
}

// 공지사항 상세 조회
export function useNoticeDetail(id: string) {
  return useQuery({
    queryKey: ['notices', 'detail', id],
    queryFn: () => noticeApi.getNoticeDetail(id),
    enabled: !!id,
  });
}

// 최근 공지사항 조회
export function useRecentNotices(limit: number = 5) {
  return useQuery({
    queryKey: ['notices', 'recent', limit],
    queryFn: () => noticeApi.getRecentNotices(limit),
  });
}

// 중요 공지사항 조회
export function useImportantNotices() {
  return useQuery({
    queryKey: ['notices', 'important'],
    queryFn: noticeApi.getImportantNotices,
  });
}


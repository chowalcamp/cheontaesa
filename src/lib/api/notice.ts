import type { Notice, NoticeDetail } from '@/types';

// 임시 공지사항 데이터
const noticeData: NoticeDetail[] = [
  {
    id: '1',
    title: '동절기 방문 시간 변경 안내',
    content: `겨울철 일몰 시간에 맞춰 사찰 방문 시간이 일부 변경되었습니다.

변경 전: 09:00 ~ 18:00
변경 후: 09:00 ~ 17:00

참고하시기 바랍니다.`,
    date: '2024.12.15',
    category: '안내',
    isImportant: true,
    author: '천태사 관리자',
    views: 580,
  },
  {
    id: '2',
    title: '주차장 이용 안내',
    content: `사찰 방문 시 주차장 이용에 관한 안내입니다.

주차장 위치: 사찰 입구 오른편
주차 가능 대수: 약 30대
대형 버스: 별도 주차 공간 이용 (사전 연락 필수)

문의: 02-000-0000`,
    date: '2024.12.10',
    category: '안내',
    isImportant: false,
    author: '천태사 관리자',
    views: 420,
  },
  {
    id: '3',
    title: '법회 일정 안내',
    content: `정기 법회 일정을 안내드립니다.

매월 초하루, 보름: 오전 10시 법회
매주 수요일: 저녁 7시 법문
매주 일요일: 오전 10시 일요법회

많은 참여 바랍니다.`,
    date: '2024.12.05',
    category: '법회',
    isImportant: true,
    author: '주지 스님',
    views: 650,
  },
  {
    id: '4',
    title: '사찰 시설 보수 공사 안내',
    content: `사찰 시설 보수 공사가 진행됩니다.

공사 기간: 2024년 12월 1일 ~ 12월 20일
공사 내용: 대웅전 지붕 보수
공사 시간: 평일 오전 9시 ~ 오후 5시

방문에 불편을 드려 죄송합니다.`,
    date: '2024.11.28',
    category: '시설',
    isImportant: false,
    author: '천태사 관리자',
    views: 380,
  },
  {
    id: '5',
    title: '코로나19 방역 수칙 안내',
    content: `사찰 방문 시 방역 수칙을 준수해 주시기 바랍니다.

1. 발열, 호흡기 증상이 있으신 분은 방문 자제
2. 실내 마스크 착용 권장
3. 손소독제 비치 (입구)
4. 사회적 거리 유지

여러분의 협조 부탁드립니다.`,
    date: '2024.11.20',
    category: '안내',
    isImportant: true,
    author: '천태사 관리자',
    views: 720,
  },
];

export async function getNoticeList(): Promise<Notice[]> {
  // API 호출 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 100));
  return noticeData;
}

export async function getNoticeDetail(id: string): Promise<NoticeDetail | null> {
  // API 호출 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 100));
  return noticeData.find((notice) => notice.id === id) || null;
}

export async function getRecentNotices(limit: number = 5): Promise<Notice[]> {
  // API 호출 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 100));
  return noticeData.slice(0, limit);
}

export async function getImportantNotices(): Promise<Notice[]> {
  // API 호출 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 100));
  return noticeData.filter((notice) => notice.isImportant);
}


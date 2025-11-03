import type { NewsDetail, BlogPost } from '@/types';

// 임시 소식 데이터
const newsData: NewsDetail[] = [
  {
    id: '1',
    title: '2025년 새해 특별기도 안내',
    content: `새해를 맞이하여 천태사에서 특별기도를 진행합니다.
    
가족의 건강과 사업의 번창을 기원하는 시간에 많은 분들의 참여 바랍니다.

일시: 2025년 1월 20일 ~ 1월 30일
장소: 천태사 대웅전
문의: 02-000-0000`,
    category: '공지사항',
    date: '2025.01.15',
    icon: 'fa-bullhorn',
    author: '천태사 관리자',
    views: 150,
    imageUrl: '/images/news/news1.jpeg',
  },
  {
    id: '2',
    title: '정월 대보름 행사 개최',
    content: `정월 대보름을 맞아 전통 풍속 행사와 특별 법회를 진행합니다.
    
프로그램:
- 오곡밥 나눔
- 달맞이 기도
- 소원등 달기

많은 참여 부탁드립니다.`,
    category: '행사',
    date: '2025.01.10',
    icon: 'fa-lotus',
    author: '천태사 관리자',
    views: 230,
    imageUrl: '/images/news/news2.jpeg',
  },
  {
    id: '3',
    title: '스님의 법문: 마음의 평화 찾기',
    content: `복잡한 현대 사회에서 마음의 평화를 찾는 방법에 대한 주지 스님의 법문을 나눕니다.
    
매주 수요일 저녁 7시 법문이 진행됩니다.
누구나 참여 가능합니다.`,
    category: '법문',
    date: '2025.01.05',
    icon: 'fa-book-open',
    author: '주지 스님',
    views: 320,
    imageUrl: '/images/news/news3.jpeg',
  },
  {
    id: '4',
    title: '템플스테이 프로그램 안내',
    content: `사찰에서의 하루를 경험하는 템플스테이 프로그램에 참여하세요.
    
프로그램:
- 예불 참여
- 108배
- 다도 체험
- 명상
- 사찰음식 체험

예약 접수 중입니다.`,
    category: '모집',
    date: '2024.12.28',
    icon: 'fa-users',
    author: '천태사 관리자',
    views: 450,
    imageUrl: '/images/news/news4.jpeg',
  },
];

export async function getNewsList(): Promise<BlogPost[]> {
  // API 호출 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 100));
  return newsData;
}

export async function getNewsDetail(id: string): Promise<NewsDetail | null> {
  // API 호출 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 100));
  return newsData.find((news) => news.id === id) || null;
}

export async function getRecentNews(limit: number = 6): Promise<BlogPost[]> {
  // API 호출 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 100));
  return newsData.slice(0, limit);
}


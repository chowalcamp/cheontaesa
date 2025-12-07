// 소식 타입 (백엔드 API 응답 구조 - ID는 UUID)
export interface NewsPost {
  id: string; // UUID
  title: string;
  content: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

// BlogPost는 NewsPost의 별칭 (하위 호환성)
export type BlogPost = NewsPost;

// 소식 상세 타입
export interface NewsDetail extends NewsPost {
  author?: string;
  views?: number;
  imageUrl?: string;
}

// 공지사항 타입 (백엔드 API 응답 구조 - ID는 UUID)
export interface Notice {
  id: string; // UUID
  title: string;
  content: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

// 공지사항 상세 타입
export interface NoticeDetail extends Notice {
  author?: string;
  views?: number;
  attachments?: Array<{
    name: string;
    url: string;
  }>;
}

// 갤러리 아이템 타입
export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  imageUrl: string;
}

// 서비스 아이템 타입
export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
  gradient: string;
  imageUrl?: string;
}

// 연락처 정보 타입
export interface ContactInfo {
  address: string;
  phone: string;
  mobile: string;
  hours: string;
  lunchBreak: string;
}



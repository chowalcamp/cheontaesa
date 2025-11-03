// 블로그/소식 타입
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  icon: string;
}

// 소식 상세 타입
export interface NewsDetail extends BlogPost {
  author?: string;
  views?: number;
  imageUrl?: string;
}

// 공지사항 타입
export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  category?: string;
  isImportant?: boolean;
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



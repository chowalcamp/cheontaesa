export interface INotices {
  total: number; // 총 공지 갯수
  currentPage: number; // 현재 페이지
  totalPages: number; // 총 페이지 수
  data: INoticeItem[]; // 공지 리스트
}

export interface INoticeItem {
  id: number;
  adminId: string;
  title: string;
  content: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

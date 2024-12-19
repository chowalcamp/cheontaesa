import NoticeListComponent from "./listComponent";
import { getNoticeList } from "@/app/api/notice/route"; // API 라우트에서 데이터 가져오기
import type { INoticeItem } from "@/app/(about)/notice/types";

export default async function NoticePage() {
  try {
    // 서버에서 공지사항 리스트를 가져옵니다.
    const noticeList: INoticeItem[] = await getNoticeList();
    return <NoticeListComponent notices={noticeList} />;
  } catch (error) {
    console.error("Failed to fetch notices:", error);
    return <div>공지사항을 불러오는 데 실패했습니다.</div>;
  }
}

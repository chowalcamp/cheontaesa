import NoticeListComponent from "./listComponent";
import type { INoticeItem } from "@/app/(about)/notice/types";

export default async function NoticePage() {
  try {
    // API 라우트를 호출하여 공지사항 리스트를 가져옵니다.
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notice`, {
      cache: "no-store", // 항상 최신 데이터를 가져오기
    });

    if (!res.ok) {
      throw new Error("Failed to fetch notice list");
    }

    const noticeList: INoticeItem[] = await res.json();
    return <NoticeListComponent notices={noticeList} />;
  } catch (error) {
    console.error("Failed to fetch notices:", error);
    return <div>공지사항을 불러오는 데 실패했습니다.</div>;
  }
}

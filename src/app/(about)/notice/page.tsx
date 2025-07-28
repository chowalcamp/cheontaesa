import NoticeListComponent from "./listComponent";
import type { INoticeItem } from "@/app/(about)/notice/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "천태사 공지사항",
  description: "천태사 공지사항 정보 및 예약 안내, 천태사 공지사항, 천태사 공지사항 정보, 천태사 공지사항 예약"
}

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
    return (
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        color: '#ef4444',
        fontSize: '1.125rem'
      }}>
        공지사항을 불러오는 데 실패했습니다.
      </div>
    );
  }
}
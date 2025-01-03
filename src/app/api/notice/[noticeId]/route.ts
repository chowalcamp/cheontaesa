import { NextResponse } from "next/server";
import axios from "axios";
import type { INoticeItem } from "@/app/(about)/notice/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

// 공지사항 상세 데이터를 가져오는 헬퍼 함수
async function fetchNoticeDetail(noticeId: string): Promise<INoticeItem | null> {
  try {
    const response = await axios.get<INoticeItem>(`${BASE_URL}/notice/${noticeId}`);
    return response.data;
  } catch (error) {
    return null;
  }
}

// API Route 핸들러
export async function GET(
  request: Request,
  { params }: { params: { noticeId: string } }
) {
  const { noticeId } = params;

  // 공지사항 데이터 가져오기
  const notice = await fetchNoticeDetail(noticeId);

  if (!notice) {
    // 공지사항이 없는 경우 404 반환
    return NextResponse.json(
      { message: "공지사항을 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  // 공지사항 데이터 반환
  return NextResponse.json(notice);
}

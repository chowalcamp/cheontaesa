import { NextResponse } from "next/server";
import axios from "axios";
import type { INoticeItem } from "@/app/(about)/notice/types";
import { BASE_URL } from "@/app/api/config";


// 공지사항 목록 가져오기
async function getNoticeList(): Promise<INoticeItem[]> {
  try {
    const response = await axios.get<INoticeItem[]>(`${BASE_URL}/notice`);
    return response.data;
  } catch (error) {
    throw new Error("공지사항 목록을 가져오는 데 실패했습니다.");
  }
}

// API Route 핸들러
export async function GET() {
  try {
    const noticeList = await getNoticeList();
    return NextResponse.json(noticeList);
  } catch (error) {
    return NextResponse.json(
      { message: "공지사항 목록을 가져오는 데 실패했습니다." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import axios from "axios";
import type { INoticeItem } from "@/app/(about)/notice/types";

const BASE_URL = `https://port-0-cheonteasa-backend-1ru12mlvza49dk.sel5.cloudtype.app`;

// 공지사항 목록 가져오기
async function getNoticeList(): Promise<INoticeItem[]> {
  try {
    const response = await axios.get<INoticeItem[]>(`${BASE_URL}/notice`);
    return response.data;
  } catch (error) {
    console.error("공지사항 목록을 가져오는 데 실패했습니다:", error);
    throw new Error("공지사항 목록을 가져오는 데 실패했습니다.");
  }
}

// API Route 핸들러
export async function GET() {
  try {
    const noticeList = await getNoticeList();
    return NextResponse.json(noticeList);
  } catch (error) {
    console.error("Failed to fetch notice list:", error);
    return NextResponse.json(
      { message: "공지사항 목록을 가져오는 데 실패했습니다." },
      { status: 500 }
    );
  }
}

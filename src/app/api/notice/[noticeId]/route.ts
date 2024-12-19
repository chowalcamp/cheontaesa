import { NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";
import type { INoticeItem } from "@/app/(about)/notice/types";

const BASE_URL = `https://port-0-cheonteasa-backend-1ru12mlvza49dk.sel5.cloudtype.app`;

// 공지사항 상세 가져오기 함수
export async function getNoticeDetail(noticeId: number): Promise<INoticeItem> {
  try {
    const res: AxiosResponse<INoticeItem> = await axios.get(
      `${BASE_URL}/notice/${noticeId}`
    );
    return res.data;
  } catch (error) {
    throw new Error("공지사항 정보를 가져오는 데 실패했습니다.");
  }
}

// API 라우트
export async function GET(
  request: Request,
  { params }: { params: { noticeId: string } }
) {
  try {
    const noticeId = parseInt(params.noticeId);
    const notice = await getNoticeDetail(noticeId);
    return NextResponse.json(notice);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch notice detail" },
      { status: 500 }
    );
  }
}

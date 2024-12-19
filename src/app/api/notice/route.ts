import axios, { AxiosResponse } from "axios";
import type { INoticeItem } from "@/app/(about)/notice/types";

const BASE_URL = `https://port-0-cheonteasa-backend-1ru12mlvza49dk.sel5.cloudtype.app`;

// 공지사항 리스트 가져오기 함수
export async function getNoticeList(): Promise<INoticeItem[]> {
  try {
    const res: AxiosResponse<INoticeItem[]> = await axios.get(`${BASE_URL}/notice`);
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch notices: ${error}`);
    throw new Error("공지사항 리스트를 가져오는 데 실패했습니다.");
  }
}

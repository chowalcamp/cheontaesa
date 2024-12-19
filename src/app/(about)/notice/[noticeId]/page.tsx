import { NoticeDetailContent } from "./NoticeDetailContent";
import { getNoticeDetail } from "@/app/api/notice/[noticeId]/route";
import type { INoticeItem } from "@/app/(about)/notice/types";

export default async function NoticePage({
  params,
}: {
  params: { noticeId: string }; // 매개변수 타입 정의
}) {
  const noticeId = parseInt(params.noticeId); // 문자열에서 정수로 변환

  // 공지사항 상세 데이터 가져오기
  const notice: INoticeItem = await getNoticeDetail(noticeId);

  return <NoticeDetailContent notice={notice} />;
}

import { NoticeDetailContent } from "./NoticeDetailContent";
import type { INoticeItem } from "@/app/(about)/notice/types";

export default async function NoticePage({
  params,
}: {
  params: { noticeId: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notice/${params.noticeId}`
  );

  if (!res.ok) {
    throw new Error("공지사항 데이터를 가져오는 데 실패했습니다.");
  }

  const notice: INoticeItem = await res.json();

  return <NoticeDetailContent notice={notice} />;
}

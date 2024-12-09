"use strict";

import { NoticeDetailContent } from "./NoticeDetailContent";
import type { Notice } from "./types";

async function getNotice(id: string): Promise<Notice> {
  return {
    id,
    title: "공지사항 제목",
    content: "공지사항 내용",
    author: "관리자",
    createdAt: new Date().toISOString(),
    views: 0
  };
}

// 서버 컴포넌트
export default async function NoticePage({ params }: { params: { id: string } }) {
  const notice = await getNotice(params.id);
  return <NoticeDetailContent notice={notice} />;
}
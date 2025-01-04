import { getNewsDetail } from '@/apis/news'
import NewsDetailComponent from './detailComponent'
import type { NewsItem } from '@/app/(about)/news/types'
import { Metadata } from 'next'

// 페이지 메타데이터 설정
export const metadata: Metadata = {
  title: '주요소식',
  description:
    '천태사 주요소식 정보 및 예약 안내, 천태사 주요소식, 천태사 주요소식 정보',
}

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const id = Number(params.id)
  const res = await getNewsDetail(id)

  if (!res) {
    throw new Error('주요소식 데이터를 가져오는 데 실패했습니다.')
  }

  return <NewsDetailComponent news={res} />
}

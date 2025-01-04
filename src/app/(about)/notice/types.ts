export interface INoticeItem {
  id: number
  title: string
  createdAt: string
  content: string
  updatedAt: string | null
  deletedAt: string | null
  images: string[] | null
}

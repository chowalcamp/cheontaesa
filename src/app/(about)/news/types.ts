export interface NewsItem {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string | null
  deletedAt: string | null
  images: string[] | null
}

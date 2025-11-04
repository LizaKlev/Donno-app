export interface Review {
  id: number
  user: {
    name: string
    reviewCount: number
    avatar?: string
  }
  text: string
  rating: number // 1–5 stars
  likes: number
  dislikes: number
  date: string

  sentiment?: 'positive' | 'neutral' | 'negative'
}

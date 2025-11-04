import { Review } from './review'

export const sampleReviews: Review[] = [
  {
    id: 1,
    user: { name: 'Muhammad', reviewCount: 32, avatar: '' },
    rating: 4,
    date: '19th of March',
    text: 'I feel that Five year old Saroo gets lost on a train...',
    likes: 1726,
    dislikes: 7642,
    sentiment: 'positive',
  },
  {
    id: 2,
    user: { name: 'Elena', reviewCount: 12, avatar: '' },
    rating: 2,
    date: '19th of March',
    text: 'I do want to say...',
    likes: 120,
    dislikes: 300,
    sentiment: 'negative',
  },
  {
    id: 3,
    user: { name: 'Travis', reviewCount: 32, avatar: '' },
    rating: 5,
    date: '19th of March',
    text: 'Amazing film!',
    likes: 247,
    dislikes: 15,
    sentiment: 'positive',
  },
]

import { Review } from '../app/data/review'
import { ThumbsUp, ThumbsDown, User } from 'lucide-react'
import { Badge } from '../components/ui/badge'

export function ReviewCard({ review }: { review: Review }) {
  const sentimentColor =
    review.sentiment === 'positive'
      ? 'border-green-500/50 bg-green-500/10'
      : review.sentiment === 'negative'
        ? 'border-red-500/50 bg-red-500/10'
        : 'border-white/10 bg-white-4'

  return (
    <div
      className={`p-4 rounded-xl border ${sentimentColor} backdrop-blur-sm space-y-3`}
    >
      <div className='flex items-center gap-3'>
        {review.user.avatar ? (
          <img
            src={review.user.avatar}
            alt={`${review.user.name} avatar`}
            className='w-10 h-10 rounded-full object-cover'
          />
        ) : (
          <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600'>
            <User className='w-5 h-5' />
          </div>
        )}

        <div className='flex flex-col'>
          <span className='font-semibold'>{review.user.name}</span>
          <span className='text-xs opacity-60'>
            {review.user.reviewCount} reviews
          </span>
        </div>
        <div className='ml-auto text-sm'>{review.date}</div>
      </div>

      <div className='flex gap-1 text-yellow-400'>
        {'★'.repeat(review.rating)}
        {'☆'.repeat(5 - review.rating)}
      </div>

      <p className='text-sm opacity-90 leading-snug'>{review.text}</p>

      <div className='flex gap-3'>
        <Badge variant='secondary' className='flex items-center gap-1'>
          <ThumbsUp className='w-4 h-4' /> {review.likes}
        </Badge>
        <Badge variant='secondary' className='flex items-center gap-1'>
          <ThumbsDown className='w-4 h-4' /> {review.dislikes}
        </Badge>
      </div>
    </div>
  )
}

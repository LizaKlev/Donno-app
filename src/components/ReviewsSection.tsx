'use client'

import { useState } from 'react'
import { ReviewCard } from '../components/ReviewCard'
import { sampleReviews } from '../app/data/sampleReviews'
import { Button } from '../components/ui/button'

const filters = ['all', 'positive', 'negative', 'neutral'] as const

export function ReviewsSection() {
  const [filter, setFilter] = useState<
    'all' | 'positive' | 'negative' | 'neutral'
  >('all')

  const filtered =
    filter === 'all'
      ? sampleReviews
      : sampleReviews.filter((r) => r.sentiment === filter)

  const stats = {
    all: sampleReviews.length,
    positive: sampleReviews.filter((r) => r.sentiment === 'positive').length,
    negative: sampleReviews.filter((r) => r.sentiment === 'negative').length,
    neutral: sampleReviews.filter((r) => r.sentiment === 'neutral').length,
  }

  return (
    <div className='space-y-6'>
      <div className='flex gap-6 text-sm'>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={
              f === filter
                ? 'font-semibold text-white'
                : 'opacity-60 hover:opacity-100'
            }
          >
            {f.charAt(0).toUpperCase() + f.slice(1)} {stats[f]}
          </button>
        ))}
      </div>

      <div className='flex gap-4 text-sm'>
        <Button variant='ghost'>+ Add comment</Button>
        <Button variant='ghost'>Filter</Button>
        <Button variant='ghost'>Sort by</Button>
      </div>

      <div className='space-y-4'>
        {filtered.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </div>
  )
}

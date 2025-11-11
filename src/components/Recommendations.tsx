import React from 'react'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { sampleMovieOverview } from '../app/data/movieOverview'
import { sampleReviews } from '../app/data/sampleReviews'
import type { Review } from '../app/data/review'

export interface Recommendation {
  id: number
  name: string
  percentage: string
  imdb: number
  image?: string
}

/**
 * Sample cast data for "The Grand Budapest Hotel".
 * Images use placeholder URLs sized 63x63. Replace with real assets as needed.
 */
export const sampleRecommendation: Recommendation[] = [
  {
    id: 1,
    name: 'Lord of the Rings: The Return of the King',
    percentage: '99% match',
    imdb: 5,
    image: undefined,
  },
  {
    id: 2,
    name: 'The Lord of the Rings: The Two Towers',
    percentage: '97% match',
    imdb: 6.8,
    image: undefined,
  },
  {
    id: 3,
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    percentage: '90% match',
    imdb: 8.8,
    image: undefined,
  },
  {
    id: 4,
    name: 'The Hobbit: The Battle of the Five Armies',
    percentage: '80% match',
    imdb: 7.5,
    image: undefined,
  },
  {
    id: 5,
    name: 'The Hobbit: The Desolation of Smaug',
    percentage: '60% match',
    imdb: 7.2,
    image: undefined,
  },
  {
    id: 6,
    name: 'Harry Potter and the Deathly Hallows - Part 2',
    percentage: '30% match',
    imdb: 7.6,
    image: undefined,
  },
  {
    id: 7,
    name: 'Harry Potter and the Deathly Hallows - Part 1',
    percentage: '20% match',
    imdb: 7.4,
    image: undefined,
  },
  {
    id: 8,
    name: 'Harry Potter and the Half-Blood Prince',
    percentage: '15% match',
    imdb: 7.6,
    image: undefined,
  },
  {
    id: 9,
    name: 'Harry Potter and the Order of the Phoenix',
    percentage: '10% match',
    imdb: 7.6,
    image: undefined,
  },
]

/**
 * Single cast card component.
 * Expects a Recommendation passed as the `film` prop.
 */
export const RecommendationCard: React.FC<{ film: Recommendation }> = ({
  film,
}) => {
  return (
    <Link
      href='/film-overview'
      className='flex flex-col items-center gap-3 bg-white-4 rounded cursor-pointer hover:bg-white-8 transition-colors'
    >
      {film.image ? (
        <img
          src={film.image}
          alt={film.name}
          width={63}
          height={63}
          className='w-[182px] h-[222px] object-cover rounded'
        />
      ) : (
        <div
          role='img'
          aria-label={`${film.name} placeholder`}
          className='w-full h-[222px] bg-gray-200 rounded flex items-center justify-center'
        >
          <svg
            viewBox='0 0 24 24'
            className='w-7 h-7 text-gray-500'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path d='M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z' />
            <path d='M4 20v-1c0-3.314 3.134-6 7-6s7 2.686 7 6v1H4z' />
          </svg>
        </div>
      )}
      <div className='text-sm'>
        <div className='font-semibold'>{film.name}</div>
        <div className='flex justify-between'>
          <div className='text-gray-700'>{film.percentage}</div>
          <div className='text-gray-700 flex items-center gap-1'>
            <Star className='w-4 h-4' />
            <span>{film.imdb}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecommendationCard

/**
 * Optional: a simple MovieCast component that renders the sample cast.
 * Import and use <MovieCast /> where you want to display the list.
 */
export const RecommendationList: React.FC<{ cast?: Recommendation[] }> = ({
  cast = sampleRecommendation,
}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
      {cast.map((m) => (
        <RecommendationCard key={m.id} film={m} />
      ))}
    </div>
  )
}

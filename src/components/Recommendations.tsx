import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, Box } from 'lucide-react'
import { sampleMovieOverview } from '../app/data/movieOverview'
import type { filmOverview } from '../app/data/review'

/**
 * Single recommendation card component.
 * Expects a `filmOverview` item passed as the `film` prop.
 */
export const RecommendationCard: React.FC<{ film: filmOverview }> = ({
  film,
}) => {
  const posterImage = film.posterImage ?? film.cast?.[0]?.image
  const matchPercentage = film.matchPercentage ?? 'undefined'
  const formattedImdb =
    Number.isFinite(film.imdb) && film.imdb > 0 ? film.imdb.toFixed(1) : 'N/A'

  return (
    <Link
      href={{
        pathname: '/film-overview',
        query: { movie: film.name },
      }}
      className='flex flex-col items-center gap-3 bg-white-4 rounded cursor-pointer hover:bg-white-8 transition-colors'
    >
      {posterImage ? (
        <Image
          src={posterImage}
          alt={`${film.name} poster`}
          width={182}
          height={222}
          className='w-[182px] h-[222px] object-cover rounded'
          unoptimized
        />
      ) : (
        <div
          role='img'
          aria-label={`${film.name} placeholder`}
          className='w-[182px] h-[222px] bg-gray-200 rounded flex items-center justify-center'
        >
          <Box className='w-12 h-12 text-gray-500' />
        </div>
      )}
      <div className='text-sm'>
        <div className='font-semibold'>{film.name}</div>
        <div className='flex justify-between'>
          <div className='text-gray-700'>{matchPercentage}</div>
          <div className='text-gray-700 flex items-center gap-1'>
            <Star className='w-4 h-4' />
            <span>{formattedImdb}</span>
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
export const RecommendationList: React.FC<{
  films?: filmOverview[]
}> = ({ films = sampleMovieOverview }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
      {films.map((film) => (
        <RecommendationCard key={film.name} film={film} />
      ))}
    </div>
  )
}

import React from 'react'
import Link from 'next/link'
import { RoundButton } from './ui/roundButton'
import { Box, Star } from 'lucide-react'
import type { filmOverview } from '../app/data/review'
import { Checkbox } from './ui/checkbox'

interface FilmListProps {
  movie: filmOverview
  number?: number
  showCheckbox?: boolean
}

const FilmList: React.FC<FilmListProps> = ({ movie, number, showCheckbox }) => {
  return (
    <div className='flex items-center '>
      {showCheckbox ? (
        <Checkbox />
      ) : (
        <RoundButton
          className='w-10 h-10'
          variant='secondary'
          icon={number !== undefined ? undefined : 'chevron-left'}
        >
          {number !== undefined && number + 1}
        </RoundButton>
      )}
      <Link
        href={{
          pathname: '/film-overview',
          query: { movie: movie.name },
        }}
        className='flex items-center cursor-pointer hover:opacity-80 transition-opacity'
      >
        <Box className=' bg-white/40 min-w-20 min-h-20 mx-4 rounded-2xl'></Box>

        <div>
          <div className='flex justify-between w-full'>
            <p>{movie.name}</p>
            <p className='flex gap-1'>
              {movie.imdb} <Star />
            </p>
          </div>
          <p className='line-clamp-2'>{movie.storyline}</p>
        </div>
      </Link>
    </div>
  )
}

export default FilmList

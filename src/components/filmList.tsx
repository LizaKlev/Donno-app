import React from 'react'
import { RoundButton } from './ui/roundButton'
import { Box } from 'lucide-react'
import type { filmOverview } from '../app/data/review'

interface FilmListProps {
  movie: filmOverview
}

const FilmList: React.FC<FilmListProps> = ({ movie }) => {
  return (
    <div>
      <RoundButton />
      <Box />
      <p>{movie.name}</p>
      <p>{movie.description}</p>
      <p>{movie.imdb}</p>
    </div>
  )
}

export default FilmList

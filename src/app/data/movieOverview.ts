import type { filmOverview } from './review'

export const sampleMovieOverview: filmOverview = {
  name: 'The Grand Budapest Hotel',
  duration: '169 min',
  genres: ['Adventure', 'Comedy', 'Crime'],
  country: 'USA',
  language: 'English',
  year: 2014,
  awardsNumber: 153,
  nominationsNumber: 253,
  description:
    'A MURDER CASE OF MADAM D. WITH ENORMOUS WEALTH AND THE MOST OUTRAGEOUS EVENTS SURROUNDING HER SUDDEN DEATH!',
  storyline:
    'The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.',
  cast: [
    {
      name: 'Ralph Fiennes',
      character: 'Gustave H',
      image: 'https://via.placeholder.com/150',
    },
  ],
  platforms: [
    {
      name: 'Netflix',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.netflix.com/watch/1234567890',
    },
    {
      name: 'Amazon Prime Video',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.amazon.com/watch/1234567890',
    },
    {
      name: 'Hulu',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.hulu.com/watch/1234567890',
    },
  ],
  crew: [
    {
      name: 'Wes Anderson',
      role: 'Director',
      image: 'https://via.placeholder.com/150',
    },
  ],
  awards: [
    {
      name: 'Best Picture',
      year: 2014,
      image: 'https://via.placeholder.com/150',
    },
  ],
  nominations: [
    {
      name: 'Best Picture',
      year: 2014,
      image: 'https://via.placeholder.com/150',
    },
  ],
}

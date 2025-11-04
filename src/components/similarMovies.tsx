import React from 'react'

type Movie = {
  id: string
  title: string
  year?: number
  posterSrc: string
}

const createPosterDataUrl = (label: string) => {
  // simple gray background with a clapperboard movie icon as a placeholder
  const svg = `
        <svg xmlns='http://www.w3.org/2000/svg' width='84' height='86' viewBox='0 0 84 86'>
            <rect width='100%' height='100%' rx='6' ry='6' fill='#e6e6e6' />
            <!-- clapperboard -->
            <g transform='translate(0,6)'>
                <!-- top (slanted part) -->
                <polygon points='18,22 56,10 66,20 28,32' fill='#cfcfcf' stroke='#9a9a9a' stroke-width='1.5' />
                <!-- body -->
                <rect x='22' y='30' width='40' height='28' rx='3' fill='#ffffff' stroke='#9a9a9a' stroke-width='1.5' />
                <!-- divider lines on body -->
                <line x1='28' y1='38' x2='56' y2='38' stroke='#d0d0d0' stroke-width='1' />
                <line x1='28' y1='46' x2='56' y2='46' stroke='#d0d0d0' stroke-width='1' />
                <!-- small details on slanted part -->
                <rect x='22' y='14' width='6' height='4' fill='#ffffff' transform='rotate(-18 25 16)' />
                <rect x='32' y='12' width='6' height='4' fill='#ffffff' transform='rotate(-18 35 14)' />
                <rect x='42' y='10' width='6' height='4' fill='#ffffff' transform='rotate(-18 45 12)' />
            </g>
        </svg>
    `
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

export const similarMoviesSample: Movie[] = [
  {
    id: 'gbh',
    title: 'The Grand Budapest Hotel',
    year: 2014,
    posterSrc: createPosterDataUrl('Grand\nBudapest'),
  },
  {
    id: 'moonrise',
    title: 'Moonrise Kingdom',
    year: 2012,
    posterSrc: createPosterDataUrl('Moonrise\nKingdom'),
  },
  {
    id: 'royal',
    title: 'The Royal Tenenbaums',
    year: 2001,
    posterSrc: createPosterDataUrl('Royal\nTenenbaums'),
  },
  {
    id: 'isle',
    title: 'Isle of Dogs',
    year: 2018,
    posterSrc: createPosterDataUrl('Isle of\nDogs'),
  },
  {
    id: 'darjeeling',
    title: 'The Darjeeling Limited',
    year: 2007,
    posterSrc: createPosterDataUrl('Darjeeling\nLimited'),
  },
  {
    id: 'rushmore',
    title: 'Rushmore',
    year: 1998,
    posterSrc: createPosterDataUrl('Rushmore'),
  },
  // 10 more samples
  {
    id: 'fantastic',
    title: 'Fantastic Mr. Fox',
    year: 2009,
    posterSrc: createPosterDataUrl('Fantastic\nMr. Fox'),
  },
  {
    id: 'lifeaquatic',
    title: 'The Life Aquatic with Steve Zissou',
    year: 2004,
    posterSrc: createPosterDataUrl('Life\nAquatic'),
  },
  {
    id: 'bottle',
    title: 'Bottle Rocket',
    year: 1996,
    posterSrc: createPosterDataUrl('Bottle\nRocket'),
  },
  {
    id: 'french',
    title: 'The French Dispatch',
    year: 2021,
    posterSrc: createPosterDataUrl('French\nDispatch'),
  },
  {
    id: 'wonderful',
    title: 'The Wonderful Story of Henry Sugar',
    year: 2023,
    posterSrc: createPosterDataUrl('Wonderful\nHenry Sugar'),
  },
  {
    id: 'asteroid',
    title: 'Asteroid City',
    year: 2023,
    posterSrc: createPosterDataUrl('Asteroid\nCity'),
  },
  {
    id: 'amelie',
    title: 'Amélie',
    year: 2001,
    posterSrc: createPosterDataUrl('Amélie'),
  },
  {
    id: 'lobster',
    title: 'The Lobster',
    year: 2015,
    posterSrc: createPosterDataUrl('The\nLobster'),
  },
  {
    id: 'hugo',
    title: 'Hugo',
    year: 2011,
    posterSrc: createPosterDataUrl('Hugo'),
  },
  {
    id: 'bigfish',
    title: 'Big Fish',
    year: 2003,
    posterSrc: createPosterDataUrl('Big\nFish'),
  },
]

const cardStyles: React.CSSProperties = {
  width: 84,
  textAlign: 'center',
  fontFamily: 'Inter, Roboto, Arial, sans-serif',
  fontSize: 12,
  color: '#222',
}

const posterStyles: React.CSSProperties = {
  width: 84,
  height: 86,
  objectFit: 'cover',
  borderRadius: 6,
  display: 'block',
  marginBottom: 6,
}

const listStyles: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  alignItems: 'flex-start',
  overflowX: 'auto',
  padding: 8,
}

export default function SimilarMovies() {
  return (
    <div>
      <div style={listStyles}>
        {similarMoviesSample.map((v) => (
          <div key={v.id} style={cardStyles}>
            <img
              src={v.posterSrc}
              alt={`${v.title} poster`}
              width={84}
              height={86}
              style={posterStyles}
            />
            <div style={{ lineHeight: '1.1', whiteSpace: 'normal' }}>
              <div style={{ fontWeight: 600 }}>{v.title}</div>
              <div style={{ color: '#666', fontSize: 11 }}>{v.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

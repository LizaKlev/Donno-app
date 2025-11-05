import React from 'react'

export interface Platform {
  id: number
  name: string
  image?: string
}

/**
 * Sample cast data for "The Grand Budapest Hotel".
 * Images use placeholder URLs sized 63x63. Replace with real assets as needed.
 */
export const samplePlatform: Platform[] = [
  {
    id: 1,
    name: 'Netflix',
    image: undefined,
  },
  {
    id: 2,
    name: 'Amazon Prime Video',
    image: undefined,
  },
  {
    id: 3,
    name: 'Hulu',
    image: undefined,
  },
  {
    id: 4,
    name: 'Disney+',
    image: undefined,
  },
  {
    id: 5,
    name: 'HBO Max',
    image: undefined,
  },
  {
    id: 6,
    name: 'Apple TV+',
    image: undefined,
  },
  {
    id: 7,
    name: 'Paramount+',
    image: undefined,
  },
  {
    id: 8,
    name: 'Peacock',
    image: undefined,
  },
  {
    id: 9,
    name: 'Crunchyroll',
    image: undefined,
  },
]

const PlatformCard: React.FC<{ member: Platform }> = ({ member }) => {
  return (
    <div className='flex flex-col items-center gap-3 p-2 bg-white-4 rounded'>
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          width={63}
          height={63}
          className='w-[63px] h-[63px] object-cover rounded'
        />
      ) : (
        <div
          role='img'
          aria-label={`${member.name} placeholder`}
          className='w-[63px] h-[63px] bg-gray-200 rounded flex items-center justify-center'
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
        <div className='font-semibold'>{member.name}</div>
      </div>
    </div>
  )
}

export default PlatformCard

/**
 * Optional: a simple MovieCast component that renders the sample cast.
 * Import and use <MovieCast /> where you want to display the list.
 */
export const PlatformList: React.FC<{ cast?: Platform[] }> = ({
  cast = samplePlatform,
}) => {
  return (
    <div className='flex gap-6'>
      {cast.map((m) => (
        <PlatformCard key={m.id} member={m} />
      ))}
    </div>
  )
}

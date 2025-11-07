import React from 'react'

export interface Recommendation {
  id: number
  name: string
  percentage: string
  image?: string
}

/**
 * Sample cast data for "The Grand Budapest Hotel".
 * Images use placeholder URLs sized 63x63. Replace with real assets as needed.
 */
export const sampleRecommendation: Recommendation[] = [
  {
    id: 1,
    name: 'Ralph Fiennes',
    percentage: '99% match',
    image: undefined,
  },
  {
    id: 2,
    name: 'Tony Revolori',
    percentage: '97% match',
    image: undefined,
  },
  {
    id: 3,
    name: 'Saoirse Ronan',
    percentage: '90% match',
    image: undefined,
  },
  {
    id: 4,
    name: 'Tilda Swinton',
    percentage: '80% match',
    image: undefined,
  },
  {
    id: 5,
    name: 'Willem Dafoe',
    percentage: '60% match',
    image: undefined,
  },
  {
    id: 6,
    name: 'Adrien Brody',
    percentage: '30% match',
    image: undefined,
  },
  {
    id: 7,
    name: 'Jude Law',
    percentage: '20% match',
    image: undefined,
  },
  {
    id: 8,
    name: 'Edward Norton',
    percentage: '15% match',
    image: undefined,
  },
  {
    id: 9,
    name: 'Bill Murray',
    percentage: '10% match',
    image: undefined,
  },
]

/**
 * Single cast card component.
 * Expects a Recommendation passed as the `member` prop.
 */
const CastCard: React.FC<{ member: Recommendation }> = ({ member }) => {
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
        <div className='text-gray-700'>{member.percentage}</div>
      </div>
    </div>
  )
}

export default CastCard

/**
 * Optional: a simple MovieCast component that renders the sample cast.
 * Import and use <MovieCast /> where you want to display the list.
 */
export const RecommendationCard: React.FC<{ cast?: Recommendation[] }> = ({
  cast = sampleRecommendation,
}) => {
  return (
    <div className='flex gap-6'>
      {cast.map((m) => (
        <CastCard key={m.id} member={m} />
      ))}
    </div>
  )
}

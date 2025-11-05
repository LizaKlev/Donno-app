import React from 'react'

export interface Award {
  id: number
  nomination: string
  nominee: string
  jury: string
  winner?: 'winner' | 'nominee'
  image?: string
}

export const sampleAward: Award[] = [
  {
    id: 1,
    nomination: 'Best Picture 2014',
    nominee: 'The Grand Budapest Hotel',
    jury: 'Academy Awards',
    winner: 'winner',
    image: undefined,
  },
  {
    id: 2,
    nomination: 'Best Director',
    nominee: 'Wes Anderson',
    jury: 'Academy Awards',
    winner: 'nominee',
    image: undefined,
  },
  {
    id: 3,
    nomination: 'Best Actor',
    nominee: 'Ralph Fiennes',
    jury: 'Academy Awards',
    winner: 'nominee',
    image: undefined,
  },
  {
    id: 4,
    nomination: 'Best Supporting Actor',
    nominee: 'Tony Revolori',
    jury: 'Academy Awards',
    winner: 'nominee',
    image: undefined,
  },
  {
    id: 5,
    nomination: 'Best Supporting Actress',
    nominee: 'Saoirse Ronan',
    jury: 'Academy Awards',
    winner: 'nominee',
    image: undefined,
  },
  {
    id: 6,
    nomination: 'Best Costume Design',
    nominee: 'Milena Canonero',
    jury: 'Academy Awards',
    winner: 'nominee',
    image: undefined,
  },
  {
    id: 7,
    nomination: 'Best Original Score',
    nominee: 'Alexandre Desplat',
    jury: 'Academy Awards',
    winner: 'nominee',
    image: undefined,
  },
  {
    id: 8,
    nomination: 'Best Production Design',
    nominee: 'Adam Stockhausen',
    jury: 'Academy Awards',
    winner: 'nominee',
    image: undefined,
  },
  {
    id: 9,
    nomination: 'Best Makeup & Hairstyling',
    nominee: 'Frances Hannon',
    jury: 'Academy Awards',
    winner: 'nominee',
    image: undefined,
  },
]

/**
 * Single cast card component.
 * Expects a Award passed as the `member` prop.
 */
const AwardCard: React.FC<{ member: Award }> = ({ member }) => {
  return (
    <div className='flex flex-col items-center gap-3 p-2 bg-white-4 rounded'>
      {member.image ? (
        <img
          src={member.image}
          alt={member.nomination}
          width={63}
          height={63}
          className='w-[63px] h-[63px] object-cover rounded'
        />
      ) : (
        <div
          role='img'
          aria-label={`${member.nomination} placeholder`}
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
        <div className='font-semibold'>{member.nomination}</div>
        <div className='text-gray-700'>{member.nominee}</div>
        <div className='text-gray-700'>{member.jury}</div>
        <div className='text-gray-700'>{member.winner}</div>
      </div>
    </div>
  )
}

export default AwardCard

export const NomineeCard: React.FC<{ cast?: Award[] }> = ({
  cast = sampleAward,
}) => {
  return (
    <div className='flex gap-6'>
      {cast.map((m) => (
        <AwardCard key={m.id} member={m} />
      ))}
    </div>
  )
}

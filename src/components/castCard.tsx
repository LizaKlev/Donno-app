import React from 'react'

export interface CastMember {
  id: number
  name: string
  role: string
  image?: string
}

/**
 * Sample cast data for "The Grand Budapest Hotel".
 * Images use placeholder URLs sized 63x63. Replace with real assets as needed.
 */
export const sampleCast: CastMember[] = [
  {
    id: 1,
    name: 'Ralph Fiennes',
    role: 'M. Gustave',
    image: undefined,
  },
  {
    id: 2,
    name: 'Tony Revolori',
    role: 'Zero Moustafa',
    image: undefined,
  },
  {
    id: 3,
    name: 'Saoirse Ronan',
    role: 'Agatha',
    image: undefined,
  },
  {
    id: 4,
    name: 'Tilda Swinton',
    role: 'Madame D.',
    image: undefined,
  },
  {
    id: 5,
    name: 'Willem Dafoe',
    role: 'Jopling',
    image: undefined,
  },
  {
    id: 6,
    name: 'Adrien Brody',
    role: 'Dmitri',
    image: undefined,
  },
  {
    id: 7,
    name: 'Jude Law',
    role: 'Young Author',
    image: undefined,
  },
  {
    id: 8,
    name: 'Edward Norton',
    role: 'Inspector Henckels',
    image: undefined,
  },
  {
    id: 9,
    name: 'Bill Murray',
    role: 'M. Ivan',
    image: undefined,
  },
]

/**
 * Single cast card component.
 * Expects a CastMember passed as the `member` prop.
 */
const CastCard: React.FC<{ member: CastMember }> = ({ member }) => {
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
        <div className='text-gray-700'>{member.role}</div>
      </div>
    </div>
  )
}

export default CastCard

/**
 * Optional: a simple MovieCast component that renders the sample cast.
 * Import and use <MovieCast /> where you want to display the list.
 */
export const MovieCast: React.FC<{ cast?: CastMember[] }> = ({
  cast = sampleCast,
}) => {
  return (
    <div className='flex gap-6'>
      {cast.map((m) => (
        <CastCard key={m.id} member={m} />
      ))}
    </div>
  )
}

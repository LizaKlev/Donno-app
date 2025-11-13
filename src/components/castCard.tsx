import React from 'react'
import Link from 'next/link'

export interface CastMember {
  id: number
  name: string
  role: string
  image?: string
}

/**
 * Single cast card component.
 * Expects a CastMember passed as the `member` prop.
 */
const CastCard: React.FC<{ member: CastMember }> = ({ member }) => {
  const actorUrl = `/actor-overview?actor=${encodeURIComponent(member.name)}`
  return (
    <Link
      href={actorUrl}
      className='flex flex-col items-center gap-3 p-2 bg-white-4 rounded cursor-pointer hover:bg-white-8 transition-colors'
    >
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
    </Link>
  )
}

export default CastCard

/**
 * Optional: a simple MovieCast component that renders the sample cast.
 * Import and use <MovieCast /> where you want to display the list.
 * Can accept either CastMember[] or movie cast format { name, character, image }[]
 */
export const MovieCast: React.FC<{
  cast?: CastMember[]
  movieCast?: Array<{ name: string; character: string; image?: string }>
}> = ({ cast, movieCast }) => {
  // If movieCast is provided, convert it to CastMember format
  const castMembers: CastMember[] = movieCast
    ? movieCast.map((mc, index) => ({
        id: index + 1,
        name: mc.name,
        role: mc.character,
        image: mc.image,
      }))
    : cast || []

  return (
    <div className='flex gap-6'>
      {castMembers.map((m) => (
        <CastCard key={m.id} member={m} />
      ))}
    </div>
  )
}

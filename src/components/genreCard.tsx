type GenreCardProps = {
  title: string
  color: string
  selected: boolean
  onToggle: () => void
}

export function GenreCard({
  title,
  color,
  selected,
  onToggle,
}: GenreCardProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        h-36 rounded-3xl flex justify-center items-center font-semibold text-lg transition-transform duration-200
        ${color}
        ${selected ? 'ring-4 ring-white scale-105' : 'opacity-90 hover:scale-105 hover:shadow-xl'}
      `}
    >
      <p className='text-white'>{title}</p>
    </button>
  )
}

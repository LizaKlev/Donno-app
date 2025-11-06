'use client'
import { useState } from 'react'

import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb'
import { GenreCard } from 'donno-app/components/genreCard'
import { genres } from './data/genres'

export default function Page() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  function toggleGenre(title: string) {
    setSelectedGenres((prev) =>
      prev.includes(title) ? prev.filter((g) => g !== title) : [...prev, title]
    )
  }

  return (
    <div className='h-full flex flex-col justify-between px-2'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Genre</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/time-range'>Time</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/film-overview'>Film overview</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Input placeholder='Search...' />
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2'>
        {genres.map((genre) => (
          <GenreCard
            key={genre.title}
            title={genre.title}
            color={genre.color}
            span={genre.span}
            selected={selectedGenres.includes(genre.title)}
            onToggle={() => toggleGenre(genre.title)}
          />
        ))}
      </div>
      <div className='flex w-full justify-center gap-4 mb-1'>
        <Button variant={'secondary'} className='w-1/3'>
          Apply
        </Button>
        <Button className='w-1/3'>Reset</Button>
      </div>
    </div>
  )
}

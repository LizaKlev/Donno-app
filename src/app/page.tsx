'use client'
import { useState } from 'react'

import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { InputGroupButton } from '../components/ui/input-group'
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
    <div className='h-full flex flex-col justify-between'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Input placeholder='Search...' />
      <div className='grid grid-cols-6 gap-2'>
        {genres.map((genre) => (
          <GenreCard
            key={genre.title}
            title={genre.title}
            color={genre.color}
            selected={selectedGenres.includes(genre.title)}
            onToggle={() => toggleGenre(genre.title)}
          />
        ))}
      </div>
    </div>
  )
}

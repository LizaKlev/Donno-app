'use client'
import { useState } from 'react'
import Link from 'next/link'

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
    <div className='h-full flex flex-col justify-between px-2 pb-20 '>
      <div className='sticky top-1.5 left-0 z-20 px-2 bg-linear-to-b from-background via-background/90 to-background/10'>
        <div className='mx-auto '>
          <div className='items-center justify-between py-2'>
            <div className='pb-3'>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Genre</BreadcrumbPage>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator />

                  <BreadcrumbItem>
                    <BreadcrumbLink href='/map'>Place</BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator />

                  <BreadcrumbItem>
                    <BreadcrumbLink href='/time-range'>Time</BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator />

                  <BreadcrumbItem>
                    <BreadcrumbLink href='/recommendations'>
                      Recommendations
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <Input placeholder='Search...' />
          </div>
        </div>
      </div>

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

      <div className='sticky top-0 left-0 z-20 px-2 bg-linear-to-b from-background via-background to-background/10'>
        <div className='mx-auto '>
          <div className='items-center justify-between py-2'>
            <div className='pb-3'></div>
            <div>{/* <p className='md:hidden'>Select Genres</p> */}</div>
          </div>
        </div>
      </div>

      <div className='sticky bottom-20 md:bottom-4 left-0 z-20 px-2 flex w-full justify-center gap-4 mb-1'>
        <Button variant={'secondary'} className='w-1/3' asChild>
          <Link href='/map'>Skip</Link>
        </Button>
        <Button className='w-1/3'>
          <Link href='/map'>Confirm</Link>
        </Button>
      </div>
    </div>
  )
}

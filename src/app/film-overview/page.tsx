'use client'

import { useState } from 'react'

import { Box } from 'lucide-react'
import { Badge } from 'donno-app/components/ui/badge'
import { Button } from 'donno-app/components/ui/button'
import { MovieCast } from 'donno-app/components/castCard'
import { ReviewsSection } from 'donno-app/components/ReviewsSection'
import SimilarMovies from 'donno-app/components/similarMovies'
import { PlatformList } from 'donno-app/components/PlatformCard'
import { NomineeCard } from 'donno-app/components/AwardCard'
import { toast } from 'sonner'
import { sampleMovieOverview } from '../data/movieOverview'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from 'donno-app/components/ui/drawer'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'donno-app/components/ui/dialog'
import { RoundButton } from 'donno-app/components/ui/roundButton'
import { useIsMobile } from 'donno-app/hooks/use-mobile'

const TABS = [
  { id: 'cast', label: 'Cast' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'crew', label: 'Crew' },
  { id: 'awards', label: 'Awards' },
]

const Page = () => {
  // default to 'cast'
  const [activeTab, setActiveTab] = useState('cast')
  const isMobile = useIsMobile()
  const movie = sampleMovieOverview[0]
  return (
    <div className='max-w-6xl w-full  px-2 pb-20'>
      <div className='sticky top-3.5 left-3.5 right-3.5 z-50 flex justify-between'>
        <RoundButton
          variant='primary'
          href='/recommendations'
          icon='chevron-left'
        />
        {isMobile ? (
          <Drawer direction='top'>
            <DrawerTrigger asChild>
              <RoundButton variant='secondary' icon='hamburger' />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant='outline'>Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <RoundButton variant='secondary' icon='hamburger' />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button>Submit</Button>
                <Button variant='outline'>Cancel</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className='w-full flex flex-col items-center justify-center'>
        <Box className='w-3/4 bg-accent h-96 text-muted-foreground max-lg:w-3/4' />
        <div className='w-full flex flex-row justify-between'>
          <div className=''>
            <p>{movie.name}</p>

            <p>{movie.duration}</p>
          </div>
          <div className='flex gap-1'>
            <RoundButton
              className='w-fit h-fit'
              variant='primary'
              icon='check'
              onClick={() => toast.success('Film is marked as Watched')}
            ></RoundButton>
            <RoundButton
              className='w-fit h-fit'
              variant='primary'
              icon='heart'
              onClick={() => toast.success('Film is added to your Liked films')}
            ></RoundButton>
          </div>
        </div>
        <div className='flex w-full'>
          <Badge variant='secondary'>Adventure</Badge>
          <Badge variant='secondary'>Comedy</Badge>
          <Badge variant='secondary'>Crime</Badge>
        </div>

        <div className='flex gap-4 w-full'>
          <div className='flex flex-col'>
            <p>Country</p>
            <p>{movie.country}</p>
          </div>
          <div className='flex flex-col'>
            <p>Language</p>
            <p>{movie.language}</p>
          </div>
          <div className='flex flex-col'>
            <p>Year</p>
            <p>{movie.year}</p>
          </div>
          <div className='flex flex-col'>
            <p>Awards</p>
            <p>{movie.awardsNumber}</p>
          </div>
          <div className='flex flex-col'>
            <p>Nominations</p>
            <p>{movie.nominationsNumber}</p>
          </div>
        </div>
        <p>{movie.description}</p>
        <p>{movie.storyline}</p>

        {/* --- TABS MENU --- */}
        <div className='flex w-full lg:w-2/3 justify-between border border-white/10 rounded-full'>
          {TABS.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'ghost'}
              onClick={() => setActiveTab(tab.id)}
              className={
                activeTab === tab.id
                  ? 'font-semibold'
                  : 'opacity-60 hover:opacity-100'
              }
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* --- TAB CONTENT --- */}
        <div className='w-full mt-6'>
          {activeTab === 'cast' && (
            <div className='w-full overflow-x-auto'>
              <div className='flex gap-4 w-max pb-2'>
                <MovieCast />
              </div>
            </div>
          )}
          {activeTab === 'platforms' && (
            <div className='w-full overflow-x-auto'>
              <div className='flex gap-4 w-max pb-2'>
                <PlatformList />
              </div>
            </div>
          )}
          {activeTab === 'crew' && (
            <div className='w-full overflow-x-auto'>
              <div className='flex gap-4 w-max pb-2'>
                <MovieCast />
              </div>
            </div>
          )}
          {activeTab === 'awards' && (
            <div className='w-full overflow-x-auto'>
              <div className='flex gap-4 w-max pb-2'>
                <NomineeCard />
              </div>
            </div>
          )}
        </div>
      </div>
      <p>SIMILAR MOVIES</p>
      <div className='w-full overflow-x-auto'>
        <div className='flex gap-4 w-max pb-2'>
          <SimilarMovies />
        </div>
      </div>
      <p>Reviews</p>
      <ReviewsSection />
    </div>
  )
}

export default Page

'use client'

import { useState } from 'react'

import { Input } from 'donno-app/components/ui/input'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'donno-app/components/ui/breadcrumb'
import { Box } from 'lucide-react'
import { Badge } from 'donno-app/components/ui/badge'
import { Button } from 'donno-app/components/ui/button'
import { MovieCast } from 'donno-app/components/castCard'
import { ReviewsSection } from 'donno-app/components/ReviewsSection'
import SimilarMovies from 'donno-app/components/similarMovies'
import { PlatformList } from 'donno-app/components/PlatformCard'
import { NomineeCard } from 'donno-app/components/AwardCard'
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'donno-app/components/ui/dialog'

const TABS = [
  { id: 'cast', label: 'Cast' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'crew', label: 'Crew' },
  { id: 'awards', label: 'Awards' },
]

const page = () => {
  // default to 'cast'
  const [activeTab, setActiveTab] = useState('cast')
  return (
    <div className='w-full overflow-hidden mb-40'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Genre</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/time-range'>Time</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Film overview</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Input placeholder='Search...' />
      {/* <img src='/slider.png' alt='Slider component' width='full' height={400} /> */}

      <div className='flex gap-3'>
        <Drawer>
          <DrawerTrigger>Drawer down</DrawerTrigger>
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

        <Drawer direction='top'>
          <DrawerTrigger>Drawer up</DrawerTrigger>
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

        <Dialog>
          <DialogTrigger>Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className='w-full flex flex-col items-center justify-center'>
        <Box className='w-3/4 bg-accent h-96 text-muted-foreground max-lg:w-3/4' />
        <p id='film-name' className='w-full'>
          The Grand Budapest Hotel
        </p>
        <p id='duration' className='w-full'>
          169 min
        </p>
        <div className='flex w-full'>
          <Badge variant='secondary'>Adventure</Badge>
          <Badge variant='secondary'>Comedy</Badge>
          <Badge variant='secondary'>Crime</Badge>
        </div>

        <div className='flex gap-4 w-full'>
          <div className='flex flex-col'>
            <p>Country</p>
            <p>USA</p>
          </div>
          <div className='flex flex-col'>
            <p>Language</p>
            <p>English</p>
          </div>
          <div className='flex flex-col'>
            <p>Year</p>
            <p>2014</p>
          </div>
          <div className='flex flex-col'>
            <p>Awards</p>
            <p>153 wins</p>
          </div>
          <div className='flex flex-col'>
            <p>Nominations</p>
            <p>253 nominations</p>
          </div>
        </div>
        <p>
          A MURDER CASE OF MADAM D. WITH ENORMOUS WEALTH AND THE MOST OUTRAGEOUS
          EVENTS SURROUNDING HER SUDDEN DEATH!
        </p>
        <p>
          The Grand Budapest Hotel tells of a legendary concierge at a famous
          European hotel between the wars and his friendship with a young
          employee who becomes his trusted protégé. The story involves the theft
          and recovery of a priceless Renaissance painting, the battle for an
          enormous family fortune and the slow and then sudden upheavals that
          transformed Europe during the first half of the 20th century.
        </p>

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

export default page

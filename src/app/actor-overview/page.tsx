'use client'
import React, { useState } from 'react'
import { RoundButton } from 'donno-app/components/ui/roundButton'
import { Drawer } from 'donno-app/components/ui/drawer'
import { DrawerTrigger } from 'donno-app/components/ui/drawer'
import { DrawerContent } from 'donno-app/components/ui/drawer'
import { DrawerHeader } from 'donno-app/components/ui/drawer'
import { DrawerTitle } from 'donno-app/components/ui/drawer'
import { DrawerDescription } from 'donno-app/components/ui/drawer'
import { DrawerFooter } from 'donno-app/components/ui/drawer'
import { DrawerClose } from 'donno-app/components/ui/drawer'
import { Button } from 'donno-app/components/ui/button'
import { useIsMobile } from 'donno-app/hooks/use-mobile'
import { Dialog } from 'donno-app/components/ui/dialog'
import { DialogTrigger } from 'donno-app/components/ui/dialog'
import { DialogContent } from 'donno-app/components/ui/dialog'
import { DialogHeader } from 'donno-app/components/ui/dialog'
import { DialogTitle } from 'donno-app/components/ui/dialog'
import { DialogDescription } from 'donno-app/components/ui/dialog'
import { DialogFooter } from 'donno-app/components/ui/dialog'
import { Box } from 'lucide-react'
import { Badge } from 'donno-app/components/ui/badge'
import { MovieCast } from 'donno-app/components/castCard'
import { sampleActorOverview } from 'donno-app/app/data/actorOverview'
import { PlatformList } from 'donno-app/components/PlatformCard'
import { NomineeCard } from 'donno-app/components/AwardCard'

const TABS = [
  { id: 'cast', label: 'Known For' },
  { id: 'recentMovies', label: 'Recent Movies' },
  { id: 'allFilms', label: 'All Films' },
  { id: 'upcoming', label: 'Upcoming' },
]

const Page = () => {
  const isMobile = useIsMobile()
  const [activeTab, setActiveTab] = useState('cast')
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
        <div className='w-full flex justify-between'>
          <p className='w-full'>{sampleActorOverview.name}</p>

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
                <RoundButton variant='primary' icon='user' />
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
        <p className='w-full'>{sampleActorOverview.position}</p>
        <div className='flex gap-4 w-full'>
          <div className='flex flex-col'>
            <p>Age</p>
            <p>{sampleActorOverview.age}</p>
          </div>
          <div className='flex flex-col'>
            <p>Born</p>
            <p>{sampleActorOverview.birthplace}</p>
          </div>
          <div className='flex flex-col'>
            <p>Awards</p>
            <p>{sampleActorOverview.awardsNumber}</p>
          </div>
          <div className='flex flex-col'>
            <p>Nominations</p>
            <p>{sampleActorOverview.nominationsNumber}</p>
          </div>
        </div>
        <p className='w-full'>{sampleActorOverview.bio}</p>
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
          {activeTab === 'knownFor' && (
            <div className='w-full overflow-x-auto'>
              <div className='flex gap-4 w-max pb-2'>
                <MovieCast />
              </div>
            </div>
          )}
          {activeTab === 'recentMovies' && (
            <div className='w-full overflow-x-auto'>
              <div className='flex gap-4 w-max pb-2'>
                <PlatformList />
              </div>
            </div>
          )}
          {activeTab === 'allFilms' && (
            <div className='w-full overflow-x-auto'>
              <div className='flex gap-4 w-max pb-2'>
                <MovieCast />
              </div>
            </div>
          )}
          {activeTab === 'upcoming' && (
            <div className='w-full overflow-x-auto'>
              <div className='flex gap-4 w-max pb-2'>
                <MovieCast />
              </div>
            </div>
          )}
        </div>
      </div>
      <p>Awards</p>
      <div className='w-full overflow-x-auto'>
        <div className='flex gap-4 w-max pb-2'>
          <NomineeCard />
        </div>
      </div>
      <p>You might also like</p>
      <div className='w-full overflow-x-auto'>
        <div className='flex gap-4 w-max pb-2'>
          <MovieCast />
        </div>
      </div>
    </div>
  )
}

export default Page

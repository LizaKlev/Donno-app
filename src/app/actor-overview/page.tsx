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
import { PlatformList } from 'donno-app/components/PlatformCard'
import { NomineeCard } from 'donno-app/components/AwardCard'

const TABS = [
  { id: 'cast', label: 'Cast' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'crew', label: 'Crew' },
  { id: 'awards', label: 'Awards' },
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
    </div>
  )
}

export default Page

'use client'
import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { RoundButton } from 'donno-app/components/ui/roundButton'
import { Drawer } from 'donno-app/components/ui/drawer'
import { DrawerTrigger } from 'donno-app/components/ui/drawer'
import { DrawerContent } from 'donno-app/components/ui/drawer'
import { DrawerFooter } from 'donno-app/components/ui/drawer'
import { Button } from 'donno-app/components/ui/button'
import { useIsMobile } from 'donno-app/hooks/use-mobile'
import { Dialog } from 'donno-app/components/ui/dialog'
import { DialogTrigger } from 'donno-app/components/ui/dialog'
import { DialogContent } from 'donno-app/components/ui/dialog'
import { DialogHeader } from 'donno-app/components/ui/dialog'
import { DialogFooter } from 'donno-app/components/ui/dialog'
import { Box, Heart } from 'lucide-react'
import { MovieCast } from 'donno-app/components/castCard'
import { sampleActorOverview } from 'donno-app/app/data/actorOverview'
import { PlatformList } from 'donno-app/components/PlatformCard'
import { NomineeCard } from 'donno-app/components/AwardCard'
import { Separator } from 'donno-app/components/ui/separator'
import { toast } from 'sonner'

const TABS = [
  { id: 'cast', label: 'Known For' },
  { id: 'recentMovies', label: 'Recent Movies' },
  { id: 'allFilms', label: 'All Films' },
  { id: 'upcoming', label: 'Upcoming' },
]

const FAVOURITE_ICON = Heart

const Page = () => {
  const isMobile = useIsMobile()
  const [activeTab, setActiveTab] = useState('cast')
  const searchParams = useSearchParams()
  const actorParam = searchParams.get('actor')
  const selectedActor = useMemo(() => {
    if (!actorParam) {
      return sampleActorOverview[0]
    }
    const decodedName = decodeURIComponent(actorParam)
    return (
      sampleActorOverview.find(
        (item) => item.name.toLowerCase() === decodedName.toLowerCase()
      ) || sampleActorOverview[0]
    )
  }, [actorParam])
  const actor = selectedActor
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
              <button
                type='button'
                className='rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring'
              >
                <RoundButton variant='secondary' icon='hamburger' />
              </button>
            </DrawerTrigger>
            <DrawerContent className='gap-0 border-[0.3px] border-white-12 mx-2.5'>
              <div className='flex items-center gap-2 pb-3 '>
                <Box className='w-[32px] h-[32px] bg-accent text-accent-foreground rounded-[8px]' />
                <p> {actor.name} </p>
              </div>
              <Separator />
              <DrawerFooter className='p-0'>
                <Button
                  variant='ghost'
                  className='justify-start hover:text-bold hover:bg-white-4 '
                  onClick={() =>
                    toast.success('Film is added to your Liked films')
                  }
                >
                  <FAVOURITE_ICON className='size-4' />
                  Follow
                </Button>
                <Button
                  variant='ghost'
                  className='justify-start hover:text-bold hover:bg-white-4 '
                  onClick={() =>
                    toast.success('Film is added to your Liked films')
                  }
                >
                  <FAVOURITE_ICON className='size-4' />
                  Do not recommend
                </Button>
                <Button
                  variant='ghost'
                  className='justify-start hover:text-bold hover:bg-white-4 '
                  onClick={() =>
                    toast.success('Film is added to your Liked films')
                  }
                >
                  <FAVOURITE_ICON className='size-4' />
                  Share
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <button
                type='button'
                className='rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring'
              >
                <RoundButton variant='secondary' icon='hamburger' />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <div className='flex items-center gap-2 pb-3'>
                  <Box className='w-[32px] h-[32px] bg-accent text-accent-foreground rounded-[8px]' />
                  <p> {actor.name} </p>
                </div>
              </DialogHeader>
              <Separator />
              <DialogFooter>
                <div className='flex flex-col w-full'>
                  <Button
                    variant='ghost'
                    className='justify-start hover:text-bold hover:bg-white-4 '
                    onClick={() =>
                      toast.success('Film is added to your Liked films')
                    }
                  >
                    <FAVOURITE_ICON className='size-4' />
                    Follow
                  </Button>
                  <Button
                    variant='ghost'
                    className='justify-start hover:text-bold hover:bg-white-4 '
                    onClick={() =>
                      toast.success('Film is added to your Liked films')
                    }
                  >
                    <FAVOURITE_ICON className='size-4' />
                    Do not recommend
                  </Button>
                  <Button
                    variant='ghost'
                    className='justify-start hover:text-bold hover:bg-white-4 '
                    onClick={() =>
                      toast.success('Film is added to your Liked films')
                    }
                  >
                    <FAVOURITE_ICON className='size-4' />
                    Share
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className='w-full flex flex-col items-center justify-center'>
        <Box className='w-3/4 bg-accent h-96 text-muted-foreground max-lg:w-3/4' />
        <div className='w-full flex justify-between'>
          <p className='w-full'>{actor.name}</p>

          <RoundButton
            variant='primary'
            icon='user'
            onClick={() => toast.success(`You follow ${actor.name} now`)}
          />
        </div>
        <p className='w-full'>{actor.position}</p>
        <div className='flex gap-4 w-full'>
          <div className='flex flex-col'>
            <p>Age</p>
            <p>{actor.age}</p>
          </div>
          <div className='flex flex-col'>
            <p>Born</p>
            <p>{actor.birthplace}</p>
          </div>
          <div className='flex flex-col'>
            <p>Awards</p>
            <p>{actor.awardsNumber}</p>
          </div>
          <div className='flex flex-col'>
            <p>Nominations</p>
            <p>{actor.nominationsNumber}</p>
          </div>
        </div>
        <p className='w-full'>{actor.bio}</p>
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

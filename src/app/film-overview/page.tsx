'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { Box, Heart } from 'lucide-react'
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
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from 'donno-app/components/ui/drawer'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from 'donno-app/components/ui/dialog'
import { RoundButton } from 'donno-app/components/ui/roundButton'
import { useIsMobile } from 'donno-app/hooks/use-mobile'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from 'donno-app/components/ui/accordion'
import { Separator } from 'donno-app/components/ui/separator'

const TABS = [
  { id: 'cast', label: 'Cast' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'crew', label: 'Crew' },
  { id: 'awards', label: 'Awards' },
]

// Icon for the "Add to favourite" button - change this to use a different icon
const FAVOURITE_ICON = Heart

const Page = () => {
  // default to 'cast'
  const [activeTab, setActiveTab] = useState('cast')
  const isMobile = useIsMobile()
  const searchParams = useSearchParams()
  const movieParam = searchParams.get('movie')
  const selectedMovie = useMemo(() => {
    if (!movieParam) {
      return null
    }
    const decodedName = decodeURIComponent(movieParam)
    return sampleMovieOverview.find(
      (item) => item.name.toLowerCase() === decodedName.toLowerCase()
    )
  }, [movieParam])
  const movie = selectedMovie ?? sampleMovieOverview[0]
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
                <p> {movie.name} </p>
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
                  Add to favourite
                </Button>
                <Accordion type='single' collapsible className='p-0'>
                  <AccordionItem value='item-1' className='p-0'>
                    <AccordionTrigger className='p-x pt-2.5 pb-2 hover:bg-white-4 rounded-full w-full items-baseline px-3'>
                      <div className='flex gap-1.5'>
                        <FAVOURITE_ICON className='size-4' />
                        Add to watchlist
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-0'>
                      <Button
                        variant='ghost'
                        className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                        onClick={() =>
                          toast.success('Film is added to your Liked films')
                        }
                      >
                        New folder
                      </Button>

                      <Button
                        variant='ghost'
                        className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                        onClick={() =>
                          toast.success('Film is added to your Liked films')
                        }
                      >
                        Top Films
                      </Button>
                      <Button
                        variant='ghost'
                        className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                        onClick={() =>
                          toast.success('Film is added to your Liked films')
                        }
                      >
                        My top B&W films
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                <Button
                  variant='ghost'
                  className='justify-start hover:text-bold hover:bg-white-4 '
                  onClick={() =>
                    toast.success('Film is added to your Liked films')
                  }
                >
                  <FAVOURITE_ICON className='size-4' />
                  Add to roulette
                </Button>
                <Button
                  variant='ghost'
                  className='justify-start hover:text-bold hover:bg-white-4 '
                  onClick={() =>
                    toast.success('Film is added to your Liked films')
                  }
                >
                  <FAVOURITE_ICON className='size-4' />
                  Do not recommend this film to me again
                </Button>
                <Button
                  variant='ghost'
                  className='justify-start hover:text-bold hover:bg-white-4 '
                  onClick={() =>
                    toast.success('Film is added to your Liked films')
                  }
                >
                  <FAVOURITE_ICON className='size-4' />
                  Already watched
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
                  <p> {movie.name} </p>
                </div>{' '}
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
                    Add to favourite
                  </Button>
                  <Accordion type='single' collapsible className='p-0'>
                    <AccordionItem value='item-1' className='p-0'>
                      <AccordionTrigger className='p-x pt-2.5 pb-2 hover:bg-white-4 rounded-full w-full items-baseline px-3'>
                        <div className='flex gap-1.5'>
                          <FAVOURITE_ICON className='size-4' />
                          Add to watchlist
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='p-0'>
                        <Button
                          variant='ghost'
                          className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                          onClick={() =>
                            toast.success('Film is added to your Liked films')
                          }
                        >
                          New folder
                        </Button>

                        <Button
                          variant='ghost'
                          className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                          onClick={() =>
                            toast.success('Film is added to your Liked films')
                          }
                        >
                          Top Films
                        </Button>
                        <Button
                          variant='ghost'
                          className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                          onClick={() =>
                            toast.success('Film is added to your Liked films')
                          }
                        >
                          My top B&W films
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
                  <Button
                    variant='ghost'
                    className='justify-start hover:text-bold hover:bg-white-4 '
                    onClick={() =>
                      toast.success('Film is added to your Liked films')
                    }
                  >
                    <FAVOURITE_ICON className='size-4' />
                    Add to roulette
                  </Button>
                  <Button
                    variant='ghost'
                    className='justify-start hover:text-bold hover:bg-white-4 '
                    onClick={() =>
                      toast.success('Film is added to your Liked films')
                    }
                  >
                    <FAVOURITE_ICON className='size-4' />
                    Do not recommend this film to me again
                  </Button>
                  <Button
                    variant='ghost'
                    className='justify-start hover:text-bold hover:bg-white-4 '
                    onClick={() =>
                      toast.success('Film is added to your Liked films')
                    }
                  >
                    <FAVOURITE_ICON className='size-4' />
                    Already watched
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className='w-full flex flex-col items-center justify-center'>
        <Box className='w-3/4 bg-accent h-96 text-muted-foreground max-lg:w-3/4' />
        <div className='w-full flex flex-row justify-between'>
          <div>
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
        <div className='flex w-full flex-wrap gap-2'>
          {movie.genres?.map((genre) => (
            <Badge key={genre} variant='secondary'>
              {genre}
            </Badge>
          ))}
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
                <MovieCast movieCast={movie.cast} />
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

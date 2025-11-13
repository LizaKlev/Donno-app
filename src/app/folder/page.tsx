'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useIsMobile } from 'donno-app/hooks/use-mobile'
import { Button } from 'donno-app/components/ui/button'
import { toast } from 'sonner'
import { Heart, Box } from 'lucide-react'

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

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from 'donno-app/components/ui/accordion'
import { Separator } from 'donno-app/components/ui/separator'

const FAVOURITE_ICON = Heart

const Page = () => {
  const isMobile = useIsMobile()
  const searchParams = useSearchParams()
  const folderParam = searchParams.get('folder')
  const folderName = folderParam ? decodeURIComponent(folderParam) : 'Folder'

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
                <p> {folderName} </p>
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
                  <p> {folderName} </p>
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
    </div>
  )
}

export default Page

'use client'
import React, { useState } from 'react'
import { useIsMobile } from 'donno-app/hooks/use-mobile'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'donno-app/components/ui/avatar'
import { Input } from 'donno-app/components/ui/input'
import { RoundButton } from 'donno-app/components/ui/roundButton'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from 'donno-app/components/ui/drawer'
import { Button } from 'donno-app/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from 'donno-app/components/ui/dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'donno-app/components/ui/accordion'

const Page = () => {
  const isMobile = useIsMobile()
  return (
    <div className='px-3 pb-16'>
      <div className='flex'>
        {isMobile ? (
          <Drawer direction='top'>
            <DrawerTrigger asChild>
              <button
                type='button'
                className='rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring'
              >
                <Avatar>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                {/* <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription> */}
              </DrawerHeader>
              <DrawerFooter>
                <Accordion type='single' collapsible>
                  <AccordionItem value='item-1'>
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>{' '}
                <DrawerClose asChild>
                  <Button type='button' variant='outline'>
                    Cancel
                  </Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button type='button' variant='ghost'>
                    Cancel
                  </Button>
                </DrawerClose>
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
                <Avatar>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </button>
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
                <Button type='button' variant='outline'>
                  Cancel
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
        <p>Hi Baby</p>
      </div>
      <Input />
      <p>Home</p>

      <div className='grid grid-cols-2 md:grid-cols-5 grid-rows-3 gap-1'>
        <div className='pt-2.5 pb-4 px-2.5 rounded-3xl h-48 bg-crime-red col-span-2 md:col-span-4 flex flex-col justify-between gap-3'>
          <RoundButton
            variant='tertiary'
            icon='heart'
            className='w-fit'
          ></RoundButton>
          <div>
            <p>Liked films</p>
            <p>183 films • 20 episodes</p>
          </div>
        </div>

        <div className='pt-2.5 pb-4 px-2.5 rounded-3xl h-48 bg-white-4 flex flex-col justify-between gap-3'>
          <RoundButton
            variant='tertiary'
            icon='heart'
            className='w-fit'
          ></RoundButton>
          <div>
            <p>Want to watch</p>
            <p>183 films • 20 episodes</p>
          </div>
        </div>

        <div className='pt-2.5 pb-4 px-2.5 rounded-3xl h-48 bg-musical-purple flex flex-col justify-between gap-3'>
          <RoundButton
            variant='tertiary'
            icon='heart'
            className='w-fit'
          ></RoundButton>
          <div>
            <p>Top films</p>
            <p>183 films • 20 episodes</p>
          </div>
        </div>

        <div className='pt-2.5 pb-4 px-2.5 col-span-2 rounded-3xl h-48 bg-white-4 flex flex-col justify-between gap-3'>
          <RoundButton
            variant='tertiary'
            icon='heart'
            className='w-fit'
          ></RoundButton>
          <div>
            <p>Watched</p>
            <p>183 films • 20 episodes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

'use client'

import {
  RecommendationList,
  sampleRecommendation,
} from 'donno-app/components/Recommendations'
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

const Page = () => {
  const isMobile = useIsMobile()
  return (
    <div className='px-2 pb-20 '>
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

      <div>
        <RecommendationList cast={sampleRecommendation} />
      </div>
    </div>
  )
}

export default Page
